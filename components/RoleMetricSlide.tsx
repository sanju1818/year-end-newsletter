
import React from 'react';
import { motion } from 'framer-motion';

interface RoleMetricSlideProps {
  roleLabel: string;
  heading: React.ReactNode;
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
  const colorMap: {[key: string]: string} = {
    'text-blue-500': 'rgba(59, 130, 246, 0.1)',
    'text-indigo-500': 'rgba(99, 102, 241, 0.1)',
    'text-purple-500': 'rgba(168, 85, 247, 0.1)',
    'text-emerald-500': 'rgba(16, 185, 129, 0.1)',
    'text-indigo-400': 'rgba(129, 140, 248, 0.1)',
  };
  const glowColor = colorMap[roleColorClass] || 'rgba(255, 255, 255, 0.05)';

  return (
    <div className="w-full h-full flex flex-col pt-24 pb-12 px-8 lg:px-24 max-w-[100rem] mx-auto relative overflow-hidden">
      {/* Background Ambient Glow */}
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 right-0 w-[800px] h-[800px] blur-[180px] rounded-full -z-10 pointer-events-none"
        style={{ backgroundColor: glowColor }}
      />

      {/* Header Info */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={isActive ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.2 }}
        className="mb-6 flex justify-between items-center"
      >
        <span className={`text-[10px] md:text-xs font-black uppercase tracking-[0.5em] block ${roleColorClass}`}>
          {roleLabel}
        </span>
        {styleNote && (
          <span className="text-[10px] font-black text-white/20 uppercase tracking-[0.3em] italic hidden md:block">
            // {styleNote}
          </span>
        )}
      </motion.div>

      {/* Narrative Heading */}
      <motion.h2
        initial={{ opacity: 0, x: -30 }}
        animate={isActive ? { opacity: 1, x: 0 } : {}}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="text-4xl md:text-7xl lg:text-[5.5rem] font-[950] leading-[1] tracking-tighter mb-12 w-full max-w-[80rem] text-white"
      >
        {heading}
      </motion.h2>

      {/* Dynamic Content - Flexible Container for Split View */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isActive ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.7, duration: 1 }}
        className="flex-1 flex"
      >
        {children}
      </motion.div>
    </div>
  );
};

export default RoleMetricSlide;
