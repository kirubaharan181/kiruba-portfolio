
import React from 'react';
import { Download, GraduationCap, Briefcase, Award, User, Eye } from 'lucide-react';

const Resume = () => {
  const education = [
    {
      degree: "B.Tech in Information Technology",
      school: "Mepco Schlenk Engineering College, Sivakasi",
      period: "2022 - 2026",
      gpa: "7.5/10",
      icon: GraduationCap
    },
    {
      degree: "Higher Secondary",
      school: "Sri Gomathi Ambal Matric HSS",
      period: "2022",
      gpa: "92%",
      icon: GraduationCap
    },
    {
      degree: "SSLC",
      school: "Sri Gomathi Ambal Matric HSS",
      period: "2020",
      gpa: "89%",
      icon: GraduationCap
    }
  ];

  const experience = [
    {
      title: "Research Project - Sentiment Analysis for Review Ranking",
      company: "Academic Research",
      period: "2024 - 2025",
      description: "Implemented machine learning model for analyzing sentiments in reviews using LSTM and BERT for sentiment classification, focusing on ranking reviews based on sentiment scores.",
      icon: Briefcase
    },
    {
      title: "Wool Monitoring Application",
      company: "Project Development",
      period: "2023",
      description: "Built Java-based tracking system for wool from farm to fabric with SQLPlus database integration for inventory and order management.",
      icon: Briefcase
    }
  ];

  const achievements = [
    "Presented 'Optimized Sentiment Analysis of TV Reviews Using AdamW' at national-level technical symposium",
    "Achieved high accuracy through fine-tuning and pre-trained embeddings in ML models",
    "Attended one week Oracle Java Foundation class and earned badges",
    "Participated in District level Kabaddi matches showcasing teamwork and strategy",
    "Multiple Infosys certifications in Java, Python, SQL, and Agile Methodology"
  ];

  const softSkills = [
    "Adaptability",
    "Dedication",
    "Team Management",
    "Communication",
    "Multi-tasking",
    "Problem Solving"
  ];

  const handleDownload = async () => {
  const imageUrl = 'https://i.ibb.co/gbrXFGXw/Screenshot-2025-07-28-131044.png';

  try {
    const response = await fetch(imageUrl, { mode: 'cors' });
    const blob = await response.blob();
    const blobUrl = URL.createObjectURL(blob);

    const link = document.createElement('a');
    link.href = blobUrl;
    link.download = 'Kirubaharan-Resume.jpg'; 
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(blobUrl); 
  } catch (error) {
    alert('Failed to download the resume. Please try again later.');
    console.error(error);
  }
};


  const handleViewResume = () => {
    window.open('https://i.ibb.co/gbrXFGXw/Screenshot-2025-07-28-131044.png', '_blank');
  };

  return (
    <section id="resume" className="py-20 bg-slate-800/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Resume
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto rounded-full"></div>
          <p className="text-xl text-gray-300 mt-6 max-w-3xl mx-auto">
            My academic journey, research experience, and key achievements in technology and data analytics
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-12">
          <div className="bg-slate-900/50 p-8 rounded-xl border border-gray-700">
            <div className="flex items-center mb-6">
              <GraduationCap className="text-purple-400 mr-3" size={28} />
              <h3 className="text-2xl font-bold text-white">Education</h3>
            </div>
            
            {education.map((edu, index) => (
              <div key={index} className="relative pl-6 border-l-2 border-purple-400/30 mb-6 last:mb-0">
                <div className="absolute -left-2 top-0 w-4 h-4 bg-purple-400 rounded-full"></div>
                <div className="pb-4">
                  <h4 className="text-lg font-semibold text-white mb-2">{edu.degree}</h4>
                  <p className="text-purple-400 font-medium mb-1">{edu.school}</p>
                  <p className="text-gray-400 mb-2">{edu.period}</p>
                  <p className="text-gray-300">Score: {edu.gpa}</p>
                </div>
              </div>
            ))}
          </div>

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
                    <h4 className="text-lg font-semibold text-white mb-1">{exp.title}</h4>
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

          <div className="bg-slate-900/50 p-8 rounded-xl border border-gray-700">
            <div className="flex items-center mb-6">
              <User className="text-purple-400 mr-3" size={28} />
              <h3 className="text-2xl font-bold text-white">Strengths</h3>
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

        <div className="text-center flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={handleViewResume}
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-full font-semibold hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-blue-500/25"
          >
            <Eye size={20} />
            Click to View Resume
          </button>
          
          <button
            onClick={handleDownload}
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-purple-500/25"
          >
            <Download size={20} />
            Download Full Resume
          </button>
        </div>
      </div>
    </section>
  );
};

export default Resume;
