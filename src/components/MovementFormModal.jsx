"use client";

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const MovementFormModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-100 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/80 backdrop-blur-sm"
                    />

                    {/* Modal Content */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        className="relative w-full max-w-lg glassmorphism p-8 rounded-3xl border border-white/10 shadow-2xl z-10 my-8"
                    >
                        <button
                            onClick={onClose}
                            className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors"
                        >
                            <X size={24} />
                        </button>

                        <h3 className="text-3xl font-bold text-white mb-2">Join the <span className="text-gold italic">Movement</span></h3>
                        <p className="text-white/60 mb-8">Register your interest today for our upcoming edition.</p>

                        <form className="space-y-4">
                            <div>
                                <label htmlFor="modal-name" className="block text-sm font-medium text-white/60 mb-1">Full Name</label>
                                <input
                                    type="text"
                                    id="modal-name"
                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-gold transition-colors"
                                    placeholder="John Doe"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="modal-email" className="block text-sm font-medium text-white/60 mb-1">Email Address</label>
                                <input
                                    type="email"
                                    id="modal-email"
                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-gold transition-colors"
                                    placeholder="john@example.com"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="modal-phone" className="block text-sm font-medium text-white/60 mb-1">Contact Number</label>
                                <input
                                    type="tel"
                                    id="modal-phone"
                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-gold transition-colors"
                                    placeholder="+60 12 345 6789"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="modal-message" className="block text-sm font-medium text-white/60 mb-1">Message (Optional)</label>
                                <textarea
                                    id="modal-message"
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
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default MovementFormModal;
