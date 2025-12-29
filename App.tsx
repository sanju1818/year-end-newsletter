
import React, { useRef, useState } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import { Package, Users, TrendingUp, Briefcase, ArrowRight, Zap, Target, Shield, Trophy, CheckSquare, Calendar, Target as TargetIcon, Star, MousePointer2, UserPlus, UserMinus, Building2, Flame, Map, Users2 } from 'lucide-react';
import Background from './components/Background';
import IntroSlide from './slides/IntroSlide';
import RoleMetricSlide from './components/RoleMetricSlide';
import FutureSlide from './slides/FutureSlide';
import { StatCard, StatPair, PodiumLeaderboard, ProgressRing, MetricPair, PersonHighlight, MemberList, PremiumFeatureCard } from './components/UIElements';
import PremiumWaveLine from './components/PremiumWaveLine';
import DotGrid from './components/DotGrid';
import CountUp from './components/CountUp';

/**
 * PLATFORM-WIDE ECOSYSTEM METRICS (2025)
 * Collective achievements across the ITW Universe.
 */
const platformData = {
  // 1. People Movement
  new_employees: 142,
  deactivated_employees: 28,
  
  // 2. Brand Expansion
  new_brands: 512,
  brands_offloaded: 84,
  
  // 3. BO Assignment
  assigned_brands: 426,
  unassigned_brands: 86,
  
  // 4. Task Execution (Scaled to small digits as requested)
  total_tasks_created: 50,
  total_tasks_closed: 10,
  execution_rate: 20, // 10 out of 50
  
  // 5. POC Network
  new_pocs: 4850,
  pocs_removed: 920,
  
  // 6. Top Inventories
  top_inventories: [
    { name: "Global Summits", score: 84 },
    { name: "Tech Pavilions", score: 72 },
    { name: "Elite Lounges", score: 68 },
    { name: "Digital Sky", score: 54 },
    { name: "Brand Hubs", score: 42 }
  ],
  
  // 7. Verticals
  top_verticals: [
    { name: "ITW World", score: 94 },
    { name: "ITW India", score: 88 },
    { name: "ITW BLR", score: 82 },
    { name: "ITW Europe", score: 76 },
    { name: "ITW Asia", score: 71 }
  ],
  
  // 8. Deal Closers
  top_closers: [
    { name: "Sneha R", score: 142 },
    { name: "Rajesh K", score: 128 },
    { name: "Arun V", score: 116 },
    { name: "Neha S", score: 104 },
    { name: "Vikram M", score: 92 }
  ],
  
  // 9. Relationship Monarch
  monarch_name: "Sneha R",
  monarch_title: "Relationship Monarch",
  monarch_interactions: 1240,
  monarch_adoption: 94,
  
  // 10. Inventory Creation
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

  const slides = [
    // 0. INTRO
    <IntroSlide isActive={activeSlide === 0} />,
    
    // 1. PEOPLE MOVEMENT
    <RoleMetricSlide isActive={activeSlide === 1} roleLabel="EVOLUTION" heading="The pack evolved." roleColorClass="text-blue-500" styleNote="The team didn’t stay still this year. Growth and reshuffling define us.">
      <StatPair 
        leftValue={platformData.new_employees} 
        leftLabel="New employees added in 2025" 
        rightValue={platformData.deactivated_employees} 
        rightLabel="Employees deactivated in 2025" 
        colorClass="text-blue-500" 
        delay={0.8} 
      />
    </RoleMetricSlide>,

    // 2. BRAND EXPANSION
    <RoleMetricSlide isActive={activeSlide === 2} roleLabel="STRATEGY" heading="Pruning for dominance." roleColorClass="text-indigo-500" styleNote="Smart expansion meets strategic pruning. Quality over everything.">
      <div className="flex flex-col md:flex-row gap-12 items-center w-full">
        <StatCard icon={Building2} value={platformData.new_brands} label="New brands added" colorClass="text-indigo-500" delay={0.8} />
        <ArrowRight className="w-12 h-12 text-white/10 hidden md:block" />
        <StatCard icon={UserMinus} value={platformData.brands_offloaded} label="Brands offloaded" colorClass="text-white" delay={1.0} />
      </div>
    </RoleMetricSlide>,

    // 3. BO ASSIGNMENT STATUS
    <RoleMetricSlide isActive={activeSlide === 3} roleLabel="OPPORTUNITY" heading="Unclaimed territory." roleColorClass="text-emerald-500" styleNote="Some brands found owners. Some are still waiting for a closer.">
      <div className="flex flex-col gap-12 w-full">
        <div className="flex flex-col md:flex-row items-end gap-12 md:gap-24">
           <div className="flex flex-col">
              <CountUp to={platformData.new_brands} className="text-8xl md:text-9xl font-black text-white" delay={0.8} />
              <span className="text-[10px] uppercase font-black text-white/30 tracking-[0.4em]">New brands added</span>
           </div>
           <div className="hidden md:block w-px h-24 bg-white/10 mb-4" />
           <div className="flex flex-col gap-6">
              <div className="flex flex-col">
                <CountUp to={platformData.assigned_brands} className="text-5xl font-black text-emerald-500" delay={1.0} />
                <span className="text-[9px] uppercase font-black text-white/30 tracking-widest">Newly added brands assigned to BOs</span>
              </div>
              <div className="flex flex-col">
                <CountUp to={platformData.unassigned_brands} className="text-5xl font-black text-white" delay={1.2} />
                <span className="text-[9px] uppercase font-black text-white/30 tracking-widest">Newly added brands not yet assigned</span>
              </div>
           </div>
        </div>
        <PremiumWaveLine isActive={activeSlide === 3} color="#10b981" />
      </div>
    </RoleMetricSlide>,

    // 4. TASK EXECUTION ENGINE
    <RoleMetricSlide isActive={activeSlide === 4} roleLabel="EXECUTION" heading="Pure execution." roleColorClass="text-blue-500" styleNote="Tracking the journey from task initiation to final closure.">
      <div className="flex flex-col md:flex-row gap-16 items-center w-full">
         <ProgressRing progress={platformData.execution_rate} label="Task Completion Score" colorClass="text-blue-500" delay={0.8} />
         <div className="flex flex-col gap-4">
            <div className="flex flex-col">
              <span className="text-[10px] uppercase font-black text-white/30 tracking-widest">Team Output</span>
              <CountUp to={platformData.total_tasks_created} className="text-7xl font-black text-white" />
              <span className="text-xs font-bold text-blue-400">Total tasks created</span>
            </div>
            <div className="flex flex-col">
              <CountUp to={platformData.total_tasks_closed} className="text-7xl font-black text-white" />
              <span className="text-xs font-bold text-blue-400">Total tasks closed</span>
            </div>
         </div>
      </div>
    </RoleMetricSlide>,

    // 5. POC NETWORK CHANGES
    <RoleMetricSlide isActive={activeSlide === 5} roleLabel="NETWORK" heading="Sharpening the Rolodex." roleColorClass="text-purple-500" styleNote="Refining the network for quality. The Rolodex got sharper.">
      <div className="flex flex-col md:flex-row gap-12 items-center w-full">
        <StatCard icon={UserPlus} value={platformData.new_pocs} label="New POCs added in 2025" colorClass="text-purple-500" delay={0.8} />
        <StatCard icon={UserMinus} value={platformData.pocs_removed} label="POCs removed in 2025" colorClass="text-white/20" delay={1.0} />
      </div>
    </RoleMetricSlide>,

    // 6. TOP INVENTORIES (ProductSlide implicitly uses this data)
    <RoleMetricSlide isActive={activeSlide === 6} roleLabel="MARKET LEADERS" heading="Market-moving inventories." roleColorClass="text-indigo-500" styleNote="The heavy hitters of the year.">
      <div className="flex flex-col w-full">
        <div className="flex justify-start mb-8">
           <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={activeSlide === 6 ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 1.2 }}
            className="px-6 py-2.5 rounded-full bg-indigo-500/10 border border-indigo-500/30 flex items-center gap-3 backdrop-blur-sm"
           >
              <Star className="w-4 h-4 text-indigo-400 fill-indigo-400/20" />
              <span className="text-[11px] font-black uppercase tracking-[0.3em] text-white/80">Top 5 inventories with highest closed deals</span>
           </motion.div>
        </div>
        <PodiumLeaderboard colorClass="text-indigo-500" items={platformData.top_inventories} delay={0.8} />
      </div>
    </RoleMetricSlide>,

    // 7. TOP VERTICALS
    <RoleMetricSlide isActive={activeSlide === 7} roleLabel="TERRITORIES" heading="Dominant territories." roleColorClass="text-emerald-500" styleNote="Top 5 verticals by deals closed. Built different.">
      <div className="flex flex-col w-full">
        <div className="flex justify-start mb-8">
           <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={activeSlide === 7 ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 1.2 }}
            className="px-6 py-2.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center gap-3 backdrop-blur-sm"
           >
              <Map className="w-4 h-4 text-emerald-400 fill-emerald-400/20" />
              <span className="text-[11px] font-black uppercase tracking-[0.3em] text-white/80">Top 5 verticals by deals closed in 2025</span>
           </motion.div>
        </div>
        <PodiumLeaderboard colorClass="text-emerald-500" items={platformData.top_verticals} delay={0.8} />
      </div>
    </RoleMetricSlide>,

    // 8. TOP DEAL CLOSERS
    <RoleMetricSlide isActive={activeSlide === 8} roleLabel="ELITE" heading="The deal closers." roleColorClass="text-blue-500" styleNote="Top 5 employees by deals closed. These names earned it.">
      <div className="flex flex-col w-full">
        <div className="flex justify-start mb-8">
           <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={activeSlide === 8 ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 1.2 }}
            className="px-6 py-2.5 rounded-full bg-blue-500/10 border border-blue-500/30 flex items-center gap-3 backdrop-blur-sm"
           >
              <Trophy className="w-4 h-4 text-blue-400 fill-blue-400/20" />
              <span className="text-[11px] font-black uppercase tracking-[0.3em] text-white/80">Top 5 elite employees by deals closed</span>
           </motion.div>
        </div>
        <PodiumLeaderboard colorClass="text-blue-500" items={platformData.top_closers} delay={0.8} />
      </div>
    </RoleMetricSlide>,

    // 9. RELATIONSHIP MONARCH (Updated to match reference UI)
    <RoleMetricSlide isActive={activeSlide === 9} roleLabel="INFLUENCE" heading="The Relationship Monarch." roleColorClass="text-purple-500" styleNote="Employee with highest POC interactions via ITW CRM.">
      <div className="flex flex-col items-center w-full">
        <PremiumFeatureCard 
          title={platformData.monarch_name}
          description="Defined the relationship benchmark with record POC interactions across the ITW CRM system."
          value={platformData.monarch_adoption}
          label="Active Adoption"
          badgeText="Most Used Feature"
          colorClass="text-purple-500"
          delay={0.8}
        />
        <div className="mt-12 flex items-center gap-12 opacity-40">
           <div className="flex flex-col items-center">
              <span className="text-4xl font-black text-white">{platformData.monarch_interactions}</span>
              <span className="text-[10px] font-black uppercase tracking-widest">Total Interactions</span>
           </div>
           <div className="w-px h-12 bg-white/20" />
           <div className="flex flex-col items-center">
              <span className="text-4xl font-black text-white">#1</span>
              <span className="text-[10px] font-black uppercase tracking-widest">System Rank</span>
           </div>
        </div>
      </div>
    </RoleMetricSlide>,

    // 10. INVENTORY MOMENTUM
    <RoleMetricSlide isActive={activeSlide === 10} roleLabel="STRUCTURE" heading="Organizing the chaos." roleColorClass="text-indigo-500" styleNote="The ecosystem organized itself. Growth with structure.">
      <div className="flex flex-col gap-12 w-full">
        <div className="flex flex-col">
           <CountUp to={platformData.new_inventories} className="text-9xl font-black text-white" />
           <span className="text-sm font-bold text-indigo-400 italic">Total New Inventories Created in 2025</span>
        </div>
        <DotGrid isActive={activeSlide === 10} count={platformData.organization_excellence} />
      </div>
    </RoleMetricSlide>,

    // 11. FINAL WRAP-UP
    <FutureSlide isActive={activeSlide === 11} onRestart={goToStart} />
  ];

  return (
    <div className="relative h-screen w-full bg-black text-white overflow-hidden selection:bg-blue-500/30">
      <Background />
      
      {/* Progress Bar */}
      <motion.div className="fixed top-0 left-0 right-0 h-1 bg-white/20 z-50 origin-left" style={{ scaleX }} />

      {/* ITW Universe Brand Logo (Floating) */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="fixed top-6 left-8 z-50 flex items-center gap-3"
      >
        <div className="w-auto h-12 px-4 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-center backdrop-blur-md shadow-[0_0_20px_rgba(0,0,0,0.5)]">
           <img 
            src="itw-logo.png" 
            alt="ITW Universe" 
            className="h-8 w-auto object-contain"
          />
        </div>
      </motion.div>

      {/* Side Navigation Dots */}
      <div className="fixed right-8 top-1/2 -translate-y-1/2 flex flex-col items-center gap-4 z-40">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => containerRef.current?.scrollTo({ top: i * window.innerHeight, behavior: 'smooth' })}
            className="transition-all duration-500 ease-out group relative flex items-center justify-center"
          >
            {activeSlide === i ? (
              <motion.div layoutId="active-pill" className="w-[3px] h-6 bg-white rounded-full shadow-[0_0_8px_rgba(255,255,255,0.6)]" />
            ) : (
              <div className="w-[3px] h-[3px] bg-white/20 rounded-full group-hover:bg-white/50" />
            )}
          </button>
        ))}
      </div>

      <div ref={containerRef} onScroll={handleScroll} className="snap-container h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth scrollbar-hide">
        {slides.map((slide, index) => (
          <section key={index} className="h-screen w-full snap-start snap-always relative flex items-center overflow-hidden">
            <AnimatePresence mode="wait">
              {activeSlide === index && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.8 }} className="w-full h-full">
                  {slide}
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
