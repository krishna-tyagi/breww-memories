import { Instagram, Linkedin } from "lucide-react";
import logo from "@/assets/logo-mark.png";


const links = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#process", label: "Process" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="relative bg-gradient-espresso text-cream grain overflow-hidden">
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 h-[400px] w-[800px] rounded-full bg-gold/10 blur-[120px] pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10 py-20">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5 space-y-5">
            <img
              src={logo}
              alt="Breww Memories"
              width={220}
              height={80}
              className="h-20 w-auto object-contain brightness-110 -ml-2"
            />
            <p className="font-display text-3xl lg:text-4xl italic text-beige max-w-md leading-tight">
              Brewing unforgettable experiences.
            </p>
          </div>


          <div className="lg:col-span-4">
            <p className="text-[10px] uppercase tracking-[0.3em] text-cream/50 mb-5">Navigate</p>
            <ul className="grid grid-cols-2 gap-3">
              {links.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-cream/85 hover:text-gold transition-colors">{l.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3 space-y-4">
            <p className="text-[10px] uppercase tracking-[0.3em] text-cream/50">Reach us</p>
            <p className="text-cream/85 text-sm leading-relaxed">
              +91 87967-02220<br />
              brewwmemories@gmail.com<br />
              Delhi NCR, India
            </p>
            <div className="flex gap-3 pt-1">
              <a href="https://www.instagram.com/brewwmemories?utm_source=qr" target="_blank" rel="noreferrer" aria-label="Instagram" className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-cream/20 hover:bg-gold hover:border-transparent hover:text-espresso transition-all duration-500 ease-luxe">
                <Instagram size={16} />
              </a>
              <a href="https://www.linkedin.com/company/breww-memories" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-cream/20 hover:bg-gold hover:border-transparent hover:text-espresso transition-all duration-500 ease-luxe">
                <Linkedin size={16} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-cream/10 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 text-xs text-cream/55">
          <p>© {new Date().getFullYear()} Breww Memories. All rights reserved.</p>
          <p>brewwmemories.com</p>
        </div>
      </div>
    </footer>
  );
}
