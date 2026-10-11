import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Navbar } from './components/common/Navbar';
import { FloatingElements } from './components/background/FloatingElements';
import { ScreenPassword } from './components/screens/ScreenPassword';
import { ScreenTeddyHub } from './components/screens/ScreenTeddyHub';
import { ScreenCountdown } from './components/screens/ScreenCountdown';
import { ScreenMemories } from './components/screens/ScreenMemories';
import { ScreenLetter } from './components/screens/ScreenLetter';
import { GuideModal } from './components/modals/GuideModal';
import { surpriseConfig } from './config/surpriseConfig';

type ScreenType = 'password' | 'teddyHub' | 'countdown' | 'memories' | 'letter';

export const App: React.FC = () => {
  // Check if session was already unlocked
  const [currentScreen, setCurrentScreen] = useState<ScreenType>(() => {
    const isUnlocked = sessionStorage.getItem('birthday_surprise_unlocked') === 'true';
    return isUnlocked ? 'teddyHub' : 'password';
  });

  const [isGuideOpen, setIsGuideOpen] = useState(false);

  // When password succeeds
  const handleUnlockSuccess = () => {
    sessionStorage.setItem('birthday_surprise_unlocked', 'true');
    setCurrentScreen('teddyHub');
  };

  // Lock session manually
  const handleLockSession = () => {
    sessionStorage.removeItem('birthday_surprise_unlocked');
    setCurrentScreen('password');
  };

  // Screen variants for smooth cinematic page transitions
  const pageVariants = {
    initial: { opacity: 0, y: 15, scale: 0.98 },
    animate: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: 'easeOut' as const } },
    exit: { opacity: 0, y: -15, scale: 0.98, transition: { duration: 0.35, ease: 'easeIn' as const } },
  };

  return (
    <div className="relative min-h-screen flex flex-col selection:bg-pink-300 selection:text-rose-900">
      {/* Floating hearts and ambient light bokeh */}
      <FloatingElements />

      {/* Top Navigation */}
      <Navbar
        currentScreen={currentScreen}
        onNavigate={(screen) => setCurrentScreen(screen)}
        onOpenGuide={() => setIsGuideOpen(true)}
        onLockSession={handleLockSession}
      />

      {/* Main Screen Content with Cinematic Transitions */}
      <main className="flex-1 relative z-10">
        <AnimatePresence mode="wait">
          {currentScreen === 'password' && (
            <motion.div
              key="screen-password"
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <ScreenPassword onUnlockSuccess={handleUnlockSuccess} />
            </motion.div>
          )}

          {currentScreen === 'teddyHub' && (
            <motion.div
              key="screen-hub"
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <ScreenTeddyHub
                onSelectScreen={(screen) => setCurrentScreen(screen)}
              />
            </motion.div>
          )}

          {currentScreen === 'countdown' && (
            <motion.div
              key="screen-countdown"
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <ScreenCountdown onBack={() => setCurrentScreen('teddyHub')} />
            </motion.div>
          )}

          {currentScreen === 'memories' && (
            <motion.div
              key="screen-memories"
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <ScreenMemories
                onBack={() => setCurrentScreen('teddyHub')}
                onOpenGuide={() => setIsGuideOpen(true)}
              />
            </motion.div>
          )}

          {currentScreen === 'letter' && (
            <motion.div
              key="screen-letter"
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <ScreenLetter onBack={() => setCurrentScreen('teddyHub')} />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Romantic Footer */}
      <footer className="relative z-10 py-6 text-center text-xs text-rose-800/60 font-sans border-t border-pink-100/60">
        <p>
          Crafted with endless love for {surpriseConfig.recipientName} • “{surpriseConfig.siteTitle}”
        </p>
      </footer>

      {/* Boyfriend's Setup & QR Code Modal */}
      <GuideModal isOpen={isGuideOpen} onClose={() => setIsGuideOpen(false)} />
    </div>
  );
};

export default App;
