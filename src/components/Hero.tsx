
import React, { useState, useEffect, useRef } from 'react';
import { ArrowDown, Download, ExternalLink, Github, Linkedin, Mail, Code, Star, Zap } from 'lucide-react';

const Hero = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [showStats, setShowStats] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [buttonStates, setButtonStates] = useState({
    download: false,
    projects: false,
    contact: false
  });
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

  const handleButtonClick = (buttonType: 'download' | 'projects' | 'contact') => {
    setButtonStates(prev => ({ ...prev, [buttonType]: true }));
    setTimeout(() => {
      setButtonStates(prev => ({ ...prev, [buttonType]: false }));
    }, 600);
  };

  return (
    <>
      <style>
        {`
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
          }
          .animate-float {
            animation: float 3s ease-in-out infinite;
          }
          .gradient-shift {
            animation: gradientShift 4s ease-in-out infinite;
          }
          @keyframes gradientShift {
            0%, 100% { background: linear-gradient(45deg, #a855f7, #ec4899); }
            25% { background: linear-gradient(45deg, #3b82f6, #10b981); }
            50% { background: linear-gradient(45deg, #f59e0b, #ef4444); }
            75% { background: linear-gradient(45deg, #8b5cf6, #06b6d4); }
          }
          .color-wave {
            animation: colorWave 3s ease-in-out infinite;
          }
          @keyframes colorWave {
            0%, 100% { color: #a855f7; }
            25% { color: #ec4899; }
            50% { color: #3b82f6; }
            75% { color: #10b981; }
          }
          .pulse-glow {
            animation: pulseGlow 2s ease-in-out infinite;
          }
          @keyframes pulseGlow {
            0%, 100% { box-shadow: 0 0 20px rgba(168, 85, 247, 0.3); }
            50% { box-shadow: 0 0 40px rgba(236, 72, 153, 0.6); }
          }
          @media (max-width: 768px) {
            .responsive-text { font-size: 2.5rem !important; }
            .responsive-subtext { font-size: 1.25rem !important; }
            .responsive-buttons { flex-direction: column; gap: 1rem; }
            .responsive-stats { grid-template-columns: repeat(2, 1fr) !important; }
          }
          @media (max-width: 480px) {
            .responsive-text { font-size: 2rem !important; }
            .responsive-subtext { font-size: 1rem !important; }
          }
        `}
      </style>
      
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
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-pink-900/20"></div>
          
          {/* Floating geometric shapes */}
          <div className="absolute top-1/4 left-1/4 w-32 h-32 border border-purple-400/20 rotate-45 animate-spin" style={{ animationDuration: '20s' }}></div>
          <div className="absolute bottom-1/3 right-1/4 w-24 h-24 border border-pink-400/20 rotate-12 animate-pulse"></div>
          <div className="absolute top-1/2 right-1/3 w-16 h-16 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full animate-bounce" style={{ animationDelay: '2s' }}></div>
          
          {/* Interactive mouse follower */}
          <div
            className="absolute w-6 h-6 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full pointer-events-none transition-all duration-300 ease-out"
            style={{
              left: mousePosition.x - 12,
              top: mousePosition.y - 12,
              transform: `scale(${isHovering ? 1.5 : 1})`,
              opacity: isHovering ? 0.7 : 0.3,
              zIndex: 3
            }}
          />
        </div>

        <div className="container mx-auto px-4 sm:px-6 text-center relative z-10">
          <div className="animate-fade-in">
            {/* Enhanced Name Animation */}
            <div className="mb-6">
              <h1 className="text-4xl sm:text-5xl md:text-7xl responsive-text font-bold mb-4 group relative">
                <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-600 bg-clip-text text-transparent hover:from-pink-400 hover:via-purple-400 hover:to-pink-600 transition-all duration-500 cursor-default color-wave">
                  Alex Johnson
                </span>
                {/* Floating sparkles */}
                <div className="absolute -top-4 -right-4 w-4 h-4 bg-yellow-400 rounded-full animate-ping opacity-75"></div>
                <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>
              </h1>
              
              {/* Enhanced Social Links with Better Visibility */}
              <div className="flex justify-center items-center space-x-6 mt-6 mb-4">
                {socialLinks.map((social, index) => (
                  <div key={index} className="relative group">
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`text-gray-300 ${social.color} transition-all duration-300 hover:scale-125 hover:rotate-12 relative flex flex-col items-center p-3 rounded-lg bg-slate-800/30 backdrop-blur-sm border border-gray-700/50 hover:border-purple-400/50 hover:bg-slate-700/40`}
                      aria-label={social.label}
                    >
                      <social.icon size={24} className="mb-1" />
                      <span className="text-xs text-gray-400 group-hover:text-white transition-colors font-medium">
                        {social.label}
                      </span>
                    </a>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Enhanced Typing Animation */}
            <div className="text-xl sm:text-2xl md:text-3xl responsive-subtext text-gray-300 mb-8 h-12 relative">
              <span className="relative">
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  {displayText}
                </span>
                <span className="border-r-2 border-purple-400 animate-pulse ml-1"></span>
              </span>
            </div>

            {/* Enhanced Description with Floating Words */}
            <div className="relative mb-8">
              <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed px-4">
                Passionate IT student crafting digital experiences with clean code and creative solutions. 
                Always eager to learn, grow, and contribute to meaningful projects that make a difference.
              </p>
              {/* Floating keywords */}
              <div className="absolute -top-4 left-1/4 animate-float hidden sm:block" style={{ animationDelay: '0s' }}>
                <span className="bg-purple-500/20 text-purple-300 px-2 py-1 rounded-full text-sm">React</span>
              </div>
              <div className="absolute -bottom-4 right-1/4 animate-float hidden sm:block" style={{ animationDelay: '1s' }}>
                <span className="bg-pink-500/20 text-pink-300 px-2 py-1 rounded-full text-sm">TypeScript</span>
              </div>
            </div>

            {/* Enhanced Animated Stats */}
            {showStats && (
              <div className="grid grid-cols-2 md:grid-cols-4 responsive-stats gap-4 sm:gap-6 mb-12">
                {stats.map((stat, index) => (
                  <div
                    key={index}
                    className="group p-4 bg-slate-800/30 rounded-lg border border-gray-700 hover:border-purple-400/50 transition-all duration-300 hover:scale-105 hover:rotate-1 animate-fade-in pulse-glow"
                    style={{ animationDelay: `${index * 0.2}s` }}
                  >
                    <div className="flex items-center justify-center mb-2">
                      <stat.icon className={`w-6 h-6 ${stat.color} group-hover:animate-bounce`} />
                    </div>
                    <div className={`text-2xl md:text-3xl font-bold ${stat.color} group-hover:animate-pulse`}>
                      {stat.number}
                    </div>
                    <div className="text-gray-400 text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
            )}

            {/* Enhanced Interactive Action Buttons with Color Animation */}
            <div className="flex flex-col sm:flex-row responsive-buttons gap-4 sm:gap-6 justify-center items-center mb-12">
              <a
                href="/resume.pdf"
                download
                onClick={() => handleButtonClick('download')}
                className={`group relative px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-white overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-lg flex items-center gap-2 hover:rotate-1 w-full sm:w-auto justify-center ${
                  buttonStates.download 
                    ? 'bg-gradient-to-r from-green-500 to-emerald-500 animate-pulse' 
                    : 'gradient-shift hover:shadow-purple-500/25'
                }`}
              >
                <Download className={`w-5 h-5 ${buttonStates.download ? 'animate-spin' : 'group-hover:animate-bounce'}`} />
                <span className="relative z-10">Download Resume</span>
                <div className="absolute inset-0 rounded-full bg-white opacity-0 group-active:opacity-30 group-active:animate-ping"></div>
              </a>
              
              <button
                onClick={() => {
                  handleButtonClick('projects');
                  scrollToSection('projects');
                }}
                className={`group px-6 sm:px-8 py-3 sm:py-4 border-2 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:-rotate-1 flex items-center gap-2 relative overflow-hidden w-full sm:w-auto justify-center ${
                  buttonStates.projects
                    ? 'border-green-400 text-green-400 bg-green-400/20'
                    : 'border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white'
                }`}
              >
                <ExternalLink className={`w-5 h-5 ${buttonStates.projects ? 'animate-bounce' : 'group-hover:animate-pulse'}`} />
                View Projects
                <div className="absolute inset-0 bg-purple-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left -z-10"></div>
              </button>

              <button
                onClick={() => {
                  handleButtonClick('contact');
                  scrollToSection('contact');
                }}
                className={`group px-6 sm:px-8 py-3 sm:py-4 bg-transparent border-2 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:rotate-1 flex items-center gap-2 relative overflow-hidden w-full sm:w-auto justify-center ${
                  buttonStates.contact
                    ? 'border-blue-400 text-blue-400 bg-blue-400/20'
                    : 'border-pink-400 text-pink-400 hover:bg-pink-400 hover:text-white'
                }`}
              >
                <Mail className={`w-5 h-5 ${buttonStates.contact ? 'animate-spin' : 'group-hover:animate-bounce'}`} />
                Get In Touch
                <div className="absolute inset-0 bg-pink-400 transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-bottom -z-10"></div>
              </button>
            </div>

            {/* Enhanced Tech Stack with Floating Animation */}
            <div className="flex justify-center space-x-4 sm:space-x-8 mb-8">
              {[
                { name: 'JS', color: 'purple', fullName: 'JavaScript' },
                { name: 'TS', color: 'blue', fullName: 'TypeScript' },
                { name: 'RE', color: 'green', fullName: 'React' }
              ].map((tech, index) => (
                <div key={index} className="group cursor-pointer animate-float" style={{ animationDelay: `${index * 0.5}s` }}>
                  <div className={`w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-${tech.color}-500/20 to-${tech.color}-500/20 rounded-full flex items-center justify-center border border-${tech.color}-400/30 hover:border-${tech.color}-400 transition-all duration-300 hover:scale-110 hover:rotate-12 hover:shadow-lg hover:shadow-${tech.color}-500/25`}>
                    <span className={`text-${tech.color}-400 font-bold group-hover:animate-pulse text-sm sm:text-base`}>{tech.name}</span>
                  </div>
                  <p className={`text-xs text-gray-500 mt-2 group-hover:text-${tech.color}-400 transition-colors opacity-0 group-hover:opacity-100`}>
                    {tech.fullName}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Enhanced Scroll indicator - moved down */}
          <button
            onClick={scrollToAbout}
            className="absolute bottom-4 sm:bottom-6 left-1/2 transform -translate-x-1/2 text-purple-400 animate-bounce cursor-pointer hover:text-purple-300 transition-colors duration-300 group"
          >
            <div className="flex flex-col items-center">
              <span className="text-xs sm:text-sm mb-2 opacity-70 group-hover:opacity-100 transition-opacity">Scroll Down</span>
              <div className="relative">
                <ArrowDown size={28} className="group-hover:animate-pulse color-wave" />
                <div className="absolute inset-0 bg-purple-400 rounded-full opacity-0 group-hover:opacity-20 group-hover:animate-ping"></div>
              </div>
            </div>
          </button>
        </div>
      </section>
    </>
  );
};

export default Hero;
