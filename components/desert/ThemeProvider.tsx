'use client';

import { createContext, useContext, ReactNode } from 'react';

interface DesertTheme {
    colors: {
        sand: string;
        dune: string;
        gold: string;
        amber: string;
        bronze: string;
        shadow: string;
        light: string;
        accent: string;
    };
    textures: {
        woven: string;
        leather: string;
        parchment: string;
    };
}

const desertTheme: DesertTheme = {
    colors: {
        sand: '#F4E4BC',
        dune: '#E6D3A3',
        gold: '#D4AF37',
        amber: '#FFBF00',
        bronze: '#CD7F32',
        shadow: '#8B7355',
        light: '#FFF8DC',
        accent: '#B8860B'
    },
    textures: {
        woven: 'bg-gradient-to-br from-amber-50 to-yellow-100',
        leather: 'bg-gradient-to-br from-orange-100 to-amber-200',
        parchment: 'bg-gradient-to-br from-yellow-50 to-orange-50'
    }
};

const ThemeContext = createContext<DesertTheme>(desertTheme);

export const useDesertTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useDesertTheme must be used within a DesertThemeProvider');
    }
    return context;
};

interface DesertThemeProviderProps {
    children: ReactNode;
}

export const DesertThemeProvider = ({ children }: DesertThemeProviderProps) => {
    return (
        <ThemeContext.Provider value={desertTheme}>
            {children}
        </ThemeContext.Provider>
    );
};
