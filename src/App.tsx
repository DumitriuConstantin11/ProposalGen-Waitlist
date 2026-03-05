import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2, Clock, Sparkles, Zap } from 'lucide-react';
import React, { useState, useEffect } from 'react';

const WAITLIST_URL = 'https://forms.gle/BhTeW6DKo4qYFm1c6';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'glass-panel py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
            <Sparkles className="w-5 h-5 text-white" />
          </div>
          <span className="text-xl font-bold tracking-tight text-white">ProposalGen</span>
        </div>
        
        <a
          href={WAITLIST_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium text-white bg-white/10 hover:bg-white/20 border border-white/10 rounded-full transition-all"
        >
          Join Waitlist
        </a>
      </div>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      {/* Background gradients */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-500/20 rounded-full blur-[120px] opacity-50 pointer-events-none" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-[100px] opacity-50 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" />
              <span>AI-Powered Proposal Generation</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.1] mb-6">
              Generate Professional Proposals in <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">Minutes with AI</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-400 mb-8 leading-relaxed max-w-xl">
              ProposalGen helps freelancers and agencies create polished commercial proposals effortlessly, saving hours of manual work.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <a
                href={WAITLIST_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-medium text-black bg-white text-black hover:bg-gray-100 rounded-full transition-all shadow-[0_0_40px_rgba(255,255,255,0.3)]"
              >
                Join the Waitlist
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative lg:ml-auto w-full max-w-lg"
          >
            {/* Mockup Container */}
            <div className="relative rounded-2xl bg-[#111] border border-white/10 shadow-2xl overflow-hidden glow-effect">
              {/* Mockup Header */}
              <div className="h-12 border-b border-white/10 flex items-center px-4 gap-2 bg-[#161616]">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
              </div>
              {/* Mockup Body */}
              <div className="p-6 space-y-6 bg-gradient-to-b from-[#161616] to-[#0a0a0a]">
                <div className="space-y-2">
                  <div className="h-4 w-1/3 bg-white/10 rounded-md" />
                  <div className="h-8 w-3/4 bg-white/20 rounded-md" />
                </div>
                
                <div className="space-y-3">
                  <div className="h-3 w-full bg-white/5 rounded-md" />
                  <div className="h-3 w-full bg-white/5 rounded-md" />
                  <div className="h-3 w-5/6 bg-white/5 rounded-md" />
                </div>

                <div className="grid grid-cols-2 gap-4 pt-4">
                  <div className="h-24 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex flex-col justify-center items-center gap-2">
                    <Sparkles className="w-6 h-6 text-indigo-400" />
                    <div className="h-2 w-16 bg-indigo-400/50 rounded-full" />
                  </div>
                  <div className="h-24 rounded-xl bg-white/5 border border-white/10 flex flex-col justify-center items-center gap-2">
                    <CheckCircle2 className="w-6 h-6 text-gray-500" />
                    <div className="h-2 w-16 bg-gray-500/50 rounded-full" />
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating Elements */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -right-8 top-1/4 glass-panel p-4 rounded-xl flex items-center gap-3 shadow-xl"
            >
              <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center">
                <CheckCircle2 className="w-5 h-5 text-green-400" />
              </div>
              <div>
                <div className="text-sm font-medium text-white">Proposal Ready</div>
                <div className="text-xs text-gray-400">Generated in 12s</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Features = () => {
  const features = [
    {
      icon: <Clock className="w-6 h-6 text-indigo-400" />,
      title: "Save Time",
      description: "Generate complete proposals in minutes instead of hours."
    },
    {
      icon: <CheckCircle2 className="w-6 h-6 text-purple-400" />,
      title: "Professional Output",
      description: "Client-ready structure, persuasive copy, and clean formatting."
    },
    {
      icon: <Zap className="w-6 h-6 text-pink-400" />,
      title: "AI-Powered",
      description: "Our AI understands your services and generates tailored proposals instantly."
    }
  ];

  return (
    <section id="features" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Why ProposalGen?</h2>
          <p className="text-gray-400 text-lg">
            Stop starting from scratch. Let AI handle the heavy lifting so you can focus on closing deals.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-[#111] border border-white/5 rounded-2xl p-8 hover:border-white/10 transition-all duration-300 hover:-translate-y-1 glow-effect"
            >
              <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
              <p className="text-gray-400 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Pricing = () => {
  return (
    <section id="pricing" className="py-24 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-[100px] opacity-30 pointer-events-none" />
      
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Simple Pricing</h2>
          <p className="text-gray-400 text-lg">Built for freelancers and growing agencies.</p>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="glass-panel rounded-3xl p-8 md:p-12 text-center border border-white/10 relative overflow-hidden glow-effect"
        >
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500" />
          
          <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-white text-sm font-medium mb-8">
            <Sparkles className="w-4 h-4 mr-2 text-purple-400" />
            Early access coming soon
          </div>
          
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Be the first to know when we launch.
          </h3>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto">
            Join the waitlist today to secure early access and exclusive founder pricing when we open our doors.
          </p>
          
          <a
            href={WAITLIST_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-medium text-black bg-white hover:bg-gray-100 rounded-full transition-all shadow-lg hover:shadow-xl hover:scale-105 duration-300"
          >
            Join the Waitlist
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="border-t border-white/10 py-12 mt-12">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-md bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
            <Sparkles className="w-3 h-3 text-white" />
          </div>
          <span className="text-lg font-bold tracking-tight text-white">ProposalGen</span>
        </div>
        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} ProposalGen. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen selection:bg-indigo-500/30">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Pricing />
      </main>
      <Footer />
    </div>
  );
}
