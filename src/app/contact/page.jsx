"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, Phone, MapPin, Instagram, Facebook, CheckCircle2 } from 'lucide-react';

const ContactPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: ''
    });
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const validate = () => {
        let newErrors = {};
        if (!formData.name) newErrors.name = "Name is required";

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!formData.email) {
            newErrors.email = "Email is required";
        } else if (!emailRegex.test(formData.email)) {
            newErrors.email = "Invalid email format";
        }

        // Malaysian Phone validation (01x-xxxxxxx or +601x-xxxxxxx)
        const phoneRegex = /^(?:\+601|01)[0-46-9]-?\d{7,8}$/;
        if (!formData.phone) {
            newErrors.phone = "Phone number is required";
        } else if (!phoneRegex.test(formData.phone)) {
            newErrors.phone = "Invalid Malaysian phone format";
        }

        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length === 0) {
            setIsSubmitting(true);
            // Simulate API call
            setTimeout(() => {
                setIsSubmitting(false);
                setSubmitted(true);
            }, 1500);
        } else {
            setErrors(validationErrors);
        }
    };

    return (
        <div className="pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            {/* Header */}
            <section className="pt-20 pb-16 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="space-y-4"
                >
                    <span className="text-gold tracking-[0.4em] uppercase text-xs font-bold mb-4 block">The Portal</span>
                    <h1 className="text-5xl md:text-8xl font-bold text-white tracking-tighter">
                        GET IN <span className="text-gold italic">TOUCH</span>
                    </h1>
                    <p className="text-white/40 max-w-xl mx-auto uppercase tracking-widest text-sm">
                        Connect with the Borneo Fashion Week management team
                    </p>
                </motion.div>
            </section>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
                {/* Contact Info */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="space-y-12"
                >
                    <div className="space-y-6">
                        <h2 className="text-3xl font-bold text-white">Direct Channels</h2>
                        <p className="text-white/60 leading-relaxed text-lg">
                            Whether you are a designer, a sponsor, or a media partner, we are ready to discuss how you can be part of Borneo Fashion Week.
                        </p>
                    </div>

                    <div className="space-y-8">
                        <div className="flex items-start space-x-6 group">
                            <div className="p-4 glassmorphism rounded-2xl group-hover:scale-110 transition-all border-gold/20">
                                <Mail className="text-gold" size={24} />
                            </div>
                            <div>
                                <h4 className="text-white/40 text-xs uppercase tracking-widest mb-1">Email Us</h4>
                                <a href="mailto:sharawiasaad@gmail.com" className="text-xl text-white hover:text-gold transition-colors font-medium">sharawiasaad@gmail.com</a>
                            </div>
                        </div>

                        <div className="flex items-start space-x-6 group">
                            <div className="p-4 glassmorphism rounded-2xl group-hover:scale-110 transition-all border-gold/20">
                                <Phone className="text-gold" size={24} />
                            </div>
                            <div>
                                <h4 className="text-white/40 text-xs uppercase tracking-widest mb-1">Call Us</h4>
                                <a href="tel:0177777772" className="text-xl text-white hover:text-gold transition-colors font-medium">017 777 7772</a>
                            </div>
                        </div>

                        <div className="flex items-start space-x-6 group">
                            <div className="p-4 glassmorphism rounded-2xl group-hover:scale-110 transition-all border-gold/20">
                                <MapPin className="text-gold" size={24} />
                            </div>
                            <div>
                                <h4 className="text-white/40 text-xs uppercase tracking-widest mb-1">Office</h4>
                                <p className="text-xl text-white font-medium">OneMediaGroup, Borneo, Malaysia</p>
                            </div>
                        </div>
                    </div>

                    <div className="pt-12 border-t border-white/10">
                        <h4 className="text-white font-semibold mb-6">Social Handles</h4>
                        <div className="flex space-x-6">
                            <Link href="https://www.instagram.com/borneofashionweek26/" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 text-white/60 hover:text-gold transition-colors">
                                <Instagram size={20} />
                                <span>Instagram</span>
                            </Link>
                            <Link href="https://www.facebook.com/BFW2019" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 text-white/60 hover:text-gold transition-colors">
                                <Facebook size={20} />
                                <span>Facebook</span>
                            </Link>
                        </div>
                    </div>
                </motion.div>

                {/* Lead Capture Form */}
                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="relative"
                >
                    <div className="glassmorphism p-10 rounded-[3rem] border-gold/10 relative z-10">
                        {submitted ? (
                            <div className="py-20 text-center space-y-6">
                                <div className="w-20 h-20 bg-gold/20 rounded-full flex items-center justify-center mx-auto">
                                    <CheckCircle2 className="text-gold" size={40} />
                                </div>
                                <h3 className="text-2xl font-bold text-white">Message Delivered</h3>
                                <p className="text-white/60">Our team will contact you within 24-48 hours. Thank you for reaching out to Borneo Fashion Week.</p>
                                <button
                                    onClick={() => setSubmitted(false)}
                                    className="text-gold hover:underline"
                                >
                                    Send another message
                                </button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-8">
                                <div className="space-y-2">
                                    <label className="text-xs uppercase tracking-[0.2em] text-white/60 font-bold ml-4">Full Name</label>
                                    <input
                                        type="text"
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        placeholder="E.g. Ariff Salleh"
                                        className={`w-full bg-white/5 border ${errors.name ? 'border-red-500/50' : 'border-white/10'} rounded-2xl p-4 text-white focus:outline-none focus:animate-gold-pulse transition-all`}
                                    />
                                    {errors.name && <p className="text-red-500 text-[10px] ml-4 mt-1">{errors.name}</p>}
                                </div>

                                <div className="space-y-2">
                                    <label className="text-xs uppercase tracking-[0.2em] text-white/60 font-bold ml-4">Email Address</label>
                                    <input
                                        type="email"
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        placeholder="ariff@example.com"
                                        className={`w-full bg-white/5 border ${errors.email ? 'border-red-500/50' : 'border-white/10'} rounded-2xl p-4 text-white focus:outline-none focus:animate-gold-pulse transition-all`}
                                    />
                                    {errors.email && <p className="text-red-500 text-[10px] ml-4 mt-1">{errors.email}</p>}
                                </div>

                                <div className="space-y-2">
                                    <label className="text-xs uppercase tracking-[0.2em] text-white/60 font-bold ml-4">Contact Number (Malaysia)</label>
                                    <input
                                        type="tel"
                                        value={formData.phone}
                                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                        placeholder="017 777 7772"
                                        className={`w-full bg-white/5 border ${errors.phone ? 'border-red-500/50' : 'border-white/10'} rounded-2xl p-4 text-white focus:outline-none focus:animate-gold-pulse transition-all`}
                                    />
                                    {errors.phone && <p className="text-red-500 text-[10px] ml-4 mt-1">{errors.phone}</p>}
                                </div>

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full py-5 bg-gold text-black font-bold rounded-2xl flex items-center justify-center space-x-3 hover:scale-[1.02] active:scale-95 transition-all disabled:opacity-50"
                                >
                                    {isSubmitting ? (
                                        <div className="w-6 h-6 border-2 border-black border-t-transparent rounded-full animate-spin" />
                                    ) : (
                                        <>
                                            <span>Submit Inquiry</span>
                                            <Send size={18} />
                                        </>
                                    )}
                                </button>
                            </form>
                        )}
                    </div>

                    {/* Background Glow */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gold/5 blur-[100px] rounded-full pointer-events-none z-0" />
                </motion.div>
            </div>
        </div>
    );
};

// Help Link helper
const Link = ({ children, href, className }) => (
    <a href={href} className={className}>{children}</a>
);

export default ContactPage;
