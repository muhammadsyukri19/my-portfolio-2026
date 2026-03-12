"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Song {
  title: string;
  artist: string;
  cover: string;
  src: string;
}

const song: Song = {
  title: "Stereo Love",
  artist: "Edward Maya",
  cover: "/pribadi/stereo.jpg",
  src: "/music/stereo_love.mp3",
};

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState("0:00");
  const [duration, setDuration] = useState("0:00");
  const [hasError, setHasError] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = Math.floor(seconds % 60);
    return `${m}:${s.toString().padStart(2, "0")}`;
  };

  useEffect(() => {
    const audio = new Audio(song.src);
    audio.preload = "metadata";
    audioRef.current = audio;

    const onTimeUpdate = () => {
      if (audio.duration) {
        setProgress((audio.currentTime / audio.duration) * 100);
        setCurrentTime(formatTime(audio.currentTime));
      }
    };

    const onLoaded = () => {
      setDuration(formatTime(audio.duration));
    };

    const onEnded = () => {
      setIsPlaying(false);
      setProgress(0);
      setCurrentTime("0:00");
    };

    const onError = () => {
      setHasError(true);
    };

    audio.addEventListener("timeupdate", onTimeUpdate);
    audio.addEventListener("loadedmetadata", onLoaded);
    audio.addEventListener("ended", onEnded);
    audio.addEventListener("error", onError);

    return () => {
      audio.removeEventListener("timeupdate", onTimeUpdate);
      audio.removeEventListener("loadedmetadata", onLoaded);
      audio.removeEventListener("ended", onEnded);
      audio.removeEventListener("error", onError);
      audio.pause();
    };
  }, []);

  const togglePlay = useCallback(() => {
    const audio = audioRef.current;
    if (!audio || hasError) return;

    if (isPlaying) {
      audio.pause();
    } else {
      audio.play().catch(() => setHasError(true));
    }
    setIsPlaying(!isPlaying);
  }, [isPlaying, hasError]);

  const togglePanel = useCallback(() => {
    if (!isOpen) {
      // Opening panel — also start playing if not already
      setIsOpen(true);
      const audio = audioRef.current;
      if (audio && !isPlaying && !hasError) {
        audio.play().catch(() => setHasError(true));
        setIsPlaying(true);
      }
    } else {
      setIsOpen(false);
    }
  }, [isOpen, isPlaying, hasError]);

  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const audio = audioRef.current;
    if (!audio || !audio.duration) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const pct = x / rect.width;
    audio.currentTime = pct * audio.duration;
  };

  return (
    <div className="fixed top-1/2 -translate-y-1/2 right-0 md:top-auto md:translate-y-0 md:bottom-8 md:right-8 z-50">
      {/* Expanded Panel — absolute above button, does NOT affect button position */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.9 }}
            transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="absolute bottom-full mb-3 right-0 bg-[#141414]/95 backdrop-blur-xl border border-[#252525] rounded-2xl p-4 w-[260px] max-w-[calc(100vw-3rem)] shadow-[0_8px_40px_rgba(0,0,0,0.5)]"
          >
            {/* Song Info */}
            <div className="flex items-center gap-3 mb-4">
              {/* Cover Art */}
              <div className="relative w-12 h-12 rounded-xl overflow-hidden shrink-0 bg-[#1a1a1a]">
                <div
                  className={`w-full h-full bg-gradient-to-br from-[#84cc16]/20 to-[#65a30d]/20 flex items-center justify-center ${
                    isPlaying ? "animate-spin-slow" : ""
                  }`}
                >
                  <div className="w-8 h-8 rounded-full border-2 border-[#84cc16]/30 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-[#84cc16]" />
                  </div>
                </div>
              </div>

              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-white truncate">
                  {song.title}
                </p>
                <p className="text-[11px] text-white/40 truncate">
                  {song.artist}
                </p>
              </div>

              {/* Equalizer Bars */}
              <div className="flex items-end gap-[2px] h-4">
                {[0, 0.2, 0.1, 0.3].map((delay, i) => (
                  <motion.div
                    key={i}
                    className="w-[3px] rounded-full bg-[#84cc16]"
                    animate={
                      isPlaying
                        ? {
                            height: ["4px", "14px", "6px", "12px", "4px"],
                          }
                        : { height: "4px" }
                    }
                    transition={
                      isPlaying
                        ? {
                            duration: 0.8,
                            delay,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }
                        : { duration: 0.3 }
                    }
                  />
                ))}
              </div>
            </div>

            {/* Progress Bar */}
            <div
              className="w-full h-1 bg-[#252525] rounded-full cursor-pointer group mb-2"
              onClick={handleProgressClick}
            >
              <motion.div
                className="h-full bg-[#84cc16] rounded-full relative"
                style={{ width: `${progress}%` }}
                transition={{ duration: 0.1 }}
              >
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-[#84cc16] opacity-0 group-hover:opacity-100 transition-opacity shadow-[0_0_6px_rgba(132,204,22,0.4)]" />
              </motion.div>
            </div>

            {/* Time */}
            <div className="flex justify-between mb-3">
              <span className="text-[9px] font-mono text-white/25">
                {currentTime}
              </span>
              <span className="text-[9px] font-mono text-white/25">
                {duration}
              </span>
            </div>

            {/* Controls */}
            <div className="flex items-center justify-center gap-4">
              {/* Prev */}
              <button className="text-white/30 hover:text-white/60 transition-colors">
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M6 6h2v12H6zm3.5 6l8.5 6V6z" />
                </svg>
              </button>

              {/* Play / Pause */}
              <button
                onClick={togglePlay}
                className="w-10 h-10 rounded-full bg-[#84cc16] flex items-center justify-center hover:bg-[#a3e635] transition-colors duration-300 hover:shadow-[0_0_20px_rgba(132,204,22,0.3)]"
              >
                {isPlaying ? (
                  <svg
                    className="w-4 h-4 text-[#0B0B0B]"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
                  </svg>
                ) : (
                  <svg
                    className="w-4 h-4 text-[#0B0B0B] ml-0.5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                )}
              </button>

              {/* Next */}
              <button className="text-white/30 hover:text-white/60 transition-colors">
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M6 18l8.5-6L6 6v12zM16 6v12h2V6h-2z" />
                </svg>
              </button>
            </div>

            {/* {hasError && (
            //   <p className="text-[9px] text-white/20 text-center mt-3 font-mono">
            //     Add your music file to /public/music/
            //   </p>
            )} */}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Button */}
      <motion.button
        onClick={togglePanel}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        className={`relative flex items-center justify-center transition-all duration-500
          w-14 h-14 rounded-l-2xl rounded-r-none border-2 border-[#252525]
          md:w-25 md:h-18 md:rounded-full
          ${
            isPlaying
              ? "bg-[#84cc16] shadow-[0_0_24px_rgba(132,204,22,0.35)]"
              : "bg-[#141414] border border-[#252525] md:hover:border-[#84cc16]/50 md:hover:shadow-[0_0_20px_rgba(132,204,22,0.15)]"
          }`}
      >
        {/* Pulsing ring — desktop only */}
        {!isPlaying && (
          <motion.div
            className="absolute inset-[-4px] rounded-l-2xl rounded-r-none md:rounded-full border-4 border-[#84cc16]/20 hidden md:block"
            animate={{ scale: [1, 1.12, 1], opacity: [0.6, 0, 0.6] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          />
        )}

        {/* Rotating dashed ring when playing */}
        {isPlaying && (
          <motion.div
            className="absolute inset-[-10px] rounded-l-2xl rounded-r-none md:rounded-full border border-dashed border-[#84cc16]/30"
            animate={{ rotate: 360 }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          />
        )}

        {/* Music Icon */}
        <motion.svg
          className={`w-7 h-7 transition-colors duration-300 ${
            isPlaying ? "text-[#0B0B0B]" : "text-[#84cc16]"
          }`}
          fill="currentColor"
          viewBox="0 0 24 24"
          animate={!isPlaying ? { y: [0, -2, 0] } : {}}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z" />
        </motion.svg>
      </motion.button>
    </div>
  );
}
