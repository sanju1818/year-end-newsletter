
import React from 'react';
import { motion } from 'framer-motion';

const Background: React.FC = () => {
  return (
    <div className="fixed inset-0 -z-10 bg-[#00050a] overflow-hidden">
      {/* Primary Blue Grainy Gradient Layer */}
      <motion.div 
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.15, 0.25, 0.15],
          rotate: [0, 5, 0],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(56,189,248,0.2)_0%,transparent_60%)]"
      />

      <motion.div 
        animate={{
          scale: [1.1, 1, 1.1],
          opacity: [0.1, 0.2, 0.1],
          rotate: [0, -5, 0],
        }}
        transition={{
          duration: 40,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(14,165,233,0.15)_0%,transparent_70%)]"
      />

      {/* Textured Grain Overlay - Increased opacity and better blending for "Grainy" look */}
      <div 
        className="absolute inset-0 pointer-events-none mix-blend-soft-light opacity-[0.4]"
        style={{
          backgroundImage: `url("https://grainy-gradients.vercel.app/noise.svg")`,
          filter: 'contrast(150%) brightness(100%)',
        }}
      />

      {/* Deep Shadow Vignette for focus */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.8)_100%)] pointer-events-none" />

      {/* Ultra-subtle Premium Grid */}
      <div 
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
          maskImage: 'radial-gradient(circle at center, black, transparent 80%)',
          WebkitMaskImage: 'radial-gradient(circle at center, black, transparent 80%)',
        }}
      />
      
      {/* Floating Light Specks for extra depth */}
      <motion.div 
        animate={{
          y: [-20, 20, -20],
          opacity: [0.2, 0.5, 0.2],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-1/3 w-1 h-1 bg-blue-400 rounded-full blur-[2px]"
      />
      <motion.div 
        animate={{
          y: [20, -20, 20],
          opacity: [0.1, 0.4, 0.1],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-1/4 right-1/3 w-1 h-1 bg-blue-300 rounded-full blur-[2px]"
      />
    </div>
  );
};

export default Background;
