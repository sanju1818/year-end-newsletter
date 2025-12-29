
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
import { StatCard, PodiumLeaderboard, ProgressRing, FunnyCallout } from './components/UIElements';
import BrandSplitter from './components/BrandSplitter';
import CountUp from './components/CountUp';

/**
 * THE 2025 REWIND DATA ENGINE
 * Optimized for split-layout storytelling with a dash of sales humor.
 */
const platformData = {
  // 1. Inventory (The Supply)
  new_inventories: 384,
  inventories_closed: 312,
  inventory_decks: 840,
  case_studies: 142,
  top_5_inventories: [
    { name: "Global Tech Summit", score: 142, avatarUrl: "" },
    { name: "BCCI Elite Lounge", score: 128, avatarUrl: "" },
    { name: "Digital Sky 2025", score: 116, avatarUrl: "" },
    { name: "Future Finance", score: 94, avatarUrl: "" },
    { name: "Brand Hub BLR", score: 82, avatarUrl: "" }
  ],
  
  // 2. Events (The Activation)
  new_events: 1240,
  events_completed: 1120,
  event_decks: 1140,
  top_5_events: [
    { name: "Cannes Lions Meet", score: "96%", avatarUrl: "" },
    { name: "T20 World Cup Activation", score: "92%", avatarUrl: "" },
    { name: "CES Vegas Pavilion", score: "88%", avatarUrl: "" },
    { name: "Dubai Fintech Week", score: "84%", avatarUrl: "" },
    { name: "London Retail Expo", score: "79%", avatarUrl: "" }
  ],
  
  // 3. Brands (The Revenue Surface)
  new_brands: 512,
  brands_offloaded: 84,
  assigned_brands: 426,
  unassigned_brands: 86,
  
  // 4. POCs (The Currency)
  new_pocs: 4850,
  pocs_removed: 920,
  monarch_name: "Sneha R",
  monarch_avatar: "https://i.pravatar.cc/150?u=sneha",
  monarch_poc_count: 1240,
  
  // 5. Tasks (The Grind)
  total_tasks_created: 8640,
  total_tasks_closed: 7171,
  execution_rate: 83,
  
  // 6. Features (The Brain)
  features_built: 18,
  top_5_features: [
    { name: "Lead Automation", score: "94%", avatarUrl: "" },
    { name: "Global Search", score: "88%", avatarUrl: "" },
    { name: "Smart Filters", score: "82%", avatarUrl: "" },
    { name: "Bulk POC Sync", score: "76%", avatarUrl: "" },
    { name: "Asset Vault", score: "71%", avatarUrl: "" }
  ],

  // 7. Elite Leaderboards
  top_closers: [
    { name: "Sneha R", score: 142, avatarUrl: "https://i.pravatar.cc/150?u=sneha" },
    { name: "Rajesh K", score: 128, avatarUrl: "https://i.pravatar.cc/150?u=rajesh" },
    { name: "Arun V", score: 116, avatarUrl: "https://i.pravatar.cc/150?u=arun" },
    { name: "Neha S", score: 104, avatarUrl: "https://i.pravatar.cc/150?u=neha" },
    { name: "Vikram M", score: 92, avatarUrl: "https://i.pravatar.cc/150?u=vikram" }
  ]
};

const VerticalDivider = () => (
  <div className="hidden lg:flex flex-col items-center h-full py-20 px-4">
    <div className="w-px h-full bg-gradient-to-b from-transparent via-white/10 to-transparent relative">
      <motion.div 
        animate={{ y: ["0%", "400%"] }}
        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        className="absolute top-0 -left-[1px] w-[3px] h-24 bg-blue-500 blur-[3px]"
      />
    </div>
  </div>
);

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

    // SECTION 1: INVENTORY (The Factory)
    { id: 'inventory', content: <RoleMetricSlide 
        isActive={activeSlide === 1} 
        roleLabel="THE SUPPLY" 
        heading="The factory was busy." 
        roleColorClass="text-blue-500" 
        styleNote="SHELVES WERE STOCKED. DEALS FOLLOWED.">
        <div className="flex flex-col lg:flex-row gap-8 w-full h-full items-start">
          {/* Left: Metrics + Callout */}
          <div className="flex-1 flex flex-col gap-5 justify-center h-full">
            <StatCard icon={Database} value={platformData.new_inventories} label="Inventories Born" colorClass="text-blue-500" highlight />
            <StatCard icon={FileText} value={platformData.inventory_decks} label="Strategic Decks" colorClass="text-white/40" />
            <StatCard icon={BookOpen} value={platformData.case_studies} label="Success Stories" colorClass="text-blue-400" />
            <FunnyCallout text="Shelves are stocked. Pipeline is primed. Now, go sell something before the finance team starts asking questions." delay={0.8} />
          </div>
          
          <VerticalDivider />

          {/* Right: Leaderboard */}
          <div className="flex-[1.5] flex flex-col justify-center h-full pl-4">
            <span className="text-[10px] uppercase font-black tracking-[0.3em] text-white/20 mb-8 block ml-6">The High-Capacity Vaults</span>
            <PodiumLeaderboard colorClass="text-blue-500" items={platformData.top_5_inventories} />
          </div>
        </div>
    </RoleMetricSlide> },

    // SECTION 2: EVENTS (The Activation)
    { id: 'events', content: <RoleMetricSlide 
        isActive={activeSlide === 2} 
        roleLabel="THE ACTIVATION" 
        heading="Momentum, not noise." 
        roleColorClass="text-indigo-500" 
        styleNote="NOT MEETINGS. MOMENTUM.">
        <div className="flex flex-col lg:flex-row gap-8 w-full h-full items-start">
          <div className="flex-1 flex flex-col gap-5 justify-center h-full">
            <StatCard icon={Calendar} value={platformData.new_events} label="Engagement Points" colorClass="text-indigo-500" highlight />
            <StatCard icon={Layers} value={platformData.event_decks} label="Pitch Decks Delivered" colorClass="text-white/40" />
            <FunnyCallout text="Not just expensive coffee sessions—most of these actually resulted in signed contracts. Or at least high-intent handshakes." delay={0.8} />
          </div>
          
          <VerticalDivider />

          <div className="flex-[1.5] flex flex-col justify-center h-full pl-4">
            <span className="text-[10px] uppercase font-black tracking-[0.3em] text-white/20 mb-8 block ml-6">The Lead Accelerators</span>
            <PodiumLeaderboard colorClass="text-indigo-400" items={platformData.top_5_events} />
          </div>
        </div>
    </RoleMetricSlide> },

    // SECTION 3: BRANDS (The Fleet)
    { id: 'brands', content: <RoleMetricSlide 
        isActive={activeSlide === 3} 
        roleLabel="THE REVENUE SURFACE" 
        heading="Brands came in hot." 
        roleColorClass="text-emerald-500" 
        styleNote="SMART EXPANSION, ZERO CHAOS.">
        <div className="flex flex-col lg:flex-row gap-8 w-full h-full items-center">
          <div className="flex-1">
             <BrandSplitter 
                total={platformData.new_brands} 
                assigned={platformData.assigned_brands} 
                unassigned={platformData.unassigned_brands} 
                isActive={activeSlide === 3} 
              />
          </div>
          <VerticalDivider />
          <div className="flex-1 flex flex-col justify-center pr-12">
            <FunnyCallout text="Managing brands is like a gym membership: some we work out every day, others we just like having on the list for the flex." />
            <p className="mt-8 text-white/20 text-sm italic ml-4">Current Capacity: Optimized.</p>
          </div>
        </div>
    </RoleMetricSlide> },

    // SECTION 4: POCs (The Relationships)
    { id: 'pocs', content: <RoleMetricSlide 
        isActive={activeSlide === 4} 
        roleLabel="THE CURRENCY" 
        heading="We collect POCs." 
        roleColorClass="text-purple-500" 
        styleNote="RELATIONSHIP SELLING ISN'T DEAD.">
        <div className="flex flex-col lg:flex-row gap-8 w-full h-full items-center">
          <div className="flex-1 flex flex-col gap-6">
            <StatCard icon={UserPlus} value={platformData.new_pocs} label="Human Capital Added" colorClass="text-purple-500" highlight />
            <StatCard icon={UserMinus} value={platformData.pocs_removed} label="The Purge" colorClass="text-white/20" />
            <FunnyCallout text="Relationship selling isn't dead; it's just digitized and tracked in Salesforce... sorry, ITW CRM. Scrubbing the pipe is self-care." delay={0.8} />
          </div>
          <VerticalDivider />
          <div className="flex-1 p-12 bg-white/[0.02] border border-white/5 rounded-[4rem]">
            <p className="text-3xl font-black text-white leading-tight mb-8">"You didn't just network. You built an empire."</p>
            <div className="flex items-center gap-6">
               <img src={platformData.monarch_avatar} className="w-16 h-16 rounded-full ring-4 ring-purple-500/20" />
               <div>
                  <span className="text-purple-400 font-black text-xl">{platformData.monarch_name}</span>
                  <p className="text-[10px] text-white/30 uppercase tracking-widest">The Relationship Monarch</p>
               </div>
            </div>
          </div>
        </div>
    </RoleMetricSlide> },

    // SECTION 5: TASKS (The Grind)
    { id: 'tasks', content: <RoleMetricSlide 
        isActive={activeSlide === 5} 
        roleLabel="THE GRIND" 
        heading="Tasks exited." 
        roleColorClass="text-blue-500" 
        styleNote="IF IT'S NOT IN THE CRM, IT DIDN'T HAPPEN.">
        <div className="flex flex-col lg:flex-row gap-8 items-center w-full h-full">
          <div className="flex-1 h-full flex flex-col justify-center">
            <StatCard icon={ClipboardCheck} value={platformData.total_tasks_created} label="Items Logged" colorClass="text-blue-500" highlight />
            <FunnyCallout text="Time kills all deals. Cutting the dead weight kept the forecast accuracy high. Your hygiene is lookin' sharp." delay={0.8} />
          </div>
          <VerticalDivider />
          <div className="flex-1 h-full flex flex-col justify-center">
             <ProgressRing progress={platformData.execution_rate} label="Operational Health" colorClass="text-blue-400" />
          </div>
        </div>
    </RoleMetricSlide> },

    // SECTION 6: FEATURES (The Brain)
    { id: 'features', content: <RoleMetricSlide 
        isActive={activeSlide === 6} 
        roleLabel="THE BRAIN" 
        heading="Habits, not just code." 
        roleColorClass="text-indigo-400" 
        styleNote="BUILT IT. USED IT. LOVED IT.">
        <div className="flex flex-col lg:flex-row gap-8 w-full h-full items-start">
          <div className="flex-1 flex flex-col gap-6 justify-center h-full">
            <StatCard icon={Zap} value={platformData.features_built} label="System Upgrades" colorClass="text-indigo-400" highlight />
            <FunnyCallout text="We built these so you could spend less time typing and more time closing. Adoption is the only KPI that actually feeds the family." delay={0.8} />
          </div>
          
          <VerticalDivider />

          <div className="flex-[1.5] flex flex-col justify-center h-full pl-4">
            <span className="text-[10px] uppercase font-black tracking-[0.3em] text-white/20 mb-8 block ml-6">Workflow Game-Changers</span>
            <PodiumLeaderboard colorClass="text-indigo-400" items={platformData.top_5_features} />
          </div>
        </div>
    </RoleMetricSlide> },

    // SECTION 7: ELITE LEADERBOARDS
    { id: 'elite', content: <RoleMetricSlide 
        isActive={activeSlide === 7} 
        roleLabel="THE ELITE" 
        heading="Receipts don't lie." 
        roleColorClass="text-blue-500" 
        styleNote="THE GOLD STANDARD.">
        <div className="flex flex-col lg:flex-row gap-8 w-full h-full items-start">
          <div className="flex-1 flex flex-col gap-6 justify-center h-full">
            <StatCard icon={Target} value={platformData.total_tasks_closed} label="Leads to Closed-Won" colorClass="text-blue-500" highlight />
            <FunnyCallout text="Receipts don't lie. But forecasts sometimes do. These closers proved the former with absolute authority." delay={0.8} />
          </div>
          
          <VerticalDivider />

          <div className="flex-[2] flex flex-col justify-center h-full pl-4">
             <span className="text-[10px] uppercase font-black tracking-[0.3em] text-white/20 mb-12 block ml-6">The High-Intent Closers of 2025</span>
            <PodiumLeaderboard colorClass="text-blue-500" items={platformData.top_closers} />
          </div>
        </div>
    </RoleMetricSlide> },

    // SECTION 8: FUTURE
    { id: 'future', content: <FutureSlide isActive={activeSlide === 8} onRestart={goToStart} /> }
  ];

  return (
    <div className="relative h-screen w-full bg-black text-white overflow-hidden">
      <Background />
      <motion.div className="fixed top-0 left-0 right-0 h-1 bg-white/20 z-50 origin-left" style={{ scaleX }} />
      
      {/* Side Navigation Slider */}
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
