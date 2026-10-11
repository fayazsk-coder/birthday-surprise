import React, { useEffect, useRef, useState, useCallback } from 'react';
import { Volume2, VolumeX, Heart, Music, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { surpriseConfig } from '../../config/surpriseConfig';

export const MusicPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [useSynth, setUseSynth] = useState<boolean>(true);
  const [showLyrics, setShowLyrics] = useState<boolean>(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const synthTimerRef = useRef<number | null>(null);
  const audioCtxRef = useRef<AudioContext | null>(null);

  // Synthesized Samjhawan melody notes (Key of D / G)
  const melodyRef = useRef<{ note: number; dur: number }[]>([
    // "Main tenu samjhawan ki..."
    { note: 293.66, dur: 0.45 }, // D4 (Main)
    { note: 369.99, dur: 0.45 }, // F#4 (te-)
    { note: 392.00, dur: 0.45 }, // G4 (-nu)
    { note: 440.00, dur: 0.65 }, // A4 (sam-)
    { note: 493.88, dur: 0.5 },  // B4 (-jha-)
    { note: 440.00, dur: 0.5 },  // A4 (-wan)
    { note: 392.00, dur: 0.65 }, // G4 (ki)
    { note: 369.99, dur: 0.9 },  // F#4

    // "Na tere bina lagda jee..."
    { note: 293.66, dur: 0.45 }, // D4 (Na)
    { note: 329.63, dur: 0.45 }, // E4 (te-)
    { note: 369.99, dur: 0.45 }, // F#4 (-re)
    { note: 392.00, dur: 0.55 }, // G4 (bi-na)
    { note: 369.99, dur: 0.5 },  // F#4 (lag-)
    { note: 329.63, dur: 0.6 },  // E4 (-da)
    { note: 293.66, dur: 1.1 },  // D4 (jee)

    // "Tu ki jaane pyaar mera..."
    { note: 293.66, dur: 0.4 },  // D4 (Tu)
    { note: 369.99, dur: 0.4 },  // F#4 (ki)
    { note: 440.00, dur: 0.5 },  // A4 (jaa-)
    { note: 493.88, dur: 0.55 }, // B4 (-ne)
    { note: 587.33, dur: 0.65 }, // D5 (pyaar)
    { note: 554.37, dur: 0.5 },  // C#5 (me-)
    { note: 493.88, dur: 0.5 },  // B4 (-ra)
    { note: 440.00, dur: 0.9 },  // A4

    // "Main karoon intezaar tera..."
    { note: 392.00, dur: 0.45 }, // G4 (Main)
    { note: 493.88, dur: 0.45 }, // B4 (ka-)
    { note: 440.00, dur: 0.5 },  // A4 (-roon)
    { note: 392.00, dur: 0.45 }, // G4 (in-te-)
    { note: 369.99, dur: 0.5 },  // F#4 (-zaar)
    { note: 329.63, dur: 0.5 },  // E4 (te-)
    { note: 293.66, dur: 1.4 },  // D4 (-ra)
  ]);
  const noteIndexRef = useRef<number>(0);

  // Play a single music box bell note using Web Audio API
  const playNextSynthNote = useCallback(() => {
    if (!audioCtxRef.current) {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (AudioCtx) {
        audioCtxRef.current = new AudioCtx();
      }
    }
    const ctx = audioCtxRef.current;
    if (!ctx) return;

    if (ctx.state === 'suspended') {
      ctx.resume().catch(() => {});
    }

    const { note, dur } = melodyRef.current[noteIndexRef.current];
    noteIndexRef.current = (noteIndexRef.current + 1) % melodyRef.current.length;

    // Primary bell tone
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(note, ctx.currentTime);

    // Overtones for rich romantic music box chime
    const osc2 = ctx.createOscillator();
    const gain2 = ctx.createGain();
    osc2.type = 'sine';
    osc2.frequency.setValueAtTime(note * 2.01, ctx.currentTime);

    const now = ctx.currentTime;
    gain.gain.setValueAtTime(0.001, now);
    gain.gain.exponentialRampToValueAtTime(0.09, now + 0.02);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + dur * 1.5);

    gain2.gain.setValueAtTime(0.001, now);
    gain2.gain.exponentialRampToValueAtTime(0.02, now + 0.01);
    gain2.gain.exponentialRampToValueAtTime(0.0001, now + dur * 0.8);

    osc.connect(gain);
    osc2.connect(gain2);
    gain.connect(ctx.destination);
    gain2.connect(ctx.destination);

    osc.start(now);
    osc2.start(now);
    osc.stop(now + dur * 1.5);
    osc2.stop(now + dur * 0.8);

    // Schedule next note
    synthTimerRef.current = window.setTimeout(playNextSynthNote, dur * 800);
  }, []);

  const stopSynth = () => {
    if (synthTimerRef.current) {
      clearTimeout(synthTimerRef.current);
      synthTimerRef.current = null;
    }
  };

  const startMusic = async () => {
    if (audioRef.current && !useSynth) {
      try {
        await audioRef.current.play();
        setIsPlaying(true);
        setShowLyrics(true);
        return;
      } catch {
        setUseSynth(true);
      }
    }

    playNextSynthNote();
    setIsPlaying(true);
    setShowLyrics(true);
  };

  const stopMusic = () => {
    if (audioRef.current) {
      audioRef.current.pause();
    }
    stopSynth();
    setIsPlaying(false);
  };

  const toggleMusic = () => {
    if (isPlaying) {
      stopMusic();
    } else {
      startMusic();
    }
  };

  useEffect(() => {
    const audio = new Audio(surpriseConfig.music.audioFilePath);
    audio.loop = true;
    audio.volume = 0.5;

    audio.addEventListener('canplaythrough', () => {
      audioRef.current = audio;
      setUseSynth(false);
    });

    audio.addEventListener('error', () => {
      setUseSynth(true);
    });

    return () => {
      stopSynth();
      if (audioRef.current) {
        audioRef.current.pause();
      }
    };
  }, []);

  return (
    <div className="relative">
      <div className="flex items-center gap-1.5">
        <button
          onClick={toggleMusic}
          className={`flex items-center gap-2 px-3 py-1.5 rounded-full transition-all duration-300 text-xs sm:text-sm font-medium border shadow-sm backdrop-blur-md cursor-pointer ${
            isPlaying
              ? 'bg-rose-500/15 border-rose-400/50 text-rose-700 shadow-rose-200/50 ring-2 ring-rose-300/40'
              : 'bg-white/80 border-pink-200/70 text-pink-700 hover:bg-pink-50/90'
          }`}
          title={isPlaying ? 'Pause Samjhawan' : 'Play Samjhawan song melody'}
          aria-label={isPlaying ? 'Pause music' : 'Play music'}
        >
          <span className="relative flex items-center justify-center">
            {isPlaying ? (
              <Volume2 className="w-4 h-4 text-rose-500 animate-pulse" />
            ) : (
              <VolumeX className="w-4 h-4 text-pink-400" />
            )}
          </span>

          <span className="font-sans">
            {isPlaying ? 'Samjhawan ❤️' : 'Play Song 🎶'}
          </span>

          {isPlaying && (
            <div className="flex items-end gap-0.5 h-3">
              <span className="w-0.5 bg-rose-500 rounded-full animate-music-bar-1" />
              <span className="w-0.5 bg-rose-500 rounded-full animate-music-bar-2" />
              <span className="w-0.5 bg-rose-500 rounded-full animate-music-bar-3" />
            </div>
          )}
        </button>

        {/* Lyrics button toggle */}
        {isPlaying && (
          <button
            onClick={() => setShowLyrics(!showLyrics)}
            className="p-1.5 rounded-full bg-rose-100 hover:bg-rose-200 text-rose-700 transition-colors border border-rose-200/80 cursor-pointer text-xs flex items-center gap-1"
            title="Toggle Samjhawan Lyrics"
          >
            <Music className="w-3.5 h-3.5" />
            <span className="hidden md:inline text-[11px] font-medium">Lyrics</span>
          </button>
        )}
      </div>

      {/* Floating Samjhawan Lyrics Card */}
      <AnimatePresence>
        {isPlaying && showLyrics && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 10 }}
            className="absolute right-0 top-full mt-3 w-72 sm:w-80 bg-white/95 backdrop-blur-xl border border-rose-200 rounded-2xl p-4 shadow-xl z-50 text-left"
          >
            <div className="flex items-center justify-between pb-2 border-b border-pink-100 mb-2.5">
              <div className="flex items-center gap-1.5 text-xs font-bold text-rose-900">
                <Heart className="w-3.5 h-3.5 fill-rose-500 text-rose-500" />
                <span>Samjhawan • Our Favorite Song 🎶</span>
              </div>
              <button
                onClick={() => setShowLyrics(false)}
                className="p-1 text-rose-400 hover:text-rose-700 rounded-lg"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="space-y-1.5 text-xs text-rose-900/90 font-serif italic leading-relaxed">
              {surpriseConfig.music.samjhawanLyrics.map((line, idx) => (
                <p key={idx} className={idx === 0 || idx === 1 ? 'font-bold text-rose-700' : ''}>
                  {line}
                </p>
              ))}
            </div>

            <div className="mt-2.5 pt-2 border-t border-pink-100 flex items-center justify-between text-[10px] text-rose-500 font-sans">
              <span>Dedicated with love by Fayzuuu</span>
              <span>For Chokkiii Maaa ❤️</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
