import React from 'react';
import { motion } from 'framer-motion';

interface TeddyProps {
  className?: string;
  size?: number;
}

export const TeddyLetter: React.FC<TeddyProps> = ({ className = '', size = 240 }) => {
  return (
    <motion.div
      className={`relative inline-block select-none ${className}`}
      animate={{
        y: [0, -7, 0],
        rotate: [0, 1.2, -1.2, 0],
      }}
      transition={{
        duration: 3.6,
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
        className="filter drop-shadow-[0_12px_24px_rgba(251,113,133,0.3)]"
      >
        <defs>
          <radialGradient id="tl-fur" cx="40%" cy="35%" r="65%">
            <stop offset="0%" stopColor="#f7c897" />
            <stop offset="65%" stopColor="#df9c64" />
            <stop offset="100%" stopColor="#c57c43" />
          </radialGradient>
          <radialGradient id="tl-belly" cx="50%" cy="40%" r="60%">
            <stop offset="0%" stopColor="#fff2e2" />
            <stop offset="100%" stopColor="#f8d7b9" />
          </radialGradient>
          <linearGradient id="tl-env" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#fff1f2" />
            <stop offset="100%" stopColor="#ffe4e6" />
          </linearGradient>
          <filter id="tl-glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Shadow */}
        <ellipse cx="130" cy="245" rx="75" ry="11" fill="rgba(251, 113, 133, 0.2)" />

        {/* Ears */}
        <circle cx="80" cy="80" r="28" fill="url(#tl-fur)" />
        <circle cx="80" cy="80" r="16" fill="#ffccd5" opacity="0.9" />

        <circle cx="180" cy="80" r="28" fill="url(#tl-fur)" />
        <circle cx="180" cy="80" r="16" fill="#ffccd5" opacity="0.9" />

        {/* Body */}
        <ellipse cx="130" cy="180" rx="58" ry="52" fill="url(#tl-fur)" />
        <ellipse cx="130" cy="185" rx="38" ry="36" fill="url(#tl-belly)" />

        {/* Feet */}
        <ellipse cx="85" cy="225" rx="22" ry="16" fill="url(#tl-fur)" />
        <circle cx="85" cy="225" r="11" fill="#ffccd5" />
        <ellipse cx="175" cy="225" rx="22" ry="16" fill="url(#tl-fur)" />
        <circle cx="175" cy="225" r="11" fill="#ffccd5" />

        {/* Head */}
        <circle cx="130" cy="115" r="54" fill="url(#tl-fur)" />
        <ellipse cx="130" cy="130" rx="26" ry="19" fill="url(#tl-belly)" />

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

        {/* Blushing Cheeks */}
        <ellipse cx="90" cy="125" rx="10" ry="6" fill="#ff758f" opacity="0.65" />
        <ellipse cx="170" cy="125" rx="10" ry="6" fill="#ff758f" opacity="0.65" />

        {/* Soft Dreamy Eyes */}
        <circle cx="108" cy="109" r="8.5" fill="#2d170e" />
        <circle cx="105.5" cy="106.5" r="3.2" fill="#ffffff" />
        <circle cx="110.5" cy="111" r="1.5" fill="#ffffff" />

        <circle cx="152" cy="109" r="8.5" fill="#2d170e" />
        <circle cx="149.5" cy="106.5" r="3.2" fill="#ffffff" />
        <circle cx="154.5" cy="111" r="1.5" fill="#ffffff" />

        {/* Cute Rose Blossom in hair / ear */}
        <g transform="translate(68, 60)">
          <circle cx="0" cy="0" r="7" fill="#fb7185" />
          <path d="M -4 -2 C -2 -6 2 -6 4 -2 C 6 2 2 6 -2 5 Z" fill="#f43f5e" />
          <circle cx="1" cy="0" r="2" fill="#fff1f2" />
        </g>

        {/* Romantic Envelope Held with Both Paws */}
        <g transform="translate(82, 145)">
          {/* Envelope Body */}
          <rect
            x="0"
            y="0"
            width="96"
            height="64"
            rx="5"
            fill="url(#tl-env)"
            stroke="#fbcfe8"
            strokeWidth="1.5"
          />

          {/* Envelope Back Folds */}
          <path d="M 0 0 L 48 38 L 96 0" stroke="#fda4af" strokeWidth="1.5" fill="none" />
          <path d="M 0 64 L 38 30" stroke="#fecdd3" strokeWidth="1" fill="none" />
          <path d="M 96 64 L 58 30" stroke="#fecdd3" strokeWidth="1" fill="none" />

          {/* Golden / Red Wax Seal with Heart */}
          <circle cx="48" cy="38" r="11" fill="#e11d48" filter="url(#tl-glow)" />
          <path
            d="M 48 35 C 48 32 45 30 43 32 C 41 33 41 36 43 38 L 48 42 L 53 38 C 55 36 55 33 53 32 C 51 30 48 32 48 35 Z"
            fill="#ffffff"
          />

          {/* Left Paw holding letter */}
          <circle cx="-2" cy="34" r="14" fill="url(#tl-fur)" />
          <circle cx="-2" cy="34" r="7" fill="#ffccd5" />

          {/* Right Paw holding letter */}
          <circle cx="98" cy="34" r="14" fill="url(#tl-fur)" />
          <circle cx="98" cy="34" r="7" fill="#ffccd5" />
        </g>

        {/* Floating Mini Hearts floating up from letter */}
        <motion.g
          animate={{
            y: [-2, -10, -2],
            opacity: [0.7, 1, 0.7],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          transform="translate(130, 128)"
        >
          <path
            d="M 0 0 C -2 -3 -5 -3 -6 0 C -8 3 -5 6 0 9 C 5 6 8 3 6 0 C 5 -3 2 -3 0 0 Z"
            fill="#f43f5e"
          />
        </motion.g>
      </svg>
    </motion.div>
  );
};
