
import React, { useState } from 'react';
import { Code, Heart, Coffee, Book, X, Calendar, MapPin, Award, Target } from 'lucide-react';

const About = () => {
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('bio');

  const funFacts = [
    { icon: Code, text: "Favorite Language: JavaScript", color: "text-yellow-400", detail: "3+ years experience" },
    { icon: Coffee, text: "Coffee Cups per Day: 4", color: "text-amber-400", detail: "Fuel for coding sessions" },
    { icon: Book, text: "Books Read This Year: 12", color: "text-blue-400", detail: "Tech & personal development" },
    { icon: Heart, text: "Passion: Building Cool Stuff", color: "text-red-400", detail: "From idea to deployment" }
  ];

  const timeline = [
    {
      year: "2024",
      title: "Final Year IT Student",
      description: "Focusing on full-stack development and preparing for industry transition",
      color: "border-purple-400",
      details: ["Advanced web development", "Capstone project", "Industry internship"],
      icon: Award
    },
    {
      year: "2023",
      title: "Software Intern",
      description: "Gained hands-on experience in React and Node.js development",
      color: "border-pink-400",
      details: ["Built 3 web applications", "Collaborated with senior developers", "Agile methodology"],
      icon: Code
    },
    {
      year: "2022",
      title: "Started Web Development",
      description: "Discovered passion for creating interactive web applications",
      color: "border-blue-400",
      details: ["First React project", "Learned responsive design", "Open source contributions"],
      icon: Heart
    },
    {
      year: "2021",
      title: "Began IT Studies",
      description: "Started journey in Information Technology at University",
      color: "border-green-400",
      details: ["Programming fundamentals", "Database design", "Software engineering"],
      icon: Calendar
    }
  ];

  const personalInfo = {
    location: "San Francisco, CA",
    age: "22",
    education: "Bachelor's in Information Technology",
    experience: "2+ years",
    languages: ["English", "Spanish", "Python", "JavaScript"],
    hobbies: ["Photography", "Gaming", "Hiking", "Tech Blogging"]
  };

  const achievements = [
    { title: "Dean's List", year: "2023", description: "Academic Excellence Award" },
    { title: "Hackathon Winner", year: "2023", description: "Best Web App - University Hackathon" },
    { title: "Open Source Contributor", year: "2022", description: "500+ contributions on GitHub" },
    { title: "Tech Blog Writer", year: "2022", description: "10K+ monthly readers" }
  ];

  return (
    <section id="about" className="py-20 bg-slate-900/50 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-purple-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-pink-500 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent animate-fade-in">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto rounded-full"></div>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Discover more about my journey, passions, and what drives me as a developer
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Profile Section */}
          <div className="text-center lg:text-left">
            <div className="relative mb-8 inline-block group">
              <div 
                className="w-64 h-64 mx-auto lg:mx-0 rounded-full overflow-hidden border-4 border-purple-400/30 hover:border-purple-400/60 transition-all duration-500 hover:scale-105 cursor-pointer group-hover:shadow-2xl group-hover:shadow-purple-500/25"
                onClick={() => setIsProfileModalOpen(true)}
              >
                <img
                  src="https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?w=400&h=400&fit=crop&crop=face"
                  alt="Alex Johnson"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white font-semibold bg-black/50 px-4 py-2 rounded-full">Click to View</span>
                </div>
              </div>
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-400 rounded-full animate-pulse"></div>
              
              {/* Profile Info Cards */}
              <div className="flex justify-center gap-2 mt-4">
                <div className="bg-slate-800/50 px-3 py-1 rounded-full text-sm text-gray-300 border border-gray-700">
                  <MapPin className="w-4 h-4 inline mr-1" />
                  {personalInfo.location}
                </div>
                <div className="bg-slate-800/50 px-3 py-1 rounded-full text-sm text-gray-300 border border-gray-700">
                  {personalInfo.age} years old
                </div>
              </div>
            </div>

            {/* Tab Navigation */}
            <div className="flex justify-center lg:justify-start mb-6">
              <div className="bg-slate-800/30 p-1 rounded-lg border border-gray-700">
                {['bio', 'info', 'achievements'].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 capitalize ${
                      activeTab === tab
                        ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white'
                        : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </div>

            {/* Tab Content */}
            <div className="min-h-48">
              {activeTab === 'bio' && (
                <div className="space-y-6 animate-fade-in">
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
              )}

              {activeTab === 'info' && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 animate-fade-in">
                  <div className="space-y-3">
                    <div className="flex items-center text-gray-300">
                      <Calendar className="w-5 h-5 text-purple-400 mr-3" />
                      <span className="font-medium">Age:</span>
                      <span className="ml-2">{personalInfo.age}</span>
                    </div>
                    <div className="flex items-center text-gray-300">
                      <Award className="w-5 h-5 text-purple-400 mr-3" />
                      <span className="font-medium">Experience:</span>
                      <span className="ml-2">{personalInfo.experience}</span>
                    </div>
                    <div className="flex items-center text-gray-300">
                      <Target className="w-5 h-5 text-purple-400 mr-3" />
                      <span className="font-medium">Goal:</span>
                      <span className="ml-2">Full-Stack Developer</span>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="text-gray-300">
                      <span className="font-medium text-purple-400">Languages:</span>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {personalInfo.languages.map((lang, index) => (
                          <span key={index} className="bg-slate-800/50 px-2 py-1 rounded text-sm border border-gray-700">
                            {lang}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="text-gray-300">
                      <span className="font-medium text-purple-400">Hobbies:</span>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {personalInfo.hobbies.map((hobby, index) => (
                          <span key={index} className="bg-slate-800/50 px-2 py-1 rounded text-sm border border-gray-700">
                            {hobby}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'achievements' && (
                <div className="space-y-4 animate-fade-in">
                  {achievements.map((achievement, index) => (
                    <div key={index} className="bg-slate-800/30 p-4 rounded-lg border border-gray-700 hover:border-purple-400/50 transition-all duration-300">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-semibold text-white">{achievement.title}</h4>
                        <span className="text-purple-400 text-sm">{achievement.year}</span>
                      </div>
                      <p className="text-gray-300 text-sm">{achievement.description}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Fun Facts */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              {funFacts.map((fact, index) => (
                <div
                  key={index}
                  className="group p-4 bg-slate-800/50 rounded-lg border border-gray-700 hover:border-purple-400/50 transition-all duration-300 hover:transform hover:scale-105 cursor-pointer"
                >
                  <fact.icon className={`w-6 h-6 ${fact.color} mb-2 mx-auto lg:mx-0 group-hover:animate-bounce`} />
                  <p className="text-sm text-gray-300 mb-1">{fact.text}</p>
                  <p className="text-xs text-gray-500">{fact.detail}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Enhanced Timeline Section */}
          <div className="relative">
            <h3 className="text-2xl font-bold text-white mb-8 text-center lg:text-left">My Journey</h3>
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-400 to-pink-400"></div>
              
              {timeline.map((item, index) => (
                <div key={index} className="relative flex items-start mb-8 last:mb-0 group">
                  {/* Timeline dot */}
                  <div className={`relative z-10 w-16 h-16 rounded-full border-4 ${item.color} bg-slate-900 flex items-center justify-center font-bold text-sm text-white hover:scale-110 transition-all duration-300 group-hover:shadow-lg cursor-pointer`}>
                    <item.icon className="w-6 h-6" />
                  </div>
                  
                  {/* Content */}
                  <div className="ml-6 flex-1 bg-slate-800/30 p-6 rounded-lg border border-gray-700 hover:border-purple-400/50 transition-all duration-300 group-hover:bg-slate-800/50">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="text-xl font-semibold text-white">{item.title}</h4>
                      <span className="text-purple-400 font-semibold">{item.year}</span>
                    </div>
                    <p className="text-gray-300 mb-3">{item.description}</p>
                    <div className="space-y-1">
                      {item.details.map((detail, idx) => (
                        <div key={idx} className="flex items-center text-sm text-gray-400">
                          <div className="w-1 h-1 bg-purple-400 rounded-full mr-2"></div>
                          {detail}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Profile Picture Modal */}
      {isProfileModalOpen && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 animate-fade-in">
          <div className="relative max-w-2xl max-h-[90vh] p-4">
            <button
              onClick={() => setIsProfileModalOpen(false)}
              className="absolute -top-2 -right-2 w-10 h-10 bg-red-500 hover:bg-red-600 text-white rounded-full flex items-center justify-center transition-colors duration-300 z-10"
            >
              <X size={20} />
            </button>
            <div className="relative overflow-hidden rounded-2xl">
              <img
                src="https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?w=800&h=800&fit=crop&crop=face"
                alt="Alex Johnson - Full View"
                className="w-full h-auto max-h-[80vh] object-cover animate-scale-in"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <h3 className="text-2xl font-bold text-white mb-2">Alex Johnson</h3>
                <p className="text-gray-300">IT Student & Aspiring Full-Stack Developer</p>
                <p className="text-purple-400 text-sm mt-2">📍 San Francisco, CA • 🎓 Final Year</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default About;
