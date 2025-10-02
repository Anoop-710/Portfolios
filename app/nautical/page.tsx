"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import HeroSection from "@/components/nautical/HeroSection";
import AboutSection from "@/components/nautical/AboutSection";
import ProjectsSection from "@/components/nautical/ProjectsSection";
import ContactSection from "@/components/nautical/ContactSection";
import Navigation from "@/components/nautical/Navigation";
import ThemeProvider from "@/components/nautical/ThemeProvider";
import MapOverlay from "@/components/nautical/MapOverlay";

export default function NauticalPortfolio() {
    const [currentSection, setCurrentSection] = useState("hero");

    return (
        <ThemeProvider>
            <div className="relative min-h-screen bg-nautical-parchment-light dark:bg-nautical-parchment-dark overflow-x-hidden">
                {/* Animated background elements */}
                <MapOverlay />

                {/* Navigation */}
                <Navigation currentSection={currentSection} setCurrentSection={setCurrentSection} />

                {/* Main content sections */}
                <motion.main
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1.2 }}
                    className="relative z-10"
                >
                    <HeroSection setCurrentSection={setCurrentSection} />
                    <AboutSection />
                    <ProjectsSection />
                    <ContactSection />
                </motion.main>

                {/* Decorative rope borders */}
                <div className="fixed top-0 left-0 w-full h-4 bg-gradient-to-r from-transparent via-amber-600/20 to-transparent dark:via-amber-400/20 z-20" />
                <div className="fixed bottom-0 left-0 w-full h-4 bg-gradient-to-r from-transparent via-amber-600/20 to-transparent dark:via-amber-400/20 z-20" />
            </div>
        </ThemeProvider>
    );
}
