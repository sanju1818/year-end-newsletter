
import React from 'react';
import { motion } from 'framer-motion';

interface DotGridProps {
  isActive: boolean;
  count?: number; // percentage of active dots
}

const DotGrid: React.FC<DotGridProps> = ({ isActive, count = 83 }) => {
  const rows = 6;
  const cols = 15;
  const dots = Array.from({ length: rows * cols });

  return (
    <div className="glass p-6 rounded-3xl bg-black/40 border-white/10 overflow-hidden relative">
      <div className="grid grid-cols-[repeat(15,minmax(0,1fr))] gap-2">
        {dots.map((_, i) => {
          const isActiveDot = i < (rows * cols * (count / 100));
          // Create a more varied, organic feel for the active dots
          const randomDelay = (i % 7) * 0.2;
          
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0.1, scale: 0.8 }}
              animate={isActive ? { 
                opacity: isActiveDot ? [0.2, 0.8, 0.2] : 0.05,
                scale: isActiveDot ? [1, 1.2, 1] : 1,
                backgroundColor: isActiveDot ? '#ec4899' : '#1f2937'
              } : {}}
              transition={{ 
                delay: isActive ? ((i % cols) * 0.05 + Math.floor(i / cols) * 0.1 + (isActiveDot ? randomDelay : 0)) : 0,
                duration: isActiveDot ? 2.5 : 0.5,
                repeat: isActiveDot ? Infinity : 0,
                repeatType: "reverse",
                ease: "easeInOut"
              }}
              className="w-3 h-3 rounded-[3px] shadow-[0_0_8px_rgba(236,72,153,0)]"
              style={{
                boxShadow: isActiveDot && isActive ? '0 0 12px rgba(236,72,153,0.4)' : 'none'
              }}
            />
          );
        })}
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
    </div>
  );
};

export default DotGrid;
