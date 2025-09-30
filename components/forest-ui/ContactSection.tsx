"use client";

import { motion } from "framer-motion";
import { personalInfo } from "@/lib/constants";
import { Mail, MapPin, Send, Github, Linkedin } from "lucide-react";
import { useState } from "react";

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
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
        },
    },
};

export function ContactSection() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate form submission
        await new Promise(resolve => setTimeout(resolve, 1000));

        // Reset form
        setFormData({ name: "", email: "", subject: "", message: "" });
        setIsSubmitting(false);

        // Show success message (you could add a toast notification here)
        alert("Message sent successfully!");
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    return (
        <section id="contact" className="py-20 px-6 relative">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid lg:grid-cols-2 gap-16 items-start"
                >
                    {/* Contact Info */}
                    <div className="space-y-8">
                        <motion.div variants={itemVariants}>
                            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                                Get In Touch
                            </h2>
                            <div className="w-20 h-1 bg-emerald-600 dark:bg-emerald-400 rounded-full mb-6" />
                        </motion.div>

                        <motion.p
                            variants={itemVariants}
                            className="text-lg text-muted-foreground leading-relaxed"
                        >
                            Have a project in mind or want to discuss opportunities?
                            I&apos;d love to hear from you. Let&apos;s create something amazing together.
                        </motion.p>

                        {/* Contact Details */}
                        <motion.div variants={itemVariants} className="space-y-6">
                            <div className="flex items-center gap-4 p-4 rounded-lg bg-card border border-border hover:border-emerald-500/50 dark:hover:border-emerald-400/50 transition-all duration-300">
                                <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900/50 rounded-full flex items-center justify-center">
                                    <Mail className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                                </div>
                                <div>
                                    <div className="font-medium text-foreground">Email</div>
                                    <div className="text-muted-foreground">{personalInfo.email}</div>
                                </div>
                            </div>

                            <div className="flex items-center gap-4 p-4 rounded-lg bg-card border border-border hover:border-emerald-500/50 dark:hover:border-emerald-400/50 transition-all duration-300">
                                <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900/50 rounded-full flex items-center justify-center">
                                    <MapPin className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                                </div>
                                <div>
                                    <div className="font-medium text-foreground">Location</div>
                                    <div className="text-muted-foreground">{personalInfo.location}</div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Social Links */}
                        <motion.div variants={itemVariants} className="space-y-4">
                            <h3 className="font-semibold text-foreground">Follow Me</h3>
                            <div className="flex gap-4">
                                <motion.a
                                    href={personalInfo.githubUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-12 h-12 bg-card border border-border rounded-full flex items-center justify-center hover:border-emerald-500/50 dark:hover:border-emerald-400/50 hover:bg-emerald-50 dark:hover:bg-emerald-900/50 transition-all duration-300"
                                    whileHover={{ scale: 1.1, y: -2 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <Github className="w-5 h-5 text-muted-foreground hover:text-emerald-600 dark:hover:text-emerald-400" />
                                </motion.a>

                                {personalInfo.linkedinUrl && (
                                    <motion.a
                                        href={personalInfo.linkedinUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-12 h-12 bg-card border border-border rounded-full flex items-center justify-center hover:border-emerald-500/50 dark:hover:border-emerald-400/50 hover:bg-emerald-50 dark:hover:bg-emerald-900/50 transition-all duration-300"
                                        whileHover={{ scale: 1.1, y: -2 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <Linkedin className="w-5 h-5 text-muted-foreground hover:text-emerald-600 dark:hover:text-emerald-400" />
                                    </motion.a>
                                )}
                            </div>
                        </motion.div>
                    </div>

                    {/* Contact Form */}
                    <motion.div variants={itemVariants} className="relative">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                                        Name
                                    </label>
                                    <motion.input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 dark:focus:ring-emerald-400 dark:focus:border-emerald-400 transition-all duration-300"
                                        placeholder="Your name"
                                        whileFocus={{ scale: 1.02 }}
                                    />
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                                        Email
                                    </label>
                                    <motion.input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 dark:focus:ring-emerald-400 dark:focus:border-emerald-400 transition-all duration-300"
                                        placeholder="your.email@example.com"
                                        whileFocus={{ scale: 1.02 }}
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                                    Subject
                                </label>
                                <motion.input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 dark:focus:ring-emerald-400 dark:focus:border-emerald-400 transition-all duration-300"
                                    placeholder="What's this about?"
                                    whileFocus={{ scale: 1.02 }}
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                                    Message
                                </label>
                                <motion.textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows={6}
                                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 dark:focus:ring-emerald-400 dark:focus:border-emerald-400 transition-all duration-300 resize-none"
                                    placeholder="Tell me about your project or just say hello..."
                                    whileFocus={{ scale: 1.02 }}
                                />
                            </div>

                            <motion.button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full px-8 py-3 bg-emerald-600 hover:bg-emerald-700 dark:bg-emerald-500 dark:hover:bg-emerald-600 text-white rounded-full font-medium transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                                whileHover={!isSubmitting ? { scale: 1.05 } : {}}
                                whileTap={!isSubmitting ? { scale: 0.95 } : {}}
                            >
                                {isSubmitting ? (
                                    <>
                                        <motion.div
                                            className="w-4 h-4 border-2 border-white border-t-transparent rounded-full"
                                            animate={{ rotate: 360 }}
                                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                                        />
                                        Sending...
                                    </>
                                ) : (
                                    <>
                                        <Send className="w-4 h-4" />
                                        Send Message
                                    </>
                                )}
                            </motion.button>
                        </form>
                    </motion.div>
                </motion.div>
            </div>

            {/* Decorative elements */}
            <motion.div
                className="absolute bottom-10 left-10 w-32 h-32 border-2 border-emerald-200/20 dark:border-emerald-700/20 rounded-full"
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />

            <motion.div
                className="absolute top-20 left-1/3 w-2 h-2 bg-emerald-400/40 rounded-full"
                animate={{
                    scale: [0, 1.2, 0],
                    opacity: [0, 0.8, 0],
                }}
                transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />
        </section>
    );
}
