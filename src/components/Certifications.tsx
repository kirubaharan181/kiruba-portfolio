
import React, { useState } from 'react';
import { Award, Calendar, ExternalLink } from 'lucide-react';

const Certifications = () => {
  const [selectedCert, setSelectedCert] = useState<number | null>(null);

  const certifications = [
    {
      id: 1,
      title: "AWS Cloud Practitioner",
      issuer: "Amazon Web Services",
      date: "2023",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=300&h=200&fit=crop",
      description: "Foundational understanding of AWS Cloud concepts, services, and terminology.",
      skills: ["Cloud Computing", "AWS Services", "Security", "Pricing"],
      credentialUrl: "https://aws.amazon.com"
    },
    {
      id: 2,
      title: "React Developer Certificate",
      issuer: "Meta (Facebook)",
      date: "2023",
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=300&h=200&fit=crop",
      description: "Advanced React development skills including hooks, context, and modern patterns.",
      skills: ["React", "JavaScript", "JSX", "State Management"],
      credentialUrl: "https://meta.com"
    },
    {
      id: 3,
      title: "Google Data Analytics Certificate",
      issuer: "Google",
      date: "2022",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=300&h=200&fit=crop",
      description: "Comprehensive data analysis skills including visualization and interpretation.",
      skills: ["Data Analysis", "SQL", "Tableau", "R Programming"],
      credentialUrl: "https://google.com"
    },
    {
      id: 4,
      title: "JavaScript Algorithms and Data Structures",
      issuer: "freeCodeCamp",
      date: "2022",
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=300&h=200&fit=crop",
      description: "Advanced JavaScript programming and computer science fundamentals.",
      skills: ["JavaScript", "Algorithms", "Data Structures", "Problem Solving"],
      credentialUrl: "https://freecodecamp.org"
    }
  ];

  return (
    <section id="certifications" className="py-20 bg-slate-900/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Certifications
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto rounded-full"></div>
          <p className="text-xl text-gray-300 mt-6 max-w-3xl mx-auto">
            Continuous learning and professional development through industry-recognized certifications
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {certifications.map((cert) => (
            <div
              key={cert.id}
              className="group bg-slate-800/30 rounded-xl overflow-hidden border border-gray-700 hover:border-purple-400/50 transition-all duration-300 hover:transform hover:scale-105 cursor-pointer"
              onClick={() => setSelectedCert(selectedCert === cert.id ? null : cert.id)}
            >
              {/* Certificate Image */}
              <div className="relative overflow-hidden">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-32 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
                <Award className="absolute top-3 right-3 text-yellow-400" size={24} />
              </div>

              {/* Certificate Content */}
              <div className="p-6">
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-purple-400 transition-colors duration-300">
                  {cert.title}
                </h3>
                
                <p className="text-purple-400 font-medium mb-2">{cert.issuer}</p>
                
                <div className="flex items-center text-gray-400 mb-4">
                  <Calendar size={16} className="mr-2" />
                  <span>{cert.date}</span>
                </div>

                {/* Expanded Details */}
                {selectedCert === cert.id && (
                  <div className="mt-4 pt-4 border-t border-gray-600 animate-fade-in">
                    <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                      {cert.description}
                    </p>
                    
                    {/* Skills */}
                    <div className="mb-4">
                      <h4 className="text-white font-semibold mb-2">Skills Covered:</h4>
                      <div className="flex flex-wrap gap-1">
                        {cert.skills.map((skill, index) => (
                          <span
                            key={index}
                            className="px-2 py-1 bg-purple-500/20 text-purple-300 rounded text-xs border border-purple-400/30"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* View Credential Button */}
                    <a
                      href={cert.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="inline-flex items-center gap-2 px-3 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg text-sm hover:from-purple-600 hover:to-pink-600 transition-all duration-300"
                    >
                      <ExternalLink size={14} />
                      View Credential
                    </a>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Statistics */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-400 mb-2">4+</div>
            <div className="text-gray-300">Certifications</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-pink-400 mb-2">200+</div>
            <div className="text-gray-300">Study Hours</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-400 mb-2">3</div>
            <div className="text-gray-300">Platforms</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-400 mb-2">95%</div>
            <div className="text-gray-300">Average Score</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
