
import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon, Crown, ArrowRight, AlertCircle, TrendingUp, User, Trophy, Star, Medal, Zap } from 'lucide-react';
import CountUp from './CountUp';

/**
 * SALES-FOCUSED HUMOROUS CALLOUT
 * Featured with a vertical line accent and italicized swagger.
 */
export const FunnyCallout: React.FC<{ text: string; delay?: number }> = ({ text, delay = 0 }) => (
  <motion.div 
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ delay, duration: 0.8 }}
    className="flex gap-5 items-stretch mt-8 ml-2 group"
  >
    <div className="w-[3px] bg-gradient-to-b from-blue-500 via-indigo-500/50 to-transparent rounded-full group-hover:from-white transition-all duration-700" />
    <p className="text-lg md:text-xl text-white/40 font-medium italic leading-relaxed py-1 max-w-sm group-hover:text-white/70 transition-colors duration-500">
      {text}
    </p>
  </motion.div>
);

/**
 * OLYMPIC PODIUM LEADERBOARD
 * Hierarchy: [Rank 5] [Rank 3] [Rank 1] [Rank 2] [Rank 4]
 */
export const PodiumLeaderboard: React.FC<{
  items: Array<{ name: string; score: number | string; avatarUrl?: string }>;
  colorClass: string;
  delay?: number;
}> = ({ items, colorClass, delay = 0 }) => {
  const displayItems = [...items].slice(0, 5);
  const olympicOrder = [4, 2, 0, 1, 3];

  return (
    <div className="flex items-end justify-center gap-1.5 md:gap-3 w-full px-2 mt-4 max-w-4xl">
      {olympicOrder.map((itemIndex) => {
        const item = displayItems[itemIndex];
        if (!item) return <div key={itemIndex} className="flex-1" />;

        const actualRank = itemIndex + 1;
        const isGold = actualRank === 1;

        const rankStyles = {
          1: { height: '340px', accent: 'text-yellow-400', bg: 'bg-gradient-to-t from-yellow-500/20 via-white/[0.08] to-transparent', border: 'border-yellow-500/40', glow: 'shadow-[0_0_60px_rgba(234,179,8,0.2)]', icon: <Crown className="w-8 h-8 text-yellow-500" /> },
          2: { height: '260px', accent: 'text-slate-300', bg: 'bg-gradient-to-t from-slate-400/10 via-white/[0.04] to-transparent', border: 'border-slate-400/30', glow: 'shadow-[0_0_40px_rgba(203,213,225,0.1)]', icon: <Medal className="w-5 h-5 text-slate-300" /> },
          3: { height: '220px', accent: 'text-orange-500', bg: 'bg-gradient-to-t from-orange-900/10 via-white/[0.03] to-transparent', border: 'border-orange-900/25', glow: 'shadow-[0_0_30px_rgba(194,65,12,0.08)]', icon: <Medal className="w-5 h-5 text-orange-600" /> },
          4: { height: '160px', accent: 'text-white/30', bg: 'bg-white/[0.02]', border: 'border-white/10', glow: '', icon: null },
          5: { height: '130px', accent: 'text-white/20', bg: 'bg-white/[0.01]', border: 'border-white/5', glow: '', icon: null }
        }[actualRank as 1|2|3|4|5];

        const isNumeric = !isNaN(Number(item.score));

        return (
          <motion.div
            key={actualRank}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: delay + (actualRank * 0.1), duration: 0.8 }}
            className="flex-1 flex flex-col items-center group relative min-w-0"
          >
            <div className="h-16 flex items-center justify-center relative w-full mb-1">
               {rankStyles.icon && (
                <motion.div 
                  initial={{ y: 5, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ delay: delay + (actualRank * 0.1) + 0.4 }}
                  className={`w-10 h-10 rounded-full flex items-center justify-center bg-black border ${rankStyles.border} shadow-2xl z-20`}
                >
                  {rankStyles.icon}
                </motion.div>
              )}
            </div>

            <div 
              className={`w-full rounded-t-[2.5rem] border flex flex-col items-center justify-center px-2 backdrop-blur-md overflow-hidden relative transition-all duration-700 group-hover:scale-[1.02] ${rankStyles.bg} ${rankStyles.border} ${rankStyles.glow}`}
              style={{ height: rankStyles.height }}
            >
              <div className="flex flex-col items-center text-center w-full relative z-10">
                {item.avatarUrl && (
                  <motion.img 
                    src={item.avatarUrl}
                    className={`w-10 h-10 rounded-full border border-white/10 object-cover shadow-xl mb-2 ${isGold ? 'ring-2 ring-yellow-500/20' : ''}`}
                  />
                )}

                <span className={`text-[8px] md:text-[9px] font-black uppercase tracking-tight leading-tight mb-2 px-1 block w-full truncate ${actualRank <= 3 ? 'text-white' : 'text-white/40'}`}>
                  {item.name}
                </span>
                
                <div className="flex flex-col items-center">
                  {isNumeric ? (
                    <CountUp to={Number(item.score)} className={`${actualRank <= 3 ? 'text-2xl md:text-3xl' : 'text-lg md:text-xl'} font-black ${rankStyles.accent} tracking-tighter`} />
                  ) : (
                    <span className={`${actualRank <= 3 ? 'text-2xl md:text-3xl' : 'text-lg md:text-xl'} font-black ${rankStyles.accent} tracking-tighter`}>
                      {item.score}
                    </span>
                  )}
                </div>
              </div>
              
              <span className="absolute -bottom-2 text-[4rem] font-black text-white/[0.02] select-none pointer-events-none italic">
                {actualRank}
              </span>
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
      className="flex-1 flex items-center gap-8 glass p-10 rounded-[2.5rem] group min-h-[220px]"
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
        <span className="text-[10px] uppercase font-black tracking-widest text-white/30 mt-1">Operational Health</span>
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
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay, duration: 0.8 }}
    className={`glass px-8 py-6 rounded-[2rem] border-white/5 flex items-center gap-6 w-full max-w-sm group transition-all duration-500 
      ${warning ? 'border-rose-500/30' : ''} 
      ${highlight ? 'border-blue-500/30 bg-blue-500/5 shadow-[0_15px_30px_rgba(59,130,246,0.1)] ring-1 ring-blue-500/10' : ''}`}
  >
    {Icon && (
      <div className={`w-12 h-12 rounded-2xl flex items-center justify-center bg-black/40 border border-white/10 ${warning ? 'text-rose-500' : colorClass}`}>
        <Icon className="w-6 h-6" />
      </div>
    )}
    <div className="flex flex-col">
      <CountUp to={value} suffix={suffix} className={`text-3xl md:text-4xl font-[950] tracking-tighter ${warning ? 'text-rose-500' : colorClass}`} />
      <span className="text-[9px] uppercase font-black tracking-[0.3em] text-white/30 mt-1">{label}</span>
    </div>
  </motion.div>
);

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

    <div className="flex-1 w-full h-full p-2">
      <div className="h-full min-h-[260px] bg-white/[0.03] border border-white/10 rounded-[3rem] flex flex-col items-center justify-center relative overflow-hidden group-hover:bg-white/[0.05] transition-all duration-700">
        <div className={`absolute inset-0 opacity-[0.05] blur-3xl ${colorClass.replace('text-', 'bg-')} scale-150`} />
        
        <div className="relative z-10 flex flex-col items-center">
          <CountUp to={value} suffix={suffix} className={`text-8xl md:text-[7rem] font-black ${colorClass} tracking-tighter drop-shadow-[0_0_20px_rgba(255,255,255,0.1)]`} />
          <span className="text-[10px] md:text-xs uppercase font-black tracking-[0.3em] text-white/30 mt-6 text-center px-4 leading-relaxed">
            {label}
          </span>
        </div>

        <motion.div 
          animate={{ x: ['-150%', '250%'] }}
          transition={{ duration: 4, repeat: Infinity, repeatDelay: 4 }}
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.04] to-transparent skew-x-12 pointer-events-none"
        />
      </div>
    </div>
  </motion.div>
);
