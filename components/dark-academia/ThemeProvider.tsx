"use client";

import { createContext, useContext, useEffect, useState } from "react";

type Theme = "dark" | "sepia";

type ThemeProviderProps = {
    children: React.ReactNode;
    defaultTheme?: Theme;
    storageKey?: string;
};

type ThemeProviderState = {
    theme: Theme;
    setTheme: (theme: Theme) => void;
};

const initialState: ThemeProviderState = {
    theme: "dark",
    setTheme: () => null,
};

const ThemeProviderContext = createContext<ThemeProviderState>(initialState);

export function ThemeProvider({
    children,
    defaultTheme = "dark",
    storageKey = "dark-academia-ui-theme",
    ...props
}: ThemeProviderProps) {
    const [theme, setTheme] = useState<Theme>(defaultTheme);
    const [mounted, setMounted] = useState(false);

    // Load saved theme after mount
    useEffect(() => {
        setMounted(true);

        try {
            const stored = window.localStorage.getItem(storageKey) as Theme | null;
            if (stored) {
                setTheme(stored);
            }
        } catch {
            // ignore (SSR safe)
        }
    }, [storageKey]);

    // Apply theme classes
    useEffect(() => {
        if (!mounted) return;

        const root = window.document.documentElement;
        root.classList.remove("light", "dark", "sepia");
        root.classList.add(theme);
    }, [theme, mounted]);

    const value = {
        theme,
        setTheme: (newTheme: Theme) => {
            try {
                window.localStorage.setItem(storageKey, newTheme);
            } catch {
                // ignore (SSR safe)
            }
            setTheme(newTheme);
        },
    };

    return (
        <ThemeProviderContext.Provider {...props} value={value}>
            {children}
        </ThemeProviderContext.Provider>
    );
}

export const useTheme = () => {
    const context = useContext(ThemeProviderContext);
    if (context === undefined)
        throw new Error("useTheme must be used within a ThemeProvider");
    return context;
};
