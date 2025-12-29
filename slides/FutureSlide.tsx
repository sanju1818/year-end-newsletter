
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, RotateCcw } from 'lucide-react';
import { SlideProps } from '../types';
import confetti from 'canvas-confetti';

const FutureSlide: React.FC<SlideProps> = ({ isActive, onRestart }) => {
  useEffect(() => {
    if (isActive) {
      const timer = setTimeout(() => {
        confetti({
          particleCount: 150,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#3b82f6', '#6366f1', '#a855f7', '#10b981']
        });
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [isActive]);

  return (
    <div className="flex flex-col items-center justify-center text-center w-full h-full py-12 relative overflow-hidden">
      <div className="space-y-6 mb-24">
        <motion.div
          initial={{ opacity: 0 }}
          animate={isActive ? { opacity: 1 } : {}}
          transition={{ duration: 1 }}
          className="text-blue-500 text-[10px] font-black uppercase tracking-[0.5em] mb-4 block"
        >
          Collective Momentum Summary
        </motion.div>
        
        <div className="flex flex-col items-center gap-4">
           <motion.h3
            className="text-6xl md:text-9xl font-[950] tracking-tighter"
            initial={{ opacity: 0, y: 40 }}
            animate={isActive ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 1 }}
          >
            Ready for <span className="text-blue-500">arson</span>
          </motion.h3>
          <motion.h3
            className="text-6xl md:text-9xl font-[950] tracking-tighter"
            initial={{ opacity: 0, y: 40 }}
            animate={isActive ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6, duration: 1 }}
          >
            in 2026.
          </motion.h3>
        </div>
      </div>

      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={isActive ? { scale: 1, opacity: 1 } : {}}
        transition={{ delay: 1.2, duration: 1.5, type: "spring" }}
        className="relative group"
      >
        <div className="absolute -inset-[1px] bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 rounded-full opacity-50 group-hover:opacity-100 transition-opacity duration-500 blur-[1px]" />
        
        <button className="relative flex items-center gap-6 bg-black px-12 py-6 rounded-full text-2xl font-black border border-white/10 transition-all active:scale-95 hover:border-transparent group-hover:bg-zinc-900">
          <span>Commit digital arson on 2026</span>
          <ArrowRight className="w-8 h-8 group-hover:translate-x-2 transition-transform duration-500" />
        </button>
      </motion.div>

      <div className="absolute bottom-12 flex flex-col items-center gap-6">
        <motion.button
          onClick={onRestart}
          className="flex items-center gap-3 text-white/30 hover:text-white transition-all duration-500 text-xs font-black uppercase tracking-[0.3em]"
          initial={{ opacity: 0 }}
          animate={isActive ? { opacity: 1 } : {}}
          transition={{ delay: 2.2 }}
        >
          <RotateCcw className="w-4 h-4" />
          Relive the Flex
        </motion.button>

        <div className="text-[10px] uppercase tracking-[0.4em] font-black text-white/10 text-center leading-relaxed">
          Created for ITW Universe <br />
          © All Rights Reserved | Copyright 2025
        </div>
      </div>
    </div>
  );
};

export default FutureSlide;
