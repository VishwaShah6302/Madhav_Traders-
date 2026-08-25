import { motion } from "framer-motion";
import { BUSINESS } from "../lib/data";
import { LeafOrnament, ShieldIcon, StoreIcon, BadgeIcon } from "./Icons";

export default function About() {
  return (
    <section id="about" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="lg:col-span-7 order-2 lg:order-1"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-gold-400/40 bg-gold-100/60 px-3 py-1">
            <span className="h-1.5 w-1.5 rounded-full bg-gold-400" />
            <span className="text-[11px] uppercase tracking-[0.22em] text-forest-700 font-medium">
              Our Story
            </span>
          </div>
          <h2 className="mt-5 font-display text-[36px] sm:text-[52px] leading-[1.04] text-ink-900 text-balance">
            Serving Vadodara with <br />
            <span className="gold-foil">integrity</span> since 2010.
          </h2>
          <p className="mt-6 text-[15px] sm:text-[17px] text-ink-700 leading-relaxed text-pretty max-w-2xl">
            Madhav Traders has been serving customers in Vadodara since 2010. We are committed to
            providing <span className="font-semibold text-forest-700">quality grocery and food products</span> with
            reliable service and customer satisfaction. Over the years, we have built strong
            relationships with customers through trust, consistency, and product quality.
          </p>
          <p className="mt-4 text-[15px] sm:text-[17px] text-ink-700 leading-relaxed text-pretty max-w-2xl">
            Whether you're a household buying your weekly staples or a wholesale buyer sourcing in
            bulk, our doors are open every day of the week.
          </p>

          <div className="mt-8">
            <LeafOrnament />
          </div>

          <div className="mt-8 grid grid-cols-3 gap-3 sm:gap-4 max-w-xl">
            {[
              { i: ShieldIcon, k: "Trust", v: "Built over 14+ years" },
              { i: StoreIcon, k: "Reach", v: "Retail & wholesale" },
              { i: BadgeIcon, k: "Quality", v: "Hand-checked goods" },
            ].map((s) => (
              <div
                key={s.k}
                className="rounded-2xl border border-[#1c2a1e]/8 bg-[#fdfbf6] p-4 sm:p-5 shadow-warm"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-forest-50 border border-gold-400/30">
                  <s.i size={22} className="text-forest-700" />
                </div>
                <div className="mt-3 font-display text-[15px] sm:text-[16px] text-forest-800 leading-tight">
                  {s.k}
                </div>
                <div className="text-[12px] text-ink-700 mt-0.5 leading-snug">{s.v}</div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="lg:col-span-5 order-1 lg:order-2"
        >
          <AboutVisual />
        </motion.div>
      </div>
    </section>
  );
}

function AboutVisual() {
  const years = new Date().getFullYear() - BUSINESS.established;
  return (
    <div className="relative max-w-md mx-auto">
      {/* Glow */}
      <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-gold-400/20 via-transparent to-forest-600/20 blur-2xl" />

      <div className="relative grid grid-cols-12 grid-rows-6 gap-3 sm:gap-4 aspect-[4/5]">
        {/* big tile */}
        <div className="col-span-7 row-span-6 rounded-[1.5rem] overflow-hidden border border-[#1c2a1e]/8 shadow-warm-lg relative">
          <img
            src="https://dvxrhkgloakisnvqoxgl.supabase.co/storage/v1/object/sign/images/inputs/1787591193905_onn4b04tu.jpeg?token=eyJraWQiOiI0NWE1YWU1ZS0xNzg4LTRiMWYtYWM5OC1hMjgwNmQ2OTM4ZWMiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJpbWFnZXMvaW5wdXRzLzE3ODc1OTExOTM5MDVfb25uNGIwNHR1LmpwZWciLCJzY29wZSI6ImRvd25sb2FkIiwiaWF0IjoxNzg3NjQzNzc5LCJleHAiOjE4MTkxNzk3Nzl9.bJrZZpyZZ4UsTeA1UCuj9wbfpovLZmYK1fgto1xodRA"
            alt="Grocery and food products at Madhav Traders"
            className="absolute inset-0 w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 ring-1 ring-inset ring-[#1c2a1e]/8 rounded-[1.5rem] pointer-events-none" />
        </div>

        {/* top right small */}
        <div className="col-span-5 row-span-3 rounded-[1.5rem] overflow-hidden border border-[#1c2a1e]/8 shadow-warm relative">
          <img
            src="https://dvxrhkgloakisnvqoxgl.supabase.co/storage/v1/object/sign/images/inputs/1787591195479_75ug9hk0m.jpeg?token=eyJraWQiOiI0NWE1YWU1ZS0xNzg4LTRiMWYtYWM5OC1hMjgwNmQ2OTM4ZWMiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJpbWFnZXMvaW5wdXRzLzE3ODc1OTExOTU0NzlfNzV1ZzloazBtLmpwZWciLCJzY29wZSI6ImRvd25sb2FkIiwiaWF0IjoxNzg3NjQzNzc5LCJleHAiOjE4MTkxNzk3Nzl9.hZnoReFVQTc4xX4LkCDnDjbkG2Hplpu5Or7fFVTwisU"
            alt=""
            className="absolute inset-0 w-full h-full object-cover"
            loading="lazy"
          />
        </div>

        {/* bottom right - stat card */}
        <div className="col-span-5 row-span-3 rounded-[1.5rem] bg-gradient-to-br from-forest-700 to-forest-800 p-5 shadow-warm-lg text-[#fdfbf6] relative overflow-hidden border border-forest-700">
          <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full bg-gold-400/20 blur-2xl" />
          <div className="relative">
            <div className="text-[10px] uppercase tracking-[0.22em] text-gold-200">
              Years of Trust
            </div>
            <div className="font-display text-[58px] sm:text-[68px] leading-none mt-2 text-gold-400">
              {years}+
            </div>
            <div className="mt-2 text-[12px] text-gold-100/80 leading-snug max-w-[140px]">
              Serving families and wholesale buyers in Vadodara.
            </div>
          </div>
        </div>
      </div>

      {/* Floating badge */}
      <div className="absolute -bottom-5 -right-3 sm:-right-6 z-10 rounded-2xl bg-[#fdfbf6] border border-gold-400/40 shadow-warm-lg px-4 py-3">
        <div className="text-[10px] uppercase tracking-[0.2em] text-gold-600 font-semibold">
          Established
        </div>
        <div className="font-display text-forest-800 text-[18px] leading-none mt-0.5">
          {BUSINESS.established}
        </div>
      </div>
    </div>
  );
}