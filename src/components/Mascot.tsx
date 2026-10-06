import { useEffect, useRef, useState } from "react";

/**
 * "Volt" — personaje de marca. Bloque geométrico con dos ojos que
 * siguen suavemente el cursor y hacen un movimiento idle.
 */
export function Mascot({ size = 64, className = "" }: { size?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [gaze, setGaze] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const onMove = (e: PointerEvent) => {
      const el = ref.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      const dx = e.clientX - (r.left + r.width / 2);
      const dy = e.clientY - (r.top + r.height / 2);
      const dist = Math.hypot(dx, dy) || 1;
      const max = 3;
      setGaze({ x: (dx / dist) * max, y: (dy / dist) * max });
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, []);

  const eye = { transform: `translate(${gaze.x}px, ${gaze.y}px)` };

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className={`relative shrink-0 anim-float ${className}`}
      style={{ width: size, height: size }}
    >
      <div className="absolute inset-0 rounded-2xl bg-volt/90 rotate-6 glow-volt" />
      <div className="absolute inset-0 rounded-2xl bg-ink/90 -rotate-6 grid place-items-center ring-1 ring-line">
        <div className="flex gap-1.5">
          <span
            className="size-2 rounded-full bg-volt anim-node transition-transform duration-200"
            style={eye}
          />
          <span
            className="size-2 rounded-full bg-volt anim-node transition-transform duration-200"
            style={eye}
          />
        </div>
      </div>
    </div>
  );
}
