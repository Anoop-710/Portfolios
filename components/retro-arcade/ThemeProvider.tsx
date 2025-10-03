"use client";

import { createContext, useContext, useEffect, useState } from "react";

type Theme = "arcade" | "dark" | "light";

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
    defaultTheme = "arcade"
}: ThemeProviderProps) {
    const [theme, setTheme] = useState<Theme>(defaultTheme);

    useEffect(() => {
        // Apply theme-specific CSS custom properties
        const root = document.documentElement;

        if (theme === "arcade") {
            root.style.setProperty("--arcade-primary", "#00ffff");
            root.style.setProperty("--arcade-secondary", "#ff00ff");
            root.style.setProperty("--arcade-accent", "#ffff00");
            root.style.setProperty("--arcade-purple", "#ff00aa");
            root.style.setProperty("--arcade-bg", "#0a0a0a");
            root.style.setProperty("--arcade-surface", "#1a1a1a");
            root.style.setProperty("--arcade-border", "#333333");
        }
    }, [theme]);

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}
