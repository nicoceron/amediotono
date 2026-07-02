"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import type Lenis from "lenis";

const SMOOTH_SCROLL_DISABLED_PATHS = new Set(["/trabaja-con-nosotros"]);
const SMOOTH_SCROLL_TO_EVENT = "mediotono:smooth-scroll-to";
const PENDING_SCROLL_TARGET_KEY = "mediotono:pending-scroll-target";
const SECTION_SCROLL_DURATION_SECONDS = 2;

function getElementByHash(hash: string) {
  const id = hash.startsWith("#") ? hash.slice(1) : hash;
  if (!id) return null;

  try {
    return document.getElementById(decodeURIComponent(id));
  } catch {
    return document.getElementById(id);
  }
}

function getScrollTarget(element: HTMLElement) {
  const selector = element.dataset.scrollTarget;
  const target = selector ? element.querySelector(selector) : null;

  if (target instanceof HTMLElement) {
    return {
      align: target.dataset.scrollAlign || element.dataset.scrollAlign,
      element: target,
    };
  }

  return {
    align: element.dataset.scrollAlign,
    element,
  };
}

function getDocumentOffsetTop(element: HTMLElement) {
  let top = 0;
  let node: HTMLElement | null = element;

  while (node) {
    top += node.offsetTop;
    node = node.offsetParent as HTMLElement | null;
  }

  return top;
}

function scrollToElement(element: HTMLElement, lenis: Lenis | null) {
  const scrollTarget = getScrollTarget(element);
  const target = scrollTarget.element;
  const scrollMargin = parseInt(getComputedStyle(target).scrollMarginTop, 10) || 0;
  const targetHeight = target.offsetHeight || target.getBoundingClientRect().height;
  const centerOffset =
    scrollTarget.align === "center"
      ? -Math.max((window.innerHeight - targetHeight) / 2, 0)
      : -scrollMargin;
  const top = Math.max(getDocumentOffsetTop(target) + centerOffset, 0);

  if (lenis) {
    lenis.resize();
    lenis.scrollTo(top, { duration: SECTION_SCROLL_DURATION_SECONDS });
    return;
  }

  const behavior = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ? "auto"
    : "smooth";
  window.scrollTo({ top, left: 0, behavior });
}

function scrollToTop(lenis: Lenis | null) {
  if (lenis) {
    lenis.scrollTo(0, { immediate: true });
    return;
  }

  window.scrollTo({ top: 0, left: 0 });
}

function scrollToHashTarget(hash: string, lenis: Lenis | null, attempt = 0) {
  const target = getElementByHash(hash);

  if (target) {
    scrollToElement(target, lenis);
    return;
  }

  if (attempt >= 12) return;

  window.requestAnimationFrame(() => {
    scrollToHashTarget(hash, lenis, attempt + 1);
  });
}

export function SmoothScrollProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const smoothScrollDisabled = SMOOTH_SCROLL_DISABLED_PATHS.has(pathname);
  const isInitialPath = useRef(true);
  const isHistoryNavigation = useRef(false);
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    if (smoothScrollDisabled) {
      lenisRef.current?.destroy();
      lenisRef.current = null;
      return;
    }

    let disposed = false;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) {
      lenisRef.current = null;
    } else {
      void import("lenis").then(({ default: Lenis }) => {
        if (disposed) return;

        const lenis = new Lenis({
          autoRaf: true,
          duration: 1,
          smoothWheel: true,
          syncTouch: false,
        });
        lenisRef.current = lenis;

        Array.from(document.getElementsByTagName("*")).forEach((node) => {
          if (node instanceof HTMLElement && getComputedStyle(node).overflow === "auto") {
            node.setAttribute("data-lenis-prevent", "true");
          }
        });
      });
    }

    const handleAnchorClick = (e: MouseEvent) => {
      if (
        e.defaultPrevented ||
        e.button !== 0 ||
        e.metaKey ||
        e.ctrlKey ||
        e.shiftKey ||
        e.altKey
      ) {
        return;
      }

      const target = e.target;
      if (!(target instanceof Element)) return;

      const anchor = target.closest("a[href]") as HTMLAnchorElement | null;
      const href = anchor?.getAttribute("href");
      if (!anchor || !href) return;
      if (anchor.target && anchor.target !== "_self") return;

      const url = new URL(anchor.href);
      const isSamePageHash =
        href.startsWith("#") ||
        (url.origin === window.location.origin &&
          url.pathname === window.location.pathname &&
          Boolean(url.hash));
      if (!isSamePageHash) return;

      const el = getElementByHash(url.hash || href);
      if (!el) return;

      e.preventDefault();
      if (url.hash && window.location.hash !== url.hash) {
        window.history.pushState(null, "", `${url.pathname}${url.search}${url.hash}`);
      }
      scrollToElement(el, lenisRef.current);
    };

    const handlePopState = () => {
      isHistoryNavigation.current = true;
    };

    const handleSmoothScrollTo = (event: Event) => {
      const target = (event as CustomEvent<{ hash?: string }>).detail?.hash;
      if (!target) return;

      const el = getElementByHash(target);
      if (!el) return;

      scrollToElement(el, lenisRef.current);
    };

    document.addEventListener("click", handleAnchorClick);
    window.addEventListener("popstate", handlePopState);
    window.addEventListener(SMOOTH_SCROLL_TO_EVENT, handleSmoothScrollTo);
    return () => {
      disposed = true;
      document.removeEventListener("click", handleAnchorClick);
      window.removeEventListener("popstate", handlePopState);
      window.removeEventListener(SMOOTH_SCROLL_TO_EVENT, handleSmoothScrollTo);
      lenisRef.current?.destroy();
      lenisRef.current = null;
    };
  }, [smoothScrollDisabled]);

  useEffect(() => {
    if (isInitialPath.current) {
      isInitialPath.current = false;
      return;
    }

    if (isHistoryNavigation.current) {
      isHistoryNavigation.current = false;
      return;
    }

    const frame = window.requestAnimationFrame(() => {
      const pendingHash = window.sessionStorage.getItem(PENDING_SCROLL_TARGET_KEY);
      const hash = pendingHash || window.location.hash;

      if (pendingHash) {
        window.sessionStorage.removeItem(PENDING_SCROLL_TARGET_KEY);
      }

      if (hash) {
        scrollToHashTarget(hash, lenisRef.current);
        return;
      }

      scrollToTop(lenisRef.current);
    });

    return () => window.cancelAnimationFrame(frame);
  }, [pathname, smoothScrollDisabled]);

  return <>{children}</>;
}
