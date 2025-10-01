"use client";

import { createContext, useContext, useEffect, useState } from "react";

type Theme = "light" | "dark";

interface ThemeContextType {
    theme: Theme;
    toggleTheme: () => void;
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
    storageKey?: string;
}

export function ThemeProvider({
    children,
    defaultTheme = "dark",
    storageKey = "autumn-portfolio-theme",
}: ThemeProviderProps) {
    const [theme, setTheme] = useState<Theme>("dark");
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        // Apply dark class immediately to prevent flash
        document.documentElement.classList.add("dark");

        setMounted(true);
        try {
            const stored = localStorage.getItem(storageKey) as Theme;
            if (stored && (stored === "light" || stored === "dark")) {
                setTheme(stored);
            } else {
                // Always default to dark mode for autumn theme, ignore system preference
                setTheme("dark");
            }
        } catch (error) {
            // Fallback to dark mode if localStorage is not available
            setTheme("dark");
        }
    }, [storageKey]);

    useEffect(() => {
        if (mounted) {
            try {
                localStorage.setItem(storageKey, theme);
            } catch (error) {
                // Ignore localStorage errors
            }
            document.documentElement.classList.remove("light", "dark");
            document.documentElement.classList.add(theme);
        }
    }, [theme, mounted, storageKey]);

    const toggleTheme = () => {
        setTheme(prev => prev === "light" ? "dark" : "light");
    };

    // Prevent hydration mismatch by not rendering until mounted
    if (!mounted) {
        return (
            <ThemeContext.Provider value={{ theme: defaultTheme, toggleTheme }}>
                <div style={{ visibility: "hidden" }}>
                    {children}
                </div>
            </ThemeContext.Provider>
        );
    }

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}
