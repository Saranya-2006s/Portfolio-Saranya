export type SkillCategory = 'Frontend' | 'Backend' | 'AI & Data' | 'DevOps & Cloud' | 'Tools & Design' | 'Programming Languages' | 'Core Computer Science' | 'Databases' | 'AI & Data Science' | 'Cybersecurity & Tools' | 'Tools & Platforms';

export interface Skill {
  id: string;
  name: string;
  category: SkillCategory;
  level: 'Expert' | 'Advanced' | 'Intermediate';
  yearsOfExperience: number;
  featured: boolean;
  iconName?: string;
}

export type ProjectCategory = 'All' | 'Full Stack' | 'Frontend' | 'Backend' | 'AI & Machine Learning' | 'Mobile' | 'Open Source';

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  fullDescription: string;
  category: ProjectCategory;
  tags: string[];
  imageUrl: string;
  demoUrl?: string;
  githubUrl?: string;
  featured: boolean;
  status: 'Completed' | 'In Progress' | 'Beta';
  date: string;
  highlights: string[];
  architecture?: string[];
  metrics?: { label: string; value: string }[];
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  current: boolean;
  type: 'Full-time' | 'Contract' | 'Remote' | 'Freelance' | 'Internship';
  description: string;
  achievements: string[];
  techStack: string[];
}

export interface Education {
  id: string;
  degree: string;
  field: string;
  institution: string;
  location: string;
  period: string;
  achievements?: string[];
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
  credentialUrl?: string;
}

export interface ProfileInfo {
  name: string;
  title: string;
  subtitle: string;
  bio: string;
  shortBio: string;
  location: string;
  email: string;
  phone?: string;
  avatarUrl: string;
  status: string;
  availability: 'Available for Hire' | 'Open for Freelance' | 'Not Available' | 'Available for Internships & Jobs';
  yearsOfExperience: number;
  projectsCompleted: number;
  happyClients: number;
  githubUrl: string;
  linkedinUrl: string;
  twitterUrl: string;
  leetcodeUrl?: string;
  websiteUrl?: string;
  resumeUrl?: string;
}

export interface ContactMessage {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  projectType: string;
  timestamp: string;
}

export interface PortfolioData {
  profile: ProfileInfo;
  projects: Project[];
  skills: Skill[];
  experiences: Experience[];
  education: Education[];
  certifications: Certification[];
}
