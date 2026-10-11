import React from 'react';
import { motion } from 'framer-motion';

interface TeddyProps {
  className?: string;
  size?: number;
}

export const TeddyWelcome: React.FC<TeddyProps> = ({ className = '', size = 220 }) => {
  return (
    <motion.div
      className={`relative inline-block select-none ${className}`}
      animate={{
        y: [0, -8, 0],
        rotate: [0, 1.5, -1.5, 0],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 240 240"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="filter drop-shadow-[0_12px_20px_rgba(244,114,182,0.25)]"
      >
        <defs>
          <radialGradient id="tw-fur" cx="40%" cy="35%" r="65%">
            <stop offset="0%" stopColor="#f3be8c" />
            <stop offset="65%" stopColor="#d9935d" />
            <stop offset="100%" stopColor="#be7640" />
          </radialGradient>
          <radialGradient id="tw-belly" cx="50%" cy="40%" r="60%">
            <stop offset="0%" stopColor="#fff1e0" />
            <stop offset="100%" stopColor="#f7d5b8" />
          </radialGradient>
          <linearGradient id="tw-pink" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#ff9ebb" />
            <stop offset="100%" stopColor="#ff6584" />
          </linearGradient>
          <filter id="tw-glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Shadow */}
        <ellipse cx="120" cy="225" rx="65" ry="10" fill="rgba(219, 112, 147, 0.2)" />

        {/* Ears */}
        {/* Left Ear */}
        <circle cx="70" cy="65" r="28" fill="url(#tw-fur)" />
        <circle cx="70" cy="65" r="16" fill="#ffccd5" opacity="0.9" />

        {/* Right Ear */}
        <circle cx="170" cy="65" r="28" fill="url(#tw-fur)" />
        <circle cx="170" cy="65" r="16" fill="#ffccd5" opacity="0.9" />

        {/* Body */}
        <ellipse cx="120" cy="165" rx="56" ry="52" fill="url(#tw-fur)" />
        {/* Cute Tummy */}
        <ellipse cx="120" cy="170" rx="38" ry="36" fill="url(#tw-belly)" />
        {/* Little Belly Button */}
        <ellipse cx="120" cy="180" rx="3" ry="2" fill="#c07d4b" opacity="0.6" />

        {/* Feet / Paws */}
        <ellipse cx="78" cy="208" rx="22" ry="16" fill="url(#tw-fur)" />
        <circle cx="78" cy="208" r="11" fill="#ffccd5" />
        <ellipse cx="162" cy="208" rx="22" ry="16" fill="url(#tw-fur)" />
        <circle cx="162" cy="208" r="11" fill="#ffccd5" />

        {/* Left Arm (Holding little floating heart) */}
        <path
          d="M 68 150 C 45 155 35 175 48 188 C 58 198 75 185 80 170 Z"
          fill="url(#tw-fur)"
        />

        {/* Head */}
        <circle cx="120" cy="100" r="54" fill="url(#tw-fur)" />

        {/* Snout / Muzzle */}
        <ellipse cx="120" cy="115" rx="26" ry="19" fill="url(#tw-belly)" />

        {/* Nose */}
        <path
          d="M 112 107 C 112 104 128 104 128 107 C 128 114 120 117 120 117 C 120 117 112 114 112 107 Z"
          fill="#3e2213"
        />
        {/* Mouth */}
        <path
          d="M 120 117 L 120 124 M 113 123 C 117 127 120 125 120 124 C 120 125 123 127 127 123"
          stroke="#3e2213"
          strokeWidth="2.5"
          strokeLinecap="round"
        />

        {/* Big Cute Sparkling Eyes */}
        {/* Left Eye */}
        <circle cx="98" cy="94" r="8.5" fill="#2d170e" />
        <circle cx="95.5" cy="91.5" r="3.2" fill="#ffffff" />
        <circle cx="100.5" cy="96" r="1.5" fill="#ffffff" />

        {/* Right Eye */}
        <circle cx="142" cy="94" r="8.5" fill="#2d170e" />
        <circle cx="139.5" cy="91.5" r="3.2" fill="#ffffff" />
        <circle cx="144.5" cy="96" r="1.5" fill="#ffffff" />

        {/* Rosy Blushing Cheeks */}
        <ellipse cx="82" cy="110" rx="10" ry="6" fill="#ff758f" opacity="0.65" />
        <ellipse cx="158" cy="110" rx="10" ry="6" fill="#ff758f" opacity="0.65" />

        {/* Right Arm (Waving Paw!) */}
        <motion.g
          animate={{
            rotate: [0, 20, -8, 18, 0],
          }}
          transition={{
            duration: 2.2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          style={{ transformOrigin: '165px 145px' }}
        >
          <path
            d="M 165 145 C 190 135 210 115 198 98 C 188 88 170 108 160 130 Z"
            fill="url(#tw-fur)"
          />
          <circle cx="196" cy="103" r="10" fill="#ffccd5" />
        </motion.g>

        {/* Cute Pink Bow on Neck */}
        <g transform="translate(120, 142)">
          <path d="M 0 0 L -14 -8 C -18 0 -18 8 -14 10 Z" fill="url(#tw-pink)" />
          <path d="M 0 0 L 14 -8 C 18 0 18 8 14 10 Z" fill="url(#tw-pink)" />
          <circle cx="0" cy="1" r="5" fill="#ff4d6d" />
        </g>

        {/* Floating Heart Held by Bear */}
        <motion.g
          animate={{
            y: [-3, 3, -3],
            scale: [1, 1.08, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          transform="translate(42, 130)"
        >
          <path
            d="M 12 4 C 12 0 6 -2 3 1 C -1 4 -1 10 3 14 L 12 22 L 21 14 C 25 10 25 4 21 1 C 18 -2 12 0 12 4 Z"
            fill="#ff4d6d"
            filter="url(#tw-glow)"
          />
        </motion.g>

        {/* Sparkles around head */}
        <circle cx="60" cy="40" r="2.5" fill="#ffd166" className="animate-ping" style={{ animationDuration: '3s' }} />
        <circle cx="190" cy="50" r="2.5" fill="#ffd166" className="animate-ping" style={{ animationDuration: '2.5s' }} />
      </svg>
    </motion.div>
  );
};
