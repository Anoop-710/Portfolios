"use client";

import { motion } from "framer-motion";
import { useTheme } from "./ThemeProvider";

export function Navigation() {
    const { theme, toggleTheme } = useTheme();

    return (
        <motion.nav
            className="fixed top-0 left-0 right-0 z-50 bg-amber-50/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-amber-200 dark:border-amber-800"
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6 }}
        >
            <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
                {/* Logo */}
                <motion.div
                    className="flex items-center space-x-2"
                    whileHover={{ scale: 1.05 }}
                >
                    <div className="w-8 h-8 bg-gradient-to-br from-amber-500 to-orange-600 rounded-lg flex items-center justify-center">
                        🍂
                    </div>
                    <span className="text-xl font-bold text-amber-900 dark:text-amber-100">
                        Autumn Harvest
                    </span>
                </motion.div>

                {/* Navigation Links */}
                <div className="hidden md:flex items-center space-x-8">
                    {[
                        { name: "Home", href: "#home" },
                        { name: "About", href: "#about" },
                        { name: "Projects", href: "#projects" },
                        { name: "Contact", href: "#contact" },
                    ].map((item, index) => (
                        <motion.a
                            key={item.name}
                            href={item.href}
                            className="text-amber-800 dark:text-amber-200 hover:text-amber-600 dark:hover:text-amber-400 transition-colors font-medium"
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ scale: 1.05 }}
                        >
                            {item.name}
                        </motion.a>
                    ))}
                </div>

                {/* Theme Toggle */}
                <motion.button
                    onClick={toggleTheme}
                    className="p-2 rounded-full bg-amber-100 dark:bg-amber-900 hover:bg-amber-200 dark:hover:bg-amber-800 transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    {theme === "light" ? (
                        <motion.span
                            initial={{ rotate: -90 }}
                            animate={{ rotate: 0 }}
                            className="text-amber-800 dark:text-amber-200"
                        >
                            🌙
                        </motion.span>
                    ) : (
                        <motion.span
                            initial={{ rotate: 90 }}
                            animate={{ rotate: 0 }}
                            className="text-amber-200 dark:text-amber-100"
                        >
                            ☀️
                        </motion.span>
                    )}
                </motion.button>
            </div>
        </motion.nav>
    );
}
