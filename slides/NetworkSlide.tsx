
import React from 'react';
import { motion } from 'framer-motion';
import { Users, UserMinus, UserPlus, Zap } from 'lucide-react';
import GlowMetricCard from '../components/GlowMetricCard';
import { SlideProps } from '../types';

const NetworkSlide: React.FC<SlideProps> = ({ isActive }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
      <div className="space-y-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isActive ? { opacity: 1, scale: 1 } : {}}
          className="w-20 h-20 rounded-3xl bg-indigo-500/10 flex items-center justify-center border border-indigo-500/20"
        >
          <Users className="w-10 h-10 text-indigo-400" />
        </motion.div>
        
        <motion.h2 
          className="text-5xl md:text-7xl font-black leading-tight tracking-tighter"
          initial={{ x: -50, opacity: 0 }}
          animate={isActive ? { x: 0, opacity: 1 } : {}}
        >
          You didn't just grow.<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400 italic underline decoration-indigo-500/30">You refined.</span>
        </motion.h2>
        
        <motion.p 
          className="text-xl text-white/40 max-w-md font-medium"
          initial={{ opacity: 0 }}
          animate={isActive ? { opacity: 1 } : {}}
          transition={{ delay: 0.4 }}
        >
          The ecosystem of ITW CRM evolved from raw quantity to curated quality.
        </motion.p>
      </div>

      <div className="flex flex-col gap-4">
        <GlowMetricCard 
          icon={UserPlus} 
          value={1240} 
          label="New POCs Added" 
          colorClass="text-emerald-400" 
          isActive={isActive} 
          delay={0.6}
          highlight={true}
        />
        <GlowMetricCard 
          icon={UserMinus} 
          value={310} 
          label="Redundant POCs Removed" 
          colorClass="text-rose-400" 
          isActive={isActive} 
          delay={0.8}
        />
        <GlowMetricCard 
          icon={Zap} 
          value={96} 
          label="New Users Onboarded" 
          colorClass="text-indigo-400" 
          isActive={isActive} 
          delay={1.0}
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={isActive ? { opacity: 1 } : {}}
          transition={{ delay: 1.5 }}
          className="text-center"
        >
          <span className="text-[10px] text-white/20 uppercase tracking-[0.5em] font-bold">Refining the edge</span>
        </motion.div>
      </div>
    </div>
  );
};

export default NetworkSlide;
