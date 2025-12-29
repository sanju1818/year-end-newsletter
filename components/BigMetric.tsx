
import React from 'react';
import { motion } from 'framer-motion';
import CountUp from './CountUp';

interface BigMetricProps {
  value: number;
  label: string;
  suffix?: string;
  delay?: number;
  colorClass?: string;
}

const BigMetric: React.FC<BigMetricProps> = ({ 
  value, 
  label, 
  suffix = '', 
  delay = 0, 
  colorClass = "text-white" 
}) => {
  return (
    <div className="flex flex-col space-y-4 group">
      <div className="relative">
        <CountUp 
          to={value} 
          suffix={suffix}
          delay={delay}
          className={`text-7xl md:text-9xl font-black tracking-tighter ${colorClass} opacity-100 transition-all`} 
        />
      </div>
      <div className="flex flex-col space-y-1">
        <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.4em] text-white/30 group-hover:text-white/50 transition-colors">
          {label}
        </span>
        <motion.div 
          initial={{ width: 0 }}
          animate={{ width: "2rem" }}
          className={`h-[2px] ${colorClass.replace('text-', 'bg-')} opacity-30`}
        />
      </div>
    </div>
  );
};

export default BigMetric;
