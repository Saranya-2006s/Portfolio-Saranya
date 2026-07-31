import React from 'react';
import { PortfolioData } from '../types/portfolio';
import { X, Printer, Download, Mail, Phone, MapPin, Globe, Github, Linkedin, Briefcase, GraduationCap, Code2 } from 'lucide-react';

interface InteractiveResumeProps {
  data: PortfolioData;
  onClose: () => void;
}

export const InteractiveResume: React.FC<InteractiveResumeProps> = ({ data, onClose }) => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-4xl bg-white text-slate-900 rounded-2xl shadow-2xl overflow-hidden my-8 max-h-[92vh] flex flex-col">
        
        {/* Header Control Bar (Hidden when printing) */}
        <div className="p-4 bg-slate-100 border-b border-slate-200 flex items-center justify-between shrink-0 print:hidden">
          <div className="flex items-center gap-2">
            <h3 className="text-sm font-bold text-slate-800">Resume Preview & Print</h3>
            <span className="text-xs text-slate-500">(Formatted for 1-page export)</span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold bg-indigo-600 hover:bg-indigo-500 text-white transition-colors cursor-pointer"
            >
              <Printer className="w-4 h-4" />
              <span>Print / Save PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-xl text-slate-600 hover:bg-slate-200 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Resume Printable Sheet */}
        <div className="p-8 sm:p-12 overflow-y-auto space-y-8 flex-1 print:p-0 print:overflow-visible">
          
          {/* Resume Header */}
          <div className="border-b border-slate-200 pb-6 space-y-3">
            <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">
              {data.profile.name}
            </h1>
            <p className="text-lg font-semibold text-indigo-700">
              {data.profile.title}
            </p>

            <div className="flex flex-wrap items-center gap-y-2 gap-x-4 text-xs font-medium text-slate-600 pt-1">
              <span className="flex items-center gap-1">
                <Mail className="w-3.5 h-3.5 text-slate-500" />
                {data.profile.email}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-slate-500" />
                {data.profile.location}
              </span>
              {data.profile.githubUrl && (
                <>
                  <span>•</span>
                  <a
                    href={data.profile.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-indigo-600 hover:underline"
                  >
                    <Github className="w-3.5 h-3.5" />
                    <span>GitHub</span>
                  </a>
                </>
              )}
              {data.profile.leetcodeUrl && (
                <>
                  <span>•</span>
                  <a
                    href={data.profile.leetcodeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-amber-600 hover:underline"
                  >
                    <Code2 className="w-3.5 h-3.5" />
                    <span>LeetCode</span>
                  </a>
                </>
              )}
            </div>
          </div>

          {/* Executive Summary */}
          <div className="space-y-2">
            <h2 className="text-sm font-bold uppercase tracking-wider text-slate-900 border-b border-slate-200 pb-1 flex items-center gap-2">
              <span>Executive Summary</span>
            </h2>
            <p className="text-xs text-slate-700 leading-relaxed">
              {data.profile.bio}
            </p>
          </div>

          {/* Technical Skills */}
          <div className="space-y-2">
            <h2 className="text-sm font-bold uppercase tracking-wider text-slate-900 border-b border-slate-200 pb-1 flex items-center gap-2">
              <Code2 className="w-4 h-4 text-indigo-600 print:hidden" />
              <span>Core Technical Competencies</span>
            </h2>
            <div className="flex flex-wrap gap-1.5 pt-1">
              {data.skills.map((skill) => (
                <span
                  key={skill.id}
                  className="px-2.5 py-1 rounded bg-slate-100 text-slate-800 text-[11px] font-semibold"
                >
                  {skill.name} ({skill.level})
                </span>
              ))}
            </div>
          </div>

          {/* Work Experience */}
          <div className="space-y-4">
            <h2 className="text-sm font-bold uppercase tracking-wider text-slate-900 border-b border-slate-200 pb-1 flex items-center gap-2">
              <Briefcase className="w-4 h-4 text-indigo-600 print:hidden" />
              <span>Professional Experience</span>
            </h2>

            <div className="space-y-4">
              {data.experiences.map((exp) => (
                <div key={exp.id} className="space-y-1.5">
                  <div className="flex items-center justify-between">
                    <div className="font-bold text-sm text-slate-900">
                      {exp.role} <span className="font-semibold text-indigo-700">@ {exp.company}</span>
                    </div>
                    <div className="text-xs text-slate-500 font-medium">{exp.period}</div>
                  </div>
                  <p className="text-xs text-slate-600">{exp.description}</p>
                  {exp.achievements && exp.achievements.length > 0 && (
                    <ul className="list-disc list-inside space-y-0.5 text-xs text-slate-700 pt-0.5">
                      {exp.achievements.map((ach, idx) => (
                        <li key={idx}>{ach}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Featured Projects */}
          <div className="space-y-3">
            <h2 className="text-sm font-bold uppercase tracking-wider text-slate-900 border-b border-slate-200 pb-1 flex items-center gap-2">
              <span>Featured Engineering Projects</span>
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {data.projects.slice(0, 4).map((proj) => (
                <div key={proj.id} className="p-3 rounded border border-slate-200 space-y-1">
                  <div className="font-bold text-xs text-slate-900">{proj.title}</div>
                  <div className="text-[11px] text-slate-600 leading-snug">{proj.subtitle}</div>
                  <div className="text-[10px] font-medium text-indigo-600">{proj.tags.join(' • ')}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className="space-y-2">
            <h2 className="text-sm font-bold uppercase tracking-wider text-slate-900 border-b border-slate-200 pb-1 flex items-center gap-2">
              <GraduationCap className="w-4 h-4 text-indigo-600 print:hidden" />
              <span>Education & Certifications</span>
            </h2>

            <div className="space-y-2">
              {data.education.map((edu) => (
                <div key={edu.id} className="flex justify-between items-baseline text-xs">
                  <div>
                    <span className="font-bold text-slate-900">{edu.degree}</span> – <span className="text-slate-700">{edu.institution}</span>
                  </div>
                  <div className="text-slate-500">{edu.period}</div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
