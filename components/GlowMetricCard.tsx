
import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';
import CountUp from './CountUp';

interface GlowMetricCardProps {
  icon: LucideIcon;
  value: number;
  label: string;
  colorClass: string;
  isActive: boolean;
  delay?: number;
  highlight?: boolean;
}

const GlowMetricCard: React.FC<GlowMetricCardProps> = ({ 
  icon: Icon, value, label, colorClass, isActive, delay = 0, highlight = false 
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      animate={isActive ? { opacity: 1, x: 0 } : {}}
      transition={{ delay, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ scale: 1.02, x: 10 }}
      className={`relative group flex items-center justify-between p-7 rounded-[2.5rem] border transition-all duration-700 overflow-hidden ${
        highlight 
          ? 'bg-white/[0.08] border-white/20 shadow-[0_20px_40px_rgba(0,0,0,0.3)]' 
          : 'bg-white/[0.02] border-white/5 hover:border-white/10'
      }`}
    >
      <div className="flex items-center gap-5">
        <div className="relative">
           <motion.div 
             animate={isActive ? { scale: [1, 1.4, 1], opacity: [0, 0.3, 0] } : {}}
             transition={{ duration: 2, repeat: Infinity }}
             className={`absolute inset-0 rounded-full ${colorClass.replace('text-', 'bg-')}`}
           />
           <div className={`w-14 h-14 rounded-2xl flex items-center justify-center bg-black/60 border border-white/10 ${colorClass} relative z-10 group-hover:rotate-6 transition-transform`}>
             <Icon className="w-7 h-7" />
           </div>
        </div>
        <div className="flex flex-col">
          <span className="text-xs font-black text-white/30 uppercase tracking-[0.3em] group-hover:text-white/50 transition-colors">{label}</span>
        </div>
      </div>
      <div className="text-right pr-2">
        <CountUp 
          to={value} 
          className={`text-4xl font-black ${highlight ? colorClass : 'text-white'}`} 
        />
      </div>
      
      {/* Background Sheen Effect */}
      <motion.div 
        animate={{ x: ['-100%', '200%'] }}
        transition={{ duration: 4, repeat: Infinity, repeatDelay: 3 }}
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-12 pointer-events-none"
      />
    </motion.div>
  );
};

export default GlowMetricCard;
