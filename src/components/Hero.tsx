
import React, { useState, useEffect } from 'react';
import { ChevronDown, Github, Linkedin, Mail, Phone, MapPin, Award, Code, Database, Target } from 'lucide-react';

const Hero = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const roles = [
    "Aspiring Data Analyst",
    "Machine Learning Enthusiast", 
    "Sentiment Analysis Researcher",
    "IT Student",
    "Problem Solver"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [roles.length]);

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-10 -left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-10 -right-10 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Kiruba Haran K
          </h1>
          <div className="text-2xl md:text-3xl text-gray-300 mb-6 h-12 flex items-center justify-center">
            <span className="inline-block">
              {roles[currentRole]}
            </span>
          </div>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Passionate IT student specializing in machine learning and sentiment analysis. 
            Dedicated to transforming data into meaningful insights through innovative ML solutions.
          </p>
        </div>

        {/* Contact Info */}
        <div className="flex flex-wrap justify-center gap-6 mb-12 text-gray-300">
          <div className="flex items-center gap-2">
            <Mail size={20} className="text-purple-400" />
            <span>kirubakrishkk@gmail.com</span>
          </div>
          <div className="flex items-center gap-2">
            <Phone size={20} className="text-purple-400" />
            <span>+91 9080257155</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin size={20} className="text-purple-400" />
            <span>Tenkasi, Tamil Nadu</span>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12 max-w-4xl mx-auto">
          <div className="bg-slate-800/50 p-6 rounded-xl border border-gray-700 hover:border-purple-400/50 transition-all duration-300">
            <div className="flex items-center justify-center mb-3">
              <Code className="text-purple-400" size={32} />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">4+</h3>
            <p className="text-gray-400">Projects Built</p>
          </div>
          
          <div className="bg-slate-800/50 p-6 rounded-xl border border-gray-700 hover:border-purple-400/50 transition-all duration-300">
            <div className="flex items-center justify-center mb-3">
              <Target className="text-pink-400" size={32} />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">2+</h3>
            <p className="text-gray-400">Years Learning</p>
          </div>

          <div className="bg-slate-800/50 p-6 rounded-xl border border-gray-700 hover:border-purple-400/50 transition-all duration-300">
            <div className="flex items-center justify-center mb-3">
              <Award className="text-yellow-400" size={32} />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">6+</h3>
            <p className="text-gray-400">Certifications</p>
          </div>

          <div className="bg-slate-800/50 p-6 rounded-xl border border-gray-700 hover:border-purple-400/50 transition-all duration-300">
            <div className="flex items-center justify-center mb-3">
              <Database className="text-blue-400" size={32} />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">10+</h3>
            <p className="text-gray-400">Technologies</p>
          </div>
        </div>

        {/* Current Goal & Exploration */}
        <div className="grid md:grid-cols-2 gap-6 mb-12 max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 p-6 rounded-xl border border-purple-400/30">
            <h3 className="text-xl font-bold text-white mb-3">🎯 Current Goal</h3>
            <p className="text-gray-300">Becoming a proficient Data Analyst with expertise in machine learning and sentiment analysis</p>
          </div>
          <div className="bg-gradient-to-r from-blue-500/20 to-cyan-500/20 p-6 rounded-xl border border-blue-400/30">
            <h3 className="text-xl font-bold text-white mb-3">🔍 Currently Exploring</h3>
            <p className="text-gray-300">Advanced data analysis techniques, visualization tools, and predictive modeling</p>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <a
            href="#projects"
            className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300 hover:scale-105"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-8 py-4 bg-slate-800 text-white rounded-full font-semibold border border-gray-600 hover:border-purple-400 transition-all duration-300 hover:scale-105"
          >
            Get In Touch
          </a>
        </div>

        {/* Scroll Indicator */}
        <button
          onClick={scrollToAbout}
          className="animate-bounce text-gray-400 hover:text-purple-400 transition-colors duration-300"
          aria-label="Scroll to About section"
        >
          <ChevronDown size={32} />
        </button>
      </div>
    </section>
  );
};

export default Hero;
