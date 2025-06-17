
import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Resume from '../components/Resume';
import Certifications from '../components/Certifications';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';
import Preloader from '../components/Preloader';

const Index = () => {
  const [currentTheme, setCurrentTheme] = useState('purple');

  useEffect(() => {
    const handleThemeChange = () => {
      const bodyClass = document.body.className;
      const themeMatch = bodyClass.match(/theme-(\w+)/);
      if (themeMatch) {
        setCurrentTheme(themeMatch[1]);
      }
    };

    // Listen for theme changes
    const observer = new MutationObserver(handleThemeChange);
    observer.observe(document.body, { attributes: true, attributeFilter: ['class'] });

    return () => observer.disconnect();
  }, []);

  const getThemeClasses = () => {
    switch (currentTheme) {
      case 'blue':
        return 'from-slate-900 via-blue-900 to-slate-900';
      case 'green':
        return 'from-slate-900 via-green-900 to-slate-900';
      case 'orange':
        return 'from-slate-900 via-orange-900 to-slate-900';
      default:
        return 'from-slate-900 via-purple-900 to-slate-900';
    }
  };

  return (
    <div className={`min-h-screen bg-gradient-to-br ${getThemeClasses()} transition-all duration-500`}>
      <Preloader />
      <Header />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Resume />
      <Certifications />
      <Contact />
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Index;
