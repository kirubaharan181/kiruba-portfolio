import React, { useState } from 'react';
import { GitBranch, Github, Package, ChevronRight } from 'lucide-react';

interface DevTool {
  id: string;
  name: string;
  icon: React.ReactNode;
  description: string;
  features: string[];
  color: string;
  borderColor: string;
}

const DevTools = () => {
  const [expandedTool, setExpandedTool] = useState<string | null>(null);

  const devTools: DevTool[] = [
    {
      id: 'git',
      name: 'Git Version Control',
      icon: <GitBranch className="w-8 h-8" />,
      description: 'Expert in Git workflows, branching strategies, and collaborative development practices.',
      features: ['Branching Strategy', 'Commit Management', 'Merge Conflicts', 'Rebase & Cherry-pick', 'Git Hooks', 'Conventional Commits'],
      color: 'from-red-500 to-orange-500',
      borderColor: 'border-red-500/30',
    },
    {
      id: 'github',
      name: 'GitHub & Collaboration',
      icon: <Github className="w-8 h-8" />,
      description: 'Leveraging GitHub for project management, CI/CD pipelines, and team collaboration at scale.',
      features: ['Pull Requests', 'Code Reviews', 'GitHub Actions', 'Issue Tracking', 'Project Boards', 'Branch Protection'],
      color: 'from-gray-500 to-slate-500',
      borderColor: 'border-gray-500/30',
    },
    {
      id: 'docker',
      name: 'Docker & Containerization',
      icon: <Package className="w-8 h-8" />,
      description: 'Building, deploying, and orchestrating containerized applications with Docker.',
      features: ['Docker Images', 'Docker Compose', 'Multi-stage Builds', 'Container Registry', 'Volume Management', 'Networking'],
      color: 'from-blue-500 to-cyan-500',
      borderColor: 'border-blue-500/30',
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900/20 to-slate-900 opacity-50" />
      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/30 mb-6">
            <Package size={18} className="text-blue-400" />
            <span className="text-sm text-blue-400 font-semibold">Dev Tools & DevOps</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">Development & DevOps Tools</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Proficient in modern development tools, version control, and containerization for efficient CI/CD pipelines
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {devTools.map((tool) => (
            <div
              key={tool.id}
              onClick={() => setExpandedTool(expandedTool === tool.id ? null : tool.id)}
              className={`p-6 rounded-xl backdrop-blur-sm border transition-all duration-300 cursor-pointer transform hover:scale-105 ${tool.borderColor} ${expandedTool === tool.id ? 'bg-white/10' : 'bg-white/5 hover:bg-white/8'}`}
            >
              <div className="flex items-start justify-between mb-4">
                <div className={`p-3 rounded-lg bg-gradient-to-br ${tool.color} bg-opacity-20`}>
                  {tool.icon}
                </div>
                <ChevronRight size={20} className={`text-gray-500 transition-transform duration-300 ${expandedTool === tool.id ? 'rotate-90' : ''}`} />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{tool.name}</h3>
              <p className="text-gray-400 text-sm mb-4">{tool.description}</p>
              {expandedTool === tool.id && (
                <div className="mt-4 pt-4 border-t border-white/10">
                  <p className="text-xs font-semibold text-gray-300 mb-3 uppercase tracking-wider">Key Features</p>
                  <div className="flex flex-wrap gap-2">
                    {tool.features.map((feature) => (
                      <span key={feature} className={`px-3 py-1 rounded-full bg-gradient-to-r ${tool.color} bg-opacity-20 text-xs font-medium text-white border border-white/10`}>
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DevTools;
