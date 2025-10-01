"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      staggerChildren: 0.1,
    },
  },
};

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 text-white">
      {/* Navbar */}
      <nav className="bg-slate-800/80 backdrop-blur-md fixed top-0 left-0 right-0 z-50">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="text-xl font-bold">
            Portfolio Hub
          </Link>
          <div className="hidden md:flex space-x-6">
            <Link href="/" className="hover:text-blue-400 transition-colors">
              Home
            </Link>
            <Link href="/" className="hover:text-blue-400 transition-colors">
              About
            </Link>
            <Link href="/" className="hover:text-blue-400 transition-colors">
              Contact
            </Link>
          </div>
          <Link href="/forest" className="md:hidden bg-blue-600 px-4 py-2 rounded-md font-medium">
            View Demo
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-20 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Choose Your Portfolio
          </h1>
          <p className="text-xl text-slate-200 max-w-2xl mx-auto">
            Discover and explore different portfolio templates designed for modern developers
          </p>
        </div>
      </section>

      {/* 9 Cards Grid */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Array.from({ length: 9 }, (_, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="relative"
            >
              <Link href={
                index === 0 ? "/forest" :
                  index === 1 ? "/cyberpunk" :
                    index === 2 ? "/ocean" :
                      index === 3 ? "/mountain" :
                        index === 4 ? "/steampunk" :
                          index === 5 ? "/cyberpunk" :
                            "/"
              } className="block">
                <div className={`relative backdrop-blur-md rounded-2xl p-8 text-center hover:bg-white/20 transition-all duration-300 shadow-xl hover:shadow-2xl h-64 flex items-center justify-center border border-white/20 ${index === 1 || index === 4 || index === 5 ?
                    'bg-gradient-to-br from-cyan-900/30 via-purple-900/30 to-pink-900/30' :
                    'bg-white/10'
                  }`}>
                  <div className={`absolute inset-0 rounded-2xl ${index === 1 || index === 4 || index === 5 ?
                      'bg-gradient-to-r from-cyan-600/20 to-purple-600/20' :
                      'bg-gradient-to-r from-blue-600/20 to-purple-600/20'
                    }`} />
                  <div>
                    <h3 className="text-2xl font-bold mb-3">
                      {index === 0 ? "Forest Portfolio" :
                        index === 1 ? "Cyberpunk Portfolio" :
                          index === 2 ? "Ocean Portfolio" :
                            index === 3 ? "Mountain Portfolio" :
                              index === 4 ? "Steampunk Portfolio" :
                                index === 5 ? "Cyberpunk City" :
                                  `Portfolio ${index + 1}`}
                    </h3>
                    <p className="text-sm opacity-90">
                      {index === 0
                        ? "Forest-inspired developer portfolio with immersive animations"
                        : index === 1
                          ? "Cyberpunk city-themed portfolio with neon aesthetics and futuristic design"
                          : index === 2
                            ? "Underwater ocean-themed portfolio with aquatic animations and deep-sea atmosphere"
                            : index === 3
                              ? "Mountain dawn-themed portfolio with sunrise animations and serene landscapes"
                              : index === 4
                                ? "Ancient scroll meets steampunk machinery with animated gears and vintage aesthetics"
                                : index === 5
                                  ? "Neon-lit cyberpunk portfolio with holographic effects and city vibes"
                                  : `Modern ${index + 1} portfolio template`
                      }
                    </p>
                  </div>
                  <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="text-xs px-2 py-1 bg-blue-600 text-white rounded-full">
                      Explore →
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-800/30 backdrop-blur-md mt-20 py-8 border-t border-white/20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-sm opacity-75">
            © 2025 Portfolio Hub. Made with ❤️ for developers.
          </p>
          <div className="flex justify-center space-x-4 mt-4">
            <a href="#" className="text-blue-300 hover:text-blue-100 transition-colors">
              GitHub
            </a>
            <a href="#" className="text-blue-300 hover:text-blue-100 transition-colors">
              Twitter
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
