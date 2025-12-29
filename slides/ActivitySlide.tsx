
import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Calendar, CheckSquare } from 'lucide-react';
import CountUp from '../components/CountUp';
import DotGrid from '../components/DotGrid';
import { SlideProps } from '../types';

const ActivitySlide: React.FC<SlideProps> = ({ isActive }) => {
  return (
    <div className="space-y-12">
      <div className="max-w-2xl flex items-end gap-8">
        <motion.h2 
          className="text-4xl md:text-5xl font-black mb-2"
          initial={{ opacity: 0, y: 30 }}
          animate={isActive ? { opacity: 1, y: 0 } : {}}
        >
          Moments became <span className="text-pink-500">momentum.</span>
        </motion.h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div className="space-y-6">
          <DotGrid isActive={isActive} count={83} />
          <motion.p 
            initial={{ opacity: 0 }}
            animate={isActive ? { opacity: 1 } : {}}
            transition={{ delay: 1.5 }}
            className="text-white/40 text-sm font-medium italic"
          >
            Every dot represents a completed task in your workflow ecosystem.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 gap-6">
          <motion.div 
            className="glass p-6 rounded-2xl flex items-center gap-6 border border-white/5 relative overflow-hidden group hover:bg-white/[0.04] transition-colors"
            initial={{ x: 50, opacity: 0 }}
            animate={isActive ? { x: 0, opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
          >
            <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
              <MessageSquare className="w-6 h-6 text-blue-400" />
            </div>
            <div className="flex-1">
              <CountUp to={3920} className="text-2xl font-black block text-white" delay={0.4} />
              <span className="text-[10px] uppercase font-bold tracking-widest text-white/30">POCs Contacted</span>
            </div>
            <div className="w-1 h-12 bg-blue-500/30 rounded-full" />
          </motion.div>

          <motion.div 
            className="glass p-6 rounded-2xl flex items-center gap-6 border border-white/5 relative overflow-hidden group hover:bg-white/[0.04] transition-colors"
            initial={{ x: 50, opacity: 0 }}
            animate={isActive ? { x: 0, opacity: 1 } : {}}
            transition={{ delay: 0.4 }}
          >
            <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
              <Calendar className="w-6 h-6 text-purple-400" />
            </div>
            <div className="flex-1">
              <CountUp to={1780} className="text-2xl font-black block text-white" delay={0.6} />
              <span className="text-[10px] uppercase font-bold tracking-widest text-white/30">Events Scheduled</span>
            </div>
            <div className="w-1 h-12 bg-purple-500/30 rounded-full" />
          </motion.div>

          <motion.div 
            className="glass p-6 rounded-2xl border border-pink-500/20 relative overflow-hidden group"
            initial={{ x: 50, opacity: 0 }}
            animate={isActive ? { x: 0, opacity: 1 } : {}}
            transition={{ delay: 0.6 }}
          >
             <div className="absolute top-0 right-0 p-4">
                <CheckSquare className="w-6 h-6 text-pink-400" />
             </div>
             <div className="mb-4">
                <CountUp to={8640} className="text-4xl font-black block text-pink-500" delay={0.8} />
                <span className="text-xs uppercase font-bold tracking-widest text-white/40">Tasks Accomplished</span>
             </div>
             <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                <motion.div 
                  className="h-full bg-gradient-to-r from-pink-500 to-purple-500"
                  initial={{ width: 0 }}
                  animate={isActive ? { width: '83%' } : {}}
                  transition={{ duration: 1.5, delay: 1, ease: "circOut" }}
                />
             </div>
             <div className="mt-2 text-[10px] font-bold uppercase tracking-widest text-white/20 text-right">
               83% Operational Excellence
             </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ActivitySlide;
