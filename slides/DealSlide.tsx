
import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, TrendingUp, Target, Sparkles } from 'lucide-react';
import CountUp from '../components/CountUp';
import PremiumWaveLine from '../components/PremiumWaveLine';
import { SlideProps } from '../types';

const DealSlide: React.FC<SlideProps> = ({ isActive }) => {
  return (
    <div className="flex flex-col space-y-12">
      <div className="text-center space-y-6 relative">
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={isActive ? { scale: 1, opacity: 1 } : {}}
          className="flex justify-center mb-4"
        >
          <div className="px-4 py-1.5 rounded-full border border-yellow-500/30 bg-yellow-500/10 flex items-center gap-2">
            <Sparkles className="w-3 h-3 text-yellow-400" />
            <span className="text-[10px] font-black uppercase tracking-widest text-yellow-500">Peak Performance</span>
          </div>
        </motion.div>
        
        <div className="relative inline-flex flex-col items-center">
          <motion.h2 
            initial={{ opacity: 0, scale: 1.2 }}
            animate={isActive ? { 
              opacity: 1, 
              scale: [1, 1.02, 1],
            } : {}}
            transition={{ 
              opacity: { duration: 0.8 },
              scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
            }}
            className="text-[8rem] md:text-[12rem] font-black leading-none tracking-tighter text-white opacity-90"
          >
            486
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={isActive ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5 }}
            className="text-4xl md:text-5xl font-black uppercase italic text-indigo-400 -mt-8"
          >
            DEALS WON
          </motion.div>
        </div>
        
        <motion.p 
          className="text-xl text-white/60 font-medium max-w-lg mx-auto"
          initial={{ opacity: 0 }}
          animate={isActive ? { opacity: 1 } : {}}
          transition={{ delay: 1 }}
        >
          When focus met execution, momentum became unstoppable.
        </motion.p>
      </div>

      <div className="relative">
        <PremiumWaveLine isActive={isActive} color="#6366f1" />
        
        <div className="grid grid-cols-2 md:grid-cols-2 gap-4 mt-8">
           <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={isActive ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 1.2 }}
            className="glass px-8 py-6 rounded-3xl border border-white/5 flex items-center justify-between group hover:border-white/20 transition-all"
           >
              <div className="flex items-center gap-4">
                <Target className="w-6 h-6 text-indigo-400" />
                <span className="text-xs uppercase font-bold text-white/40 tracking-widest">Conversion</span>
              </div>
              <CountUp to={32} suffix="%" className="text-3xl font-black text-white" delay={1.4} />
           </motion.div>

           <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={isActive ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 1.4 }}
            className="glass px-8 py-6 rounded-3xl border border-white/5 flex items-center justify-between group hover:border-white/20 transition-all"
           >
              <div className="flex items-center gap-4">
                <TrendingUp className="w-6 h-6 text-purple-400" />
                <span className="text-xs uppercase font-bold text-white/40 tracking-widest">Efficiency</span>
              </div>
              <CountUp to={41} suffix="%" className="text-3xl font-black text-white" delay={1.6} />
           </motion.div>
        </div>
      </div>
    </div>
  );
};

export default DealSlide;
