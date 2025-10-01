import { Metadata } from 'next';
import Navigation from '@/components/desert/Navigation';
import HeroSection from '@/components/desert/HeroSection';
import AboutSection from '@/components/desert/AboutSection';
import ProjectsSection from '@/components/desert/ProjectsSection';
import ContactSection from '@/components/desert/ContactSection';
import DuneBackground from '@/components/desert/DuneBackground';
import { DesertThemeProvider } from '@/components/desert/ThemeProvider';

export const metadata: Metadata = {
    title: 'Desert Mirage | Nomadic Developer Portfolio',
    description: 'A developer portfolio inspired by desert mirages and nomadic sands, featuring warm dunes, golden light, and handcrafted desert motifs.',
    keywords: ['developer', 'portfolio', 'desert', 'nomadic', 'React', 'Next.js', 'TypeScript'],
};

export default function DesertPage() {
    return (
        <DesertThemeProvider>
            <div className="min-h-screen bg-gradient-to-b from-amber-50 via-orange-50 to-yellow-100 relative">
                {/* Animated Background */}
                <DuneBackground />

                {/* Navigation */}
                <Navigation />

                {/* Main Content */}
                <main className="relative z-10">
                    <HeroSection />
                    <AboutSection />
                    <ProjectsSection />
                    <ContactSection />
                </main>

                {/* Footer */}
                <footer className="relative z-10 bg-gradient-to-t from-amber-900/20 to-transparent py-8">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <div className="flex justify-center items-center gap-2 mb-4">
                            <div className="w-8 h-8 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full flex items-center justify-center">
                                🏜️
                            </div>
                            <span className="text-amber-800 font-semibold">Desert Mirage Portfolio</span>
                        </div>
                        <p className="text-amber-700 text-sm">
                            Crafted with the spirit of the desert nomad • Built with Next.js & Framer Motion
                        </p>
                    </div>
                </footer>
            </div>
        </DesertThemeProvider>
    );
}
