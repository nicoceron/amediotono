"use client";

import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type VideoHTMLAttributes,
} from "react";

type LazyVideoProps = Omit<VideoHTMLAttributes<HTMLVideoElement>, "preload" | "src"> & {
  loadGroup?: string;
  rootMargin?: string;
  src: string;
};

const LOAD_GROUP_EVENT = "amediotono:lazy-video-load-group";
const loadedGroups = new Set<string>();

function markLoadGroup(loadGroup: string | undefined) {
  if (!loadGroup || loadedGroups.has(loadGroup)) return;

  loadedGroups.add(loadGroup);
  window.dispatchEvent(new CustomEvent(LOAD_GROUP_EVENT, { detail: loadGroup }));
}

export function LazyVideo({
  loadGroup,
  poster,
  rootMargin = "500px",
  src,
  ...props
}: LazyVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [shouldLoad, setShouldLoad] = useState(() => (
    loadGroup ? loadedGroups.has(loadGroup) : false
  ));

  const triggerLoad = useCallback(() => {
    markLoadGroup(loadGroup);
    setShouldLoad(true);
  }, [loadGroup]);

  useEffect(() => {
    if (!loadGroup || shouldLoad) return;

    const handleGroupLoad = (event: Event) => {
      if ((event as CustomEvent<string>).detail === loadGroup) {
        setShouldLoad(true);
      }
    };

    window.addEventListener(LOAD_GROUP_EVENT, handleGroupLoad);
    return () => window.removeEventListener(LOAD_GROUP_EVENT, handleGroupLoad);
  }, [loadGroup, shouldLoad]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || shouldLoad) return;

    if (typeof IntersectionObserver === "undefined") {
      const timeout = setTimeout(triggerLoad, 0);
      return () => clearTimeout(timeout);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) return;
        triggerLoad();
        observer.disconnect();
      },
      { rootMargin },
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, [rootMargin, shouldLoad, triggerLoad]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !shouldLoad) return;

    video.load();
    const play = video.play();
    if (play) void play.catch(() => {});
  }, [shouldLoad]);

  return (
    <video
      ref={videoRef}
      src={shouldLoad ? src : undefined}
      poster={shouldLoad ? poster : undefined}
      preload={shouldLoad ? "metadata" : "none"}
      autoPlay={shouldLoad}
      {...props}
    />
  );
}
