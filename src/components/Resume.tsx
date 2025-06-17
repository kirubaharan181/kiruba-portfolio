
import React from 'react';
import { Download, GraduationCap, Briefcase, Award, User } from 'lucide-react';

const Resume = () => {
  const education = [
    {
      degree: "Bachelor of Information Technology",
      school: "University of Technology",
      period: "2021 - 2024",
      gpa: "3.8/4.0",
      icon: GraduationCap
    }
  ];

  const experience = [
    {
      title: "Software Development Intern",
      company: "Tech Solutions Inc.",
      period: "Summer 2023",
      description: "Developed React components and collaborated on full-stack projects using Node.js and MongoDB.",
      icon: Briefcase
    },
    {
      title: "Freelance Web Developer",
      company: "Self-Employed",
      period: "2022 - Present",
      description: "Created responsive websites for local businesses using modern web technologies.",
      icon: Briefcase
    }
  ];

  const achievements = [
    "Dean's List for Academic Excellence (2022, 2023)",
    "Winner - University Hackathon 2023",
    "Google Developer Student Club Lead",
    "Volunteer Coding Instructor for Kids"
  ];

  const softSkills = [
    "Problem Solving",
    "Team Collaboration",
    "Communication",
    "Leadership",
    "Time Management",
    "Adaptability"
  ];

  return (
    <section id="resume" className="py-20 bg-slate-800/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Resume
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto rounded-full"></div>
          <p className="text-xl text-gray-300 mt-6 max-w-3xl mx-auto">
            My academic journey, professional experience, and key achievements
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-12">
          {/* Education */}
          <div className="bg-slate-900/50 p-8 rounded-xl border border-gray-700">
            <div className="flex items-center mb-6">
              <GraduationCap className="text-purple-400 mr-3" size={28} />
              <h3 className="text-2xl font-bold text-white">Education</h3>
            </div>
            
            {education.map((edu, index) => (
              <div key={index} className="relative pl-6 border-l-2 border-purple-400/30">
                <div className="absolute -left-2 top-0 w-4 h-4 bg-purple-400 rounded-full"></div>
                <div className="pb-6">
                  <h4 className="text-xl font-semibold text-white mb-2">{edu.degree}</h4>
                  <p className="text-purple-400 font-medium mb-1">{edu.school}</p>
                  <p className="text-gray-400 mb-2">{edu.period}</p>
                  <p className="text-gray-300">GPA: {edu.gpa}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Experience */}
          <div className="bg-slate-900/50 p-8 rounded-xl border border-gray-700">
            <div className="flex items-center mb-6">
              <Briefcase className="text-purple-400 mr-3" size={28} />
              <h3 className="text-2xl font-bold text-white">Experience</h3>
            </div>
            
            <div className="space-y-6">
              {experience.map((exp, index) => (
                <div key={index} className="relative pl-6 border-l-2 border-purple-400/30">
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-purple-400 rounded-full"></div>
                  <div className="pb-6">
                    <h4 className="text-xl font-semibold text-white mb-1">{exp.title}</h4>
                    <p className="text-purple-400 font-medium mb-1">{exp.company}</p>
                    <p className="text-gray-400 mb-2">{exp.period}</p>
                    <p className="text-gray-300 leading-relaxed">{exp.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-12">
          {/* Achievements */}
          <div className="bg-slate-900/50 p-8 rounded-xl border border-gray-700">
            <div className="flex items-center mb-6">
              <Award className="text-purple-400 mr-3" size={28} />
              <h3 className="text-2xl font-bold text-white">Achievements</h3>
            </div>
            
            <ul className="space-y-3">
              {achievements.map((achievement, index) => (
                <li key={index} className="flex items-start">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-300">{achievement}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Soft Skills */}
          <div className="bg-slate-900/50 p-8 rounded-xl border border-gray-700">
            <div className="flex items-center mb-6">
              <User className="text-purple-400 mr-3" size={28} />
              <h3 className="text-2xl font-bold text-white">Soft Skills</h3>
            </div>
            
            <div className="grid grid-cols-2 gap-3">
              {softSkills.map((skill, index) => (
                <div
                  key={index}
                  className="p-3 bg-purple-500/20 border border-purple-400/30 rounded-lg text-center text-purple-300 hover:bg-purple-500/30 transition-colors duration-300"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Download Resume Button */}
        <div className="text-center">
          <a
            href="/resume.pdf"
            download
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-purple-500/25"
          >
            <Download size={20} />
            Download Full Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default Resume;
