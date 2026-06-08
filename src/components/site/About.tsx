import { Eyebrow, Reveal } from "./Section";
import aboutImg from "@/assets/about.jpg";

export function About() {
  return (
    <section id="about" className="relative py-28 lg:py-40 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        <Reveal>
          <div className="relative">
            <div className="absolute -inset-6 bg-gradient-gold opacity-20 blur-3xl rounded-full" />
            <div className="relative overflow-hidden rounded-2xl shadow-deep">
              <img
                src={aboutImg}
                alt="Colleagues sharing a warm moment over coffee"
                loading="lazy"
                width={1280}
                height={1600}
                className="w-full h-[560px] object-cover hover:scale-105 transition-transform duration-[1500ms] ease-luxe"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 hidden md:block rounded-2xl bg-cream shadow-soft border border-border p-5 max-w-[220px]">
              <p className="font-display text-2xl text-espresso">Since day one</p>
              <p className="text-xs text-muted-foreground mt-1">Built around personal detail, not packages.</p>
            </div>
          </div>
        </Reveal>

        <div className="space-y-7">
          <Reveal><Eyebrow>Our Story</Eyebrow></Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-espresso leading-[1.05] text-balance">
              Every experience<br />
              <span className="italic text-gold">deserves to be brewed with care.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="space-y-5 text-charcoal/80 text-base lg:text-lg leading-relaxed border-l-2 border-gold/40 pl-6">
              <p>
                At Brew Memories, we believe the best memories are never rushed. Just like a perfect
                cup of coffee, meaningful experiences take the right blend of warmth, creativity,
                comfort, and personal touch.
              </p>
              <p>
                The idea of Brew Memories was inspired by two things I truly love — coffee and
                creating unforgettable experiences for people. Coffee has always felt like more than
                just a drink to me; it sparks conversations, comfort, and connections — moments
                people remember. That's exactly what I wanted to create through this brand.
              </p>
              <p>
                While observing the travel and event industry, I realized that most experiences are
                designed around fixed plans and standard packages.{" "}
                <span className="font-medium text-espresso">But people are not standard.</span>{" "}
                Some travelers crave adventure, others want slow mornings and quiet escapes. Some
                companies want retreats that reconnect their teams, others want events that feel
                engaging and meaningful — not just formal gatherings.
              </p>
              <p className="font-display text-xl lg:text-2xl italic text-espresso pt-2">
                "Experiences should be designed around people, not schedules."
              </p>
              <p>
                Whether it's a customized vacation, a relaxing getaway, a corporate trip, a product
                launch, a conference, an employee engagement activity, or a special celebration — we
                carefully plan every detail around the people experiencing it. Because every person,
                every team, and every occasion is different.
              </p>
              <p>
                At Brew Memories, we focus on understanding what our clients truly want — exploration
                or relaxation, celebration or connection, adventure or comfort, energy or peace.
                Instead of offering fixed itineraries or traditional event setups, we craft
                experiences that feel personal, warm, and thoughtfully made.
              </p>
              <p>
                For us, it's not just about organizing trips or managing events. It's about creating
                moments where friends laugh freely, families reconnect, teams bond stronger, and
                memories stay long after the event ends.
              </p>
              <p className="text-espresso">
                Every trip. Every event. Every experience.
                <br />
                <span className="italic">Carefully brewed to become a memory worth keeping.</span>
              </p>
              <p className="text-espresso italic">
                Welcome to Brew Memories — where travel, events, and human connections come together
                beautifully.
              </p>
              <p className="text-espresso italic">-Akshita Tyagi, Founder</p>
            </div>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="grid grid-cols-3 gap-6 pt-4">
              {[
                { k: "100%", v: "Tailored briefs" },
                { k: "Pan-India", v: "Destinations" },
                { k: "End-to-end", v: "Execution" },
              ].map((s) => (
                <div key={s.v}>
                  <p className="font-display text-3xl text-espresso">{s.k}</p>
                  <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mt-1">{s.v}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
