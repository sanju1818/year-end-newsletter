
import React from 'react';
import { motion } from 'framer-motion';
import { ClipboardCheck, Package, AlertCircle, TrendingUp, Sparkles } from 'lucide-react';
import CountUp from '../components/CountUp';
import { SlideProps } from '../types';

const ProcessOwnerSlide: React.FC<SlideProps> = ({ isActive }) => {
  return (
    <div className="space-y-12">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
        <div className="space-y-4">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={isActive ? { opacity: 1 } : {}}
            className="flex items-center gap-3 text-purple-400"
          >
            <ClipboardCheck className="w-5 h-5" />
            <span className="text-xs font-black uppercase tracking-[0.3em]">Your PO Role Metrics</span>
          </motion.div>
          <motion.h2 
            initial={{ x: -20, opacity: 0 }}
            animate={isActive ? { x: 0, opacity: 1 } : {}}
            className="text-5xl md:text-7xl font-black leading-tight tracking-tighter"
          >
            Owning the <br /><span className="text-purple-500 drop-shadow-[0_0_15px_rgba(168,85,247,0.3)]">operational flow.</span>
          </motion.h2>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isActive ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.3 }}
          className="glass p-8 rounded-3xl border-purple-500/20 flex items-center gap-6"
        >
          <div className="w-16 h-16 bg-purple-500/10 rounded-2xl flex items-center justify-center border border-purple-500/20">
            <Package className="w-8 h-8 text-purple-400" />
          </div>
          <div>
            <CountUp to={9} className="text-5xl font-black text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.2)] block" />
            <span className="text-[10px] uppercase font-bold text-white/30 tracking-widest">New Inventories Assigned</span>
          </div>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Status Tracker */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={isActive ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5 }}
          className="lg:col-span-2 glass p-10 rounded-[3rem] border-white/5 relative overflow-hidden group"
        >
          <div className="absolute top-0 right-0 p-8">
             <div className="px-4 py-2 rounded-full bg-rose-500/10 border border-rose-500/30 flex items-center gap-2 animate-pulse">
                <AlertCircle className="w-4 h-4 text-rose-500" />
                <span className="text-[10px] font-black uppercase text-rose-500 tracking-widest">Execution Alert</span>
             </div>
          </div>
          
          <h3 className="text-3xl font-black mb-8">Follow-through Impact</h3>
          
          <div className="flex flex-col md:flex-row gap-12 items-center">
             <div className="flex-1 space-y-8 w-full">
                <div className="flex items-center justify-between p-4 bg-white/5 rounded-2xl border border-white/10">
                   <span className="text-sm font-bold text-white/60">Pending Deck Uploads</span>
                   <span className="text-2xl font-black text-rose-400">3 Items</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-emerald-500/10 rounded-2xl border border-emerald-500/20">
                   <span className="text-sm font-bold text-emerald-400/60">Upload Success Rate</span>
                   <span className="text-2xl font-black text-emerald-400">92%</span>
                </div>
             </div>
             <div className="w-48 h-48 relative flex items-center justify-center">
                <svg className="w-full h-full -rotate-90">
                  <circle cx="50%" cy="50%" r="70" className="fill-none stroke-white/5 stroke-[12]" />
                  <motion.circle 
                    cx="50%" cy="50%" r="70" 
                    className="fill-none stroke-purple-500 stroke-[12]"
                    strokeDasharray={440}
                    initial={{ strokeDashoffset: 440 }}
                    animate={isActive ? { strokeDashoffset: 440 - (0.88 * 440) } : {}}
                    transition={{ duration: 2, delay: 0.8 }}
                  />
                </svg>
                <div className="absolute flex flex-col items-center">
                  <span className="text-3xl font-black">88%</span>
                  <span className="text-[8px] uppercase font-bold tracking-widest text-white/30">Complete</span>
                </div>
             </div>
          </div>
        </motion.div>

        {/* High Load Inventories */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isActive ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="glass p-10 rounded-[3rem] border-purple-500/20 bg-purple-500/5 space-y-8"
        >
          <div className="flex items-center gap-3">
            <TrendingUp className="w-6 h-6 text-purple-400" />
            <span className="text-sm font-black uppercase tracking-widest">High-Load Inventories</span>
          </div>
          <div className="space-y-6">
            {[
              { label: "Healthcare Summit", brands: 42 },
              { label: "SaaS Growth Expo", brands: 38 },
              { label: "Fintech Connect", brands: 31 }
            ].map((inv, i) => (
              <div key={i} className="group cursor-default">
                <div className="flex justify-between items-center mb-1">
                  <span className="text-xs font-bold text-white/70 group-hover:text-white transition-colors">{inv.label}</span>
                  <span className="text-sm font-black text-purple-400">{inv.brands} Brands</span>
                </div>
                <div className="w-full h-1 bg-white/10 rounded-full">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={isActive ? { width: `${(inv.brands / 42) * 100}%` } : {}}
                    transition={{ duration: 1, delay: 1.2 + i * 0.1 }}
                    className="h-full bg-purple-500"
                  />
                </div>
              </div>
            ))}
          </div>
          <div className="pt-4 flex justify-center">
             <div className="flex items-center gap-2 text-[10px] uppercase font-bold text-white/20 tracking-[0.2em]">
               <Sparkles className="w-3 h-3" />
               Ownership Excellence
             </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProcessOwnerSlide;
