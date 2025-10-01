'use client';

import { motion } from 'framer-motion';
import { useDesertTheme } from './ThemeProvider';

const Navigation = () => {
    const theme = useDesertTheme();

    const navItems = [
        { name: 'Home', href: '/' },
        { name: 'About', href: '#about' },
        { name: 'Projects', href: '#projects' },
        { name: 'Contact', href: '#contact' }
    ];

    return (
        <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-amber-50/90 to-transparent backdrop-blur-sm"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center py-4">
                    {/* Logo */}
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="text-2xl font-bold text-amber-800 flex items-center gap-2"
                    >
                        <div className="w-8 h-8 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full flex items-center justify-center">
                            🏜️
                        </div>
                        <span className="bg-gradient-to-r from-amber-700 to-orange-600 bg-clip-text text-transparent">
                            Desert Mirage
                        </span>
                    </motion.div>

                    {/* Navigation Links */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navItems.map((item, index) => (
                            <motion.a
                                key={item.name}
                                href={item.href}
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                whileHover={{
                                    scale: 1.05,
                                    textShadow: "0px 0px 8px rgba(212, 175, 55, 0.5)"
                                }}
                                className="relative text-amber-700 hover:text-amber-900 font-medium transition-colors duration-300 group"
                            >
                                {item.name}
                                <motion.div
                                    className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-400 to-orange-500 group-hover:w-full transition-all duration-300"
                                />
                            </motion.a>
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="md:hidden w-10 h-10 bg-gradient-to-br from-amber-100 to-orange-200 rounded-lg flex items-center justify-center shadow-lg"
                    >
                        <svg className="w-6 h-6 text-amber-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </motion.button>
                </div>
            </div>
        </motion.nav>
    );
};

export default Navigation;
