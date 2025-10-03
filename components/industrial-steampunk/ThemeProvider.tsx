"use client";

import { createContext, useContext, useEffect, useState } from "react";

type Theme = "steampunk" | "dark" | "light";

interface ThemeContextType {
    theme: Theme;
    setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function useTheme() {
    const context = useContext(ThemeContext);
    if (context === undefined) {
        throw new Error("useTheme must be used within a ThemeProvider");
    }
    return context;
}

interface ThemeProviderProps {
    children: React.ReactNode;
    defaultTheme?: Theme;
}

export function ThemeProvider({
    children,
    defaultTheme = "steampunk"
}: ThemeProviderProps) {
    const [theme, setTheme] = useState<Theme>(defaultTheme);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        const savedTheme = localStorage.getItem("steampunk-theme") as Theme;
        if (savedTheme) {
            setTheme(savedTheme);
        }
    }, []);

    useEffect(() => {
        if (mounted) {
            localStorage.setItem("steampunk-theme", theme);

            // Apply theme-specific CSS variables
            const root = document.documentElement;

            switch (theme) {
                case "steampunk":
                    root.style.setProperty("--primary", "oklch(0.65 0.15 45)");
                    root.style.setProperty("--primary-foreground", "oklch(0.98 0 0)");
                    root.style.setProperty("--secondary", "oklch(0.55 0.12 45)");
                    root.style.setProperty("--secondary-foreground", "oklch(0.98 0 0)");
                    root.style.setProperty("--accent", "oklch(0.6 0.18 25)");
                    root.style.setProperty("--accent-foreground", "oklch(0.98 0 0)");
                    root.style.setProperty("--background", "oklch(0.15 0.05 45)");
                    root.style.setProperty("--foreground", "oklch(0.98 0 0)");
                    root.style.setProperty("--card", "oklch(0.2 0.08 45)");
                    root.style.setProperty("--card-foreground", "oklch(0.95 0 0)");
                    root.style.setProperty("--border", "oklch(0.4 0.1 45)");
                    root.style.setProperty("--input", "oklch(0.25 0.08 45)");
                    root.style.setProperty("--ring", "oklch(0.65 0.15 45)");
                    break;
                case "dark":
                    root.style.setProperty("--primary", "oklch(0.7 0.15 45)");
                    root.style.setProperty("--primary-foreground", "oklch(0.15 0 0)");
                    root.style.setProperty("--secondary", "oklch(0.3 0.05 45)");
                    root.style.setProperty("--secondary-foreground", "oklch(0.95 0 0)");
                    root.style.setProperty("--accent", "oklch(0.4 0.1 45)");
                    root.style.setProperty("--accent-foreground", "oklch(0.95 0 0)");
                    root.style.setProperty("--background", "oklch(0.1 0 0)");
                    root.style.setProperty("--foreground", "oklch(0.95 0 0)");
                    root.style.setProperty("--card", "oklch(0.15 0 0)");
                    root.style.setProperty("--card-foreground", "oklch(0.95 0 0)");
                    root.style.setProperty("--border", "oklch(0.3 0.05 45)");
                    root.style.setProperty("--input", "oklch(0.2 0 0)");
                    root.style.setProperty("--ring", "oklch(0.7 0.15 45)");
                    break;
                case "light":
                    root.style.setProperty("--primary", "oklch(0.6 0.15 45)");
                    root.style.setProperty("--primary-foreground", "oklch(0.15 0 0)");
                    root.style.setProperty("--secondary", "oklch(0.9 0.02 45)");
                    root.style.setProperty("--secondary-foreground", "oklch(0.15 0 0)");
                    root.style.setProperty("--accent", "oklch(0.8 0.05 45)");
                    root.style.setProperty("--accent-foreground", "oklch(0.15 0 0)");
                    root.style.setProperty("--background", "oklch(0.98 0 0)");
                    root.style.setProperty("--foreground", "oklch(0.15 0 0)");
                    root.style.setProperty("--card", "oklch(0.95 0 0)");
                    root.style.setProperty("--card-foreground", "oklch(0.15 0 0)");
                    root.style.setProperty("--border", "oklch(0.8 0.05 45)");
                    root.style.setProperty("--input", "oklch(0.9 0 0)");
                    root.style.setProperty("--ring", "oklch(0.6 0.15 45)");
                    break;
            }
        }
    }, [theme, mounted]);

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}
