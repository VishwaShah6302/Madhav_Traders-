import { motion } from "framer-motion";
import { FEATURES } from "../lib/data";
import { ShieldIcon, StoreIcon, BadgeIcon, BasketIcon, LeafOrnament } from "./Icons";

const ICONS: Record<string, (p: { className?: string; size?: number }) => any> = {
  shield: ShieldIcon,
  store: StoreIcon,
  badge: BadgeIcon,
  basket: BasketIcon,
};

export default function Features() {
  return (
    <section className="relative -mt-8 sm:-mt-12 pb-16 sm:pb-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {FEATURES.map((f, i) => {
            const Icon = ICONS[f.icon];
            return (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group relative rounded-2xl bg-[#fdfbf6] border border-[#1c2a1e]/8 p-5 sm:p-6 shadow-warm hover:shadow-warm-lg hover:-translate-y-1 transition-all"
              >
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-forest-50 to-gold-100 border border-gold-400/30">
                    <Icon size={26} className="text-forest-700" />
                  </div>
                  <span className="font-display text-gold-400 text-[26px] leading-none opacity-50 group-hover:opacity-100 transition-opacity">
                    0{i + 1}
                  </span>
                </div>
                <h3 className="mt-5 font-display text-[17px] sm:text-[19px] text-forest-800 leading-tight">
                  {f.title}
                </h3>
                <p className="mt-2 text-[13px] sm:text-[14px] text-ink-700 leading-relaxed">
                  {f.desc}
                </p>
                <div className="absolute inset-x-6 bottom-0 h-px bg-gradient-to-r from-transparent via-gold-400/60 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform origin-center" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function WhyChooseUs() {
  return (
    <section className="relative py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-[2rem] bg-gradient-to-br from-forest-700 via-forest-600 to-forest-800 p-8 sm:p-12 lg:p-16 relative overflow-hidden shadow-warm-lg"
        >
          {/* Decorative gold corners */}
          <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-gold-400/15 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full bg-gold-400/10 blur-3xl" />
          <div className="absolute inset-0 paper-texture opacity-50" />

          <div className="relative grid lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-5">
              <div className="inline-flex items-center gap-2 rounded-full border border-gold-400/40 bg-gold-400/10 px-3 py-1">
                <span className="h-1.5 w-1.5 rounded-full bg-gold-400" />
                <span className="text-[11px] uppercase tracking-[0.22em] text-gold-200 font-medium">
                  Why Choose Us
                </span>
              </div>
              <h2 className="mt-5 font-display text-[34px] sm:text-[44px] leading-[1.05] text-[#fdfbf6] text-balance">
                The trusted name behind <br />
                <span className="gold-foil">Vadodara's</span> everyday kitchens.
              </h2>
              <p className="mt-5 text-[15px] text-gold-100/85 max-w-md leading-relaxed">
                Five reasons families and bulk buyers keep coming back to Madhav Traders, year after year.
              </p>
              <div className="mt-6">
                <LeafOrnament />
              </div>
            </div>

            <ul className="lg:col-span-7 grid sm:grid-cols-2 gap-3 sm:gap-4">
              {[
                "Trusted Local Business in Vadodara",
                "14+ Years of Industry Experience",
                "Quality Checked Products",
                "Friendly, Personalised Service",
                "Reliable Wholesale Supply",
              ].map((item, i) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: 16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.05 * i }}
                  className="flex items-start gap-3 rounded-2xl bg-[#fdfbf6]/8 backdrop-blur-sm border border-gold-400/20 p-4 sm:p-5 hover:bg-[#fdfbf6]/12 transition-colors"
                >
                  <span className="mt-0.5 flex h-7 w-7 items-center justify-center rounded-full bg-gold-400 text-forest-800 shrink-0">
                    <svg viewBox="0 0 24 24" width="14" height="14" fill="none">
                      <path d="M5 12 L10 17 L19 7" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <span className="text-[14px] sm:text-[15px] text-[#fdfbf6] leading-snug">{item}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}