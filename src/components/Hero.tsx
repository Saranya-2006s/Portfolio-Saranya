import React, { useRef } from 'react';
import { ProfileInfo } from '../types/portfolio';
import { 
  Sparkles, 
  ArrowRight, 
  Mail, 
  Github, 
  Linkedin, 
  Twitter, 
  MapPin, 
  Briefcase, 
  Code2, 
  FileText,
  CheckCircle2,
  Camera,
  Upload
} from 'lucide-react';

interface HeroProps {
  profile: ProfileInfo;
  onOpenAiAssistant: () => void;
  onOpenResume: () => void;
  onUpdateAvatar?: (dataUrl: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ profile, onOpenAiAssistant, onOpenResume, onUpdateAvatar }) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && onUpdateAvatar) {
      const reader = new FileReader();
      reader.onloadend = () => {
        if (typeof reader.result === 'string') {
          onUpdateAvatar(reader.result);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
      {/* Background Decorative Gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-indigo-500/10 dark:bg-indigo-600/15 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-72 h-72 bg-violet-500/10 dark:bg-violet-600/10 rounded-full blur-2xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Hero Text Column */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Availability Status Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800/60 text-emerald-700 dark:text-emerald-300 text-xs font-semibold shadow-2xs">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>{profile.status || profile.availability}</span>
            </div>

            {/* Headline */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.12]">
                Hi, I'm <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-violet-600 to-purple-600 dark:from-indigo-400 dark:via-violet-400 dark:to-purple-400">{profile.name}</span>
              </h1>
              <p className="text-xl sm:text-2xl font-semibold text-slate-700 dark:text-slate-300">
                {profile.title}
              </p>
            </div>

            {/* Subtitle / Short Bio */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl">
              {profile.subtitle || profile.bio}
            </p>

            {/* Quick Metadata Info */}
            <div className="flex flex-wrap items-center gap-4 text-xs font-medium text-slate-500 dark:text-slate-400 pt-1">
              <div className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-indigo-500" />
                <span>{profile.location}</span>
              </div>
              <span className="text-slate-300 dark:text-slate-700">•</span>
              <div className="flex items-center gap-1.5">
                <Briefcase className="w-3.5 h-3.5 text-indigo-500" />
                <span>Full-Stack & AI Engineering</span>
              </div>
            </div>

            {/* CTAs & Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-4">
              <button
                onClick={scrollToProjects}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 dark:bg-indigo-600 dark:hover:bg-indigo-500 text-white font-semibold text-sm shadow-md hover:shadow-lg transition-all cursor-pointer group"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={profile.resumeUrl ? () => window.open(profile.resumeUrl, '_blank') : onOpenResume}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-sm shadow-md transition-all cursor-pointer"
              >
                <FileText className="w-4 h-4" />
                <span>View Resume</span>
              </button>

              <button
                onClick={onOpenAiAssistant}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-indigo-50 hover:bg-indigo-100 dark:bg-slate-800 dark:hover:bg-slate-700 text-indigo-700 dark:text-indigo-300 font-semibold text-sm border border-indigo-200 dark:border-slate-700 transition-all cursor-pointer"
              >
                <Sparkles className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                <span>Ask AI About Me</span>
              </button>

              <button
                onClick={scrollToContact}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800/80 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 font-semibold text-sm border border-slate-200 dark:border-slate-700 transition-all cursor-pointer"
              >
                <Mail className="w-4 h-4 text-slate-500" />
                <span>Get In Touch</span>
              </button>
            </div>

            {/* Social Links */}
            <div className="flex flex-wrap items-center gap-3 pt-3">
              <span className="text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider">Connect:</span>
              {profile.githubUrl && (
                <a
                  href={profile.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 text-xs font-semibold transition-colors"
                  aria-label="GitHub Profile"
                  title="GitHub Profile"
                >
                  <Github className="w-4 h-4 text-slate-700 dark:text-slate-300" />
                  <span>GitHub</span>
                </a>
              )}
              {profile.leetcodeUrl && (
                <a
                  href={profile.leetcodeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-amber-50 hover:bg-amber-100 dark:bg-amber-950/40 dark:hover:bg-amber-900/60 text-amber-700 dark:text-amber-300 border border-amber-200/60 dark:border-amber-800/60 text-xs font-semibold transition-colors"
                  aria-label="LeetCode Profile"
                  title="LeetCode Profile"
                >
                  <Code2 className="w-4 h-4 text-amber-600 dark:text-amber-400" />
                  <span>LeetCode</span>
                </a>
              )}
              {profile.linkedinUrl && (
                <a
                  href={profile.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 text-xs font-semibold transition-colors"
                  aria-label="LinkedIn Profile"
                  title="LinkedIn Profile"
                >
                  <Linkedin className="w-4 h-4 text-blue-600" />
                  <span>LinkedIn</span>
                </a>
              )}
            </div>

          </div>

          {/* Right Column: Visual Avatar & Stats Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Outer Decorative Ring */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-tr from-indigo-500 to-violet-600 opacity-20 blur-xl"></div>
              
              {/* Main Profile Image Box */}
              <div className="relative rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-3 shadow-xl overflow-hidden group">
                <img
                  src={profile.avatarUrl}
                  alt={profile.name}
                  className="w-full h-[460px] sm:h-[530px] lg:h-[580px] object-cover rounded-xl shadow-inner bg-slate-100 dark:bg-slate-800"
                />

                {/* Hidden File Input for uploading local photo */}
                <input
                  type="file"
                  ref={fileInputRef}
                  onChange={handleFileChange}
                  accept="image/*"
                  className="hidden"
                />

                {/* Upload Photo Overlay Button */}
                <button
                  onClick={() => fileInputRef.current?.click()}
                  className="absolute bottom-6 right-6 bg-slate-900/90 hover:bg-indigo-600 text-white px-4 py-2.5 rounded-xl text-xs font-semibold backdrop-blur-md transition-all shadow-lg flex items-center gap-2 cursor-pointer z-20 border border-white/20 hover:scale-105"
                  title="Attach & Change Your Photo"
                >
                  <Camera className="w-4 h-4 text-amber-300" />
                  <span>Attach Photo</span>
                </button>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
