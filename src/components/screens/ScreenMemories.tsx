import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Camera, Heart, MapPin, ZoomIn, Info } from 'lucide-react';
import { TeddyMemories } from '../teddies/TeddyMemories';
import { surpriseConfig, type MemoryItem } from '../../config/surpriseConfig';
import { PhotoLightboxModal } from '../modals/PhotoLightboxModal';
import { sounds } from '../audio/soundEffects';

interface ScreenMemoriesProps {
  onBack: () => void;
  onOpenGuide: () => void;
}

export const ScreenMemories: React.FC<ScreenMemoriesProps> = ({ onBack, onOpenGuide }) => {
  const [selectedPhoto, setSelectedPhoto] = useState<MemoryItem | null>(null);

  // Subtle natural scrapbook rotations
  const rotations = [-2.5, 2, -1.5, 3, -2, 1.5];

  const handlePhotoClick = (item: MemoryItem) => {
    sounds.playPop();
    setSelectedPhoto(item);
  };

  return (
    <div className="min-h-[calc(100vh-4rem)] px-4 py-8 sm:py-12 max-w-6xl mx-auto">
      {/* Top Navigation Row */}
      <div className="mb-6 flex justify-between items-center">
        <button
          onClick={onBack}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 hover:bg-pink-100/90 text-purple-800 text-sm font-medium transition-all shadow-sm border border-purple-200 cursor-pointer group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span>Back to My Teddy Bears</span>
        </button>

        <button
          onClick={onOpenGuide}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-purple-100 text-purple-700 text-xs font-medium border border-purple-200 hover:bg-purple-200 cursor-pointer"
        >
          <Info className="w-3.5 h-3.5" />
          <span>How to add real photos</span>
        </button>
      </div>

      {/* Header Container */}
      <div className="text-center mb-10 sm:mb-14">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-100 text-purple-700 text-xs sm:text-sm font-semibold tracking-wider mb-3 border border-purple-200"
        >
          <Camera className="w-4 h-4 text-purple-500" />
          <span>Scrapbook of Treasures</span>
          <Heart className="w-3.5 h-3.5 text-purple-500 fill-purple-400" />
        </motion.div>

        <div className="flex justify-center my-3">
          <TeddyMemories size={190} />
        </div>

        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="font-serif text-2xl sm:text-4xl md:text-5xl font-bold text-rose-950 mb-3 tracking-tight"
        >
          {surpriseConfig.memoriesData.heading}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="font-sans text-sm sm:text-base md:text-lg text-purple-900/80 max-w-2xl mx-auto italic"
        >
          “{surpriseConfig.memoriesData.subheading}”
        </motion.p>
      </div>

      {/* POLAROID SCRAPBOOK GALLERY GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 mb-14">
        {surpriseConfig.memoriesData.items.map((item, index) => {
          const rot = rotations[index % rotations.length];
          return (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{
                scale: 1.04,
                rotate: 0,
                zIndex: 20,
                boxShadow: '0 25px 50px -12px rgba(168, 85, 247, 0.35)',
              }}
              style={{ rotate: `${rot}deg` }}
              onClick={() => handlePhotoClick(item)}
              className="group relative cursor-pointer bg-white p-4 pb-6 rounded-2xl shadow-[0_10px_30px_-10px_rgba(100,50,120,0.15)] border border-pink-100 transition-all duration-300 flex flex-col justify-between"
            >
              {/* Cute Washi Tape or Heart Pin at Top Center */}
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 z-10">
                {index % 2 === 0 ? (
                  /* Washi tape decoration */
                  <div className="w-16 h-5 bg-pink-300/80 backdrop-blur-sm -rotate-2 rounded-sm shadow-sm border border-pink-400/30 flex items-center justify-center">
                    <span className="w-8 h-0.5 bg-white/60 rounded-full" />
                  </div>
                ) : (
                  /* Heart pin decoration */
                  <div className="w-6 h-6 rounded-full bg-rose-500 shadow-md flex items-center justify-center text-white text-[10px] ring-2 ring-white">
                    ❤️
                  </div>
                )}
              </div>

              {/* Photo Frame */}
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-rose-50 mb-4 group-hover:brightness-105 transition-all">
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Hover overlay hint */}
                <div className="absolute inset-0 bg-rose-950/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="px-3 py-1.5 rounded-full bg-white/90 text-rose-800 text-xs font-semibold shadow-md flex items-center gap-1.5">
                    <ZoomIn className="w-3.5 h-3.5" />
                    <span>Click to Expand</span>
                  </span>
                </div>

                {/* Demo watermark banner if demo */}
                {item.isDemo && (
                  <div className="absolute bottom-2 left-2 px-2 py-0.5 rounded-md bg-black/50 backdrop-blur-sm text-[10px] text-white">
                    Demo Picture
                  </div>
                )}
              </div>

              {/* Polaroid Caption Area */}
              <div className="px-1 text-left">
                <div className="flex items-center justify-between gap-2 mb-1">
                  <h3 className="font-serif font-bold text-lg text-rose-950 group-hover:text-purple-600 transition-colors">
                    {item.title}
                  </h3>
                  <span className="text-[11px] font-sans font-medium text-purple-700 bg-purple-50 px-2 py-0.5 rounded-full border border-purple-200">
                    {item.date}
                  </span>
                </div>

                <p className="font-sans text-xs text-rose-800/80 line-clamp-2 leading-relaxed mb-2">
                  {item.caption}
                </p>

                {item.location && (
                  <div className="flex items-center gap-1 text-[11px] text-purple-600/70">
                    <MapPin className="w-3 h-3" />
                    <span>{item.location}</span>
                  </div>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* ROMANTIC SCRAPBOOK MESSAGE NOTE (Exact text as requested) */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="backdrop-blur-xl bg-white/80 border border-purple-200/80 rounded-3xl p-6 sm:p-10 max-w-3xl mx-auto shadow-[0_15px_40px_-15px_rgba(168,85,247,0.2)] mb-10"
      >
        <div className="flex items-center gap-2 mb-4 justify-center sm:justify-start">
          <Heart className="w-5 h-5 text-rose-500 fill-rose-400" />
          <h3 className="font-serif text-xl sm:text-2xl font-bold text-rose-950">
            A Note on Every Memory We Share
          </h3>
        </div>

        <div className="space-y-4 font-sans text-sm sm:text-base text-rose-900/90 leading-relaxed text-left">
          {surpriseConfig.memoriesData.romanticNote.map((para, i) => (
            <p key={i} className={i === surpriseConfig.memoriesData.romanticNote.length - 1 ? 'font-semibold text-rose-700 pt-1' : ''}>
              {para}
            </p>
          ))}
        </div>
      </motion.div>

      {/* Back to Teddy Bears Button */}
      <div className="flex justify-center">
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

      {/* Lightbox Modal */}
      <PhotoLightboxModal
        item={selectedPhoto}
        items={surpriseConfig.memoriesData.items}
        onClose={() => setSelectedPhoto(null)}
        onNavigate={(item) => setSelectedPhoto(item)}
      />
    </div>
  );
};
