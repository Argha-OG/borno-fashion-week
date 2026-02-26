"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Facebook, Instagram } from 'lucide-react';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about' },
  { name: 'Designers', href: '/designers' },
  { name: 'Media Gallery', href: '/media' },
  { name: 'Contact', href: '/contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'py-2' : 'py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`rounded-2xl px-6 py-3 flex items-center justify-between transition-all duration-500 ${scrolled ? 'navbar-glass shadow-2xl shadow-black/50' : 'glassmorphism'}`}>

          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <img
              src="/fwb.png"
              alt="Borneo Fashion Week Logo"
              className={`transition-all duration-300 object-contain ${scrolled ? 'h-8' : 'h-10 sm:h-12'}`}
            />
            <span className="text-xl sm:text-2xl font-bold tracking-tighter text-gold">
              Borneo <span className="text-white text-xl hidden sm:inline-block">Fashion Week</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-white/80 hover:text-gold transition-colors duration-200"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Social Icons & Mobile Toggle */}
          <div className="flex items-center space-x-4">
            <div className="hidden sm:flex items-center space-x-4">
              <Link href="https://www.instagram.com/borneofashionweek26/" target="_blank" rel="noopener noreferrer" className="p-2 hover:text-gold transition-colors">
                <Instagram size={20} />
              </Link>
              <Link href="https://www.facebook.com/BFW2019" target="_blank" rel="noopener noreferrer" className="p-2 hover:text-gold transition-colors">
                <Facebook size={20} />
              </Link>
            </div>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 text-white hover:text-gold transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-4 right-4 mt-2 md:hidden"
          >
            <div className="glassmorphism rounded-2xl p-6 bg-black/90">
              <div className="flex flex-col space-y-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-lg font-medium text-white/90 hover:text-gold transition-colors"
                  >
                    {link.name}
                  </Link>
                ))}
                <div className="flex items-center space-x-6 pt-4 border-t border-gold/10">
                  <Link href="https://www.instagram.com/borneofashionweek26/" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-white/70 hover:text-gold">
                    <Instagram size={20} />
                    <span>Instagram</span>
                  </Link>
                  <Link href="https://www.facebook.com/BFW2019" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-white/70 hover:text-gold">
                    <Facebook size={20} />
                    <span>Facebook</span>
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
