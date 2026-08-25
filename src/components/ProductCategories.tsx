import { motion } from "framer-motion";
import { CATEGORIES, BUSINESS } from "../lib/data";
import {
  WheatIcon,
  DalIcon,
  RiceIcon,
  GrainsIcon,
  SugarIcon,
  OilIcon,
  DryFruitsIcon,
  ImportedIcon,
  WhatsAppIcon,
  LeafOrnament,
} from "./Icons";

const ICONS: Record<string, (p: { className?: string; size?: number }) => any> = {
  wheat: WheatIcon,
  dal: DalIcon,
  rice: RiceIcon,
  grains: GrainsIcon,
  sugar: SugarIcon,
  oil: OilIcon,
  dryfruits: DryFruitsIcon,
  imported: ImportedIcon,
};

export default function ProductCategories() {
  return (
    <section
      id="products"
      className="relative py-20 sm:py-28 bg-gradient-to-b from-[#f7f1e3] to-[#fdfbf6]"
    >
      <div className="pointer-events-none absolute inset-0 paper-texture opacity-40" />
      <div className="mx-auto max-w-7xl px-5 sm:px-8 relative">
        <div className="text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full border border-gold-400/40 bg-[#fdfbf6] px-3 py-1 shadow-warm">
            <span className="h-1.5 w-1.5 rounded-full bg-gold-400" />
            <span className="text-[11px] uppercase tracking-[0.22em] text-forest-700 font-medium">
              Our Products
            </span>
          </div>
          <h2 className="mt-5 font-display text-[36px] sm:text-[52px] leading-[1.04] text-ink-900 text-balance">
            Staples, sourced with <span className="gold-foil">care</span>.
          </h2>
          <p className="mt-5 text-[15px] sm:text-[16px] text-ink-700 leading-relaxed text-pretty">
            From everyday essentials to festive favourites — explore the categories we stock and
            tap any card to enquire instantly on WhatsApp.
          </p>
          <div className="mt-6 flex justify-center">
            <LeafOrnament />
          </div>
        </div>

        <div className="mt-14 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {CATEGORIES.map((c, i) => {
            const Icon = ICONS[c.icon];
            const waHref = `https://wa.me/${BUSINESS.whatsapp}?text=${encodeURIComponent(
              `Hello Madhav Traders, I'd like to enquire about ${c.name}.`
            )}`;
            return (
              <motion.article
                key={c.name}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: (i % 4) * 0.06 }}
                className="group relative rounded-2xl bg-[#fdfbf6] border border-[#1c2a1e]/8 p-5 sm:p-6 shadow-warm hover:shadow-warm-lg hover:-translate-y-1 transition-all flex flex-col"
              >
                {/* Top ornament */}
                <div className="absolute inset-x-5 top-0 h-px bg-gradient-to-r from-transparent via-gold-400/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="flex items-start justify-between">
                  <div className="flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-gold-100 via-cream-2 to-forest-50 border border-gold-400/30 group-hover:scale-105 transition-transform">
                    <Icon size={56} className="sm:w-[64px] sm:h-[64px]" />
                  </div>
                  <span className="font-display text-gold-400 text-[18px] leading-none opacity-50 group-hover:opacity-100 transition-opacity">
                    0{i + 1}
                  </span>
                </div>

                <h3 className="mt-5 font-display text-[18px] sm:text-[20px] text-forest-800 leading-tight">
                  {c.name}
                </h3>
                <p className="mt-2 text-[13px] sm:text-[14px] text-ink-700 leading-relaxed flex-1">
                  {c.desc}
                </p>

                <a
                  href={waHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center justify-center gap-2 rounded-full border border-forest-600/30 hover:border-forest-600 hover:bg-forest-600 text-forest-700 hover:text-[#fdfbf6] px-4 py-2.5 text-[13px] font-semibold transition-all"
                >
                  <WhatsAppIcon size={14} />
                  Inquire Now
                </a>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}