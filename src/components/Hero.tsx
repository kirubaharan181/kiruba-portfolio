
import React, { useState, useEffect } from 'react';
import { ArrowDown, Download, ExternalLink, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [showStats, setShowStats] = useState(false);

  const roles = [
    "Aspiring Web Developer",
    "Problem Solver",
    "Creative Thinker",
    "Tech Enthusiast",
    "Open Source Contributor",
    "UI/UX Explorer"
  ];

  const stats = [
    { number: "50+", label: "Projects Built", color: "text-purple-400" },
    { number: "2+", label: "Years Learning", color: "text-pink-400" },
    { number: "500+", label: "GitHub Commits", color: "text-blue-400" },
    { number: "15+", label: "Technologies", color: "text-green-400" }
  ];

  const socialLinks = [
    { icon: Github, href: "https://github.com", label: "GitHub", color: "hover:text-gray-300" },
    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn", color: "hover:text-blue-400" },
    { icon: Mail, href: "mailto:alex.johnson@email.com", label: "Email", color: "hover:text-purple-400" }
  ];

  useEffect(() => {
    const currentString = roles[currentRole];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentString.length) {
          setDisplayText(currentString.slice(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentRole((prev) => (prev + 1) % roles.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentRole, roles]);

  useEffect(() => {
    const timer = setTimeout(() => setShowStats(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Enhanced Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-pink-900/20"></div>
        {/* Floating particles */}
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-purple-400/30 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          ></div>
        ))}
        
        {/* Geometric shapes */}
        <div className="absolute top-1/4 left-1/4 w-32 h-32 border border-purple-400/20 rotate-45 animate-spin" style={{ animationDuration: '20s' }}></div>
        <div className="absolute bottom-1/3 right-1/4 w-24 h-24 border border-pink-400/20 rotate-12 animate-pulse"></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="animate-fade-in">
          {/* Enhanced Name Animation */}
          <div className="mb-6">
            <h1 className="text-5xl md:text-7xl font-bold mb-2 group">
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-600 bg-clip-text text-transparent hover:from-pink-400 hover:via-purple-400 hover:to-pink-600 transition-all duration-500">
                Alex Johnson
              </span>
            </h1>
            <div className="flex justify-center space-x-4 mt-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-gray-400 ${social.color} transition-all duration-300 hover:scale-125 hover:animate-bounce`}
                  aria-label={social.label}
                >
                  <social.icon size={24} />
                </a>
              ))}
            </div>
          </div>
          
          {/* Enhanced Typing Animation */}
          <div className="text-2xl md:text-3xl text-gray-300 mb-8 h-12 relative">
            <span className="relative">
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                {displayText}
              </span>
              <span className="border-r-2 border-purple-400 animate-pulse ml-1"></span>
            </span>
          </div>

          {/* Enhanced Description */}
          <p className="text-lg md:text-xl text-gray-400 mb-8 max-w-3xl mx-auto leading-relaxed">
            Passionate IT student crafting digital experiences with clean code and creative solutions. 
            Always eager to learn, grow, and contribute to meaningful projects that make a difference.
          </p>

          {/* Animated Stats */}
          {showStats && (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 animate-fade-in">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="group p-4 bg-slate-800/30 rounded-lg border border-gray-700 hover:border-purple-400/50 transition-all duration-300 hover:scale-105"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className={`text-2xl md:text-3xl font-bold ${stat.color} group-hover:animate-pulse`}>
                    {stat.number}
                  </div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          )}

          {/* Enhanced Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <a
              href="/resume.pdf"
              download
              className="group relative px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full font-semibold text-white overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25 flex items-center gap-2"
            >
              <Download className="w-5 h-5 group-hover:animate-bounce" />
              <span className="relative z-10">Download Resume</span>
              <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
            
            <button
              onClick={() => scrollToSection('projects')}
              className="group px-8 py-4 border-2 border-purple-400 text-purple-400 rounded-full font-semibold hover:bg-purple-400 hover:text-white transition-all duration-300 hover:scale-105 flex items-center gap-2"
            >
              <ExternalLink className="w-5 h-5 group-hover:animate-pulse" />
              View Projects
            </button>

            <button
              onClick={() => scrollToSection('contact')}
              className="group px-8 py-4 bg-transparent border-2 border-pink-400 text-pink-400 rounded-full font-semibold hover:bg-pink-400 hover:text-white transition-all duration-300 hover:scale-105 flex items-center gap-2"
            >
              <Mail className="w-5 h-5 group-hover:animate-bounce" />
              Get In Touch
            </button>
          </div>

          {/* Additional Interactive Elements */}
          <div className="flex justify-center space-x-8 mb-8">
            <div className="group cursor-pointer">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full flex items-center justify-center border border-purple-400/30 hover:border-purple-400 transition-all duration-300 hover:scale-110">
                <span className="text-purple-400 font-bold group-hover:animate-pulse">JS</span>
              </div>
              <p className="text-xs text-gray-500 mt-2 group-hover:text-purple-400 transition-colors">JavaScript</p>
            </div>
            <div className="group cursor-pointer">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full flex items-center justify-center border border-blue-400/30 hover:border-blue-400 transition-all duration-300 hover:scale-110">
                <span className="text-blue-400 font-bold group-hover:animate-pulse">TS</span>
              </div>
              <p className="text-xs text-gray-500 mt-2 group-hover:text-blue-400 transition-colors">TypeScript</p>
            </div>
            <div className="group cursor-pointer">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-full flex items-center justify-center border border-green-400/30 hover:border-green-400 transition-all duration-300 hover:scale-110">
                <span className="text-green-400 font-bold group-hover:animate-pulse">RE</span>
              </div>
              <p className="text-xs text-gray-500 mt-2 group-hover:text-green-400 transition-colors">React</p>
            </div>
          </div>
        </div>

        {/* Enhanced Scroll indicator */}
        <button
          onClick={scrollToAbout}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-purple-400 animate-bounce cursor-pointer hover:text-purple-300 transition-colors duration-300 group"
        >
          <div className="flex flex-col items-center">
            <span className="text-sm mb-2 opacity-70 group-hover:opacity-100">Scroll Down</span>
            <ArrowDown size={32} className="group-hover:animate-pulse" />
          </div>
        </button>
      </div>
    </section>
  );
};

export default Hero;
