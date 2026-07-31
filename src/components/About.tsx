import React from 'react';
import { ProfileInfo } from '../types/portfolio';
import { 
  Code, 
  Cpu, 
  Layers, 
  Zap, 
  CheckCircle2, 
  Award, 
  FileText,
  UserCheck
} from 'lucide-react';

interface AboutProps {
  profile: ProfileInfo;
  onOpenResume: () => void;
}

export const About: React.FC<AboutProps> = ({ profile, onOpenResume }) => {
  const highlights = [
    {
      icon: <Layers className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />,
      title: "Scalable Architecture",
      description: "Designing decoupled, maintainable micro-frontends and microservice APIs built for high throughput.",
    },
    {
      icon: <Cpu className="w-5 h-5 text-violet-600 dark:text-violet-400" />,
      title: "Generative AI Systems",
      description: "Integrating modern LLMs, function calling, RAG pipelines, and WebSocket streaming into production apps.",
    },
    {
      icon: <Zap className="w-5 h-5 text-amber-600 dark:text-amber-400" />,
      title: "Performance First",
      description: "Sub-millisecond chart rendering, bundle size minimization, and zero-stutter 60fps canvas animations.",
    },
    {
      icon: <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />,
      title: "Accessibility & Quality",
      description: "Strict WCAG AAA compliance, robust unit/E2E test suites, and clean documentation.",
    },
  ];

  return (
    <section id="about" className="py-20 bg-slate-50/50 dark:bg-slate-900/40 border-y border-slate-200/60 dark:border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-100 dark:bg-indigo-950/80 text-indigo-700 dark:text-indigo-300 text-xs font-semibold uppercase tracking-wider">
            About Me
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Passionate About Crafting Exceptional Digital Products
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-400">
            A look into my engineering principles, background, and focus areas.
          </p>
        </div>

        {/* Two Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Main Bio Card */}
          <div className="lg:col-span-7 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-8 shadow-sm space-y-5">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <UserCheck className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
              <span>Background & Mission</span>
            </h3>

            <p className="text-slate-700 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
              I’m a passionate <strong className="text-slate-900 dark:text-white font-semibold">B.Tech Information Technology student and aspiring AI & Full-Stack Developer</strong>, focused on building practical web applications and intelligent software solutions.
            </p>

            <p className="text-slate-700 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
              My technical interests include <strong className="text-slate-900 dark:text-white font-semibold">Java, Python, React, TypeScript, Node.js, MongoDB, SQL, and Artificial Intelligence</strong>. I enjoy transforming real-world problems into useful applications by combining clean frontend experiences, reliable backend services, databases, and AI/ML technologies.
            </p>

            <p className="text-slate-700 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
              Through my academic projects, internships, and continuous learning, I’ve worked on applications involving <strong className="text-slate-900 dark:text-white font-semibold">AI-powered student assistance, healthcare, fraud detection, machine learning, alert deduplication, and web development</strong>. I’m constantly improving my problem-solving and DSA skills while exploring new technologies.
            </p>

            <p className="text-slate-700 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
              I believe good software should be <strong className="text-slate-900 dark:text-white font-semibold">simple to use, practical, scalable, and easy to maintain</strong>. My goal is to grow as a software engineer and contribute to products that create meaningful real-world impact.
            </p>

            <div className="pt-5 border-t border-slate-100 dark:border-slate-800 flex flex-wrap items-center justify-between gap-4">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full sm:w-auto">
                <div className="bg-slate-50 dark:bg-slate-800/60 p-3 rounded-xl border border-slate-100 dark:border-slate-800">
                  <div className="text-lg sm:text-xl font-black text-indigo-600 dark:text-indigo-400 leading-tight">AI & Full-Stack</div>
                  <div className="text-[11px] text-slate-500 dark:text-slate-400 font-medium mt-0.5">Engineering Focus</div>
                </div>
                <div className="bg-slate-50 dark:bg-slate-800/60 p-3 rounded-xl border border-slate-100 dark:border-slate-800">
                  <div className="text-lg sm:text-xl font-black text-slate-900 dark:text-white leading-tight">8.91</div>
                  <div className="text-[11px] text-slate-500 dark:text-slate-400 font-medium mt-0.5">CGPA (IT)</div>
                </div>
                <div className="bg-slate-50 dark:bg-slate-800/60 p-3 rounded-xl border border-slate-100 dark:border-slate-800">
                  <div className="text-lg sm:text-xl font-black text-slate-900 dark:text-white leading-tight">8+</div>
                  <div className="text-[11px] text-slate-500 dark:text-slate-400 font-medium mt-0.5">Projects</div>
                </div>
                <div className="bg-slate-50 dark:bg-slate-800/60 p-3 rounded-xl border border-slate-100 dark:border-slate-800">
                  <div className="text-lg sm:text-xl font-black text-slate-900 dark:text-white leading-tight">2027</div>
                  <div className="text-[11px] text-slate-500 dark:text-slate-400 font-medium mt-0.5">Graduation</div>
                </div>
              </div>

              <div className="pt-2 sm:pt-0">
                <button
                  onClick={profile.resumeUrl ? () => window.open(profile.resumeUrl, '_blank') : onOpenResume}
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs transition-colors cursor-pointer shadow-sm"
                >
                  <FileText className="w-4 h-4" />
                  <span>View Full Resume</span>
                </button>
              </div>
            </div>
          </div>

          {/* Highlights Grid */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200/80 dark:border-slate-800 p-5 shadow-2xs hover:border-indigo-300 dark:hover:border-indigo-700 transition-all flex gap-4 items-start"
              >
                <div className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 shrink-0 mt-0.5">
                  {item.icon}
                </div>
                <div>
                  <h4 className="text-base font-bold text-slate-900 dark:text-white">
                    {item.title}
                  </h4>
                  <p className="text-xs text-slate-600 dark:text-slate-400 mt-1 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};
