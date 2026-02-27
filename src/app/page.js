"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';
import MovementSection from '@/components/MovementSection';
import MovementFormModal from '@/components/MovementFormModal';

export default function Home() {
  const [isMuted, setIsMuted] = React.useState(true);
  const [isMovementModalOpen, setIsMovementModalOpen] = React.useState(false);

  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden pb-24">
        {/* Cinematic Video Background Placeholder */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute inset-0 bg-black/50 z-10" />
          <iframe
            src={`https://www.youtube.com/embed/J9OEkr06zys?autoplay=1&loop=1&playlist=J9OEkr06zys&controls=0&showinfo=0&rel=0&iv_load_policy=3&mute=${isMuted ? 1 : 0}&modestbranding=1&enablejsapi=1`}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[115%] h-[115%] object-cover pointer-events-none"
            allow="autoplay; encrypted-media"
            title="Borneo Fashion Week Promo"
          />
        </div>

        {/* Hero Content */}
        <div className="relative z-20 text-center px-4 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1 mb-6 text-xs font-bold tracking-[0.3em] uppercase border border-gold/30 text-gold glassmorphism rounded-full">
              Annual Event • Borneo
            </span>
            <h1 className="text-5xl md:text-8xl font-bold tracking-tighter text-white mb-8 leading-none">
              THE DIGITAL <br />
              <span className="text-gold italic">RUNWAY</span>
            </h1>
            <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
              Experience the fusion of Borneo's cultural heritage and ASEAN's high-fashion future. A leading regional platform for the next generation of creative talent.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link href="/media">
                <button className="group relative px-8 py-4 bg-gold text-black font-bold rounded-full overflow-hidden transition-all hover:scale-105 active:scale-95">
                  <span className="relative z-10 flex items-center gap-2">
                    Explore Gallery <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                  </span>
                </button>
              </Link>

              <button
                onClick={() => setIsMovementModalOpen(true)}
                className="px-8 py-4 glassmorphism text-white font-bold rounded-full border border-white/20 transition-all hover:bg-white/10 hover:border-gold/50 active:scale-95"
              >
                Be Part of the Movement
              </button>

              <button
                onClick={() => setIsMuted(!isMuted)}
                className="flex items-center gap-3 text-white font-medium hover:text-gold transition-colors group px-6 py-4 glassmorphism rounded-full border border-white/10"
              >
                <div className="w-8 h-8 flex items-center justify-center rounded-full bg-white/10 group-hover:bg-gold transition-colors">
                  {isMuted ? (
                    <Play size={14} fill="currentColor" className="text-white group-hover:text-black" />
                  ) : (
                    <div className="flex gap-1">
                      <div className="w-1 h-3 bg-current animate-pulse" />
                      <div className="w-1 h-3 bg-current animate-pulse delay-75" />
                      <div className="w-1 h-3 bg-current animate-pulse delay-150" />
                    </div>
                  )}
                </div>
                {isMuted ? "Sound On" : "Sound Off"}
              </button>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-20 pointer-events-none"
        >
          <span className="text-[10px] uppercase tracking-[0.2em] text-white/40">Scroll to Explore</span>
          <div className="w-px h-12 bg-linear-to-b from-white/40 to-transparent" />
        </motion.div>
      </section>

      {/* Movement Form Modal */}
      <MovementFormModal
        isOpen={isMovementModalOpen}
        onClose={() => setIsMovementModalOpen(false)}
      />

      {/* Section 3: Heritage & Future */}
      <section className="py-24 px-4 bg-black overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <span className="text-gold text-sm font-bold tracking-[0.3em] uppercase">The Legacy</span>
              <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tighter leading-tight">
                WHERE HERITAGE <br />
                <span className="text-gold italic">MEETS THE HORIZON</span>
              </h2>
              <p className="text-white/60 text-lg leading-relaxed max-w-xl">
                Borneo Fashion Week is more than an event; it's a movement. We weave the intricate stories of Borneo's ancestral crafts into the fabric of modern international couture.
              </p>
              <div className="grid grid-cols-2 gap-8 pt-4">
                <div className="p-6 glassmorphism border-white/5 rounded-2xl">
                  <h4 className="text-gold text-2xl font-bold">100+</h4>
                  <p className="text-white/40 text-xs uppercase tracking-widest mt-1">Artisans Involved</p>
                </div>
                <div className="p-6 glassmorphism border-white/5 rounded-2xl">
                  <h4 className="text-gold text-2xl font-bold">25+</h4>
                  <p className="text-white/40 text-xs uppercase tracking-widest mt-1">Provinces Represented</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative rounded-3xl overflow-hidden glassmorphism border-gold/10 bg-white/5 w-fit lg:ml-auto mx-auto"
            >
              <img
                src="/assets/gallary/gallery-2.jpeg"
                alt="Heritage Craft"
                className="max-h-[600px] w-auto block transition-all duration-1000"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black via-transparent to-transparent opacity-30 pointer-events-none" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 4: Featured Collections */}
      <section className="py-24 px-4 glassmorphism border-y border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tighter">CURATED <span className="text-gold">EXCELLENCE</span></h2>
            <p className="text-white/40 uppercase tracking-widest text-sm">A glimpse into this year's featured designers</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              "/assets/gallary/gallery-16.jpeg",
              "/assets/gallary/gallery-12.jpeg",
              "/assets/gallary/gallery-13.jpeg"
            ].map((imgSrc, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="group relative h-[500px] rounded-3xl overflow-hidden glassmorphism border-white/5"
              >
                <img
                  src={imgSrc}
                  alt={`Designer ${idx}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/20 to-transparent" />
                <div className="absolute bottom-8 left-8 right-8 space-y-2">
                  <span className="text-gold text-xs font-bold tracking-widest uppercase">Avant-Garde</span>
                  <h3 className="text-2xl font-bold text-white">The Ethereal Collection</h3>
                  <div className="w-0 group-hover:w-full h-px bg-gold transition-all duration-500" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5: The Digital Runway Statement */}
      <section className="relative py-48 px-4 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/assets/gallary/gallery-67.jpeg"
            alt="Runway Background"
            className="w-full h-full object-cover opacity-20 scale-105"
          />
          <div className="absolute inset-0 bg-black/80" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-center space-y-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-9xl font-bold text-white/5 tracking-[0.05em] select-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full">
              FUTURISM
            </h2>
            <h3 className="text-3xl md:text-6xl font-bold text-white tracking-tighter relative z-10 leading-tight">
              ELEVATING <span className="text-gold italic">CULTURAL IDENTITY</span> <br />
              THROUGH INNOVATIVE DESIGN
            </h3>
          </motion.div>
          <div className="flex justify-center">
            <div className="w-24 h-px bg-gold/50" />
          </div>
          <p className="text-white/40 text-lg md:text-xl uppercase tracking-[0.3em] font-light">
            Redefining the standard of ASEAN fashion
          </p>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section className="py-24 px-4 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative aspect-4/5 overflow-hidden rounded-3xl group glassmorphism border-gold/30"
            >
              <div className="absolute inset-0 bg-linear-to-t from-black via-transparent to-transparent z-10" />
              <img
                src="/assets/gallary/gallery-27.jpeg"
                alt="ASEAN Designers Network"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute bottom-8 left-8 z-20">
                <p className="text-gold text-3xl font-bold tracking-tighter">Borneo Fashion Week</p>
                <p className="text-white/60">The Anniversary Edition</p>
              </div>
            </motion.div>

            <div className="space-y-8">
              <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
                Connecting <span className="text-gold">ASEAN Designers</span> to the World.
              </h2>
              <div className="space-y-6 text-white/60 leading-relaxed text-lg">
                <p>
                  Borneo Fashion Week serves as an elite launchpad for both emerging and established designers, providing unparalleled access to international buyers and creative leaders.
                </p>
                <p>
                  We transform the heart of Borneo into a global stage where tradition meets modern innovation.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-8 pt-8 border-t border-white/10">
                <div>
                  <p className="text-gold text-4xl font-bold tracking-tighter">60+</p>
                  <p className="text-sm text-white/40 uppercase tracking-widest mt-2">Designers</p>
                </div>
                <div>
                  <p className="text-gold text-4xl font-bold tracking-tighter">ASEAN</p>
                  <p className="text-sm text-white/40 uppercase tracking-widest mt-2">Network</p>
                </div>
              </div>

              <div className="pt-8">
                <Link href="/about">
                  <button className="px-6 py-3 glassmorphism text-white text-sm font-semibold rounded-lg hover:bg-gold hover:text-black transition-all">
                    Discover Our Legacy
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Section 6: QNA (Frequent Inquiries) */}
      <section className="py-24 px-4 bg-black">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tighter">CURATED <span className="text-gold">ANSWERS</span></h2>
            <p className="text-white/40 uppercase tracking-widest text-sm">Essential information for our distinguished guests</p>
          </div>

          <div className="grid grid-cols-1 gap-6">
            {[
              { q: "How can I attend Borneo Fashion Week?", a: "BFW is a curated experience. Register your interest through our contact portal for invitation-only access to our main runway events." },
              { q: "Where is the main venue located?", a: "Our anniversary edition transforms the cultural landmarks of Borneo into high-fashion canvases. Specific venue details are shared exclusively with confirmed guests." },
              { q: "Are the collections available for purchase?", a: "Yes, BFW facilitates direct connections between designers and international buyers. Private viewing appointments can be scheduled post-show." },
              { q: "How do designers apply for the next season?", a: "Emerging talent can submit their portfolio through our ASEAN creative network link. Selection is based on innovation and cultural storytelling." },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-8 glassmorphism border-white/5 rounded-3xl hover:border-gold/30 transition-all duration-500 group"
              >
                <div className="flex flex-col gap-4">
                  <h4 className="text-xl font-bold text-gold flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                    {item.q}
                  </h4>
                  <p className="text-white/60 leading-relaxed font-light pl-4.5 border-l border-white/10 group-hover:border-gold/20 transition-colors">
                    {item.a}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 7: Global Partners */}
      <section className="py-24 px-4 glassmorphism border-y border-white/5 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-white/20 text-xs font-bold tracking-[0.4em] uppercase">Supported By</span>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-40 hover:opacity-100 transition-opacity duration-1000">
            {/* Note: In production, replace with actual partner logos */}
            <div className="text-2xl font-black tracking-tighter text-white italic">VOGUE</div>
            <div className="text-2xl font-black tracking-tighter text-white italic">HARPER'S</div>
            <div className="text-2xl font-black tracking-tighter text-white italic">ELLE</div>
            <div className="text-2xl font-black tracking-tighter text-white italic">TATLER</div>
            <div className="text-2xl font-black tracking-tighter text-white italic">BAZAAR</div>
          </div>
        </div>
      </section>

      {/* Section 8: The Movement */}
      <MovementSection imageSrc="/assets/gallary/gallery-33.jpeg" />

      {/* Section 9: The Invitation (Newsletter) */}
      <section className="py-32 px-4 relative overflow-hidden">
        <div className="max-w-4xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="p-12 md:p-20 glassmorphism border-gold/20 rounded-[3rem] text-center space-y-10 relative"
          >
            <div className="space-y-4">
              <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tighter">JOIN THE <span className="text-gold italic">INNER CIRCLE</span></h2>
              <p className="text-white/60 text-lg max-w-xl mx-auto leading-relaxed">
                Receive exclusive backstage access, designer interviews, and front-row invitations.
              </p>
            </div>

            <form className="max-w-md mx-auto flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Excellence@fashion.com"
                className="flex-1 bg-white/5 border border-white/10 rounded-full px-8 py-4 text-white focus:outline-none focus:border-gold transition-colors"
                required
              />
              <button type="submit" className="px-10 py-4 bg-gold text-black font-bold rounded-full hover:scale-105 transition-transform">
                Apply
              </button>
            </form>

            <p className="text-[10px] text-white/20 uppercase tracking-widest font-bold">
              Secure Connection &bull; Privacy Guaranteed
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
