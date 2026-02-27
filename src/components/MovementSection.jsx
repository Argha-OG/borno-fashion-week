"use client";

import React from 'react';
import { motion } from 'framer-motion';

const MovementSection = ({ imageSrc = "/assets/gallary/gallery-15.jpeg" }) => {
    return (
        <section className="py-24 px-4 overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
                    {/* Left Side: Image */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="w-full lg:w-1/2 relative aspect-4/5 md:aspect-square overflow-hidden rounded-3xl group glassmorphism border-gold/30"
                    >
                        <div className="absolute inset-0 bg-linear-to-t from-black via-transparent to-transparent z-10" />
                        <img
                            src={imageSrc}
                            alt="Be Part of the Movement"
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                    </motion.div>

                    {/* Right Side: Content and Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="w-full lg:w-1/2 space-y-8"
                    >
                        <div className="space-y-4">
                            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
                                Be Part of the <span className="text-gold italic">Movement</span>
                            </h2>
                            <div className="text-white/70 space-y-4 leading-relaxed text-lg font-light">
                                <p>
                                    Borneo Fashion Week is more than an event — it is a fashion movement rooted in culture, sustainability, and global ambition.
                                </p>
                                <p className="text-gold font-medium text-xl bg-gold/10 inline-block px-4 py-2 rounded-xl border border-gold/20 backdrop-blur-sm">
                                    Applications are now open for our upcoming edition.<br className="hidden sm:block" />
                                    Step into the spotlight. Show the world your story.
                                </p>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="glassmorphism p-8 rounded-3xl border-white/10 mt-8">
                            <h3 className="text-2xl font-bold text-white mb-6">Register your interest today</h3>
                            <form className="space-y-4">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-white/60 mb-1">Full Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-gold transition-colors"
                                        placeholder="John Doe"
                                        required
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-white/60 mb-1">Email Address</label>
                                    <input
                                        type="email"
                                        id="email"
                                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-gold transition-colors"
                                        placeholder="john@example.com"
                                        required
                                    />
                                </div>
                                <div>
                                    <label htmlFor="phone" className="block text-sm font-medium text-white/60 mb-1">Contact Number</label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-gold transition-colors"
                                        placeholder="+60 12 345 6789"
                                        required
                                    />
                                </div>
                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-white/60 mb-1">Message (Optional)</label>
                                    <textarea
                                        id="message"
                                        rows={4}
                                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-gold transition-colors resize-none"
                                        placeholder="Tell us about yourself or your brand..."
                                    ></textarea>
                                </div>
                                <button
                                    type="submit"
                                    className="w-full px-8 py-4 bg-gold text-black font-bold rounded-xl hover:scale-[1.02] transition-transform flex justify-center items-center gap-2 mt-4"
                                >
                                    Submit Application
                                </button>
                            </form>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default MovementSection;
