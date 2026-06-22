"use client";

import Link from "next/link";
import { Star } from "lucide-react";
import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useReducedMotion,
} from "motion/react";
import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type KeyboardEvent,
  type MouseEvent,
  type PointerEvent,
} from "react";
import { FEATURED_QUOTES } from "@/lib/teachers";

function trimQuote(text: string, maxChars = 130): string {
  if (text.length <= maxChars) return text;
  const slice = text.slice(0, maxChars);
  const lastSpace = slice.lastIndexOf(" ");
  return `${slice.slice(0, lastSpace > 0 ? lastSpace : maxChars).trim()}…`;
}

const DRAG_THRESHOLD = 4;
const AUTO_SPEED = 38; // px/sec
const KEYBOARD_STEP = 320;
const MOMENTUM_DECAY = 0.0042;
const MIN_MOMENTUM_VELOCITY = 0.025;
const MAX_MOMENTUM_VELOCITY = 2.4;

type DragState = {
  pointerId: number | null;
  startClientX: number;
  startOffset: number;
  lastClientX: number;
  lastTime: number;
  velocity: number;
  moved: boolean;
};

function wrapOffset(value: number, width: number) {
  if (width <= 0) return value;
  const wrapped = ((value % width) + width) % width;
  return wrapped === 0 ? 0 : wrapped - width;
}

function clampVelocity(velocity: number) {
  return Math.max(
    -MAX_MOMENTUM_VELOCITY,
    Math.min(MAX_MOMENTUM_VELOCITY, velocity),
  );
}

export function TestimoniosSection() {
  const reduce = useReducedMotion();
  const trackRef = useRef<HTMLDivElement>(null);
  const suppressClickResetRef = useRef<number | null>(null);
  const momentumFrameRef = useRef<number | null>(null);
  const dragRef = useRef<DragState>({
    pointerId: null,
    startClientX: 0,
    startOffset: 0,
    lastClientX: 0,
    lastTime: 0,
    velocity: 0,
    moved: false,
  });
  const suppressClickRef = useRef(false);
  const x = useMotionValue(0);
  const [isDragging, setIsDragging] = useState(false);

  const items = [...FEATURED_QUOTES, ...FEATURED_QUOTES];

  const getLoopWidth = useCallback(() => {
    const track = trackRef.current;
    return track ? track.scrollWidth / 2 : 0;
  }, []);

  const setWrappedOffset = useCallback(
    (next: number) => {
      x.set(wrapOffset(next, getLoopWidth()));
    },
    [getLoopWidth, x],
  );

  const stopMomentum = useCallback(() => {
    if (momentumFrameRef.current) {
      window.cancelAnimationFrame(momentumFrameRef.current);
      momentumFrameRef.current = null;
    }
  }, []);

  const startMomentum = useCallback(
    (initialVelocity: number) => {
      stopMomentum();

      if (reduce || Math.abs(initialVelocity) < MIN_MOMENTUM_VELOCITY) return;

      let velocity = clampVelocity(initialVelocity);
      let previous = performance.now();

      const tick = (now: number) => {
        const delta = Math.min(now - previous, 32);
        previous = now;

        setWrappedOffset(x.get() + velocity * delta);
        velocity *= Math.exp(-MOMENTUM_DECAY * delta);

        if (Math.abs(velocity) >= MIN_MOMENTUM_VELOCITY) {
          momentumFrameRef.current = window.requestAnimationFrame(tick);
          return;
        }

        momentumFrameRef.current = null;
      };

      momentumFrameRef.current = window.requestAnimationFrame(tick);
    },
    [reduce, setWrappedOffset, stopMomentum, x],
  );

  const handlePointerDown = useCallback(
    (event: PointerEvent<HTMLDivElement>) => {
      if (!event.isPrimary) return;
      if (event.pointerType === "mouse" && event.button !== 0) return;

      stopMomentum();

      dragRef.current = {
        pointerId: event.pointerId,
        startClientX: event.clientX,
        startOffset: x.get(),
        lastClientX: event.clientX,
        lastTime: performance.now(),
        velocity: 0,
        moved: false,
      };
      setIsDragging(true);
      event.currentTarget.setPointerCapture(event.pointerId);
    },
    [stopMomentum, x],
  );

  const handlePointerMove = useCallback(
    (event: PointerEvent<HTMLDivElement>) => {
      const drag = dragRef.current;
      if (drag.pointerId !== event.pointerId) return;

      const delta = event.clientX - drag.startClientX;
      if (Math.abs(delta) <= DRAG_THRESHOLD && !drag.moved) return;

      const now = performance.now();
      const elapsed = Math.max(now - drag.lastTime, 1);
      drag.velocity = (event.clientX - drag.lastClientX) / elapsed;
      drag.lastClientX = event.clientX;
      drag.lastTime = now;
      drag.moved = true;
      event.preventDefault();
      setWrappedOffset(drag.startOffset + delta);
    },
    [setWrappedOffset],
  );

  const finishDrag = useCallback(
    (event: PointerEvent<HTMLDivElement>) => {
      const drag = dragRef.current;
      if (drag.pointerId !== event.pointerId) return;

      const didMove = drag.moved;
      const velocity = drag.velocity;
      suppressClickRef.current = didMove;
      if (suppressClickResetRef.current) {
        window.clearTimeout(suppressClickResetRef.current);
      }
      suppressClickResetRef.current = window.setTimeout(() => {
        suppressClickRef.current = false;
        suppressClickResetRef.current = null;
      }, 350);
      dragRef.current = {
        pointerId: null,
        startClientX: 0,
        startOffset: 0,
        lastClientX: 0,
        lastTime: 0,
        velocity: 0,
        moved: false,
      };
      setIsDragging(false);

      if (event.currentTarget.hasPointerCapture(event.pointerId)) {
        event.currentTarget.releasePointerCapture(event.pointerId);
      }

      if (didMove) {
        startMomentum(velocity);
      }
    },
    [startMomentum],
  );

  const handleClickCapture = useCallback((event: MouseEvent<HTMLDivElement>) => {
    if (!suppressClickRef.current) return;

    suppressClickRef.current = false;
    if (suppressClickResetRef.current) {
      window.clearTimeout(suppressClickResetRef.current);
      suppressClickResetRef.current = null;
    }
    event.preventDefault();
    event.stopPropagation();
  }, []);

  const handleKeyDown = useCallback(
    (event: KeyboardEvent<HTMLDivElement>) => {
      if (event.key !== "ArrowLeft" && event.key !== "ArrowRight") return;

      event.preventDefault();
      stopMomentum();
      setWrappedOffset(
        x.get() + (event.key === "ArrowLeft" ? KEYBOARD_STEP : -KEYBOARD_STEP),
      );
    },
    [setWrappedOffset, stopMomentum, x],
  );

  useEffect(() => {
    return () => {
      stopMomentum();
      if (suppressClickResetRef.current) {
        window.clearTimeout(suppressClickResetRef.current);
      }
    };
  }, [stopMomentum]);

  useAnimationFrame((_, delta) => {
    if (reduce || isDragging || momentumFrameRef.current) return;

    setWrappedOffset(x.get() - (AUTO_SPEED * delta) / 1000);
  });

  return (
    <section
      className="block voces-block"
      id="testimonios"
      data-screen-label="Voces"
    >
      <div className="container">
        <div className="sec-head voces-head">
          <h2 className="voces-title">Lo que dicen las familias</h2>
        </div>

        <div
          className={`voces-marquee${isDragging ? " voces-marquee--dragging" : ""}`}
          data-lenis-prevent="true"
          tabIndex={0}
          aria-label="Reseñas de familias"
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={finishDrag}
          onPointerCancel={finishDrag}
          onLostPointerCapture={finishDrag}
          onClickCapture={handleClickCapture}
          onDragStart={(event) => event.preventDefault()}
          onKeyDown={handleKeyDown}
        >
          <span className="voces-halo voces-halo-1" aria-hidden="true" />
          <span className="voces-halo voces-halo-2" aria-hidden="true" />
          <span className="voces-halo voces-halo-3" aria-hidden="true" />
          <motion.div
            ref={trackRef}
            className="voces-marquee-track"
            style={{ x }}
          >
            {items.map((q, i) => (
              <Link
                href={`/profes/${q.teacherSlug}`}
                key={`${q.id}-${i}`}
                className="voces-card-link"
                aria-label={`Ver perfil de ${q.teacherName}`}
                draggable={false}
              >
                <article
                  className="voces-card"
                  style={{ "--voice-color": q.color } as CSSProperties & Record<"--voice-color", string>}
                >
                  <div className="voces-stars" aria-hidden="true">
                    {[0, 1, 2, 3, 4].map((s) => (
                      <Star
                        key={s}
                        size={18}
                        fill="currentColor"
                        strokeWidth={0}
                      />
                    ))}
                  </div>
                  <p className="voces-card-quote">{trimQuote(q.quote, 130)}</p>
                  <footer className="voces-card-foot">
                    <strong>{q.author}</strong>
                    <span>
                      Estudiante de {q.teacherShortName}
                      {q.instrument ? ` · ${q.instrument}` : ""}
                    </span>
                  </footer>
                </article>
              </Link>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
