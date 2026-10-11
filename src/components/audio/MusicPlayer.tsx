import React, { useEffect, useRef, useState, useCallback } from 'react';
import { Volume2, VolumeX, Heart } from 'lucide-react';
import { surpriseConfig } from '../../config/surpriseConfig';

export const MusicPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [useSynth, setUseSynth] = useState<boolean>(true);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const synthTimerRef = useRef<number | null>(null);
  const audioCtxRef = useRef<AudioContext | null>(null);

  // Synthesized romantic lullaby melody (frequencies in Hz)
  const melodyRef = useRef<{ note: number; dur: number }[]>([
    { note: 659.25, dur: 0.5 }, // E5
    { note: 783.99, dur: 0.5 }, // G5
    { note: 987.77, dur: 0.7 }, // B5
    { note: 1046.5, dur: 0.9 }, // C6
    { note: 987.77, dur: 0.5 }, // B5
    { note: 783.99, dur: 0.5 }, // G5
    { note: 659.25, dur: 0.8 }, // E5
    { note: 587.33, dur: 0.5 }, // D5
    { note: 739.99, dur: 0.5 }, // F#5
    { note: 880.0, dur: 0.7 },  // A5
    { note: 1174.66, dur: 0.9 },// D6
    { note: 880.0, dur: 0.5 },  // A5
    { note: 739.99, dur: 0.8 }, // F#5
    { note: 523.25, dur: 0.5 }, // C5
    { note: 659.25, dur: 0.5 }, // E5
    { note: 783.99, dur: 0.7 }, // G5
    { note: 1046.5, dur: 1.1 }, // C6
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

    // Overtones for rich music box timbre
    const osc2 = ctx.createOscillator();
    const gain2 = ctx.createGain();
    osc2.type = 'sine';
    osc2.frequency.setValueAtTime(note * 2.01, ctx.currentTime);

    const now = ctx.currentTime;
    gain.gain.setValueAtTime(0.001, now);
    gain.gain.exponentialRampToValueAtTime(0.08, now + 0.02);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + dur * 1.6);

    gain2.gain.setValueAtTime(0.001, now);
    gain2.gain.exponentialRampToValueAtTime(0.02, now + 0.01);
    gain2.gain.exponentialRampToValueAtTime(0.0001, now + dur * 0.8);

    osc.connect(gain);
    osc2.connect(gain2);
    gain.connect(ctx.destination);
    gain2.connect(ctx.destination);

    osc.start(now);
    osc2.start(now);
    osc.stop(now + dur * 1.6);
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
    // First try HTML5 audio if mp3 is present
    if (audioRef.current && !useSynth) {
      try {
        await audioRef.current.play();
        setIsPlaying(true);
        return;
      } catch {
        // Fallback to synth
        setUseSynth(true);
      }
    }

    // Use Web Audio Synth
    playNextSynthNote();
    setIsPlaying(true);
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

  // Check if mp3 file exists
  useEffect(() => {
    const audio = new Audio(surpriseConfig.music.audioFilePath);
    audio.loop = true;
    audio.volume = 0.5;

    audio.addEventListener('canplaythrough', () => {
      audioRef.current = audio;
      setUseSynth(false);
    });

    audio.addEventListener('error', () => {
      // Fallback to built-in music box synth
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
    <div className="relative group">
      <button
        onClick={toggleMusic}
        className={`flex items-center gap-2 px-3 py-1.5 rounded-full transition-all duration-300 text-xs sm:text-sm font-medium border shadow-sm backdrop-blur-md cursor-pointer ${
          isPlaying
            ? 'bg-rose-500/15 border-rose-400/50 text-rose-700 shadow-rose-200/50 ring-2 ring-rose-300/40'
            : 'bg-white/80 border-pink-200/70 text-pink-700 hover:bg-pink-50/90'
        }`}
        title={isPlaying ? 'Pause romantic music' : 'Play romantic background music'}
        aria-label={isPlaying ? 'Pause music' : 'Play music'}
      >
        <span className="relative flex items-center justify-center">
          {isPlaying ? (
            <Volume2 className="w-4 h-4 text-rose-500 animate-pulse" />
          ) : (
            <VolumeX className="w-4 h-4 text-pink-400" />
          )}
        </span>

        <span className="hidden sm:inline font-sans">
          {isPlaying ? 'Music: Playing ❤️' : 'Romantic Music'}
        </span>

        {/* Dancing music bars when active */}
        {isPlaying && (
          <div className="flex items-end gap-0.5 h-3">
            <span className="w-0.5 bg-rose-500 rounded-full animate-music-bar-1" />
            <span className="w-0.5 bg-rose-500 rounded-full animate-music-bar-2" />
            <span className="w-0.5 bg-rose-500 rounded-full animate-music-bar-3" />
          </div>
        )}
      </button>

      {/* Floating subtle tooltip on hover */}
      <div className="absolute right-0 top-full mt-2 hidden group-hover:flex items-center gap-1.5 px-2.5 py-1 bg-white/95 text-[11px] text-pink-800 rounded-lg shadow-md border border-pink-100 whitespace-nowrap z-50 pointer-events-none">
        <Heart className="w-3 h-3 text-rose-400 fill-rose-300" />
        <span>{surpriseConfig.music.songTitle}</span>
      </div>
    </div>
  );
};
