import { motion } from "framer-motion";
import { BUSINESS } from "../lib/data";
import { PhoneIcon, WhatsAppIcon, LeafOrnament } from "./Icons";

export default function Hero() {
  const callHref = `tel:${BUSINESS.phone}`;
  const waHref = `https://wa.me/${BUSINESS.whatsapp}?text=${encodeURIComponent(
    "Hello Madhav Traders, I'd like to enquire about your products."
  )}`;

  return (
    <section
      id="home"
      className="relative pt-[72px] overflow-hidden grain-bg paper-texture"
    >
      {/* Decorative ornaments */}
      <div className="pointer-events-none absolute -top-10 -right-24 w-[420px] h-[420px] rounded-full bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.18),transparent_60%)]" />
      <div className="pointer-events-none absolute top-32 -left-32 w-[420px] h-[420px] rounded-full bg-[radial-gradient(circle_at_center,rgba(46,125,50,0.14),transparent_60%)]" />

      <div className="mx-auto max-w-7xl px-5 sm:px-8 pt-12 pb-20 sm:pt-20 sm:pb-28 grid lg:grid-cols-12 gap-10 lg:gap-16 items-center relative">
        {/* Text */}
        <div className="lg:col-span-7 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-gold-400/40 bg-gold-100/60 backdrop-blur-sm px-4 py-1.5"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-gold-500" />
            </span>
            <span className="text-[11px] uppercase tracking-[0.2em] text-forest-700 font-medium">
              Trusted Since 2010
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-6 font-display text-[44px] sm:text-[58px] lg:text-[72px] leading-[1.02] tracking-tight text-ink-900 text-balance"
          >
            Trusted Grocery <br className="hidden sm:block" />
            <span className="gold-foil">&amp; Food Products</span>
            <br className="hidden sm:block" /> Since 2010
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 text-[16px] sm:text-[17px] text-ink-700 leading-relaxed max-w-xl text-pretty"
          >
            Your reliable source for <span className="font-semibold text-forest-700">grains, pulses, wheat, oils, sugar, dry fruits and imported grocery</span> products in Vadodara — served with consistency and care.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4"
          >
            <a
              href={callHref}
              className="group relative inline-flex items-center justify-center gap-3 rounded-full bg-forest-600 hover:bg-forest-700 text-[#fdfbf6] px-7 py-4 text-[15px] font-semibold tracking-wide shadow-warm-lg transition-all hover:-translate-y-0.5"
            >
              <span className="absolute inset-0 rounded-full ring-2 ring-gold-400/0 group-hover:ring-gold-400/40 transition" />
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-gold-400 text-forest-800">
                <PhoneIcon size={14} />
              </span>
              Call Now
            </a>
            <a
              href={waHref}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center justify-center gap-3 rounded-full bg-[#fdfbf6] hover:bg-cream-2 text-forest-700 border border-forest-600/30 hover:border-forest-600 px-7 py-4 text-[15px] font-semibold tracking-wide shadow-warm transition-all hover:-translate-y-0.5"
            >
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-forest-600 text-gold-200">
                <WhatsAppIcon size={14} />
              </span>
              WhatsApp Us
            </a>
          </motion.div>

          {/* Trust strip */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4 text-[13px] text-ink-700"
          >
            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-gold-400" />
              Retail &amp; Wholesale
            </div>
            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-gold-400" />
              Open 7 Days a Week
            </div>
            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-gold-400" />
              Quality Checked
            </div>
            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-gold-400" />
              New Sama Road, Vadodara
            </div>
          </motion.div>
        </div>

        {/* Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:col-span-5 relative"
        >
          <HeroVisual />
        </motion.div>
      </div>

      {/* Wave divider */}
      <div className="relative h-10 sm:h-16">
        <svg
          viewBox="0 0 1440 80"
          preserveAspectRatio="none"
          className="absolute inset-x-0 bottom-0 w-full h-full"
          aria-hidden
        >
          <path
            d="M0 40 Q180 70 360 50 T720 50 T1080 50 T1440 60 L1440 80 L0 80 Z"
            fill="#f7f1e3"
          />
        </svg>
      </div>
    </section>
  );
}

function HeroVisual() {
  return (
    <div className="relative">
      {/* Outer frame */}
      <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-gold-400/30 via-transparent to-forest-600/20 blur-2xl" />

      {/* Decorative frame */}
      <div className="relative aspect-[4/5] max-w-[460px] mx-auto rounded-[2rem] overflow-hidden border border-[#1c2a1e]/8 bg-cream-2 shadow-warm-lg">
        {/* Frame ornament */}
        <div className="absolute inset-0 z-10 pointer-events-none ring-1 ring-inset ring-[#1c2a1e]/5 rounded-[2rem]" />

        {/* Big image */}
        <img
          src="https://dvxrhkgloakisnvqoxgl.supabase.co/storage/v1/object/sign/images/inputs/1787591192484_qnooq0p8u.jpeg?token=eyJraWQiOiI0NWE1YWU1ZS0xNzg4LTRiMWYtYWM5OC1hMjgwNmQ2OTM4ZWMiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJpbWFnZXMvaW5wdXRzLzE3ODc1OTExOTI0ODRfcW5vb3EwcDh1LmpwZWciLCJzY29wZSI6ImRvd25sb2FkIiwiaWF0IjoxNzg3NjQzNzc5LCJleHAiOjE4MTkxNzk3Nzl9.3c1_mza6BXtMWwgxPx3XcerJO3f8lhlVJT3_qrclhtM"
          alt="Madhav Traders — fresh grocery products"
          className="absolute inset-0 w-full h-full object-cover"
          loading="eager"
        />

        {/* Bottom gradient */}
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-forest-800/85 via-forest-800/35 to-transparent" />

        {/* Bottom card overlay */}
        <div className="absolute inset-x-3 sm:inset-x-5 bottom-3 sm:bottom-5 z-10 rounded-2xl bg-[#fdfbf6]/95 backdrop-blur-md border border-[#1c2a1e]/8 p-4 sm:p-5">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-forest-600 text-gold-200 shrink-0">
              <LeafOrnament className="w-7 h-2.5" />
            </div>
            <div className="min-w-0">
              <div className="font-display text-[16px] sm:text-[18px] text-forest-800 leading-tight">
                A Family Promise
              </div>
              <div className="text-[12px] text-ink-700 leading-tight mt-0.5">
                Quality you can taste · service you can trust
              </div>
            </div>
          </div>
          <div className="mt-3 grid grid-cols-3 gap-2 text-center">
            {[
              { k: "14+", v: "Years" },
              { k: "100+", v: "Products" },
              { k: "7", v: "Days Open" },
            ].map((s) => (
              <div key={s.v} className="rounded-xl border border-[#1c2a1e]/8 py-2">
                <div className="font-display text-forest-700 text-[16px] leading-none">{s.k}</div>
                <div className="text-[10px] uppercase tracking-widest text-ink-500 mt-1">{s.v}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Floating tag */}
      <div className="absolute -top-3 -left-3 sm:-left-6 z-10 rounded-2xl bg-[#fdfbf6] border border-gold-400/40 shadow-warm-lg px-4 py-3 hidden sm:block">
        <div className="text-[10px] uppercase tracking-[0.2em] text-gold-600 font-semibold">Est.</div>
        <div className="font-display text-forest-800 text-[20px] leading-none mt-0.5">2010</div>
      </div>

      <div className="absolute -bottom-3 -right-3 sm:-right-6 z-10 rounded-2xl bg-forest-600 text-[#fdfbf6] border border-forest-700 shadow-warm-lg px-4 py-3 hidden sm:block">
        <div className="text-[10px] uppercase tracking-[0.2em] text-gold-200 font-semibold">Located in</div>
        <div className="font-display text-[15px] leading-none mt-0.5">Vadodara, GJ</div>
      </div>
    </div>
  );
}