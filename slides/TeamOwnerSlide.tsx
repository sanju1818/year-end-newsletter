
import React from 'react';
import { motion } from 'framer-motion';
import { Users, UserPlus, Zap, Crown, ChevronRight } from 'lucide-react';
import CountUp from '../components/CountUp';
import { SlideProps } from '../types';

const TeamOwnerSlide: React.FC<SlideProps> = ({ isActive }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
      {/* Header Info */}
      <div className="lg:col-span-5 space-y-10">
        <div className="space-y-4">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={isActive ? { opacity: 1 } : {}}
            className="flex items-center gap-3 text-indigo-400"
          >
            <Users className="w-5 h-5" />
            <span className="text-xs font-black uppercase tracking-[0.3em]">Your TO Role Metrics</span>
          </motion.div>
          <motion.h2 
            initial={{ y: 20, opacity: 0 }}
            animate={isActive ? { y: 0, opacity: 1 } : {}}
            className="text-5xl md:text-7xl font-black leading-tight tracking-tighter"
          >
            Your team <br /><span className="italic text-indigo-400 drop-shadow-[0_0_15px_rgba(129,140,248,0.4)]">defined the standard.</span>
          </motion.h2>
        </div>

        <div className="flex gap-6">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isActive ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.4 }}
            className="flex-1 glass p-6 rounded-3xl border-white/5"
          >
            <div className="flex items-center justify-between mb-2">
              <Users className="w-6 h-6 text-white/20" />
              <CountUp to={18} className="text-4xl font-black text-white" />
            </div>
            <span className="text-[10px] uppercase font-bold text-white/30 tracking-widest">Total Members</span>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isActive ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.6 }}
            className="flex-1 glass p-6 rounded-3xl border-indigo-500/20"
          >
            <div className="flex items-center justify-between mb-2">
              <UserPlus className="w-6 h-6 text-indigo-400" />
              <CountUp to={4} className="text-4xl font-black text-indigo-400" />
            </div>
            <span className="text-[10px] uppercase font-bold text-indigo-400/40 tracking-widest">New Additions</span>
          </motion.div>
        </div>

        <div className="glass p-8 rounded-3xl border-white/5">
           <span className="text-[10px] uppercase font-bold text-white/30 tracking-widest block mb-6">Top Verticals (Team)</span>
           <div className="space-y-6">
              {[
                { label: "ITW India", value: 85, color: "bg-blue-500" },
                { label: "ITW BLR", value: 72, color: "bg-indigo-500" },
                { label: "ITW World", value: 64, color: "bg-purple-500" }
              ].map((v, i) => (
                <div key={i} className="space-y-2">
                  <div className="flex justify-between text-xs font-bold uppercase tracking-widest">
                    <span>{v.label}</span>
                    <span className="text-white/40">{v.value}% Performance</span>
                  </div>
                  <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={isActive ? { width: `${v.value}%` } : {}}
                      transition={{ duration: 1, delay: 0.8 + i * 0.1 }}
                      className={`h-full ${v.color}`}
                    />
                  </div>
                </div>
              ))}
           </div>
        </div>
      </div>

      {/* Hierarchy / Leaderboard */}
      <div className="lg:col-span-7 space-y-6">
        {/* Simplified Hierarchy Card */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          animate={isActive ? { opacity: 1, x: 0 } : {}}
          transition={{ delay: 1 }}
          className="glass p-8 rounded-[2.5rem] border-white/5 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 p-8 opacity-[0.05]">
            <Crown className="w-32 h-32" />
          </div>
          <h3 className="text-2xl font-black mb-8 flex items-center gap-4">
            <Crown className="w-6 h-6 text-yellow-500" />
            Top Team Closers
          </h3>
          <div className="space-y-4">
            {[
              { name: "Arun V", role: "Team Lead", deals: 42, color: "bg-blue-500/20 border-blue-500/30" },
              { name: "Sneha R", role: "Sr. Associate", deals: 38, color: "bg-indigo-500/20 border-indigo-500/30", king: true },
              { name: "Karthik M", role: "Associate", deals: 29, color: "bg-white/5 border-white/10" }
            ].map((person, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: 20 }}
                animate={isActive ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 1.2 + i * 0.1 }}
                className={`flex items-center justify-between p-4 rounded-2xl border ${person.color} relative overflow-hidden group hover:scale-[1.02] transition-transform`}
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center font-black">
                    {person.name[0]}
                  </div>
                  <div>
                    <div className="text-sm font-black text-white flex items-center gap-2">
                      {person.name}
                      {person.king && <span className="text-[10px] bg-yellow-500/20 text-yellow-500 px-2 rounded-full">Relationship Queen</span>}
                    </div>
                    <div className="text-[10px] uppercase font-bold text-white/30 tracking-widest">{person.role}</div>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-2xl font-black text-white">{person.deals}</span>
                  <span className="text-[10px] block font-bold text-white/20 uppercase">Deals</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isActive ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.6 }}
          className="flex items-center justify-center p-6 bg-white/[0.02] rounded-full border border-white/5 gap-6"
        >
          <div className="flex items-center gap-2">
            <Zap className="w-4 h-4 text-indigo-400" />
            <span className="text-xs font-bold uppercase tracking-widest text-white/40 italic">Leadership Momentum</span>
          </div>
          <div className="h-4 w-px bg-white/10" />
          <div className="text-xs font-black text-indigo-400 uppercase tracking-widest">ITW CRM Elite Division</div>
        </motion.div>
      </div>
    </div>
  );
};

export default TeamOwnerSlide;
