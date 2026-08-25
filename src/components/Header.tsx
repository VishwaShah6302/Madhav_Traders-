import { useEffect, useState } from "react";
import { BUSINESS, NAV_LINKS } from "../lib/data";
import { Logo, MenuIcon, CloseIcon, PhoneIcon } from "./Icons";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const callHref = `tel:${BUSINESS.phone}`;
  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#fdfbf6]/90 backdrop-blur-xl border-b border-[#1c2a1e]/8 shadow-[0_1px_3px_rgba(28,42,30,0.05)]"
          : "bg-[#fdfbf6]/70 backdrop-blur-md"
      }`}
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 flex items-center justify-between h-[72px]">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-3 group">
          <Logo />
          <div className="leading-tight">
            <div className="font-display text-[19px] sm:text-[21px] text-forest-800 tracking-tight">
              Madhav Traders
            </div>
            <div className="text-[10px] sm:text-[11px] uppercase tracking-[0.22em] text-gold-600 font-medium">
              Since 2010 · Vadodara
            </div>
          </div>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="relative px-4 py-2 text-[14px] text-ink-700 hover:text-forest-700 transition-colors group"
            >
              {l.label}
              <span className="absolute left-4 right-4 -bottom-0.5 h-px bg-gold-400 scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
            </a>
          ))}
        </nav>

        {/* CTA Phone */}
        <a
          href={callHref}
          className="hidden md:inline-flex items-center gap-2 rounded-full bg-forest-600 hover:bg-forest-700 text-[#fdfbf6] px-4 py-2 text-[13px] font-medium shadow-warm transition-all hover:shadow-warm-lg hover:-translate-y-0.5"
        >
          <PhoneIcon size={14} className="text-gold-200" />
          {BUSINESS.phoneDisplay}
        </a>

        {/* Mobile menu button */}
        <button
          aria-label="Toggle menu"
          onClick={() => setOpen(!open)}
          className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-full bg-forest-600 text-[#fdfbf6]"
        >
          {open ? <CloseIcon size={20} /> : <MenuIcon size={20} />}
        </button>
      </div>

      {/* Mobile drawer */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          open ? "max-h-[420px] border-t border-[#1c2a1e]/8" : "max-h-0"
        }`}
      >
        <nav className="px-5 py-4 flex flex-col gap-1 bg-[#fdfbf6]">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="px-4 py-3 rounded-xl text-[15px] text-ink-700 hover:bg-cream-2 hover:text-forest-700 transition-colors border border-transparent hover:border-[#1c2a1e]/8"
            >
              {l.label}
            </a>
          ))}
          <a
            href={callHref}
            className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-forest-600 text-[#fdfbf6] px-5 py-3 text-[14px] font-medium"
          >
            <PhoneIcon size={14} className="text-gold-200" />
            {BUSINESS.phoneDisplay}
          </a>
        </nav>
      </div>
    </header>
  );
}