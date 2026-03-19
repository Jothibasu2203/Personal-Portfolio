import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useMotionValue, useTransform } from 'motion/react';
import { ALIENS, Alien, SOUNDS } from '../constants';
import { Shield, Activity, Mail, X, Linkedin, Instagram, Phone } from 'lucide-react';

const SECTION_ICONS: Record<string, React.ReactNode> = {
  about: (
    <svg viewBox="0 0 24 24" fill="none" stroke="#82ff00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  ),
  education: (
    <svg viewBox="0 0 24 24" fill="none" stroke="#82ff00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
      <path d="M2 10L12 5L22 10L12 15L2 10Z" />
      <path d="M6 12V18C6 18 8 21 12 21C16 21 18 18 18 18V12" />
    </svg>
  ),
  work: (
    <svg viewBox="0 0 24 24" fill="none" stroke="#82ff00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
      <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
    </svg>
  ),
  skills: (
    <svg viewBox="0 0 24 24" fill="none" stroke="#82ff00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
      <rect x="4" y="4" width="16" height="16" rx="2" ry="2" />
      <rect x="9" y="9" width="6" height="6" />
      <path d="M9 1v3M15 1v3M9 20v3M15 20v3M20 9h3M20 15h3M1 9h3M1 15h3" />
    </svg>
  ),
  achievements: (
    <svg viewBox="0 0 24 24" fill="none" stroke="#82ff00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  ),
  volunteer: (
    <svg viewBox="0 0 24 24" fill="none" stroke="#82ff00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
      <path d="M18 11V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v0" />
      <path d="M14 10V4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v0" />
      <path d="M10 10.5V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v0" />
      <path d="M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15" />
    </svg>
  ),
  interests: (
    <svg viewBox="0 0 24 24" fill="none" stroke="#82ff00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
      <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" />
    </svg>
  ),
  contact: (
    <svg viewBox="0 0 24 24" fill="none" stroke="#82ff00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
      <path d="M5 12a7 7 0 0 1 14 0" />
      <path d="M8.5 15.5a3.5 3.5 0 0 1 7 0" />
      <circle cx="12" cy="20" r="1" />
    </svg>
  )
};

export const Omnitrix = () => {
  const [rotation, setRotation] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [isTransforming, setIsTransforming] = useState(false);
  const [isInteracting, setIsInteracting] = useState(false);
  const [showFlash, setShowFlash] = useState(false);
  const themeAudioRef = useRef<HTMLAudioElement | null>(null);

  const playSound = (url: string) => {
    const audio = new Audio(url);
    audio.volume = 0.4;
    audio.play().catch(e => console.log('Audio playback failed:', e));
  };

  const handleRotate = (direction: 'left' | 'right') => {
    if (activeSection || isTransforming) return;
    playSound(SOUNDS.DIAL);
    setIsInteracting(true);
    setTimeout(() => setIsInteracting(false), 500);
    const step = 360 / ALIENS.length;
    const newRotation = direction === 'right' ? rotation + step : rotation - step;
    setRotation(newRotation);
    
    // Calculate index based on rotation
    const normalizedRotation = ((newRotation % 360) + 360) % 360;
    const index = Math.round(normalizedRotation / step) % ALIENS.length;
    setSelectedIndex(index);
  };

  const triggerTransformation = (sectionId: string) => {
    if (isTransforming) return;
    
    setIsTransforming(true);
    
    // Transformation sound
    const sfx = new Audio('https://drive.google.com/uc?export=download&id=1O52hwback4enqjrhElY5Ky0CZl9S6IjN');
    sfx.volume = 0.5;
    sfx.play().catch(e => console.log('Transformation sound failed:', e));

    // Sequence timing
    setTimeout(() => {
      setShowFlash(true);
    }, 560);

    setTimeout(() => {
      setActiveSection(sectionId);
      setIsTransforming(false);
      setShowFlash(false);
      
      // Play theme music
      if (!themeAudioRef.current) {
        themeAudioRef.current = new Audio(SOUNDS.THEME);
        themeAudioRef.current.volume = 0.2;
        themeAudioRef.current.loop = true;
      }
      themeAudioRef.current.play().catch(e => console.log('Theme playback failed:', e));
    }, 1200);
  };

  const handleBack = () => {
    playSound(SOUNDS.CLOSE);
    if (themeAudioRef.current) {
      themeAudioRef.current.pause();
      themeAudioRef.current.currentTime = 0;
    }
    
    // Reverse flash on re-entry
    setShowFlash(true);
    setTimeout(() => {
      setActiveSection(null);
    }, 300);
    setTimeout(() => {
      setShowFlash(false);
    }, 800);
  };

  const currentAlien = ALIENS[selectedIndex];

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-[#050a05] overflow-hidden font-rajdhani text-[#c8e6c8]">
      {/* Sci-fi Overlays (Main Dial View) */}
      <div className="fixed inset-0 grid-overlay pointer-events-none opacity-20" />
      <div className="fixed inset-0 scanlines pointer-events-none opacity-10" />

      {/* Background Glow */}
      <div 
        className="absolute inset-0 opacity-20 transition-colors duration-1000"
        style={{ 
          background: 'radial-gradient(circle at center, #00ff41 0%, transparent 70%)'
        }}
      />

      {/* Green Flash Effect */}
      <AnimatePresence>
        {showFlash && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center pointer-events-none"
            style={{
              background: 'radial-gradient(circle, white 0%, #82ff00 40%, transparent 100%)'
            }}
          >
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 3, opacity: 0.6 }}
              exit={{ scale: 4, opacity: 0 }}
              className="w-64 h-64 text-white"
            >
              <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-[0_0_30px_#82ff00]">
                {/* top triangle */}
                <polygon points="10,10 90,10 50,50" fill="#82ff00"/>
                {/* bottom triangle */}
                <polygon points="50,50 10,90 90,90" fill="#82ff00"/>
                {/* centre pinch dot */}
                <circle cx="50" cy="50" r="4" fill="#ccff88"/>
              </svg>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Container */}
      <AnimatePresence>
        {!activeSection && (
          <motion.div 
            exit={{ opacity: 0, scale: 0.95 }}
            className="relative z-10 flex flex-col items-center justify-center min-h-screen w-full max-w-6xl mx-auto px-4 sm:px-8 py-8 sm:py-12 overflow-x-hidden"
          >
            <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-32 w-full">
              
              {/* Left Side: The New Omnitrix Watch */}
              <div className="relative perspective-[1000px]">
                <div className="relative flex flex-col items-center w-full px-4">
                  {/* HOLOGRAM PROJECTION */}
                  <div className="absolute -top-20 sm:-top-28 left-1/2 -translate-x-1/2 flex flex-col items-center pointer-events-none z-20">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={currentAlien.id}
                        initial={{ opacity: 0, scaleY: 0.05, scaleX: 0.3 }}
                        animate={{ opacity: 1, scaleY: 1, scaleX: 1 }}
                        exit={{ opacity: 0, scaleY: 0.05, scaleX: 0.3 }}
                        transition={{ duration: 0.45, ease: [0.34, 1.56, 0.64, 1] }}
                        className="relative flex flex-col items-center"
                      >
                        <motion.div
                          animate={{ y: [0, -8, 0] }}
                          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                          className="relative flex items-center justify-center w-12 h-12 sm:w-20 sm:h-20"
                        >
                          <div className="absolute inset-0 rounded-full z-10 pointer-events-none"
                            style={{ background: "repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(0,0,0,0.18) 3px, rgba(0,0,0,0.18) 4px)" }}
                          />
                          <motion.div
                            className="w-full h-full flex items-center justify-center"
                            animate={{ opacity: [1, 1, 0.3, 1, 1, 0.2, 1] }}
                            transition={{ duration: 5, repeat: Infinity, times: [0, 0.83, 0.85, 0.87, 0.90, 0.92, 1] }}
                          >
                            <div className="w-10 h-10 sm:w-16 sm:h-16 drop-shadow-[0_0_8px_#82ff00] drop-shadow-[0_0_20px_rgba(130,255,0,0.7)]">
                              {currentAlien.holoIcon}
                            </div>
                          </motion.div>
                        </motion.div>

                      <motion.p
                        key={currentAlien.id + '-label'}
                        initial={{ opacity: 0, letterSpacing: "0.8em" }}
                        animate={{ opacity: 1, letterSpacing: "0.3em" }}
                        transition={{ duration: 0.4 }}
                        className="font-orbitron text-[8px] text-[#82ff00] uppercase tracking-[0.3em] mt-1"
                        style={{ textShadow: "0 0 8px #82ff00" }}
                      >
                        {currentAlien.name}
                      </motion.p>
                    </motion.div>
                  </AnimatePresence>


                </div>

                {/* Ripple Rings */}
                <AnimatePresence>
                  {isTransforming && (
                    <>
                      <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 2.5, opacity: [0, 0.5, 0] }}
                        transition={{ duration: 0.8 }}
                        className="absolute inset-0 rounded-full border-4 border-[#82ff00] z-0"
                      />
                      <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 3, opacity: [0, 0.3, 0] }}
                        transition={{ duration: 1, delay: 0.1 }}
                        className="absolute inset-0 rounded-full border-2 border-[#82ff00] z-0"
                      />
                    </>
                  )}
                </AnimatePresence>

                <motion.div 
                  className="relative z-10"
                  animate={{
                    y: isTransforming ? -30 : 0,
                    rotateX: isTransforming ? -14 : 0,
                  }}
                  transition={{ 
                    type: "spring", 
                    stiffness: 200, 
                    damping: 15,
                    duration: 0.6
                  }}
                >
                  <div className="relative w-56 h-56 sm:w-64 sm:h-64 lg:w-80 lg:h-80 flex items-center justify-center">
                    {/* Dark Green Band */}
                    <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[45%] h-[140%] bg-[#0a1f0a] rounded-[40px] border-x-4 border-[#2a7518] overflow-hidden">
                      {/* Texture Ridges */}
                      {[...Array(12)].map((_, i) => (
                        <div key={i} className="w-full h-px bg-black/40 my-4" />
                      ))}
                      {/* C-shaped circuit groove lines */}
                      <div className="absolute top-1/4 left-2 w-4 h-24 border-2 border-[#82ff00]/20 rounded-l-full border-r-0" />
                      <div className="absolute top-1/4 right-2 w-4 h-24 border-2 border-[#82ff00]/20 rounded-r-full border-l-0" />
                    </div>

                      {/* Outer Bezel (Octagonal feel) — counter-rotates */}
                      <motion.div 
                        animate={{ rotate: -rotation }}
                        transition={{
                          type: "spring",
                          stiffness: 180,
                          damping: 18
                        }}
                        onClick={() => handleRotate('right')}
                        className="absolute w-full h-full rounded-full border-[12px] border-[#2a7518] shadow-[0_0_30px_rgba(0,0,0,0.8)] cursor-pointer z-10"
                        style={{
                          background: 'conic-gradient(from 0deg, #2a7518 0%, #1a4a0f 12.5%, #2a7518 25%, #1a4a0f 37.5%, #2a7518 50%, #1a4a0f 62.5%, #2a7518 75%, #1a4a0f 87.5%, #2a7518 100%)'
                        }}
                      />

                    {/* Cardinal Cross Tabs */}
                    {['top', 'bottom', 'left', 'right'].map((pos) => (
                      <div 
                        key={pos}
                        className={`absolute bg-[#2a7518] border-2 border-[#1a4a0f] shadow-lg flex items-center justify-center
                          ${pos === 'top' ? 'top-[-10px] w-12 h-6 rounded-t-md' : 
                            pos === 'bottom' ? 'bottom-[-10px] w-12 h-6 rounded-b-md' :
                            pos === 'left' ? 'left-[-10px] w-6 h-12 rounded-l-md' :
                            'right-[-10px] w-6 h-12 rounded-r-md'}`}
                      >
                        <div className={`bg-[#82ff00] opacity-60 ${pos === 'top' || pos === 'bottom' ? 'w-8 h-0.5' : 'w-0.5 h-8'}`} />
                      </div>
                    ))}

                      {/* Side cylinder nubs */}
                      <div className="absolute left-[-20px] sm:left-[-35px] top-1/2 -translate-y-1/2 w-10 h-16 bg-[#3a3a3a] rounded-l-xl border-y-2 border-l-2 border-[#222] flex items-center justify-end pr-1">
                        <div className="w-2 h-6 bg-[#82ff00] rounded-full shadow-[0_0_10px_#82ff00]" />
                      </div>
                      <div className="absolute right-[-20px] sm:right-[-35px] top-1/2 -translate-y-1/2 w-10 h-16 bg-[#3a3a3a] rounded-r-xl border-y-2 border-r-2 border-[#222] flex items-center justify-start pl-1">
                        <div className="w-2 h-6 bg-[#82ff00] rounded-full shadow-[0_0_10px_#82ff00]" />
                      </div>

                      {/* Segmented Grey Ring + Face (Rotating together) */}
                      <motion.div 
                        className="absolute w-[82%] h-[82%] rounded-full bg-[#3a3a3a] border-4 border-[#222] flex items-center justify-center overflow-hidden cursor-pointer z-20"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleRotate('right');
                        }}
                        animate={{ rotate: rotation }}
                        transition={{ type: "spring", stiffness: 180, damping: 18 }}
                      >
                      {/* 8-way panel dividers */}
                      {[...Array(4)].map((_, i) => (
                        <div key={i} className="absolute w-full h-px bg-black/30" style={{ transform: `rotate(${i * 45}deg)` }} />
                      ))}
                      
                      {/* Inner Green Accent Ring */}
                      <div className="absolute w-[88%] h-[88%] rounded-full border-4 border-[#2a7518] shadow-inner" />

                      {/* Pure Black Face */}
                      <div 
                        className="relative w-[80%] h-[80%] bg-black rounded-full flex items-center justify-center overflow-hidden"
                        onClick={(e) => {
                          e.stopPropagation();
                          triggerTransformation(currentAlien.id);
                        }}
                      >
                        {/* Hourglass SVG */}
                        <motion.div
                          animate={{ 
                            rotate: isTransforming ? 360 : 0,
                            scale: isTransforming ? 1.1 : 1,
                          }}
                          transition={{ 
                            duration: isTransforming ? 0.8 : 0.3,
                            ease: "easeInOut"
                          }}
                          className="w-full h-full flex items-center justify-center relative"
                        >
                          <svg viewBox="0 0 100 100" className="w-[85%] h-[85%] drop-shadow-[0_0_15px_#82ff00]">
                            <path 
                              d="M10,10 L90,10 L50,50 Z" 
                              fill="#82ff00"
                              className={isTransforming ? 'animate-pulse' : ''}
                            />
                            <path 
                              d="M10,90 L90,90 L50,50 Z" 
                              fill="#82ff00"
                              className={isTransforming ? 'animate-pulse' : ''}
                            />
                          </svg>
                          
                          {/* Glow Flare mid-spin */}
                          <AnimatePresence>
                            {isTransforming && (
                              <motion.div
                                initial={{ opacity: 0, scale: 0 }}
                                animate={{ opacity: [0, 1, 0], scale: [0, 2, 0] }}
                                transition={{ duration: 0.4, delay: 0.4 }}
                                className="absolute inset-0 bg-[#82ff00] rounded-full blur-2xl"
                              />
                            )}
                          </AnimatePresence>
                        </motion.div>
                      </div>
                    </motion.div>
                    
                    {/* Activated Glow States */}
                    <AnimatePresence>
                      {isTransforming && (
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 0.4 }}
                          exit={{ opacity: 0 }}
                          className="absolute inset-0 rounded-full bg-[#82ff00] blur-3xl -z-10"
                        />
                      )}
                    </AnimatePresence>

                    {/* Ring rotate hint — LEFT side, clear of nub */}
                    <div className="absolute left-[-140px] top-1/2 -translate-y-1/2 hidden sm:flex items-center gap-2 pointer-events-none z-30">
                      <motion.div
                        animate={{ opacity: [0.7, 1, 0.7] }}
                        transition={{ duration: 2.5, repeat: Infinity }}
                        className="flex items-center gap-2"
                      >
                        <div className="flex flex-col items-end gap-0.5">
                          <p className="font-orbitron text-[9px] text-[#82ff00] uppercase tracking-widest whitespace-nowrap"
                             style={{ textShadow: "0 0 8px #82ff00" }}>
                            ROTATE RING ↻
                          </p>
                          <p className="font-orbitron text-[8px] text-[#82ff00]/60 uppercase tracking-widest whitespace-nowrap">
                            to switch section
                          </p>
                        </div>
                        <div className="w-10 h-px bg-[#82ff00] opacity-60"/>
                      </motion.div>
                    </div>

                    {/* Centre click hint — sits below the black face */}
                    <div className="absolute bottom-[-52px] left-1/2 -translate-x-1/2 hidden sm:flex flex-col items-center gap-1 pointer-events-none z-30">
                      <motion.div
                        animate={{ opacity: [0.7, 1, 0.7] }}
                        transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                        className="flex flex-col items-center gap-1 mt-3"
                      >
                        <div className="w-px h-5 bg-[#82ff00] opacity-50"/>
                        <p className="font-orbitron text-[9px] text-[#82ff00] uppercase tracking-widest whitespace-nowrap"
                           style={{ textShadow: "0 0 8px #82ff00" }}>
                          ⬡ PRESS CENTRE
                        </p>
                        <p className="font-orbitron text-[8px] text-[#82ff00]/60 uppercase tracking-widest whitespace-nowrap">
                          to enter section
                        </p>
                      </motion.div>
                    </div>
                  </div>
                </motion.div>

                {/* Mobile combined note */}
                <div className="flex sm:hidden flex-col items-center gap-2 mt-4 px-4">
                  <div className="flex items-center gap-3">
                    <p className="font-orbitron text-[9px] text-[#82ff00]/80 uppercase tracking-widest text-center leading-relaxed"
                       style={{ textShadow: "0 0 6px rgba(130,255,0,0.5)" }}>
                      ↻ TAP RING TO ROTATE SECTION
                    </p>
                  </div>
                  <div className="w-24 h-px bg-[#82ff00]/20"/>
                  <p className="font-orbitron text-[9px] text-[#82ff00]/80 uppercase tracking-widest text-center leading-relaxed"
                     style={{ textShadow: "0 0 6px rgba(130,255,0,0.5)" }}>
                    ⬡ TAP CENTRE TO ENTER SECTION
                  </p>
                </div>
              </div>
            </div>

              {/* Right Side: Alien Name, Info & Transform Button */}
              <div className="w-full lg:w-[450px] flex flex-col items-center lg:items-start text-center lg:text-left order-2">
                <motion.div
                  key={currentAlien.id}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="flex flex-col items-center text-center gap-2 mt-4 w-full px-6"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-center lg:justify-start gap-4">
                      <div className="h-px w-12 bg-[#82ff00]/50 hidden lg:block" />
                      <span className="font-orbitron text-[10px] font-bold text-[#82ff00] uppercase tracking-[0.4em]">Portfolio Section</span>
                    </div>
                    <h2 className="font-orbitron text-3xl sm:text-5xl lg:text-7xl font-black tracking-tighter text-[#82ff00] uppercase leading-none drop-shadow-[0_0_10px_rgba(130,255,0,0.3)]">
                      {currentAlien.name}
                    </h2>
                    <p className="text-[#c8e6c8]/60 text-sm sm:text-lg leading-relaxed max-w-sm font-medium mx-auto lg:mx-0">
                      {currentAlien.description}
                    </p>
                  </div>

                  {/* Transform Button */}
                  <div className="pt-2 sm:pt-4 w-full">
                    <div className="relative inline-block group w-full sm:w-auto">
                      <motion.div
                        animate={{ 
                          scale: [1, 1.05, 1],
                          opacity: [0.3, 0.6, 0.3]
                        }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="absolute -inset-4 rounded-full blur-2xl transition-colors duration-500 bg-[#82ff00]/20"
                      />
                      <motion.button
                        whileHover={{ scale: 1.05, x: 5, boxShadow: "0 0 20px #82ff00" }}
                        whileTap={{ scale: 0.95, x: 0 }}
                        onClick={() => triggerTransformation(currentAlien.id)}
                        disabled={isTransforming}
                        className="relative px-8 sm:px-12 py-4 sm:py-5 rounded-xl font-orbitron font-black text-lg sm:text-xl uppercase tracking-[0.2em] transition-all duration-300 ease-in-out border-2 bg-[#82ff00] text-black border-[#82ff00] shadow-[0_0_40px_rgba(130,255,0,0.4)] flex items-center justify-center gap-4 disabled:opacity-50 w-full sm:w-auto"
                      >
                        {isTransforming ? 'Initializing...' : 'Explore Section'}
                        <div className="w-2 h-2 rounded-full animate-pulse bg-black" />
                      </motion.button>
                    </div>
                  </div>

                  {/* Navigation Controls */}
                  <div className="flex flex-col gap-6 pt-8 w-full">
                    <div className="flex justify-center lg:justify-start gap-1">
                      {ALIENS.map((_, i) => (
                        <div 
                          key={i} 
                          className={`h-1 transition-all duration-300 rounded-full ${
                            i === selectedIndex ? 'bg-[#82ff00] w-8' : 'bg-[#1a3a1a] w-4'
                          }`}
                        />
                      ))}
                    </div>
                    
                    <div className="flex items-center justify-center lg:justify-start gap-6 sm:gap-8">
                      <button 
                        onClick={() => handleRotate('left')} 
                        disabled={isTransforming}
                        className="group flex items-center gap-3 text-[#c8e6c8]/40 hover:text-[#82ff00] transition-all duration-300 ease-in-out p-2 -m-2 disabled:opacity-20"
                      >
                        <span className="font-orbitron text-[10px] sm:text-xs font-bold uppercase tracking-widest hover:text-shadow-[0_0_8px_#82ff00]">Prev</span>
                      </button>
                      
                      <div className="w-px h-4 bg-[#1a3a1a]" />

                      <button 
                        onClick={() => handleRotate('right')} 
                        disabled={isTransforming}
                        className="group flex items-center gap-3 text-[#c8e6c8]/40 hover:text-[#82ff00] transition-all duration-300 ease-in-out p-2 -m-2 disabled:opacity-20"
                      >
                        <span className="font-orbitron text-[10px] sm:text-xs font-bold uppercase tracking-widest hover:text-shadow-[0_0_8px_#82ff00]">Next</span>
                      </button>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Transformation Overlay */}
      <AnimatePresence>
        {activeSection && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="fixed inset-0 z-50 bg-[#050a05] overflow-y-auto custom-scrollbar font-rajdhani text-[#c8e6c8]"
          >
            {/* Sci-fi Overlays */}
            <div className="fixed inset-0 grid-overlay pointer-events-none" />
            <div className="fixed inset-0 scanlines pointer-events-none" />

            {/* Content Container */}
            <motion.div
              className="relative z-10 w-full max-w-5xl mx-auto px-4 py-8 sm:px-12 sm:py-16"
            >
              {/* Header */}
              <header className="relative flex flex-col md:flex-row items-center gap-6 sm:gap-8 mb-8 sm:mb-12">
                <div className="relative">
                  <div className="absolute -inset-4 bg-[#82ff00]/20 blur-xl rounded-full" />
                  <div className="relative w-16 h-16 sm:w-24 sm:h-24 rounded-full border-2 border-[#82ff00] flex items-center justify-center bg-[#0d1a0d] shadow-[0_0_20px_rgba(130,255,0,0.3)] p-4 sm:p-6">
                    {SECTION_ICONS[currentAlien.id]}
                  </div>
                </div>
                <div className="flex-1 text-center md:text-left">
                  <h1 className="font-orbitron text-3xl sm:text-5xl lg:text-7xl font-black text-[#82ff00] uppercase tracking-tighter drop-shadow-[0_0_10px_rgba(130,255,0,0.5)]">
                    {currentAlien.name}
                  </h1>
                  <div className="h-1 w-full bg-gradient-to-r from-[#82ff00] to-transparent mt-2 sm:mt-4 opacity-50" />
                </div>

                {/* Back Button */}
                <motion.button
                  whileHover={{ scale: 1.05, x: -5 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleBack}
                  className="fixed top-4 right-4 sm:top-8 sm:right-8 z-[60] px-6 py-3 rounded-full bg-[#0d1a0d]/80 backdrop-blur-md border border-[#82ff00]/30 text-[#82ff00] font-orbitron font-bold uppercase tracking-widest hover:bg-[#82ff00]/10 transition-all duration-300 shadow-[0_0_15px_rgba(130,255,0,0.2)] flex items-center gap-2"
                >
                  <X className="w-4 h-4" />
                  <span className="text-xs">← OMNITRIX</span>
                </motion.button>
              </header>

              {/* Section Content */}
              <div className="space-y-16">
                {/* About Section (Merged) */}
                {currentAlien.id === 'about' && (
                  <div className="space-y-8 sm:space-y-12">
                    <div className="flex flex-col lg:flex-row gap-10 sm:gap-12 items-center lg:items-start">
                      <motion.div 
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="relative shrink-0"
                      >
                        <div className="absolute -inset-6 bg-[#00ff41]/10 blur-3xl rounded-full" />
                        <div className="relative w-40 h-40 sm:w-64 sm:h-64 rounded-xl overflow-hidden"
                          style={{
                            background: "#040c04",
                            border: "2px solid #82ff00",
                            boxShadow: "0 0 0 1px #082008, 0 0 20px rgba(130,255,0,0.4), inset 0 0 30px rgba(0,0,0,0.8)"
                          }}
                        >
                          <div className="absolute top-0 left-0 w-5 h-5 border-t-2 border-l-2 border-[#82ff00] z-20"/>
                          <div className="absolute top-0 right-0 w-5 h-5 border-t-2 border-r-2 border-[#82ff00] z-20"/>
                          <div className="absolute bottom-0 left-0 w-5 h-5 border-b-2 border-l-2 border-[#82ff00] z-20"/>
                          <div className="absolute bottom-0 right-0 w-5 h-5 border-b-2 border-r-2 border-[#82ff00] z-20"/>

                          <motion.div
                            className="absolute inset-x-0 h-8 z-10 pointer-events-none"
                            style={{ background: "linear-gradient(180deg, transparent 0%, rgba(130,255,0,0.08) 40%, rgba(130,255,0,0.15) 50%, rgba(130,255,0,0.08) 60%, transparent 100%)" }}
                            animate={{ top: ["-10%", "110%"] }}
                            transition={{ duration: 3.5, repeat: Infinity, ease: "linear", repeatDelay: 1.5 }}
                          />

                          <div className="absolute inset-0 z-10 pointer-events-none"
                            style={{ background: "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.25) 2px, rgba(0,0,0,0.25) 3px)" }}
                          />
                          <div className="absolute inset-0 z-10 pointer-events-none"
                            style={{ background: "rgba(0,40,0,0.25)", mixBlendMode: "multiply" }}
                          />

                          <div className="absolute bottom-0 inset-x-0 z-20 px-2 py-1"
                            style={{ background: "rgba(0,0,0,0.7)", borderTop: "1px solid rgba(130,255,0,0.3)" }}
                          >
                            <p className="font-orbitron text-[7px] text-[#82ff00] uppercase tracking-widest opacity-70">
                              SUBJECT_ID: JOE_001 ◈ SCAN ACTIVE
                            </p>
                          </div>

                          <img 
                            src={currentAlien.details.profileImage} 
                            alt="Jothibasu" 
                            className="w-full h-full object-cover"
                            style={{ filter: "grayscale(0.4) contrast(1.1) brightness(0.85)" }}
                            referrerPolicy="no-referrer"
                            onError={(e) => {
                              (e.target as HTMLImageElement).src = "https://picsum.photos/seed/jothibasu/600/600";
                            }}
                          />
                        </div>
                      </motion.div>
                      <div className="space-y-6 flex-1 text-center lg:text-left">
                        <div className="inline-block px-4 py-1 rounded-full bg-[#00ff41]/10 border border-[#00ff41]/30 text-[#00ff41] font-orbitron text-[9px] sm:text-xs uppercase tracking-[0.2em]">
                          {currentAlien.details.tagline} • {currentAlien.details.age} Years Old • {currentAlien.details.location}
                        </div>
                        <h3 className="font-orbitron text-2xl sm:text-3xl font-bold text-[#00ff41] tracking-tight">
                          Story of my Journey
                        </h3>
                        <p className="text-base sm:text-xl leading-relaxed text-[#c8e6c8]/90 font-medium italic border-l-4 border-[#00ff41] pl-4 sm:pl-6 py-2 bg-[#00ff41]/5 rounded-r-xl text-left">
                          {currentAlien.details.summary}
                        </p>
                        <div className="space-y-4 text-sm sm:text-lg leading-relaxed text-[#c8e6c8]/80 text-left">
                          {currentAlien.details.fullText.split('\n\n').map((para: string, i: number) => (
                            <motion.p 
                              key={i}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.2 + (i * 0.1) }}
                            >
                              {para}
                            </motion.p>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Education & Experience (Timeline) */}
                {(currentAlien.id === 'education' || currentAlien.id === 'work') && (
                  <div className="relative pl-8 md:pl-12">
                    {/* Vertical Timeline Line */}
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#00ff41] via-[#00cc33] to-transparent rounded-full shadow-[0_0_10px_rgba(0,255,65,0.3)]" />
                    
                    <div className="space-y-12">
                      {currentAlien.details.items.map((item: any, i: number) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, x: 30 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.1 }}
                          className="relative group"
                        >
                          {/* Timeline Dot */}
                          <div className="absolute -left-[36px] md:-left-[52px] top-8 w-4 h-4 rounded-full bg-[#050a05] border-2 border-[#00ff41] shadow-[0_0_15px_rgba(0,255,65,0.5)] z-10 group-hover:scale-150 transition-transform duration-300" />
                          
                          {/* Card */}
                          <div className="bg-[#0d1a0d] border border-[#1a3a1a] border-l-[3px] border-l-[#00ff41] p-5 sm:p-6 lg:p-8 rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.3)] hover:translate-y-[-3px] hover:border-l-[#00ff41] hover:shadow-[0_0_15px_rgba(0,255,65,0.1)] transition-all duration-300 ease-in-out">
                            <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 sm:gap-4 mb-4">
                              <div className="min-w-0">
                                <h3 className="font-orbitron text-base sm:text-xl font-bold text-[#00ff41] tracking-wider uppercase break-words">
                                  {item.title || item.school}
                                </h3>
                                <p className="text-[#00cc33] font-orbitron text-[10px] sm:text-sm font-semibold uppercase tracking-widest mt-1 break-words">
                                  {item.company || item.degree} {item.field ? `• ${item.field}` : ''}
                                </p>
                              </div>
                              <div className="md:text-right shrink-0">
                                <span className="inline-block px-3 py-1 rounded bg-[#00ff41]/5 border border-[#00ff41]/20 text-[#00cc33] text-[9px] sm:text-xs font-orbitron font-bold tracking-widest">
                                  {item.duration}
                                </span>
                              </div>
                            </div>

                            {item.bullets && (
                              <ul className="space-y-2 mb-6">
                                {item.bullets.map((bullet: string, idx: number) => (
                                  <li key={idx} className="flex items-start gap-3 text-[#c8e6c8]/80 leading-relaxed">
                                    <span className="text-[#00ff41] mt-1 shrink-0">{bullet.startsWith('›') ? '' : '›'}</span>
                                    <span>{bullet}</span>
                                  </li>
                                ))}
                              </ul>
                            )}

                            {item.website && (
                              <a 
                                href={`https://${item.website}`} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#00ff41]/30 text-[#00ff41] font-orbitron text-[10px] font-bold uppercase tracking-widest hover:bg-[#00ff41]/10 hover:border-[#00ff41] hover:shadow-[0_0_10px_#00ff4166] transition-all duration-300 ease-in-out"
                              >
                                ↗ {item.website}
                              </a>
                            )}
                          </div>
                        </motion.div>
                      ))}
                    </div>

                    {/* Additional Info for Education */}
                    {currentAlien.id === 'education' && (
                      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
                        <motion.div 
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="bg-[#0d1a0d] border border-[#1a3a1a] p-6 rounded-xl"
                        >
                          <h4 className="font-orbitron text-[#00ff41] text-sm font-bold uppercase tracking-widest mb-4 flex items-center gap-3">
                            <Shield className="w-4 h-4" /> Certifications
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {currentAlien.details.certs.map((cert: string) => (
                              <span key={cert} className="px-3 py-1 bg-[#00ff41]/5 border border-[#00ff41]/20 rounded text-xs font-orbitron text-[#c8e6c8]/70 uppercase tracking-tighter">
                                {cert}
                              </span>
                            ))}
                          </div>
                        </motion.div>
                        <motion.div 
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="bg-[#0d1a0d] border border-[#1a3a1a] p-6 rounded-xl"
                        >
                          <h4 className="font-orbitron text-[#00ff41] text-sm font-bold uppercase tracking-widest mb-4 flex items-center gap-3">
                            <Activity className="w-4 h-4" /> Publication
                          </h4>
                          <p className="text-[#c8e6c8]/60 italic text-sm leading-relaxed">
                            {currentAlien.details.pub}
                          </p>
                        </motion.div>
                      </div>
                    )}
                  </div>
                )}

                {/* Skills Section */}
                {currentAlien.id === 'skills' && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                    {currentAlien.details.categories.map((cat: any, i: number) => (
                      <motion.div 
                        key={cat.name}
                        initial={{ opacity: 0, y: 20 }} 
                        animate={{ opacity: 1, y: 0 }} 
                        transition={{ delay: i * 0.1 }}
                        className="bg-[#0d1a0d] border border-[#1a3a1a] p-6 sm:p-8 rounded-2xl shadow-xl"
                      >
                        <h4 className="font-orbitron text-[#00ff41] text-xs sm:text-sm font-bold uppercase tracking-widest mb-4 sm:mb-6 border-b border-[#1a3a1a] pb-4">
                          {cat.name}
                        </h4>
                        <div className="flex flex-wrap gap-2 sm:gap-3">
                          {cat.list.map((skill: string) => (
                            <span 
                              key={skill} 
                              className="px-3 py-1.5 sm:px-4 sm:py-2 bg-[#00cc33]/5 border border-[#00ff41]/20 rounded-lg font-orbitron text-[9px] sm:text-[10px] text-[#00ff41] uppercase tracking-widest hover:bg-[#00ff41]/10 hover:border-[#00ff41] hover:scale-105 hover:shadow-[0_0_20px_#00ff41] transition-all duration-300 ease-in-out cursor-default"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                )}

                {/* Achievements Section */}
                {currentAlien.id === 'achievements' && (
                  <div className="space-y-12 sm:space-y-16">
                    {/* Stats Row */}
                    <div className="flex flex-col sm:flex-row justify-center items-stretch gap-4 sm:gap-6 max-w-4xl mx-auto">
                      {currentAlien.details.stats.map((stat: any, i: number) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: i * 0.1 }}
                          className="flex-1 bg-[#0d1a0d] border border-[#1a3a1a] p-6 sm:p-8 rounded-2xl text-center group hover:border-[#00ff41] hover:shadow-[0_0_20px_rgba(0,255,65,0.1)] transition-all duration-300"
                        >
                          <p className="font-orbitron text-2xl sm:text-4xl font-black text-[#00ff41] mb-1 sm:mb-2">{stat.value}</p>
                          <p className="font-orbitron text-[9px] sm:text-xs text-[#00cc33] uppercase tracking-widest font-bold">{stat.label}</p>
                        </motion.div>
                      ))}
                    </div>

                    {/* Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-stretch">
                      {currentAlien.details.cards.map((card: any, i: number) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, y: 30 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.3 + (i * 0.1) }}
                          className="bg-[#0d1a0d] border border-[#1a3a1a] border-l-[4px] border-l-[#00ff41] p-6 sm:p-10 rounded-2xl flex flex-col h-full group hover:translate-y-[-5px] hover:shadow-[0_0_30px_rgba(0,255,65,0.15)] transition-all duration-300"
                        >
                          <div className="mb-6 sm:mb-8">
                            <h3 className="font-orbitron text-xl sm:text-3xl font-black text-[#00ff41] uppercase tracking-tight mb-2">
                              {card.title}
                            </h3>
                            <p className="text-[#00cc33] font-orbitron text-[10px] sm:text-sm font-semibold uppercase tracking-widest opacity-60">
                              {card.subtitle}
                            </p>
                          </div>
                          
                          <p className="text-[#c8e6c8]/80 text-sm sm:text-lg leading-relaxed mb-6 sm:mb-8 flex-grow">
                            {card.description}
                          </p>

                          <div className="flex flex-wrap gap-2 mb-8 sm:mb-10">
                            {card.tags.map((tag: string) => (
                              <span key={tag} className="px-2 py-1 rounded-full bg-[#00ff41]/5 border border-[#00ff41]/20 text-[#00ff41] text-[9px] font-orbitron font-bold tracking-widest">
                                {tag}
                              </span>
                            ))}
                          </div>

                          <motion.a
                            href={card.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.05, x: 5 }}
                            whileTap={{ scale: 0.95 }}
                            className="inline-flex items-center justify-center gap-2 text-[#00ff41] font-orbitron text-[10px] sm:text-xs font-bold uppercase tracking-widest transition-colors bg-[#00ff41]/10 px-4 py-2 sm:px-6 sm:py-3 rounded-xl border border-[#00ff41]/20 hover:bg-[#00ff41] hover:text-black w-full sm:w-auto self-start"
                          >
                            View Project ↗
                          </motion.a>
                        </motion.div>
                      ))}
                    </div>

                    {/* Summary Text (Intro) */}
                    <motion.div 
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 }}
                      className="max-w-[700px] mx-auto text-center"
                    >
                      <p className="text-[#c8e6c8]/80 text-sm sm:text-lg leading-relaxed italic border-l-4 border-[#00ff41] pl-4 sm:pl-6 py-4 sm:py-6 bg-[#00ff41]/5 rounded-r-2xl whitespace-pre-line text-left sm:text-center">
                        {currentAlien.details.intro}
                      </p>
                    </motion.div>
                  </div>
                )}

                {/* Volunteer Section */}
                {currentAlien.id === 'volunteer' && (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                    {currentAlien.details.items.map((item: any, i: number) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.05 }}
                        className="bg-[#0d1a0d] border border-[#1a3a1a] border-l-[3px] border-l-[#00ff41] p-4 sm:p-6 rounded-xl hover:translate-y-[-3px] hover:scale-1.03 hover:border-[#00ff41] hover:shadow-[0_0_20px_rgba(0,255,65,0.1)] transition-all duration-300 ease-in-out"
                      >
                        <h4 className="font-orbitron text-[#00ff41] text-base sm:text-lg font-bold tracking-wider mb-2">
                          {item.role}
                        </h4>
                        <p className="text-[#00cc33] font-orbitron text-[9px] sm:text-[10px] font-semibold uppercase tracking-widest mb-3 sm:mb-4">
                          {item.org}
                        </p>
                        <p className="text-[#c8e6c8]/40 font-orbitron text-[8px] sm:text-[9px] uppercase tracking-[0.2em]">
                          {item.duration}
                        </p>
                        {item.category && (
                          <p className="mt-2 text-[#00ff41]/60 font-orbitron text-[7px] sm:text-[8px] uppercase tracking-widest">
                            {item.category}
                          </p>
                        )}
                      </motion.div>
                    ))}
                  </div>
                )}

                {/* Interests Section (Special Mobile Layout) */}
                {currentAlien.id === 'interests' && (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {currentAlien.details.items.map((item: any, i: number) => {
                      const parts = item.content.split('\n\n');
                      const hasHint = parts.length > 1 && parts[parts.length - 1].startsWith('(');
                      const mainContent = hasHint ? parts.slice(0, -1).join('\n\n') : item.content;
                      const hintText = hasHint ? parts[parts.length - 1] : null;
                      
                      return (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: i * 0.05 }}
                          className="flex flex-col bg-[#0d1a0d] border border-[#1a3a1a] border-l-[3px] border-l-[#00ff41] p-4 sm:p-6 rounded-xl hover:translate-y-[-3px] hover:border-[#00ff41] hover:shadow-[0_0_20px_rgba(0,255,65,0.1)] transition-all duration-300 ease-in-out h-full w-full"
                        >
                          <h4 className="font-orbitron text-[#00ff41] text-lg font-bold tracking-wider mb-4 flex items-center gap-2">
                            {item.title}
                          </h4>
                          <div className="flex-grow text-[#c8e6c8]/80 text-sm leading-relaxed whitespace-pre-line mb-4">
                            {mainContent}
                          </div>
                          {hintText && (
                            <p className="text-[#00ff41]/60 text-xs italic leading-relaxed mt-auto border-t border-[#1a3a1a] pt-3">
                              {hintText}
                            </p>
                          )}
                        </motion.div>
                      );
                    })}
                  </div>
                )}

                {/* Contact Section */}
                {currentAlien.id === 'contact' && (
                  <div className="space-y-8 sm:space-y-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                      <motion.a 
                        href={`mailto:${currentAlien.details.email}`}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="bg-[#0d1a0d] border border-[#1a3a1a] p-5 sm:p-8 rounded-2xl flex items-center gap-4 sm:gap-6 group hover:border-[#00ff41] hover:translate-y-[-3px] hover:shadow-[0_0_20px_rgba(0,255,65,0.2)] transition-all duration-300 ease-in-out"
                      >
                        <div className="p-3 sm:p-4 rounded-xl bg-[#00ff41]/10 text-[#00ff41] group-hover:scale-110 transition-transform">
                          <Mail className="w-5 h-5 sm:w-8 sm:h-8" />
                        </div>
                        <div className="min-w-0">
                          <p className="font-orbitron text-[8px] sm:text-[10px] text-[#00cc33] uppercase tracking-widest mb-1">Email Me</p>
                          <p className="text-[#c8e6c8] font-bold text-xs sm:text-base truncate">{currentAlien.details.email}</p>
                        </div>
                      </motion.a>

                      <motion.a 
                        href={`tel:${currentAlien.details.phone.replace(/\s/g, '')}`}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="bg-[#0d1a0d] border border-[#1a3a1a] p-5 sm:p-8 rounded-2xl flex items-center gap-4 sm:gap-6 group hover:border-[#00ff41] hover:translate-y-[-3px] hover:shadow-[0_0_20px_rgba(0,255,65,0.2)] transition-all duration-300 ease-in-out"
                      >
                        <div className="p-3 sm:p-4 rounded-xl bg-[#00ff41]/10 text-[#00ff41] group-hover:scale-110 transition-transform">
                          <Phone className="w-5 h-5 sm:w-8 sm:h-8" />
                        </div>
                        <div className="min-w-0">
                          <p className="font-orbitron text-[8px] sm:text-[10px] text-[#00cc33] uppercase tracking-widest mb-1">Call Me</p>
                          <p className="text-[#c8e6c8] font-bold text-xs sm:text-base">{currentAlien.details.phone}</p>
                        </div>
                      </motion.a>

                      {currentAlien.details.links.map((link: any, i: number) => (
                        <motion.a 
                          key={link.name}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.2 + (i * 0.1) }}
                          className="bg-[#0d1a0d] border border-[#1a3a1a] p-5 sm:p-8 rounded-2xl flex items-center gap-4 sm:gap-6 group hover:border-[#00ff41] hover:translate-y-[-3px] hover:shadow-[0_0_20px_rgba(0,255,65,0.2)] transition-all duration-300 ease-in-out"
                        >
                          <div className="p-3 sm:p-4 rounded-xl bg-[#00ff41]/10 text-[#00ff41] group-hover:scale-110 transition-transform">
                            {link.name === 'LinkedIn' ? <Linkedin className="w-5 h-5 sm:w-8 sm:h-8" /> : link.name === 'Instagram' ? <Instagram className="w-5 h-5 sm:w-8 sm:h-8" /> : <Activity className="w-5 h-5 sm:w-8 sm:h-8" />}
                          </div>
                          <div className="min-w-0">
                            <p className="font-orbitron text-[8px] sm:text-[10px] text-[#00cc33] uppercase tracking-widest mb-1">{link.name}</p>
                            <p className="text-[#c8e6c8] font-bold text-xs sm:text-base truncate">{link.handle || 'Connect ↗'}</p>
                          </div>
                        </motion.a>
                      ))}
                    </div>

                    {/* Summary Card */}
                      <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="bg-[#0d1a0d] border border-[#00ff41]/30 p-6 sm:p-10 rounded-3xl text-center space-y-4 sm:space-y-6 shadow-[0_0_50px_rgba(0,255,65,0.1)]"
                      >
                        <h4 className="font-orbitron text-[#00ff41] text-lg sm:text-2xl font-black uppercase tracking-tighter">Availability Status</h4>
                        <p className="text-[#c8e6c8]/80 text-sm sm:text-lg max-w-2xl mx-auto leading-relaxed">
                          {currentAlien.details.availability.split(/(\*\*.*?\*\*|Alternance starting September 2026|Open to relocate|France|European)/).map((part: string, i: number) => {
                            const highlights = ["Alternance starting September 2026", "Open to relocate", "France", "European"];
                            if (highlights.includes(part)) {
                              return <span key={i} className="text-[#00ff41] font-bold">{part}</span>;
                            }
                            return part;
                          })}
                        </p>
                        <div className="flex justify-center gap-4">
                        <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#00ff41]/10 border border-[#00ff41]/20">
                          <div className="w-2 h-2 rounded-full bg-[#00ff41] animate-pulse" />
                          <span className="font-orbitron text-[8px] sm:text-[10px] text-[#00ff41] uppercase tracking-widest">Active Search</span>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                )}
              </div>

              {/* Footer Return Button */}
              <div className="mt-24 flex justify-center">
                <motion.button 
                  onClick={handleBack}
                  whileHover={{ scale: 1.05, letterSpacing: "0.4em" }}
                  className="font-orbitron text-[#82ff00] hover:text-[#82ff00] uppercase tracking-[0.3em] text-sm font-bold transition-all duration-300 border-b border-[#82ff00]/30 pb-2"
                >
                  Return to Omnitrix Dial
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
