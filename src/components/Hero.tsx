import React, { useState, useEffect, useRef } from 'react';
import { ArrowDown, Download, ExternalLink, Github, Linkedin, Mail, Code, Star, Zap, Award, User } from 'lucide-react';

const Hero = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [showStats, setShowStats] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();

  const roles = [
    "Aspiring Data Analyst",
    "Tech Explorer", 
    "Data Analytics Enthusiast",
    "Machine Learning Explorer",
    "Software Developer",
    "Problem Solver"
  ];

  const stats = [
    { number: "4+", label: "Major Projects", color: "text-purple-400", icon: Code },
    { number: "4+", label: "Years Learning", color: "text-pink-400", icon: Star },
    { number: "6+", label: "Certifications", color: "text-blue-400", icon: Award },
    { number: "95%", label: "Success Rate", color: "text-green-400", icon: Zap }
  ];

  const socialLinks = [
    { icon: Github, href: "https://github.com/kirubaharan181", label: "GitHub", color: "hover:text-gray-300" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/kiruba-haran-7369a0320", label: "LinkedIn", color: "hover:text-blue-400" },
    { icon: Mail, href: "#contact", label: "Email", color: "hover:text-purple-400" }
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
        particle.x += particle.vx;
        particle.y += particle.vy;

        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

        ctx.save();
        ctx.globalAlpha = particle.alpha;
        ctx.fillStyle = particle.color;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();

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

  const handleEmailClick = (e: React.MouseEvent) => {
    e.preventDefault();
    scrollToSection('contact');
  };

  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* Interactive Canvas Background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none"
        style={{ zIndex: 1 }}
      />

      <div className="absolute inset-0" style={{ zIndex: 2 }}>
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900"></div>
        
        <div className="absolute top-10 left-10 w-16 h-16 border border-purple-400/20 rotate-45 animate-spin hidden md:block" style={{ animationDuration: '20s' }}></div>
        <div className="absolute top-10 right-10 w-12 h-12 border border-pink-400/20 rotate-12 animate-pulse hidden md:block"></div>
        <div className="absolute bottom-32 left-10 w-20 h-20 border border-blue-400/20 rounded-full animate-bounce hidden md:block" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-32 right-10 w-16 h-16 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full animate-pulse hidden md:block"></div>
        
        <div
          className="absolute w-6 h-6 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full pointer-events-none transition-all duration-300 ease-out hidden md:block"
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
          <div className="mb-8">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 group relative">
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent hover:from-purple-300 hover:to-pink-300 transition-all duration-500 cursor-default">
                Kirubaharan
              </span>
              <div className="absolute -top-4 -right-4 w-4 h-4 bg-yellow-400 rounded-full animate-ping opacity-75 hidden md:block"></div>
              <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-blue-400 rounded-full animate-pulse hidden md:block"></div>
            </h1>
            
            <div className="flex justify-center space-x-8 mb-12">
              {socialLinks.map((social, index) => (
                <div key={index} className="relative group">
                  <a
                    href={social.href}
                    onClick={social.href === '#contact' ? handleEmailClick : undefined}
                    target={social.href === '#contact' ? undefined : "_blank"}
                    rel={social.href === '#contact' ? undefined : "noopener noreferrer"}
                    className={`text-gray-400 ${social.color} transition-all duration-300 hover:scale-125 hover:rotate-12 relative`}
                    aria-label={social.label}
                  >
                    <social.icon className="w-7 h-7 md:w-8 md:h-8" />
                  </a>
                  <span className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-sm px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap shadow-lg">
                    {social.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="text-xl sm:text-2xl md:text-3xl text-gray-300 mb-8 h-12 relative">
            <span className="relative">
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                {displayText}
              </span>
              <span className="border-r-2 border-purple-400 animate-pulse ml-1"></span>
            </span>
          </div>

          <div className="relative mb-8">
            <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Passionate Data Analyst with a strong foundation in software development and machine learning. 
              Currently exploring data analysis techniques and sentiment analysis for review ranking systems, aiming to leverage data-driven insights for impactful business solutions.
            </p>
          </div>

          {showStats && (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="group p-4 bg-slate-800/30 rounded-lg border border-gray-700 hover:border-purple-400/50 transition-all duration-300 hover:scale-105 animate-fade-in"
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

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <a
              href="/Kirubaharan_Resume.pdf"
              download="Kirubaharan_Resume.pdf"
              className="group relative px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full font-semibold text-white overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25 flex items-center gap-3 w-full sm:w-auto justify-center"
            >
              <Download className="w-5 h-5 group-hover:animate-bounce" />
              <span className="relative z-10">Download Resume</span>
            </a>
            
            <button
              onClick={() => scrollToSection('projects')}
              className="group px-8 py-4 border-2 border-purple-400 text-purple-400 rounded-full font-semibold hover:bg-purple-400 hover:text-white transition-all duration-300 hover:scale-105 flex items-center gap-3 w-full sm:w-auto justify-center"
            >
              <ExternalLink className="w-5 h-5 group-hover:animate-pulse" />
              <span>View Projects</span>
            </button>

            <button
              onClick={() => scrollToSection('contact')}
              className="group px-8 py-4 bg-transparent border-2 border-pink-400 text-pink-400 rounded-full font-semibold hover:bg-pink-400 hover:text-white transition-all duration-300 hover:scale-105 flex items-center gap-3 w-full sm:w-auto justify-center"
            >
              <Mail className="w-5 h-5 group-hover:animate-bounce" />
              <span>Get In Touch</span>
            </button>
          </div>

          <div className="flex justify-center space-x-8 mb-32">
            {[
              { name: 'PY', color: 'blue', fullName: 'Python' },
              { name: 'SQL', color: 'purple', fullName: 'SQL' },
              { name: 'ML', color: 'green', fullName: 'Machine Learning' }
            ].map((tech, index) => (
              <div key={index} className="group cursor-pointer animate-float" style={{ animationDelay: `${index * 0.5}s` }}>
                <div className={`w-16 h-16 bg-gradient-to-r from-${tech.color}-500/20 to-${tech.color}-500/20 rounded-full flex items-center justify-center border border-${tech.color}-400/30 hover:border-${tech.color}-400 transition-all duration-300 hover:scale-110 hover:rotate-12 hover:shadow-lg hover:shadow-${tech.color}-500/25`}>
                  <span className={`text-${tech.color}-400 font-bold group-hover:animate-pulse text-xs`}>{tech.name}</span>
                </div>
                <p className={`text-xs text-gray-500 mt-2 group-hover:text-${tech.color}-400 transition-colors opacity-0 group-hover:opacity-100 hidden sm:block`}>
                  {tech.fullName}
                </p>
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={scrollToAbout}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-purple-400 animate-bounce cursor-pointer hover:text-purple-300 transition-colors duration-300 group"
        >
          <div className="flex flex-col items-center">
            <span className="text-sm mb-2 opacity-70 group-hover:opacity-100 transition-opacity">Scroll Down</span>
            <div className="relative">
              <ArrowDown className="w-8 h-8 group-hover:animate-pulse" />
              <div className="absolute inset-0 bg-purple-400 rounded-full opacity-0 group-hover:opacity-20 group-hover:animate-ping"></div>
            </div>
          </div>
        </button>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;
