"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-secondary/20 via-background to-background z-0" />

            <div className="container mx-auto px-6 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
                        We Build <span className="text-gradient">Intelligent</span> <br />
                        Digital Experiences
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-400 mb-8 max-w-2xl mx-auto">
                        Empowering businesses with AI Agents, Automation, and Next-Gen Web Solutions.
                    </p>

                    <div className="flex flex-col md:flex-row justify-center gap-4">
                        <button className="px-8 py-4 bg-primary text-black font-bold rounded-full hover:bg-primary/90 transition-all flex items-center justify-center gap-2">
                            Start Your Project <ArrowRight className="w-5 h-5" />
                        </button>
                        <button className="px-8 py-4 border border-white/20 rounded-full hover:bg-white/5 transition-all">
                            View Our Work
                        </button>
                    </div>
                </motion.div>
            </div>

            {/* Animated Elements */}
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse delay-1000" />
        </section>
    );
}
