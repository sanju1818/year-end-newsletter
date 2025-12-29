
import React, { useRef, useState } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import { Package, Users, TrendingUp, Briefcase, ArrowRight, Zap, Target, Shield, Trophy, CheckSquare, Calendar, Target as TargetIcon, Star, MousePointer2, UserPlus, UserMinus, Building2, Flame, Map, Users2 } from 'lucide-react';
import Background from './components/Background';
import IntroSlide from './slides/IntroSlide';
import RoleMetricSlide from './components/RoleMetricSlide';
import FutureSlide from './slides/FutureSlide';
import { StatCard, StatPair, PodiumLeaderboard, ProgressRing, PremiumFeatureCard } from './components/UIElements';
import PremiumWaveLine from './components/PremiumWaveLine';
import DotGrid from './components/DotGrid';
import CountUp from './components/CountUp';
import BrandSplitter from './components/BrandSplitter';

/**
 * PLATFORM-WIDE ECOSYSTEM METRICS (2025)
 */
const platformData = {
  new_employees: 142,
  deactivated_employees: 28,
  new_brands: 512,
  brands_offloaded: 84,
  assigned_brands: 426,
  unassigned_brands: 86,
  total_tasks_created: 50,
  total_tasks_closed: 10,
  execution_rate: 20,
  new_pocs: 4850,
  pocs_removed: 920,
  top_inventories: [
    { name: "Global Summits", score: 84 },
    { name: "Tech Pavilions", score: 72 },
    { name: "Elite Lounges", score: 68 },
    { name: "Digital Sky", score: 54 },
    { name: "Brand Hubs", score: 42 }
  ],
  top_verticals: [
    { name: "ITW World", score: 94 },
    { name: "ITW India", score: 88 },
    { name: "ITW BLR", score: 82 },
    { name: "ITW Europe", score: 76 },
    { name: "ITW Asia", score: 71 }
  ],
  top_closers: [
    { name: "Sneha R", score: 142, avatarUrl: "https://i.pravatar.cc/150?u=sneha" },
    { name: "Rajesh K", score: 128, avatarUrl: "https://i.pravatar.cc/150?u=rajesh" },
    { name: "Arun V", score: 116, avatarUrl: "https://i.pravatar.cc/150?u=arun" },
    { name: "Neha S", score: 104, avatarUrl: "https://i.pravatar.cc/150?u=neha" },
    { name: "Vikram M", score: 92, avatarUrl: "https://i.pravatar.cc/150?u=vikram" }
  ],
  monarch_name: "Sneha R",
  monarch_avatar: "https://i.pravatar.cc/150?u=sneha",
  monarch_title: "Relationship Monarch",
  monarch_interactions: 1240,
  monarch_poc_count: 50,
  new_inventories: 384,
  organization_excellence: 96,
};

const App: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeSlide, setActiveSlide] = useState(0);
  const { scrollYProgress } = useScroll({ container: containerRef });
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  const handleScroll = () => {
    if (!containerRef.current) return;
    const { scrollTop, clientHeight } = containerRef.current;
    const index = Math.round(scrollTop / clientHeight);
    if (index !== activeSlide) setActiveSlide(index);
  };

  const goToStart = () => containerRef.current?.scrollTo({ top: 0, behavior: 'smooth' });
  
  const scrollToSlide = (index: number) => {
    if (!containerRef.current) return;
    const { clientHeight } = containerRef.current;
    containerRef.current.scrollTo({ top: index * clientHeight, behavior: 'smooth' });
  };

  const slides = [
    { id: 'intro', content: <IntroSlide isActive={activeSlide === 0} /> },
    { id: 'evolution', content: <RoleMetricSlide isActive={activeSlide === 1} roleLabel="EVOLUTION" heading="The pack evolved." roleColorClass="text-blue-500" styleNote="THE PACK GREW STRONGER."><StatPair leftValue={platformData.new_employees} leftLabel="New employees added in 2025" rightValue={platformData.deactivated_employees} rightLabel="Employees deactivated in 2025" colorClass="text-blue-500" /></RoleMetricSlide> },
    { id: 'strategy', content: <RoleMetricSlide isActive={activeSlide === 2} roleLabel="STRATEGY" heading="Pruning for dominance." roleColorClass="text-indigo-500" styleNote="PRECISION OVER VOLUME."><div className="flex flex-col md:flex-row gap-12 items-center w-full"><StatCard icon={Building2} value={platformData.new_brands} label="New brands added" colorClass="text-indigo-500" /><ArrowRight className="w-12 h-12 text-white/10 hidden md:block" /><StatCard icon={UserMinus} value={platformData.brands_offloaded} label="Brands offloaded" colorClass="text-white" /></div></RoleMetricSlide> },
    { id: 'distribution', content: <RoleMetricSlide isActive={activeSlide === 3} roleLabel="DISTRIBUTION" heading="The Brand Ecosystem." roleColorClass="text-emerald-500" styleNote="MAPPING THE FUTURE."><div className="flex flex-col w-full"><BrandSplitter total={platformData.new_brands} assigned={platformData.assigned_brands} unassigned={platformData.unassigned_brands} isActive={activeSlide === 3} /><motion.p initial={{ opacity: 0 }} animate={activeSlide === 3 ? { opacity: 1 } : {}} transition={{ delay: 2 }} className="text-white/30 text-center font-bold uppercase tracking-widest text-xs mt-8">Analyzing ownership across the 2025 fleet</motion.p></div></RoleMetricSlide> },
    { id: 'execution', content: <RoleMetricSlide isActive={activeSlide === 4} roleLabel="EXECUTION" heading="Pure execution." roleColorClass="text-blue-500" styleNote="RESULTS ARE THE ONLY KPI."><div className="flex flex-col md:flex-row gap-10 items-stretch w-full justify-start overflow-x-visible"><div className="flex items-center gap-10"><StatCard icon={Calendar} value={platformData.total_tasks_created} label="Total Tasks Created" colorClass="text-blue-500" highlight={true} delay={0.2} /><div className="w-px h-32 bg-white/10 self-center" /></div><div className="flex items-center gap-10"><StatCard icon={CheckSquare} value={platformData.total_tasks_closed} label="Total Tasks Closed" colorClass="text-blue-400" delay={0.4} /><div className="w-px h-32 bg-white/10 self-center" /></div><ProgressRing progress={platformData.execution_rate} label="Task Completion Score" colorClass="text-blue-500" delay={0.6} /></div></RoleMetricSlide> },
    { id: 'network', content: <RoleMetricSlide isActive={activeSlide === 5} roleLabel="NETWORK" heading="Sharpening the Rolodex." roleColorClass="text-purple-500" styleNote="CONNECTIONS ARE CURRENCY."><div className="flex flex-col md:flex-row gap-12 items-center w-full"><StatCard icon={UserPlus} value={platformData.new_pocs} label="New POCs added in 2025" colorClass="text-purple-500" /><StatCard icon={UserMinus} value={platformData.pocs_removed} label="POCs removed in 2025" colorClass="text-white/20" /></div></RoleMetricSlide> },
    { id: 'inventories', content: <RoleMetricSlide isActive={activeSlide === 6} roleLabel="MARKET LEADERS" heading="Market-moving inventories." roleColorClass="text-indigo-500" styleNote="DOMINATING THE SHELF."><PodiumLeaderboard colorClass="text-indigo-500" items={platformData.top_inventories} /></RoleMetricSlide> },
    { id: 'verticals', content: <RoleMetricSlide isActive={activeSlide === 7} roleLabel="TERRITORIES" heading="Dominant territories." roleColorClass="text-emerald-500" styleNote="GLOBAL FOOTPRINT, LOCAL IMPACT."><PodiumLeaderboard colorClass="text-emerald-500" items={platformData.top_verticals} /></RoleMetricSlide> },
    { id: 'elite', content: <RoleMetricSlide isActive={activeSlide === 8} roleLabel="ELITE" heading="The deal closers." roleColorClass="text-blue-500" styleNote="THE GOLD STANDARD."><PodiumLeaderboard colorClass="text-blue-500" items={platformData.top_closers} /></RoleMetricSlide> },
    { id: 'monarch', content: <RoleMetricSlide isActive={activeSlide === 9} roleLabel="INFLUENCE" heading="The Relationship Monarch." roleColorClass="text-purple-500" styleNote="WHEN YOU ASK, PEOPLE SAY YES."><div className="flex flex-col items-center w-full justify-center"><PremiumFeatureCard title={platformData.monarch_name} avatarUrl={platformData.monarch_avatar} description="Market dominance isn't a goal, it's the standard. She owned the conversation and turned connections into a high-intent conversion engine." value={platformData.monarch_poc_count} label="Contacted POC via ITW CRM" showBadge={false} suffix="" colorClass="text-purple-500" /></div></RoleMetricSlide> },
    { id: 'structure', content: <RoleMetricSlide isActive={activeSlide === 10} roleLabel="STRUCTURE" heading="Organizing the chaos." roleColorClass="text-indigo-500" styleNote="ARCHITECTS OF GROWTH."><div className="flex flex-col gap-12 w-full"><div className="flex items-center gap-12"><CountUp to={platformData.new_inventories} className="text-9xl font-black text-white" /><div className="flex flex-col"><span className="text-xl font-black text-indigo-400">Total New Inventories</span><span className="text-[10px] uppercase font-black tracking-widest text-white/30">Architecture Scale 2025</span></div></div><div className="w-full"><PremiumWaveLine isActive={activeSlide === 10} color="#6366f1" /></div><DotGrid isActive={activeSlide === 10} count={platformData.organization_excellence} /></div></RoleMetricSlide> },
    { id: 'future', content: <FutureSlide isActive={activeSlide === 11} onRestart={goToStart} /> }
  ];

  return (
    <div className="relative h-screen w-full bg-black text-white overflow-hidden">
      <Background />
      <motion.div className="fixed top-0 left-0 right-0 h-1 bg-white/20 z-50 origin-left" style={{ scaleX }} />
      
      {/* Side Navigation Slider */}
      <div className="fixed right-8 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-4">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollToSlide(index)}
            className="group relative flex items-center justify-end"
          >
            <motion.div
              animate={{
                width: activeSlide === index ? 24 : 8,
                height: 8,
                backgroundColor: activeSlide === index ? 'rgba(156, 163, 175, 1)' : 'rgba(255, 255, 255, 0.2)',
                boxShadow: activeSlide === index ? '0 0 12px rgba(255, 255, 255, 0.15)' : 'none'
              }}
              className="rounded-full transition-all duration-300 group-hover:bg-white/40"
            />
            <span className="absolute right-10 text-[10px] font-black uppercase tracking-widest text-white/0 group-hover:text-white/40 transition-all duration-300 pointer-events-none whitespace-nowrap opacity-0 group-hover:opacity-100 group-hover:right-12">
              Slide {index + 1}
            </span>
          </button>
        ))}
      </div>

      {/* Premium Floating Brand Header */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="fixed top-6 left-8 z-50 pointer-events-none"
      >
        <div className="w-auto h-16 px-6 rounded-2xl bg-white/[0.04] border border-white/10 flex items-center justify-center backdrop-blur-xl shadow-[0_12px_40px_rgba(0,0,0,0.5)]">
           <img 
            src="https://itwuniverse.com/wp-content/uploads/2023/11/itw-universe-logo.png" 
            alt="ITW Universe" 
            className="h-10 w-auto object-contain brightness-110 drop-shadow-[0_4px_12px_rgba(59,130,246,0.3)]"
          />
        </div>
      </motion.div>

      <div ref={containerRef} onScroll={handleScroll} className="snap-container h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth scrollbar-hide">
        {slides.map((slide, index) => (
          <section key={index} className="h-screen w-full snap-start snap-always relative flex items-center overflow-hidden">
            <AnimatePresence mode="wait">
              {activeSlide === index && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.8 }} className="w-full h-full">
                  {slide.content}
                </motion.div>
              )}
            </AnimatePresence>
          </section>
        ))}
      </div>
    </div>
  );
};

export default App;
