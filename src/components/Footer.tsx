import React from 'react';
import { ProfileInfo } from '../types/portfolio';
import { Github, Linkedin, Twitter, ArrowUp, Code2, Heart } from 'lucide-react';

interface FooterProps {
  profile: ProfileInfo;
}

export const Footer: React.FC<FooterProps> = ({ profile }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-800">
          
          {/* Brand & Title */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-indigo-600 flex items-center justify-center text-white font-bold text-base">
              {profile.name.charAt(0)}
            </div>
            <div>
              <div className="font-bold text-white text-sm">{profile.name}</div>
              <div className="text-xs text-slate-400">{profile.title}</div>
            </div>
          </div>

          {/* Nav Links */}
          <div className="flex items-center gap-6 text-xs font-semibold">
            <button onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-white transition-colors cursor-pointer">About</button>
            <button onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-white transition-colors cursor-pointer">Projects</button>
            <button onClick={() => document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-white transition-colors cursor-pointer">Skills</button>
            <button onClick={() => document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-white transition-colors cursor-pointer">Experience</button>
            <button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-white transition-colors cursor-pointer">Contact</button>
          </div>

          {/* Socials & Back to top */}
          <div className="flex items-center gap-3">
            {profile.githubUrl && (
              <a href={profile.githubUrl} target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg hover:text-white hover:bg-slate-800 transition-colors" title="GitHub Profile">
                <Github className="w-4 h-4" />
              </a>
            )}
            {profile.leetcodeUrl && (
              <a href={profile.leetcodeUrl} target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg hover:text-amber-400 hover:bg-slate-800 transition-colors" title="LeetCode Profile">
                <Code2 className="w-4 h-4" />
              </a>
            )}
            {profile.linkedinUrl && (
              <a href={profile.linkedinUrl} target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg hover:text-white hover:bg-slate-800 transition-colors" title="LinkedIn Profile">
                <Linkedin className="w-4 h-4" />
              </a>
            )}
            {profile.twitterUrl && (
              <a href={profile.twitterUrl} target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg hover:text-white hover:bg-slate-800 transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
            )}
            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white transition-colors cursor-pointer ml-2"
              title="Back to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <div>
            © {new Date().getFullYear()} {profile.name}. All rights reserved.
          </div>
          <div className="flex items-center gap-1.5">
            <span>Designed & Built with</span>
            <Code2 className="w-3.5 h-3.5 text-indigo-400" />
            <span>React 19 & Tailwind</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
