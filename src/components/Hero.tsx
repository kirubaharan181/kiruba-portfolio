
import React, { useState, useEffect, useRef } from 'react';
import { ArrowDown, Download, ExternalLink, Github, Linkedin, Mail, Code, Star, Zap, Palette } from 'lucide-react';

const Hero = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [showStats, setShowStats] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [currentTheme, setCurrentTheme] = useState(0);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();

  const roles = [
    "Aspiring Web Developer",
    "Problem Solver",
    "Creative Thinker",
    "Tech Enthusiast",
    "Open Source Contributor",
    "UI/UX Explorer"
  ];

  const stats = [
    { number: "50+", label: "Projects Built", color: "text-purple-400", icon: Code },
    { number: "2+", label: "Years Learning", color: "text-pink-400", icon: Star },
    { number: "500+", label: "GitHub Commits", color: "text-blue-400", icon: Github },
    { number: "15+", label: "Technologies", color: "text-green-400", icon: Zap }
  ];

  const socialLinks = [
    { icon: Github, href: "https://github.com", label: "GitHub", color: "hover:text-gray-300" },
    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn", color: "hover:text-blue-400" },
    { icon: Mail, href: "mailto:alex.johnson@email.com", label: "Email", color: "hover:text-purple-400" }
  ];

  const themes = [
    {
      name: "Purple",
      primary: "from-purple-500 to-pink-500",
      secondary: "from-purple-400 to-pink-400",
      accent: "purple-400",
      bg: "from-purple-900/20 to-pink-900/20"
    },
    {
      name: "Blue",
      primary: "from-blue-500 to-cyan-500",
      secondary: "from-blue-400 to-cyan-400",
      accent: "blue-400",
      bg: "from-blue-900/20 to-cyan-900/20"
    },
    {
      name: "Green",
      primary: "from-green-500 to-emerald-500",
      secondary: "from-green-400 to-emerald-400",
      accent: "green-400",
      bg: "from-green-900/20 to-emerald-900/20"
    },
    {
      name: "Orange",
      primary: "from-orange-500 to-red-500",
      secondary: "from-orange-400 to-red-400",
      accent: "orange-400",
      bg: "from-orange-900/20 to-red-900/20"
    }
  ];

  const currentThemeColors = themes[currentTheme];

  // Interactive Canvas Animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      color: string;
      alpha: number;
    }> = [];

    const colors = ['#a855f7', '#ec4899', '#3b82f6', '#10b981'];

    // Create particles
    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 3 + 1,
        color: colors[Math.floor(Math.random() * colors.length)],
        alpha: Math.random() * 0.5 + 0.2
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle, index) => {
        // Update position
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Bounce off edges
        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

        // Draw particle
        ctx.save();
        ctx.globalAlpha = particle.alpha;
        ctx.fillStyle = particle.color;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();

        // Connect nearby particles
        particles.forEach((otherParticle, otherIndex) => {
          if (index !== otherIndex) {
            const dx = particle.x - otherParticle.x;
            const dy = particle.y - otherParticle.y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < 100) {
              ctx.save();
              ctx.globalAlpha = 0.1;
              ctx.strokeStyle = particle.color;
              ctx.lineWidth = 1;
              ctx.beginPath();
              ctx.moveTo(particle.x, particle.y);
              ctx.lineTo(otherParticle.x, otherParticle.y);
              ctx.stroke();
              ctx.restore();
            }
          }
        });
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Mouse tracking
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

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

  // Apply theme to document body
  useEffect(() => {
    document.body.className = `theme-${currentThemeColors.name.toLowerCase()}`;
  }, [currentTheme, currentThemeColors.name]);

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

  const changeTheme = () => {
    setCurrentTheme((prev) => (prev + 1) % themes.length);
  };

  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* Interactive Canvas Background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none"
        style={{ zIndex: 1 }}
      />

      {/* Enhanced Animated Background */}
      <div className="absolute inset-0" style={{ zIndex: 2 }}>
        <div className={`absolute inset-0 bg-gradient-to-br ${currentThemeColors.bg}`}></div>
        
        {/* Floating geometric shapes */}
        <div className={`absolute top-1/4 left-1/4 w-16 sm:w-24 md:w-32 h-16 sm:h-24 md:h-32 border border-${currentThemeColors.accent}/20 rotate-45 animate-spin`} style={{ animationDuration: '20s' }}></div>
        <div className={`absolute bottom-1/3 right-1/4 w-12 sm:w-16 md:w-24 h-12 sm:h-16 md:h-24 border border-${currentThemeColors.accent}/20 rotate-12 animate-pulse`}></div>
        <div className={`absolute top-1/2 right-1/3 w-8 sm:w-12 md:w-16 h-8 sm:h-12 md:h-16 bg-gradient-to-r ${currentThemeColors.secondary}/10 rounded-full animate-bounce`} style={{ animationDelay: '2s' }}></div>
        
        {/* Interactive mouse follower */}
        <div
          className={`absolute w-4 sm:w-6 h-4 sm:h-6 bg-gradient-to-r ${currentThemeColors.secondary} rounded-full pointer-events-none transition-all duration-300 ease-out`}
          style={{
            left: mousePosition.x - 12,
            top: mousePosition.y - 12,
            transform: `scale(${isHovering ? 1.5 : 1})`,
            opacity: isHovering ? 0.7 : 0.3,
            zIndex: 3
          }}
        />
      </div>

      {/* Theme Change Button */}
      <button
        onClick={changeTheme}
        className={`fixed top-4 right-4 z-50 w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-r ${currentThemeColors.primary} rounded-full flex items-center justify-center text-white hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl animate-pulse`}
        aria-label="Change Theme"
      >
        <Palette className="w-5 h-5 sm:w-6 sm:h-6" />
      </button>

      <div className="container mx-auto px-4 sm:px-6 text-center relative z-10">
        <div className="animate-fade-in">
          {/* Enhanced Name Animation */}
          <div className="mb-6 sm:mb-8">
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 group relative">
              <span className={`bg-gradient-to-r ${currentThemeColors.secondary} bg-clip-text text-transparent hover:${currentThemeColors.primary} transition-all duration-500 cursor-default`}>
                Alex Johnson
              </span>
              {/* Floating sparkles */}
              <div className={`absolute -top-2 sm:-top-4 -right-2 sm:-right-4 w-2 sm:w-4 h-2 sm:h-4 bg-yellow-400 rounded-full animate-ping opacity-75`}></div>
              <div className={`absolute -bottom-1 sm:-bottom-2 -left-1 sm:-left-2 w-2 sm:w-3 h-2 sm:h-3 bg-blue-400 rounded-full animate-pulse`}></div>
            </h1>
            
            {/* Enhanced Social Links - Moved down with better spacing */}
            <div className="flex justify-center space-x-4 sm:space-x-6 mt-6 mb-4">
              {socialLinks.map((social, index) => (
                <div key={index} className="relative group">
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-gray-400 ${social.color} transition-all duration-300 hover:scale-125 hover:rotate-12 relative`}
                    aria-label={social.label}
                  >
                    <social.icon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />
                  </a>
                  <span className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                    {social.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
          
          {/* Enhanced Typing Animation */}
          <div className="text-lg sm:text-2xl md:text-3xl text-gray-300 mb-6 sm:mb-8 h-10 sm:h-12 relative">
            <span className="relative">
              <span className={`bg-gradient-to-r ${currentThemeColors.secondary} bg-clip-text text-transparent`}>
                {displayText}
              </span>
              <span className={`border-r-2 border-${currentThemeColors.accent} animate-pulse ml-1`}></span>
            </span>
          </div>

          {/* Enhanced Description with Floating Words */}
          <div className="relative mb-6 sm:mb-8">
            <p className="text-sm sm:text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed px-4 sm:px-0">
              Passionate IT student crafting digital experiences with clean code and creative solutions. 
              Always eager to learn, grow, and contribute to meaningful projects that make a difference.
            </p>
            {/* Floating keywords */}
            <div className="absolute -top-2 sm:-top-4 left-1/4 animate-float hidden sm:block" style={{ animationDelay: '0s' }}>
              <span className={`bg-${currentThemeColors.accent}/20 text-${currentThemeColors.accent} px-2 py-1 rounded-full text-xs sm:text-sm`}>React</span>
            </div>
            <div className="absolute -bottom-2 sm:-bottom-4 right-1/4 animate-float hidden sm:block" style={{ animationDelay: '1s' }}>
              <span className={`bg-pink-500/20 text-pink-300 px-2 py-1 rounded-full text-xs sm:text-sm`}>TypeScript</span>
            </div>
          </div>

          {/* Enhanced Animated Stats */}
          {showStats && (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6 mb-8 sm:mb-12 px-4 sm:px-0">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className={`group p-3 sm:p-4 bg-slate-800/30 rounded-lg border border-gray-700 hover:border-${currentThemeColors.accent}/50 transition-all duration-300 hover:scale-105 hover:rotate-1 animate-fade-in`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="flex items-center justify-center mb-2">
                    <stat.icon className={`w-4 h-4 sm:w-6 sm:h-6 ${stat.color} group-hover:animate-bounce`} />
                  </div>
                  <div className={`text-lg sm:text-2xl md:text-3xl font-bold ${stat.color} group-hover:animate-pulse`}>
                    {stat.number}
                  </div>
                  <div className="text-gray-400 text-xs sm:text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          )}

          {/* Enhanced Interactive Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-8 sm:mb-12 px-4 sm:px-0">
            <a
              href="/resume.pdf"
              download
              className={`group relative px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r ${currentThemeColors.primary} rounded-full font-semibold text-white overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-${currentThemeColors.accent}/25 flex items-center gap-2 hover:rotate-1 w-full sm:w-auto justify-center`}
            >
              <Download className="w-4 h-4 sm:w-5 sm:h-5 group-hover:animate-bounce" />
              <span className="relative z-10 text-sm sm:text-base">Download Resume</span>
              <div className={`absolute inset-0 bg-gradient-to-r ${currentThemeColors.primary} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
            </a>
            
            <button
              onClick={() => scrollToSection('projects')}
              className={`group px-6 sm:px-8 py-3 sm:py-4 border-2 border-${currentThemeColors.accent} text-${currentThemeColors.accent} rounded-full font-semibold hover:bg-${currentThemeColors.accent} hover:text-white transition-all duration-300 hover:scale-105 hover:-rotate-1 flex items-center gap-2 relative overflow-hidden w-full sm:w-auto justify-center`}
            >
              <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5 group-hover:animate-pulse" />
              <span className="text-sm sm:text-base">View Projects</span>
            </button>

            <button
              onClick={() => scrollToSection('contact')}
              className={`group px-6 sm:px-8 py-3 sm:py-4 bg-transparent border-2 border-pink-400 text-pink-400 rounded-full font-semibold hover:bg-pink-400 hover:text-white transition-all duration-300 hover:scale-105 hover:rotate-1 flex items-center gap-2 relative overflow-hidden w-full sm:w-auto justify-center`}
            >
              <Mail className="w-4 h-4 sm:w-5 sm:h-5 group-hover:animate-bounce" />
              <span className="text-sm sm:text-base">Get In Touch</span>
            </button>
          </div>

          {/* Enhanced Tech Stack with Floating Animation - Better positioned */}
          <div className="flex justify-center space-x-4 sm:space-x-8 mb-16 sm:mb-20">
            {[
              { name: 'JS', color: 'purple', fullName: 'JavaScript' },
              { name: 'TS', color: 'blue', fullName: 'TypeScript' },
              { name: 'RE', color: 'green', fullName: 'React' }
            ].map((tech, index) => (
              <div key={index} className="group cursor-pointer animate-float" style={{ animationDelay: `${index * 0.5}s` }}>
                <div className={`w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-${tech.color}-500/20 to-${tech.color}-500/20 rounded-full flex items-center justify-center border border-${tech.color}-400/30 hover:border-${tech.color}-400 transition-all duration-300 hover:scale-110 hover:rotate-12 hover:shadow-lg hover:shadow-${tech.color}-500/25`}>
                  <span className={`text-${tech.color}-400 font-bold group-hover:animate-pulse text-sm sm:text-base`}>{tech.name}</span>
                </div>
                <p className={`text-xs text-gray-500 mt-2 group-hover:text-${tech.color}-400 transition-colors opacity-0 group-hover:opacity-100 hidden sm:block`}>
                  {tech.fullName}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Enhanced Scroll indicator - Moved further down */}
        <button
          onClick={scrollToAbout}
          className={`absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 text-${currentThemeColors.accent} animate-bounce cursor-pointer hover:text-${currentThemeColors.accent} transition-colors duration-300 group`}
        >
          <div className="flex flex-col items-center">
            <span className="text-xs sm:text-sm mb-2 opacity-70 group-hover:opacity-100 transition-opacity">Scroll Down</span>
            <div className="relative">
              <ArrowDown className="w-6 h-6 sm:w-8 sm:h-8 group-hover:animate-pulse" />
              <div className={`absolute inset-0 bg-${currentThemeColors.accent} rounded-full opacity-0 group-hover:opacity-20 group-hover:animate-ping`}></div>
            </div>
          </div>
        </button>
      </div>

      {/* Custom CSS for floating animation */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        /* Theme styles */
        .theme-purple { --theme-primary: #a855f7; }
        .theme-blue { --theme-primary: #3b82f6; }
        .theme-green { --theme-primary: #10b981; }
        .theme-orange { --theme-primary: #f97316; }
      `}</style>
    </section>
  );
};

export default Hero;
