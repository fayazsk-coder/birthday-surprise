import React from 'react';
import { ArrowLeft, Lock, HelpCircle, Heart } from 'lucide-react';
import { MusicPlayer } from '../audio/MusicPlayer';
import { surpriseConfig } from '../../config/surpriseConfig';

interface NavbarProps {
  currentScreen: 'password' | 'teddyHub' | 'countdown' | 'memories' | 'letter';
  onNavigate: (screen: 'password' | 'teddyHub' | 'countdown' | 'memories' | 'letter') => void;
  onOpenGuide: () => void;
  onLockSession: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentScreen,
  onNavigate,
  onOpenGuide,
  onLockSession,
}) => {
  const showBackButton = currentScreen !== 'password' && currentScreen !== 'teddyHub';
  const isUnlocked = currentScreen !== 'password';

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-white/70 border-b border-pink-100/70 transition-all duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-2 sm:gap-4">
        {/* Left: Back button or Brand Title */}
        <div className="flex items-center gap-2">
          {showBackButton ? (
            <button
              onClick={() => onNavigate('teddyHub')}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-pink-500/10 hover:bg-pink-500/20 text-pink-700 text-xs sm:text-sm font-medium transition-all duration-200 border border-pink-200/60 cursor-pointer shadow-sm group"
              aria-label="Back to My Teddy Bears"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
              <span>Back to My Teddy Bears 🧸</span>
            </button>
          ) : (
            <div className="flex items-center gap-2">
              <span className="p-1.5 rounded-full bg-pink-100/80 text-rose-500 shadow-sm">
                <Heart className="w-4 h-4 fill-rose-400" />
              </span>
              <span className="font-serif font-semibold text-rose-900 text-sm sm:text-base tracking-wide truncate max-w-[200px] sm:max-w-none">
                {surpriseConfig.siteTitle}
              </span>
            </div>
          )}
        </div>

        {/* Right: Controls (Music, Guide, Lock) */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Background Music Player */}
          <MusicPlayer />

          {/* Guide / Deployment modal */}
          <button
            onClick={onOpenGuide}
            className="p-1.5 sm:px-2.5 sm:py-1.5 rounded-full bg-white/80 hover:bg-pink-50 border border-pink-200/60 text-pink-600 text-xs font-medium inline-flex items-center gap-1 transition-all shadow-sm cursor-pointer"
            title="Boyfriend's Setup Guide: Photos, Password, Birthday & QR Code"
            aria-label="Boyfriend's Setup Guide"
          >
            <HelpCircle className="w-4 h-4 text-pink-500" />
            <span className="hidden md:inline font-sans">Setup Guide & QR</span>
          </button>

          {/* Lock / Exit button (if unlocked) */}
          {isUnlocked && (
            <button
              onClick={onLockSession}
              className="p-1.5 sm:px-2.5 sm:py-1.5 rounded-full bg-white/80 hover:bg-rose-50 border border-rose-200/50 text-rose-600 text-xs font-medium inline-flex items-center gap-1 transition-all shadow-sm cursor-pointer"
              title="Lock screen again"
              aria-label="Lock screen"
            >
              <Lock className="w-3.5 h-3.5 text-rose-400" />
              <span className="hidden lg:inline font-sans">Lock</span>
            </button>
          )}
        </div>
      </div>
    </header>
  );
};
