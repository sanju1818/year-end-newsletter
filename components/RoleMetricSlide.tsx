
import React from 'react';
import { motion } from 'framer-motion';

interface RoleMetricSlideProps {
  roleLabel: string;
  heading: string;
  isActive: boolean;
  roleColorClass: string;
  children: React.ReactNode;
  styleNote?: string;
}

const RoleMetricSlide: React.FC<RoleMetricSlideProps> = ({ 
  roleLabel, 
  heading, 
  isActive, 
  roleColorClass,
  children,
  styleNote
}) => {
  const words = heading.split(' ');
  const lastWord = words.pop();
  const firstPart = words.join(' ');

  const colorMap: {[key: string]: string} = {
    'text-blue-500': 'rgba(59, 130, 246, 0.15)',
    'text-indigo-500': 'rgba(99, 102, 241, 0.15)',
    'text-purple-500': 'rgba(168, 85, 247, 0.15)',
    'text-emerald-500': 'rgba(16, 185, 129, 0.15)',
  };
  const glowColor = colorMap[roleColorClass] || 'rgba(255, 255, 255, 0.1)';

  return (
    <div className="w-full h-full flex flex-col pt-24 pb-12 px-8 md:px-24 max-w-[90rem] mx-auto relative">
      <motion.div 
        animate={{ 
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.5, 0.3],
          x: [-20, 20, -20],
          y: [-20, 20, -20]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 left-0 w-[600px] h-[600px] blur-[150px] rounded-full -z-10 pointer-events-none"
        style={{ backgroundColor: glowColor }}
      />

      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={isActive ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.2 }}
        className="mb-12 flex justify-between items-end"
      >
        <span className={`text-[10px] md:text-xs font-black uppercase tracking-[0.5em] block ${roleColorClass}`}>
          {roleLabel}
        </span>
        {styleNote && (
          <span className="text-[9px] font-bold text-white/20 uppercase tracking-widest hidden md:block italic">
            // {styleNote}
          </span>
        )}
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, x: -30 }}
        animate={isActive ? { opacity: 1, x: 0 } : {}}
        transition={{ delay: 0.4, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="text-5xl md:text-[5.5rem] lg:text-[6.5rem] font-black leading-[1.05] tracking-tighter mb-16 w-full max-w-[85rem]"
      >
        <span className="text-white opacity-90">{firstPart} </span>
        <span className={`${roleColorClass} opacity-100 block whitespace-nowrap`}>
          {lastWord}
        </span>
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isActive ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.8, duration: 1, ease: "easeOut" }}
        className="flex flex-col md:flex-row gap-12 md:gap-24 items-start"
      >
        {children}
      </motion.div>
    </div>
  );
};

export default RoleMetricSlide;
