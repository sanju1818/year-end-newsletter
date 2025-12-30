
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowRight, Sparkles } from 'lucide-react';

interface InviteOverlayProps {
  onReveal: () => void;
}

const InviteOverlay: React.FC<InviteOverlayProps> = ({ onReveal }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.1, filter: 'blur(20px)' }}
      transition={{ duration: 0.8 }}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 overflow-hidden"
    >
      {/* Cinematic Background */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-[40px] z-0" />
      
      {/* Light Leaks & Prism Reflections */}
      <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden">
        <motion.div 
          animate={{ 
            rotate: [0, 360],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-[50%] -left-[50%] w-[200%] h-[200%] bg-[conic-gradient(from_0deg,transparent,rgba(99,102,241,0.1),transparent,rgba(168,85,247,0.1),transparent)]"
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.4)_100%)]" />
      </div>

      {/* Close Icon */}
      <button 
        onClick={onReveal}
        className="absolute top-8 right-8 text-white/20 hover:text-white transition-colors z-50 p-2"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Main Content Container */}
      <div className="relative z-20 flex flex-col items-center max-w-lg w-full">
        
        {/* The Envelope Experience */}
        <motion.div 
          initial={{ y: 50, opacity: 0, scale: 0.9 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, type: "spring", bounce: 0.4 }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="relative w-full aspect-[4/3] group cursor-pointer mb-12"
          onClick={onReveal}
        >
          {/* Card Inside (Revealed slightly) */}
          <motion.div
            animate={{ 
              y: isHovered ? -120 : -60,
              rotate: isHovered ? -2 : 0,
              scale: isHovered ? 1.05 : 1
            }}
            transition={{ type: "spring", stiffness: 100, damping: 15 }}
            className="absolute left-[10%] right-[10%] top-0 h-full bg-gradient-to-br from-indigo-500 via-purple-600 to-pink-500 rounded-[2rem] shadow-[0_30px_60px_rgba(0,0,0,0.5)] z-20 p-8 flex flex-col justify-end overflow-hidden"
          >
            {/* Glossy Overlay for Card */}
            <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent pointer-events-none" />
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-xl flex items-center justify-center border border-white/20">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white/60">Strictly Classified</span>
              </div>
              <h2 className="text-3xl font-black text-white leading-tight mb-2">
                ITW CRM<br/>
                <span className="italic opacity-80">2025 Year Recap.</span>
              </h2>
              <p className="text-xs font-bold text-white/50 leading-relaxed max-w-[220px]">
                Packed with wins, chaos, and a little bit of flex.
              </p>
            </div>

            {/* Corner Decorative Elements */}
            <div className="absolute top-6 left-6 w-8 h-8 border-t-2 border-l-2 border-white/30 rounded-tl-xl" />
            <div className="absolute top-6 right-6 w-8 h-8 border-t-2 border-r-2 border-white/30 rounded-tr-xl" />
          </motion.div>

          {/* Envelope Body */}
          <div className="absolute inset-0 z-30 pointer-events-none">
            {/* Envelope Base */}
            <div className="absolute inset-0 bg-[#0f1115] rounded-[2.5rem] shadow-2xl overflow-hidden border border-white/5">
               {/* Pattern for envelope texture */}
               <div className="absolute inset-0 opacity-10 pointer-events-none" 
                    style={{ backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.1) 1px, transparent 0)`, backgroundSize: '12px 12px' }} />
            </div>

            {/* Envelope Flap Open */}
            <motion.div 
              animate={{ rotateX: isHovered ? -160 : -140 }}
              className="absolute top-0 left-0 w-full h-1/2 bg-[#1a1c23] rounded-t-[2.5rem] origin-top shadow-xl border-t border-white/10 z-40"
              style={{ perspective: '1000px' }}
            />

            {/* Envelope Front Overlay (Pocket) */}
            <div className="absolute inset-0 bg-[#0f1115] rounded-[2.5rem] border border-white/5 z-30 flex items-center justify-center">
              <div className="flex flex-col items-center">
                 <div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-4">
                    <span className="text-xl font-black text-white/20">L</span>
                 </div>
                 <div className="w-24 h-[1px] bg-white/10 mb-4" />
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="flex flex-col items-center gap-6"
        >
          <motion.button
            onClick={onReveal}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative px-10 py-5 bg-white text-black font-black uppercase text-sm tracking-[0.2em] rounded-full shadow-[0_20px_40px_rgba(255,255,255,0.2)] flex items-center gap-4 transition-all"
          >
            <div className="absolute -inset-1 bg-white/20 rounded-full blur-xl group-hover:opacity-100 opacity-0 transition-opacity" />
            <span className="relative">Reveal My 2025</span>
            <ArrowRight className="w-5 h-5 relative group-hover:translate-x-1 transition-transform" />
          </motion.button>
          
          <div className="flex flex-col items-center gap-1">
            <span className="text-[10px] text-white/30 uppercase font-black tracking-[0.3em]">
              {isHovered ? "You survived. Now see how you dominated." : "Personal invite to your performance story"}
            </span>
          </div>
        </motion.div>
      </div>

      {/* Decorative Prism Flares */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 blur-[120px] rounded-full pointer-events-none -translate-x-1/2 translate-y-1/2" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/10 blur-[120px] rounded-full pointer-events-none translate-x-1/2 -translate-y-1/2" />
    </motion.div>
  );
};

export default InviteOverlay;
