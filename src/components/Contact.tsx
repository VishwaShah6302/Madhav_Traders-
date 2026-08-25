import { motion } from "framer-motion";
import { BUSINESS } from "../lib/data";
import { MapPinIcon, PhoneIcon, ClockIcon, MailIcon, LeafOrnament } from "./Icons";

export default function Contact() {
  return (
    <section id="contact" className="relative py-20 sm:py-28 bg-gradient-to-b from-[#f7f1e3] to-[#fdfbf6]">
      <div className="pointer-events-none absolute inset-0 paper-texture opacity-40" />
      <div className="mx-auto max-w-7xl px-5 sm:px-8 relative">
        <div className="text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full border border-gold-400/40 bg-[#fdfbf6] px-3 py-1 shadow-warm">
            <span className="h-1.5 w-1.5 rounded-full bg-gold-400" />
            <span className="text-[11px] uppercase tracking-[0.22em] text-forest-700 font-medium">
              Visit / Call Us
            </span>
          </div>
          <h2 className="mt-5 font-display text-[36px] sm:text-[52px] leading-[1.04] text-ink-900 text-balance">
            We'd love to <span className="gold-foil">welcome you</span>.
          </h2>
          <p className="mt-5 text-[15px] sm:text-[16px] text-ink-700 leading-relaxed text-pretty">
            Stop by our store in Vadodara or reach us by phone or WhatsApp — we're open every
            day of the week.
          </p>
          <div className="mt-6 flex justify-center">
            <LeafOrnament />
          </div>
        </div>

        <div className="mt-12 grid lg:grid-cols-12 gap-5 sm:gap-6">
          {/* Address card */}
          <motion.a
            href={BUSINESS.mapsLink}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 group rounded-[1.5rem] bg-[#fdfbf6] border border-[#1c2a1e]/8 p-7 sm:p-8 shadow-warm hover:shadow-warm-lg hover:-translate-y-1 transition-all relative overflow-hidden"
          >
            <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-forest-600/8 blur-2xl" />
            <div className="relative">
              <div className="flex items-center gap-3">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-forest-50 to-gold-100 border border-gold-400/30">
                  <MapPinIcon size={24} className="text-forest-700" />
                </span>
                <div>
                  <div className="text-[11px] uppercase tracking-[0.22em] text-gold-600 font-semibold">
                    Store Address
                  </div>
                  <div className="font-display text-[20px] text-forest-800 leading-tight mt-0.5">
                    New Sama Road, Vadodara
                  </div>
                </div>
              </div>
              <p className="mt-5 text-[14px] text-ink-700 leading-relaxed">
                {BUSINESS.address}
              </p>
              <div className="mt-6 inline-flex items-center gap-2 text-forest-700 group-hover:text-forest-800 text-[13px] font-semibold">
                Open in Google Maps
                <svg viewBox="0 0 24 24" width="14" height="14" fill="none">
                  <path d="M5 12 H19 M13 6 L19 12 L13 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>
          </motion.a>

          {/* Phone card */}
          <motion.a
            href={`tel:${BUSINESS.phone}`}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="lg:col-span-4 group rounded-[1.5rem] bg-gradient-to-br from-forest-700 to-forest-800 text-[#fdfbf6] p-7 sm:p-8 shadow-warm-lg hover:-translate-y-1 transition-all relative overflow-hidden"
          >
            <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-gold-400/15 blur-2xl" />
            <div className="relative">
              <div className="flex items-center gap-3">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gold-400 text-forest-800">
                  <PhoneIcon size={20} />
                </span>
                <div>
                  <div className="text-[11px] uppercase tracking-[0.22em] text-gold-200 font-semibold">
                    Call Us
                  </div>
                  <div className="font-display text-[20px] leading-tight mt-0.5">
                    {BUSINESS.phoneDisplay}
                  </div>
                </div>
              </div>
              <p className="mt-5 text-[14px] text-gold-100/85 leading-relaxed">
                Tap to call. We answer queries about pricing, availability and bulk orders.
              </p>
              <div className="mt-6 inline-flex items-center gap-2 text-gold-200 text-[13px] font-semibold">
                Call Now
                <svg viewBox="0 0 24 24" width="14" height="14" fill="none">
                  <path d="M5 12 H19 M13 6 L19 12 L13 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>
          </motion.a>

          {/* Hours card */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.16 }}
            className="lg:col-span-3 rounded-[1.5rem] bg-[#fdfbf6] border border-[#1c2a1e]/8 p-7 sm:p-8 shadow-warm relative overflow-hidden"
          >
            <div className="absolute -bottom-10 -right-10 w-40 h-40 rounded-full bg-gold-400/10 blur-2xl" />
            <div className="relative">
              <div className="flex items-center gap-3">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-forest-50 to-gold-100 border border-gold-400/30">
                  <ClockIcon size={24} className="text-forest-700" />
                </span>
                <div>
                  <div className="text-[11px] uppercase tracking-[0.22em] text-gold-600 font-semibold">
                    Hours
                  </div>
                  <div className="font-display text-[16px] text-forest-800 leading-tight mt-0.5">
                    Open Every Day
                  </div>
                </div>
              </div>
              <div className="mt-5 text-[14px] text-ink-700 leading-relaxed">
                Monday – Sunday
                <br />
                <span className="font-display text-forest-700 text-[20px]">9:30 AM – 9:00 PM</span>
              </div>
              <div className="mt-5 inline-flex items-center gap-2 rounded-full bg-forest-50 border border-forest-600/15 px-3 py-1.5 text-[12px] text-forest-700 font-semibold">
                <span className="h-1.5 w-1.5 rounded-full bg-forest-600 animate-pulse" />
                Open Now
              </div>
            </div>
          </motion.div>
        </div>

        {/* Map preview */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-6 sm:mt-8 rounded-[1.5rem] overflow-hidden border border-[#1c2a1e]/8 shadow-warm-lg bg-[#fdfbf6]"
        >
          <iframe
            title="Madhav Traders Location"
            src="https://www.google.com/maps?q=Bhagwat+Nagar+Sardar+Chowk+Abhilasha+Char+Rasta+New+Sama+Road+Vadodara+Gujarat&output=embed"
            className="w-full h-[320px] sm:h-[380px]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </motion.div>
      </div>
    </section>
  );
}