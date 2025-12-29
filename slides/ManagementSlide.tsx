
import React from 'react';
import { motion } from 'framer-motion';
import { UserCheck, Shield, Database, Trophy, TrendingUp, Target } from 'lucide-react';
import CountUp from '../components/CountUp';
import GlowMetricCard from '../components/GlowMetricCard';
import PremiumWaveLine from '../components/PremiumWaveLine';
import { SlideProps } from '../types';

const ManagementSlide: React.FC<SlideProps> = ({ isActive }) => {
  return (
    <div className="flex flex-col gap-12">
      <div className="flex justify-between items-end">
        <div className="space-y-4">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={isActive ? { opacity: 1, x: 0 } : {}}
            className="flex items-center gap-3 text-blue-400"
          >
            <Shield className="w-5 h-5" />
            <span className="text-xs font-black uppercase tracking-[0.3em]">Management Role Metrics</span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={isActive ? { opacity: 1, y: 0 } : {}}
            className="text-5xl md:text-7xl font-black leading-tight tracking-tighter"
          >
            The system scaled <br /><span className="text-blue-500 drop-shadow-[0_0_20px_rgba(59,130,246,0.3)]">with governance.</span>
          </motion.h2>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isActive ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.4 }}
          className="hidden md:block glass p-6 rounded-3xl border-blue-500/20 text-right"
        >
          <CountUp to={486} className="text-5xl font-black text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.3)] block" />
          <span className="text-[10px] uppercase font-bold text-white/30 tracking-widest">Total Wins Controlled</span>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Governance Column */}
        <div className="space-y-4">
          <GlowMetricCard icon={UserCheck} value={42} label="New Hires" colorClass="text-emerald-400" isActive={isActive} delay={0.2} />
          <GlowMetricCard icon={Shield} value={312} label="Brands Governed" colorClass="text-blue-400" isActive={isActive} delay={0.3} highlight />
          <div className="glass p-6 rounded-[2rem] border-white/5 space-y-4">
            <span className="text-[10px] uppercase font-bold text-white/30 tracking-widest">Brand Assignment Delta</span>
            <div className="flex justify-between items-center">
              <span className="text-2xl font-black text-white">244</span>
              <span className="text-[10px] text-emerald-400 font-black">+14% vs LY</span>
            </div>
            <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
              <motion.div 
                initial={{ width: 0 }}
                animate={isActive ? { width: '84%' } : {}}
                transition={{ duration: 1.5, delay: 1 }}
                className="h-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]"
              />
            </div>
          </div>
        </div>

        {/* Workflow Column */}
        <div className="space-y-4">
          <GlowMetricCard icon={Database} value={9420} label="Tasks Orchestrated" colorClass="text-purple-400" isActive={isActive} delay={0.4} />
          <div className="glass p-6 rounded-[2rem] border-white/5">
             <div className="flex justify-between mb-4">
               <div>
                 <span className="text-xs uppercase font-bold text-white/40 block">Top Vertical</span>
                 <span className="text-xl font-black text-white">ITW World</span>
               </div>
               <TrendingUp className="w-5 h-5 text-indigo-400" />
             </div>
             <PremiumWaveLine isActive={isActive} color="#6366f1" />
          </div>
        </div>

        {/* Leadership Column */}
        <div className="space-y-4">
          <div className="glass p-6 rounded-[2rem] border-blue-500/20 bg-blue-500/5">
             <span className="text-[10px] uppercase font-bold text-blue-400/60 tracking-[0.3em] block mb-4">Elite Deal Closers</span>
             <ul className="space-y-3">
                {[
                  { name: "Rajesh K", deals: 84 },
                  { name: "Ananya S", deals: 76 },
                  { name: "Mohan P", deals: 62 }
                ].map((performer, i) => (
                  <motion.li 
                    key={i}
                    initial={{ opacity: 0, x: 10 }}
                    animate={isActive ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.8 + (i * 0.1) }}
                    className="flex justify-between items-center border-b border-white/5 pb-2"
                  >
                    <span className="text-sm font-bold text-white/70">{performer.name}</span>
                    <span className="text-lg font-black text-white">{performer.deals}</span>
                  </motion.li>
                ))}
             </ul>
          </div>
          <GlowMetricCard icon={Target} value={1235} label="Total POC Network" colorClass="text-blue-300" isActive={isActive} delay={0.6} />
        </div>
      </div>
    </div>
  );
};

export default ManagementSlide;
