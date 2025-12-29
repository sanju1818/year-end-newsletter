import React from 'react';
import { motion } from 'framer-motion';
import { Zap } from 'lucide-react';
import CountUp from './CountUp';

export const FeatureCard: React.FC<{
  title: string;
  description: string;
  percentage: number;
  colorClass: string;
  delay?: number;
}> = ({ title, description, percentage, colorClass, delay = 0 }) => (
  <motion.div 
    initial={{ opacity: 0, scale: 0.95 }}
    whileInView={{ opacity: 1, scale: 1 }}
    whileHover={{ y: -10 }}
    transition={{ delay, duration: 1, ease: [0.22, 1, 0.36, 1] }}
    className="glass p-12 rounded-[3rem] border-white/5 relative overflow-hidden flex flex-col md:flex-row items-center gap-12 w-full group transition-all duration-700 hover:border-white/20 hover:bg-white/[0.04]"
  >
    {/* Animated Parallax Background Glow */}
    <motion.div 
      animate={{ 
        x: [-20, 20, -20], 
        y: [-20, 20, -20],
        opacity: [0.15, 0.25, 0.15]
      }}
      transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      className={`absolute top-0 right-0 w-80 h-80 blur-[120px] -z-10 ${colorClass.replace('text-', 'bg-')}`} 
    />
    
    <div className="flex-1 space-y-6">
      <motion.div 
        animate={{ y: [0, -4, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-[10px] font-black tracking-[0.3em] uppercase"
      >
        <Zap className="w-3 h-3 text-yellow-500" />
        Most Used Feature
      </motion.div>
      <h3 className="text-4xl md:text-5xl font-black text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-white/60 transition-all duration-500">{title}</h3>
      <p className="text-white/40 text-lg max-w-sm leading-relaxed group-hover:text-white/60 transition-colors duration-500">{description}</p>
    </div>

    <div className="flex flex-col items-center justify-center p-10 bg-black/40 rounded-[2.5rem] border border-white/5 min-w-[220px] relative overflow-hidden group-hover:border-white/20 transition-all duration-500">
      <div className={`absolute inset-0 opacity-5 blur-2xl ${colorClass.replace('text-', 'bg-')} scale-150 group-hover:opacity-10 transition-opacity duration-700`} />
      <CountUp to={percentage} suffix="%" className={`text-7xl font-black ${colorClass} relative z-10`} />
      <span className="text-[10px] uppercase font-black tracking-widest text-white/30 mt-4 relative z-10">Active Adoption</span>
    </div>
  </motion.div>
);