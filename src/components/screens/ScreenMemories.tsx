import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Heart, Sparkles, Feather } from 'lucide-react';
import { TeddyMemories } from '../teddies/TeddyMemories';
import { surpriseConfig } from '../../config/surpriseConfig';
import { sounds } from '../audio/soundEffects';
import { triggerHeartsConfetti, triggerSparkles } from '../../utils/confetti';

interface ScreenMemoriesProps {
  onBack: () => void;
  onOpenGuide: () => void;
}

export const ScreenMemories: React.FC<ScreenMemoriesProps> = ({ onBack }) => {
  const [loveCount, setLoveCount] = useState(1);
  const [showHeartBurst, setShowHeartBurst] = useState(false);

  const handleSendLove = () => {
    sounds.playPop();
    setLoveCount((c) => c + 1);
    setShowHeartBurst(true);
    triggerSparkles();
    if (loveCount % 3 === 0) {
      triggerHeartsConfetti();
    }
    setTimeout(() => setShowHeartBurst(false), 900);
  };

  return (
    <div className="min-h-[calc(100vh-4rem)] px-4 py-8 sm:py-12 max-w-4xl mx-auto flex flex-col justify-center items-center">
      {/* Top Navigation Row */}
      <div className="w-full mb-6 flex justify-between items-center">
        <button
          onClick={onBack}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 hover:bg-pink-100/90 text-purple-800 text-sm font-medium transition-all shadow-sm border border-purple-200 cursor-pointer group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span>Back to My Teddy Bears 🧸</span>
        </button>

        <span className="text-xs text-purple-700 bg-purple-50 px-3 py-1 rounded-full border border-purple-200 flex items-center gap-1.5 font-sans font-medium">
          <Heart className="w-3.5 h-3.5 fill-purple-400 text-purple-500" />
          <span>Sirf Chokkiii Maaa Ke Liye ❤️</span>
        </span>
      </div>

      {/* Main Shayari Showcase Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="w-full relative backdrop-blur-xl bg-gradient-to-b from-[#fffdf9] to-[#fff6f8] border-2 border-rose-300/80 rounded-3xl p-7 sm:p-12 shadow-[0_25px_60px_-15px_rgba(216,180,254,0.35)] text-center overflow-hidden"
      >
        {/* Soft Decorative Borders & Corners */}
        <div className="absolute inset-3 border border-pink-200/60 rounded-2xl pointer-events-none" />
        <div className="absolute top-4 left-4 text-rose-300">
          <Heart className="w-4 h-4 fill-rose-200" />
        </div>
        <div className="absolute top-4 right-4 text-rose-300">
          <Heart className="w-4 h-4 fill-rose-200" />
        </div>
        <div className="absolute bottom-4 left-4 text-rose-300">
          <Heart className="w-4 h-4 fill-rose-200" />
        </div>
        <div className="absolute bottom-4 right-4 text-rose-300">
          <Heart className="w-4 h-4 fill-rose-200" />
        </div>

        {/* Cute Teddy Illustration */}
        <div className="flex justify-center mb-3">
          <TeddyMemories size={180} />
        </div>

        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-100 text-purple-800 text-xs sm:text-sm font-semibold tracking-wider mb-4 border border-purple-200">
          <Feather className="w-3.5 h-3.5 text-purple-600" />
          <span>Fayzuuu Ki Dil Se Likhi Shayari</span>
          <Sparkles className="w-3.5 h-3.5 text-amber-500" />
        </div>

        {/* Main Title */}
        <h1 className="font-serif text-2xl sm:text-4xl font-bold text-rose-950 mb-2 tracking-tight">
          {surpriseConfig.shayariData.heading}
        </h1>

        <p className="font-sans text-xs sm:text-sm text-purple-900/70 mb-8 italic">
          “Kuch baatein lafzon se nahi, bas dil se mehsoos hoti hain...”
        </p>

        {/* THE SHAYARI (In large, elegant romantic calligraphy presentation) */}
        <div className="relative my-6 py-6 sm:py-8 px-4 sm:px-8 bg-gradient-to-r from-rose-50/80 via-white to-pink-50/80 rounded-2xl border border-rose-200 shadow-sm max-w-2xl mx-auto">
          {/* Subtle quotation marks */}
          <span className="text-4xl sm:text-5xl font-serif text-rose-300 absolute -top-4 left-4 opacity-70">
            “
          </span>

          <div className="space-y-4 font-serif text-lg sm:text-2xl text-rose-950 leading-relaxed font-semibold">
            {surpriseConfig.shayariData.lines.map((line, index) => (
              <p
                key={index}
                className={
                  index === 2
                    ? 'text-rose-600 font-bold sm:text-2xl pt-2'
                    : 'text-rose-900'
                }
              >
                {line}
              </p>
            ))}
          </div>

          <span className="text-4xl sm:text-5xl font-serif text-rose-300 absolute -bottom-6 right-4 opacity-70">
            ”
          </span>
        </div>

        {/* Heartfelt Note from Fayzuuu */}
        <div className="max-w-xl mx-auto mt-8 mb-6 p-5 rounded-2xl bg-white/80 border border-pink-200 text-left font-sans text-xs sm:text-sm text-rose-900/90 leading-relaxed shadow-inner">
          <div className="flex items-center gap-2 mb-2 font-semibold text-rose-950 font-serif text-base">
            <Heart className="w-4 h-4 fill-rose-500 text-rose-500" />
            <span>Meri Chokkiii Maaa Ke Liye Ek Chhoti Si Baat</span>
          </div>
          <p className="italic">
            {surpriseConfig.shayariData.concludingNote}
          </p>

          <div className="mt-3 pt-2 border-t border-pink-100 flex items-center justify-between text-xs text-rose-600 font-semibold">
            <span>~ Hamesha sirf tumhara, Fayzuuu</span>
            <span className="text-[11px] text-purple-600">
              {surpriseConfig.shayariData.secretLoveTag}
            </span>
          </div>
        </div>

        {/* Heart Reaction Button */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-6">
          <motion.button
            onClick={handleSendLove}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 via-pink-600 to-rose-500 text-white font-medium text-sm sm:text-base shadow-lg shadow-pink-200 hover:shadow-xl cursor-pointer flex items-center gap-2"
          >
            <Heart className="w-4 h-4 fill-white" />
            <span>Send Dil Se Pyaar ({loveCount} ❤️)</span>
          </motion.button>
        </div>

        {/* Heart Burst Animation */}
        <AnimatePresence>
          {showHeartBurst && (
            <motion.div
              initial={{ scale: 0.5, opacity: 1, y: 0 }}
              animate={{ scale: 1.8, opacity: 0, y: -40 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8 }}
              className="absolute inset-0 flex items-center justify-center pointer-events-none"
            >
              <Heart className="w-28 h-28 text-rose-500 fill-rose-500 drop-shadow-xl" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Back to Teddy Bears Button */}
      <div className="mt-8 flex justify-center">
        <motion.button
          onClick={onBack}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
          className="py-3 px-8 rounded-full bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 text-white font-medium text-sm sm:text-base shadow-md hover:shadow-lg cursor-pointer flex items-center gap-2"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to My Teddy Bears 🧸</span>
        </motion.button>
      </div>
    </div>
  );
};
