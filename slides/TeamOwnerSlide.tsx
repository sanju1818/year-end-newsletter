
import React from 'react';
import { motion } from 'framer-motion';
import { Users, UserPlus, Zap, Crown } from 'lucide-react';
import CountUp from '../components/CountUp';
import { SlideProps } from '../types';

const TeamOwnerSlide: React.FC<SlideProps> = ({ isActive }) => {
  const teamClosers = [
    { name: "Arun V", role: "Team Lead", deals: 42, color: "bg-blue-500/20 border-blue-500/30", avatar: "https://i.pravatar.cc/150?u=arun" },
    { name: "Sneha R", role: "Sr. Associate", deals: 38, color: "bg-indigo-500/20 border-indigo-500/30", king: true, avatar: "https://i.pravatar.cc/150?u=sneha" },
    { name: "Karthik M", role: "Associate", deals: 29, color: "bg-white/5 border-white/10", avatar: "https://i.pravatar.cc/150?u=karthik" }
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
      <div className="lg:col-span-5 space-y-10">
        <div className="space-y-4">
          <motion.div className="flex items-center gap-3 text-indigo-400">
            <Users className="w-5 h-5" />
            <span className="text-xs font-black uppercase tracking-[0.3em]">Your TO Role Metrics</span>
          </motion.div>
          <motion.h2 className="text-5xl md:text-7xl font-black tracking-tighter">Your team <br /><span className="italic text-indigo-400">defined the standard.</span></motion.h2>
        </div>
        <div className="flex gap-6">
          <div className="flex-1 glass p-6 rounded-3xl border-white/5">
            <CountUp to={18} className="text-4xl font-black text-white" />
            <span className="text-[10px] uppercase font-bold text-white/30 block mt-2">Total Members</span>
          </div>
        </div>
      </div>

      <div className="lg:col-span-7">
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          animate={isActive ? { opacity: 1, x: 0 } : {}}
          className="glass p-8 rounded-[2.5rem] border-white/5 relative"
        >
          <h3 className="text-2xl font-black mb-8 flex items-center gap-4">
            <Crown className="w-6 h-6 text-yellow-500" />
            Top Team Closers
          </h3>
          <div className="space-y-4">
            {teamClosers.map((person, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: 20 }}
                animate={isActive ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.2 * i }}
                className={`flex items-center justify-between p-4 rounded-2xl border ${person.color} group hover:scale-[1.02] transition-transform`}
              >
                <div className="flex items-center gap-4">
                  <img src={person.avatar} className="w-12 h-12 rounded-full border border-white/20 object-cover" alt={person.name} />
                  <div>
                    <div className="text-sm font-black text-white flex items-center gap-2">
                      {person.name}
                      {person.king && <span className="text-[10px] bg-yellow-500/20 text-yellow-500 px-2 rounded-full italic">Relationship Queen</span>}
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
      </div>
    </div>
  );
};

export default TeamOwnerSlide;
