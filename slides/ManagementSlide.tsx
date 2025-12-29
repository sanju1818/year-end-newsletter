
import React from 'react';
import { motion } from 'framer-motion';
import { UserCheck, Shield, Database, Trophy, TrendingUp, Target } from 'lucide-react';
import CountUp from '../components/CountUp';
import GlowMetricCard from '../components/GlowMetricCard';
import PremiumWaveLine from '../components/PremiumWaveLine';
import { SlideProps } from '../types';

const ManagementSlide: React.FC<SlideProps> = ({ isActive }) => {
  const eliteClosers = [
    { name: "Rajesh K", deals: 84, avatar: "https://i.pravatar.cc/150?u=rajesh" },
    { name: "Ananya S", deals: 76, avatar: "https://i.pravatar.cc/150?u=ananya" },
    { name: "Mohan P", deals: 62, avatar: "https://i.pravatar.cc/150?u=mohan" }
  ];

  return (
    <div className="flex flex-col gap-12">
      <div className="flex justify-between items-end">
        <div className="space-y-4">
          <motion.div className="flex items-center gap-3 text-blue-400">
            <Shield className="w-5 h-5" />
            <span className="text-xs font-black uppercase tracking-[0.3em]">Management Role Metrics</span>
          </motion.div>
          <motion.h2 className="text-5xl md:text-7xl font-black tracking-tighter">The system scaled <br /><span className="text-blue-500">with governance.</span></motion.h2>
        </div>
        <div className="hidden md:block glass p-6 rounded-3xl border-blue-500/20 text-right">
          <CountUp to={486} className="text-5xl font-black text-white block" />
          <span className="text-[10px] uppercase font-bold text-white/30 tracking-widest">Total Wins Controlled</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="space-y-4">
          <GlowMetricCard icon={UserCheck} value={42} label="New Hires" colorClass="text-emerald-400" isActive={isActive} />
          <GlowMetricCard icon={Shield} value={312} label="Brands Governed" colorClass="text-blue-400" isActive={isActive} highlight />
        </div>

        <div className="space-y-4">
          <GlowMetricCard icon={Database} value={9420} label="Tasks Orchestrated" colorClass="text-purple-400" isActive={isActive} />
          <div className="glass p-6 rounded-[2rem] border-white/5">
             <PremiumWaveLine isActive={isActive} color="#6366f1" />
          </div>
        </div>

        <div className="space-y-4">
          <div className="glass p-6 rounded-[2rem] border-blue-500/20 bg-blue-500/5">
             <span className="text-[10px] uppercase font-bold text-blue-400/60 block mb-4">Elite Deal Closers</span>
             <ul className="space-y-4">
                {eliteClosers.map((performer, i) => (
                  <motion.li 
                    key={i}
                    initial={{ opacity: 0, x: 10 }}
                    animate={isActive ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.5 + (i * 0.1) }}
                    className="flex justify-between items-center border-b border-white/5 pb-2"
                  >
                    <div className="flex items-center gap-3">
                      <img src={performer.avatar} className="w-8 h-8 rounded-full object-cover border border-white/10" alt="" />
                      <span className="text-sm font-bold text-white/70">{performer.name}</span>
                    </div>
                    <span className="text-lg font-black text-white">{performer.deals}</span>
                  </motion.li>
                ))}
             </ul>
          </div>
          <GlowMetricCard icon={Target} value={1235} label="Total POC Network" colorClass="text-blue-300" isActive={isActive} />
        </div>
      </div>
    </div>
  );
};

export default ManagementSlide;
