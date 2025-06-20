
import React, { useState } from 'react';
import { Award, Calendar, ExternalLink } from 'lucide-react';

const Certifications = () => {
  const [selectedCert, setSelectedCert] = useState<number | null>(null);

  const certifications = [
    {
      id: 1,
      title: "Microsoft Power BI Data Analyst",
      issuer: "Microsoft",
      date: "2024",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=300&h=200&fit=crop&auto=format&q=80",
      description: "Comprehensive Power BI certification covering data visualization, dashboard creation, and business intelligence analytics.",
      skills: ["Power BI", "Data Visualization", "DAX", "Power Query", "Business Intelligence"],
      credentialUrl: "https://i.ibb.co/TDbX6vDR/Power-BI-Certificate-page-0001.jpg"
    },
    {
      id: 2,
      title: "Infosys Certification in Java Programming",
      issuer: "Infosys",
      date: "2024",
      image: "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=300&h=200&fit=crop&auto=format&q=80",
      description: "Comprehensive Java programming certification covering core concepts, OOP principles, and advanced Java features.",
      skills: ["Java", "OOP", "Exception Handling", "Collections"],
      credentialUrl: "https://i.ibb.co/nNgTrLtX/JAVA-CERTIFICATE.jpg"
    },
    {
      id: 3,
      title: "Joy of Computing in Python",
      issuer: "Infosys",
      date: "2024",
      image: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=300&h=200&fit=crop&auto=format&q=80",
      description: "Python programming fundamentals with focus on computational thinking and problem-solving techniques.",
      skills: ["Python", "Programming Logic", "Problem Solving", "Algorithms"],
      credentialUrl: "https://infosys.com"
    },
    {
      id: 4,
      title: "Infosys Certification in SQL",
      issuer: "Infosys",
      date: "2023",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=300&h=200&fit=crop&auto=format&q=80",
      description: "Database management and SQL programming covering queries, joins, and database design principles.",
      skills: ["SQL", "Database Design", "Data Management", "Queries"],
      credentialUrl: "https://i.ibb.co/hxm3nmmH/nosql-certificate-page-0001.jpg"
    },
    {
      id: 5,
      title: "Infosys Certification in Agile Methodology",
      issuer: "Infosys",
      date: "2023",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=300&h=200&fit=crop&auto=format&q=80",
      description: "Agile software development principles, Scrum framework, and project management best practices.",
      skills: ["Agile", "Scrum", "Project Management", "Team Collaboration"],
      credentialUrl: "https://i.ibb.co/j923YX7N/AGILE-CERTIFICATE.jpg"
    },
    {
      id: 6,
      title: "Oracle Java Foundation",
      issuer: "Oracle",
      date: "2024",
      image: "https://i.ibb.co/Ggs0rW1/Screenshot-2025-06-20-143255.png",
      description: "Attended one week Oracle Java Foundation class and earned badges covering Java fundamentals and programming concepts.",
      skills: ["Java Fundamentals", "Oracle Certification", "Programming Concepts", "Software Development"],
      credentialUrl: "https://i.ibb.co/Kzc0nHJz/Screenshot-2025-06-20-142911.png"
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
            Continuous learning and professional development through industry-recognized certifications from Microsoft, Infosys, and Oracle
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert) => (
            <div
              key={cert.id}
              className="group bg-slate-800/30 rounded-xl overflow-hidden border border-gray-700 hover:border-purple-400/50 transition-all duration-300 hover:transform hover:scale-105 cursor-pointer"
              onClick={() => setSelectedCert(selectedCert === cert.id ? null : cert.id)}
            >
              <div className="relative overflow-hidden">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-32 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
                <Award className="absolute top-3 right-3 text-yellow-400" size={24} />
              </div>

              <div className="p-6">
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-purple-400 transition-colors duration-300">
                  {cert.title}
                </h3>
                
                <p className="text-purple-400 font-medium mb-2">{cert.issuer}</p>
                
                <div className="flex items-center text-gray-400 mb-4">
                  <Calendar size={16} className="mr-2" />
                  <span>{cert.date}</span>
                </div>

                {selectedCert === cert.id && (
                  <div className="mt-4 pt-4 border-t border-gray-600 animate-fade-in">
                    <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                      {cert.description}
                    </p>
                    
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

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-400 mb-2">6+</div>
            <div className="text-gray-300">Certifications</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-pink-400 mb-2">250+</div>
            <div className="text-gray-300">Learning Hours</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-400 mb-2">3</div>
            <div className="text-gray-300">Platforms</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-400 mb-2">90%</div>
            <div className="text-gray-300">Average Score</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
