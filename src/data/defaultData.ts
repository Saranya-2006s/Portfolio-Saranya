import { PortfolioData } from '../types/portfolio';

export const initialPortfolioData: PortfolioData = {
  profile: {
    name: "SARANYA S",
    title: "B.Tech IT Engineer & Full-Stack Developer",
    subtitle: "Information Technology Student at VSB Engineering College specializing in Full-Stack Web Development, AI/ML Applications, and Data Structures.",
    bio: "I’m a passionate B.Tech Information Technology student and aspiring AI & Full-Stack Developer, focused on building practical web applications and intelligent software solutions. My technical interests include Java, Python, React, TypeScript, Node.js, MongoDB, SQL, and Artificial Intelligence. I enjoy transforming real-world problems into useful applications by combining clean frontend experiences, reliable backend services, databases, and AI/ML technologies.",
    shortBio: "B.Tech IT student skilled in Java, Python, SQL, React, Node.js, and AI-driven applications.",
    location: "Karur District, Tamil Nadu, India",
    email: "saranyasasikumarsaranya@gmail.com",
    phone: "+91 6374494749",
    avatarUrl: "/src/assets/images/saranya_official_photo_1785504540617.jpg",
    status: "Looking for Software Engineering & Full-Stack Opportunities",
    availability: "Available for Internships & Jobs",
    yearsOfExperience: 2,
    projectsCompleted: 6,
    happyClients: 8,
    githubUrl: "https://github.com/Saranya-2006s",
    linkedinUrl: "https://linkedin.com",
    twitterUrl: "https://x.com",
    leetcodeUrl: "https://leetcode.com/u/Saranya_Sasikumar/",
    websiteUrl: "https://github.com/Saranya-2006s",
    resumeUrl: "https://drive.google.com/file/d/1oaKHHI8b6EqFdQGdNwkfUMRLqY8B7AOp/view?usp=sharing",
  },
  projects: [
    {
      id: "proj-1",
      title: "AI Chatbot Application",
      subtitle: "Intelligent conversational chatbot using Natural Language Processing",
      description: "An interactive AI chatbot application capable of understanding user queries, providing smart contextual responses, and seamlessly integrating with web interfaces.",
      fullDescription: "Built an intelligent conversational system utilizing Natural Language Processing (NLP) and Python Flask APIs connected with a responsive React user interface for instant contextual response generation.",
      category: "AI & Machine Learning",
      tags: ["Python", "Flask", "NLP", "React", "JavaScript", "REST APIs"],
      imageUrl: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1000&auto=format&fit=crop",
      demoUrl: "https://github.com/Saranya-2006s",
      githubUrl: "https://github.com/Saranya-2006s",
      featured: true,
      status: "Completed",
      date: "2024 - 2025",
      highlights: [
        "Implemented natural language query handling and intent identification",
        "Integrated Flask REST API backend with modern React web UI",
        "Optimized response parsing for instant interactive user dialogue"
      ],
      metrics: [
        { label: "Query Resolution", value: "95%" },
        { label: "Response Speed", value: "< 200ms" }
      ]
    },
    {
      id: "proj-2",
      title: "AI-Powered Intelligent Surveillance System – GUARDIAN VISION",
      subtitle: "Real-time threat detection and CCTV video analytics framework",
      description: "An advanced computer vision surveillance platform using YOLO and OpenCV for real-time object detection, anomaly recognition, and instant security alerting.",
      fullDescription: "GUARDIAN VISION leverages deep learning, computer vision models (YOLO, OpenCV), and video pipeline processing to analyze CCTV camera feeds, spot unauthorized activities, and trigger instant alerts.",
      category: "AI & Machine Learning",
      tags: ["Python", "OpenCV", "YOLO", "Deep Learning", "CCTV Integration", "Flask"],
      imageUrl: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?q=80&w=1000&auto=format&fit=crop",
      demoUrl: "https://github.com/Saranya-2006s",
      githubUrl: "https://github.com/Saranya-2006s",
      featured: true,
      status: "Completed",
      date: "2024 - 2025",
      highlights: [
        "Constructed real-time multi-stream object detection using YOLO and OpenCV",
        "Configured anomaly detection algorithm for unauthorized motion triggers",
        "Integrated CCTV video input streams with web security dashboard"
      ],
      metrics: [
        { label: "Detection Accuracy", value: "96.8%" },
        { label: "Processing Speed", value: "30 FPS" }
      ]
    },
    {
      id: "proj-3",
      title: "AI-Powered Cybersecurity Platform",
      subtitle: "Intelligent threat monitoring and automated vulnerability detection",
      description: "A proactive cybersecurity intelligence suite analyzing network traffic patterns, identifying malicious intrusions, and safeguarding web application endpoints.",
      fullDescription: "Developed a cybersecurity monitoring tool using Wireshark, Kali Linux environment tools, and Machine Learning algorithms to inspect packet signatures and block unauthorized network intrusions.",
      category: "AI & Machine Learning",
      tags: ["Python", "Machine Learning", "Kali Linux", "Wireshark", "Network Security", "REST APIs"],
      imageUrl: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1000&auto=format&fit=crop",
      demoUrl: "https://github.com/Saranya-2006s",
      githubUrl: "https://github.com/Saranya-2006s",
      featured: true,
      status: "Completed",
      date: "2025 - 2026",
      highlights: [
        "Analyzed live network traffic packets using Wireshark signatures",
        "Trained classification models to identify suspicious payload behavior",
        "Simulated vulnerability testing scenarios on Kali Linux platforms"
      ],
      metrics: [
        { label: "Threat Prevention", value: "Proactive" },
        { label: "Intrusion Detection", value: "Real-time" }
      ]
    },
    {
      id: "proj-4",
      title: "Fake Profile Detection Setup System",
      subtitle: "Social media anomaly detector classifying fraudulent user accounts",
      description: "A machine learning pipeline that analyzes user profile metadata, activity metrics, and behavioral patterns to detect fake or automated bot accounts.",
      fullDescription: "Built a classification system with Scikit-learn to parse social media profile metrics, identifying automated bots and fraudulent profile setups with high precision.",
      category: "AI & Machine Learning",
      tags: ["Python", "Scikit-Learn", "Machine Learning", "Flask", "React", "MongoDB"],
      imageUrl: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1000&auto=format&fit=crop",
      demoUrl: "https://github.com/Saranya-2006s",
      githubUrl: "https://github.com/Saranya-2006s",
      featured: true,
      status: "Completed",
      date: "2025 - 2026",
      highlights: [
        "Engineered feature extraction for profile metadata, post frequency, and follower ratios",
        "Trained Scikit-Learn supervised classification models (Random Forest / SVM)",
        "Exposed model predictions via Flask REST endpoint to React frontend"
      ]
    },
    {
      id: "proj-5",
      title: "Data Science Web Scraper for Book Analytics",
      subtitle: "Automated web data extraction and visual analytics pipeline",
      description: "An automated web scraping and data processing pipeline collecting book datasets, analyzing market pricing trends, and generating visual analytics dashboards.",
      fullDescription: "Created an automated scraping pipeline using BeautifulSoup, Scrapy, Pandas, and Matplotlib to aggregate large book catalog data and generate visual market insights.",
      category: "Full Stack",
      tags: ["Python", "BeautifulSoup", "Scrapy", "Pandas", "Matplotlib", "Data Visualization"],
      imageUrl: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=1000&auto=format&fit=crop",
      demoUrl: "https://github.com/Saranya-2006s",
      githubUrl: "https://github.com/Saranya-2006s",
      featured: false,
      status: "Completed",
      date: "2025 - 2026",
      highlights: [
        "Automated multi-page web scraping with BeautifulSoup and Scrapy",
        "Cleaned and structured raw HTML datasets into structured Pandas DataFrames",
        "Plotted pricing and rating distributions using Matplotlib and Seaborn"
      ]
    },
    {
      id: "proj-6",
      title: "AI-Health Symptom Checker",
      subtitle: "Intelligent diagnostic assistant providing preliminary health insights",
      description: "An AI-powered healthcare assistant application that processes user-reported symptoms against medical diagnostic models to offer preliminary health recommendations.",
      fullDescription: "Developed a user-friendly healthcare portal connecting symptom input forms to health diagnostic APIs, guiding users with triage advice and medical consultation pathways.",
      category: "AI & Machine Learning",
      tags: ["Python", "Machine Learning", "Healthcare APIs", "React", "Node.js", "Express.js"],
      imageUrl: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1000&auto=format&fit=crop",
      demoUrl: "https://github.com/Saranya-2006s",
      githubUrl: "https://github.com/Saranya-2006s",
      featured: true,
      status: "Completed",
      date: "2025 - 2026",
      highlights: [
        "Mapped symptom user selections against validated medical database APIs",
        "Created accessible React interface with symptom search and guided wizard",
        "Delivered clear preliminary risk scores and doctor recommendation steps"
      ]
    }
  ],
  skills: [
    { id: "sk-1", name: "Java", category: "Programming Languages", level: "Expert", yearsOfExperience: 3, featured: true },
    { id: "sk-2", name: "Python", category: "Programming Languages", level: "Advanced", yearsOfExperience: 2, featured: true },
    { id: "sk-3", name: "C Programming", category: "Programming Languages", level: "Intermediate", yearsOfExperience: 2, featured: false },
    { id: "sk-4", name: "Data Structures & Algorithms (DSA)", category: "Core Computer Science", level: "Expert", yearsOfExperience: 3, featured: true },
    { id: "sk-5", name: "HTML5, CSS3, JavaScript", category: "Frontend", level: "Expert", yearsOfExperience: 3, featured: true },
    { id: "sk-6", name: "React.js", category: "Frontend", level: "Advanced", yearsOfExperience: 2, featured: true },
    { id: "sk-7", name: "Node.js & Express.js", category: "Backend", level: "Advanced", yearsOfExperience: 2, featured: true },
    { id: "sk-8", name: "SQL Concepts & MySQL", category: "Databases", level: "Expert", yearsOfExperience: 3, featured: true },
    { id: "sk-9", name: "MongoDB & Firebase", category: "Databases", level: "Intermediate", yearsOfExperience: 2, featured: true },
    { id: "sk-10", name: "Machine Learning & Deep Learning", category: "AI & Data Science", level: "Advanced", yearsOfExperience: 2, featured: true },
    { id: "sk-11", name: "TensorFlow, OpenCV & YOLO", category: "AI & Data Science", level: "Advanced", yearsOfExperience: 2, featured: true },
    { id: "sk-12", name: "Scikit-Learn, NLP, Scrapy & Pandas", category: "AI & Data Science", level: "Advanced", yearsOfExperience: 2, featured: false },
    { id: "sk-13", name: "Kali Linux & Wireshark", category: "Cybersecurity & Tools", level: "Intermediate", yearsOfExperience: 1, featured: false },
    { id: "sk-14", name: "GitHub & Jupyter Notebook", category: "Tools & Platforms", level: "Expert", yearsOfExperience: 3, featured: true }
  ],
  experiences: [
    {
      id: "exp-1",
      role: "Full Stack Web Application Development Intern",
      company: "Astonish, Trichy",
      location: "Trichy, Tamil Nadu, India",
      period: "2024 - 2025",
      current: false,
      type: "Internship",
      description: "Hands-on web development internship creating full-stack web applications using React, Node.js, Express, and REST APIs.",
      achievements: [
        "Developed responsive user interface components using React, HTML5, CSS3, and JavaScript",
        "Engineered RESTful API endpoints in Node.js and Express for data operations",
        "Integrated client-server database workflows and performed testing"
      ],
      techStack: ["React", "Node.js", "Express.js", "JavaScript", "HTML/CSS", "REST APIs"]
    },
    {
      id: "exp-2",
      role: "Cloud Computing Intern",
      company: "Fantasy Solutions",
      location: "Remote",
      period: "2024",
      current: false,
      type: "Internship",
      description: "Explored cloud computing architectures, virtualization, cloud deployment strategies, and database management.",
      achievements: [
        "Gained practical knowledge in cloud storage, virtual machine deployment, and system scalability",
        "Implemented database configurations for cloud-hosted applications"
      ],
      techStack: ["Cloud Computing", "Firebase", "Databases", "Virtualization"]
    },
    {
      id: "exp-3",
      role: "Digital Marketing Intern",
      company: "W3 App Developers",
      location: "Remote",
      period: "2024",
      current: false,
      type: "Internship",
      description: "Assisted with digital strategy, search engine optimization (SEO), web traffic analytics, and digital product distribution.",
      achievements: [
        "Optimized digital reach and promotional outreach for web applications",
        "Analyzed traffic metrics and user engagement reports"
      ],
      techStack: ["Digital Marketing", "SEO", "Web Analytics"]
    }
  ],
  education: [
    {
      id: "edu-1",
      degree: "Bachelor of Technology (B.TECH)",
      field: "Information Technology (IT)",
      institution: "VSB Engineering College, Karur",
      location: "Karur, Tamil Nadu",
      period: "2023 - 2027",
      achievements: [
        "Current CGPA: 8.93 / 10.0",
        "Specialization in Information Technology, Data Structures & AI Applications",
        "Active member of Technical Coding and Development Circles"
      ]
    },
    {
      id: "edu-2",
      degree: "Higher Secondary Certificate (HSC)",
      field: "High School Science & Maths",
      institution: "Mount Giris Matric Hr.Sec.School, Ayyarmalai",
      location: "Ayyarmalai, Tamil Nadu",
      period: "2022 - 2023",
      achievements: [
        "Percentage Scored: 80%",
        "Excellence in Mathematics, Computer Science, and Physics"
      ]
    }
  ],
  certifications: [
    {
      id: "cert-1",
      title: "Java and Python Foundation",
      issuer: "Infosys Springboard",
      date: "2024"
    },
    {
      id: "cert-2",
      title: "Java-NPTEL (ELITE)",
      issuer: "NPTEL",
      date: "2024"
    },
    {
      id: "cert-3",
      title: "Machine Learning & Data Science Specialization",
      issuer: "NPTEL / Online",
      date: "2024"
    },
    {
      id: "cert-4",
      title: "Solved 200+ Problems in LeetCode",
      issuer: "LeetCode",
      date: "2024 - 2025"
    },
    {
      id: "cert-5",
      title: "Introducing SAP Business Data Cloud",
      issuer: "SAP",
      date: "2024"
    },
    {
      id: "cert-6",
      title: "GeeksforGeeks & HackerRank Problem Solver (5+ Stars)",
      issuer: "HackerRank & GeeksforGeeks",
      date: "2024 - 2025"
    }
  ]
};
