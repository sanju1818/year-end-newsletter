
import React from 'react';
import { motion } from 'framer-motion';

interface WaveLineProps {
  isActive: boolean;
  color?: string;
}

const WaveLine: React.FC<WaveLineProps> = ({ isActive, color = "#818cf8" }) => {
  return (
    <div className="w-full h-32 relative mt-8 opacity-40">
      <svg viewBox="0 0 1000 100" preserveAspectRatio="none" className="w-full h-full">
        <motion.path
          d="M0,50 C150,20 350,80 500,50 C650,20 850,80 1000,50"
          fill="none"
          stroke={color}
          strokeWidth="3"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={isActive ? { pathLength: 1, opacity: 1 } : {}}
          transition={{ duration: 2, ease: "easeInOut" }}
        />
        <motion.path
          d="M0,50 C150,20 350,80 500,50 C650,20 850,80 1000,50 L1000,100 L0,100 Z"
          initial={{ opacity: 0 }}
          animate={isActive ? { opacity: 0.1 } : {}}
          transition={{ duration: 2, delay: 0.5 }}
          fill={`url(#gradient-${color.replace('#','')})`}
        />
        <defs>
          <linearGradient id={`gradient-${color.replace('#','')}`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={color} />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>
        </defs>
      </svg>
      {/* Animated Glow Point */}
      <motion.div
        className="absolute top-1/2 left-0 w-2 h-2 rounded-full blur-[4px]"
        style={{ backgroundColor: color }}
        animate={isActive ? {
          left: ["0%", "100%"],
          top: ["50%", "20%", "80%", "50%", "20%", "80%", "50%"],
          opacity: [0, 1, 1, 1, 1, 1, 0]
        } : {}}
        transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
      />
    </div>
  );
};

export default WaveLine;
