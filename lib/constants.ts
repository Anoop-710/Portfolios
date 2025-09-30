import { PersonalInfo, Project, Skill } from "@/types";

export const personalInfo: PersonalInfo = {
    name: "Alex Chen",
    role: "Full Stack Developer",
    tagline: "Crafting digital experiences with nature's inspiration",
    bio: "Passionate full-stack developer with 5+ years of experience creating beautiful, functional web applications. I love combining modern technologies with elegant design to build products that users love to interact with.",
    location: "San Francisco, CA",
    email: "alex@example.com",
    githubUrl: "https://github.com/alexchen",
    linkedinUrl: "https://linkedin.com/in/alexchen",
    resumeUrl: "/resume.pdf",
};

export const skills: Skill[] = [
    // Frontend
    { id: "react", name: "React", category: "frontend", level: 95 },
    { id: "nextjs", name: "Next.js", category: "frontend", level: 90 },
    { id: "typescript", name: "TypeScript", category: "frontend", level: 88 },
    { id: "tailwind", name: "Tailwind CSS", category: "frontend", level: 92 },
    { id: "framer-motion", name: "Framer Motion", category: "frontend", level: 85 },

    // Backend
    { id: "nodejs", name: "Node.js", category: "backend", level: 87 },
    { id: "python", name: "Python", category: "backend", level: 82 },
    { id: "postgresql", name: "PostgreSQL", category: "backend", level: 80 },
    { id: "mongodb", name: "MongoDB", category: "backend", level: 78 },

    // Tools
    { id: "git", name: "Git", category: "tools", level: 90 },
    { id: "docker", name: "Docker", category: "tools", level: 75 },
    { id: "aws", name: "AWS", category: "tools", level: 70 },
    { id: "figma", name: "Figma", category: "design", level: 83 },
];

export const projects: Project[] = [
    {
        id: "ecommerce-platform",
        title: "E-Commerce Platform",
        description: "Full-stack e-commerce solution with React, Node.js, and Stripe integration.",
        longDescription: "A comprehensive e-commerce platform featuring user authentication, product management, shopping cart, payment processing, and admin dashboard. Built with modern web technologies and best practices.",
        technologies: ["React", "Node.js", "PostgreSQL", "Stripe", "Tailwind CSS"],
        githubUrl: "https://github.com/alexchen/ecommerce-platform",
        liveUrl: "https://ecommerce-demo.alexchen.dev",
        imageUrl: "/projects/ecommerce.jpg",
        featured: true,
    },
    {
        id: "task-management",
        title: "Task Management App",
        description: "Collaborative task management tool with real-time updates and team features.",
        longDescription: "A real-time collaborative task management application with features like drag-and-drop kanban boards, team collaboration, time tracking, and progress analytics.",
        technologies: ["Next.js", "Socket.io", "Prisma", "PostgreSQL", "Framer Motion"],
        githubUrl: "https://github.com/alexchen/task-manager",
        liveUrl: "https://tasks.alexchen.dev",
        imageUrl: "/projects/taskmanager.jpg",
        featured: true,
    },
    {
        id: "weather-app",
        title: "Weather Dashboard",
        description: "Beautiful weather app with forecasts, maps, and interactive data visualizations.",
        longDescription: "A responsive weather dashboard featuring current conditions, 7-day forecasts, interactive maps, and data visualizations. Includes location-based weather and severe weather alerts.",
        technologies: ["React", "D3.js", "OpenWeather API", "Geolocation API"],
        githubUrl: "https://github.com/alexchen/weather-app",
        liveUrl: "https://weather.alexchen.dev",
        imageUrl: "/projects/weather.jpg",
        featured: false,
    },
    {
        id: "portfolio-cms",
        title: "Portfolio CMS",
        description: "Headless CMS for managing portfolio content with a clean admin interface.",
        longDescription: "A headless content management system specifically designed for portfolios. Features include dynamic content editing, image optimization, SEO management, and API-first architecture.",
        technologies: ["Next.js", "Sanity", "Vercel", "TypeScript"],
        githubUrl: "https://github.com/alexchen/portfolio-cms",
        imageUrl: "/projects/cms.jpg",
        featured: false,
    },
];
