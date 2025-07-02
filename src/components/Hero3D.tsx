import React, { useState, useEffect, useRef, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial, Float, Text3D, Environment, Stars, Html } from '@react-three/drei';
import { motion } from 'framer-motion';
import { ArrowDown, Download, ExternalLink, Github, Linkedin, Mail, Code, Star, Zap, Award } from 'lucide-react';
import * as THREE from 'three';

// 3D Floating Sphere Component
const FloatingSphere = ({ position, color, size = 1 }: { position: [number, number, number], color: string, size?: number }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime) * 0.3;
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.2;
    }
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <Sphere ref={meshRef} args={[size, 64, 64]} position={position}>
        <MeshDistortMaterial
          color={color}
          attach="material"
          distort={0.6}
          speed={1.5}
          roughness={0.2}
          metalness={0.8}
        />
      </Sphere>
    </Float>
  );
};

// Interactive Torus Component
const InteractiveTorus = ({ position }: { position: [number, number, number] }) => {
  const torusRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (torusRef.current) {
      torusRef.current.rotation.x = state.clock.elapsedTime * 0.2;
      torusRef.current.rotation.y = state.clock.elapsedTime * 0.3;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1.5}>
      <mesh ref={torusRef} position={position}>
        <torusGeometry args={[1, 0.3, 16, 100]} />
        <meshStandardMaterial color="#ec4899" metalness={0.8} roughness={0.2} />
      </mesh>
    </Float>
  );
};

// 3D Scene Component
const Scene3D = () => {
  return (
    <>
      <Environment preset="night" />
      <Stars radius={300} depth={60} count={20000} factor={7} saturation={0} fade />
      
      {/* Floating Spheres */}
      <FloatingSphere position={[-4, 2, -2]} color="#a855f7" size={0.8} />
      <FloatingSphere position={[4, -1, -3]} color="#ec4899" size={0.6} />
      <FloatingSphere position={[2, 3, -4]} color="#3b82f6" size={0.7} />
      <FloatingSphere position={[-3, -2, -1]} color="#10b981" size={0.5} />
      
      {/* Interactive Torus */}
      <InteractiveTorus position={[0, 0, -6]} />
      
      {/* Ambient and directional lighting */}
      <ambientLight intensity={0.6} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <pointLight position={[-10, -10, -10]} color="#a855f7" intensity={0.5} />
      <pointLight position={[10, 10, 10]} color="#ec4899" intensity={0.3} />
    </>
  );
};

const Hero3D = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [showStats, setShowStats] = useState(false);

  const roles = [
    "3D Portfolio Designer",
    "Futuristic Developer", 
    "Data Visualization Expert",
    "Interactive Experience Creator"
  ];

  const stats = [
    { number: "4+", label: "Major Projects", color: "text-purple-400", icon: Code },
    { number: "3+", label: "Years Learning", color: "text-pink-400", icon: Star },
    { number: "6+", label: "Certifications", color: "text-blue-400", icon: Award },
    { number: "95%", label: "Success Rate", color: "text-green-400", icon: Zap }
  ];

  const socialLinks = [
    { icon: Github, href: "https://github.com/kirubaharan181", label: "GitHub", color: "hover:text-gray-300" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/kirubaharan181", label: "LinkedIn", color: "hover:text-blue-400" },
    { icon: Mail, href: "#contact", label: "Email", color: "hover:text-purple-400" }
  ];

  // Typing animation effect
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
    <section id="home" className="min-h-screen relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900">
      {/* 3D Canvas Background */}
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 10], fov: 50 }}>
          <Suspense fallback={null}>
            <Scene3D />
            <OrbitControls enableZoom={false} enablePan={false} enableRotate={true} autoRotate autoRotateSpeed={0.5} />
          </Suspense>
        </Canvas>
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 min-h-screen flex items-center justify-center pt-20">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            {/* Main Title with Glassmorphism Effect */}
            <motion.div 
              className="mb-8 backdrop-blur-md bg-white/5 rounded-3xl p-8 border border-white/10"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 group relative">
                <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent hover:from-purple-300 hover:to-pink-300 transition-all duration-500 cursor-default">
                  Kirubaharan
                </span>
                <div className="absolute -top-4 -right-4 w-4 h-4 bg-yellow-400 rounded-full animate-ping opacity-75 hidden md:block"></div>
              </h1>
              
              {/* Social Links with 3D Effect */}
              <div className="flex justify-center space-x-8 mb-8">
                {socialLinks.map((social, index) => (
                  <motion.div 
                    key={index} 
                    className="relative group"
                    whileHover={{ scale: 1.2, rotateY: 360 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <a
                      href={social.href}
                      onClick={social.href === '#contact' ? handleEmailClick : undefined}
                      target={social.href === '#contact' ? undefined : "_blank"}
                      rel={social.href === '#contact' ? undefined : "noopener noreferrer"}
                      className={`text-gray-400 ${social.color} transition-all duration-300 relative backdrop-blur-md bg-white/10 p-4 rounded-2xl border border-white/20`}
                      aria-label={social.label}
                    >
                      <social.icon className="w-7 h-7 md:w-8 md:h-8" />
                    </a>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            {/* Typing Animation */}
            <motion.div 
              className="text-xl sm:text-2xl md:text-3xl text-gray-300 mb-8 h-12 relative backdrop-blur-md bg-white/5 rounded-2xl p-4 border border-white/10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <span className="relative">
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  {displayText}
                </span>
                <span className="border-r-2 border-purple-400 animate-pulse ml-1"></span>
              </span>
            </motion.div>

            {/* Description with Glassmorphism */}
            <motion.div 
              className="relative mb-8 backdrop-blur-md bg-white/5 rounded-2xl p-6 border border-white/10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
                Passionate Data Analyst with cutting-edge 3D visualization skills and futuristic approach to portfolio design. 
                Creating immersive experiences that bridge data science with interactive web technologies.
              </p>
            </motion.div>

            {/* Stats with 3D Cards */}
            {showStats && (
              <motion.div 
                className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1 }}
              >
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    className="group p-6 backdrop-blur-md bg-white/10 rounded-2xl border border-white/20 hover:border-purple-400/50 transition-all duration-300"
                    whileHover={{ 
                      scale: 1.05, 
                      rotateY: 10,
                      boxShadow: "0 25px 50px -12px rgba(168, 85, 247, 0.25)"
                    }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1 + index * 0.1 }}
                  >
                    <div className="flex items-center justify-center mb-3">
                      <stat.icon className={`w-8 h-8 ${stat.color} group-hover:animate-bounce`} />
                    </div>
                    <div className={`text-3xl md:text-4xl font-bold ${stat.color} group-hover:animate-pulse`}>
                      {stat.number}
                    </div>
                    <div className="text-gray-400 text-sm">{stat.label}</div>
                  </motion.div>
                ))}
              </motion.div>
            )}

            {/* Action Buttons with 3D Effects */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
            >
              <motion.a
                href="https://i.ibb.co/YFx6c0mP/Kiruba-res1-page-0001.jpg"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl font-semibold text-white overflow-hidden transition-all duration-300 flex items-center gap-3 w-full sm:w-auto justify-center backdrop-blur-md border border-white/20"
                whileHover={{ 
                  scale: 1.05, 
                  boxShadow: "0 25px 50px -12px rgba(168, 85, 247, 0.5)",
                  rotateX: 5
                }}
                whileTap={{ scale: 0.95 }}
              >
                <Download className="w-5 h-5 group-hover:animate-bounce" />
                <span className="relative z-10">View Resume</span>
              </motion.a>
              
              <motion.button
                onClick={() => scrollToSection('projects')}
                className="group px-8 py-4 backdrop-blur-md bg-white/10 border-2 border-purple-400 text-purple-400 rounded-2xl font-semibold hover:bg-purple-400 hover:text-white transition-all duration-300 flex items-center gap-3 w-full sm:w-auto justify-center"
                whileHover={{ 
                  scale: 1.05, 
                  boxShadow: "0 25px 50px -12px rgba(168, 85, 247, 0.3)",
                  rotateX: 5
                }}
                whileTap={{ scale: 0.95 }}
              >
                <ExternalLink className="w-5 h-5 group-hover:animate-pulse" />
                <span>View Projects</span>
              </motion.button>

              <motion.button
                onClick={() => scrollToSection('contact')}
                className="group px-8 py-4 backdrop-blur-md bg-white/10 border-2 border-pink-400 text-pink-400 rounded-2xl font-semibold hover:bg-pink-400 hover:text-white transition-all duration-300 flex items-center gap-3 w-full sm:w-auto justify-center"
                whileHover={{ 
                  scale: 1.05, 
                  boxShadow: "0 25px 50px -12px rgba(236, 72, 153, 0.3)",
                  rotateX: 5
                }}
                whileTap={{ scale: 0.95 }}
              >
                <Mail className="w-5 h-5 group-hover:animate-bounce" />
                <span>Get In Touch</span>
              </motion.button>
            </motion.div>

            {/* Tech Stack with 3D Floating Effect */}
            <motion.div 
              className="flex justify-center space-x-12 mb-32"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 }}
            >
              {[
                { name: 'Java', color: 'blue', fullName: 'Java Development' },
                { name: 'SQL', color: 'purple', fullName: 'Database Management' },
                { name: '3D', color: 'green', fullName: '3D Web Graphics' }
              ].map((tech, index) => (
                <motion.div 
                  key={index} 
                  className="group cursor-pointer"
                  whileHover={{ 
                    scale: 1.2, 
                    rotateY: 360, 
                    rotateX: 10 
                  }}
                  transition={{ type: "spring", stiffness: 300 }}
                  animate={{ 
                    y: [0, -20, 0],
                    rotateZ: [0, 5, -5, 0]
                  }}
                  transition={{ 
                    duration: 4, 
                    repeat: Infinity, 
                    delay: index * 0.5 
                  }}
                >
                  <div className={`w-20 h-20 bg-gradient-to-r from-${tech.color}-500/30 to-${tech.color}-500/30 rounded-2xl flex items-center justify-center border border-${tech.color}-400/30 hover:border-${tech.color}-400 transition-all duration-300 backdrop-blur-md bg-white/10 group-hover:shadow-2xl group-hover:shadow-${tech.color}-500/25`}>
                    <span className={`text-${tech.color}-400 font-bold group-hover:animate-pulse text-sm`}>{tech.name}</span>
                  </div>
                  <p className={`text-xs text-gray-500 mt-3 group-hover:text-${tech.color}-400 transition-colors opacity-0 group-hover:opacity-100 hidden sm:block text-center`}>
                    {tech.fullName}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Scroll Indicator with 3D Effect */}
          <motion.button
            onClick={() => scrollToSection('about')}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-purple-400 cursor-pointer hover:text-purple-300 transition-colors duration-300 group"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            whileHover={{ scale: 1.1 }}
          >
            <div className="flex flex-col items-center backdrop-blur-md bg-white/10 p-4 rounded-2xl border border-white/20">
              <span className="text-sm mb-2 opacity-70 group-hover:opacity-100 transition-opacity">Explore 3D Portfolio</span>
              <div className="relative">
                <ArrowDown className="w-8 h-8 group-hover:animate-pulse" />
                <div className="absolute inset-0 bg-purple-400 rounded-full opacity-0 group-hover:opacity-20 group-hover:animate-ping"></div>
              </div>
            </div>
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default Hero3D;
