import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Heart, ChevronLeft, ChevronRight, Calendar, MapPin, Sparkles } from 'lucide-react';
import type { MemoryItem } from '../../config/surpriseConfig';
import { sounds } from '../audio/soundEffects';

interface LightboxProps {
  item: MemoryItem | null;
  items: MemoryItem[];
  onClose: () => void;
  onNavigate: (item: MemoryItem) => void;
}

export const PhotoLightboxModal: React.FC<LightboxProps> = ({
  item,
  items,
  onClose,
  onNavigate,
}) => {
  const [likes, setLikes] = useState<Record<string, number>>({});
  const [showHeartBurst, setShowHeartBurst] = useState(false);

  if (!item) return null;

  const currentIndex = items.findIndex((i) => i.id === item.id);
  const prevItem = currentIndex > 0 ? items[currentIndex - 1] : items[items.length - 1];
  const nextItem = currentIndex < items.length - 1 ? items[currentIndex + 1] : items[0];

  const handleLike = (e: React.MouseEvent) => {
    e.stopPropagation();
    sounds.playPop();
    setLikes((prev) => ({
      ...prev,
      [item.id]: (prev[item.id] || 0) + 1,
    }));
    setShowHeartBurst(true);
    setTimeout(() => setShowHeartBurst(false), 800);
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    sounds.playPop();
    onNavigate(nextItem);
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    sounds.playPop();
    onNavigate(prevItem);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-rose-950/70 backdrop-blur-md">
        {/* Backdrop click to close */}
        <div className="absolute inset-0" onClick={onClose} />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="relative z-10 w-full max-w-2xl bg-white rounded-3xl overflow-hidden shadow-2xl border border-pink-200"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 p-2 rounded-full bg-white/90 text-rose-800 hover:bg-rose-100 hover:text-rose-950 transition-colors shadow-md cursor-pointer"
            aria-label="Close photo preview"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Navigation Arrows */}
          <button
            onClick={handlePrev}
            className="absolute left-3 top-1/3 -translate-y-1/2 z-20 p-2.5 rounded-full bg-white/90 text-rose-800 hover:bg-rose-100 shadow-md cursor-pointer transition-all hover:scale-110"
            aria-label="Previous photo"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-3 top-1/3 -translate-y-1/2 z-20 p-2.5 rounded-full bg-white/90 text-rose-800 hover:bg-rose-100 shadow-md cursor-pointer transition-all hover:scale-110"
            aria-label="Next photo"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Photo Display */}
          <div className="relative aspect-[4/3] bg-pink-100 overflow-hidden group">
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-102"
            />

            {/* Heart burst animation on photo like */}
            {showHeartBurst && (
              <motion.div
                initial={{ scale: 0.5, opacity: 1 }}
                animate={{ scale: 1.8, opacity: 0 }}
                transition={{ duration: 0.7 }}
                className="absolute inset-0 flex items-center justify-center pointer-events-none"
              >
                <Heart className="w-24 h-24 text-rose-500 fill-rose-500 drop-shadow-lg" />
              </motion.div>
            )}

            {/* Demo badge if demo */}
            {item.isDemo && (
              <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-white text-xs font-medium">
                Demo Photo • Replace in surpriseConfig.ts
              </div>
            )}
          </div>

          {/* Details & Caption */}
          <div className="p-6 sm:p-7 bg-white">
            <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
              <h3 className="font-serif text-2xl font-bold text-rose-950">
                {item.title}
              </h3>

              {/* Heart Button */}
              <button
                onClick={handleLike}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-rose-50 hover:bg-rose-100 border border-rose-200 text-rose-600 text-xs font-semibold transition-all cursor-pointer"
              >
                <Heart className={`w-4 h-4 fill-rose-500 text-rose-500`} />
                <span>{(likes[item.id] || 0) + 1} Loves</span>
              </button>
            </div>

            {/* Date & Location tags */}
            <div className="flex flex-wrap items-center gap-4 text-xs font-medium text-rose-700/80 mb-4">
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-rose-400" />
                {item.date}
              </span>
              {item.location && (
                <span className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-rose-400" />
                  {item.location}
                </span>
              )}
              {item.tag && (
                <span className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-pink-100 text-pink-700">
                  <Sparkles className="w-3 h-3" />
                  {item.tag}
                </span>
              )}
            </div>

            {/* Caption */}
            <p className="font-sans text-sm sm:text-base text-rose-900/90 leading-relaxed italic border-l-2 border-rose-300 pl-3.5 py-1">
              "{item.caption}"
            </p>

            <div className="mt-4 pt-3 border-t border-pink-100 flex justify-between items-center text-xs text-rose-400">
              <span>Photo {currentIndex + 1} of {items.length}</span>
              <span>Use arrows to explore more moments 💖</span>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
