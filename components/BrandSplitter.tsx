
import React from 'react';
import { motion } from 'framer-motion';
import { UserCheck, UserMinus, ShieldCheck } from 'lucide-react';
import CountUp from './CountUp';

interface BrandSplitterProps {
  total: number;
  assigned: number;
  unassigned: number;
  isActive: boolean;
}

const BrandSplitter: React.FC<BrandSplitterProps> = ({ total, assigned, unassigned, isActive }) => {
  return (
    <div className="relative w-full h-[400px] flex items-center justify-center py-12">
      <svg className="absolute inset-0 w-full h-full overflow-visible pointer-events-none">
        <defs>
          <filter id="glow-emerald">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
          <linearGradient id="grad-assigned" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(255,255,255,0.1)" />
            <stop offset="100%" stopColor="#10b981" />
          </linearGradient>
          <linearGradient id="grad-unassigned" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(255,255,255,0.1)" />
            <stop offset="100%" stopColor="rgba(255,255,255,0.4)" />
          </linearGradient>
        </defs>

        {/* Path to Assigned */}
        <motion.path
          d="M 150 200 C 350 200, 350 80, 550 80"
          fill="none"
          stroke="url(#grad-assigned)"
          strokeWidth="3"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={isActive ? { pathLength: 1, opacity: 1 } : {}}
          transition={{ duration: 1.5, ease: "easeInOut", delay: 0.5 }}
        />

        {/* Path to Unassigned */}
        <motion.path
          d="M 150 200 C 350 200, 350 320, 550 320"
          fill="none"
          stroke="url(#grad-unassigned)"
          strokeWidth="3"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={isActive ? { pathLength: 1, opacity: 1 } : {}}
          transition={{ duration: 1.5, ease: "easeInOut", delay: 0.5 }}
        />

        {/* Animated Particles */}
        {isActive && [0, 1].map((i) => (
          <motion.circle
            key={i}
            r="4"
            fill={i === 0 ? "#10b981" : "#ffffff"}
            filter="url(#glow-emerald)"
            initial={{ offsetDistance: "0%" }}
            animate={{ offsetDistance: "100%" }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              delay: 1.5 + (i * 0.5),
              ease: "linear"
            }}
            style={{
              offsetPath: i === 0 
                ? "path('M 150 200 C 350 200, 350 80, 550 80')" 
                : "path('M 150 200 C 350 200, 350 320, 550 320')"
            }}
          />
        ))}
      </svg>

      {/* Main Node (Root) */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={isActive ? { scale: 1, opacity: 1 } : {}}
        transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
        className="absolute left-[50px] top-[160px] z-20"
      >
        <div className="glass p-6 rounded-[2.5rem] border-white/20 bg-black/60 backdrop-blur-2xl flex flex-col items-center min-w-[180px] shadow-[0_0_50px_rgba(255,255,255,0.05)]">
          <ShieldCheck className="w-8 h-8 text-white/40 mb-3" />
          <CountUp to={total} className="text-6xl font-black text-white" />
          <span className="text-[10px] uppercase font-black text-white/30 tracking-[0.3em] mt-2">TERRITORY BRANDS CAPTURED</span>
        </div>
      </motion.div>

      {/* Assigned Node */}
      <motion.div
        initial={{ x: 50, opacity: 0 }}
        animate={isActive ? { x: 0, opacity: 1 } : {}}
        transition={{ delay: 1.2 }}
        className="absolute left-[550px] top-[30px] z-20"
      >
        <div className="glass p-6 rounded-[2rem] border-emerald-500/30 bg-emerald-500/5 backdrop-blur-xl flex items-center gap-6 min-w-[280px]">
          <div className="w-12 h-12 rounded-xl bg-emerald-500/20 flex items-center justify-center">
            <UserCheck className="w-6 h-6 text-emerald-400" />
          </div>
          <div className="flex flex-col">
            <CountUp to={assigned} className="text-4xl font-black text-emerald-400" />
            <span className="text-[10px] uppercase font-black text-white/30 tracking-widest">BRANDS SYNCED TO YOUR UNIT</span>
          </div>
        </div>
      </motion.div>

      {/* Unassigned Node */}
      <motion.div
        initial={{ x: 50, opacity: 0 }}
        animate={isActive ? { x: 0, opacity: 1 } : {}}
        transition={{ delay: 1.4 }}
        className="absolute left-[550px] top-[270px] z-20"
      >
        <div className="glass p-6 rounded-[2rem] border-white/10 bg-white/5 backdrop-blur-xl flex items-center gap-6 min-w-[280px]">
          <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
            <UserMinus className="w-6 h-6 text-white/40" />
          </div>
          <div className="flex flex-col">
            <CountUp to={unassigned} className="text-4xl font-black text-white" />
            <span className="text-[10px] uppercase font-black text-white/30 tracking-widest">UNASSIGNED FRONTIER OPS</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default BrandSplitter;
