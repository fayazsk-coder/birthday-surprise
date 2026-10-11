import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Navbar } from './components/common/Navbar';
import { FloatingElements } from './components/background/FloatingElements';
import { SparkleTrail } from './components/background/SparkleTrail';
import { ScreenPassword } from './components/screens/ScreenPassword';
import { ScreenTeddyHub } from './components/screens/ScreenTeddyHub';
import { ScreenCountdown } from './components/screens/ScreenCountdown';
import { ScreenMemories } from './components/screens/ScreenMemories';
import { ScreenLetter } from './components/screens/ScreenLetter';
import { GuideModal } from './components/modals/GuideModal';
import { BlushQuestionModal } from './components/modals/BlushQuestionModal';
import { surpriseConfig } from './config/surpriseConfig';

type ScreenType = 'password' | 'teddyHub' | 'countdown' | 'memories' | 'letter';

export const App: React.FC = () => {
  const [currentScreen, setCurrentScreen] = useState<ScreenType>(() => {
    const isUnlocked = sessionStorage.getItem('birthday_surprise_unlocked') === 'true';
    return isUnlocked ? 'teddyHub' : 'password';
  });

  const [visitedScreens, setVisitedScreens] = useState<string[]>(() => {
    try {
      const saved = sessionStorage.getItem('visited_teddies');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [isGuideOpen, setIsGuideOpen] = useState(false);
  const [isBlushOpen, setIsBlushOpen] = useState(false);

  // When navigating to any screen, record it as visited
  const handleNavigate = (screen: ScreenType) => {
    if (screen === 'countdown' || screen === 'memories' || screen === 'letter') {
      setVisitedScreens((prev) => {
        if (!prev.includes(screen)) {
          const next = [...prev, screen];
          sessionStorage.setItem('visited_teddies', JSON.stringify(next));
          return next;
        }
        return prev;
      });
    }
    setCurrentScreen(screen);
  };

  const handleUnlockSuccess = () => {
    sessionStorage.setItem('birthday_surprise_unlocked', 'true');
    setCurrentScreen('teddyHub');
  };

  const handleLockSession = () => {
    sessionStorage.removeItem('birthday_surprise_unlocked');
    setCurrentScreen('password');
  };

  const pageVariants = {
    initial: { opacity: 0, y: 15, scale: 0.98 },
    animate: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: 'easeOut' as const } },
    exit: { opacity: 0, y: -15, scale: 0.98, transition: { duration: 0.35, ease: 'easeIn' as const } },
  };

  return (
    <div className="relative min-h-screen flex flex-col selection:bg-pink-300 selection:text-rose-900">
      {/* Floating hearts and romantic particles */}
      <FloatingElements />

      {/* Interactive cursor/touch heart and sparkle trail */}
      <SparkleTrail />

      {/* Top Navigation */}
      <Navbar
        currentScreen={currentScreen}
        onNavigate={handleNavigate}
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
                onSelectScreen={handleNavigate}
                visitedScreens={visitedScreens}
                onOpenBlush={() => setIsBlushOpen(true)}
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

      {/* Playful Blushing Question Modal */}
      <BlushQuestionModal isOpen={isBlushOpen} onClose={() => setIsBlushOpen(false)} />
    </div>
  );
};

export default App;
