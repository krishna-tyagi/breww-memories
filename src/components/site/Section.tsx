import { type ReactNode } from "react";

export function Reveal({ children }: { children: ReactNode; delay?: number }) {
  return <>{children}</>;
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.35em] text-gold">
      <span className="h-px w-8 bg-gold/60" />
      {children}
    </div>
  );
}
