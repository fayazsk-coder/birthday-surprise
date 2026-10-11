import React, { useEffect, useState } from 'react';

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  emoji: string;
}

export const SparkleTrail: React.FC = () => {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    let idCounter = 0;
    const emojis = ['💖', '✨', '🌸', '💕', '🌷', '🤍'];

    const spawnParticle = (x: number, y: number) => {
      const id = ++idCounter;
      const emoji = emojis[Math.floor(Math.random() * emojis.length)];
      const size = Math.floor(Math.random() * 8) + 14;

      setParticles((prev) => [...prev.slice(-15), { id, x, y, size, emoji }]);

      setTimeout(() => {
        setParticles((prev) => prev.filter((p) => p.id !== id));
      }, 900);
    };

    let lastTime = 0;
    const handleMouseMove = (e: MouseEvent) => {
      const now = Date.now();
      if (now - lastTime > 60) {
        lastTime = now;
        spawnParticle(e.clientX, e.clientY);
      }
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        const touch = e.touches[0];
        spawnParticle(touch.clientX, touch.clientY);
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('touchmove', handleTouchMove, { passive: true });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden" aria-hidden="true">
      {particles.map((p) => (
        <span
          key={p.id}
          className="absolute transform -translate-x-1/2 -translate-y-1/2 select-none animate-float-fade"
          style={{
            left: `${p.x}px`,
            top: `${p.y}px`,
            fontSize: `${p.size}px`,
          }}
        >
          {p.emoji}
        </span>
      ))}
    </div>
  );
};
