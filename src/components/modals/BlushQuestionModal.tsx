import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, X, RefreshCw } from 'lucide-react';
import { TeddyHug } from '../teddies/TeddyHug';
import { triggerHeartsConfetti, triggerHugExplosion, triggerSparkles } from '../../utils/confetti';
import { sounds } from '../audio/soundEffects';

interface BlushModalProps {
  isOpen: boolean;
  onClose: () => void;
}

type Choice = 'kiss' | 'hug' | 'both' | null;

export const BlushQuestionModal: React.FC<BlushModalProps> = ({ isOpen, onClose }) => {
  const [selectedChoice, setSelectedChoice] = useState<Choice>(null);

  if (!isOpen) return null;

  const handleSelect = (choice: Choice) => {
    setSelectedChoice(choice);
    sounds.playChime();

    if (choice === 'kiss') {
      triggerHeartsConfetti();
    } else if (choice === 'hug') {
      triggerHugExplosion();
    } else if (choice === 'both') {
      triggerHugExplosion();
      setTimeout(triggerHeartsConfetti, 400);
      setTimeout(triggerSparkles, 800);
    }
  };

  const handleReset = () => {
    setSelectedChoice(null);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-rose-950/75 backdrop-blur-md">
        <div className="absolute inset-0" onClick={onClose} />

        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.85, y: 30 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          className="relative z-10 w-full max-w-lg bg-gradient-to-b from-[#fffdf9] via-pink-50/80 to-[#ffeef4] rounded-3xl p-6 sm:p-8 text-center shadow-[0_25px_60px_-15px_rgba(244,63,94,0.4)] border-2 border-rose-300 overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 p-2 rounded-full bg-white/90 text-rose-700 hover:bg-rose-100 transition-colors shadow-sm cursor-pointer"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Top Cute Badge */}
          <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-rose-100 text-rose-700 text-xs font-bold tracking-wider mb-3 border border-rose-200 shadow-sm animate-pulse">
            <Sparkles className="w-3.5 h-3.5 text-amber-500" />
            <span>Fayzuuu Ka Special Secret Question 🙈❤️</span>
          </div>

          <AnimatePresence mode="wait">
            {!selectedChoice ? (
              /* QUESTION STATE */
              <motion.div
                key="question"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="space-y-4"
              >
                {/* Cute Teddy Face / Illustration */}
                <div className="flex justify-center my-2">
                  <TeddyHug size={180} />
                </div>

                <h3 className="font-serif text-2xl sm:text-3xl font-extrabold text-rose-950 tracking-tight leading-snug">
                  One Little Question for You, Bubbuuuu... 🙈💋
                </h3>

                <p className="font-sans text-xs sm:text-sm text-rose-900/85 max-w-md mx-auto leading-relaxed italic bg-rose-100/60 p-3 rounded-2xl border border-rose-200">
                  “Now that you saw all three little surprises... Tell me honestly, what would you like to give Fayzuuu right now? 💖”
                </p>

                {/* The 3 Playful Options */}
                <div className="space-y-2.5 pt-2 max-w-sm mx-auto">
                  {/* Option 1: Kiss */}
                  <motion.button
                    whileHover={{ scale: 1.03, x: 4 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={() => handleSelect('kiss')}
                    className="w-full py-3.5 px-5 rounded-2xl bg-white hover:bg-rose-50 border-2 border-rose-300/80 text-rose-900 font-semibold text-sm sm:text-base flex items-center justify-between shadow-sm cursor-pointer transition-all group"
                  >
                    <span className="flex items-center gap-2">
                      <span className="text-xl">💋</span>
                      <span>A Sweet Little Kiss</span>
                    </span>
                    <span className="text-xs text-rose-500 font-sans font-normal opacity-80 group-hover:opacity-100">
                      (Sharmana mat! 🙈)
                    </span>
                  </motion.button>

                  {/* Option 2: Hug */}
                  <motion.button
                    whileHover={{ scale: 1.03, x: 4 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={() => handleSelect('hug')}
                    className="w-full py-3.5 px-5 rounded-2xl bg-white hover:bg-rose-50 border-2 border-rose-300/80 text-rose-900 font-semibold text-sm sm:text-base flex items-center justify-between shadow-sm cursor-pointer transition-all group"
                  >
                    <span className="flex items-center gap-2">
                      <span className="text-xl">🤗</span>
                      <span>The Warmest Tight Hug</span>
                    </span>
                    <span className="text-xs text-rose-500 font-sans font-normal opacity-80 group-hover:opacity-100">
                      (Sukoon wala cuddle ❤️)
                    </span>
                  </motion.button>

                  {/* Option 3: Both at a time! */}
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.96 }}
                    onClick={() => handleSelect('both')}
                    className="w-full py-4 px-5 rounded-2xl bg-gradient-to-r from-rose-500 via-pink-500 to-rose-400 hover:from-rose-600 hover:to-pink-600 text-white font-bold text-sm sm:text-base flex items-center justify-between shadow-lg shadow-rose-200 cursor-pointer ring-2 ring-pink-300/50"
                  >
                    <span className="flex items-center gap-2">
                      <span className="text-2xl animate-bounce">💖</span>
                      <span>BOTH AT A TIME! (Kiss + Hug)</span>
                    </span>
                    <span className="text-xs text-amber-200 font-normal">
                      🙈💋🤗
                    </span>
                  </motion.button>
                </div>
              </motion.div>
            ) : (
              /* REACTION STATE (SHE CHOSE AN OPTION) */
              <motion.div
                key="reaction"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="space-y-4 py-2"
              >
                <div className="flex justify-center mb-1">
                  <TeddyHug size={200} />
                </div>

                {/* Kiss Reaction */}
                {selectedChoice === 'kiss' && (
                  <div className="space-y-2">
                    <div className="text-3xl animate-bounce">💋🙈💖</div>
                    <h3 className="font-serif text-2xl font-bold text-rose-950">
                      Haye! Fayzuuu is Blushing So Hard!
                    </h3>
                    <p className="font-sans text-sm text-rose-900 bg-rose-100/70 p-4 rounded-2xl border border-rose-200 leading-relaxed">
                      “Ek meetha sa kiss toh pakka banta hai, meri Chokkiii Maaa! Bas tum muskura do, mere liye saari duniya ki khushi wahi hai... 🙈💋❤️”
                    </p>
                  </div>
                )}

                {/* Hug Reaction */}
                {selectedChoice === 'hug' && (
                  <div className="space-y-2">
                    <div className="text-3xl animate-bounce">🤗🧸💗</div>
                    <h3 className="font-serif text-2xl font-bold text-rose-950">
                      Tightest Hug in the World!
                    </h3>
                    <p className="font-sans text-sm text-rose-900 bg-rose-100/70 p-4 rounded-2xl border border-rose-200 leading-relaxed">
                      “Tere paas aane se jo sukoon milta hai, wo kahin aur nahi milta... Hamesha sirf tumhara, meri Bubbuuuu (meri Biwi jii)! 🤗❤️”
                    </p>
                  </div>
                )}

                {/* Both Reaction */}
                {selectedChoice === 'both' && (
                  <div className="space-y-2">
                    <div className="text-4xl animate-bounce">🙈💋🤗✨</div>
                    <h3 className="font-serif text-2xl sm:text-3xl font-extrabold text-rose-950">
                      OMG! BOTH AT A TIME?! ❤️
                    </h3>
                    <p className="font-sans text-sm text-rose-900 bg-gradient-to-r from-rose-100 to-pink-100 p-4 rounded-2xl border border-rose-300 leading-relaxed font-medium">
                      “Fayzuuu ka dil toh abhi hi pighal gaya! Kiss bhi aur tight hug bhi?! You are the cutest human in the whole universe, Chokkiii Maaa! Hadd se zyada pyaar hai tumse! 🙈💋🤗💍❤️”
                    </p>
                  </div>
                )}

                {/* Secret private tag */}
                <p className="text-xs text-purple-700 font-semibold italic">
                  ~ Hamesha aur hamesha sirf meri Biwi jii ❤️
                </p>

                {/* Bottom actions */}
                <div className="flex items-center justify-center gap-3 pt-3">
                  <button
                    onClick={handleReset}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white hover:bg-rose-50 text-rose-700 text-xs font-semibold border border-rose-200 shadow-sm cursor-pointer"
                  >
                    <RefreshCw className="w-3.5 h-3.5" />
                    <span>Choose Again 🙈</span>
                  </button>

                  <button
                    onClick={onClose}
                    className="px-6 py-2 rounded-full bg-gradient-to-r from-rose-500 to-pink-500 text-white text-xs font-bold shadow-md cursor-pointer"
                  >
                    Close With a Big Smile 💖
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
