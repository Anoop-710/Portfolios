import { ThemeProvider } from "@/components/biotech/ThemeProvider";
import { HeroSection } from "@/components/biotech/HeroSection";
import { AboutSection } from "@/components/biotech/AboutSection";
import { ProjectsSection } from "@/components/biotech/ProjectsSection";
import { ContactSection } from "@/components/biotech/ContactSection";

export default function BiotechPortfolio() {
    return (
        <ThemeProvider defaultTheme="dark">
            <div className="min-h-screen bg-slate-900">
                <HeroSection />
                <AboutSection />
                <ProjectsSection />
                <ContactSection />
            </div>
        </ThemeProvider>
    );
}
