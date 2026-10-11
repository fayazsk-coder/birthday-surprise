import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Heart, ChevronRight, Cake, Camera, Mail } from 'lucide-react';
import { TeddyCountdown } from '../teddies/TeddyCountdown';
import { TeddyMemories } from '../teddies/TeddyMemories';
import { TeddyLetter } from '../teddies/TeddyLetter';
import { surpriseConfig } from '../../config/surpriseConfig';
import { sounds } from '../audio/soundEffects';

interface ScreenTeddyHubProps {
  onSelectScreen: (screen: 'countdown' | 'memories' | 'letter') => void;
}

export const ScreenTeddyHub: React.FC<ScreenTeddyHubProps> = ({ onSelectScreen }) => {
  const handleSelect = (screen: 'countdown' | 'memories' | 'letter') => {
    sounds.playPop();
    onSelectScreen(screen);
  };

  return (
    <div className="min-h-[calc(100vh-4rem)] px-4 py-8 sm:py-12 max-w-6xl mx-auto flex flex-col justify-center">
      {/* Title Header */}
      <div className="text-center mb-8 sm:mb-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-100/90 text-rose-700 text-xs sm:text-sm font-semibold tracking-wider mb-3 border border-rose-200 shadow-sm"
        >
          <Sparkles className="w-3.5 h-3.5 text-rose-500" />
          <span>Three Gifts of Love for {surpriseConfig.recipientName}</span>
          <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-400" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="font-serif text-2xl sm:text-4xl md:text-5xl font-bold text-rose-950 mb-3 tracking-tight"
        >
          {surpriseConfig.teddyHub.heading}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="font-sans text-sm sm:text-base md:text-lg text-rose-900/80 max-w-2xl mx-auto leading-relaxed"
        >
          {surpriseConfig.teddyHub.subheading}
        </motion.p>
      </div>

      {/* Three Teddy Bear Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
        {/* CARD 1: TEDDY COUNTDOWN */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25 }}
          whileHover={{ y: -8, scale: 1.02 }}
          onClick={() => handleSelect('countdown')}
          className="group relative cursor-pointer flex flex-col justify-between rounded-3xl p-6 sm:p-7 backdrop-blur-xl bg-gradient-to-b from-white/85 to-rose-50/70 border border-pink-200/90 hover:border-rose-400/80 shadow-[0_15px_40px_-15px_rgba(255,140,165,0.25)] hover:shadow-[0_20px_50px_-10px_rgba(255,100,140,0.35)] transition-all duration-300 overflow-hidden text-center"
        >
          {/* Glowing Top Ribbon */}
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-rose-400 via-pink-400 to-amber-300" />

          {/* Badge */}
          <div className="flex justify-center mb-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-100/90 text-rose-700 text-xs font-semibold">
              <Cake className="w-3.5 h-3.5 text-rose-500" />
              {surpriseConfig.teddyHub.teddy1.badge}
            </span>
          </div>

          {/* Teddy Illustration */}
          <div className="py-2 flex justify-center group-hover:scale-105 transition-transform duration-300">
            <TeddyCountdown size={210} />
          </div>

          {/* Text Content */}
          <div className="mt-2 flex-1 flex flex-col justify-end">
            <h2 className="font-serif text-xl sm:text-2xl font-bold text-rose-950 mb-1.5 group-hover:text-rose-600 transition-colors">
              {surpriseConfig.teddyHub.teddy1.title}
            </h2>
            <p className="font-sans text-xs sm:text-sm text-rose-800/80 leading-relaxed mb-5">
              {surpriseConfig.teddyHub.teddy1.description}
            </p>

            {/* Action Button */}
            <div className="w-full py-3 px-4 rounded-2xl bg-gradient-to-r from-rose-500 to-pink-500 text-white font-medium text-sm flex items-center justify-center gap-2 shadow-md group-hover:shadow-rose-300/60 group-hover:from-rose-600 group-hover:to-pink-600 transition-all">
              <span>{surpriseConfig.teddyHub.teddy1.buttonText}</span>
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </motion.div>

        {/* CARD 2: TEDDY MEMORIES */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35 }}
          whileHover={{ y: -8, scale: 1.02 }}
          onClick={() => handleSelect('memories')}
          className="group relative cursor-pointer flex flex-col justify-between rounded-3xl p-6 sm:p-7 backdrop-blur-xl bg-gradient-to-b from-white/85 to-purple-50/70 border border-purple-200/90 hover:border-purple-400/80 shadow-[0_15px_40px_-15px_rgba(216,180,254,0.25)] hover:shadow-[0_20px_50px_-10px_rgba(192,132,252,0.35)] transition-all duration-300 overflow-hidden text-center"
        >
          {/* Glowing Top Ribbon */}
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-purple-400 via-fuchsia-400 to-pink-400" />

          {/* Badge */}
          <div className="flex justify-center mb-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-100/90 text-purple-700 text-xs font-semibold">
              <Camera className="w-3.5 h-3.5 text-purple-500" />
              {surpriseConfig.teddyHub.teddy2.badge}
            </span>
          </div>

          {/* Teddy Illustration */}
          <div className="py-2 flex justify-center group-hover:scale-105 transition-transform duration-300">
            <TeddyMemories size={210} />
          </div>

          {/* Text Content */}
          <div className="mt-2 flex-1 flex flex-col justify-end">
            <h2 className="font-serif text-xl sm:text-2xl font-bold text-rose-950 mb-1.5 group-hover:text-purple-600 transition-colors">
              {surpriseConfig.teddyHub.teddy2.title}
            </h2>
            <p className="font-sans text-xs sm:text-sm text-purple-900/80 leading-relaxed mb-5">
              {surpriseConfig.teddyHub.teddy2.description}
            </p>

            {/* Action Button */}
            <div className="w-full py-3 px-4 rounded-2xl bg-gradient-to-r from-purple-500 to-fuchsia-500 text-white font-medium text-sm flex items-center justify-center gap-2 shadow-md group-hover:shadow-purple-300/60 group-hover:from-purple-600 group-hover:to-fuchsia-600 transition-all">
              <span>{surpriseConfig.teddyHub.teddy2.buttonText}</span>
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </motion.div>

        {/* CARD 3: TEDDY LOVE LETTER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45 }}
          whileHover={{ y: -8, scale: 1.02 }}
          onClick={() => handleSelect('letter')}
          className="group relative cursor-pointer flex flex-col justify-between rounded-3xl p-6 sm:p-7 backdrop-blur-xl bg-gradient-to-b from-white/85 to-rose-50/70 border border-pink-200/90 hover:border-rose-400/80 shadow-[0_15px_40px_-15px_rgba(255,140,165,0.25)] hover:shadow-[0_20px_50px_-10px_rgba(244,63,94,0.35)] transition-all duration-300 overflow-hidden text-center"
        >
          {/* Glowing Top Ribbon */}
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-pink-400 via-rose-500 to-red-400" />

          {/* Badge */}
          <div className="flex justify-center mb-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-100/90 text-rose-700 text-xs font-semibold">
              <Mail className="w-3.5 h-3.5 text-rose-500" />
              {surpriseConfig.teddyHub.teddy3.badge}
            </span>
          </div>

          {/* Teddy Illustration */}
          <div className="py-2 flex justify-center group-hover:scale-105 transition-transform duration-300">
            <TeddyLetter size={210} />
          </div>

          {/* Text Content */}
          <div className="mt-2 flex-1 flex flex-col justify-end">
            <h2 className="font-serif text-xl sm:text-2xl font-bold text-rose-950 mb-1.5 group-hover:text-rose-600 transition-colors">
              {surpriseConfig.teddyHub.teddy3.title}
            </h2>
            <p className="font-sans text-xs sm:text-sm text-rose-800/80 leading-relaxed mb-5">
              {surpriseConfig.teddyHub.teddy3.description}
            </p>

            {/* Action Button */}
            <div className="w-full py-3 px-4 rounded-2xl bg-gradient-to-r from-rose-500 to-red-400 text-white font-medium text-sm flex items-center justify-center gap-2 shadow-md group-hover:shadow-rose-300/60 group-hover:from-rose-600 group-hover:to-red-500 transition-all">
              <span>{surpriseConfig.teddyHub.teddy3.buttonText}</span>
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Sweet Bottom Reminder */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="text-center text-xs text-rose-800/60 mt-8"
      >
        ✨ Tip: You can visit all three teddy bears anytime using the top navigation bar!
      </motion.p>
    </div>
  );
};
