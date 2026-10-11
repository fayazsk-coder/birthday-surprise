import React from 'react';
import { motion } from 'framer-motion';

interface TeddyProps {
  className?: string;
  size?: number;
}

export const TeddyMemories: React.FC<TeddyProps> = ({ className = '', size = 240 }) => {
  return (
    <motion.div
      className={`relative inline-block select-none ${className}`}
      animate={{
        y: [0, -7, 0],
        rotate: [0, -1, 1, 0],
      }}
      transition={{
        duration: 3.8,
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
        className="filter drop-shadow-[0_12px_24px_rgba(192,132,252,0.3)]"
      >
        <defs>
          <radialGradient id="tm-fur" cx="40%" cy="35%" r="65%">
            <stop offset="0%" stopColor="#f7c897" />
            <stop offset="65%" stopColor="#df9c64" />
            <stop offset="100%" stopColor="#c57c43" />
          </radialGradient>
          <radialGradient id="tm-belly" cx="50%" cy="40%" r="60%">
            <stop offset="0%" stopColor="#fff2e2" />
            <stop offset="100%" stopColor="#f8d7b9" />
          </radialGradient>
          <linearGradient id="tm-album" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#a855f7" />
            <stop offset="100%" stopColor="#7e22ce" />
          </linearGradient>
          <filter id="tm-glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Shadow */}
        <ellipse cx="130" cy="245" rx="75" ry="11" fill="rgba(168, 85, 247, 0.2)" />

        {/* Ears */}
        <circle cx="80" cy="80" r="28" fill="url(#tm-fur)" />
        <circle cx="80" cy="80" r="16" fill="#ffccd5" opacity="0.9" />

        <circle cx="180" cy="80" r="28" fill="url(#tm-fur)" />
        <circle cx="180" cy="80" r="16" fill="#ffccd5" opacity="0.9" />

        {/* Body */}
        <ellipse cx="130" cy="180" rx="58" ry="52" fill="url(#tm-fur)" />
        <ellipse cx="130" cy="185" rx="38" ry="36" fill="url(#tm-belly)" />

        {/* Feet */}
        <ellipse cx="85" cy="225" rx="22" ry="16" fill="url(#tm-fur)" />
        <circle cx="85" cy="225" r="11" fill="#ffccd5" />
        <ellipse cx="175" cy="225" rx="22" ry="16" fill="url(#tm-fur)" />
        <circle cx="175" cy="225" r="11" fill="#ffccd5" />

        {/* Head */}
        <circle cx="130" cy="115" r="54" fill="url(#tm-fur)" />
        <ellipse cx="130" cy="130" rx="26" ry="19" fill="url(#tm-belly)" />

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

        {/* Cute Round Glasses / Spectacles! */}
        <g stroke="#d97706" strokeWidth="2.5" fill="none">
          <circle cx="106" cy="108" r="14" />
          <circle cx="154" cy="108" r="14" />
          <path d="M 120 108 L 140 108" />
        </g>

        {/* Eyes Behind Glasses */}
        <circle cx="106" cy="108" r="7.5" fill="#2d170e" />
        <circle cx="104" cy="106" r="2.8" fill="#ffffff" />
        <circle cx="108" cy="110" r="1.2" fill="#ffffff" />

        <circle cx="154" cy="108" r="7.5" fill="#2d170e" />
        <circle cx="152" cy="106" r="2.8" fill="#ffffff" />
        <circle cx="156" cy="110" r="1.2" fill="#ffffff" />

        {/* Cheeks */}
        <ellipse cx="90" cy="125" rx="10" ry="6" fill="#ff758f" opacity="0.65" />
        <ellipse cx="170" cy="125" rx="10" ry="6" fill="#ff758f" opacity="0.65" />

        {/* Paws Holding Photo Album Scrapbook */}
        <g transform="translate(80, 150)">
          {/* Scrapbook Album Cover */}
          <rect
            x="8"
            y="8"
            width="84"
            height="58"
            rx="6"
            fill="url(#tm-album)"
            stroke="#e9d5ff"
            strokeWidth="2"
          />
          {/* Album Spine */}
          <rect x="8" y="8" width="10" height="58" rx="3" fill="#581c87" />
          <line x1="18" y1="8" x2="18" y2="66" stroke="#c084fc" strokeWidth="1.5" />

          {/* Golden Heart on Album Cover */}
          <path
            d="M 52 24 C 52 20 48 18 45 20 C 42 22 42 26 45 29 L 52 35 L 59 29 C 62 26 62 22 59 20 C 56 18 52 20 52 24 Z"
            fill="#ffd166"
            filter="url(#tm-glow)"
          />

          {/* Mini Polaroid Photo Peeking Out */}
          <g transform="translate(30, -10) rotate(12)">
            <rect x="0" y="0" width="34" height="42" rx="3" fill="#ffffff" stroke="#e2e8f0" strokeWidth="1" />
            <rect x="3" y="3" width="28" height="26" rx="2" fill="#f472b6" />
            {/* Tiny Heart inside Polaroid */}
            <circle cx="17" cy="16" r="6" fill="#ffffff" opacity="0.9" />
            <path
              d="M 17 14 C 17 12 15 11 14 12 C 13 13 13 15 14 16 L 17 19 L 20 16 C 21 15 21 13 20 12 C 19 11 17 12 17 14 Z"
              fill="#ec4899"
            />
          </g>

          {/* Left Paw holding book edge */}
          <circle cx="6" cy="36" r="14" fill="url(#tm-fur)" />
          <circle cx="6" cy="36" r="7" fill="#ffccd5" />

          {/* Right Paw holding book edge */}
          <circle cx="94" cy="36" r="14" fill="url(#tm-fur)" />
          <circle cx="94" cy="36" r="7" fill="#ffccd5" />
        </g>

        {/* Vintage pastel Camera hanging across neck */}
        <g transform="translate(170, 138) rotate(-15)">
          <rect x="0" y="0" width="30" height="22" rx="4" fill="#fb7185" stroke="#ffe4e6" strokeWidth="1.5" />
          <circle cx="15" cy="11" r="7" fill="#334155" />
          <circle cx="15" cy="11" r="4.5" fill="#64748b" />
          <circle cx="16" cy="9.5" r="1.5" fill="#ffffff" />
          <rect x="5" y="-3" width="6" height="3" rx="1" fill="#e2e8f0" />
          <circle cx="23" cy="5" r="2" fill="#ffd166" />
        </g>
      </svg>
    </motion.div>
  );
};
