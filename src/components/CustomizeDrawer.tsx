import React, { useState } from 'react';
import { PortfolioData, Project, Skill, Experience } from '../types/portfolio';
import { enhanceTextWithAi } from '../services/aiService';
import { 
  X, 
  SlidersHorizontal, 
  Sparkles, 
  Plus, 
  Trash2, 
  RotateCcw, 
  Check, 
  Download, 
  Upload, 
  Loader2,
  User,
  Briefcase,
  Code2,
  FolderGit2
} from 'lucide-react';

interface CustomizeDrawerProps {
  portfolioData: PortfolioData;
  setPortfolioData: React.Dispatch<React.SetStateAction<PortfolioData>>;
  isOpen: boolean;
  onClose: () => void;
  onResetDefault: () => void;
}

export const CustomizeDrawer: React.FC<CustomizeDrawerProps> = ({
  portfolioData,
  setPortfolioData,
  isOpen,
  onClose,
  onResetDefault,
}) => {
  if (!isOpen) return null;

  const [activeTab, setActiveTab] = useState<'profile' | 'projects' | 'skills' | 'experience' | 'data'>('profile');
  const [enhancingBio, setEnhancingBio] = useState(false);
  const [enhancingProjectIdx, setEnhancingProjectIdx] = useState<number | null>(null);

  // Profile Edit Handlers
  const handleProfileChange = (field: string, value: any) => {
    setPortfolioData((prev) => ({
      ...prev,
      profile: {
        ...prev.profile,
        [field]: value,
      },
    }));
  };

  const handleEnhanceBio = async () => {
    if (!portfolioData.profile.bio) return;
    setEnhancingBio(true);
    try {
      const polished = await enhanceTextWithAi('bio', portfolioData.profile.bio, {
        title: portfolioData.profile.title,
      });
      handleProfileChange('bio', polished);
    } catch (err) {
      console.error(err);
    } finally {
      setEnhancingBio(false);
    }
  };

  // Projects Handlers
  const handleProjectChange = (index: number, field: string, value: any) => {
    setPortfolioData((prev) => {
      const updatedProjects = [...prev.projects];
      updatedProjects[index] = {
        ...updatedProjects[index],
        [field]: value,
      };
      return { ...prev, projects: updatedProjects };
    });
  };

  const handleAddProject = () => {
    const newProj: Project = {
      id: `proj-${Date.now()}`,
      title: 'New Software Project',
      subtitle: 'Short project overview tagline',
      description: 'Clean description of what this project solves and tech used.',
      fullDescription: 'Comprehensive case study breakdown of architecture and outcomes.',
      category: 'Full Stack',
      tags: ['React', 'TypeScript', 'Node.js'],
      imageUrl: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1000&auto=format&fit=crop',
      featured: false,
      status: 'In Progress',
      date: new Date().getFullYear().toString(),
      highlights: ['Designed responsive user experience', 'Built scalable API endpoints'],
    };
    setPortfolioData((prev) => ({
      ...prev,
      projects: [newProj, ...prev.projects],
    }));
  };

  const handleDeleteProject = (id: string) => {
    setPortfolioData((prev) => ({
      ...prev,
      projects: prev.projects.filter((p) => p.id !== id),
    }));
  };

  const handleEnhanceProject = async (index: number) => {
    const proj = portfolioData.projects[index];
    if (!proj || !proj.description) return;
    setEnhancingProjectIdx(index);
    try {
      const polished = await enhanceTextWithAi('project', proj.description, {
        title: proj.title,
      });
      handleProjectChange(index, 'description', polished);
    } catch (err) {
      console.error(err);
    } finally {
      setEnhancingProjectIdx(null);
    }
  };

  // Export / Import JSON
  const handleExportJson = () => {
    const dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(portfolioData, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute('href', dataStr);
    downloadAnchor.setAttribute('download', `portfolio-config-${portfolioData.profile.name.toLowerCase().replace(/\s+/g, '-')}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-sm animate-fade-in">
      <div 
        className="relative w-full max-w-4xl bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden my-6 max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Header */}
        <div className="p-4 bg-slate-100 dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2">
            <SlidersHorizontal className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
            <h3 className="text-base font-bold text-slate-900 dark:text-white">
              Portfolio Customization Studio
            </h3>
            <span className="text-xs text-slate-500 font-medium hidden sm:inline">
              (Live local editing)
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="flex border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/60 overflow-x-auto shrink-0">
          <button
            onClick={() => setActiveTab('profile')}
            className={`flex items-center gap-1.5 px-4 py-3 text-xs font-semibold border-b-2 transition-colors whitespace-nowrap cursor-pointer ${
              activeTab === 'profile'
                ? 'border-indigo-600 text-indigo-600 dark:text-indigo-400'
                : 'border-transparent text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            <User className="w-4 h-4" />
            <span>Profile Info</span>
          </button>

          <button
            onClick={() => setActiveTab('projects')}
            className={`flex items-center gap-1.5 px-4 py-3 text-xs font-semibold border-b-2 transition-colors whitespace-nowrap cursor-pointer ${
              activeTab === 'projects'
                ? 'border-indigo-600 text-indigo-600 dark:text-indigo-400'
                : 'border-transparent text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            <FolderGit2 className="w-4 h-4" />
            <span>Projects ({portfolioData.projects.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('skills')}
            className={`flex items-center gap-1.5 px-4 py-3 text-xs font-semibold border-b-2 transition-colors whitespace-nowrap cursor-pointer ${
              activeTab === 'skills'
                ? 'border-indigo-600 text-indigo-600 dark:text-indigo-400'
                : 'border-transparent text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            <Code2 className="w-4 h-4" />
            <span>Skills ({portfolioData.skills.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('experience')}
            className={`flex items-center gap-1.5 px-4 py-3 text-xs font-semibold border-b-2 transition-colors whitespace-nowrap cursor-pointer ${
              activeTab === 'experience'
                ? 'border-indigo-600 text-indigo-600 dark:text-indigo-400'
                : 'border-transparent text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            <Briefcase className="w-4 h-4" />
            <span>Experience ({portfolioData.experiences.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('data')}
            className={`flex items-center gap-1.5 px-4 py-3 text-xs font-semibold border-b-2 transition-colors whitespace-nowrap cursor-pointer ${
              activeTab === 'data'
                ? 'border-indigo-600 text-indigo-600 dark:text-indigo-400'
                : 'border-transparent text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            <Download className="w-4 h-4" />
            <span>Export / Reset</span>
          </button>
        </div>

        {/* Tab Content Body */}
        <div className="p-6 overflow-y-auto flex-1 space-y-6">
          
          {/* PROFILE TAB */}
          {activeTab === 'profile' && (
            <div className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    value={portfolioData.profile.name}
                    onChange={(e) => handleProfileChange('name', e.target.value)}
                    className="w-full px-3.5 py-2 rounded-xl text-xs bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    Professional Title
                  </label>
                  <input
                    type="text"
                    value={portfolioData.profile.title}
                    onChange={(e) => handleProfileChange('title', e.target.value)}
                    className="w-full px-3.5 py-2 rounded-xl text-xs bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={portfolioData.profile.email}
                    onChange={(e) => handleProfileChange('email', e.target.value)}
                    className="w-full px-3.5 py-2 rounded-xl text-xs bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    Location
                  </label>
                  <input
                    type="text"
                    value={portfolioData.profile.location}
                    onChange={(e) => handleProfileChange('location', e.target.value)}
                    className="w-full px-3.5 py-2 rounded-xl text-xs bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  Avatar Photo
                </label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="Image URL or Base64"
                    value={portfolioData.profile.avatarUrl}
                    onChange={(e) => handleProfileChange('avatarUrl', e.target.value)}
                    className="flex-1 px-3.5 py-2 rounded-xl text-xs bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white"
                  />
                  <label className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-indigo-50 hover:bg-indigo-100 dark:bg-slate-800 dark:hover:bg-slate-700 text-indigo-700 dark:text-indigo-300 text-xs font-semibold border border-indigo-200 dark:border-slate-700 cursor-pointer shrink-0">
                    <Upload className="w-3.5 h-3.5" />
                    <span>Upload Local Photo</span>
                    <input
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={(e) => {
                        const file = e.target.files?.[0];
                        if (file) {
                          const reader = new FileReader();
                          reader.onloadend = () => {
                            if (typeof reader.result === 'string') {
                              handleProfileChange('avatarUrl', reader.result);
                            }
                          };
                          reader.readAsDataURL(file);
                        }
                      }}
                    />
                  </label>
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-1">
                  <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                    Biography
                  </label>
                  <button
                    onClick={handleEnhanceBio}
                    disabled={enhancingBio}
                    className="inline-flex items-center gap-1 text-xs text-indigo-600 dark:text-indigo-400 font-semibold hover:underline cursor-pointer"
                  >
                    {enhancingBio ? (
                      <>
                        <Loader2 className="w-3 h-3 animate-spin" />
                        <span>Polishing with AI...</span>
                      </>
                    ) : (
                      <>
                        <Sparkles className="w-3 h-3" />
                        <span>Enhance Bio with AI</span>
                      </>
                    )}
                  </button>
                </div>
                <textarea
                  rows={4}
                  value={portfolioData.profile.bio}
                  onChange={(e) => handleProfileChange('bio', e.target.value)}
                  className="w-full px-3.5 py-2 rounded-xl text-xs bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    GitHub URL
                  </label>
                  <input
                    type="text"
                    placeholder="https://github.com/username"
                    value={portfolioData.profile.githubUrl || ''}
                    onChange={(e) => handleProfileChange('githubUrl', e.target.value)}
                    className="w-full px-3.5 py-2 rounded-xl text-xs bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    LeetCode Profile URL
                  </label>
                  <input
                    type="text"
                    placeholder="https://leetcode.com/u/username/"
                    value={portfolioData.profile.leetcodeUrl || ''}
                    onChange={(e) => handleProfileChange('leetcodeUrl', e.target.value)}
                    className="w-full px-3.5 py-2 rounded-xl text-xs bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    LinkedIn Profile URL
                  </label>
                  <input
                    type="text"
                    placeholder="https://linkedin.com/in/username"
                    value={portfolioData.profile.linkedinUrl || ''}
                    onChange={(e) => handleProfileChange('linkedinUrl', e.target.value)}
                    className="w-full px-3.5 py-2 rounded-xl text-xs bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    Direct Resume PDF / Drive Link
                  </label>
                  <input
                    type="text"
                    placeholder="https://drive.google.com/... or PDF link"
                    value={portfolioData.profile.resumeUrl || ''}
                    onChange={(e) => handleProfileChange('resumeUrl', e.target.value)}
                    className="w-full px-3.5 py-2 rounded-xl text-xs bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white"
                  />
                </div>
              </div>
            </div>
          )}

          {/* PROJECTS TAB */}
          {activeTab === 'projects' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                  Manage Portfolio Projects
                </h4>
                <button
                  onClick={handleAddProject}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold bg-indigo-600 hover:bg-indigo-500 text-white transition-colors cursor-pointer"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>Add New Project</span>
                </button>
              </div>

              <div className="space-y-4">
                {portfolioData.projects.map((proj, idx) => (
                  <div
                    key={proj.id}
                    className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/40 space-y-3"
                  >
                    <div className="flex items-center justify-between">
                      <input
                        type="text"
                        value={proj.title}
                        onChange={(e) => handleProjectChange(idx, 'title', e.target.value)}
                        className="font-bold text-sm bg-transparent border-b border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-hidden"
                      />
                      <button
                        onClick={() => handleDeleteProject(proj.id)}
                        className="p-1.5 rounded text-rose-500 hover:bg-rose-100 dark:hover:bg-rose-950 transition-colors cursor-pointer"
                        title="Delete project"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-[11px] font-semibold text-slate-600 dark:text-slate-400 mb-0.5">Category</label>
                        <select
                          value={proj.category}
                          onChange={(e) => handleProjectChange(idx, 'category', e.target.value)}
                          className="w-full px-2.5 py-1.5 rounded-lg text-xs bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white"
                        >
                          <option value="Full Stack">Full Stack</option>
                          <option value="AI & Machine Learning">AI & Machine Learning</option>
                          <option value="Frontend">Frontend</option>
                          <option value="Backend">Backend</option>
                          <option value="Mobile">Mobile</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-[11px] font-semibold text-slate-600 dark:text-slate-400 mb-0.5">Image URL</label>
                        <input
                          type="text"
                          value={proj.imageUrl}
                          onChange={(e) => handleProjectChange(idx, 'imageUrl', e.target.value)}
                          className="w-full px-2.5 py-1.5 rounded-lg text-xs bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white"
                        />
                      </div>
                    </div>

                    <div>
                      <div className="flex items-center justify-between mb-0.5">
                        <label className="text-[11px] font-semibold text-slate-600 dark:text-slate-400">Description</label>
                        <button
                          onClick={() => handleEnhanceProject(idx)}
                          disabled={enhancingProjectIdx === idx}
                          className="inline-flex items-center gap-1 text-[11px] text-indigo-600 dark:text-indigo-400 font-semibold hover:underline cursor-pointer"
                        >
                          {enhancingProjectIdx === idx ? <Loader2 className="w-3 h-3 animate-spin" /> : <Sparkles className="w-3 h-3" />}
                          <span>AI Polish</span>
                        </button>
                      </div>
                      <textarea
                        rows={2}
                        value={proj.description}
                        onChange={(e) => handleProjectChange(idx, 'description', e.target.value)}
                        className="w-full px-2.5 py-1.5 rounded-lg text-xs bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* SKILLS TAB */}
          {activeTab === 'skills' && (
            <div className="space-y-4">
              <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                Skills & Tech Stack
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {portfolioData.skills.map((skill, idx) => (
                  <div key={skill.id} className="p-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/40 flex items-center justify-between gap-2">
                    <div>
                      <div className="font-bold text-xs text-slate-900 dark:text-white">{skill.name}</div>
                      <div className="text-[10px] text-slate-500">{skill.category} • {skill.level}</div>
                    </div>
                    <button
                      onClick={() =>
                        setPortfolioData((prev) => ({
                          ...prev,
                          skills: prev.skills.filter((s) => s.id !== skill.id),
                        }))
                      }
                      className="p-1 rounded text-rose-500 hover:bg-rose-100 dark:hover:bg-rose-950 transition-colors"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* EXPERIENCE TAB */}
          {activeTab === 'experience' && (
            <div className="space-y-4">
              <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                Work Experience History
              </h4>

              <div className="space-y-3">
                {portfolioData.experiences.map((exp, idx) => (
                  <div key={exp.id} className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/40 space-y-2">
                    <div className="flex justify-between font-bold text-xs text-slate-900 dark:text-white">
                      <span>{exp.role} @ {exp.company}</span>
                      <span className="text-slate-500">{exp.period}</span>
                    </div>
                    <p className="text-xs text-slate-600 dark:text-slate-400">{exp.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* EXPORT / RESET TAB */}
          {activeTab === 'data' && (
            <div className="space-y-6">
              <div className="p-4 rounded-2xl bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-200 dark:border-indigo-800 space-y-2">
                <h4 className="text-sm font-bold text-indigo-900 dark:text-indigo-200">
                  Export Portfolio Data
                </h4>
                <p className="text-xs text-indigo-700 dark:text-indigo-300">
                  Download your customized portfolio profile and projects as a JSON backup file.
                </p>
                <button
                  onClick={handleExportJson}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-indigo-600 hover:bg-indigo-500 text-white cursor-pointer"
                >
                  <Download className="w-4 h-4" />
                  <span>Download JSON Backup</span>
                </button>
              </div>

              <div className="p-4 rounded-2xl bg-rose-50 dark:bg-rose-950/60 border border-rose-200 dark:border-rose-800 space-y-2">
                <h4 className="text-sm font-bold text-rose-900 dark:text-rose-200">
                  Reset to Default Sample Data
                </h4>
                <p className="text-xs text-rose-700 dark:text-rose-300">
                  Restore the initial Senior Software Engineer portfolio profile.
                </p>
                <button
                  onClick={() => {
                    onResetDefault();
                    onClose();
                  }}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-rose-600 hover:bg-rose-500 text-white cursor-pointer"
                >
                  <RotateCcw className="w-4 h-4" />
                  <span>Reset to Default Data</span>
                </button>
              </div>
            </div>
          )}

        </div>

        {/* Footer */}
        <div className="p-4 bg-slate-100 dark:bg-slate-800 border-t border-slate-200 dark:border-slate-700 flex justify-end shrink-0">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl text-xs font-semibold bg-indigo-600 hover:bg-indigo-500 text-white transition-colors cursor-pointer flex items-center gap-1.5"
          >
            <Check className="w-4 h-4" />
            <span>Apply Changes</span>
          </button>
        </div>

      </div>
    </div>
  );
};
