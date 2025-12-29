
import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { SlideProps } from '../types';

const IntroSlide: React.FC<SlideProps> = ({ isActive }) => {
  return (
    <div className="flex flex-col items-center justify-center text-center w-full h-full relative overflow-hidden px-4">
      {/* Background Ambient Glow */}
      <motion.div 
        animate={{ 
          scale: [1, 1.1, 1],
          opacity: [0.15, 0.25, 0.15]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute w-[1000px] h-[1000px] bg-blue-600/10 blur-[150px] rounded-full -z-10"
      />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isActive ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="flex flex-col items-center w-full"
      >
        {/* Official ITW Universe Logo - Centered above the heading */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={isActive ? { opacity: 1, scale: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 1, type: "spring", stiffness: 100 }}
          className="mb-6 relative"
        >
          <img 
            src="itw-logo.png" 
            alt="ITW Universe" 
            className="h-28 md:h-40 w-auto object-contain drop-shadow-[0_10px_40px_rgba(59,130,246,0.4)]"
            onError={(e) => {
               e.currentTarget.style.display = 'none';
            }}
          />
          {/* Subtle glow behind the logo */}
          <div className="absolute inset-0 bg-blue-500/20 blur-3xl -z-10 rounded-full scale-90" />
        </motion.div>

        {/* Hero Typography Section */}
        <div className="flex flex-col items-center leading-none gap-2 md:gap-4">
          <motion.h1 
            className="text-[4rem] md:text-[7rem] lg:text-[9rem] font-black tracking-tighter text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={isActive ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
          >
            ITW Universe
          </motion.h1>

          <motion.div
            className="text-[4rem] md:text-[7rem] lg:text-[9rem] font-black tracking-tighter whitespace-nowrap"
            initial={{ opacity: 0, y: 20 }}
            animate={isActive ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#a5b4fc] via-[#22d3ee] to-[#a5b4fc] drop-shadow-[0_0_40px_rgba(34,211,238,0.25)]">
              CRM Recap 2025
            </span>
          </motion.div>
        </div>

        {/* Supporting Tagline */}
        <motion.p 
          className="mt-12 text-base md:text-xl text-white/30 font-bold tracking-[0.2em] uppercase max-w-2xl leading-relaxed"
          initial={{ opacity: 0 }}
          animate={isActive ? { opacity: 1 } : {}}
          transition={{ delay: 1.2, duration: 1 }}
        >
          The system evolved. The pack grew. <br/>
          <span className="text-blue-400/50">One ecosystem. Total market dominance.</span>
        </motion.p>
      </motion.div>

      {/* Navigation Indicator */}
      <motion.div
        className="absolute bottom-12 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={isActive ? { opacity: 1 } : {}}
        transition={{ delay: 2, duration: 1 }}
      >
        <span className="text-[9px] uppercase tracking-[0.5em] text-white/20 font-black mb-2">Witness the Momentum</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-5 h-5 text-blue-500/50" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default IntroSlide;
