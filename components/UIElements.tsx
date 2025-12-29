
import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon, Crown, ArrowRight, AlertCircle, TrendingUp, User, Trophy, Star, Medal, Zap } from 'lucide-react';
import CountUp from './CountUp';

export const PremiumFeatureCard: React.FC<{
  title: string;
  description: string;
  value: number;
  label: string;
  avatarUrl?: string;
  badgeText?: string;
  showBadge?: boolean;
  suffix?: string;
  colorClass: string;
  delay?: number;
}> = ({ title, description, value, label, avatarUrl, badgeText, showBadge = true, suffix = '%', colorClass, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
    className="w-full max-w-5xl glass rounded-[3.5rem] border-white/5 p-4 md:p-6 flex flex-col md:flex-row items-center gap-4 group bg-black/40"
  >
    {/* Left Side: Content */}
    <div className="flex-[1.6] flex flex-col items-start px-10 py-8">
      {showBadge && badgeText && (
        <div className="bg-black/60 border border-white/10 rounded-full px-4 py-1.5 flex items-center gap-2 mb-8">
          <Zap className="w-3.5 h-3.5 text-yellow-500 fill-yellow-500/20" />
          <span className="text-[10px] font-black uppercase tracking-[0.25em] text-white/80">{badgeText}</span>
        </div>
      )}
      
      <div className="flex items-center gap-6 mb-6">
        {avatarUrl && (
          <motion.img 
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            src={avatarUrl}
            className={`w-16 h-16 md:w-24 md:h-24 rounded-full border-4 border-white/10 shadow-2xl object-cover ring-4 ${colorClass.replace('text-', 'ring-').replace('500', '500/20')}`}
          />
        )}
        <h3 className="text-4xl md:text-6xl font-black text-white tracking-tight group-hover:translate-x-1 transition-transform duration-700">
          {title}
        </h3>
      </div>
      
      <p className="text-lg md:text-xl text-white/40 font-medium max-w-xl leading-snug">
        {description}
      </p>
    </div>

    {/* Right Side: Inset Metric Box */}
    <div className="flex-1 w-full h-full p-2">
      <div className="h-full min-h-[260px] bg-white/[0.03] border border-white/10 rounded-[3rem] flex flex-col items-center justify-center relative overflow-hidden group-hover:bg-white/[0.05] transition-all duration-700">
        <div className={`absolute inset-0 opacity-[0.05] blur-3xl ${colorClass.replace('text-', 'bg-')} scale-150`} />
        
        <div className="relative z-10 flex flex-col items-center">
          <CountUp to={value} suffix={suffix} className={`text-8xl md:text-[7rem] font-black ${colorClass} tracking-tighter drop-shadow-[0_0_20px_rgba(255,255,255,0.1)]`} />
          <span className="text-[10px] md:text-xs uppercase font-black tracking-[0.3em] text-white/30 mt-6 text-center px-4 leading-relaxed">
            {label}
          </span>
        </div>

        {/* Shimmer Effect */}
        <motion.div 
          animate={{ x: ['-150%', '250%'] }}
          transition={{ duration: 4, repeat: Infinity, repeatDelay: 4 }}
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.04] to-transparent skew-x-12 pointer-events-none"
        />
      </div>
    </div>
  </motion.div>
);

export const PodiumLeaderboard: React.FC<{
  items: Array<{ name: string; score: number | string; avatarUrl?: string }>;
  colorClass: string;
  delay?: number;
}> = ({ items, colorClass, delay = 0 }) => {
  const displayItems = items.slice(0, 5);

  return (
    <div className="flex items-end gap-3 md:gap-4 w-full max-w-6xl mt-12">
      {displayItems.map((item, index) => {
        const actualRank = index + 1;
        const isGold = actualRank === 1;
        const rankStyles = {
          1: { height: '420px', accent: 'text-yellow-400', bg: 'bg-gradient-to-t from-yellow-500/30 via-white/[0.08] to-transparent', border: 'border-yellow-500/50', glow: 'shadow-[0_0_60px_rgba(234,179,8,0.3)]', icon: <Crown className="w-7 h-7 text-yellow-500" /> },
          2: { height: '340px', accent: 'text-slate-300', bg: 'bg-gradient-to-t from-slate-400/15 via-white/[0.04] to-transparent', border: 'border-slate-400/40', glow: 'shadow-[0_0_40px_rgba(203,213,225,0.15)]', icon: <Medal className="w-6 h-6 text-slate-300" /> },
          3: { height: '280px', accent: 'text-orange-500', bg: 'bg-gradient-to-t from-orange-900/15 via-white/[0.03] to-transparent', border: 'border-orange-900/30', glow: 'shadow-[0_0_30px_rgba(194,65,12,0.1)]', icon: <Medal className="w-6 h-6 text-orange-600" /> },
          4: { height: '210px', accent: 'text-white/60', bg: 'bg-white/[0.04]', border: 'border-white/10', glow: '', icon: null },
          5: { height: '160px', accent: 'text-white/40', bg: 'bg-white/[0.02]', border: 'border-white/5', glow: '', icon: null }
        }[actualRank as 1|2|3|4|5];

        return (
          <motion.div
            key={actualRank}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: delay + (index * 0.1), duration: 0.8 }}
            className="flex-1 flex flex-col items-center group relative"
          >
            {/* Floating Rank Icon - Outside and Above the bar */}
            <div className="h-16 flex items-center justify-center relative w-full">
               {rankStyles.icon && (
                <motion.div 
                  initial={{ y: 10, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ delay: delay + (index * 0.1) + 0.5 }}
                  className={`w-10 h-10 rounded-full flex items-center justify-center bg-black/80 border ${rankStyles.border} shadow-lg mb-2`}
                >
                  {rankStyles.icon}
                </motion.div>
              )}
            </div>

            {/* Podium Bar */}
            <div 
              className={`w-full rounded-t-[2.5rem] border flex flex-col items-center justify-center px-4 backdrop-blur-sm overflow-hidden relative ${rankStyles.bg} ${rankStyles.border} ${rankStyles.glow}`}
              style={{ height: rankStyles.height }}
            >
              <div className="flex flex-col items-center">
                {/* Profile Picture - Inside the bar, above the name */}
                {item.avatarUrl && (
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ delay: delay + (index * 0.1) + 0.3 }}
                    className="mb-3 relative"
                  >
                    <img 
                      src={item.avatarUrl}
                      className={`w-12 h-12 md:w-16 md:h-16 rounded-full border-2 border-white/20 object-cover shadow-2xl z-20 ${isGold ? 'ring-4 ring-yellow-500/30' : 'ring-2 ring-white/10'}`}
                    />
                    {isGold && <div className="absolute inset-0 rounded-full bg-yellow-500/20 blur-md -z-10" />}
                  </motion.div>
                )}

                <span className={`text-[10px] md:text-xs font-black uppercase text-center tracking-tight leading-tight px-2 mb-2 ${actualRank <= 3 ? 'text-white' : 'text-white/40'}`}>
                  {item.name}
                </span>
                
                <div className="flex flex-col items-center">
                  <CountUp to={Number(item.score)} className={`${isGold ? 'text-6xl md:text-[5rem]' : 'text-4xl md:text-5xl'} font-black ${rankStyles.accent} tracking-tighter`} />
                </div>
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};

export const ProgressRing: React.FC<{ progress: number; label: string; colorClass: string; delay?: number; }> = ({ progress, label, colorClass, delay = 0 }) => {
  const radius = 60;
  const circ = 2 * Math.PI * radius;
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ delay, duration: 1 }}
      className="flex items-center gap-10 glass p-10 rounded-[2.5rem] group min-h-[220px]"
    >
      <div className="relative w-32 h-32 flex items-center justify-center">
        <svg className="w-full h-full -rotate-90">
          <circle cx="50%" cy="50%" r={radius} className="fill-none stroke-white/5 stroke-[12px]" />
          <motion.circle
            cx="50%" cy="50%" r={radius}
            className={`fill-none stroke-current stroke-[12px] ${colorClass}`}
            strokeDasharray={circ}
            initial={{ strokeDashoffset: circ }}
            whileInView={{ strokeDashoffset: circ - (progress / 100) * circ }}
            transition={{ delay: delay + 0.3, duration: 2.5 }}
          />
        </svg>
        <div className="absolute flex flex-col items-center">
          <span className="text-3xl font-black text-white">{progress}%</span>
        </div>
      </div>
      <div className="flex flex-col">
        <span className="text-2xl font-black text-white">{label}</span>
        <span className="text-[10px] uppercase font-black tracking-widest text-white/30 mt-1">Status Report</span>
      </div>
    </motion.div>
  );
};

export const StatCard: React.FC<{ 
  icon?: LucideIcon; 
  value: number; 
  label: string; 
  suffix?: string; 
  colorClass: string; 
  delay?: number; 
  warning?: boolean; 
  highlight?: boolean;
}> = ({ icon: Icon, value, label, suffix = '', colorClass, delay = 0, warning = false, highlight = false }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay, duration: 0.8 }}
    className={`glass p-10 rounded-[2.5rem] border-white/5 flex flex-col items-start gap-4 min-w-[320px] min-h-[220px] group transition-all duration-500 
      ${warning ? 'border-rose-500/30' : ''} 
      ${highlight ? 'border-blue-500/40 bg-blue-500/5 shadow-[0_20px_40px_rgba(59,130,246,0.1)] ring-1 ring-blue-500/20' : ''}`}
  >
    <div className="flex w-full justify-between items-start">
      {Icon && (
        <div className={`w-12 h-12 rounded-2xl flex items-center justify-center bg-black/40 border border-white/10 ${warning ? 'text-rose-500' : colorClass}`}>
          <Icon className="w-6 h-6" />
        </div>
      )}
    </div>
    <div className="flex flex-col mt-auto">
      <CountUp to={value} suffix={suffix} className={`text-6xl font-[950] tracking-tighter ${warning ? 'text-rose-500' : colorClass}`} />
      <span className="text-[10px] uppercase font-black tracking-[0.4em] text-white/30 mt-2">{label}</span>
    </div>
  </motion.div>
);

export const StatPair: React.FC<{ leftValue: number; leftLabel: string; rightValue: number; rightLabel: string; colorClass: string; delay?: number; }> = ({ leftValue, leftLabel, rightValue, rightLabel, colorClass, delay = 0 }) => (
  <div className="flex items-center gap-16 md:gap-32">
    <div className="flex flex-col">
      <CountUp to={leftValue} className={`text-7xl md:text-9xl font-black tracking-tighter ${colorClass}`} delay={delay} />
      <span className="text-[10px] uppercase font-black tracking-[0.4em] text-white/30 mt-4">{leftLabel}</span>
    </div>
    <div className="w-px h-24 bg-white/10" />
    <div className="flex flex-col">
      <CountUp to={rightValue} className="text-7xl md:text-9xl font-black tracking-tighter text-white" delay={delay + 0.2} />
      <span className="text-[10px] uppercase font-black tracking-[0.4em] text-white/30 mt-4">{rightLabel}</span>
    </div>
  </div>
);
