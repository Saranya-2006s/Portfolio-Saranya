import React from 'react';
import { Experience as ExperienceType, Education, Certification } from '../types/portfolio';
import { Briefcase, GraduationCap, Award, Calendar, MapPin, CheckCircle2 } from 'lucide-react';

interface ExperienceProps {
  experiences: ExperienceType[];
  education: Education[];
  certifications: Certification[];
}

export const Experience: React.FC<ExperienceProps> = ({
  experiences,
  education,
  certifications,
}) => {
  return (
    <section id="experience" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-100 dark:bg-indigo-950/80 text-indigo-700 dark:text-indigo-300 text-xs font-semibold uppercase tracking-wider">
            Career Journey
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Work Experience & Background
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-400">
            A history of engineering leadership, impactful software delivery, and continuous learning.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Main Work Experience Timeline (8 Cols) */}
          <div className="lg:col-span-8 space-y-8">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2 mb-6">
              <Briefcase className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
              <span>Professional Experience</span>
            </h3>

            <div className="relative pl-6 sm:pl-8 border-l-2 border-slate-200 dark:border-slate-800 space-y-10">
              {experiences.map((exp) => (
                <div key={exp.id} className="relative group">
                  
                  {/* Timeline Dot */}
                  <div
                    className={`absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full border-2 ${
                      exp.current
                        ? 'bg-indigo-600 border-indigo-200 dark:border-indigo-900 ring-4 ring-indigo-100 dark:ring-indigo-950'
                        : 'bg-slate-300 dark:bg-slate-700 border-white dark:border-slate-900'
                    }`}
                  />

                  {/* Card Container */}
                  <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 shadow-2xs hover:border-indigo-300 dark:hover:border-indigo-700 transition-all space-y-4">
                    
                    {/* Header line */}
                    <div className="flex flex-wrap items-start justify-between gap-2">
                      <div>
                        <h4 className="text-lg font-bold text-slate-900 dark:text-white">
                          {exp.role}
                        </h4>
                        <div className="text-sm font-semibold text-indigo-600 dark:text-indigo-400 mt-0.5">
                          {exp.company}
                        </div>
                      </div>

                      <div className="flex items-center gap-2">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                          <Calendar className="w-3.5 h-3.5 text-slate-400" />
                          {exp.period}
                        </span>
                        {exp.current && (
                          <span className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-indigo-50 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800">
                            Present
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
                      <MapPin className="w-3.5 h-3.5 text-slate-400" />
                      <span>{exp.location}</span>
                      <span>•</span>
                      <span>{exp.type}</span>
                    </div>

                    <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                      {exp.description}
                    </p>

                    {/* Achievements Bullet List */}
                    {exp.achievements && exp.achievements.length > 0 && (
                      <div className="space-y-2 pt-2">
                        <div className="text-xs font-semibold text-slate-800 dark:text-slate-200">Key Deliverables:</div>
                        <ul className="space-y-1.5">
                          {exp.achievements.map((ach, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-400">
                              <CheckCircle2 className="w-3.5 h-3.5 text-indigo-500 shrink-0 mt-0.5" />
                              <span>{ach}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Tech Stack Pills */}
                    {exp.techStack && exp.techStack.length > 0 && (
                      <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex flex-wrap gap-1.5">
                        {exp.techStack.map((tech, idx) => (
                          <span
                            key={idx}
                            className="px-2 py-0.5 rounded-md text-[10px] font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}

                  </div>

                </div>
              ))}
            </div>
          </div>

          {/* Education & Certifications Side Column (4 Cols) */}
          <div className="lg:col-span-4 space-y-8">
            
            {/* Education Block */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <GraduationCap className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                <span>Education</span>
              </h3>

              {education.map((edu) => (
                <div key={edu.id} className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-5 shadow-2xs space-y-2">
                  <h4 className="text-base font-bold text-slate-900 dark:text-white">{edu.degree}</h4>
                  <div className="text-xs font-semibold text-indigo-600 dark:text-indigo-400">{edu.institution}</div>
                  <div className="text-xs text-slate-500">{edu.period} • {edu.location}</div>
                  {edu.achievements && edu.achievements.length > 0 && (
                    <ul className="pt-2 space-y-1 border-t border-slate-100 dark:border-slate-800">
                      {edu.achievements.map((ach, idx) => (
                        <li key={idx} className="text-[11px] text-slate-600 dark:text-slate-400 flex items-center gap-1.5">
                          <span className="w-1 h-1 rounded-full bg-indigo-500"></span>
                          <span>{ach}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>

            {/* Certifications Block */}
            {certifications && certifications.length > 0 && (
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <Award className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                  <span>Certifications</span>
                </h3>

                <div className="space-y-3">
                  {certifications.map((cert) => (
                    <div key={cert.id} className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-4 shadow-2xs flex items-center justify-between">
                      <div>
                        <div className="text-sm font-bold text-slate-900 dark:text-white">{cert.title}</div>
                        <div className="text-xs text-slate-500 mt-0.5">{cert.issuer} • Issued {cert.date}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
