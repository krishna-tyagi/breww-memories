import { useState, type FormEvent } from "react";
import { Eyebrow, Reveal } from "./Section";
import { Send, MessageCircle, Check } from "lucide-react";

// Replace with your Formspree endpoint (e.g. https://formspree.io/f/abcdwxyz)
const FORMSPREE_ENDPOINT = "https://formspree.io/f/your-form-id";

export function Estimate() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState<string | null>(null);

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setErr(null);
    const form = e.currentTarget;
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });
      if (!res.ok) throw new Error("Form error");
      setSent(true);
      form.reset();
    } catch {
      setErr("Something went wrong. Please WhatsApp us at 87967-02220.");
    } finally {
      setLoading(false);
    }
  };

  const field =
    "w-full rounded-xl border border-border bg-cream/60 px-4 py-3 text-sm text-charcoal placeholder:text-muted-foreground focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/30 transition-all";

  return (
    <section id="estimate" className="relative py-28 lg:py-40 bg-gradient-warm grain overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-12 gap-12 lg:gap-16">
        <div className="lg:col-span-5 space-y-7">
          <Reveal><Eyebrow>Get an estimate</Eyebrow></Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-espresso leading-[1.05] text-balance">
              Tell us about your <span className="italic text-gold">brief.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-lg text-charcoal/70 leading-relaxed">
              Share a few details and our team will design a custom proposal for your team —
              usually within 48 hours.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <a
              href="https://wa.me/918796702220"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-espresso text-cream px-6 py-3 text-sm font-medium shadow-soft hover:shadow-glow hover:-translate-y-0.5 transition-all duration-500 ease-luxe"
            >
              <MessageCircle size={16} /> WhatsApp us instead
            </a>
          </Reveal>
        </div>

        <div className="lg:col-span-7">
          <Reveal delay={0.2}>
            <form
              onSubmit={onSubmit}
              className="rounded-3xl border border-border bg-card/80 backdrop-blur-xl p-7 lg:p-10 shadow-soft"
            >

            {sent ? (
              <div className="py-16 text-center space-y-4">
                <div className="mx-auto inline-flex h-14 w-14 items-center justify-center rounded-full bg-gradient-gold text-cream shadow-glow">
                  <Check size={24} />
                </div>
                <h3 className="font-display text-3xl text-espresso">Thank you.</h3>
                <p className="text-charcoal/70 max-w-md mx-auto">
                  You'll receive a customised estimate from our team very soon.
                </p>
              </div>
            ) : (
              <div className="grid sm:grid-cols-2 gap-4">
                <input required name="name" placeholder="Your name" className={field} />
                <input required name="company" placeholder="Company" className={field} />
                <input required type="email" name="email" placeholder="Work email" className={field} />
                <input required name="phone" placeholder="Phone" className={field} />

                <select required name="event_type" className={field} defaultValue="">
                  <option value="" disabled>Event type</option>
                  <option>Corporate Retreat</option>
                  <option>Team Outing</option>
                  <option>Conference</option>
                  <option>Destination Trip</option>
                  <option>Incentive Travel</option>
                  <option>Other</option>
                </select>
                <input required name="people" type="number" min={1} placeholder="Number of people" className={field} />

                <input name="location" placeholder="Preferred location" className={field} />
                <input name="budget" placeholder="Budget (₹)" className={field} />

                <input name="duration" placeholder="Duration (e.g. 3 days)" className={field} />
                <input name="date" type="date" className={field} />

                <div className="sm:col-span-2 grid sm:grid-cols-3 gap-3 pt-1">
                  {["Need travel?", "Need accommodation?", "Need activities?"].map((q) => (
                    <label key={q} className="flex items-center gap-2 rounded-xl border border-border bg-cream/60 px-4 py-3 text-sm cursor-pointer hover:border-gold transition-colors">
                      <input type="checkbox" name={q} className="accent-espresso" />
                      <span>{q}</span>
                    </label>
                  ))}
                </div>

                <textarea
                  name="notes"
                  placeholder="Additional notes — tell us anything that matters"
                  rows={4}
                  className={`${field} sm:col-span-2 resize-none`}
                />

                {err && <p className="sm:col-span-2 text-sm text-destructive">{err}</p>}

                <button
                  type="submit"
                  disabled={loading}
                  className="sm:col-span-2 mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-espresso text-cream px-7 py-4 text-sm font-medium shadow-soft hover:shadow-glow hover:-translate-y-0.5 transition-all duration-500 ease-luxe disabled:opacity-60"
                >
                  {loading ? "Sending..." : "Request my estimate"} <Send size={16} />
                </button>
              </div>
            )}
            </form>
          </Reveal>
        </div>

      </div>
    </section>
  );
}
