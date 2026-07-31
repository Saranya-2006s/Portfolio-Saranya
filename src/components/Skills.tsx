import React, { useState } from 'react';
import { Skill, SkillCategory } from '../types/portfolio';
import { Code2, Server, Cpu, Cloud, Wrench, CheckCircle } from 'lucide-react';

interface SkillsProps {
  skills: Skill[];
}

export const Skills: React.FC<SkillsProps> = ({ skills }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const dynamicCategories: string[] = Array.from(new Set<string>(skills.map(s => s.category)));
  const categories: string[] = ['All', ...dynamicCategories];

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Frontend':
        return <Code2 className="w-4 h-4 text-indigo-500" />;
      case 'Backend':
        return <Server className="w-4 h-4 text-emerald-500" />;
      case 'AI & Data':
        return <Cpu className="w-4 h-4 text-violet-500" />;
      case 'DevOps & Cloud':
        return <Cloud className="w-4 h-4 text-sky-500" />;
      default:
        return <Wrench className="w-4 h-4 text-amber-500" />;
    }
  };

  const filteredSkills = skills.filter(
    (skill) => selectedCategory === 'All' || skill.category === selectedCategory
  );

  return (
    <section id="skills" className="py-20 bg-slate-50/50 dark:bg-slate-900/40 border-y border-slate-200/60 dark:border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-100 dark:bg-indigo-950/80 text-indigo-700 dark:text-indigo-300 text-xs font-semibold uppercase tracking-wider">
            Technical Stack
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Skills & Proficiency Matrix
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-400">
            A comprehensive overview of languages, frameworks, databases, and development tools.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-slate-900 dark:bg-indigo-600 text-white shadow-sm'
                  : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800'
              }`}
            >
              {cat !== 'All' && getCategoryIcon(cat)}
              <span>{cat}</span>
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredSkills.map((skill) => (
            <div
              key={skill.id}
              className="bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-200/80 dark:border-slate-800 shadow-2xs hover:border-indigo-300 dark:hover:border-indigo-700 transition-all flex items-center justify-between"
            >
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 shrink-0">
                  {getCategoryIcon(skill.category)}
                </div>
                <div>
                  <div className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                    <span>{skill.name}</span>
                    {skill.featured && (
                      <span className="w-1.5 h-1.5 rounded-full bg-indigo-500" title="Core skill"></span>
                    )}
                  </div>
                  <div className="text-xs text-slate-500 dark:text-slate-400 font-medium mt-0.5">
                    {skill.category}
                  </div>
                </div>
              </div>

              <div className="text-right">
                <span
                  className={`inline-block px-2.5 py-0.5 rounded-full text-[11px] font-semibold ${
                    skill.level === 'Expert'
                      ? 'bg-indigo-50 text-indigo-700 dark:bg-indigo-950/80 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800'
                      : skill.level === 'Advanced'
                      ? 'bg-emerald-50 text-emerald-700 dark:bg-emerald-950/80 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800'
                      : 'bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300'
                  }`}
                >
                  {skill.level}
                </span>
                <div className="text-[10px] text-slate-400 font-medium mt-1">
                  {skill.yearsOfExperience} yrs exp
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
