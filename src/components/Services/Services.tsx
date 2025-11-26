"use client";

import { motion } from "framer-motion";
import { Bot, Brain, Zap, Code, BarChart, Globe } from "lucide-react";

const services = [
    {
        icon: <Brain className="w-8 h-8 text-primary" />,
        title: "AI Integration",
        description: "Seamlessly integrate advanced AI models into your existing workflows to boost efficiency.",
    },
    {
        icon: <Bot className="w-8 h-8 text-secondary" />,
        title: "Custom AI Agents",
        description: "Autonomous agents designed to handle customer support, data analysis, and more.",
    },
    {
        icon: <Zap className="w-8 h-8 text-yellow-400" />,
        title: "Process Automation",
        description: "Automate repetitive tasks with custom scripts and no-code solutions.",
    },
    {
        icon: <Code className="w-8 h-8 text-green-400" />,
        title: "Web Development",
        description: "High-performance, modern web applications built with Next.js and React.",
    },
    {
        icon: <BarChart className="w-8 h-8 text-pink-400" />,
        title: "Data Analytics",
        description: "Turn raw data into actionable insights with AI-powered analytics dashboards.",
    },
    {
        icon: <Globe className="w-8 h-8 text-blue-400" />,
        title: "SaaS Solutions",
        description: "Scalable software-as-a-service platforms tailored to your business needs.",
    },
];

export default function Services() {
    return (
        <section id="services" className="py-20 bg-background relative overflow-hidden">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">Our Services</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Comprehensive solutions to drive your digital transformation.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="p-8 rounded-2xl glass hover:bg-white/10 transition-all duration-300 group border border-white/5 hover:border-primary/50"
                        >
                            <div className="mb-6 p-4 bg-white/5 rounded-full w-fit group-hover:scale-110 transition-transform duration-300">
                                {service.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                                {service.title}
                            </h3>
                            <p className="text-gray-400 leading-relaxed">
                                {service.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
