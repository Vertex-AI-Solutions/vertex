"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const projects = [
    {
        title: "AI Customer Support Agent",
        category: "AI & Automation",
        image: "https://placehold.co/600x400/1a1a1a/00E5FF?text=AI+Agent",
    },
    {
        title: "E-commerce Analytics Dashboard",
        category: "Web App",
        image: "https://placehold.co/600x400/1a1a1a/9D00FF?text=Analytics",
    },
    {
        title: "Automated Lead Gen System",
        category: "Automation",
        image: "https://placehold.co/600x400/1a1a1a/FFFFFF?text=Automation",
    },
    {
        title: "Fintech Mobile App",
        category: "Mobile Development",
        image: "https://placehold.co/600x400/1a1a1a/00E5FF?text=Fintech",
    },
];

export default function Portfolio() {
    return (
        <section id="portfolio" className="py-20 bg-black/50">
            <div className="container mx-auto px-6 md:px-20 lg:px-30">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">Selected Work</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        A glimpse into our recent projects and success stories.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group relative overflow-hidden rounded-2xl aspect-video cursor-pointer"
                        >
                            <Image
                                unoptimized={true}
                                src={project.image}
                                alt={project.title}
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-center p-4">
                                <h3 className="text-2xl font-bold text-white mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                    {project.title}
                                </h3>
                                <p className="text-primary translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                                    {project.category}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
