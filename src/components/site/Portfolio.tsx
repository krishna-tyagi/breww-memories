import { Eyebrow, Reveal } from "./Section";
import p1 from "@/assets/portfolio-1.jpg";
import p2 from "@/assets/portfolio-2.jpg";
import p3 from "@/assets/portfolio-3.jpg";

const items = [
  {
    img: p1,
    kicker: "Hill-station retreat",
    title: "A founders' offsite in the Himalayas",
    tag: "Retreat · 40 pax",
  },
  {
    img: p2,
    kicker: "Annual conference",
    title: "A boutique-hotel conference in Delhi",
    tag: "Conference · 220 pax",
  },
  {
    img: p3,
    kicker: "Destination celebration",
    title: "A coastal getaway for a milestone celebration",
    tag: "Getaway · 80 pax",
  },
];

export function Portfolio() {
  return (
    <section id="portfolio" className="relative py-28 lg:py-40 bg-gradient-warm overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
          <div className="max-w-2xl space-y-6">
            <Reveal>
              <Eyebrow>Selected work</Eyebrow>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-espresso leading-[1.05] text-balance">
                Moments we've <span className="italic text-gold">brewed.</span>
              </h2>
            </Reveal>
          </div>
        </div>

        <div className="space-y-8 lg:space-y-12">
          {items.map((it, i) => (
            <a
              key={it.title}
              href="#contact"
              className={`group relative grid lg:grid-cols-12 gap-6 lg:gap-10 items-center ${i % 2 ? "lg:[&>*:first-child]:order-2" : ""}`}
            >
              <div className="lg:col-span-8 relative overflow-hidden rounded-2xl shadow-deep">
                <img
                  src={it.img}
                  alt={it.title}
                  loading="lazy"
                  width={1280}
                  height={960}
                  className="w-full h-[360px] lg:h-[520px] object-cover transition-transform duration-[1600ms] ease-luxe group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-espresso/60 via-transparent to-transparent" />
              </div>
              <div className="lg:col-span-4 space-y-4 lg:p-6">
                <p className="text-[11px] uppercase tracking-[0.3em] text-gold">{it.kicker}</p>
                <h3 className="font-display text-3xl lg:text-4xl text-espresso group-hover:text-gold transition-colors duration-500 ease-luxe text-balance">
                  {it.title}
                </h3>
                <p className="text-sm text-muted-foreground">{it.tag}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
