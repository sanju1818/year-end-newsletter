
import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Box, Code } from 'lucide-react';
import CountUp from '../components/CountUp';
import { SlideProps } from '../types';

const ProductSlide: React.FC<SlideProps> = ({ isActive }) => {
  return (
    <div className="space-y-12">
      <div className="flex flex-col md:flex-row justify-between items-end gap-6">
        <div>
          <motion.h2 
            className="text-5xl md:text-6xl font-black mb-4"
            initial={{ y: 30, opacity: 0 }}
            animate={isActive ? { y: 0, opacity: 1 } : {}}
          >
            You shipped fast.
          </motion.h2>
          <motion.p 
            className="text-2xl text-indigo-400 font-bold drop-shadow-[0_0_10px_rgba(129,140,248,0.4)]"
            initial={{ y: 30, opacity: 0 }}
            animate={isActive ? { y: 0, opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
          >
            Users adopted faster.
          </motion.p>
        </div>
        <div className="flex items-baseline gap-2 group">
          <CountUp to={18} className="text-8xl font-black text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.3)] group-hover:drop-shadow-[0_0_30px_rgba(59,130,246,0.6)] transition-all" delay={0.4} />
          <span className="text-sm uppercase tracking-[0.4em] text-white/40 font-bold">Features</span>
        </div>
      </div>

      <motion.div 
        className="relative glass p-12 rounded-[2rem] overflow-hidden border-indigo-500/30 border-2"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={isActive ? { scale: 1, opacity: 1 } : {}}
        transition={{ delay: 0.6 }}
      >
        <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 blur-3xl -z-10" />
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="flex-1 space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-xs font-bold tracking-widest uppercase">
              <Zap className="w-3 h-3 text-yellow-400" />
              Most Used Feature
            </div>
            <h3 className="text-4xl md:text-5xl font-black">Lead Automation</h3>
            <p className="text-white/50 max-w-sm text-lg">
              Streamlining workflows and removing manual friction for the entire team.
            </p>
          </div>
          
          <div className="flex flex-col items-center justify-center p-8 bg-black/50 rounded-2xl border border-white/10 min-w-[200px] shadow-[0_0_30px_rgba(99,102,241,0.15)]">
             <CountUp to={78} suffix="%" className="text-6xl font-black text-indigo-400 mb-2 drop-shadow-[0_0_20px_rgba(99,102,241,0.5)]" delay={0.8} />
             <span className="text-xs uppercase tracking-widest text-white/40 text-center">Active User Adoption</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProductSlide;
