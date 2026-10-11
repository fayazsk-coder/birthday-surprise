import React, { useMemo } from 'react';
import { surpriseConfig } from '../../config/surpriseConfig';

interface FloatingItem {
  id: number;
  size: number;
  left: number;
  top: number;
  duration: number;
  delay: number;
  type: 'heart' | 'sparkle' | 'bubble';
  opacity: number;
}

export const FloatingElements: React.FC = () => {
  const count = surpriseConfig.theme.floatingHeartsCount || 20;

  const items: FloatingItem[] = useMemo(() => {
    const list: FloatingItem[] = [];
    const types: ('heart' | 'sparkle' | 'bubble')[] = ['heart', 'heart', 'sparkle', 'bubble'];

    for (let i = 0; i < count; i++) {
      list.push({
        id: i,
        size: Math.floor(Math.random() * 22) + 12,
        left: Math.random() * 96 + 2,
        top: Math.random() * 96 + 2,
        duration: Math.random() * 10 + 12,
        delay: Math.random() * 8,
        type: types[i % types.length],
        opacity: Math.random() * 0.4 + 0.35,
      });
    }
    return list;
  }, [count]);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0" aria-hidden="true">
      {/* Soft romantic ambient gradient meshes in background */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-pink-200/40 rounded-full blur-3xl" />
      <div className="absolute top-1/3 -right-32 w-[28rem] h-[28rem] bg-purple-200/35 rounded-full blur-3xl" />
      <div className="absolute -bottom-32 left-1/3 w-[32rem] h-[32rem] bg-rose-200/40 rounded-full blur-3xl" />

      {/* Floating particles */}
      {items.map((item) => (
        <div
          key={item.id}
          className="absolute animate-float"
          style={{
            left: `${item.left}%`,
            top: `${item.top}%`,
            animationDuration: `${item.duration}s`,
            animationDelay: `${item.delay}s`,
            opacity: item.opacity,
          }}
        >
          {item.type === 'heart' && (
            <svg
              width={item.size}
              height={item.size}
              viewBox="0 0 24 24"
              fill="currentColor"
              className="text-pink-400/80 drop-shadow-sm transform hover:scale-125 transition-transform"
            >
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
          )}

          {item.type === 'sparkle' && (
            <svg
              width={item.size * 0.8}
              height={item.size * 0.8}
              viewBox="0 0 24 24"
              fill="currentColor"
              className="text-amber-300/80 drop-shadow-sm"
            >
              <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
            </svg>
          )}

          {item.type === 'bubble' && (
            <div
              className="rounded-full bg-gradient-to-tr from-pink-300/40 to-purple-300/30 backdrop-blur-[1px] border border-white/40"
              style={{
                width: `${item.size * 1.2}px`,
                height: `${item.size * 1.2}px`,
              }}
            />
          )}
        </div>
      ))}
    </div>
  );
};
