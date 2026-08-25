import type { JSX } from "react";

type IconProps = { className?: string; size?: number };

export function WheatIcon({ className = "", size = 64 }: IconProps): JSX.Element {
  return (
    <svg viewBox="0 0 64 64" className={className} width={size} height={size} fill="none" aria-hidden>
      <defs>
        <linearGradient id="wheat-g" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#d4af37" />
          <stop offset="1" stopColor="#8e6f17" />
        </linearGradient>
      </defs>
      {/* stalk */}
      <path d="M32 58 L32 14" stroke="#2e7d32" strokeWidth="2.5" strokeLinecap="round" />
      {/* leaves */}
      <path d="M32 40 Q22 38 18 30" stroke="#2e7d32" strokeWidth="2" strokeLinecap="round" fill="none" />
      <path d="M32 46 Q42 44 46 36" stroke="#2e7d32" strokeWidth="2" strokeLinecap="round" fill="none" />
      {/* grains - 3 rows */}
      {[0, 1, 2, 3].map((row) => {
        const y = 14 + row * 6;
        return (
          <g key={row}>
            <ellipse cx="28" cy={y} rx="3.2" ry="4.5" fill="url(#wheat-g)" />
            <ellipse cx="36" cy={y} rx="3.2" ry="4.5" fill="url(#wheat-g)" />
            <ellipse cx="32" cy={y - 3} rx="3" ry="4" fill="url(#wheat-g)" />
          </g>
        );
      })}
      {/* awns */}
      <path d="M32 10 L32 4" stroke="#b89224" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function DalIcon({ className = "", size = 64 }: IconProps): JSX.Element {
  return (
    <svg viewBox="0 0 64 64" className={className} width={size} height={size} fill="none" aria-hidden>
      <defs>
        <linearGradient id="dal-g" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#f4d77a" />
          <stop offset="1" stopColor="#d4af37" />
        </linearGradient>
      </defs>
      {/* bowl */}
      <path d="M10 30 Q10 50 32 50 Q54 50 54 30 Z" fill="#fdfbf6" stroke="#2e7d32" strokeWidth="2" />
      <path d="M10 30 L54 30" stroke="#2e7d32" strokeWidth="2" strokeLinecap="round" />
      {/* dal lentils */}
      {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
        <ellipse
          key={i}
          cx={14 + (i * 5) % 40}
          cy={32 + ((i * 3) % 12)}
          rx="3"
          ry="2"
          fill="url(#dal-g)"
        />
      ))}
    </svg>
  );
}

export function RiceIcon({ className = "", size = 64 }: IconProps): JSX.Element {
  return (
    <svg viewBox="0 0 64 64" className={className} width={size} height={size} fill="none" aria-hidden>
      <defs>
        <linearGradient id="rice-g" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#fffefb" />
          <stop offset="1" stopColor="#e6dec3" />
        </linearGradient>
      </defs>
      {/* bowl */}
      <path d="M8 28 Q8 50 32 50 Q56 50 56 28 Z" fill="#fdfbf6" stroke="#2e7d32" strokeWidth="2" />
      <path d="M8 28 L56 28" stroke="#2e7d32" strokeWidth="2" strokeLinecap="round" />
      {/* rice grains */}
      {Array.from({ length: 22 }).map((_, i) => {
        const angle = (i * 137.5) % 360;
        const r = 3 + (i % 5);
        const x = 32 + Math.cos((angle * Math.PI) / 180) * r * 3;
        const y = 30 + Math.sin((angle * Math.PI) / 180) * r * 1.5;
        return (
          <ellipse
            key={i}
            cx={x}
            cy={y}
            rx="2.2"
            ry="3.6"
            transform={`rotate(${angle} ${x} ${y})`}
            fill="url(#rice-g)"
            stroke="#d4af37"
            strokeWidth="0.4"
          />
        );
      })}
    </svg>
  );
}

export function GrainsIcon({ className = "", size = 64 }: IconProps): JSX.Element {
  return (
    <svg viewBox="0 0 64 64" className={className} width={size} height={size} fill="none" aria-hidden>
      {/* millet / sorghum */}
      <g>
        {[0, 1, 2].map((i) => (
          <g key={i} transform={`translate(${10 + i * 16}, 0)`}>
            <path d="M8 56 L8 30" stroke="#2e7d32" strokeWidth="2" strokeLinecap="round" />
            <path d="M8 30 Q4 22 4 14 Q4 8 8 6 Q12 8 12 14 Q12 22 8 30 Z" fill="#d4af37" />
            {[0, 1, 2, 3].map((j) => (
              <circle key={j} cx={4 + (j % 2) * 8} cy={10 + j * 5} r="2" fill="#8e6f17" />
            ))}
          </g>
        ))}
      </g>
      {/* ground */}
      <path d="M4 58 L60 58" stroke="#2e7d32" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function SugarIcon({ className = "", size = 64 }: IconProps): JSX.Element {
  return (
    <svg viewBox="0 0 64 64" className={className} width={size} height={size} fill="none" aria-hidden>
      {/* sugar sack */}
      <path d="M16 22 L48 22 L44 56 L20 56 Z" fill="#fdfbf6" stroke="#2e7d32" strokeWidth="2" />
      <path d="M16 22 Q12 22 12 26 L20 56" stroke="#2e7d32" strokeWidth="2" fill="none" />
      <path d="M48 22 Q52 22 52 26 L44 56" stroke="#2e7d32" strokeWidth="2" fill="none" />
      {/* label */}
      <rect x="22" y="32" width="20" height="14" rx="1" fill="#2e7d32" />
      <text x="32" y="42" textAnchor="middle" fill="#d4af37" fontSize="9" fontWeight="700" fontFamily="serif">SUGAR</text>
      {/* sugar crystals on top */}
      {Array.from({ length: 7 }).map((_, i) => (
        <circle key={i} cx={22 + i * 3} cy={18 + (i % 2) * 2} r="1.2" fill="#f6ecc8" stroke="#d4af37" strokeWidth="0.4" />
      ))}
    </svg>
  );
}

export function OilIcon({ className = "", size = 64 }: IconProps): JSX.Element {
  return (
    <svg viewBox="0 0 64 64" className={className} width={size} height={size} fill="none" aria-hidden>
      <defs>
        <linearGradient id="oil-g" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#f4d77a" />
          <stop offset="1" stopColor="#b89224" />
        </linearGradient>
      </defs>
      {/* bottle */}
      <path d="M26 8 L38 8 L38 14 Q46 18 46 26 L46 54 Q46 58 42 58 L22 58 Q18 58 18 54 L18 26 Q18 18 26 14 Z" fill="#fdfbf6" stroke="#2e7d32" strokeWidth="2" />
      {/* oil fill */}
      <path d="M22 30 L42 30 L42 52 Q42 54 40 54 L24 54 Q22 54 22 52 Z" fill="url(#oil-g)" />
      {/* label */}
      <rect x="22" y="36" width="20" height="10" rx="1" fill="#2e7d32" />
      <text x="32" y="43" textAnchor="middle" fill="#d4af37" fontSize="6.5" fontWeight="700" fontFamily="serif">OIL</text>
      {/* drop highlight */}
      <path d="M32 24 Q30 28 32 30 Q34 28 32 24 Z" fill="#2e7d32" opacity="0.7" />
    </svg>
  );
}

export function DryFruitsIcon({ className = "", size = 64 }: IconProps): JSX.Element {
  return (
    <svg viewBox="0 0 64 64" className={className} width={size} height={size} fill="none" aria-hidden>
      <defs>
        <linearGradient id="df-g" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#f4d77a" />
          <stop offset="1" stopColor="#8e6f17" />
        </linearGradient>
      </defs>
      {/* plate */}
      <ellipse cx="32" cy="44" rx="26" ry="6" fill="#fdfbf6" stroke="#2e7d32" strokeWidth="1.5" />
      {/* almond */}
      <path d="M20 36 Q14 32 14 28 Q14 24 20 24 Q26 26 26 32 Q26 38 20 36 Z" fill="url(#df-g)" stroke="#8e6f17" strokeWidth="1" />
      <path d="M20 26 L20 34" stroke="#8e6f17" strokeWidth="0.8" />
      {/* cashew */}
      <path d="M34 30 Q42 24 46 30 Q48 36 42 38 Q36 38 34 32 Z" fill="url(#df-g)" stroke="#8e6f17" strokeWidth="1" />
      {/* raisin */}
      <ellipse cx="40" cy="40" rx="4" ry="5" fill="#6b3f0f" stroke="#2e7d32" strokeWidth="0.8" />
      {/* pistachio */}
      <path d="M28 40 Q24 38 24 42 Q26 46 30 44 Z" fill="#9dbf6e" stroke="#2e7d32" strokeWidth="0.8" />
    </svg>
  );
}

export function ImportedIcon({ className = "", size = 64 }: IconProps): JSX.Element {
  return (
    <svg viewBox="0 0 64 64" className={className} width={size} height={size} fill="none" aria-hidden>
      {/* world box */}
      <rect x="10" y="18" width="44" height="36" rx="3" fill="#fdfbf6" stroke="#2e7d32" strokeWidth="2" />
      <path d="M10 26 L54 26" stroke="#2e7d32" strokeWidth="1.5" />
      {/* globe */}
      <circle cx="32" cy="40" r="10" fill="none" stroke="#2e7d32" strokeWidth="1.5" />
      <ellipse cx="32" cy="40" rx="10" ry="4" fill="none" stroke="#2e7d32" strokeWidth="1.5" />
      <path d="M32 30 L32 50" stroke="#2e7d32" strokeWidth="1.5" />
      <path d="M22 40 Q26 36 32 40 Q38 44 42 40" stroke="#d4af37" strokeWidth="1.5" fill="none" />
      {/* label band */}
      <rect x="18" y="20" width="28" height="4" rx="1" fill="#d4af37" />
    </svg>
  );
}

export function ShieldIcon({ className = "", size = 28 }: IconProps): JSX.Element {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} className={className} fill="none" aria-hidden>
      <path d="M12 2 L20 5 V11 C20 16 16 20 12 22 C8 20 4 16 4 11 V5 Z" fill="#fdfbf6" stroke="#2e7d32" strokeWidth="1.5" />
      <path d="M8 12 L11 15 L16 9" stroke="#d4af37" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function StoreIcon({ className = "", size = 28 }: IconProps): JSX.Element {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} className={className} fill="none" aria-hidden>
      <path d="M3 9 L4 4 H20 L21 9" stroke="#2e7d32" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M3 9 V20 H21 V9" stroke="#2e7d32" strokeWidth="1.5" strokeLinejoin="round" fill="#fdfbf6" />
      <path d="M3 9 H21" stroke="#d4af37" strokeWidth="1.5" />
      <path d="M9 20 V14 H15 V20" stroke="#2e7d32" strokeWidth="1.5" />
      <circle cx="7" cy="13" r="1" fill="#d4af37" />
      <circle cx="12" cy="13" r="1" fill="#d4af37" />
      <circle cx="17" cy="13" r="1" fill="#d4af37" />
    </svg>
  );
}

export function BadgeIcon({ className = "", size = 28 }: IconProps): JSX.Element {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} className={className} fill="none" aria-hidden>
      <circle cx="12" cy="9" r="6" stroke="#2e7d32" strokeWidth="1.5" fill="#fdfbf6" />
      <circle cx="12" cy="9" r="3" fill="#d4af37" />
      <path d="M9 14 L8 22 L12 19 L16 22 L15 14" fill="#fdfbf6" stroke="#2e7d32" strokeWidth="1.5" strokeLinejoin="round" />
    </svg>
  );
}

export function BasketIcon({ className = "", size = 28 }: IconProps): JSX.Element {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} className={className} fill="none" aria-hidden>
      <path d="M3 9 H21 L19 21 H5 Z" fill="#fdfbf6" stroke="#2e7d32" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M8 9 Q8 5 12 5 Q16 5 16 9" stroke="#d4af37" strokeWidth="1.5" fill="none" />
      <path d="M3 12 H21" stroke="#d4af37" strokeWidth="1" strokeDasharray="2 2" />
    </svg>
  );
}

export function CheckIcon({ className = "", size = 22 }: IconProps): JSX.Element {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} className={className} fill="none" aria-hidden>
      <circle cx="12" cy="12" r="11" fill="#2e7d32" />
      <path d="M7 12 L10.5 15.5 L17 9" stroke="#d4af37" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function PhoneIcon({ className = "", size = 18 }: IconProps): JSX.Element {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} className={className} fill="none" aria-hidden>
      <path d="M5 4 Q5 3 6 3 L9 3 Q10 3 10.5 4 L11.5 7.5 Q11.7 8.3 11 8.8 L9 10.5 Q11 14 13.5 16 L15.2 14 Q15.7 13.3 16.5 13.5 L20 14.5 Q21 15 21 16 L21 19 Q21 20 20 20 Q11 20 5 12 Q4 6 4 5 Z" fill="currentColor" />
    </svg>
  );
}

export function WhatsAppIcon({ className = "", size = 18 }: IconProps): JSX.Element {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} className={className} fill="currentColor" aria-hidden>
      <path d="M19.05 4.91A10 10 0 0 0 4.18 18.16L3 22l3.94-1.14A10 10 0 1 0 19.05 4.91Zm-7.04 15.4a8.34 8.34 0 0 1-4.25-1.16l-.3-.18-2.34.68.7-2.28-.2-.32a8.34 8.34 0 1 1 6.39 3.26Zm4.58-6.24c-.25-.13-1.48-.73-1.71-.81-.23-.08-.4-.13-.56.13-.17.25-.65.81-.8.98-.15.17-.3.19-.55.06-.25-.13-1.06-.39-2.02-1.24a7.6 7.6 0 0 1-1.4-1.74c-.15-.25-.02-.39.11-.51.11-.11.25-.3.38-.45.13-.15.17-.25.25-.42.08-.17.04-.32-.02-.45-.06-.13-.56-1.35-.77-1.85-.2-.49-.41-.42-.56-.43-.14 0-.31-.02-.48-.02s-.45.06-.69.32c-.23.25-.91.89-.91 2.17 0 1.28.94 2.51 1.07 2.69.13.17 1.85 2.83 4.49 3.97.63.27 1.12.43 1.5.55.63.2 1.2.17 1.65.1.5-.08 1.48-.6 1.69-1.19.21-.59.21-1.09.15-1.19-.06-.11-.23-.17-.48-.3Z" />
    </svg>
  );
}

export function MapPinIcon({ className = "", size = 22 }: IconProps): JSX.Element {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} className={className} fill="none" aria-hidden>
      <path d="M12 2 C7.58 2 4 5.58 4 10 C4 16 12 22 12 22 C12 22 20 16 20 10 C20 5.58 16.42 2 12 2 Z" fill="#2e7d32" />
      <circle cx="12" cy="10" r="3.2" fill="#d4af37" />
    </svg>
  );
}

export function ClockIcon({ className = "", size = 22 }: IconProps): JSX.Element {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} className={className} fill="none" aria-hidden>
      <circle cx="12" cy="12" r="10" stroke="#2e7d32" strokeWidth="1.6" fill="#fdfbf6" />
      <path d="M12 7 V12 L15 14" stroke="#d4af37" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function MailIcon({ className = "", size = 22 }: IconProps): JSX.Element {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} className={className} fill="none" aria-hidden>
      <rect x="3" y="5" width="18" height="14" rx="2" stroke="#2e7d32" strokeWidth="1.6" fill="#fdfbf6" />
      <path d="M3 7 L12 13 L21 7" stroke="#d4af37" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

export function MenuIcon({ className = "", size = 24 }: IconProps): JSX.Element {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} className={className} fill="none" aria-hidden>
      <path d="M4 7 H20 M4 12 H20 M4 17 H20" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

export function CloseIcon({ className = "", size = 24 }: IconProps): JSX.Element {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} className={className} fill="none" aria-hidden>
      <path d="M6 6 L18 18 M18 6 L6 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

export function LeafOrnament({ className = "" }: IconProps): JSX.Element {
  return (
    <svg viewBox="0 0 120 20" className={className} width="120" height="20" aria-hidden>
      <path d="M0 10 H50" stroke="#d4af37" strokeWidth="1" />
      <path d="M70 10 H120" stroke="#d4af37" strokeWidth="1" />
      <path d="M60 10 Q56 4 52 10 Q56 16 60 10 Z" fill="#2e7d32" />
      <circle cx="60" cy="10" r="2.2" fill="#d4af37" />
      <circle cx="50" cy="10" r="1.4" fill="#d4af37" />
      <circle cx="70" cy="10" r="1.4" fill="#d4af37" />
    </svg>
  );
}

export function Logo({ className = "" }: IconProps): JSX.Element {
  return (
    <svg viewBox="0 0 48 48" className={className} width="40" height="40" aria-hidden>
      <defs>
        <linearGradient id="logo-g" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#f4d77a" />
          <stop offset="1" stopColor="#b89224" />
        </linearGradient>
      </defs>
      <circle cx="24" cy="24" r="22" fill="#2e7d32" />
      <circle cx="24" cy="24" r="19" fill="none" stroke="url(#logo-g)" strokeWidth="1.4" />
      {/* M */}
      <path d="M14 32 V18 L18 26 L22 18 V32" stroke="url(#logo-g)" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      {/* T */}
      <path d="M27 20 H37 M32 20 V32" stroke="url(#logo-g)" strokeWidth="2.4" strokeLinecap="round" />
      {/* base wheat */}
      <path d="M14 36 Q24 33 34 36" stroke="#d4af37" strokeWidth="1.4" fill="none" />
    </svg>
  );
}