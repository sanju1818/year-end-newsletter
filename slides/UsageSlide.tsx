
import React from 'react';
import { motion } from 'framer-motion';
import { Layout, Clock } from 'lucide-react';
import CountUp from '../components/CountUp';
import GlowCircle from '../components/GlowCircle';
import { SlideProps } from '../types';

const UsageSlide: React.FC<SlideProps> = ({ isActive }) => {
  return (
    <div className="flex flex-col md:flex-row gap-16 items-center">
      <div className="flex-1 space-y-8">
        <motion.h2 
          className="text-5xl md:text-7xl font-black leading-tight"
          initial={{ opacity: 0, x: -50 }}
          animate={isActive ? { opacity: 1, x: 0 } : {}}
        >
          ITW CRM <br />
          <span className="text-indigo-400">wasn't visited.</span>
        </motion.h2>
        <motion.p 
          className="text-2xl font-bold italic text-white/40"
          initial={{ opacity: 0 }}
          animate={isActive ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
        >
          It was an essential daily flow.
        </motion.p>
        
        <div className="flex gap-4 pt-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={isActive ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.8 }}
            className="flex items-center gap-4 bg-white/5 p-4 rounded-2xl border border-white/10 group hover:border-white/20 transition-colors"
          >
            <Layout className="w-5 h-5 text-indigo-400" />
            <div>
              <CountUp to={1850} className="text-xl font-black block text-white" delay={1} />
              <span className="text-[10px] text-white/30 uppercase font-bold tracking-widest">AMU</span>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={isActive ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 1 }}
            className="flex items-center gap-4 bg-white/5 p-4 rounded-2xl border border-white/10 group hover:border-white/20 transition-colors"
          >
            <Clock className="w-5 h-5 text-purple-400" />
            <div>
              <CountUp to={640} className="text-xl font-black block text-white" delay={1.2} />
              <span className="text-[10px] text-white/30 uppercase font-bold tracking-widest">ADU</span>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="flex-1 flex justify-center relative">
        <GlowCircle progress={34} isActive={isActive} label="34%" subLabel="Daily Engagement" />
        
        {/* Floating background decorative glows - keeping as subtle environment background */}
        <motion.div 
          animate={isActive ? { scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] } : {}}
          transition={{ duration: 4, repeat: Infinity }}
          className="absolute inset-0 bg-indigo-500/10 blur-[80px] -z-10 rounded-full"
        />
      </div>
    </div>
  );
};

export default UsageSlide;
