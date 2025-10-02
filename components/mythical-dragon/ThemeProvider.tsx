"use client";

import { createContext, useContext, useEffect, useState } from "react";

type Theme = "dragon" | "dark";

interface ThemeContextType {
    theme: Theme;
    setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({
    children,
    defaultTheme = "dragon",
}: {
    children: React.ReactNode;
    defaultTheme?: Theme;
}) {
    const [theme, setTheme] = useState<Theme>(defaultTheme);

    useEffect(() => {
        // Apply theme-specific CSS variables
        const root = document.documentElement;

        if (theme === "dragon") {
            root.style.setProperty("--dragon-charcoal", "#1a1a1a");
            root.style.setProperty("--dragon-molten-orange", "#ff6b35");
            root.style.setProperty("--dragon-ember-red", "#d63031");
            root.style.setProperty("--dragon-smoky-purple", "#6c5ce7");
            root.style.setProperty("--dragon-glow-gold", "#fdcb6e");
            root.style.setProperty("--dragon-stone-gray", "#636e72");
            root.style.setProperty("--dragon-ash-white", "#ddd");
        }
    }, [theme]);

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}

export function useTheme() {
    const context = useContext(ThemeContext);
    if (context === undefined) {
        throw new Error("useTheme must be used within a ThemeProvider");
    }
    return context;
}
