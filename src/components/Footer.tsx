import { BUSINESS, NAV_LINKS } from "../lib/data";
import { Logo, PhoneIcon, WhatsAppIcon, MapPinIcon, ClockIcon } from "./Icons";

export default function Footer() {
  return (
    <footer className="relative bg-forest-800 text-gold-100/85 pt-16 pb-24 sm:pb-10 overflow-hidden">
      {/* Decorative */}
      <div className="pointer-events-none absolute -top-20 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-gold-400/8 blur-3xl" />
      <div className="absolute inset-0 paper-texture opacity-30 pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid lg:grid-cols-12 gap-10">
          {/* Brand */}
          <div className="lg:col-span-5">
            <a href="#home" className="inline-flex items-center gap-3">
              <Logo />
              <div>
                <div className="font-display text-[20px] text-[#fdfbf6] leading-tight">
                  Madhav Traders
                </div>
                <div className="text-[11px] uppercase tracking-[0.22em] text-gold-200 mt-0.5">
                  Grocery &amp; Food Products
                </div>
              </div>
            </a>
            <p className="mt-5 text-[14px] leading-relaxed text-gold-100/75 max-w-md">
              Your reliable retail &amp; wholesale grocery partner in Vadodara since 2010. Quality
              staples, dry fruits and imported goods — all under one roof.
            </p>

            <div className="mt-6 flex gap-3">
              <a
                href={`tel:${BUSINESS.phone}`}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gold-400 hover:bg-gold-500 text-forest-800 px-4 py-2.5 text-[13px] font-semibold transition-all"
              >
                <PhoneIcon size={14} />
                Call
              </a>
              <a
                href={`https://wa.me/${BUSINESS.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-gold-400/40 hover:border-gold-400 text-gold-100 hover:text-gold-200 px-4 py-2.5 text-[13px] font-semibold transition-all"
              >
                <WhatsAppIcon size={14} />
                WhatsApp
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div className="lg:col-span-3">
            <div className="text-[11px] uppercase tracking-[0.22em] text-gold-200 font-semibold">
              Quick Links
            </div>
            <ul className="mt-5 space-y-2.5">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-[14px] text-gold-100/80 hover:text-gold-200 transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-4">
            <div className="text-[11px] uppercase tracking-[0.22em] text-gold-200 font-semibold">
              Visit Us
            </div>
            <ul className="mt-5 space-y-4 text-[14px] text-gold-100/80">
              <li className="flex gap-3">
                <MapPinIcon size={20} className="text-gold-400 mt-0.5 shrink-0" />
                <span className="leading-relaxed">{BUSINESS.address}</span>
              </li>
              <li className="flex gap-3">
                <PhoneIcon size={18} className="text-gold-400 mt-0.5 shrink-0" />
                <a href={`tel:${BUSINESS.phone}`} className="hover:text-gold-200 transition">
                  {BUSINESS.phoneDisplay}
                </a>
              </li>
              <li className="flex gap-3">
                <ClockIcon size={20} className="text-gold-400 mt-0.5 shrink-0" />
                <span>{BUSINESS.hours}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-gold-100/10 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-[12px] text-gold-100/55">
            © {new Date().getFullYear()} {BUSINESS.name}. All rights reserved.
          </div>
          <div className="text-[12px] text-gold-100/55">
            Crafted with care in Vadodara.
          </div>
        </div>
      </div>
    </footer>
  );
}