import { motion } from "framer-motion";
import { GALLERY_IMAGES } from "../lib/data";
import { LeafOrnament } from "./Icons";

export default function Gallery() {
  // Subtle, varied tile sizes for masonry-ish feel
  const spans = [
    "row-span-2",
    "",
    "",
    "row-span-2",
    "",
    "",
    "",
    "row-span-2",
    "",
    "",
    "",
    "row-span-2",
    "",
    "",
    "row-span-2",
    "",
    "",
    "",
    "row-span-2",
    "",
    "",
    "",
  ];

  return (
    <section id="gallery" className="relative py-20 sm:py-28 bg-gradient-to-b from-[#fdfbf6] to-[#f7f1e3]">
      <div className="pointer-events-none absolute inset-0 paper-texture opacity-40" />
      <div className="mx-auto max-w-7xl px-5 sm:px-8 relative">
        <div className="text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full border border-gold-400/40 bg-[#fdfbf6] px-3 py-1 shadow-warm">
            <span className="h-1.5 w-1.5 rounded-full bg-gold-400" />
            <span className="text-[11px] uppercase tracking-[0.22em] text-forest-700 font-medium">
              Gallery
            </span>
          </div>
          <h2 className="mt-5 font-display text-[36px] sm:text-[52px] leading-[1.04] text-ink-900 text-balance">
            A glimpse of <span className="gold-foil">our shelves</span>.
          </h2>
          <p className="mt-5 text-[15px] sm:text-[16px] text-ink-700 leading-relaxed text-pretty">
            From grains and pulses to dry fruits and imported goods — a quick look at what
            you'll find at Madhav Traders.
          </p>
          <div className="mt-6 flex justify-center">
            <LeafOrnament />
          </div>
        </div>

        <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 auto-rows-[160px] sm:auto-rows-[180px] gap-3 sm:gap-4">
          {GALLERY_IMAGES.map((src, i) => (
            <motion.figure
              key={src}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.45, delay: (i % 8) * 0.03 }}
              className={`group relative overflow-hidden rounded-2xl border border-[#1c2a1e]/8 shadow-warm bg-[#fdfbf6] ${spans[i] ?? ""}`}
            >
              <img
                src={src}
                alt=""
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-800/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute inset-0 ring-1 ring-inset ring-[#1c2a1e]/8 rounded-2xl pointer-events-none" />
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}