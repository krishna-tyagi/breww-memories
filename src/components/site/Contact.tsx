import { Eyebrow, Reveal } from "./Section";
import { Phone, Mail, MapPin, Instagram, Linkedin, MessageCircle } from "lucide-react";

export function Contact() {
  const items = [
    { icon: Phone, label: "Phone", value: "+91 87967-02220", href: "tel:+918796702220" },
    {
      icon: MessageCircle,
      label: "WhatsApp",
      value: "+91 87967-02220",
      href: "https://wa.me/918796702220",
    },
    {
      icon: Mail,
      label: "Email",
      value: "brewwmemories@gmail.com",
      href: "mailto:brewwmemories@gmail.com",
    },
    { icon: MapPin, label: "Region", value: "Delhi NCR, India" },
  ];

  return (
    <section id="contact" className="relative py-28 lg:py-40 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-2 gap-16 items-start">
        <div className="space-y-7">
          <Reveal>
            <Eyebrow>Let's talk</Eyebrow>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-espresso leading-[1.05] text-balance">
              A warm conversation <span className="italic text-gold">starts here.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-lg text-charcoal/70 max-w-md">
              Call, message or write to us. We respond personally — usually within a few hours
              during business days.
            </p>
          </Reveal>

          <Reveal delay={0.3}>
            <ul className="space-y-3 pt-4">
              {items.map((it) => {
                const content = (
                  <>
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-espresso text-cream">
                      <it.icon size={18} strokeWidth={1.6} />
                    </span>
                    <span className="flex flex-col">
                      <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                        {it.label}
                      </span>
                      <span className="text-charcoal">{it.value}</span>
                    </span>
                  </>
                );

                return (
                  <li key={it.label}>
                    {it.href ? (
                      <a
                        href={it.href}
                        target={it.href.startsWith("http") ? "_blank" : undefined}
                        rel="noreferrer"
                        className="flex items-center gap-4 rounded-2xl border border-border bg-card/90 p-5 hover:border-gold hover:-translate-y-0.5 hover:shadow-soft transition-all duration-500 ease-luxe"
                      >
                        {content}
                      </a>
                    ) : (
                      <div className="flex items-center gap-4 rounded-2xl border border-border bg-card/90 p-5 hover:border-gold hover:-translate-y-0.5 hover:shadow-soft transition-all duration-500 ease-luxe">
                        {content}
                      </div>
                    )}
                  </li>
                );
              })}
            </ul>
          </Reveal>

          <Reveal delay={0.4}>
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://www.instagram.com/brewwmemories?utm_source=qr"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card hover:bg-gradient-gold hover:text-cream hover:border-transparent transition-all duration-500 ease-luxe"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://www.linkedin.com/company/breww-memories/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card hover:bg-gradient-gold hover:text-cream hover:border-transparent transition-all duration-500 ease-luxe"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.2}>
          <div className="relative rounded-3xl overflow-hidden border border-border shadow-deep h-[480px] lg:h-[560px] bg-gradient-espresso">
            <iframe
              title="Delhi NCR"
              src="https://www.google.com/maps?q=Delhi%20NCR%2C%20India&output=embed"
              loading="lazy"
              className="absolute inset-0 h-full w-full grayscale-[20%]"
            />
            <div className="absolute bottom-5 left-5 right-5 rounded-2xl bg-cream/95 p-5 border border-border">
              <p className="font-display text-xl text-espresso">Based in Delhi NCR</p>
              <p className="text-sm text-charcoal/70 mt-1">
                Designing experiences across India and beyond.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
