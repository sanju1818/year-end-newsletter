
import React, { useRef, useState } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import { 
  Package, Users, TrendingUp, Briefcase, ArrowRight, Zap, Target, 
  CheckSquare, Calendar, UserPlus, UserMinus, Building2, 
  Database, Layers, FileText, ClipboardCheck, Sparkles, BookOpen 
} from 'lucide-react';
import Background from './components/Background';
import IntroSlide from './slides/IntroSlide';
import RoleMetricSlide from './components/RoleMetricSlide';
import FutureSlide from './slides/FutureSlide';
import { StatCard, PodiumLeaderboard, ProgressRing, FunnyCallout, MonarchSpotlight } from './components/UIElements';
import BrandSplitter from './components/BrandSplitter';
import CountUp from './components/CountUp';

/**
 * THE 2025 REWIND DATA ENGINE
 */
const platformData = {
  // 1. Inventory
  new_inventories: 384,
  inventory_decks: 840,
  case_studies: 142,
  top_5_inventories: [
    { name: "Global Tech Summit", score: 142 },
    { name: "BCCI Elite Lounge", score: 128 },
    { name: "Digital Sky 2025", score: 116 },
    { name: "Future Finance", score: 94 },
    { name: "Brand Hub BLR", score: 82 }
  ],
  
  // 2. Events
  new_events: 1240,
  event_decks: 1140,
  top_5_events: [
    { name: "Cannes Lions Meet", score: "96%" },
    { name: "T20 World Cup", score: "92%" },
    { name: "CES Vegas", score: "88%" },
    { name: "Dubai Fintech", score: "84%" },
    { name: "London Retail Expo", score: "79%" }
  ],
  
  // 3. Brands
  new_brands: 512,
  assigned_brands: 426,
  unassigned_brands: 86,
  
  // 4. POCs (THE CURRENCY)
  new_pocs: 4850,
  monarch_name: "Sneha R",
  monarch_avatar: "https://i.pravatar.cc/150?u=sneha",
  monarch_contacts: 50,
  monarch_narrative: "Market dominance isn't a goal, it's the standard. She owned the conversation and turned connections into a high-intent conversion engine.",
  
  // 5. Tasks (THE GRIND)
  total_tasks_created: 8639,
  total_tasks_closed: 7170,
  execution_rate: 83,
  
  // 6. Features (THE BRAIN)
  features_built: 18,
  top_5_features: [
    { name: "Brand News", score: "96%" },
    { name: "Task Management", score: "92%" },
    { name: "Newsletter Insights", score: "88%" },
    { name: "Smart Chat", score: "84%" },
    { name: "Lead Automation", score: "79%" }
  ],

  // 7. Elite
  top_closers: [
    { name: "Sneha R", score: 142, avatarUrl: "https://i.pravatar.cc/150?u=sneha" },
    { name: "Rajesh K", score: 128, avatarUrl: "https://i.pravatar.cc/150?u=rajesh" },
    { name: "Arun V", score: 116, avatarUrl: "https://i.pravatar.cc/150?u=arun" },
    { name: "Neha S", score: 104, avatarUrl: "https://i.pravatar.cc/150?u=neha" },
    { name: "Vikram M", score: 92, avatarUrl: "https://i.pravatar.cc/150?u=vikram" }
  ]
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
    containerRef.current?.scrollTo({ top: index * (containerRef.current.clientHeight || 0), behavior: 'smooth' });
  };

  const slides = [
    { id: 'intro', content: <IntroSlide isActive={activeSlide === 0} /> },

    // SECTION 1: INVENTORY (METRICS)
    { id: 'inventory-metrics', content: <RoleMetricSlide isActive={activeSlide === 1} roleLabel="THE SUPPLY" heading={<>The factory reached <span className="text-blue-500">Full Velocity.</span></>} roleColorClass="text-blue-500">
        <div className="flex flex-col gap-8 w-full h-full justify-center max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <StatCard value={platformData.new_inventories} label="ACQUIRED" colorClass="text-blue-500" highlight />
            <StatCard value={12} label="CHURNED" colorClass="text-rose-500" />
          </div>
          <div className="space-y-2">
            <FunnyCallout text="384 New Assets added to the portfolio." delay={0.8} />
            <FunnyCallout text="12 churned. We're focusing on High-LTV Strategic accounts now anyway." delay={1.0} color="border-rose-500/20" />
          </div>
        </div>
    </RoleMetricSlide> },

    // SECTION 2: INVENTORY (LEADERBOARD)
    { id: 'inventory-leaderboard', content: <RoleMetricSlide isActive={activeSlide === 2} roleLabel="THE SUPPLY RANKINGS" heading={<>Inventory with the highest <span className="text-blue-400">Deal Conversion.</span></>} roleColorClass="text-blue-400">
        <div className="flex flex-col justify-center w-full h-full">
          <span className="text-[11px] uppercase font-[900] tracking-[0.4em] text-white/20 mb-8 block ml-6">TOP PERFORMANCE ASSETS</span>
          <PodiumLeaderboard colorClass="text-blue-500" items={platformData.top_5_inventories} />
        </div>
    </RoleMetricSlide> },

    // SECTION 3: EVENTS (METRICS)
    { id: 'events-metrics', content: <RoleMetricSlide isActive={activeSlide === 3} roleLabel="THE ACTIVATION" heading={<>Handshakes turned into <span className="text-indigo-500">Engines.</span></>} roleColorClass="text-indigo-500">
        <div className="flex flex-col gap-8 w-full h-full justify-center max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <StatCard value={platformData.new_events} label="LIVE EVENTS ACTIVATED" colorClass="text-indigo-500" highlight />
            <StatCard value={platformData.event_decks} label="DECKS ADDED" colorClass="text-white/40" />
          </div>
          <div className="space-y-2">
            <FunnyCallout text="1,240 Events successfully activated." delay={0.8} color="border-indigo-500/40" />
            <FunnyCallout text="Every single handshake was backed by a precision sales deck." delay={1.0} color="border-white/10" />
          </div>
        </div>
    </RoleMetricSlide> },

    // SECTION 4: EVENTS (LEADERBOARD)
    { id: 'events-leaderboard', content: <RoleMetricSlide isActive={activeSlide === 4} roleLabel="THE ACTIVATION RANKINGS" heading={<>Elite Venues for <span className="text-indigo-400">High-Value Conversion.</span></>} roleColorClass="text-indigo-400">
        <div className="flex flex-col justify-center w-full h-full">
          <span className="text-[11px] uppercase font-[900] tracking-[0.4em] text-white/20 mb-8 block ml-6">PEAK EVENT CONVERSION ENGINES</span>
          <PodiumLeaderboard colorClass="text-indigo-400" items={platformData.top_5_events} />
        </div>
    </RoleMetricSlide> },

    // SECTION 5: BRANDS
    { id: 'brands', content: <RoleMetricSlide isActive={activeSlide === 5} roleLabel="THE REVENUE SURFACE" heading={<>Conquering the entire <span className="text-emerald-500">Market Surface.</span></>} roleColorClass="text-emerald-500">
        <BrandSplitter total={platformData.new_brands} assigned={platformData.assigned_brands} unassigned={platformData.unassigned_brands} isActive={activeSlide === 5} />
    </RoleMetricSlide> },

    // SECTION 6: POCs
    { id: 'pocs', content: <RoleMetricSlide isActive={activeSlide === 6} roleLabel="THE CURRENCY" heading={<>The Relationship <span className="text-purple-500">Monarch.</span></>} roleColorClass="text-purple-500">
        <div className="w-full flex items-center justify-center">
          <MonarchSpotlight 
            name={platformData.monarch_name}
            avatar={platformData.monarch_avatar}
            narrative={platformData.monarch_narrative}
            value={platformData.monarch_contacts}
            label="PERSONALLY CONNECTED POCs"
            isActive={activeSlide === 6}
          />
        </div>
    </RoleMetricSlide> },

    // SECTION 7: TASKS (THE GRIND)
    { id: 'tasks', content: <RoleMetricSlide isActive={activeSlide === 7} roleLabel="THE GRIND" heading={<>The daily grind met its <span className="text-blue-500">Absolute Match.</span></>} roleColorClass="text-blue-500">
        <div className="flex flex-col gap-10 w-full justify-center">
          <div className="flex flex-col lg:flex-row gap-6 items-stretch justify-center w-full max-w-7xl mx-auto">
            <div className="grid grid-cols-2 gap-4 flex-[1.2]">
              <StatCard value={platformData.total_tasks_created} label="TASKS GENERATED" colorClass="text-blue-500" highlight />
              <StatCard value={platformData.total_tasks_closed} label="TASKS COMPLETED" colorClass="text-blue-400" />
            </div>
            <div className="flex-1 min-w-[340px]">
              <ProgressRing progress={platformData.execution_rate} label="OPERATIONAL EXECUTION RATE" colorClass="text-blue-400" />
            </div>
          </div>
          <FunnyCallout text="8,639 Actions processed. Operational friction reduced by 22%." delay={0.8} />
        </div>
    </RoleMetricSlide> },

    // SECTION 8: FEATURES (METRICS)
    { id: 'features-metrics', content: <RoleMetricSlide isActive={activeSlide === 8} roleLabel="THE BRAIN" heading={<>Habit evolved into absolute <span className="text-indigo-400">Dominance.</span></>} roleColorClass="text-indigo-400">
        <div className="flex flex-col gap-8 w-full h-full justify-center max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <StatCard value={platformData.features_built} label="POWER UPGRADES" colorClass="text-indigo-400" highlight />
            <StatCard value={94} label="ADOPTION %" colorClass="text-white/40" suffix="%" />
          </div>
          <FunnyCallout text="Manual friction removed. Adoption is the only KPI that feeds the family." delay={0.8} color="border-indigo-400/40" />
        </div>
    </RoleMetricSlide> },

    // SECTION 9: FEATURES (LEADERBOARD)
    { id: 'features-leaderboard', content: <RoleMetricSlide isActive={activeSlide === 9} roleLabel="THE BRAIN RANKINGS" heading={<>Dominant System <span className="text-indigo-300">Force Multipliers.</span></>} roleColorClass="text-indigo-300">
        <div className="flex flex-col justify-center w-full h-full">
          <span className="text-[11px] uppercase font-[900] tracking-[0.4em] text-white/20 mb-8 block ml-6">MOST ADOPTED CAPABILITIES</span>
          <PodiumLeaderboard colorClass="text-indigo-400" items={platformData.top_5_features} />
        </div>
    </RoleMetricSlide> },

    // SECTION 10: ELITE (METRICS)
    { id: 'elite-metrics', content: <RoleMetricSlide isActive={activeSlide === 10} roleLabel="THE ELITE" heading={<>The Elite claimed their <span className="text-blue-500">Victory.</span></>} roleColorClass="text-blue-500">
        <div className="flex flex-col gap-8 w-full h-full justify-center max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <StatCard value={186} label="WINS SECURED" colorClass="text-blue-500" highlight />
            <StatCard value={41} label="EFFICIENCY UP" colorClass="text-emerald-500" suffix="%" />
          </div>
          <FunnyCallout text="186 Wins secured. These elite units are now the primary revenue drivers." delay={0.8} />
        </div>
    </RoleMetricSlide> },

    // SECTION 11: ELITE (LEADERBOARD)
    { id: 'elite-leaderboard', content: <RoleMetricSlide isActive={activeSlide === 11} roleLabel="THE ELITE RANKINGS" heading={<>Supreme Revenue <span className="text-blue-400">Commanders.</span></>} roleColorClass="text-blue-400">
        <div className="flex flex-col justify-center w-full h-full px-4">
          <span className="text-[11px] uppercase font-[900] tracking-[0.4em] text-white/20 mb-8 block ml-6">2025 DEAL CLOSER HALL OF FAME</span>
          <PodiumLeaderboard colorClass="text-blue-500" items={platformData.top_closers} />
        </div>
    </RoleMetricSlide> },

    // SECTION 12: FUTURE
    { id: 'future', content: <FutureSlide isActive={activeSlide === 12} onRestart={goToStart} /> }
  ];

  return (
    <div className="relative h-screen w-full bg-black text-white overflow-hidden">
      <Background />
      <motion.div className="fixed top-0 left-0 right-0 h-1 bg-white/20 z-50 origin-left" style={{ scaleX }} />
      <div className="fixed right-6 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-3">
        {slides.map((_, index) => (
          <button key={index} onClick={() => scrollToSlide(index)} className="group relative flex items-center justify-end">
            <motion.div
              animate={{
                width: activeSlide === index ? 12 : 4,
                height: 4,
                backgroundColor: activeSlide === index ? 'rgba(156, 163, 175, 0.6)' : 'rgba(255, 255, 255, 0.1)',
                opacity: activeSlide === index ? 1 : 0.5
              }}
              className="rounded-full transition-all duration-300 group-hover:bg-white/30"
            />
          </button>
        ))}
      </div>
      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="fixed top-6 left-8 z-50 pointer-events-none">
        <div className="w-auto h-16 px-6 rounded-2xl bg-white/[0.04] border border-white/10 flex items-center justify-center backdrop-blur-xl">
           <img src="https://itwuniverse.com/wp-content/uploads/2023/11/itw-universe-logo.png" alt="ITW Universe" className="h-10 w-auto object-contain brightness-110 shadow-lg" />
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
