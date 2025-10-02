import { ThemeProvider } from "@/components/masquerade/ThemeProvider";
import { Navigation } from "@/components/masquerade/Navigation";
import { HeroSection } from "@/components/masquerade/HeroSection";
import { AboutSection } from "@/components/masquerade/AboutSection";
import { ProjectsSection } from "@/components/masquerade/ProjectsSection";
import { ContactSection } from "@/components/masquerade/ContactSection";

export default function MasqueradePage() {
    return (
        <ThemeProvider defaultTheme="dark">
            <div className="min-h-screen bg-black text-white">
                <Navigation />
                <main>
                    <HeroSection />
                    <AboutSection />
                    <ProjectsSection />
                    <ContactSection />
                </main>

                {/* Footer */}
                <footer className="bg-black border-t border-gold-400/20 py-12">
                    <div className="max-w-7xl mx-auto px-6 text-center">
                        <div className="flex justify-center items-center space-x-4 mb-6">
                            <div className="w-8 h-8 bg-gradient-to-r from-gold-400 to-yellow-500 rounded-full flex items-center justify-center">
                                🎭
                            </div>
                            <span className="text-xl font-bold text-gold-300">Masquerade Studios</span>
                        </div>
                        <p className="text-slate-400 text-sm">
                            © 2025 Masquerade Studios. Crafting digital experiences behind elegant masks.
                        </p>
                    </div>
                </footer>
            </div>
        </ThemeProvider>
    );
}
