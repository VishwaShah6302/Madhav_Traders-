import { useState } from "react";
import { motion } from "framer-motion";
import { BUSINESS } from "../lib/data";
import { WhatsAppIcon, PhoneIcon, LeafOrnament } from "./Icons";

export default function InquiryForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) {
      setSent(false);
      return;
    }
    const body = `Hello Madhav Traders,%0A%0A*Name:* ${encodeURIComponent(name)}%0A*Phone:* ${encodeURIComponent(
      phone
    )}%0A*Message:* ${encodeURIComponent(message || "(none)")}`;
    const url = `https://wa.me/${BUSINESS.whatsapp}?text=${body}`;
    window.open(url, "_blank", "noopener,noreferrer");
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section id="inquiry" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-gold-400/40 bg-gold-100/60 px-3 py-1">
              <span className="h-1.5 w-1.5 rounded-full bg-gold-400" />
              <span className="text-[11px] uppercase tracking-[0.22em] text-forest-700 font-medium">
                Quick Enquiry
              </span>
            </div>
            <h2 className="mt-5 font-display text-[36px] sm:text-[46px] leading-[1.04] text-ink-900 text-balance">
              Have a question? <br />
              <span className="gold-foil">Write to us.</span>
            </h2>
            <p className="mt-5 text-[15px] sm:text-[16px] text-ink-700 leading-relaxed text-pretty">
              Drop your details and message — we'll get back to you on WhatsApp within minutes
              during business hours.
            </p>
            <div className="mt-6">
              <LeafOrnament />
            </div>

            <div className="mt-8 space-y-3">
              <a
                href={`tel:${BUSINESS.phone}`}
                className="flex items-center gap-4 rounded-2xl border border-[#1c2a1e]/8 bg-[#fdfbf6] p-4 shadow-warm hover:shadow-warm-lg hover:-translate-y-0.5 transition-all"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-forest-600 text-gold-200">
                  <PhoneIcon size={18} />
                </span>
                <div>
                  <div className="text-[11px] uppercase tracking-[0.2em] text-ink-500">
                    Call us
                  </div>
                  <div className="font-display text-[16px] text-forest-800 leading-tight">
                    {BUSINESS.phoneDisplay}
                  </div>
                </div>
              </a>
              <a
                href={`https://wa.me/${BUSINESS.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 rounded-2xl border border-[#1c2a1e]/8 bg-[#fdfbf6] p-4 shadow-warm hover:shadow-warm-lg hover:-translate-y-0.5 transition-all"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-forest-600 text-gold-200">
                  <WhatsAppIcon size={18} />
                </span>
                <div>
                  <div className="text-[11px] uppercase tracking-[0.2em] text-ink-500">
                    WhatsApp
                  </div>
                  <div className="font-display text-[16px] text-forest-800 leading-tight">
                    {BUSINESS.phoneDisplay}
                  </div>
                </div>
              </a>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            onSubmit={submit}
            className="lg:col-span-7 rounded-[2rem] bg-[#fdfbf6] border border-[#1c2a1e]/8 shadow-warm-lg p-6 sm:p-9 relative overflow-hidden"
          >
            <div className="absolute -top-12 -right-12 w-44 h-44 rounded-full bg-gold-400/15 blur-3xl" />
            <div className="absolute -bottom-12 -left-12 w-44 h-44 rounded-full bg-forest-600/10 blur-3xl" />

            <div className="relative">
              <h3 className="font-display text-[22px] sm:text-[26px] text-forest-800 leading-tight">
                Send a message
              </h3>
              <p className="text-[13px] text-ink-500 mt-1">
                Required fields are marked with *
              </p>

              <div className="mt-6 grid sm:grid-cols-2 gap-4">
                <Field
                  label="Your Name"
                  required
                  value={name}
                  onChange={setName}
                  placeholder="e.g. Rakesh Patel"
                />
                <Field
                  label="Phone Number"
                  required
                  type="tel"
                  value={phone}
                  onChange={setPhone}
                  placeholder="+91 9XXXXXXXXX"
                />
              </div>

              <div className="mt-4">
                <label className="text-[12px] uppercase tracking-[0.2em] text-ink-700 font-semibold">
                  Message
                </label>
                <textarea
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tell us what you're looking for — quantity, items, delivery..."
                  className="mt-2 w-full rounded-xl bg-[#fdfbf6] border border-[#1c2a1e]/12 focus:border-forest-600 focus:ring-2 focus:ring-forest-600/15 outline-none px-4 py-3 text-[14px] text-ink-900 placeholder:text-ink-500/70 transition-all"
                />
              </div>

              <div className="mt-6 flex flex-col sm:flex-row gap-3 sm:items-center">
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-3 rounded-full bg-forest-600 hover:bg-forest-700 text-[#fdfbf6] px-6 py-3.5 text-[14px] font-semibold tracking-wide shadow-warm transition-all hover:-translate-y-0.5"
                >
                  <WhatsAppIcon size={16} className="text-gold-200" />
                  Send on WhatsApp
                </button>
                <a
                  href={`tel:${BUSINESS.phone}`}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#fdfbf6] border border-forest-600/30 hover:border-forest-600 text-forest-700 px-6 py-3.5 text-[14px] font-semibold transition-all"
                >
                  <PhoneIcon size={14} />
                  Call Instead
                </a>
              </div>

              {sent && (
                <div
                  role="status"
                  className="mt-5 rounded-xl border border-forest-600/30 bg-forest-50 text-forest-700 px-4 py-3 text-[13px]"
                >
                  ✓ Opening WhatsApp with your details. If it didn't open, please call us at {BUSINESS.phoneDisplay}.
                </div>
              )}
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  required,
  type = "text",
  value,
  onChange,
  placeholder,
}: {
  label: string;
  required?: boolean;
  type?: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
}) {
  return (
    <div>
      <label className="text-[12px] uppercase tracking-[0.2em] text-ink-700 font-semibold">
        {label} {required && <span className="text-gold-500">*</span>}
      </label>
      <input
        required={required}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="mt-2 w-full rounded-xl bg-[#fdfbf6] border border-[#1c2a1e]/12 focus:border-forest-600 focus:ring-2 focus:ring-forest-600/15 outline-none px-4 py-3 text-[14px] text-ink-900 placeholder:text-ink-500/70 transition-all"
      />
    </div>
  );
}