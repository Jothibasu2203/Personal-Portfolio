import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export const WelcomeScreen: React.FC = () => {
  const [isOpening, setIsOpening] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  const handleOpen = () => {
    if (isOpening) return;
    setIsOpening(true);
    
    // The flash animation sequence:
    // 1. Flash in (0.1s)
    // 2. Wait a tiny bit (0.1s)
    // 3. Flash out (0.4s) - while this happens, we reveal the main page
    
    setTimeout(() => {
      // Main page is already underneath, we just need to hide the welcome screen
      setTimeout(() => {
        setIsVisible(false); // Finally set display: none
      }, 500); // Wait for flash out to complete
    }, 200);
  };

  // We don't return null here, we use display: none in the style below
  // if (!isVisible) return null;

  return (
    <div 
      className={`fixed inset-0 z-[200] bg-black flex flex-col items-center justify-center cursor-pointer ${isOpening ? 'pointer-events-none' : ''}`}
      style={{ display: isVisible ? 'flex' : 'none' }}
      onClick={handleOpen}
    >
      {/* Green Flash Overlay */}
      <AnimatePresence>
        {isOpening && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ 
              opacity: { duration: 0.1 },
              exit: { duration: 0.4 }
            }}
            className="fixed inset-0 z-[210] bg-[#00ff41]"
          />
        )}
      </AnimatePresence>

      {/* The Orb Container */}
      <div className="relative w-40 h-40 sm:w-64 sm:h-64 flex flex-col items-center justify-center scale-90 sm:scale-100">
        {/* Glow behind the seam */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-52 sm:w-80 h-4 sm:h-8 bg-[#00ff41] blur-3xl opacity-40 animate-glow-pulse" />
        
        {/* Top Half */}
        <div className="relative w-36 h-18 sm:w-60 sm:h-30 bg-gradient-to-b from-[#1a1a1a] to-[#0a0a0a] rounded-t-full border-t-2 border-x-2 border-[#2a2a2a] overflow-hidden animate-orb-top-breathe shadow-[inset_0_10px_20px_rgba(255,255,255,0.05)]">
          {/* Curved Lines */}
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-0 left-0 w-full h-full border-[2px] border-[#2a2a2a] rounded-full -translate-y-1/2 scale-150 rotate-12" />
            <div className="absolute top-0 left-0 w-full h-full border-[2px] border-[#2a2a2a] rounded-full -translate-y-1/3 scale-150 -rotate-12" />
            <div className="absolute top-0 left-0 w-full h-full border-[2px] border-[#2a2a2a] rounded-full -translate-y-1/4 scale-150 rotate-45" />
          </div>
        </div>

        {/* Seam Area */}
        <div className="relative w-40 sm:w-64 h-1 flex items-center justify-center z-10">
          <div className="w-full h-[1px] bg-[#00ff41] shadow-[0_0_10px_#00ff41]" />
          <div className="absolute w-2 h-2 bg-[#00ff41] rounded-full shadow-[0_0_15px_#00ff41,0_0_5px_white]" />
        </div>

        {/* Bottom Half */}
        <div className="relative w-36 h-18 sm:w-60 sm:h-30 bg-gradient-to-t from-[#1a1a1a] to-[#0a0a0a] rounded-b-full border-b-2 border-x-2 border-[#2a2a2a] overflow-hidden animate-orb-bottom-breathe shadow-[inset_0_-10px_20px_rgba(255,255,255,0.05)]">
          {/* Curved Lines */}
          <div className="absolute inset-0 opacity-30">
            <div className="absolute bottom-0 left-0 w-full h-full border-[2px] border-[#2a2a2a] rounded-full translate-y-1/2 scale-150 -rotate-12" />
            <div className="absolute bottom-0 left-0 w-full h-full border-[2px] border-[#2a2a2a] rounded-full translate-y-1/3 scale-150 rotate-12" />
            <div className="absolute bottom-0 left-0 w-full h-full border-[2px] border-[#2a2a2a] rounded-full translate-y-1/4 scale-150 -rotate-45" />
          </div>
        </div>
      </div>

      {/* Arrows & Text */}
      <div className="mt-16 flex flex-col items-center gap-4">
        <div className="flex flex-col items-center -space-y-4">
          <div className="text-[#00ff41] opacity-40 animate-chevron-wave-1">
            <svg width="40" height="20" viewBox="0 0 40 20" fill="none" stroke="currentColor" strokeWidth="3">
              <path d="M5 5L20 15L35 5" />
            </svg>
          </div>
          <div className="text-[#00ff41] opacity-40 animate-chevron-wave-2">
            <svg width="40" height="20" viewBox="0 0 40 20" fill="none" stroke="currentColor" strokeWidth="3">
              <path d="M5 5L20 15L35 5" />
            </svg>
          </div>
          <div className="text-[#00ff41] opacity-40 animate-chevron-wave-3">
            <svg width="40" height="20" viewBox="0 0 40 20" fill="none" stroke="currentColor" strokeWidth="3">
              <path d="M5 5L20 15L35 5" />
            </svg>
          </div>
        </div>
        
        <p className="font-orbitron text-[#00ff41] text-sm tracking-[0.5em] uppercase animate-text-blink mt-4">
          CLICK TO OPEN
        </p>
      </div>
    </div>
  );
};
