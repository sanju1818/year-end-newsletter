
import React from 'react';
import { motion } from 'framer-motion';

interface GlowCircleProps {
  progress: number;
  isActive: boolean;
  label: string;
  subLabel?: string;
}

const GlowCircle: React.FC<GlowCircleProps> = ({ progress, isActive, label, subLabel }) => {
  const radius = 90;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (progress / 100) * circumference;

  return (
    <div className="relative flex items-center justify-center w-64 h-64 md:w-80 md:h-80">
      <svg className="w-full h-full -rotate-90 drop-shadow-[0_0_15px_rgba(16,185,129,0.3)]">
        {/* Track */}
        <circle
          cx="50%" cy="50%" r={radius}
          className="fill-none stroke-white/5 stroke-[12px]"
        />
        {/* Progress */}
        <motion.circle
          cx="50%" cy="50%" r={radius}
          className="fill-none stroke-emerald-500 stroke-[12px] stroke-round"
          strokeDasharray={circumference}
          initial={{ strokeDashoffset: circumference }}
          animate={isActive ? { strokeDashoffset: offset } : {}}
          transition={{ duration: 2, ease: [0.22, 1, 0.36, 1], delay: 0.5 }}
        />
      </svg>
      
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
        <motion.span 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isActive ? { opacity: 1, scale: 1 } : {}}
          className="text-6xl md:text-7xl font-black text-white"
        >
          {progress}%
        </motion.span>
        {subLabel && (
          <motion.span 
            initial={{ opacity: 0 }}
            animate={isActive ? { opacity: 1 } : {}}
            transition={{ delay: 0.8 }}
            className="text-xs uppercase tracking-[0.3em] text-white/40 font-bold mt-1"
          >
            {subLabel}
          </motion.span>
        )}
      </div>
    </div>
  );
};

export default GlowCircle;
