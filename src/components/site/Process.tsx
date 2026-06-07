import { Eyebrow, Reveal } from "./Section";
import { motion } from "framer-motion";

const steps = [
  { n: "01", title: "Understand your vision", desc: "We listen — to your team, your goals, your culture. The brief shapes everything." },
  { n: "02", title: "Curate the experience", desc: "Destinations, stays, vendors, moments. A design document, not a spreadsheet." },
  { n: "03", title: "Execute flawlessly", desc: "On-ground hospitality, real-time problem solving, a calm presence behind the scenes." },
  { n: "04", title: "Brew unforgettable memories", desc: "The kind your team retells for years — and your leadership remembers in every review." },
];

export function Process() {
  return (
    <section id="process" className="relative py-28 lg:py-40 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-3xl mb-20 space-y-6">
          <Reveal><Eyebrow>Our process</Eyebrow></Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-espresso leading-[1.05] text-balance">
              Four steps. <span className="italic text-gold">Zero compromises.</span>
            </h2>
          </Reveal>
        </div>

        <div className="relative">
          <div className="absolute left-8 lg:left-1/2 lg:-translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gold/40 to-transparent" />
          <div className="space-y-16 lg:space-y-24">
            {steps.map((s, i) => (
              <motion.div
                key={s.n}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.05 }}
                transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                className={`relative grid lg:grid-cols-2 gap-8 items-center ${i % 2 ? "lg:[&>*:first-child]:order-2" : ""}`}
              >
                <div className={`pl-20 lg:pl-0 ${i % 2 ? "lg:pl-16" : "lg:pr-16 lg:text-right"}`}>
                  <p className="font-display text-7xl lg:text-8xl bg-gradient-gold bg-clip-text text-transparent">{s.n}</p>
                  <h3 className="font-display text-3xl lg:text-4xl text-espresso mt-2">{s.title}</h3>
                  <p className="text-charcoal/70 mt-3 leading-relaxed max-w-md lg:ml-auto">{s.desc}</p>
                </div>

                <div className="absolute left-8 lg:left-1/2 lg:-translate-x-1/2 top-2 h-4 w-4 rounded-full bg-gradient-gold shadow-glow ring-4 ring-background" />
                <div className="hidden lg:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
