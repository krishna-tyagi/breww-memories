import { type ReactNode, useEffect, useRef, useState } from "react";

export function Reveal({ children, delay = 0 }: { children: ReactNode; delay?: number }) {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`reveal ${visible ? "is-visible" : ""}`}
      style={{ transitionDelay: visible ? `${delay}s` : "0s" }}
    >
      {children}
    </div>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.35em] text-gold">
      <span className="h-px w-8 bg-gold/60" />
      {children}
    </div>
  );
}
