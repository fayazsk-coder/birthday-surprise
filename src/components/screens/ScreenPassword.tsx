import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Lock, Unlock, Eye, EyeOff, Sparkles, Heart } from 'lucide-react';
import { TeddyWelcome } from '../teddies/TeddyWelcome';
import { surpriseConfig } from '../../config/surpriseConfig';
import { triggerHeartsConfetti } from '../../utils/confetti';
import { sounds } from '../audio/soundEffects';

interface ScreenPasswordProps {
  onUnlockSuccess: () => void;
}

export const ScreenPassword: React.FC<ScreenPasswordProps> = ({ onUnlockSuccess }) => {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);
  const [showHint, setShowHint] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isSuccess) return;

    const trimmed = password.trim().toLowerCase();
    const target = surpriseConfig.security.secretPassword.trim().toLowerCase();
    const alternatives = surpriseConfig.security.alternativePasswords.map((p) =>
      p.trim().toLowerCase()
    );

    if (trimmed === target || alternatives.includes(trimmed)) {
      // Correct password!
      setIsError(false);
      setIsSuccess(true);
      sounds.playChime();
      triggerHeartsConfetti();

      // Give 900ms to enjoy the celebration transition before switching screen
      setTimeout(() => {
        onUnlockSuccess();
      }, 1000);
    } else {
      // Incorrect password
      setIsError(true);
      setErrorMessage(surpriseConfig.security.errorToastMessage);
      sounds.playPop();

      // Shake effect timeout
      setTimeout(() => {
        setIsError(false);
      }, 800);
    }
  };

  return (
    <div className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center px-4 py-8 sm:py-12">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="w-full max-w-lg mx-auto"
      >
        {/* Glassmorphism Card */}
        <div className="relative backdrop-blur-xl bg-white/75 border border-pink-200/80 rounded-3xl p-6 sm:p-10 shadow-[0_20px_60px_-15px_rgba(255,140,165,0.25)] text-center overflow-hidden">
          {/* Subtle Top Glow Accent */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-1 bg-gradient-to-r from-transparent via-rose-400 to-transparent rounded-full" />

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-1.5 px-4 py-1 rounded-full bg-rose-100/80 text-rose-700 text-xs font-semibold tracking-wider uppercase mb-3 border border-rose-200/60 shadow-sm"
          >
            <Sparkles className="w-3.5 h-3.5 text-rose-500" />
            <span>{surpriseConfig.security.welcomeBadge}</span>
          </motion.div>

          {/* Animated Teddy Bear */}
          <div className="my-2 flex justify-center">
            <TeddyWelcome size={210} />
          </div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="font-serif text-2xl sm:text-3xl font-bold text-rose-950 tracking-tight leading-snug mb-2"
          >
            {surpriseConfig.security.welcomeHeading}
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="font-sans text-sm sm:text-base text-rose-900/80 max-w-md mx-auto leading-relaxed mb-6"
          >
            {surpriseConfig.security.welcomeSubheading}
          </motion.p>

          {/* Password Form */}
          <form onSubmit={handleSubmit} className="space-y-4 max-w-sm mx-auto">
            <motion.div
              animate={isError ? { x: [-8, 8, -6, 6, -3, 3, 0] } : {}}
              transition={{ duration: 0.45 }}
              className="relative"
            >
              <div className="relative flex items-center">
                <span className="absolute left-4 text-pink-400 pointer-events-none">
                  <Lock className="w-4 h-4" />
                </span>

                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    if (isError) setIsError(false);
                  }}
                  placeholder={surpriseConfig.security.inputPlaceholder}
                  className={`w-full pl-11 pr-12 py-3.5 text-sm sm:text-base rounded-2xl bg-white/90 border transition-all duration-300 outline-none text-rose-950 placeholder-rose-300 shadow-inner ${
                    isError
                      ? 'border-rose-500 ring-2 ring-rose-400/30'
                      : 'border-pink-200/90 focus:border-rose-400 focus:ring-4 focus:ring-rose-200/40'
                  }`}
                  autoFocus
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3.5 p-1.5 text-rose-400 hover:text-rose-600 rounded-lg transition-colors cursor-pointer"
                  title={showPassword ? 'Hide password' : 'Show password'}
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                >
                  {showPassword ? (
                    <EyeOff className="w-4 h-4" />
                  ) : (
                    <Eye className="w-4 h-4" />
                  )}
                </button>
              </div>

              {/* Error message */}
              <AnimatePresence>
                {isError && (
                  <motion.div
                    initial={{ opacity: 0, y: -4 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -4 }}
                    className="mt-2 text-xs text-rose-600 font-medium bg-rose-50/90 py-1.5 px-3 rounded-xl border border-rose-200 text-center"
                  >
                    {errorMessage}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>

            {/* Unlock Button */}
            <motion.button
              type="submit"
              disabled={isSuccess}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`w-full py-3.5 px-6 rounded-2xl font-semibold text-sm sm:text-base text-white shadow-lg transition-all duration-300 cursor-pointer flex items-center justify-center gap-2 ${
                isSuccess
                  ? 'bg-emerald-500 shadow-emerald-200 ring-4 ring-emerald-300/40'
                  : 'bg-gradient-to-r from-rose-500 via-pink-500 to-rose-400 hover:from-rose-600 hover:to-pink-600 shadow-rose-300/60 ring-2 ring-pink-300/30 hover:shadow-xl'
              }`}
            >
              {isSuccess ? (
                <>
                  <Unlock className="w-4 h-4 animate-bounce" />
                  <span>{surpriseConfig.security.successToastMessage}</span>
                </>
              ) : (
                <>
                  <Sparkles className="w-4 h-4 text-rose-200" />
                  <span>{surpriseConfig.security.unlockButtonText}</span>
                  <Heart className="w-4 h-4 fill-white text-white" />
                </>
              )}
            </motion.button>
          </form>

          {/* Romantic Password Hint Toggle */}
          <div className="mt-5 text-center">
            <button
              type="button"
              onClick={() => setShowHint(!showHint)}
              className="text-xs text-pink-600/80 hover:text-rose-600 underline underline-offset-4 transition-colors cursor-pointer"
            >
              {showHint ? 'Hide Hint 🤫' : 'Need a little hint? 💭'}
            </button>

            <AnimatePresence>
              {showHint && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="mt-2 text-xs text-rose-700 bg-pink-50/90 py-2 px-4 rounded-xl border border-pink-200/80 max-w-sm mx-auto"
                >
                  <p>💡 {surpriseConfig.security.passwordHint}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
