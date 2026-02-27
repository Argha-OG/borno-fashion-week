"use client";

import React from 'react';
import { motion } from 'framer-motion';
import MovementSection from '@/components/MovementSection';

const AboutPage = () => {
    return (
        <div className="pb-24">
            {/* Header Section */}
            <section className="pt-20 pb-12 px-4 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-4xl mx-auto"
                >
                    <span className="text-gold tracking-[0.4em] uppercase text-xs font-bold mb-4 block">Our Legacy</span>
                    <h1 className="text-4xl md:text-7xl font-bold text-white tracking-tighter mb-8 italic">
                        Connecting ASEAN to the <span className="text-gold">World</span>
                    </h1>
                    <div className="w-20 h-1 bg-gold mx-auto glassmorphism" />
                </motion.div>
            </section>

            {/* Brand Story & Mission */}
            <section className="py-20 px-4">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <div className="space-y-4">
                            <h2 className="text-3xl font-bold text-white tracking-tight">The OneMediaGroup Vision</h2>
                            <p className="text-white/60 text-lg leading-relaxed">
                                Organized by OneMediaGroup, Borneo Fashion Week has established itself as the premier fashion event in the region. Our journey began with a simple mission: to showcase the untamed creativity of Borneo and provide a world-class platform for designers across Southeast Asia.
                            </p>
                        </div>

                        <div className="space-y-4">
                            <h3 className="text-sm font-bold text-gold tracking-wide uppercase">Our Mission</h3>
                            <p className="text-white/60 text-lg leading-relaxed">
                                To serve as a strategic launchpad for emerging and established ASEAN designers, fostering connections with international buyers, media, and creative talents while celebrating the rich cultural tapestry of the Borneo heritage.
                            </p>
                        </div>

                        <div className="glassmorphism p-8 rounded-3xl border-gold/10">
                            <p className="text-white italic text-xl font-light">
                                "We don't just host a runway; we celebrate the pulse of ASEAN fashion."
                            </p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="grid grid-cols-2 gap-4"
                    >
                        <div className="space-y-4">
                            <img
                                src="/assets/gallary/gallery-6.jpeg"
                                alt="Runway High Fashion"
                                className="w-full h-80 object-cover rounded-2xl"
                            />
                            <img
                                src="/assets/gallary/gallery-10.jpeg"
                                alt="Borneo Culture"
                                className="w-full h-48 object-cover rounded-2xl grayscale hover:grayscale-0 transition-all duration-500"
                            />
                        </div>
                        <div className="space-y-4 pt-12">
                            <img
                                src="/assets/gallary/gallery-12.jpeg"
                                alt="Designer Workshop"
                                className="w-full h-48 object-cover rounded-2xl grayscale hover:grayscale-0 transition-all duration-500"
                            />
                            <img
                                src="/assets/gallary/gallery-25.jpeg"
                                alt="BFW Crowd"
                                className="w-full h-80 object-cover rounded-2xl"
                            />
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Heritage Grid Section */}
            <section className="py-20 bg-white/5 border-y border-white/5 px-4">
                <div className="max-w-7xl mx-auto text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-4">Culture Meets Couture</h2>
                    <p className="text-white/40 max-w-2xl mx-auto">
                        Explore the vibrant heritage of Borneo interwoven with high-fashion sophistication.
                    </p>
                </div>

                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        {
                            title: "Untamed Heritage",
                            desc: "Drawing inspiration from the indigenous motifs and sustainable textiles of the rainforest.",
                            img: "/assets/gallary/gallery-31.jpeg"
                        },
                        {
                            title: "Global Reach",
                            desc: "Connecting our local talents to buyers in London, Paris, and beyond through digital innovation.",
                            img: "/assets/gallary/gallery-42.jpeg"
                        },
                        {
                            title: "The Future of ASEAN",
                            desc: "Providing the infrastructure and mentorship for the next generation of creative leaders.",
                            img: "/assets/gallary/gallery-50.jpeg"
                        }
                    ].map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.2 }}
                            className="glassmorphism rounded-3xl overflow-hidden group"
                        >
                            <div className="h-64 overflow-hidden">
                                <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                            </div>
                            <div className="p-8 text-left">
                                <h4 className="text-xl font-bold text-gold mb-3">{item.title}</h4>
                                <p className="text-white/60 text-sm leading-relaxed">{item.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            <MovementSection imageSrc="/assets/gallary/gallery-31.jpeg" />
        </div>
    );
};

export default AboutPage;
