
import React from 'react';
import { motion } from 'framer-motion';
import { Database, ShieldCheck } from 'lucide-react';
import GlowBarChart from '../components/GlowBarChart';
import { SlideProps } from '../types';

const HygieneSlide: React.FC<SlideProps> = ({ isActive }) => {
  const chartData = [
    { label: "Jan", value: 450 },
    { label: "Mar", value: 680 },
    { label: "May", value: 890 },
    { label: "Jul", value: 1240 },
    { label: "Sep", value: 1650 },
    { label: "Nov", value: 1960, highlight: true },
  ];

  return (
    <div className="flex flex-col space-y-16">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
        <div className="space-y-4">
          <motion.div
            initial={{ rotate: -15, opacity: 0 }}
            animate={isActive ? { rotate: 0, opacity: 1 } : {}}
            className="w-16 h-16 bg-purple-500/10 rounded-2xl flex items-center justify-center border border-purple-500/20"
          >
            <Database className="w-8 h-8 text-purple-400" />
          </motion.div>
          <motion.h2 
            className="text-5xl md:text-7xl font-black tracking-tighter leading-none"
            initial={{ x: -30, opacity: 0 }}
            animate={isActive ? { x: 0, opacity: 1 } : {}}
          >
            Growth stayed <span className="text-purple-400">clean.</span>
          </motion.h2>
          <motion.p 
            className="text-xl text-white/40 font-medium max-w-sm"
            initial={{ opacity: 0 }}
            animate={isActive ? { opacity: 1 } : {}}
            transition={{ delay: 0.3 }}
          >
            Data stayed intentional. <br />High-intent flow with zero noise.
          </motion.p>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isActive ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.5 }}
          className="glass p-8 rounded-3xl border-white/5 flex items-center gap-6"
        >
          <div className="w-14 h-14 bg-emerald-500/10 rounded-full flex items-center justify-center">
            <ShieldCheck className="w-7 h-7 text-emerald-400" />
          </div>
          <div>
            <span className="text-[10px] uppercase font-bold text-white/30 tracking-widest block">System Integrity</span>
            <span className="text-3xl font-black text-white">99.9%</span>
          </div>
        </motion.div>
      </div>

      <div className="relative py-8">
        <GlowBarChart data={chartData} isActive={isActive} color="#a855f7" />
        
        {/* Decorative background label for the chart area */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 opacity-[0.03] select-none pointer-events-none">
          <span className="text-[15rem] font-black uppercase">HYGIENE</span>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-8">
        {[
          { label: "Brands Added", value: "312", color: "text-emerald-400" },
          { label: "Leads Assigned", value: "1,960", color: "text-purple-400" },
          { label: "Noise Filtered", value: "180", color: "text-white/30" }
        ].map((stat, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={isActive ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 1 + i * 0.1 }}
            className="text-center group"
          >
            <span className={`text-2xl md:text-3xl font-black block mb-1 ${stat.color} transition-all duration-300`}>{stat.value}</span>
            <span className="text-[10px] uppercase font-bold tracking-widest text-white/20">{stat.label}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default HygieneSlide;
