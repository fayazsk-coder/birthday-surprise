import React from 'react';
import { ArrowLeft, Lock, HelpCircle, Heart } from 'lucide-react';
import { MusicPlayer } from '../audio/MusicPlayer';

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
              <span className="p-2 rounded-full bg-gradient-to-tr from-rose-500 to-pink-500 text-white shadow-[0_0_14px_rgba(244,63,94,0.6)] animate-pulse">
                <Heart className="w-4 h-4 fill-white" />
              </span>
              <div className="flex flex-col sm:flex-row sm:items-center sm:gap-2">
                <span className="font-serif font-extrabold text-rose-950 text-base sm:text-lg tracking-tight">
                  30 Days to Go ❤️
                </span>
                <span className="inline-flex items-center text-[10px] sm:text-xs font-extrabold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-gradient-to-r from-rose-500 via-pink-500 to-amber-400 text-white shadow-[0_0_16px_rgba(244,63,94,0.7)] animate-pulse">
                  ✨ Advance Surprise ✨
                </span>
              </div>
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
