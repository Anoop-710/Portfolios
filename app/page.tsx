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

const portfolioData = [
  {
    id: 0,
    title: "Desert Mirage",
    subtitle: "Nomadic Developer Portfolio",
    description: "Professional portfolio inspired by desert landscapes with warm color palettes, dune animations, and mirage effects. Perfect for developers who want a unique, memorable online presence.",
    features: ["Sand dune parallax", "Mirage effects", "Warm color palette", "Professional layout"],
    route: "/desert",
    gradient: "from-orange-500 to-red-500",
    bgGradient: "from-orange-50 to-red-50",
    icon: "🏜️"
  },
  {
    id: 1,
    title: "Autumn Harvest",
    subtitle: "Seasonal Developer Showcase",
    description: "Elegant portfolio featuring autumn themes with falling leaves, golden hour lighting, and harvest-inspired design elements. Ideal for showcasing development skills with seasonal charm.",
    features: ["Falling leaves animation", "Golden hour effects", "Harvest themes", "Responsive design"],
    route: "/autumn",
    gradient: "from-amber-500 to-orange-500",
    bgGradient: "from-amber-50 to-orange-50",
    icon: "🍂"
  },
  {
    id: 2,
    title: "Enchanted Forest",
    subtitle: "Nature-Inspired Portfolio",
    description: "Immersive forest-themed portfolio with mist effects, fireflies, and natural animations. Creates a serene, professional environment for showcasing development projects.",
    features: ["Mist effects", "Firefly animations", "Forest atmosphere", "Dark mode support"],
    route: "/forest",
    gradient: "from-green-500 to-emerald-500",
    bgGradient: "from-green-50 to-emerald-50",
    icon: "🌲"
  },
  {
    id: 3,
    title: "Cyberpunk Matrix",
    subtitle: "Futuristic Developer Portfolio",
    description: "High-tech cyberpunk portfolio with neon aesthetics, glitch effects, and futuristic animations. Perfect for developers working in modern tech stacks and emerging technologies.",
    features: ["Neon aesthetics", "Glitch effects", "Dark theme", "Modern animations"],
    route: "/cyberpunk",
    gradient: "from-purple-500 to-pink-500",
    bgGradient: "from-purple-50 to-pink-50",
    icon: "⚡"
  },
  {
    id: 4,
    title: "Ocean Depths",
    subtitle: "Aquatic Developer Portfolio",
    description: "Deep ocean-themed portfolio with fluid animations, underwater effects, and marine-inspired design. Creates a calming, professional space for showcasing technical expertise.",
    features: ["Fluid animations", "Underwater effects", "Calming atmosphere", "Professional layout"],
    route: "/ocean",
    gradient: "from-blue-500 to-cyan-500",
    bgGradient: "from-blue-50 to-cyan-50",
    icon: "🌊"
  },
  {
    id: 5,
    title: "Mountain Vista",
    subtitle: "Alpine Developer Portfolio",
    description: "Mountain-inspired portfolio featuring sunrise animations, layered landscapes, and serene atmospheres. Perfect for developers who value clarity and professional presentation.",
    features: ["Mountain landscapes", "Sunrise animations", "Layered design", "Clean aesthetics"],
    route: "/mountain",
    gradient: "from-indigo-500 to-blue-500",
    bgGradient: "from-indigo-50 to-blue-50",
    icon: "🏔️"
  },
  {
    id: 6,
    title: "Steampunk Workshop",
    subtitle: "Vintage Tech Portfolio",
    description: "Victorian-era inspired portfolio with steampunk aesthetics, gear animations, and mechanical themes. Combines vintage charm with modern development expertise.",
    features: ["Gear animations", "Vintage aesthetics", "Mechanical themes", "Unique design"],
    route: "/steampunk",
    gradient: "from-amber-600 to-orange-600",
    bgGradient: "from-amber-100 to-orange-100",
    icon: "⚙️"
  },
  {
    id: 7,
    title: "Cosmic Galaxy",
    subtitle: "Stellar Developer Portfolio",
    description: "Space-themed portfolio with cosmic animations, stellar backgrounds, and galactic design elements. Perfect for developers passionate about technology and innovation.",
    features: ["Cosmic animations", "Starfield effects", "Space themes", "Modern design"],
    route: "/galaxy",
    gradient: "from-violet-500 to-purple-500",
    bgGradient: "from-violet-50 to-purple-50",
    icon: "🌌"
  },
  {
    id: 8,
    title: "Deep Space Odyssey",
    subtitle: "Cosmic Developer Portfolio",
    description: "Deep space exploration themed portfolio with nebulae, cosmic phenomena, and interstellar design. Creates an immersive experience for showcasing development skills.",
    features: ["Nebula effects", "Cosmic phenomena", "Dark themes", "Immersive experience"],
    route: "/deep-space",
    gradient: "from-slate-600 to-gray-600",
    bgGradient: "from-slate-100 to-gray-100",
    icon: "🚀"
  },
  {
    id: 15,
    title: "Zen Garden",
    subtitle: "Sakura Blossom Portfolio",
    description: "Serene Japanese zen garden inspired portfolio with cherry blossoms, koi ponds, and stone lanterns. Features falling sakura petals, swimming koi fish, and tranquil animations for a peaceful browsing experience.",
    features: ["Sakura petal animations", "Koi pond background", "Stone lantern lighting", "Zen philosophy quotes"],
    route: "/zen-garden",
    gradient: "from-pink-500 to-emerald-500",
    bgGradient: "from-pink-50 to-emerald-50",
    icon: "🌸"
  },
  {
    id: 16,
    title: "Dark Academia",
    subtitle: "Dark Academia Portfolio",
    description: "Intellectual developer portfolio inspired by Gothic cathedrals and ancient libraries. Features stained glass windows, candlelight effects, parchment cards, and illuminated manuscript styling for a dramatic, scholarly presentation.",
    features: ["Stained glass animations", "Candle flicker effects", "Parchment-style cards", "Gothic architecture"],
    route: "/dark-academia",
    gradient: "from-amber-600 to-orange-600",
    bgGradient: "from-amber-100 to-orange-100",
    icon: "🏰"
  },
  {
    id: 17,
    title: "Neon Synthwave",
    subtitle: "Futuristic Neon Portfolio",
    description: "Ultra-modern portfolio with retro-futuristic synthwave aesthetics featuring animated neon grids, holographic panels, and cyberpunk-inspired design elements. Perfect for developers who want to showcase their work with cutting-edge visual effects.",
    features: ["Animated neon grids", "Holographic panels", "Synthwave sun", "Cyberpunk aesthetics"],
    route: "/neon",
    gradient: "from-pink-500 to-cyan-500",
    bgGradient: "from-pink-50 to-cyan-50",
    icon: "⚡"
  },
  {
    id: 18,
    title: "🧬 Biotech Flow",
    subtitle: "DNA Helix Portfolio",
    description: "Futuristic biotechnology-themed portfolio featuring rotating DNA helix animations, neuron connection lines, and liquid morphing backgrounds. Perfect for developers specializing in bioinformatics and life sciences technology.",
    features: ["DNA helix animation", "Neuron connections", "Liquid morphing", "Bioinformatics theme"],
    route: "/biotech",
    gradient: "from-cyan-500 to-green-500",
    bgGradient: "from-cyan-50 to-green-50",
    icon: "🧬"
  }
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 text-slate-900">
      {/* Navbar */}
      <nav className="bg-white/80 backdrop-blur-md fixed top-0 left-0 right-0 z-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-slate-800">
            Portfolio Studio
          </Link>
          <div className="hidden md:flex space-x-8">
            <Link href="#templates" className="text-slate-600 hover:text-slate-900 transition-colors font-medium">
              Templates
            </Link>
            <Link href="#features" className="text-slate-600 hover:text-slate-900 transition-colors font-medium">
              Features
            </Link>
            <Link href="#pricing" className="text-slate-600 hover:text-slate-900 transition-colors font-medium">
              Pricing
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/forest" className="hidden md:block text-slate-600 hover:text-slate-800 transition-colors font-medium">
              View Demo
            </Link>
            <button className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-2 rounded-lg font-medium hover:shadow-lg transition-all">
              Get Started
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-20 text-center">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-slate-900 via-blue-800 to-indigo-800 bg-clip-text text-transparent">
              Professional Portfolio Templates
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-12 leading-relaxed">
              Choose from our collection of professionally designed portfolio templates.
              Each template is crafted with attention to detail, performance optimization, and modern design principles.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-xl transition-all transform hover:scale-105">
                Browse Templates
              </button>
              <button className="border-2 border-slate-300 text-slate-700 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-slate-50 transition-all">
                View Features
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Templates Grid */}
      <section id="templates" className="py-20 px-6 bg-white/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Choose Your Perfect Template
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Each template is designed with modern development practices, responsive design, and optimized performance in mind.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioData.map((portfolio, index) => (
              <motion.div
                key={portfolio.id}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="group relative"
              >
                <Link href={portfolio.route} className="block">
                  <div className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-200 h-full">
                    {/* Icon and Title */}
                    <div className="text-center mb-6">
                      <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-r ${portfolio.gradient} flex items-center justify-center text-2xl`}>
                        {portfolio.icon}
                      </div>
                      <h3 className="text-2xl font-bold text-slate-900 mb-2">
                        {portfolio.title}
                      </h3>
                      <p className="text-sm text-slate-600 font-medium">
                        {portfolio.subtitle}
                      </p>
                    </div>

                    {/* Description */}
                    <p className="text-slate-700 leading-relaxed mb-6 text-sm">
                      {portfolio.description}
                    </p>

                    {/* Features */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-slate-800 mb-3">Key Features:</h4>
                      <div className="flex flex-wrap gap-2">
                        {portfolio.features.map((feature, featureIndex) => (
                          <span
                            key={featureIndex}
                            className={`px-3 py-1 bg-gradient-to-r ${portfolio.gradient} text-white text-xs rounded-full`}
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* CTA */}
                    <div className="text-center">
                      <span className={`inline-flex items-center px-4 py-2 bg-gradient-to-r ${portfolio.gradient} text-white text-sm font-medium rounded-lg group-hover:shadow-lg transition-all`}>
                        View Template
                        <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </span>
                    </div>

                    {/* Hover Effect */}
                    <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${portfolio.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Why Choose Our Templates?
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Built with modern technologies and best practices for optimal performance and user experience.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Performance Optimized",
                description: "All templates are built with performance in mind, featuring lazy loading, code splitting, and optimized animations.",
                icon: "⚡"
              },
              {
                title: "Responsive Design",
                description: "Fully responsive across all devices with mobile-first approach and adaptive layouts for all screen sizes.",
                icon: "📱"
              },
              {
                title: "Modern Stack",
                description: "Built with Next.js 15, TypeScript, Tailwind CSS, and Framer Motion for the best development experience.",
                icon: "🚀"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center p-8 bg-white rounded-2xl shadow-lg border border-slate-200"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Build Your Portfolio?
          </h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Choose a template that matches your style and start building a professional portfolio that showcases your skills effectively.
          </p>
          <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-xl transition-all transform hover:scale-105">
            Get Started Today
          </button>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Portfolio Studio</h3>
              <p className="text-slate-300">
                Professional portfolio templates for modern developers and designers.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Templates</h4>
              <ul className="space-y-2 text-slate-300">
                <li><Link href="/desert" className="hover:text-white transition-colors">Desert Mirage</Link></li>
                <li><Link href="/autumn" className="hover:text-white transition-colors">Autumn Harvest</Link></li>
                <li><Link href="/forest" className="hover:text-white transition-colors">Enchanted Forest</Link></li>
                <li><Link href="/cyberpunk" className="hover:text-white transition-colors">Cyberpunk Matrix</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-slate-300">
                <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Support</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Community</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-slate-300">
                <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-700 pt-8 text-center">
            <p className="text-slate-400">
              © 2025 Portfolio Studio. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
