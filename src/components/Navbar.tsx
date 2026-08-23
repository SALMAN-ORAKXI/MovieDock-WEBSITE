import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Tv, ArrowDownCircle, ShieldCheck, Sparkles, Menu, X, Compass, HelpCircle } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 15);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToDownload = () => {
    setMobileMenuOpen(false);
    if (location.pathname !== '/') {
      window.location.href = '/#download-zone';
      return;
    }
    document.getElementById('download-zone')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 py-4 transition-all duration-300">
      <nav className={`w-full max-w-5xl rounded-full px-4 sm:px-6 py-2.5 transition-all duration-300 flex items-center justify-between ${
        scrolled 
          ? 'liquid-glass shadow-[0_20px_45px_-10px_rgba(56,189,248,0.22)] border-white/90 scale-[0.99]' 
          : 'liquid-glass'
      }`}>
        
        {/* Brand Logo - iOS Glass Badge */}
        <Link to="/" className="flex items-center gap-2.5 group">
          <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-sky-400 via-sky-300 to-white p-[1px] shadow-sm group-hover:scale-105 transition-transform duration-200">
            <div className="w-full h-full bg-white/90 rounded-[15px] flex items-center justify-center">
              <Tv className="w-5 h-5 text-sky-500 stroke-[1.75]" />
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-extrabold text-base tracking-tight text-slate-900 flex items-center gap-1.5">
              MovieDock
              <span className="px-1.5 py-0.5 text-[9px] font-black uppercase tracking-wider bg-sky-100/90 text-sky-600 border border-sky-200/80 rounded-full">v1.2</span>
            </span>
            <span className="text-[10px] text-slate-500 font-medium -mt-0.5">Android 4K Portal</span>
          </div>
        </Link>

        {/* Desktop Links (iOS Capsule Tabs) */}
        <div className="hidden md:flex items-center gap-1 bg-slate-200/40 p-1 rounded-full border border-white/60 backdrop-blur-md">
          <a href="/#features" className="flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-semibold text-slate-700 hover:text-sky-600 hover:bg-white/80 transition-all">
            <Compass className="w-3.5 h-3.5 stroke-[1.75]" />
            Features
          </a>
          <a href="/#install-guide" className="flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-semibold text-slate-700 hover:text-sky-600 hover:bg-white/80 transition-all">
            <HelpCircle className="w-3.5 h-3.5 stroke-[1.75]" />
            How to Install
          </a>
          <a href="/#reviews" className="flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-semibold text-slate-700 hover:text-sky-600 hover:bg-white/80 transition-all">
            <Sparkles className="w-3.5 h-3.5 stroke-[1.75]" />
            Reviews
          </a>
          <Link to="/privacy" className="flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-semibold text-slate-700 hover:text-sky-600 hover:bg-white/80 transition-all">
            <ShieldCheck className="w-3.5 h-3.5 stroke-[1.75]" />
            Privacy
          </Link>
        </div>

        {/* CTA Glass Pill Button */}
        <div className="hidden md:flex items-center">
          <button 
            onClick={scrollToDownload}
            className="group relative inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold text-white bg-gradient-to-r from-sky-400 to-sky-500 hover:from-sky-500 hover:to-sky-400 rounded-full shadow-[0_8px_20px_-4px_rgba(56,189,248,0.45)] hover:shadow-[0_12px_24px_-4px_rgba(56,189,248,0.6)] hover:scale-[1.03] active:scale-[0.98] transition-all duration-200"
          >
            <ArrowDownCircle className="w-4 h-4 stroke-[2] group-hover:translate-y-0.5 transition-transform" />
            <span>Download APK</span>
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden w-10 h-10 rounded-full bg-white/70 border border-white flex items-center justify-center text-slate-700 hover:text-sky-500 transition-colors"
          aria-label="Toggle Navigation"
        >
          {mobileMenuOpen ? <X className="w-5 h-5 stroke-[1.75]" /> : <Menu className="w-5 h-5 stroke-[1.75]" />}
        </button>
      </nav>

      {/* Mobile Drawer (Liquid Glass Sheet) */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-20 left-4 right-4 liquid-glass-card rounded-3xl p-5 shadow-2xl flex flex-col gap-2.5 animate-in fade-in slide-in-from-top-3 duration-200">
          <a href="/#features" onClick={() => setMobileMenuOpen(false)} className="flex items-center gap-2.5 text-slate-700 font-semibold px-4 py-2.5 rounded-2xl hover:bg-sky-50">
            <Compass className="w-4 h-4 text-sky-500 stroke-[1.75]" /> Features
          </a>
          <a href="/#install-guide" onClick={() => setMobileMenuOpen(false)} className="flex items-center gap-2.5 text-slate-700 font-semibold px-4 py-2.5 rounded-2xl hover:bg-sky-50">
            <HelpCircle className="w-4 h-4 text-sky-500 stroke-[1.75]" /> Installation Guide
          </a>
          <a href="/#reviews" onClick={() => setMobileMenuOpen(false)} className="flex items-center gap-2.5 text-slate-700 font-semibold px-4 py-2.5 rounded-2xl hover:bg-sky-50">
            <Sparkles className="w-4 h-4 text-sky-500 stroke-[1.75]" /> Reviews
          </a>
          <Link to="/privacy" onClick={() => setMobileMenuOpen(false)} className="flex items-center gap-2.5 text-slate-700 font-semibold px-4 py-2.5 rounded-2xl hover:bg-sky-50">
            <ShieldCheck className="w-4 h-4 text-sky-500 stroke-[1.75]" /> Privacy Policy
          </Link>
          <button 
            onClick={scrollToDownload}
            className="w-full mt-2 py-3 bg-gradient-to-r from-sky-400 to-sky-500 text-white font-bold rounded-2xl flex items-center justify-center gap-2 shadow-lg shadow-sky-400/30"
          >
            <ArrowDownCircle className="w-4 h-4" /> Download MovieDock APK
          </button>
        </div>
      )}
    </header>
  );
}