"use client";

import React, { useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

const DesignerCard = ({ designer, isPlaceholder = false }) => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;
        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    if (isPlaceholder) {
        return (
            <div className="group relative aspect-3/4 rounded-3xl overflow-hidden glassmorphism animate-pulse border-white/5">
                <div className="absolute inset-0 bg-linear-to-t from-black via-transparent to-transparent flex flex-col justify-end p-8 space-y-4">
                    <div className="h-6 w-2/3 bg-white/10 rounded" />
                    <div className="h-4 w-1/3 bg-white/5 rounded" />
                </div>
            </div>
        );
    }

    return (
        <motion.div
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
            }}
            className="group relative aspect-3/4 rounded-3xl overflow-hidden glassmorphism border-gold/10 cursor-pointer shadow-2xl transition-shadow hover:shadow-gold/5"
        >
            <div
                style={{
                    transform: "translateZ(50px)",
                    transformStyle: "preserve-3d",
                }}
                className="absolute inset-0"
            >
                <img
                    src={designer.image}
                    alt={designer.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black via-black/20 to-transparent opacity-80" />
            </div>

            <div
                style={{
                    transform: "translateZ(80px)",
                }}
                className="absolute inset-0 flex flex-col justify-end p-8"
            >
                <span className="text-gold text-xs font-bold tracking-widest uppercase mb-2">{designer.country}</span>
                <h3 className="text-2xl font-bold text-white tracking-tight group-hover:text-gold transition-colors">{designer.name}</h3>
                <p className="text-white/60 text-sm mt-3 line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {designer.bio}
                </p>
            </div>
        </motion.div>
    );
};

const DesignersPage = () => {
    // Mock data for Phase 1 Demo
    const featuredDesigners = [
        {
            name: "Ariff S.",
            country: "Malaysia",
            bio: "Fusing traditional batik with modern silhouettes.",
            image: "/assets/gallary/gallery-15.jpeg"
        },
        {
            name: "Linh Tran",
            country: "Vietnam",
            bio: "Sustainable luxury made from recycled ASEAN textiles.",
            image: "/assets/gallary/gallery-60.jpeg"
        }
    ];

    return (
        <div className="pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
            {/* Header Section */}
            <section className="pt-20 pb-16 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="space-y-4"
                >
                    <h1 className="text-5xl md:text-8xl font-bold text-white tracking-tighter">
                        THE <span className="text-gold italic">TALENT</span>
                    </h1>
                    <p className="text-white/40 max-w-xl mx-auto uppercase tracking-widest text-sm">
                        Discover the visionary designers of Borneo Fashion Week
                    </p>
                </motion.div>
            </section>

            {/* Gallery Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 perspective-1000">
                {featuredDesigners.map((designer, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.1 }}
                    >
                        <DesignerCard designer={designer} />
                    </motion.div>
                ))}

                {/* Placeholder Skeletons as per SRS 3.3 */}
                {[1, 2, 3, 4].map((id) => (
                    <motion.div
                        key={`placeholder-${id}`}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 + id * 0.1 }}
                    >
                        <div className="relative">
                            <DesignerCard isPlaceholder />
                            <div className="absolute inset-0 flex items-center justify-center">
                                <span className="text-gold/40 font-bold uppercase tracking-tighter text-3xl -rotate-12 border-2 border-gold/20 px-4 py-2 glassmorphism rounded-xl">
                                    Coming Soon
                                </span>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Designer Call to Action */}
            <motion.section
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="mt-32 p-12 glassmorphism rounded-[3rem] text-center border-gold/10"
            >
                <h2 className="text-3xl font-bold text-white mb-6">Are you the next ASEAN icon?</h2>
                <p className="text-white/60 max-w-xl mx-auto mb-8">
                    Applications for the next showcase are now open for emerging and established designers.
                </p>
                <button className="px-10 py-4 bg-gold text-black font-bold rounded-full hover:scale-105 transition-all">
                    Register as a Designer
                </button>
            </motion.section>
        </div>
    );
};

export default DesignersPage;
