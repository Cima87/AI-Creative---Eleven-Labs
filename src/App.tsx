/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect, useRef } from 'react';
import { Play, Pause, ArrowDown, Mail, Linkedin, Twitter, ChevronLeft, ChevronRight } from 'lucide-react';

const Hero = ({ showScrollPrompt }: { showScrollPrompt: boolean }) => {
  return (
    <section className="h-screen w-full flex flex-col items-center justify-center bg-black text-white overflow-hidden relative shrink-0">
      {/* Video Background */}
      <div className="absolute inset-0 z-0 opacity-40">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="w-full h-full object-cover"
        >
          <source src="https://assets.mixkit.co/videos/preview/mixkit-abstract-technology-connection-background-27896-large.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="z-10 text-center px-4 max-w-5xl">
        <motion.h1 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter mb-6"
        >
          AI CREATIVE
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-xl md:text-3xl text-gray-300 font-light"
        >
          An application for ElevenLabs.
        </motion.p>
      </div>
      <AnimatePresence>
        {showScrollPrompt && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="absolute bottom-10 z-10 flex flex-col items-center animate-bounce"
          >
            <span className="text-sm uppercase tracking-widest mb-2">Scroll to explore</span>
            <ArrowDown size={24} />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

const About = () => {
  return (
    <section className="h-screen w-full bg-zinc-900 text-white flex items-center justify-center p-8 md:p-24 overflow-hidden shrink-0">
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="aspect-[4/5] md:aspect-square w-full relative rounded-2xl overflow-hidden">
          <img src="https://picsum.photos/seed/portrait1/800/1000" alt="Portrait" className="object-cover w-full h-full grayscale hover:grayscale-0 transition-all duration-700" />
        </div>
        <div className="flex flex-col justify-center">
          <h2 className="text-5xl md:text-7xl font-bold mb-8 tracking-tighter">THE CREATOR</h2>
          <div className="space-y-6 text-lg md:text-xl text-gray-400 font-light leading-relaxed">
            <p>
              I am a multidisciplinary AI Creative specializing in generative visual arts, audio synthesis, and immersive storytelling. 
            </p>
            <p>
              My professional background spans across traditional filmmaking, digital design, and cutting-edge machine learning applications. I bridge the gap between human emotion and artificial intelligence.
            </p>
            <div className="pt-8 border-t border-zinc-800 mt-8">
              <h3 className="text-2xl text-white font-medium mb-4">EXPERIENCE</h3>
              <ul className="space-y-4">
                <li className="flex justify-between border-b border-zinc-800/50 pb-2">
                  <span className="text-white">Senior AI Artist</span>
                  <span>2024 - Present</span>
                </li>
                <li className="flex justify-between border-b border-zinc-800/50 pb-2">
                  <span className="text-white">Creative Director</span>
                  <span>2021 - 2024</span>
                </li>
                <li className="flex justify-between pb-2">
                  <span className="text-white">VFX Supervisor</span>
                  <span>2018 - 2021</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Podcast = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  
  return (
    <section className="h-screen w-full bg-black text-white flex items-center justify-center overflow-hidden relative shrink-0">
      {/* Background Image - Joe Rogan Studio Fake */}
      <div className="absolute inset-0 z-0 opacity-40">
        <img src="https://picsum.photos/seed/joerogan/1920/1080" alt="Podcast Studio" className="w-full h-full object-cover blur-sm scale-105" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/30" />
      </div>
      
      <div className="z-10 max-w-4xl w-full px-6 flex flex-col items-center text-center">
        <div className="mb-8 inline-block px-4 py-1 border border-red-600 text-red-500 rounded-full text-sm font-bold tracking-widest uppercase bg-black/50 backdrop-blur-sm">
          The Joe Rogan Experience
        </div>
        <h2 className="text-5xl md:text-7xl font-bold mb-6 tracking-tighter">THE ELEVENLABS PITCH</h2>
        <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl font-light italic">
          "So, explain to me how you're using AI to change the way we tell stories. Because what you're doing with voice and visuals... it's wild, man. Why ElevenLabs?"
        </p>
        
        <button 
          onClick={() => setIsPlaying(!isPlaying)}
          className="w-24 h-24 md:w-32 md:h-32 bg-red-600 rounded-full flex items-center justify-center hover:bg-red-700 hover:scale-105 transition-all duration-300 shadow-[0_0_40px_rgba(220,38,38,0.4)]"
        >
          {isPlaying ? <Pause size={48} className="text-white" /> : <Play size={48} className="text-white ml-2" />}
        </button>
        
        <div className="mt-12 w-full max-w-md h-2 bg-zinc-800 rounded-full overflow-hidden">
          <div className={`h-full bg-red-600 transition-all duration-[10000ms] ease-linear ${isPlaying ? 'w-full' : 'w-0'}`} />
        </div>
        <p className="mt-4 text-sm text-gray-400 uppercase tracking-widest">
          {isPlaying ? 'Playing Episode #2145...' : 'Click to play audio pitch'}
        </p>
      </div>
    </section>
  );
};

const Gallery = () => {
  return (
    <section className="h-screen w-full bg-zinc-950 text-white flex flex-col justify-center px-4 md:px-12 overflow-hidden shrink-0">
      <div className="max-w-7xl mx-auto w-full">
        <h2 className="text-4xl md:text-6xl font-bold mb-8 tracking-tighter">VISUAL SYNTHESIS</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 h-[60vh]">
          {/* Large featured image */}
          <div className="col-span-2 row-span-2 rounded-xl overflow-hidden group relative">
            <img src="https://picsum.photos/seed/aiart1/800/800" alt="Art 1" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <span className="text-white font-medium tracking-widest uppercase text-sm border border-white/30 px-4 py-2 rounded-full backdrop-blur-sm">Cinematic Generation</span>
            </div>
          </div>
          {/* Smaller images */}
          {[2, 3, 4, 5].map((i) => (
            <div key={i} className="rounded-xl overflow-hidden group relative">
              <img src={`https://picsum.photos/seed/aiart${i}/400/400`} alt={`Art ${i}`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white font-medium tracking-widest uppercase text-xs border border-white/30 px-3 py-1 rounded-full backdrop-blur-sm">Project 0{i}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const VideoShowcase = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = window.innerWidth * 0.5;
      scrollContainerRef.current.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="h-screen w-full bg-zinc-900 text-white flex flex-col justify-center overflow-hidden shrink-0">
      <div className="w-full">
        <div className="flex justify-between items-end mb-8 max-w-7xl mx-auto px-4 md:px-12">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter">MOTION & SOUND</h2>
          <div className="flex gap-2">
            <button onClick={() => scroll('left')} className="p-2 rounded-full border border-zinc-700 hover:bg-zinc-800 transition-colors">
              <ChevronLeft size={24} />
            </button>
            <button onClick={() => scroll('right')} className="p-2 rounded-full border border-zinc-700 hover:bg-zinc-800 transition-colors">
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
        
        <div 
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-8 px-4 md:px-12 xl:px-[calc((100vw-80rem)/2)] [&::-webkit-scrollbar]:hidden"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="snap-center shrink-0 w-[85vw] md:w-[45vw] lg:w-[30vw] aspect-[16/9] bg-black rounded-xl overflow-hidden relative group">
              <img 
                src={`https://picsum.photos/seed/video${i}/800/450`} 
                alt={`Video Thumbnail ${i}`} 
                className="w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity duration-500"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 group-hover:scale-110 transition-transform duration-300 cursor-pointer">
                  <Play size={24} className="text-white ml-1" />
                </div>
              </div>
              <div className="absolute bottom-0 left-0 p-6 w-full bg-gradient-to-t from-black/80 to-transparent pointer-events-none">
                <h3 className="text-xl font-medium">Campaign 0{i}</h3>
                <p className="text-sm text-gray-400 mt-1">AI Video • ElevenLabs Audio</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section className="h-screen w-full bg-black text-white flex flex-col items-center justify-center p-8 shrink-0">
      <div className="max-w-4xl w-full text-center">
        <h2 className="text-6xl md:text-9xl font-bold mb-8 tracking-tighter">LET'S TALK.</h2>
        <p className="text-xl md:text-3xl text-gray-400 font-light mb-16 max-w-2xl mx-auto">
          Ready to push the boundaries of AI creativity at ElevenLabs.
        </p>
        
        <div className="flex flex-wrap justify-center gap-6 mb-24">
          <a href="mailto:hello@example.com" className="flex items-center gap-3 px-8 py-4 bg-white text-black rounded-full font-medium hover:bg-gray-200 transition-colors">
            <Mail size={20} />
            Email Me
          </a>
          <a href="#" className="flex items-center gap-3 px-8 py-4 border border-zinc-800 rounded-full font-medium hover:bg-zinc-900 transition-colors">
            <Linkedin size={20} />
            LinkedIn
          </a>
          <a href="#" className="flex items-center gap-3 px-8 py-4 border border-zinc-800 rounded-full font-medium hover:bg-zinc-900 transition-colors">
            <Twitter size={20} />
            Twitter
          </a>
        </div>
        
        <div className="text-sm text-gray-600 flex flex-col items-center gap-2">
          <p>© 2026 AI Creative Portfolio.</p>
          <p>Built for the ElevenLabs Application.</p>
        </div>
      </div>
    </section>
  );
};

export default function App() {
  const [activeSection, setActiveSection] = useState(0);
  const [showScrollPrompt, setShowScrollPrompt] = useState(false);
  const isLockedRef = useRef(true);
  const touchStart = useRef({ x: 0, y: 0 });
  const totalSections = 6;

  useEffect(() => {
    // Initial 3-second lock
    const timer = setTimeout(() => {
      isLockedRef.current = false;
      setShowScrollPrompt(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (activeSection === 0) return;

    // Lock scrolling for 1.5 seconds when entering a new section
    isLockedRef.current = true;
    const timer = setTimeout(() => {
      isLockedRef.current = false;
    }, 1500);
    return () => clearTimeout(timer);
  }, [activeSection]);

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      // Ignore horizontal scrolling (e.g., trackpad swiping left/right in the video section)
      if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) return;

      if (isLockedRef.current) return;
      if (Math.abs(e.deltaY) < 30) return; // Threshold for trackpads

      if (e.deltaY > 0 && activeSection < totalSections - 1) {
        isLockedRef.current = true;
        setActiveSection(prev => prev + 1);
      } else if (e.deltaY < 0 && activeSection > 0) {
        isLockedRef.current = true;
        setActiveSection(prev => prev - 1);
      }
    };

    const handleTouchStart = (e: TouchEvent) => {
      touchStart.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (isLockedRef.current) return;
      
      const deltaX = touchStart.current.x - e.touches[0].clientX;
      const deltaY = touchStart.current.y - e.touches[0].clientY;

      if (Math.abs(deltaX) > Math.abs(deltaY)) return; // Horizontal swipe

      if (Math.abs(deltaY) > 50) {
        if (deltaY > 0 && activeSection < totalSections - 1) {
          isLockedRef.current = true;
          setActiveSection(prev => prev + 1);
        } else if (deltaY < 0 && activeSection > 0) {
          isLockedRef.current = true;
          setActiveSection(prev => prev - 1);
        }
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('touchstart', handleTouchStart, { passive: false });
    window.addEventListener('touchmove', handleTouchMove, { passive: false });

    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
    };
  }, [activeSection]);

  return (
    <main className="h-screen w-full overflow-hidden bg-black font-sans selection:bg-red-600 selection:text-white">
      <motion.div 
        className="flex flex-col w-full h-full"
        animate={{ y: `-${activeSection * 100}vh` }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      >
        <Hero showScrollPrompt={showScrollPrompt && activeSection === 0} />
        <About />
        <Podcast />
        <Gallery />
        <VideoShowcase />
        <Contact />
      </motion.div>
      
      {/* Progress indicators */}
      <div className="fixed right-6 top-1/2 -translate-y-1/2 flex flex-col gap-3 z-50">
        {Array.from({ length: totalSections }).map((_, i) => (
          <div 
            key={i} 
            onClick={() => {
              if (!isLockedRef.current) {
                isLockedRef.current = true;
                setActiveSection(i);
              }
            }}
            className={`w-2 h-2 rounded-full transition-all duration-500 cursor-pointer ${activeSection === i ? 'bg-white scale-150' : 'bg-white/30 hover:bg-white/60'}`}
          />
        ))}
      </div>
    </main>
  );
}
