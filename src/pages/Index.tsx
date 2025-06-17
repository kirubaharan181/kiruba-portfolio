
import React from 'react';
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
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
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
