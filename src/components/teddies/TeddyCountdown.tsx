import React from 'react';
import { motion } from 'framer-motion';

interface TeddyProps {
  className?: string;
  size?: number;
}

export const TeddyCountdown: React.FC<TeddyProps> = ({ className = '', size = 240 }) => {
  return (
    <motion.div
      className={`relative inline-block select-none ${className}`}
      animate={{
        y: [0, -7, 0],
      }}
      transition={{
        duration: 3.5,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 260 260"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="filter drop-shadow-[0_12px_24px_rgba(255,140,165,0.3)]"
      >
        <defs>
          <radialGradient id="tc-fur" cx="40%" cy="35%" r="65%">
            <stop offset="0%" stopColor="#f7c897" />
            <stop offset="65%" stopColor="#df9c64" />
            <stop offset="100%" stopColor="#c57c43" />
          </radialGradient>
          <radialGradient id="tc-belly" cx="50%" cy="40%" r="60%">
            <stop offset="0%" stopColor="#fff2e2" />
            <stop offset="100%" stopColor="#f8d7b9" />
          </radialGradient>
          <linearGradient id="tc-cake" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#ffccd5" />
            <stop offset="100%" stopColor="#ff758f" />
          </linearGradient>
          <linearGradient id="tc-frosting" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="100%" stopColor="#fff0f3" />
          </linearGradient>
          <linearGradient id="tc-hat" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#c084fc" />
            <stop offset="50%" stopColor="#f472b6" />
            <stop offset="100%" stopColor="#fb7185" />
          </linearGradient>
          <filter id="tc-flame" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Shadow */}
        <ellipse cx="130" cy="245" rx="75" ry="11" fill="rgba(219, 112, 147, 0.22)" />

        {/* Ears */}
        <circle cx="80" cy="80" r="28" fill="url(#tc-fur)" />
        <circle cx="80" cy="80" r="16" fill="#ffccd5" opacity="0.9" />

        <circle cx="180" cy="80" r="28" fill="url(#tc-fur)" />
        <circle cx="180" cy="80" r="16" fill="#ffccd5" opacity="0.9" />

        {/* Body */}
        <ellipse cx="130" cy="180" rx="58" ry="52" fill="url(#tc-fur)" />
        <ellipse cx="130" cy="185" rx="38" ry="36" fill="url(#tc-belly)" />

        {/* Feet */}
        <ellipse cx="85" cy="225" rx="22" ry="16" fill="url(#tc-fur)" />
        <circle cx="85" cy="225" r="11" fill="#ffccd5" />
        <ellipse cx="175" cy="225" rx="22" ry="16" fill="url(#tc-fur)" />
        <circle cx="175" cy="225" r="11" fill="#ffccd5" />

        {/* Head */}
        <circle cx="130" cy="115" r="54" fill="url(#tc-fur)" />
        <ellipse cx="130" cy="130" rx="26" ry="19" fill="url(#tc-belly)" />

        {/* Nose & Smile */}
        <path
          d="M 122 122 C 122 119 138 119 138 122 C 138 129 130 132 130 132 C 130 132 122 129 122 122 Z"
          fill="#3e2213"
        />
        <path
          d="M 130 132 L 130 138 M 123 137 C 127 141 130 139 130 138 C 130 139 133 141 137 137"
          stroke="#3e2213"
          strokeWidth="2.5"
          strokeLinecap="round"
        />

        {/* Happy Twinkling Eyes */}
        <circle cx="108" cy="109" r="8.5" fill="#2d170e" />
        <circle cx="105.5" cy="106.5" r="3.2" fill="#ffffff" />
        <circle cx="110.5" cy="111" r="1.5" fill="#ffffff" />

        <circle cx="152" cy="109" r="8.5" fill="#2d170e" />
        <circle cx="149.5" cy="106.5" r="3.2" fill="#ffffff" />
        <circle cx="154.5" cy="111" r="1.5" fill="#ffffff" />

        {/* Blushing Cheeks */}
        <ellipse cx="92" cy="125" rx="10" ry="6" fill="#ff758f" opacity="0.65" />
        <ellipse cx="168" cy="125" rx="10" ry="6" fill="#ff758f" opacity="0.65" />

        {/* Birthday Party Hat */}
        <g transform="translate(130, 68)">
          <path d="M 0 -45 L 22 5 L -22 5 Z" fill="url(#tc-hat)" />
          {/* Hat Stripes */}
          <path d="M -14 -12 L 14 -12 L 10 -22 L -10 -22 Z" fill="#ffffff" opacity="0.45" />
          <path d="M -7 -32 L 7 -32 L 4 -38 L -4 -38 Z" fill="#ffd166" opacity="0.8" />
          {/* Hat Pom-pom */}
          <circle cx="0" cy="-46" r="7" fill="#ffd166" />
          <circle cx="0" cy="-46" r="4" fill="#ffffff" opacity="0.6" />
        </g>

        {/* Arms Holding Birthday Cake */}
        {/* Left Arm */}
        <path
          d="M 80 160 C 65 170 65 195 82 200 C 95 204 105 190 102 175 Z"
          fill="url(#tc-fur)"
        />
        {/* Right Arm */}
        <path
          d="M 180 160 C 195 170 195 195 178 200 C 165 204 155 190 158 175 Z"
          fill="url(#tc-fur)"
        />

        {/* Beautiful Birthday Cake! */}
        <g transform="translate(90, 165)">
          {/* Cake Stand / Plate */}
          <ellipse cx="40" cy="38" rx="46" ry="7" fill="#ffffff" stroke="#ffccd5" strokeWidth="2" />

          {/* Cake Body */}
          <path
            d="M 8 16 Q 8 36 40 36 Q 72 36 72 16 L 72 8 Q 72 20 40 20 Q 8 20 8 8 Z"
            fill="url(#tc-cake)"
          />

          {/* Dripping Frosting */}
          <path
            d="M 8 10 Q 16 18 24 10 Q 32 19 40 10 Q 48 18 56 10 Q 64 19 72 10 L 72 6 Q 40 14 8 6 Z"
            fill="url(#tc-frosting)"
          />

          {/* Cake Top */}
          <ellipse cx="40" cy="8" rx="32" ry="7" fill="#ffffff" />

          {/* Cream Dollops & Cherries */}
          <circle cx="22" cy="8" r="4" fill="#ff4d6d" />
          <circle cx="40" cy="9" r="4.5" fill="#ff4d6d" />
          <circle cx="58" cy="8" r="4" fill="#ff4d6d" />

          {/* Birthday Candle */}
          <rect x="38" y="-9" width="4" height="15" rx="1.5" fill="#93c5fd" />
          <path d="M 38 -5 L 42 -7 M 38 -1 L 42 -3" stroke="#ffffff" strokeWidth="1" />

          {/* Flickering Candle Flame! */}
          <motion.g
            animate={{
              scale: [1, 1.25, 0.95, 1.2, 1],
              y: [-1, 1, -1],
            }}
            transition={{
              duration: 1.2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            style={{ transformOrigin: '40px -15px' }}
          >
            <path
              d="M 40 -20 C 43 -17 44 -13 40 -10 C 36 -13 37 -17 40 -20 Z"
              fill="#ffd166"
              filter="url(#tc-flame)"
            />
            <path
              d="M 40 -18 C 41.5 -16 42 -13.5 40 -11.5 C 38 -13.5 38.5 -16 40 -18 Z"
              fill="#ff4d6d"
            />
          </motion.g>
        </g>

        {/* Small Gift Box at the side */}
        <g transform="translate(195, 185)">
          <rect x="0" y="8" width="30" height="26" rx="4" fill="#f43f5e" />
          <rect x="-2" y="4" width="34" height="6" rx="2" fill="#fb7185" />
          {/* Golden Ribbon */}
          <rect x="12" y="4" width="6" height="30" fill="#ffd166" />
          <rect x="0" y="18" width="30" height="6" fill="#ffd166" />
          {/* Ribbon Bow */}
          <path d="M 15 4 C 11 -2 6 2 12 4 Z" fill="#ffd166" />
          <path d="M 15 4 C 19 -2 24 2 18 4 Z" fill="#ffd166" />
          <circle cx="15" cy="4" r="2.5" fill="#ffb703" />
        </g>
      </svg>
    </motion.div>
  );
};
