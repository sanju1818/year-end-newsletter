
import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon, Crown, ArrowRight, AlertCircle, TrendingUp, User, Trophy, Star, Medal, Zap } from 'lucide-react';
import CountUp from './CountUp';

export const PremiumFeatureCard: React.FC<{
  title: string;
  description: string;
  value: number;
  label: string;
  badgeText: string;
  colorClass: string;
  delay?: number;
}> = ({ title, description, value, label, badgeText, colorClass, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
    className="w-full max-w-5xl glass rounded-[3rem] border-white/10 p-4 md:p-6 flex flex-col md:flex-row items-center gap-8 group"
  >
    {/* Left Side: Content */}
    <div className="flex-[1.5] flex flex-col items-start px-8 py-6">
      <div className="bg-black/60 border border-white/10 rounded-full px-4 py-1.5 flex items-center gap-2 mb-8">
        <Zap className="w-3.5 h-3.5 text-yellow-500 fill-yellow-500/20" />
        <span className="text-[10px] font-black uppercase tracking-[0.25em] text-white/80">{badgeText}</span>
      </div>
      
      <h3 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tight group-hover:translate-x-1 transition-transform duration-500">
        {title}
      </h3>
      
      <p className="text-lg md:text-xl text-white/40 font-medium max-w-md leading-relaxed">
        {description}
      </p>
    </div>

    {/* Right Side: Inset Metric Box */}
    <div className="flex-1 w-full h-full p-2">
      <div className="h-full min-h-[220px] bg-white/[0.02] border border-white/5 rounded-[2.5rem] flex flex-col items-center justify-center relative overflow-hidden group-hover:border-white/15 transition-all duration-700">
        <div className={`absolute inset-0 opacity-[0.03] blur-3xl ${colorClass.replace('text-', 'bg-')} scale-150`} />
        
        <div className="relative z-10 flex flex-col items-center">
          <CountUp to={value} suffix="%" className={`text-7xl md:text-8xl font-black ${colorClass} tracking-tighter`} />
          <span className="text-[10px] uppercase font-black tracking-[0.4em] text-white/30 mt-4">
            {label}
          </span>
        </div>

        {/* Shimmer Effect */}
        <motion.div 
          animate={{ x: ['-100%', '200%'] }}
          transition={{ duration: 3, repeat: Infinity, repeatDelay: 5 }}
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-12 pointer-events-none"
        />
      </div>
    </div>
  </motion.div>
);

export const StatCard: React.FC<{
  icon?: LucideIcon;
  value: number;
  label: string;
  suffix?: string;
  colorClass: string;
  delay?: number;
  warning?: boolean;
}> = ({ icon: Icon, value, label, suffix = '', colorClass, delay = 0, warning = false }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={`glass p-8 rounded-[2rem] border-white/5 flex flex-col items-start gap-4 min-w-[280px] group transition-all duration-500 ${warning ? 'border-rose-500/30' : ''}`}
    >
      <div className="flex w-full justify-between items-start">
        {Icon && (
          <div className={`w-12 h-12 rounded-2xl flex items-center justify-center bg-black/40 border border-white/10 ${warning ? 'text-rose-500' : colorClass}`}>
            <Icon className="w-6 h-6" />
          </div>
        )}
        {warning && (
          <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/20">
            <AlertCircle className="w-3 h-3 text-rose-500" />
            <span className="text-[8px] font-black uppercase text-rose-500 tracking-widest">Needs Action</span>
          </div>
        )}
      </div>
      <div className="flex flex-col">
        <CountUp to={value} suffix={suffix} className={`text-6xl font-[950] tracking-tighter ${warning ? 'text-rose-500' : colorClass}`} />
        <span className="text-[10px] uppercase font-black tracking-[0.4em] text-white/30 mt-2">
          {label}
        </span>
      </div>
    </motion.div>
  );
};

export const PersonHighlight: React.FC<{
  name: string;
  role: string;
  colorClass: string;
  delay?: number;
}> = ({ name, role, colorClass, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ delay, duration: 1 }}
    className="flex items-center gap-6 glass p-6 pr-10 rounded-[2.5rem] border-white/10 bg-white/[0.02] shadow-2xl"
  >
    <div className={`w-16 h-16 rounded-full flex items-center justify-center font-black text-2xl border bg-black/40 ${colorClass.replace('text-', 'border-').replace('500', '500/30')} ${colorClass}`}>
      {name.split(' ').map(n => n[0]).join('')}
    </div>
    <div className="flex flex-col">
      <span className="text-2xl font-black text-white uppercase tracking-tight">{name}</span>
      <span className={`text-[10px] font-black uppercase tracking-[0.2em] mt-1 ${colorClass.replace('500', '400/60')}`}>{role}</span>
    </div>
  </motion.div>
);

export const MemberList: React.FC<{
  members: Array<{ name: string; date: string }>;
  colorClass: string;
  delay?: number;
}> = ({ members, colorClass, delay = 0 }) => (
  <div className="flex flex-col gap-4 max-h-[400px] overflow-y-auto pr-4 scrollbar-hide">
    {members.map((member, idx) => (
      <motion.div
        key={idx}
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: delay + (idx * 0.1), duration: 0.5 }}
        className="flex items-center gap-4 p-4 glass rounded-2xl border-white/5 hover:bg-white/[0.05] transition-colors"
      >
        <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center">
          <User className="w-5 h-5 text-white/20" />
        </div>
        <div className="flex flex-col">
          <span className="text-sm font-bold text-white">{member.name}</span>
          <span className="text-[9px] uppercase font-black text-white/20 tracking-widest">Joined {member.date}</span>
        </div>
      </motion.div>
    ))}
  </div>
);

export const StatPair: React.FC<{
  leftValue: number;
  leftLabel: string;
  rightValue: number;
  rightLabel: string;
  colorClass: string;
  delay?: number;
}> = ({ leftValue, leftLabel, rightValue, rightLabel, colorClass, delay = 0 }) => (
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

export const PodiumLeaderboard: React.FC<{
  items: Array<{ name: string; score: number | string }>;
  colorClass: string;
  delay?: number;
}> = ({ items, colorClass, delay = 0 }) => {
  // Enforce Rank 1 -> Rank 5 order (tallest on left)
  const displayItems = items.slice(0, 5);

  return (
    <div className="flex items-end gap-3 md:gap-4 w-full max-w-6xl mt-12">
      {displayItems.map((item, index) => {
        const actualRank = index + 1;
        const isGold = actualRank === 1;
        const isSilver = actualRank === 2;
        const isBronze = actualRank === 3;
        
        const rankStyles = {
          1: { 
            height: '420px', 
            accent: 'text-yellow-400', 
            bg: 'bg-gradient-to-t from-yellow-500/30 via-white/[0.08] to-transparent',
            border: 'border-yellow-500/50',
            glow: 'shadow-[0_0_60px_rgba(234,179,8,0.3)]',
            icon: <Crown className="w-7 h-7 text-yellow-500 drop-shadow-[0_0_10px_rgba(234,179,8,0.8)]" />
          },
          2: { 
            height: '340px', 
            accent: 'text-slate-300', 
            bg: 'bg-gradient-to-t from-slate-400/15 via-white/[0.04] to-transparent',
            border: 'border-slate-400/40',
            glow: 'shadow-[0_0_40px_rgba(203,213,225,0.15)]',
            icon: <Medal className="w-6 h-6 text-slate-300" />
          },
          3: { 
            height: '280px', 
            accent: 'text-orange-500', 
            bg: 'bg-gradient-to-t from-orange-900/15 via-white/[0.03] to-transparent',
            border: 'border-orange-900/30',
            glow: 'shadow-[0_0_30px_rgba(194,65,12,0.1)]',
            icon: <Medal className="w-6 h-6 text-orange-600" />
          },
          4: { height: '210px', accent: 'text-white/60', bg: 'bg-white/[0.04]', border: 'border-white/10', glow: '', icon: null },
          5: { height: '160px', accent: 'text-white/40', bg: 'bg-white/[0.02]', border: 'border-white/5', glow: '', icon: null }
        }[actualRank as 1|2|3|4|5];

        return (
          <motion.div
            key={actualRank}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: delay + (index * 0.1), duration: 0.8, ease: "easeOut" }}
            className="flex-1 flex flex-col items-center group relative"
          >
            {/* Rank Indicator Badge */}
            <div className="mb-4 flex flex-col items-center h-16 justify-end">
              {rankStyles.icon ? (
                <motion.div 
                  animate={isGold ? { y: [0, -6, 0], scale: [1, 1.1, 1] } : {}}
                  transition={{ duration: 4, repeat: Infinity }}
                  className={`w-14 h-14 rounded-full flex items-center justify-center z-10 ${rankStyles.bg} border ${rankStyles.border} ${rankStyles.glow} backdrop-blur-md`}
                >
                  {rankStyles.icon}
                </motion.div>
              ) : (
                <div className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                  <span className="text-[10px] font-black text-white/30">{actualRank}</span>
                </div>
              )}
            </div>

            {/* Podium Column */}
            <div 
              className={`w-full rounded-t-[2.5rem] border transition-all duration-700 flex flex-col items-center justify-center px-4 gap-2 backdrop-blur-sm overflow-hidden relative ${rankStyles.bg} ${rankStyles.border} ${rankStyles.glow} group-hover:bg-white/[0.12]`}
              style={{ height: rankStyles.height }}
            >
              {/* Premium Shimmering Sheen */}
              {(isGold || isSilver || isBronze) && (
                <motion.div
                  initial={{ x: '-150%' }}
                  animate={{ x: '150%' }}
                  transition={{ duration: 3.5, repeat: Infinity, repeatDelay: 3 }}
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.08] to-transparent skew-x-12 pointer-events-none"
                />
              )}

              <span className={`text-[11px] md:text-sm font-black uppercase text-center tracking-tight leading-tight px-2 ${actualRank <= 3 ? 'text-white' : 'text-white/40'}`}>
                {item.name}
              </span>
              
              <div className="flex flex-col items-center">
                <CountUp 
                  to={Number(item.score)} 
                  className={`${isGold ? 'text-6xl md:text-[5rem]' : isSilver ? 'text-5xl md:text-6xl' : 'text-4xl md:text-5xl'} font-black ${rankStyles.accent} tracking-tighter`} 
                />
                <span className={`text-[9px] font-black uppercase tracking-[0.2em] mt-1 ${actualRank <= 3 ? 'text-white/40' : 'text-white/10'}`}>
                  Deals Closed
                </span>
              </div>

              {/* Special Gold Base Glow */}
              {isGold && (
                <motion.div
                  animate={{ opacity: [0.15, 0.4, 0.15] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute bottom-0 left-0 w-full h-2/3 bg-gradient-to-t from-yellow-500/20 to-transparent pointer-events-none"
                />
              )}
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};

export const MetricPair: React.FC<{
  items: Array<{ value: number; label: string; suffix?: string; highlighted?: boolean }>;
  colorClass: string;
  delay?: number;
  showDivider?: boolean;
}> = ({ items, colorClass, delay = 0, showDivider = true }) => (
  <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ delay, duration: 0.8 }}
    className="flex items-center gap-12 md:gap-24 py-4"
  >
    {items.map((item, idx) => (
      <React.Fragment key={idx}>
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: delay + (idx * 0.3), duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col"
        >
          <CountUp 
            to={item.value} 
            suffix={item.suffix} 
            className={`text-7xl md:text-[8rem] font-black tracking-tighter ${item.highlighted ? colorClass : 'text-white'}`} 
          />
          <span className="text-[10px] md:text-xs uppercase font-black tracking-[0.4em] text-white/30 mt-3 max-w-[140px] leading-relaxed">
            {item.label}
          </span>
        </motion.div>
        {(showDivider && idx < items.length - 1) && (
          <motion.div 
            initial={{ height: 0 }}
            whileInView={{ height: 100 }}
            transition={{ delay: delay + 0.5, duration: 1 }}
            className="w-px bg-white/10 hidden md:block" 
          />
        )}
      </React.Fragment>
    ))}
  </motion.div>
);

export const ProgressRing: React.FC<{
  progress: number;
  label: string;
  colorClass: string;
  delay?: number;
}> = ({ progress, label, colorClass, delay = 0 }) => {
  const radius = 70;
  const circ = 2 * Math.PI * radius;
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ delay, duration: 1 }}
      className="flex items-center gap-10 glass p-10 rounded-[3rem] group hover:border-white/20 transition-all duration-700"
    >
      <div className="relative w-40 h-40 flex items-center justify-center">
        <svg className="w-full h-full -rotate-90">
          <circle cx="50%" cy="50%" r={radius} className="fill-none stroke-white/5 stroke-[16px]" />
          <motion.circle
            cx="50%" cy="50%" r={radius}
            className={`fill-none stroke-current stroke-[16px] ${colorClass}`}
            strokeDasharray={circ}
            initial={{ strokeDashoffset: circ }}
            whileInView={{ strokeDashoffset: circ - (progress / 100) * circ }}
            transition={{ delay: delay + 0.3, duration: 2.5, ease: [0.22, 1, 0.36, 1] }}
          />
        </svg>
        <div className="absolute flex flex-col items-center">
          <motion.span 
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="text-4xl font-black text-white"
          >
            {progress}%
          </motion.span>
        </div>
      </div>
      <div className="flex flex-col">
        <span className="text-2xl font-black text-white group-hover:text-white transition-colors">{label}</span>
        <span className="text-[10px] uppercase font-black tracking-widest text-white/30 mt-1">Status Report</span>
      </div>
    </motion.div>
  );
};
