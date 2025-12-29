
import React from 'react';
import { motion } from 'framer-motion';
import { Tag, Briefcase, MousePointer2, Heart, CheckCircle2 } from 'lucide-react';
import CountUp from '../components/CountUp';
import { SlideProps } from '../types';

const BrandOwnerSlide: React.FC<SlideProps> = ({ isActive }) => {
  return (
    <div className="space-y-12">
      <div className="flex justify-between items-start">
        <div className="space-y-4">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={isActive ? { opacity: 1 } : {}}
            className="flex items-center gap-3 text-emerald-400"
          >
            <Tag className="w-5 h-5" />
            <span className="text-xs font-black uppercase tracking-[0.3em]">Your BO Role Metrics</span>
          </motion.div>
          <motion.h2 
            initial={{ y: 20, opacity: 0 }}
            animate={isActive ? { y: 0, opacity: 1 } : {}}
            className="text-5xl md:text-7xl font-black leading-tight tracking-tighter"
          >
            Personal ownership. <br /><span className="text-emerald-500 drop-shadow-[0_0_15px_rgba(16,185,129,0.3)]">Deep impact.</span>
          </motion.h2>
        </div>
        
        <div className="flex gap-4">
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={isActive ? { scale: 1, opacity: 1 } : {}}
            transition={{ delay: 0.3 }}
            className="bg-white/5 px-6 py-4 rounded-3xl border border-white/10 text-center"
          >
            <CountUp to={14} className="text-4xl font-black text-white block" />
            <span className="text-[10px] uppercase font-bold text-white/30 tracking-widest">Active Brands</span>
          </motion.div>
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={isActive ? { scale: 1, opacity: 1 } : {}}
            transition={{ delay: 0.5 }}
            className="bg-emerald-500/10 px-6 py-4 rounded-3xl border border-emerald-500/20 text-center"
          >
            <CountUp to={27} className="text-4xl font-black text-emerald-400 block" />
            <span className="text-[10px] uppercase font-bold text-emerald-500/40 tracking-widest">Deals Closed</span>
          </motion.div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Participation Card */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isActive ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.7 }}
          className="glass p-8 rounded-[2rem] border-white/5 space-y-6 group hover:bg-white/[0.04] transition-colors"
        >
          <div className="w-12 h-12 bg-blue-500/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
            <Briefcase className="w-6 h-6 text-blue-400" />
          </div>
          <div>
            <span className="text-4xl font-black block">6</span>
            <span className="text-xs font-bold text-white/40 uppercase tracking-widest">Events Joined</span>
          </div>
          <p className="text-xs text-white/30 leading-relaxed">Active participation across global platforms.</p>
        </motion.div>

        {/* Requests Card */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isActive ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="glass p-8 rounded-[2rem] border-emerald-500/20 bg-emerald-500/5 space-y-6"
        >
          <div className="w-12 h-12 bg-emerald-500/10 rounded-2xl flex items-center justify-center">
            <CheckCircle2 className="w-6 h-6 text-emerald-400" />
          </div>
          <div>
            <span className="text-4xl font-black block text-emerald-400">86%</span>
            <span className="text-xs font-bold text-white/40 uppercase tracking-widest">Brand Approval Rate</span>
          </div>
          <div className="text-[10px] font-bold text-emerald-400/60 flex items-center gap-2">
            6 of 8 Requests Fulfilled
          </div>
        </motion.div>

        {/* Relationship Depth */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isActive ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.9 }}
          className="glass p-8 rounded-[2rem] border-white/5 space-y-6"
        >
          <div className="w-12 h-12 bg-pink-500/10 rounded-2xl flex items-center justify-center">
            <Heart className="w-6 h-6 text-pink-400" />
          </div>
          <div>
            <CountUp to={386} className="text-4xl font-black block text-white" />
            <span className="text-xs font-bold text-white/40 uppercase tracking-widest">Platform Contacts</span>
          </div>
          <div className="w-full h-1 bg-white/5 rounded-full">
            <motion.div 
              initial={{ width: 0 }}
              animate={isActive ? { width: '75%' } : {}}
              transition={{ duration: 1, delay: 1.5 }}
              className="h-full bg-pink-500"
            />
          </div>
        </motion.div>

        {/* Task Ownership */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isActive ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.0 }}
          className="glass p-8 rounded-[2rem] border-white/5 space-y-6"
        >
          <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center">
            <MousePointer2 className="w-6 h-6 text-white/40" />
          </div>
          <div className="grid grid-cols-2 gap-4">
             <div>
               <span className="text-2xl font-black block">124</span>
               <span className="text-[8px] uppercase font-bold text-white/20 tracking-tighter">Created</span>
             </div>
             <div>
               <span className="text-2xl font-black block">58</span>
               <span className="text-[8px] uppercase font-bold text-white/20 tracking-tighter">Assigned</span>
             </div>
          </div>
          <div className="pt-2 text-[10px] font-black uppercase tracking-widest text-white/20">Task Ownership Ratio: 2.1</div>
        </motion.div>
      </div>
    </div>
  );
};

export default BrandOwnerSlide;
