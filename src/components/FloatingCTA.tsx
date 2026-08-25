import { useEffect, useState } from "react";
import { BUSINESS } from "../lib/data";
import { PhoneIcon, WhatsAppIcon } from "./Icons";

export default function FloatingCTA() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 240);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const callHref = `tel:${BUSINESS.phone}`;
  const waHref = `https://wa.me/${BUSINESS.whatsapp}?text=${encodeURIComponent(
    "Hello Madhav Traders, I'd like to enquire about your products."
  )}`;

  return (
    <div
      aria-hidden={!show}
      className={`fixed z-40 right-3 sm:right-5 bottom-3 sm:bottom-5 flex flex-col gap-2.5 transition-all duration-300 ${
        show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
      }`}
    >
      <a
        href={callHref}
        className="group relative flex items-center gap-3 rounded-full bg-forest-600 hover:bg-forest-700 text-[#fdfbf6] px-4 sm:px-5 py-3 shadow-warm-lg transition-all hover:-translate-y-0.5"
      >
        <span className="absolute -inset-1 rounded-full bg-gold-400/30 blur opacity-0 group-hover:opacity-100 transition" />
        <span className="relative flex h-8 w-8 items-center justify-center rounded-full bg-gold-400 text-forest-800">
          <PhoneIcon size={14} />
        </span>
        <span className="relative hidden sm:inline text-[13px] font-semibold tracking-wide">
          Call Now
        </span>
      </a>
      <a
        href={waHref}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center gap-3 rounded-full bg-[#25D366] hover:bg-[#1ebe5d] text-white px-4 sm:px-5 py-3 shadow-warm-lg transition-all hover:-translate-y-0.5"
      >
        <span className="relative flex h-8 w-8 items-center justify-center rounded-full bg-white/15 text-white">
          <WhatsAppIcon size={16} />
        </span>
        <span className="relative hidden sm:inline text-[13px] font-semibold tracking-wide">
          WhatsApp
        </span>
      </a>
    </div>
  );
}