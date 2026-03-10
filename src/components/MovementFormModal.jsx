"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2, Loader2, Send } from 'lucide-react';

const MovementFormModal = ({ isOpen, onClose }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState('');

    if (!isOpen) return null;

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setError('');

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setSubmitted(true);
                setFormData({ name: '', email: '', phone: '', message: '' });
            } else {
                const data = await response.json();
                setError(data.error || 'Something went wrong. Please try again.');
            }
        } catch (err) {
            console.error('Error submitting application:', err);
            setError('Connection error. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleClose = () => {
        setSubmitted(false);
        setError('');
        onClose();
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-100 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={handleClose}
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
                            onClick={handleClose}
                            className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors"
                        >
                            <X size={24} />
                        </button>

                        {submitted ? (
                            <div className="py-12 text-center space-y-6">
                                <div className="w-20 h-20 bg-gold/20 rounded-full flex items-center justify-center mx-auto border border-gold/20">
                                    <CheckCircle2 className="text-gold" size={40} />
                                </div>
                                <h3 className="text-3xl font-bold text-white">Application Received</h3>
                                <p className="text-white/60">
                                    Thank you! Our team will review your application and contact you soon.
                                </p>
                                <button
                                    onClick={() => setSubmitted(false)}
                                    className="text-gold hover:underline font-medium"
                                >
                                    Submit another application
                                </button>
                            </div>
                        ) : (
                            <>
                                <h3 className="text-3xl font-bold text-white mb-2">Join the <span className="text-gold italic">Movement</span></h3>
                                <p className="text-white/60 mb-8">Register your interest today for our upcoming edition.</p>

                                <form onSubmit={handleSubmit} className="space-y-4">
                                    <div>
                                        <label htmlFor="modal-name" className="block text-sm font-medium text-white/60 mb-1">Full Name</label>
                                        <input
                                            type="text"
                                            id="modal-name"
                                            value={formData.name}
                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
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
                                            value={formData.email}
                                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
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
                                            value={formData.phone}
                                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
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
                                            value={formData.message}
                                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-gold transition-colors resize-none"
                                            placeholder="Tell us about yourself or your brand..."
                                        ></textarea>
                                    </div>

                                    {error && <p className="text-red-500 text-sm mt-2">{error}</p>}

                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full px-8 py-4 bg-gold text-black font-bold rounded-xl hover:scale-[1.02] active:scale-95 transition-all flex justify-center items-center gap-2 mt-4 disabled:opacity-50"
                                    >
                                        {isSubmitting ? (
                                            <Loader2 className="animate-spin" size={20} />
                                        ) : (
                                            <>
                                                <span>Submit Application</span>
                                                <Send size={18} />
                                            </>
                                        )}
                                    </button>
                                </form>
                            </>
                        )}
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default MovementFormModal;

