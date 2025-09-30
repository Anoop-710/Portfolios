"use client";

import { motion } from "framer-motion";
import Link from "next/link";

interface HeaderProps {
  isDarkMode: boolean;
}

export default function Header({ isDarkMode }: HeaderProps) {
  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        isDarkMode ? "bg-gray-900/80 text-white" : "bg-white/80 text-gray-800"
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="font-bold text-xl"
        >
          <Link href="/">ForestPortfolio</Link>
        </motion.div>

        <nav className="hidden md:flex space-x-8">
          {["Home", "About", "Projects", "Contact"].map((item, index) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 + index * 0.1 }}
              className="hover:text-green-600 transition-colors duration-300"
            >
              {item}
            </motion.a>
          ))}
        </nav>
      </div>
    </header>
  );
}
