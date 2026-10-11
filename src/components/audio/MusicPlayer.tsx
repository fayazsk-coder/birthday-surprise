import React, { useEffect, useRef, useState, useCallback } from 'react';
import { Volume2, VolumeX, Heart } from 'lucide-react';
import { surpriseConfig } from '../../config/surpriseConfig';

export const MusicPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const hasSeekedRef = useRef<boolean>(false);
  const iframeRef = useRef<HTMLIFrameElement | null>(null);
  const [useIframeFallback, setUseIframeFallback] = useState<boolean>(false);

  // Initialize and load the audio file
  useEffect(() => {
    const audio = new Audio(surpriseConfig.music.audioFilePath);
    audio.loop = true;
    audio.volume = 0.85;

    // When audio metadata is loaded, prepare 30s start
    audio.addEventListener('loadedmetadata', () => {
      audio.currentTime = surpriseConfig.music.youtubeStartSeconds || 30;
    });

    audio.addEventListener('canplaythrough', () => {
      audioRef.current = audio;
    });

    // Handle loop back to 30 seconds
    audio.addEventListener('timeupdate', () => {
      if (audio.ended) {
        audio.currentTime = surpriseConfig.music.youtubeStartSeconds || 30;
        audio.play().catch(() => {});
      }
    });

    audio.addEventListener('error', () => {
      // If audio file cannot load on this browser, fallback to YouTube Iframe
      setUseIframeFallback(true);
    });

    audioRef.current = audio;

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
      }
    };
  }, []);

  const startMusic = useCallback(() => {
    if (audioRef.current && !useIframeFallback) {
      if (!hasSeekedRef.current) {
        audioRef.current.currentTime = surpriseConfig.music.youtubeStartSeconds || 30;
        hasSeekedRef.current = true;
      }
      audioRef.current
        .play()
        .then(() => {
          setIsPlaying(true);
        })
        .catch(() => {
          // If browser blocked audio file, switch to YouTube embed
          setUseIframeFallback(true);
          setIsPlaying(true);
        });
    } else {
      setUseIframeFallback(true);
      setIsPlaying(true);
    }
  }, [useIframeFallback]);

  const stopMusic = useCallback(() => {
    if (audioRef.current) {
      audioRef.current.pause();
    }
    setIsPlaying(false);
  }, []);

  const toggleMusic = () => {
    if (isPlaying) {
      stopMusic();
    } else {
      startMusic();
    }
  };

  return (
    <div className="relative group">
      <button
        onClick={toggleMusic}
        className={`flex items-center gap-2 px-3 py-1.5 rounded-full transition-all duration-300 text-xs sm:text-sm font-medium border shadow-sm backdrop-blur-md cursor-pointer ${
          isPlaying
            ? 'bg-rose-500/15 border-rose-400/50 text-rose-700 shadow-rose-200/50 ring-2 ring-rose-300/40'
            : 'bg-white/80 border-pink-200/70 text-pink-700 hover:bg-pink-50/90'
        }`}
        title={isPlaying ? 'Pause Samjhawan' : 'Play Samjhawan song (from 0:30)'}
        aria-label={isPlaying ? 'Pause music' : 'Play music'}
      >
        <span className="relative flex items-center justify-center">
          {isPlaying ? (
            <Volume2 className="w-4 h-4 text-rose-500 animate-pulse" />
          ) : (
            <VolumeX className="w-4 h-4 text-pink-400" />
          )}
        </span>

        <span className="font-sans font-medium">
          {isPlaying ? 'Samjhawan Playing ❤️' : 'Play Samjhawan 🎶'}
        </span>

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
        <span>Samjhawan • Starts after 30s ❤️</span>
      </div>

      {/* Hidden YouTube Iframe Player Fallback */}
      {useIframeFallback && isPlaying && (
        <iframe
          ref={iframeRef}
          className="hidden"
          width="1"
          height="1"
          src={`https://www.youtube.com/embed/${surpriseConfig.music.youtubeVideoId}?autoplay=1&start=${surpriseConfig.music.youtubeStartSeconds}&enablejsapi=1`}
          title="Samjhawan Song Audio"
          allow="autoplay"
        />
      )}
    </div>
  );
};
