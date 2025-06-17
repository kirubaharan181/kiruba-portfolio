
import React from 'react';
import { Code, Heart, Coffee, Book } from 'lucide-react';

const About = () => {
  const funFacts = [
    { icon: Code, text: "Favorite Language: JavaScript", color: "text-yellow-400" },
    { icon: Coffee, text: "Coffee Cups per Day: 4", color: "text-amber-400" },
    { icon: Book, text: "Books Read This Year: 12", color: "text-blue-400" },
    { icon: Heart, text: "Passion: Building Cool Stuff", color: "text-red-400" }
  ];

  const timeline = [
    {
      year: "2024",
      title: "Final Year IT Student",
      description: "Focusing on full-stack development and preparing for industry transition",
      color: "border-purple-400"
    },
    {
      year: "2023",
      title: "Software Intern",
      description: "Gained hands-on experience in React and Node.js development",
      color: "border-pink-400"
    },
    {
      year: "2022",
      title: "Started Web Development",
      description: "Discovered passion for creating interactive web applications",
      color: "border-blue-400"
    },
    {
      year: "2021",
      title: "Began IT Studies",
      description: "Started journey in Information Technology at University",
      color: "border-green-400"
    }
  ];

  return (
    <section id="about" className="py-20 bg-slate-900/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Profile Section */}
          <div className="text-center lg:text-left">
            <div className="relative mb-8 inline-block">
              <div className="w-64 h-64 mx-auto lg:mx-0 rounded-full overflow-hidden border-4 border-purple-400/30 hover:border-purple-400/60 transition-all duration-300 hover:scale-105">
                <img
                  src="https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?w=400&h=400&fit=crop&crop=face"
                  alt="Alex Johnson"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-400 rounded-full animate-pulse"></div>
            </div>

            <div className="space-y-6">
              <p className="text-lg text-gray-300 leading-relaxed">
                Hi there! I'm Alex, a passionate IT student with a love for creating 
                digital experiences that make a difference. Currently pursuing my degree 
                in Information Technology, I specialize in full-stack web development 
                and have a keen interest in emerging technologies.
              </p>
              
              <p className="text-lg text-gray-300 leading-relaxed">
                When I'm not coding, you'll find me exploring new frameworks, contributing 
                to open-source projects, or sharing knowledge with fellow developers. 
                My goal is to build innovative solutions that solve real-world problems.
              </p>
            </div>

            {/* Fun Facts */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              {funFacts.map((fact, index) => (
                <div
                  key={index}
                  className="p-4 bg-slate-800/50 rounded-lg border border-gray-700 hover:border-purple-400/50 transition-all duration-300 hover:transform hover:scale-105"
                >
                  <fact.icon className={`w-6 h-6 ${fact.color} mb-2 mx-auto lg:mx-0`} />
                  <p className="text-sm text-gray-300">{fact.text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Timeline Section */}
          <div className="relative">
            <h3 className="text-2xl font-bold text-white mb-8 text-center lg:text-left">My Journey</h3>
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-400 to-pink-400"></div>
              
              {timeline.map((item, index) => (
                <div key={index} className="relative flex items-start mb-8 last:mb-0">
                  {/* Timeline dot */}
                  <div className={`relative z-10 w-16 h-16 rounded-full border-4 ${item.color} bg-slate-900 flex items-center justify-center font-bold text-sm text-white hover:scale-110 transition-transform duration-300`}>
                    {item.year}
                  </div>
                  
                  {/* Content */}
                  <div className="ml-6 flex-1 bg-slate-800/30 p-6 rounded-lg border border-gray-700 hover:border-purple-400/50 transition-all duration-300">
                    <h4 className="text-xl font-semibold text-white mb-2">{item.title}</h4>
                    <p className="text-gray-300">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
