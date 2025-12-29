
import React from 'react';
import { motion } from 'framer-motion';

interface BarData {
  label: string;
  value: number;
  highlight?: boolean;
}

interface GlowBarChartProps {
  data: BarData[];
  isActive: boolean;
  color?: string;
}

const GlowBarChart: React.FC<GlowBarChartProps> = ({ data, isActive, color = "#a855f7" }) => {
  const max = Math.max(...data.map(d => d.value));

  return (
    <div className="flex items-end justify-center gap-6 h-72 md:h-96 w-full px-4">
      {data.map((bar, i) => (
        <div key={i} className="flex flex-col items-center flex-1 max-w-[70px] group">
          <div className="relative w-full h-full flex flex-col justify-end">
            <motion.div
              initial={{ height: 0 }}
              animate={isActive ? { height: `${(bar.value / max) * 100}%` } : {}}
              transition={{ duration: 1.8, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
              className={`w-full rounded-t-2xl relative overflow-hidden transition-all duration-700 ${
                bar.highlight 
                  ? `bg-gradient-to-t from-black/80 to-${color.replace('#','')} shadow-[0_0_50px_rgba(168,85,247,0.25)]` 
                  : 'bg-white/[0.03] group-hover:bg-white/[0.08]'
              }`}
              style={bar.highlight ? { backgroundColor: color } : {}}
            >
              {/* Internal Rising Sheen */}
              <motion.div 
                initial={{ y: '100%' }}
                animate={isActive ? { y: '-100%' } : {}}
                transition={{ duration: 2, delay: i * 0.15 + 0.5, ease: "linear" }}
                className="absolute inset-0 bg-gradient-to-b from-transparent via-white/10 to-transparent pointer-events-none"
              />
              
              {bar.highlight && (
                <div className="absolute -top-14 left-1/2 -translate-x-1/2 whitespace-nowrap">
                   <motion.div 
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={isActive ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 1.5, type: "spring" }}
                    className="flex flex-col items-center"
                   >
                     <span className="text-3xl font-black text-white">{bar.value.toLocaleString()}</span>
                     <motion.div 
                       animate={{ height: [0, 8, 0] }}
                       transition={{ duration: 2, repeat: Infinity }}
                       className="w-[2px] bg-white/40 rounded-full mt-1"
                     />
                   </motion.div>
                </div>
              )}
            </motion.div>
          </div>
          <motion.span 
            initial={{ opacity: 0 }}
            animate={isActive ? { opacity: 1 } : {}}
            transition={{ delay: 0.8 + i * 0.05 }}
            className="text-[10px] uppercase font-black text-white/20 mt-6 tracking-[0.2em] group-hover:text-white/60 transition-colors"
          >
            {bar.label}
          </motion.span>
        </div>
      ))}
    </div>
  );
};

export default GlowBarChart;
