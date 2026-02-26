import React from 'react';
import Link from 'next/link';
import { Facebook, Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-black py-12 border-t border-gold/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">

                    {/* Brand & Story */}
                    <div className="space-y-4 flex flex-col items-center md:items-start">
                        <div className="flex items-center gap-3">
                            <img
                                src="/fwb.png"
                                alt="Borneo Fashion Week Logo"
                                className="h-10 object-contain"
                            />
                            <h3 className="text-2xl font-bold tracking-tighter text-gold">
                                Borneo <span className="text-white">Fashion Week</span>
                            </h3>
                        </div>
                        <p className="text-white/60 text-sm max-w-xs mx-auto md:mx-0">
                            A leading regional fashion platform by OneMediaGroup, connecting ASEAN designers to the global market.
                        </p>
                        <div className="flex justify-center md:justify-start space-x-4 pt-2">
                            <Link href="https://www.instagram.com/borneofashionweek26/" target="_blank" rel="noopener noreferrer" className="p-2 glassmorphism rounded-full hover:text-gold transition-colors">
                                <Instagram size={18} />
                            </Link>
                            <Link href="https://www.facebook.com/BFW2019" target="_blank" rel="noopener noreferrer" className="p-2 glassmorphism rounded-full hover:text-gold transition-colors">
                                <Facebook size={18} />
                            </Link>
                        </div>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-4">
                        <h4 className="text-white font-semibold uppercase tracking-widest text-sm">Contact Us</h4>
                        <div className="space-y-2">
                            <div className="flex items-center justify-center md:justify-start space-x-3 text-white/60 hover:text-gold transition-colors">
                                <Mail size={16} className="text-gold" />
                                <a href="mailto:sharawiasaad@gmail.com" className="text-sm">sharawiasaad@gmail.com</a>
                            </div>
                            <div className="flex items-center justify-center md:justify-start space-x-3 text-white/60 hover:text-gold transition-colors">
                                <Phone size={16} className="text-gold" />
                                <a href="tel:0177777772" className="text-sm">017 777 7772</a>
                            </div>
                            <div className="flex items-center justify-center md:justify-start space-x-3 text-white/60">
                                <MapPin size={16} className="text-gold" />
                                <span className="text-sm">Borneo, Malaysia</span>
                            </div>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-4">
                        <h4 className="text-white font-semibold uppercase tracking-widest text-sm">Quick Links</h4>
                        <div className="grid grid-cols-2 gap-2 text-sm text-white/60">
                            <Link href="/" className="hover:text-gold transition-colors">Home</Link>
                            <Link href="/about" className="hover:text-gold transition-colors">About Us</Link>
                            <Link href="/designers" className="hover:text-gold transition-colors">Designers</Link>
                            <Link href="/media" className="hover:text-gold transition-colors">Media</Link>
                            <Link href="/contact" className="hover:text-gold transition-colors">Contact</Link>
                        </div>
                    </div>

                </div>

                <div className="mt-12 pt-8 border-t border-white/5 text-center">
                    <p className="text-xs text-white/40">
                        © {new Date().getFullYear()} Borneo Fashion Week. Organized by OneMediaGroup. All Rights Reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
