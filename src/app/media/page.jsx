"use client";

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, ExternalLink, Facebook, Instagram, X } from 'lucide-react';
import { preEventArticles } from './articles';
import Pagination from '@/components/Pagination';
import MovementSection from '@/components/MovementSection';

const MediaPage = () => {
    const videos = [
        { id: 'promo-anniversary', title: 'The Anniversary Promo', year: '2026', url: 'https://www.youtube.com/embed/J9OEkr06zys' },
        { id: 'designer-showcase', title: 'Designer Showcase', year: '2026', url: 'https://www.youtube.com/embed/NDA3-alJIhI' },
        { id: 'runway-moments', title: 'Runway Moments', year: '2026', url: '/assets/videos/runway-moments.mp4', isLocal: true },
    ];

    // Real assets from public/assets/gallary
    const allGalleryImages = [
        "/assets/gallary/gallery-1.jpeg",
        "/assets/gallary/gallery-2.jpeg",
        "/assets/gallary/gallery-3.jpeg",
        "/assets/gallary/gallery-4.jpeg",
        "/assets/gallary/gallery-5.jpeg",
        "/assets/gallary/gallery-6.jpeg",
        "/assets/gallary/gallery-7.jpeg",
        "/assets/gallary/gallery-8.jpeg",
        "/assets/gallary/gallery-9.jpeg",
        "/assets/gallary/gallery-10.jpeg",
        "/assets/gallary/gallery-11.jpeg",
        "/assets/gallary/gallery-12.jpeg",
        "/assets/gallary/gallery-13.jpeg",
        "/assets/gallary/gallery-14.jpeg",
        "/assets/gallary/gallery-15.jpeg",
        "/assets/gallary/gallery-16.jpeg",
        "/assets/gallary/gallery-17.jpeg",
        "/assets/gallary/gallery-18.jpeg",
        "/assets/gallary/gallery-19.jpeg",
        "/assets/gallary/gallery-20.jpeg",
        "/assets/gallary/gallery-21.jpeg",
        "/assets/gallary/gallery-22.jpeg",
        "/assets/gallary/gallery-23.jpeg",
        "/assets/gallary/gallery-24.jpeg",
        "/assets/gallary/gallery-25.jpeg",
        "/assets/gallary/gallery-26.jpeg",
        "/assets/gallary/gallery-27.jpeg",
        "/assets/gallary/gallery-28.jpeg",
        "/assets/gallary/gallery-29.jpeg",
        "/assets/gallary/gallery-30.jpeg",
        "/assets/gallary/gallery-31.jpeg",
        "/assets/gallary/gallery-32.jpeg",
        "/assets/gallary/gallery-33.jpeg",
        "/assets/gallary/gallery-34.jpeg",
        "/assets/gallary/gallery-35.jpeg",
        "/assets/gallary/gallery-36.jpeg",
        "/assets/gallary/gallery-37.jpeg",
        "/assets/gallary/gallery-38.jpeg",
        "/assets/gallary/gallery-39.jpeg",
        "/assets/gallary/gallery-40.jpeg",
        "/assets/gallary/gallery-41.jpeg",
        "/assets/gallary/gallery-42.jpeg",
        "/assets/gallary/gallery-43.jpeg",
        "/assets/gallary/gallery-44.jpeg",
        "/assets/gallary/gallery-45.jpeg",
        "/assets/gallary/gallery-46.jpeg",
        "/assets/gallary/gallery-47.jpeg",
        "/assets/gallary/gallery-48.jpeg",
        "/assets/gallary/gallery-49.jpeg",
        "/assets/gallary/gallery-50.jpeg",
        "/assets/gallary/gallery-51.jpeg",
        "/assets/gallary/gallery-52.jpeg",
        "/assets/gallary/gallery-53.jpeg",
        "/assets/gallary/gallery-54.jpeg",
        "/assets/gallary/gallery-55.jpeg",
        "/assets/gallary/gallery-56.jpeg",
        "/assets/gallary/gallery-57.jpeg",
        "/assets/gallary/gallery-58.jpeg",
        "/assets/gallary/gallery-59.jpeg",
        "/assets/gallary/gallery-60.jpeg",
        "/assets/gallary/gallery-61.jpeg",
        "/assets/gallary/gallery-62.jpeg",
        "/assets/gallary/gallery-63.jpeg",
        "/assets/gallary/gallery-64.jpeg",
        "/assets/gallary/gallery-65.jpeg",
        "/assets/gallary/gallery-66.jpeg",
        "/assets/gallary/gallery-67.jpeg",
        "/assets/gallary/gallery-68.jpeg",
        "/assets/gallary/gallery-69.jpeg",
        "/assets/gallary/gallery-70.jpeg",
        "/assets/gallary/gallery-71.jpeg",
        "/assets/gallary/gallery-72.jpeg",
        "/assets/gallary/gallery-73.jpeg",
        "/assets/gallary/gallery-74.jpeg",
        "/assets/gallary/gallery-75.jpeg",
        "/assets/gallary/gallery-76.jpeg",
        "/assets/gallary/gallery-77.jpeg",
        "/assets/gallary/gallery-78.jpeg",
        "/assets/gallary/gallery-79.jpeg",
        "/assets/gallary/gallery-80.jpeg",
        "/assets/gallary/gallery-81.jpeg",
        "/assets/gallary/gallery-82.jpeg",
        "/assets/gallary/gallery-83.jpeg",
        "/assets/gallary/gallery-84.jpeg",
        "/assets/gallary/gallery-85.jpeg",
        "/assets/gallary/gallery-86.jpeg",
        "/assets/gallary/gallery-87.jpeg",
        "/assets/gallary/gallery-88.jpeg",
        "/assets/gallary/gallery-89.jpeg",
        "/assets/gallary/gallery-90.jpeg",
        "/assets/gallary/gallery-91.jpeg",
        "/assets/gallary/gallery-92.jpeg",
        "/assets/gallary/gallery-93.jpeg",
        "/assets/gallary/gallery-94.jpeg",
        "/assets/gallary/gallery-95.jpeg",
        "/assets/gallary/gallery-96.jpeg",
        "/assets/gallary/gallery-97.jpeg",
        "/assets/gallary/gallery-98.jpeg",
        "/assets/gallary/gallery-99.jpeg",
        "/assets/gallary/gallery-100.jpeg",
        "/assets/gallary/gallery-101.jpeg",
        "/assets/gallary/gallery-102.jpeg",
        "/assets/gallary/gallery-103.jpeg",
        "/assets/gallary/gallery-104.jpeg",
        "/assets/gallary/gallery-105.jpeg",
    ];

    const [selectedImage, setSelectedImage] = React.useState(null);

    const getEmbedUrl = (url) => {
        if (!url) return null;
        try {
            const urlObj = new URL(url);
            if (urlObj.hostname.includes('instagram.com')) {
                const cleanPath = urlObj.pathname.replace(/\/$/, '');
                return `https://www.instagram.com${cleanPath}/embed`;
            }
            if (urlObj.hostname.includes('facebook.com')) {
                if (url.includes('/reel/') || url.includes('/video') || url.includes('watch')) {
                    return `https://www.facebook.com/plugins/video.php?href=${encodeURIComponent(url)}&show_text=false&width=400`;
                } else {
                    return `https://www.facebook.com/plugins/post.php?href=${encodeURIComponent(url)}&show_text=false&width=400`;
                }
            }
            if (urlObj.hostname.includes('tiktok.com')) {
                const videoIdMatch = url.match(/\/video\/(\d+)/);
                if (videoIdMatch) {
                    return `https://www.tiktok.com/embed/v2/${videoIdMatch[1]}`;
                }
            }
        } catch (e) {
            return null;
        }
        return null;
    };

    // Pagination State
    const articlesPerPage = 12;
    const galleryPerPage = 24;

    const [currentArticlePage, setCurrentArticlePage] = React.useState(1);
    const [currentGalleryPage, setCurrentGalleryPage] = React.useState(1);

    // Calculate Paginated Data
    const totalArticlePages = Math.ceil(preEventArticles.length / articlesPerPage);
    const paginatedArticles = preEventArticles.slice(
        (currentArticlePage - 1) * articlesPerPage,
        currentArticlePage * articlesPerPage
    );

    const totalGalleryPages = Math.ceil(allGalleryImages.length / galleryPerPage);
    const paginatedGallery = allGalleryImages.slice(
        (currentGalleryPage - 1) * galleryPerPage,
        currentGalleryPage * galleryPerPage
    );

    const handleArticlePageChange = (page) => {
        setCurrentArticlePage(page);
        setTimeout(() => {
            const el = document.getElementById('articles-section');
            if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
    };

    const handleGalleryPageChange = (page) => {
        setCurrentGalleryPage(page);
        setTimeout(() => {
            const el = document.getElementById('gallery-section');
            if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
    };

    return (
        <div className="pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            {/* Header Section */}
            <section className="pt-20 pb-16 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="space-y-4"
                >
                    <h1 className="text-5xl md:text-8xl font-bold text-white tracking-tighter">
                        PAST <span className="text-gold italic">HIGHLIGHTS</span>
                    </h1>
                    <p className="text-white/40 max-w-xl mx-auto uppercase tracking-widest text-sm">
                        Relive the legacy of Borneo Fashion Week
                    </p>
                </motion.div>
            </section>

            {/* Video Section */}
            <section className="mb-32">
                <h2 className="text-2xl font-bold text-white mb-8 border-l-4 border-gold pl-4 uppercase tracking-wider">Cinematic Archives</h2>

                {/* Video Carousel Removed for traditional grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Featured Video First */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="lg:col-span-2 relative aspect-video rounded-4xl overflow-hidden glassmorphism border-gold/10 group"
                    >
                        <iframe
                            src={videos[0].url}
                            title={videos[0].title}
                            className="w-full h-full brightness-90 group-hover:brightness-100 transition-all duration-700"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                        />
                        <div className="absolute top-8 left-8 p-4 glassmorphism rounded-2xl pointer-events-none group-hover:opacity-0 transition-opacity">
                            <span className="text-gold text-xs font-bold tracking-widest uppercase">{videos[0].year}</span>
                            <h3 className="text-2xl font-bold text-white">{videos[0].title}</h3>
                        </div>
                    </motion.div>

                    {/* Secondary Videos */}
                    {videos.slice(1).map((video, idx) => (
                        <motion.div
                            key={video.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.2 }}
                            className="relative aspect-video rounded-3xl overflow-hidden glassmorphism border-gold/5 group"
                        >
                            {video.isLocal ? (
                                <video
                                    src={video.url}
                                    title={video.title}
                                    className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-all duration-500"
                                    muted
                                    loop
                                    playsInline
                                    controls
                                />
                            ) : (
                                <iframe
                                    src={video.url}
                                    title={video.title}
                                    className="w-full h-full opacity-90 group-hover:opacity-100 transition-all duration-500"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    referrerPolicy="strict-origin-when-cross-origin"
                                    allowFullScreen
                                />
                            )}
                            <div className="absolute bottom-6 left-6 group-hover:opacity-0 transition-opacity bg-black/40 backdrop-blur-sm px-3 py-1 rounded-lg">
                                <h4 className="text-white text-sm font-bold">{video.title}</h4>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Articles Section */}
            <section id="articles-section" className="mb-32 scroll-mt-32">
                <div className="flex items-center justify-between mb-8">
                    <h2 className="text-2xl font-bold text-white border-l-4 border-gold pl-4 uppercase tracking-wider">Features & Articles</h2>
                    <span className="text-white/40 text-sm hidden sm:inline-block">{preEventArticles.length} Publications</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {paginatedArticles.map((article, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: (idx % 3) * 0.1 }}
                        >
                            <a
                                href={article.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex h-full flex-col overflow-hidden rounded-2xl glassmorphism border-white/5 hover:border-gold/30 hover:-translate-y-1 transition-all duration-300 group"
                            >
                                {article.image ? (
                                    <div className="w-full h-48 overflow-hidden bg-black/50 relative shrink-0">
                                        <img src={article.image} alt={article.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" onError={(e) => { e.target.style.display = 'none'; }} />
                                        <div className="absolute inset-0 bg-linear-to-t from-black/80 to-transparent" />
                                    </div>
                                ) : getEmbedUrl(article.url) ? (
                                    <div className="w-full h-48 overflow-hidden bg-black relative shrink-0 flex items-start justify-center group-hover:opacity-80 transition-opacity">
                                        <iframe
                                            src={getEmbedUrl(article.url)}
                                            className="w-full pointer-events-none"
                                            style={{ height: '600px', border: 'none', transform: 'translateY(-140px)' }}
                                            scrolling="no"
                                            frameBorder="0"
                                            allowTransparency="true"
                                        />
                                        <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                                    </div>
                                ) : (
                                    <div className={`w-full h-48 flex flex-col items-center justify-center shrink-0 opacity-80 group-hover:opacity-100 transition-opacity ${article.publisher.toLowerCase().includes('instagram')
                                        ? 'bg-linear-to-tr from-yellow-500 via-pink-500 to-purple-600'
                                        : article.publisher.toLowerCase().includes('facebook')
                                            ? 'bg-linear-to-tr from-blue-600 to-blue-400'
                                            : 'bg-white/5'
                                        }`}>
                                        {article.publisher.toLowerCase().includes('instagram') ? (
                                            <Instagram size={48} className="text-white mb-2 drop-shadow-lg" />
                                        ) : article.publisher.toLowerCase().includes('facebook') ? (
                                            <Facebook size={48} className="text-white mb-2 drop-shadow-lg" />
                                        ) : (
                                            <span className="text-white/20 font-bold tracking-widest uppercase text-xs">Article / Post</span>
                                        )}
                                        {(article.publisher.toLowerCase().includes('instagram') || article.publisher.toLowerCase().includes('facebook')) && (
                                            <span className="text-white font-bold tracking-widest uppercase text-xs drop-shadow-md">View Post</span>
                                        )}
                                    </div>
                                )}
                                <div className="p-6 flex-1 flex flex-col">
                                    <div className="flex justify-between items-start mb-4 gap-2">
                                        <span className="text-gold text-xs font-bold tracking-widest uppercase break-all">{article.publisher}</span>
                                        <ExternalLink className="w-4 h-4 text-white/40 group-hover:text-gold transition-colors shrink-0 mt-0.5" />
                                    </div>
                                    <h3 className="text-base font-bold text-white line-clamp-3">{article.title.replace('.html', '')}</h3>
                                </div>
                            </a>
                        </motion.div>
                    ))}
                </div>

                <Pagination
                    currentPage={currentArticlePage}
                    totalPages={totalArticlePages}
                    onPageChange={handleArticlePageChange}
                />
            </section>

            {/* Masonry Gallery Section */}
            <section id="gallery-section" className="mb-32 scroll-mt-32">
                <div className="flex items-center justify-between mb-12">
                    <h2 className="text-2xl font-bold text-white border-l-4 border-gold pl-4 uppercase tracking-wider">High-Lights Gallery</h2>
                    <span className="text-white/40 text-sm">{allGalleryImages.length} Collection</span>
                </div>

                <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
                    {paginatedGallery.map((src, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: (idx % 4) * 0.1 }}
                            className="break-inside-avoid relative rounded-2xl overflow-hidden glassmorphism border-white/5 cursor-zoom-in group"
                            onClick={() => setSelectedImage(src)}
                        >
                            <img
                                src={src}
                                alt={`Borneo Moment ${idx}`}
                                className="w-full h-auto transition-all duration-700 group-hover:scale-105"
                                loading="lazy"
                            />
                            <div className="absolute inset-0 bg-gold/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                <ExternalLink className="text-black" />
                            </div>
                        </motion.div>
                    ))}
                </div>

                <Pagination
                    currentPage={currentGalleryPage}
                    totalPages={totalGalleryPages}
                    onPageChange={handleGalleryPageChange}
                />
            </section>

            {/* Section: The Movement */}
            <MovementSection imageSrc="/assets/gallary/gallery-42.jpeg" />

            {/* Lightbox Modal */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedImage(null)}
                        className="fixed inset-0 z-100 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 cursor-zoom-out"
                    >
                        <button
                            onClick={(e) => { e.stopPropagation(); setSelectedImage(null); }}
                            className="absolute top-6 right-6 p-2 rounded-full glassmorphism text-white/50 hover:text-white transition-colors"
                        >
                            <X size={24} />
                        </button>
                        <motion.img
                            initial={{ scale: 0.9 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0.9 }}
                            src={selectedImage}
                            alt="Full screen view"
                            className="max-w-full max-h-[90vh] object-contain rounded-xl shadow-2xl shadow-black/50"
                            onClick={(e) => e.stopPropagation()}
                        />
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default MediaPage;
