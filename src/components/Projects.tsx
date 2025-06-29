
import React, { useState } from 'react';
import { Github, ExternalLink, Filter } from 'lucide-react';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const projects = [
    {
      id: 1,
      title: "TripTale - Travel Guidance App",
      description: "A comprehensive travel guidance application built with React and MERN stack. Features travel planning, destination recommendations, and user-friendly interface for seamless travel experiences.",
      image: "https://i.ibb.co/dwW7Dqf4/Whats-App-Image-2025-06-20-at-17-31-21-c1926c85.jpg",
      category: "Web Development",
      tech: ["React", "Node.js", "MongoDB", "Express.js", "MERN Stack"],
      github: "https://github.com/kirubaharan181",
      demo: null,
      year: "2024"
    },
    {
      id: 2,
      title: "Sentiment Analysis for Review Ranking",
      description: "Advanced sentiment analysis model using machine learning techniques including LSTM and BERT for sentiment classification. Enhanced review analysis system that ranks reviews based on sentiment scores for better user experience.",
      image: "https://github.com/kirubaharan181/kirubaharan181.github.io/blob/main/smile.jpg?raw=true",
      category: "Data Analytics",
      tech: ["Python", "LSTM", "BERT", "NLP", "Deep Learning", "Sentiment Analysis"],
      github: "https://github.com/kirubaharan181",
      demo: null,
      year: "2024"
    },
    {
      id: 3,
      title: "Hateful Speech Detection System",
      description: "Machine learning-based system for detecting hateful and toxic speech in social media content. Utilizes advanced natural language processing techniques with BERT and custom neural networks for accurate hate speech classification.",
      image: "https://i.ibb.co/Kx3wPJW1/hate-pic.jpg",
      category: "Data Analytics",
      tech: ["Python", "BERT", "NLP", "Machine Learning", "Text Classification"],
      github: "https://github.com/kirubaharan181",
      demo: null,
      year: "2024-2025"
    },
    {
      id: 4,
      title: "Wool Monitoring Application",
      description: "Built a Java-based tracking system for wool from farm to fabric. Integrated SQLPlus database for inventory and order management with an E-commerce platform.",
      image: "https://github.com/kirubaharan181/kirubaharan181.github.io/blob/main/wool.jpg?raw=true",
      category: "Web Development",
      tech: ["Java", "SQLPlus", "Database Design", "E-commerce"],
      github: "https://github.com/kirubaharan181",
      demo: null,
      year: "2023"
    }
  ];

  const categories = ['All', 'Data Analytics', 'Web Development'];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="py-20 bg-slate-900/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto rounded-full"></div>
          <p className="text-xl text-gray-300 mt-6 max-w-3xl mx-auto">
            Showcasing my passion for data analytics, machine learning, and creating innovative solutions that solve real-world problems
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <Filter className="text-purple-400 mr-2" size={20} />
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeFilter === category
                  ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg'
                  : 'bg-slate-800/50 text-gray-300 hover:bg-slate-700/50 hover:text-white border border-gray-600'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group bg-slate-800/30 rounded-xl overflow-hidden border border-gray-700 hover:border-purple-400/50 transition-all duration-300 hover:transform hover:scale-105"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-auto object-cover group-hover:scale-110 transition-transform duration-500 md:h-64 lg:h-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-3 right-3 bg-purple-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                  {project.year}
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm border border-purple-400/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Project Links */}
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors duration-300"
                  >
                    <Github size={16} />
                    Code
                  </a>
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300"
                    >
                      <ExternalLink size={16} />
                      Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-12">
          <a
            href="https://github.com/kirubaharan181"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300 hover:scale-105"
          >
            <Github size={20} />
            View All Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
