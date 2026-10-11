import React from 'react';
import { motion } from 'framer-motion';

interface TeddyHugProps {
  className?: string;
  size?: number;
}

export const TeddyHug: React.FC<TeddyHugProps> = ({ className = '', size = 260 }) => {
  return (
    <motion.div
      className={`relative inline-block select-none ${className}`}
      animate={{
        scale: [1, 1.05, 1],
      }}
      transition={{
        duration: 2.2,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 280 280"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="filter drop-shadow-[0_16px_32px_rgba(255,107,139,0.35)]"
      >
        <defs>
          <radialGradient id="th-fur" cx="40%" cy="35%" r="65%">
            <stop offset="0%" stopColor="#f7c897" />
            <stop offset="65%" stopColor="#df9c64" />
            <stop offset="100%" stopColor="#c57c43" />
          </radialGradient>
          <radialGradient id="th-belly" cx="50%" cy="40%" r="60%">
            <stop offset="0%" stopColor="#fff2e2" />
            <stop offset="100%" stopColor="#f8d7b9" />
          </radialGradient>
          <radialGradient id="th-heart" cx="35%" cy="35%" r="70%">
            <stop offset="0%" stopColor="#ff758f" />
            <stop offset="50%" stopColor="#ff4d6d" />
            <stop offset="100%" stopColor="#c9184a" />
          </radialGradient>
          <filter id="th-glow" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="6" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Shadow */}
        <ellipse cx="140" cy="265" rx="85" ry="12" fill="rgba(255, 117, 143, 0.25)" />

        {/* Soft Golden Heart Aura */}
        <motion.circle
          cx="140"
          cy="140"
          r="105"
          fill="rgba(255, 209, 220, 0.35)"
          animate={{
            scale: [0.95, 1.1, 0.95],
            opacity: [0.4, 0.8, 0.4],
          }}
          transition={{
            duration: 2.2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        {/* Ears */}
        <circle cx="85" cy="85" r="30" fill="url(#th-fur)" />
        <circle cx="85" cy="85" r="18" fill="#ffccd5" opacity="0.95" />

        <circle cx="195" cy="85" r="30" fill="url(#th-fur)" />
        <circle cx="195" cy="85" r="18" fill="#ffccd5" opacity="0.95" />

        {/* Body */}
        <ellipse cx="140" cy="190" rx="65" ry="58" fill="url(#th-fur)" />
        <ellipse cx="140" cy="195" rx="42" ry="40" fill="url(#th-belly)" />

        {/* Feet */}
        <ellipse cx="90" cy="242" rx="24" ry="18" fill="url(#th-fur)" />
        <circle cx="90" cy="242" r="12" fill="#ffccd5" />
        <ellipse cx="190" cy="242" rx="24" ry="18" fill="url(#th-fur)" />
        <circle cx="190" cy="242" r="12" fill="#ffccd5" />

        {/* Head */}
        <circle cx="140" cy="120" r="58" fill="url(#th-fur)" />
        <ellipse cx="140" cy="138" rx="28" ry="20" fill="url(#th-belly)" />

        {/* Nose */}
        <path
          d="M 132 130 C 132 127 148 127 148 130 C 148 137 140 140 140 140 C 140 140 132 137 132 130 Z"
          fill="#3e2213"
        />
        {/* Sweet Blissful Smile */}
        <path
          d="M 140 140 L 140 145 M 131 143 C 136 149 140 146 140 145 C 140 146 144 149 149 143"
          stroke="#3e2213"
          strokeWidth="2.8"
          strokeLinecap="round"
        />

        {/* Sweet Closed Squinting Happy Eyes (Smiling eyes ^_^) */}
        <path
          d="M 108 116 Q 116 106 124 116"
          stroke="#2d170e"
          strokeWidth="3.2"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M 156 116 Q 164 106 172 116"
          stroke="#2d170e"
          strokeWidth="3.2"
          strokeLinecap="round"
          fill="none"
        />

        {/* Big Blushing Rosy Cheeks */}
        <ellipse cx="98" cy="132" rx="12" ry="8" fill="#ff4d6d" opacity="0.65" />
        <ellipse cx="182" cy="132" rx="12" ry="8" fill="#ff4d6d" opacity="0.65" />

        {/* Huge Hugging Plush Heart in Arms */}
        <motion.g
          animate={{
            scale: [1, 1.08, 1],
          }}
          transition={{
            duration: 1.8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          style={{ transformOrigin: '140px 185px' }}
        >
          <path
            d="M 140 152 C 140 135 110 120 90 145 C 70 170 85 205 140 235 C 195 205 210 170 190 145 C 170 120 140 135 140 152 Z"
            fill="url(#th-heart)"
            filter="url(#th-glow)"
          />
          {/* Heart Highlight */}
          <path
            d="M 100 150 C 95 160 96 175 106 186"
            stroke="#ffffff"
            strokeWidth="3.5"
            strokeLinecap="round"
            opacity="0.6"
            fill="none"
          />
        </motion.g>

        {/* Hugging Paws Wrapped Around the Heart */}
        {/* Left Arm Embracing */}
        <motion.g
          animate={{
            rotate: [0, -4, 0],
          }}
          transition={{
            duration: 2.2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          style={{ transformOrigin: '75px 175px' }}
        >
          <path
            d="M 80 170 C 60 175 60 215 95 210 C 112 208 122 195 118 180 Z"
            fill="url(#th-fur)"
          />
          <circle cx="114" cy="192" r="10" fill="#ffccd5" />
        </motion.g>

        {/* Right Arm Embracing */}
        <motion.g
          animate={{
            rotate: [0, 4, 0],
          }}
          transition={{
            duration: 2.2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          style={{ transformOrigin: '205px 175px' }}
        >
          <path
            d="M 200 170 C 220 175 220 215 185 210 C 168 208 158 195 162 180 Z"
            fill="url(#th-fur)"
          />
          <circle cx="166" cy="192" r="10" fill="#ffccd5" />
        </motion.g>

        {/* Floating Mini Hearts of Love */}
        <motion.path
          d="M 70 70 C 70 65 65 62 62 65 C 59 68 59 73 62 76 L 70 82 L 78 76 C 81 73 81 68 78 65 C 75 62 70 65 70 70 Z"
          fill="#ff4d6d"
          animate={{
            y: [-4, 4, -4],
            rotate: [-8, 8, -8],
          }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.path
          d="M 210 70 C 210 65 205 62 202 65 C 199 68 199 73 202 76 L 210 82 L 218 76 C 221 73 221 68 218 65 C 215 62 210 65 210 70 Z"
          fill="#ff4d6d"
          animate={{
            y: [4, -4, 4],
            rotate: [8, -8, 8],
          }}
          transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
        />
      </svg>
    </motion.div>
  );
};
