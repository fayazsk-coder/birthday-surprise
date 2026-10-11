import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Heart, Gift, ArrowLeft } from 'lucide-react';
import { TeddyCountdown } from '../teddies/TeddyCountdown';
import { surpriseConfig } from '../../config/surpriseConfig';
import { calculateTimeLeft, formatBirthdayDisplay, type TimeLeft } from '../../utils/countdown';
import { triggerBirthdayBurst } from '../../utils/confetti';
import { sounds } from '../audio/soundEffects';

interface ScreenCountdownProps {
  onBack: () => void;
}

export const ScreenCountdown: React.FC<ScreenCountdownProps> = ({ onBack }) => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(() =>
    calculateTimeLeft(surpriseConfig.birthday.targetDate)
  );
  const [isGiftOpened, setIsGiftOpened] = useState(false);

  // Update countdown every second
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(surpriseConfig.birthday.targetDate));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Gift opening trigger
  const handleOpenGift = () => {
    setIsGiftOpened(true);
    sounds.playChime();
    triggerBirthdayBurst();
  };

  // Auto trigger birthday burst on first view after short moment
  useEffect(() => {
    const burstTimeout = setTimeout(() => {
      triggerBirthdayBurst();
    }, 600);
    return () => clearTimeout(burstTimeout);
  }, []);

  return (
    <div className="min-h-[calc(100vh-4rem)] px-4 py-8 sm:py-12 max-w-5xl mx-auto flex flex-col items-center justify-center">
      {/* Back button */}
      <div className="w-full mb-6 flex justify-between items-center">
        <button
          onClick={onBack}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 hover:bg-pink-100/90 text-rose-700 text-sm font-medium transition-all shadow-sm border border-pink-200 cursor-pointer group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span>Back to My Teddy Bears</span>
        </button>

        <span className="text-xs text-rose-800/70 bg-rose-100/70 px-3 py-1 rounded-full border border-rose-200">
          Target Date: {formatBirthdayDisplay(surpriseConfig.birthday.targetDate)}
        </span>
      </div>

      {/* Main Glassmorphism Celebration Container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="w-full backdrop-blur-xl bg-white/80 border border-pink-200/90 rounded-3xl p-6 sm:p-10 shadow-[0_20px_60px_-15px_rgba(255,140,165,0.25)] text-center relative overflow-hidden"
      >
        {/* Top Gradient Bar */}
        <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-rose-400 via-pink-400 to-amber-300" />

        {/* Glowing Advance Wishes Highlight Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-rose-500 via-pink-500 to-amber-400 text-white text-xs sm:text-sm font-extrabold tracking-wider mb-4 shadow-[0_0_20px_rgba(244,63,94,0.6)] animate-pulse"
        >
          <Sparkles className="w-4 h-4 text-amber-200" />
          <span>{surpriseConfig.birthday.countdownBadge}</span>
          <Heart className="w-4 h-4 fill-white text-white" />
        </motion.div>

        {/* Animated Teddy */}
        <div className="flex justify-center mb-4">
          <TeddyCountdown size={220} />
        </div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="font-serif text-2xl sm:text-4xl md:text-5xl font-bold text-rose-950 mb-3 tracking-tight"
        >
          {surpriseConfig.birthday.countdownHeading}
        </motion.h1>

        {/* Subtitle / Days Badge */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="font-sans text-base sm:text-xl font-medium text-rose-700 mb-8"
        >
          {timeLeft.isComplete ? (
            <span className="text-emerald-600 font-bold">🎉 IT'S YOUR BIRTHDAY TODAY! HAPPY BIRTHDAY, CHOKKIII MAAA! 🎂</span>
          ) : (
            <span>
              Only <strong className="text-rose-600 font-bold text-xl sm:text-2xl">{timeLeft.days} Days</strong> to Go Until My Special Day!
            </span>
          )}
        </motion.div>

        {/* REAL-TIME COUNTDOWN TIMER DIGITS */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 max-w-xl mx-auto mb-10">
          {/* Days */}
          <div className="backdrop-blur-md bg-white/90 border border-pink-200 rounded-2xl p-4 shadow-sm relative overflow-hidden group hover:border-rose-400 transition-colors">
            <div className="font-serif text-3xl sm:text-5xl font-bold text-rose-600 tracking-tight">
              {timeLeft.formattedDays}
            </div>
            <div className="text-xs uppercase tracking-wider font-semibold text-rose-800/80 mt-1">
              Days
            </div>
          </div>

          {/* Hours */}
          <div className="backdrop-blur-md bg-white/90 border border-pink-200 rounded-2xl p-4 shadow-sm relative overflow-hidden group hover:border-rose-400 transition-colors">
            <div className="font-serif text-3xl sm:text-5xl font-bold text-rose-600 tracking-tight">
              {timeLeft.formattedHours}
            </div>
            <div className="text-xs uppercase tracking-wider font-semibold text-rose-800/80 mt-1">
              Hours
            </div>
          </div>

          {/* Minutes */}
          <div className="backdrop-blur-md bg-white/90 border border-pink-200 rounded-2xl p-4 shadow-sm relative overflow-hidden group hover:border-rose-400 transition-colors">
            <div className="font-serif text-3xl sm:text-5xl font-bold text-rose-600 tracking-tight">
              {timeLeft.formattedMinutes}
            </div>
            <div className="text-xs uppercase tracking-wider font-semibold text-rose-800/80 mt-1">
              Minutes
            </div>
          </div>

          {/* Seconds */}
          <div className="backdrop-blur-md bg-white/90 border border-pink-200 rounded-2xl p-4 shadow-sm relative overflow-hidden group hover:border-rose-400 transition-colors">
            <motion.div
              key={timeLeft.seconds}
              initial={{ scale: 1.15, opacity: 0.8 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.25 }}
              className="font-serif text-3xl sm:text-5xl font-bold text-rose-500 tracking-tight"
            >
              {timeLeft.formattedSeconds}
            </motion.div>
            <div className="text-xs uppercase tracking-wider font-semibold text-rose-800/80 mt-1">
              Seconds
            </div>
          </div>
        </div>

        {/* Interactive Surprise Gift Box */}
        <div className="mb-10">
          <AnimatePresence mode="wait">
            {!isGiftOpened ? (
              <motion.button
                key="closed-gift"
                onClick={handleOpenGift}
                whileHover={{ scale: 1.05, rotate: [-1, 1, -1] }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-3 px-6 py-3.5 rounded-full bg-gradient-to-r from-rose-500 via-pink-500 to-rose-400 text-white font-semibold text-sm sm:text-base shadow-lg shadow-rose-200 hover:shadow-xl cursor-pointer"
              >
                <Gift className="w-5 h-5 text-amber-200 animate-bounce" />
                <span>Tap to Unbox a Little Hug & Sparkles 🎁✨</span>
              </motion.button>
            ) : (
              <motion.div
                key="opened-gift"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-rose-100 text-rose-700 text-sm font-semibold border border-rose-200"
              >
                <Sparkles className="w-4 h-4 text-amber-500" />
                <span>Gift Unboxed! Filled with endless love for you! 💖</span>
                <button
                  onClick={handleOpenGift}
                  className="ml-2 text-xs text-rose-600 underline cursor-pointer hover:text-rose-800"
                >
                  (Fire again! 🎆)
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* HEARTFELT CELEBRATION MESSAGE (Exact text as requested) */}
        <div className="backdrop-blur-md bg-rose-50/70 border border-pink-200/80 rounded-2xl p-6 sm:p-8 max-w-2xl mx-auto text-left shadow-inner">
          <div className="flex items-center gap-2 mb-4">
            <Heart className="w-5 h-5 text-rose-500 fill-rose-400" />
            <h3 className="font-serif text-lg sm:text-xl font-bold text-rose-950">
              A Special Message From My Heart
            </h3>
          </div>

          <div className="space-y-4 font-sans text-sm sm:text-base text-rose-950/85 leading-relaxed">
            {surpriseConfig.birthday.celebrationText.map((paragraph, idx) => (
              <p key={idx} className={idx === surpriseConfig.birthday.celebrationText.length - 1 ? 'font-semibold text-rose-700 pt-2' : ''}>
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        {/* Back to Teddy Bears Button */}
        <div className="mt-8 flex justify-center">
          <motion.button
            onClick={onBack}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="py-3 px-8 rounded-full bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white font-medium text-sm sm:text-base shadow-md hover:shadow-lg cursor-pointer flex items-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to My Teddy Bears 🧸</span>
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
};
