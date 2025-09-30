export interface Project {
    id: string;
    title: string;
    description: string;
    longDescription: string;
    technologies: string[];
    githubUrl?: string;
    liveUrl?: string;
    imageUrl: string;
    featured: boolean;
}

export interface Skill {
    id: string;
    name: string;
    category: "frontend" | "backend" | "tools" | "design";
    level: number; // 1-100
}

export interface PersonalInfo {
    name: string;
    role: string;
    tagline: string;
    bio: string;
    location: string;
    email: string;
    resumeUrl?: string;
    githubUrl: string;
    linkedinUrl?: string;
}
