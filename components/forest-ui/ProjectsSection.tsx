"use client";

import { motion } from "framer-motion";
import { projects } from "@/lib/constants";
import { ExternalLink, Github, Eye } from "lucide-react";

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
            delayChildren: 0.3,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
        },
    },
};

export function ProjectsSection() {
    const featuredProjects = projects.filter(project => project.featured);

    return (
        <section id="projects" className="py-20 px-6 relative">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="text-center mb-16"
                >
                    <motion.h2
                        variants={itemVariants}
                        className="text-4xl md:text-5xl font-bold text-foreground mb-6"
                    >
                        Featured Projects
                    </motion.h2>
                    <motion.div
                        variants={itemVariants}
                        className="w-20 h-1 bg-emerald-600 dark:bg-emerald-400 rounded-full mx-auto mb-6"
                    />
                    <motion.p
                        variants={itemVariants}
                        className="text-lg text-muted-foreground max-w-2xl mx-auto"
                    >
                        Here are some of my recent projects that showcase my skills and passion for creating
                        exceptional digital experiences.
                    </motion.p>
                </motion.div>

                {/* Projects Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid md:grid-cols-2 gap-8"
                >
                    {featuredProjects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            variants={itemVariants}
                            className="group relative"
                        >
                            <ProjectCard project={project} index={index} />
                        </motion.div>
                    ))}
                </motion.div>

                {/* View All Projects Button */}
                <motion.div
                    variants={itemVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="text-center mt-12"
                >
                    <motion.button
                        className="px-8 py-3 border-2 border-emerald-600 dark:border-emerald-400 text-emerald-600 dark:text-emerald-400 hover:bg-emerald-600 dark:hover:bg-emerald-400 hover:text-white rounded-full font-medium transition-all duration-300"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        View All Projects
                    </motion.button>
                </motion.div>
            </div>

            {/* Background decoration */}
            <motion.div
                className="absolute top-1/4 right-0 w-64 h-64 bg-gradient-radial from-emerald-200/10 to-transparent dark:from-emerald-800/5 rounded-full blur-3xl"
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                    duration: 12,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />
        </section>
    );
}

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
    return (
        <motion.div
            className="relative bg-card rounded-2xl overflow-hidden border border-border shadow-lg hover:shadow-2xl transition-all duration-500 group/card"
            whileHover={{ y: -8 }}
            transition={{ duration: 0.3 }}
        >
            {/* Project Image Placeholder */}
            <div className="relative h-48 bg-gradient-to-br from-emerald-100 to-green-200 dark:from-emerald-900/50 dark:to-green-900/50 overflow-hidden">
                {/* Placeholder pattern */}
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-200/20 to-green-300/20 dark:from-emerald-800/20 dark:to-green-800/20">
                    <motion.div
                        className="absolute inset-0 opacity-10"
                        animate={{
                            backgroundPosition: ["0% 0%", "100% 100%"],
                        }}
                        transition={{
                            duration: 8,
                            repeat: Infinity,
                            repeatType: "reverse",
                            ease: "linear",
                        }}
                        style={{
                            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23059669' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                        }}
                    />
                </div>

                {/* Project type badge */}
                <motion.div
                    className="absolute top-4 right-4 px-3 py-1 bg-emerald-600/90 text-white text-xs font-medium rounded-full backdrop-blur-sm"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                >
                    Featured
                </motion.div>
            </div>

            {/* Content */}
            <div className="p-6 space-y-4">
                <div>
                    <motion.h3
                        className="text-xl font-bold text-foreground mb-2 group-hover/card:text-emerald-600 dark:group-hover/card:text-emerald-400 transition-colors"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 + index * 0.1 }}
                    >
                        {project.title}
                    </motion.h3>

                    <motion.p
                        className="text-muted-foreground text-sm leading-relaxed line-clamp-3"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 + index * 0.1 }}
                    >
                        {project.description}
                    </motion.p>
                </div>

                {/* Technologies */}
                <motion.div
                    className="flex flex-wrap gap-2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                >
                    {project.technologies.slice(0, 3).map((tech) => (
                        <span
                            key={tech}
                            className="px-2 py-1 text-xs font-medium bg-emerald-100 dark:bg-emerald-900/50 text-emerald-700 dark:text-emerald-300 rounded-md"
                        >
                            {tech}
                        </span>
                    ))}
                    {project.technologies.length > 3 && (
                        <span className="px-2 py-1 text-xs font-medium bg-muted text-muted-foreground rounded-md">
                            +{project.technologies.length - 3} more
                        </span>
                    )}
                </motion.div>

                {/* Action buttons */}
                <motion.div
                    className="flex items-center gap-4 pt-2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                >
                    {project.liveUrl && (
                        <motion.a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-sm font-medium text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 transition-colors"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <ExternalLink className="w-4 h-4" />
                            <span>Live Demo</span>
                        </motion.a>
                    )}

                    {project.githubUrl && (
                        <motion.a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Github className="w-4 h-4" />
                            <span>Source</span>
                        </motion.a>
                    )}
                </motion.div>
            </div>

            {/* Hover overlay */}
            <motion.div
                className="absolute inset-0 bg-gradient-to-t from-emerald-600/5 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 pointer-events-none"
                initial={false}
                animate={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
            />

            {/* Animated border */}
            <motion.div
                className="absolute inset-0 rounded-2xl border-2 border-emerald-500/0 group-hover/card:border-emerald-500/50 transition-all duration-300"
                initial={false}
                animate={{ borderColor: "rgba(16, 185, 129, 0)" }}
                whileHover={{ borderColor: "rgba(16, 185, 129, 0.5)" }}
            />
        </motion.div>
    );
}
