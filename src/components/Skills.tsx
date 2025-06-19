
import React, { useState, useEffect, useRef } from 'react';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const skillCategories = [
    {
      title: "Programming Languages",
      skills: [
        { name: "Java", level: 90, color: "from-orange-400 to-orange-600" },
        { name: "Python", level: 85, color: "from-green-400 to-blue-500" },
        { name: "C Programming", level: 80, color: "from-blue-400 to-blue-600" },
        { name: "SQL", level: 85, color: "from-purple-400 to-purple-600" },
        { name: "JavaScript", level: 75, color: "from-yellow-400 to-yellow-600" }
      ]
    },
    {
      title: "Web Development",
      skills: [
        { name: "HTML/CSS", level: 85, color: "from-orange-400 to-red-500" },
        { name: "React", level: 80, color: "from-blue-400 to-blue-600" },
        { name: "Express.js", level: 75, color: "from-green-400 to-green-600" },
        { name: "MongoDB", level: 70, color: "from-emerald-400 to-emerald-600" },
        { name: "MERN Stack", level: 80, color: "from-indigo-400 to-indigo-600" }
      ]
    },
    {
      title: "Tools & Technologies",
      skills: [
        { name: "Power BI", level: 75, color: "from-yellow-400 to-orange-500" },
        { name: "Data Structures", level: 85, color: "from-gray-400 to-gray-600" },
        { name: "Algorithms", level: 80, color: "from-violet-400 to-violet-600" },
        { name: "SQLPlus", level: 80, color: "from-blue-500 to-purple-500" },
        { name: "Machine Learning", level: 75, color: "from-red-400 to-red-600" },
        { name: "Agile Methodology", level: 75, color: "from-teal-400 to-teal-600" }
      ]
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(400%); }
        }
        .shimmer-animation {
          animation: shimmer 2s infinite;
        }
      `}</style>
      
      <section id="skills" ref={sectionRef} className="py-20 bg-slate-800/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Skills & Expertise
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto rounded-full"></div>
            <p className="text-xl text-gray-300 mt-6 max-w-3xl mx-auto">
              A comprehensive overview of my technical skills and proficiency levels in programming, web development, and data analysis
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <div
                key={categoryIndex}
                className="bg-slate-900/50 p-8 rounded-xl border border-gray-700 hover:border-purple-400/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                <h3 className="text-2xl font-bold text-white mb-8 text-center">
                  {category.title}
                </h3>
                
                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-300 font-medium">{skill.name}</span>
                        <span className="text-purple-400 font-semibold">{skill.level}%</span>
                      </div>
                      
                      <div className="relative h-3 bg-gray-700 rounded-full overflow-hidden">
                        <div
                          className={`absolute top-0 left-0 h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out`}
                          style={{
                            width: isVisible ? `${skill.level}%` : '0%',
                            transitionDelay: `${categoryIndex * 200 + skillIndex * 100}ms`
                          }}
                        ></div>
                        
                        <div
                          className={`absolute top-0 left-0 h-full w-8 bg-gradient-to-r from-transparent via-white/20 to-transparent ${isVisible ? 'shimmer-animation' : ''}`}
                          style={{
                            animationDelay: `${categoryIndex * 200 + skillIndex * 100}ms`
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <h3 className="text-2xl font-bold text-white mb-8">Technologies I Work With</h3>
            <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
              {[
                'Java', 'Python', 'SQL', 'JavaScript', 'React', 'Express.js',
                'MongoDB', 'HTML/CSS', 'Machine Learning', 'Data Analysis',
                'Power BI', 'MERN Stack', 'Agile'
              ].map((tech, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-400/30 rounded-full text-purple-300 hover:from-purple-500/30 hover:to-pink-500/30 hover:border-purple-400/50 transition-all duration-300 hover:scale-110 cursor-default"
                  style={{
                    animationDelay: `${index * 100}ms`
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Skills;
