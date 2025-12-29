
import React from 'react';
import { motion } from 'framer-motion';
import { Zap } from 'lucide-react';
import CountUp from '../components/CountUp';
import { PremiumFeatureCard } from '../components/UIElements';
import { SlideProps } from '../types';

const ProductSlide: React.FC<SlideProps> = ({ isActive }) => {
  return (
    <div className="space-y-16 w-full flex flex-col items-center">
      <div className="w-full flex flex-col md:flex-row justify-between items-end gap-6 max-w-5xl">
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

      <PremiumFeatureCard 
        title="Lead Automation"
        description="Streamlining workflows and removing manual friction for the entire ecosystem."
        value={78}
        label="Active User Adoption"
        badgeText="Most Used Feature"
        colorClass="text-indigo-400"
        delay={0.6}
      />
    </div>
  );
};

export default ProductSlide;
