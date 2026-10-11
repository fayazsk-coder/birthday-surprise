import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Mail, Heart, Sparkles, FastForward, RefreshCw } from 'lucide-react';
import { TeddyLetter } from '../teddies/TeddyLetter';
import { TeddyHug } from '../teddies/TeddyHug';
import { surpriseConfig } from '../../config/surpriseConfig';
import { triggerHugExplosion, triggerSparkles } from '../../utils/confetti';
import { sounds } from '../audio/soundEffects';

interface ScreenLetterProps {
  onBack: () => void;
}

export const ScreenLetter: React.FC<ScreenLetterProps> = ({ onBack }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [showFullText, setShowFullText] = useState(false);
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [showHugModal, setShowHugModal] = useState(false);

  // Combine letter paragraphs into formatted text
  const fullLetterContent = [
    surpriseConfig.loveLetter.letterSalutation,
    '',
    ...surpriseConfig.loveLetter.letterParagraphs,
    '',
    surpriseConfig.loveLetter.letterSignoff.replace('YOUR NAME', surpriseConfig.senderName),
  ].join('\n\n');

  // Open the envelope
  const handleOpenEnvelope = () => {
    sounds.playEnvelopeOpen();
    triggerSparkles();
    setIsOpen(true);
    setIsTyping(true);
  };

  // Typewriter effect
  useEffect(() => {
    if (!isOpen || showFullText) {
      if (showFullText) {
        setDisplayedText(fullLetterContent);
        setIsTyping(false);
      }
      return;
    }

    let currentIndex = 0;
    const interval = window.setInterval(() => {
      currentIndex += 2; // Type 2 chars per tick for gentle yet swift pacing
      if (currentIndex >= fullLetterContent.length) {
        setDisplayedText(fullLetterContent);
        setIsTyping(false);
        clearInterval(interval);
      } else {
        setDisplayedText(fullLetterContent.slice(0, currentIndex));
      }
    }, 28);

    return () => clearInterval(interval);
  }, [isOpen, showFullText, fullLetterContent]);

  // Hug button action
  const handleTriggerHug = () => {
    sounds.playChime();
    triggerHugExplosion();
    setShowHugModal(true);
  };

  return (
    <div className="min-h-[calc(100vh-4rem)] px-4 py-8 sm:py-12 max-w-4xl mx-auto flex flex-col items-center justify-center">
      {/* Top Back Row */}
      <div className="w-full mb-6 flex justify-between items-center">
        <button
          onClick={onBack}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 hover:bg-pink-100/90 text-rose-700 text-sm font-medium transition-all shadow-sm border border-pink-200 cursor-pointer group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span>Back to My Teddy Bears</span>
        </button>

        <span className="text-xs text-rose-700 bg-rose-50 px-3 py-1 rounded-full border border-rose-200 flex items-center gap-1">
          <Heart className="w-3 h-3 text-rose-500 fill-rose-400" />
          <span>From {surpriseConfig.senderName} with Love</span>
        </span>
      </div>

      {/* Heading */}
      <div className="text-center mb-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-100 text-rose-700 text-xs sm:text-sm font-semibold tracking-wider mb-3 border border-rose-200"
        >
          <Mail className="w-4 h-4 text-rose-500" />
          <span>Sealed With Love</span>
          <Sparkles className="w-4 h-4 text-amber-500" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-serif text-2xl sm:text-4xl md:text-5xl font-bold text-rose-950 mb-2 tracking-tight"
        >
          {surpriseConfig.loveLetter.heading}
        </motion.h1>

        <p className="font-sans text-xs sm:text-sm text-rose-800/80">
          A little piece of my heart, written especially for you.
        </p>
      </div>

      {/* ENVELOPE / LETTER INTERACTION */}
      <div className="w-full flex justify-center">
        <AnimatePresence mode="wait">
          {!isOpen ? (
            /* CLOSED ENVELOPE STATE */
            <motion.div
              key="envelope"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9, y: -20 }}
              className="text-center py-6"
            >
              {/* Cute Teddy with Letter */}
              <div className="flex justify-center mb-6">
                <TeddyLetter size={220} />
              </div>

              {/* Romantic Vintage Wax Envelope Card */}
              <motion.div
                whileHover={{ scale: 1.03, y: -4 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleOpenEnvelope}
                className="relative cursor-pointer max-w-sm mx-auto bg-gradient-to-br from-rose-100 via-pink-50 to-white p-8 rounded-3xl border-2 border-rose-300/80 shadow-[0_20px_50px_-15px_rgba(244,63,94,0.3)] group overflow-hidden"
              >
                {/* Envelope flap visual */}
                <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-rose-200/60 to-transparent clip-path-triangle pointer-events-none" />

                <div className="py-6 flex flex-col items-center">
                  {/* Wax Seal */}
                  <div className="relative mb-4">
                    <motion.div
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                      className="w-16 h-16 rounded-full bg-gradient-to-br from-rose-600 to-red-700 flex items-center justify-center text-white shadow-lg ring-4 ring-rose-200"
                    >
                      <Heart className="w-8 h-8 fill-white" />
                    </motion.div>
                  </div>

                  <h3 className="font-serif text-xl font-bold text-rose-950 mb-1 group-hover:text-rose-600 transition-colors">
                    {surpriseConfig.loveLetter.envelopeTitle}
                  </h3>

                  <p className="font-sans text-xs text-rose-700/80 mb-4">
                    {surpriseConfig.loveLetter.envelopeSubtitle}
                  </p>

                  <div className="px-5 py-2.5 rounded-full bg-rose-500 text-white font-medium text-xs sm:text-sm shadow-md group-hover:bg-rose-600 transition-all flex items-center gap-2">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Break Wax Seal & Read Letter 💌</span>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ) : (
            /* OPENED LETTER CONTAINER */
            <motion.div
              key="letter"
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="w-full max-w-2xl"
            >
              {/* Typewriter Skip Control */}
              <div className="flex justify-end gap-2 mb-3">
                {isTyping && (
                  <button
                    onClick={() => setShowFullText(true)}
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/80 hover:bg-pink-100 text-rose-700 text-xs font-medium border border-rose-200 shadow-sm cursor-pointer"
                  >
                    <FastForward className="w-3 h-3" />
                    <span>Read Full Letter Instantly</span>
                  </button>
                )}
                <button
                  onClick={() => {
                    setIsOpen(false);
                    setShowFullText(false);
                    setDisplayedText('');
                  }}
                  className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-white/80 hover:bg-pink-100 text-rose-700 text-xs font-medium border border-rose-200 shadow-sm cursor-pointer"
                >
                  <RefreshCw className="w-3 h-3" />
                  <span>Fold Letter</span>
                </button>
              </div>

              {/* Romantic Vintage Letterhead / Parchment */}
              <div className="relative bg-[#fffdf9] border-2 border-rose-200/90 rounded-3xl p-7 sm:p-12 shadow-[0_25px_60px_-15px_rgba(255,140,165,0.3)] overflow-hidden">
                {/* Decorative border frame */}
                <div className="absolute inset-3 border border-pink-200/50 rounded-2xl pointer-events-none" />

                {/* Top Corner Floral / Heart Decors */}
                <div className="absolute top-5 left-5 text-rose-300">
                  <Heart className="w-4 h-4 fill-rose-200" />
                </div>
                <div className="absolute top-5 right-5 text-rose-300">
                  <Heart className="w-4 h-4 fill-rose-200" />
                </div>
                <div className="absolute bottom-5 left-5 text-rose-300">
                  <Heart className="w-4 h-4 fill-rose-200" />
                </div>
                <div className="absolute bottom-5 right-5 text-rose-300">
                  <Heart className="w-4 h-4 fill-rose-200" />
                </div>

                {/* Letter Body Text */}
                <div className="relative z-10 font-serif text-rose-950 whitespace-pre-wrap leading-relaxed text-sm sm:text-base md:text-lg min-h-[320px]">
                  {displayedText}

                  {/* Blinking Cursor while typing */}
                  {isTyping && (
                    <span className="inline-block w-1.5 h-4 ml-1 bg-rose-500 animate-pulse align-middle" />
                  )}
                </div>

                {/* Big Hug Button */}
                <div className="mt-10 pt-6 border-t border-pink-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <p className="text-xs text-rose-500 font-sans italic">
                    Written with all the love in the universe. ❤️
                  </p>

                  <motion.button
                    onClick={handleTriggerHug}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full sm:w-auto px-6 py-3 rounded-full bg-gradient-to-r from-rose-500 via-pink-500 to-rose-400 hover:from-rose-600 hover:to-pink-600 text-white font-medium text-sm sm:text-base shadow-lg shadow-rose-200 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Heart className="w-4 h-4 fill-white" />
                    <span>{surpriseConfig.loveLetter.hugButtonText}</span>
                  </motion.button>
                </div>
              </div>

              {/* Back to Teddy Bears Button */}
              <div className="mt-8 flex justify-center">
                <button
                  onClick={onBack}
                  className="py-3 px-8 rounded-full bg-gradient-to-r from-rose-500 to-pink-500 text-white font-medium text-sm sm:text-base shadow-md hover:shadow-lg cursor-pointer flex items-center gap-2"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Back to My Teddy Bears 🧸</span>
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* ADORABLE TEDDY BEAR HUG MODAL */}
      <AnimatePresence>
        {showHugModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-rose-950/70 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 20 }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
              className="relative w-full max-w-lg bg-gradient-to-b from-white to-pink-50 rounded-3xl p-6 sm:p-8 text-center shadow-2xl border-2 border-rose-300"
            >
              {/* Cute Teddy Hug SVG */}
              <div className="flex justify-center mb-4">
                <TeddyHug size={240} />
              </div>

              {/* Hug Title */}
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-rose-950 mb-3">
                Sending You the Warmest Hug! 💗
              </h3>

              {/* Required Hug Message */}
              <p className="font-sans text-sm sm:text-base text-rose-900/90 leading-relaxed mb-6 bg-rose-100/70 p-4 rounded-2xl border border-rose-200">
                “{surpriseConfig.loveLetter.hugMessage}”
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <button
                  onClick={handleTriggerHug}
                  className="w-full sm:w-auto px-5 py-2.5 rounded-full bg-rose-500 hover:bg-rose-600 text-white text-sm font-medium shadow-md cursor-pointer flex items-center justify-center gap-2"
                >
                  <Heart className="w-4 h-4 fill-white" />
                  <span>Send Another Hug! 🤗</span>
                </button>

                <button
                  onClick={() => setShowHugModal(false)}
                  className="w-full sm:w-auto px-5 py-2.5 rounded-full bg-white hover:bg-rose-50 text-rose-700 text-sm font-medium border border-rose-200 shadow-sm cursor-pointer"
                >
                  <span>Close With a Smile 💖</span>
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};
