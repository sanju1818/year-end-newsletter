
import React from 'react';
import { motion } from 'framer-motion';

interface PremiumWaveLineProps {
  isActive: boolean;
  color?: string;
}

const PremiumWaveLine: React.FC<PremiumWaveLineProps> = ({ isActive, color = "#3b82f6" }) => {
  const points = [
    { x: 0, y: 80 },
    { x: 200, y: 40 },
    { x: 400, y: 60 },
    { x: 600, y: 30 },
    { x: 800, y: 70 },
    { x: 1000, y: 10 }
  ];

  const curvedPath = `M0,80 C100,80 100,40 200,40 C300,40 300,60 400,60 C500,60 500,30 600,30 C700,30 700,70 800,70 C900,70 900,10 1000,10`;

  return (
    <div className="w-full h-48 relative overflow-visible">
      <svg viewBox="0 0 1000 100" preserveAspectRatio="none" className="w-full h-full overflow-visible">
        <defs>
          <linearGradient id="waveGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={color} stopOpacity="0.4" />
            <stop offset="100%" stopColor={color} stopOpacity="0" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        
        {/* Fill Area */}
        <motion.path
          d={`${curvedPath} L1000,100 L0,100 Z`}
          fill="url(#waveGradient)"
          initial={{ opacity: 0 }}
          animate={isActive ? { opacity: 1 } : {}}
          transition={{ duration: 1.5, delay: 0.5 }}
        />

        {/* The Wave Line */}
        <motion.path
          d={curvedPath}
          fill="none"
          stroke={color}
          strokeWidth="3"
          filter="url(#glow)"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={isActive ? { pathLength: 1, opacity: 1 } : {}}
          transition={{ duration: 2, ease: "easeInOut" }}
        />

        {/* Intersection Dots */}
        {[200, 400, 600, 800].map((x, i) => {
          const y = x === 200 ? 40 : x === 400 ? 60 : x === 600 ? 30 : 70;
          return (
            <React.Fragment key={i}>
              <motion.line
                x1={x} y1={y} x2={x} y2="100"
                stroke="white"
                strokeWidth="1"
                strokeOpacity="0.1"
                initial={{ scaleY: 0 }}
                animate={isActive ? { scaleY: 1 } : {}}
                className="origin-bottom"
              />
              <g>
                <motion.circle
                  cx={x} cy={y} r="8"
                  fill={color}
                  initial={{ opacity: 0 }}
                  animate={isActive ? { opacity: [0, 0.4, 0], scale: [0.8, 2, 0.8] } : {}}
                  transition={{ 
                    duration: 3, 
                    repeat: Infinity, 
                    delay: 1 + i * 0.2,
                    ease: "easeInOut"
                  }}
                  className="pointer-events-none"
                />
                <motion.circle
                  cx={x} cy={y} r="4"
                  fill="white"
                  initial={{ scale: 0 }}
                  animate={isActive ? { scale: 1 } : {}}
                  transition={{ delay: 1 + i * 0.2, type: "spring" }}
                  className="drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]"
                />
              </g>
            </React.Fragment>
          );
        })}
      </svg>
    </div>
  );
};

export default PremiumWaveLine;
