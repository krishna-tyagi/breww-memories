import { motion, type Variants } from "framer-motion";
import { type ReactNode } from "react";

export function Reveal({ children, delay = 0, y = 30 }: { children: ReactNode; delay?: number; y?: number }) {
  const variants: Variants = {
    hidden: { opacity: 0, y },
    show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1], delay } },
  };
  return (
    <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.05 }} variants={variants}>
      {children}
    </motion.div>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.35em] text-gold">
      <span className="h-px w-8 bg-gold/60" /> {children}
    </div>
  );
}
