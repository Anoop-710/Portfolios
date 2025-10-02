"use client";

import { ThemeProvider } from "@/components/mythical-dragon/ThemeProvider";
import { Navigation } from "@/components/mythical-dragon/Navigation";
import { HeroSection } from "@/components/mythical-dragon/HeroSection";
import { AboutSection } from "@/components/mythical-dragon/AboutSection";
import { ProjectsSection } from "@/components/mythical-dragon/ProjectsSection";
import { ContactSection } from "@/components/mythical-dragon/ContactSection";
import { EmberParticles } from "@/components/mythical-dragon/EmberParticles";
import { DragonSilhouette } from "@/components/mythical-dragon/DragonSilhouette";

export default function MythicalDragonPortfolio() {
    return (
        <ThemeProvider>
            <div className="min-h-screen bg-gradient-to-br from-stone-900 via-slate-900 to-purple-900 text-amber-100 relative overflow-hidden">
                {/* Background Effects */}
                <EmberParticles count={25} />
                <DragonSilhouette className="opacity-30" />

                {/* Main Content */}
                <div className="relative z-10">
                    <Navigation />
                    <main>
                        <HeroSection />
                        <AboutSection />
                        <ProjectsSection />
                        <ContactSection />
                    </main>
                </div>

                {/* Custom CSS for dragon theme */}
                <style jsx global>{`
          :root {
            --dragon-charcoal: #1a1a1a;
            --dragon-molten-orange: #ff6b35;
            --dragon-ember-red: #d63031;
            --dragon-smoky-purple: #6c5ce7;
            --dragon-glow-gold: #fdcb6e;
            --dragon-stone-gray: #636e72;
            --dragon-ash-white: #ddd;
          }

          .dragon-gradient {
            background: linear-gradient(135deg, var(--dragon-molten-orange), var(--dragon-ember-red), var(--dragon-smoky-purple));
          }

          .stone-texture {
            background-image:
              radial-gradient(circle at 25% 25%, rgba(139, 69, 19, 0.1) 0%, transparent 50%),
              radial-gradient(circle at 75% 75%, rgba(160, 82, 45, 0.1) 0%, transparent 50%);
          }

          .rune-glow {
            text-shadow: 0 0 10px var(--dragon-glow-gold), 0 0 20px var(--dragon-molten-orange);
          }

          .ember-glow {
            box-shadow: 0 0 20px rgba(255, 107, 53, 0.3), 0 0 40px rgba(214, 48, 49, 0.2);
          }

          .heat-shimmer::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: linear-gradient(45deg, transparent 30%, rgba(255, 255, 255, 0.1) 50%, transparent 70%);
            animation: shimmer 2s infinite;
            pointer-events: none;
          }

          @keyframes shimmer {
            0% { transform: translateX(-100%); }
            100% { transform: translateX(100%); }
          }

          .dragon-scale {
            background-image:
              radial-gradient(circle at 50% 50%, rgba(139, 69, 19, 0.3) 1px, transparent 1px),
              radial-gradient(circle at 50% 50%, rgba(160, 82, 45, 0.2) 1px, transparent 1px);
            background-size: 20px 20px, 15px 15px;
            background-position: 0 0, 10px 10px;
          }

          .lava-glow {
            background: radial-gradient(ellipse at center, var(--dragon-molten-orange) 0%, var(--dragon-ember-red) 50%, transparent 100%);
            animation: lavaPulse 3s ease-in-out infinite alternate;
          }

          @keyframes lavaPulse {
            0% { opacity: 0.6; transform: scale(1); }
            100% { opacity: 0.9; transform: scale(1.05); }
          }

          @media (prefers-reduced-motion: reduce) {
            .heat-shimmer::before {
              animation: none;
            }
            .lava-glow {
              animation: none;
            }
          }
        `}</style>
            </div>
        </ThemeProvider>
    );
}
