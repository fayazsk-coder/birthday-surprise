import confetti from 'canvas-confetti';

/**
 * Triggers a romantic burst of heart shapes and pastel particles
 */
export const triggerHeartsConfetti = () => {
  try {
    // Custom heart shape
    const heart = confetti.shapeFromPath({
      path: 'M167 72c19,-38 37,-56 75,-56 42,0 76,33 76,75 0,76 -76,151 -151,227 -75,-76 -151,-151 -151,-227 0,-42 34,-75 76,-75 38,0 57,18 75,56z',
    });

    confetti({
      shapes: [heart, 'circle'],
      particleCount: 50,
      spread: 70,
      origin: { y: 0.65 },
      colors: ['#ff6b8b', '#ff8da1', '#ffc2d1', '#d4a5f9', '#ffd166'],
      scalar: 1.2,
      ticks: 200,
    });
  } catch {
    // Fallback if shapeFromPath fails
    confetti({
      particleCount: 60,
      spread: 70,
      origin: { y: 0.65 },
      colors: ['#ff6b8b', '#ff8da1', '#ffc2d1', '#d4a5f9', '#ffd166'],
    });
  }
};

/**
 * Birthday celebration fireworks / dual side cannons
 */
export const triggerBirthdayBurst = () => {
  const count = 120;
  const defaults = {
    origin: { y: 0.7 },
    colors: ['#ff7597', '#ffb3c6', '#d8b4e2', '#ffe5ec', '#ffccd5', '#ffd700'],
  };

  const fire = (particleRatio: number, opts: confetti.Options) => {
    confetti({
      ...defaults,
      ...opts,
      particleCount: Math.floor(count * particleRatio),
    });
  };

  fire(0.25, {
    spread: 26,
    startVelocity: 55,
  });
  fire(0.2, {
    spread: 60,
  });
  fire(0.35, {
    spread: 100,
    decay: 0.91,
    scalar: 0.8,
  });
  fire(0.1, {
    spread: 120,
    startVelocity: 25,
    decay: 0.92,
    scalar: 1.2,
  });
  fire(0.1, {
    spread: 120,
    startVelocity: 45,
  });
};

/**
 * Screen-wide gentle floating heart shower for the Big Hug
 */
export const triggerHugExplosion = () => {
  const duration = 2.5 * 1000;
  const animationEnd = Date.now() + duration;

  const interval: ReturnType<typeof setInterval> = setInterval(() => {
    const timeLeft = animationEnd - Date.now();
    if (timeLeft <= 0) {
      clearInterval(interval);
      return;
    }

    const particleCount = 25;
    confetti({
      particleCount,
      angle: 60,
      spread: 55,
      origin: { x: 0, y: 0.65 },
      colors: ['#ff4d6d', '#ff758f', '#ff85a1', '#f72585', '#b5179e'],
      scalar: 1.1,
    });
    confetti({
      particleCount,
      angle: 120,
      spread: 55,
      origin: { x: 1, y: 0.65 },
      colors: ['#ff4d6d', '#ff758f', '#ff85a1', '#f72585', '#b5179e'],
      scalar: 1.1,
    });
  }, 250);
};

/**
 * Subtle sparkle shower
 */
export const triggerSparkles = () => {
  confetti({
    particleCount: 30,
    spread: 45,
    origin: { y: 0.6 },
    colors: ['#ffd700', '#fff3b0', '#ffb3c6', '#ffffff'],
    scalar: 0.7,
    ticks: 120,
  });
};
