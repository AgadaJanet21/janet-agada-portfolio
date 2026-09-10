import { useEffect, useRef, useState } from "react";

/**
 * Counts up to a numeric value when it scrolls into view.
 * Non-numeric values (e.g. "Live", "₦3.2M", "Phase 1") render as-is.
 * Respects prefers-reduced-motion and is SSR-safe.
 */
export function CountUp({ value, className }: { value: string; className?: string }) {
  const match = value.match(/^(\d[\d,]*)(.*)$/);
  const target = match ? parseInt(match[1].replace(/,/g, ""), 10) : null;
  const suffix = match ? match[2] : "";
  const [display, setDisplay] = useState(value);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    if (target === null) return;
    const el = ref.current;
    if (!el) return;
    const reduce =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    if (reduce || typeof IntersectionObserver === "undefined") return;

    setDisplay("0" + suffix);
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting && !started.current) {
            started.current = true;
            io.disconnect();
            const duration = 1100;
            const startTime = performance.now();
            const step = (now: number) => {
              const p = Math.min(1, (now - startTime) / duration);
              const eased = 1 - Math.pow(1 - p, 3);
              setDisplay(Math.round(eased * target).toString() + suffix);
              if (p < 1) requestAnimationFrame(step);
            };
            requestAnimationFrame(step);
          }
        }
      },
      { threshold: 0.6 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [target, suffix]);

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  );
}
