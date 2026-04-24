import React, { useState } from 'react';
import { Brain, Cpu, Workflow, Globe, ChevronRight } from 'lucide-react';

interface Tool {
  id: string;
  name: string;
  icon: React.ReactNode;
  description: string;
  skills: string[];
  color: string;
  borderColor: string;
}

const AITools = () => {
  const [expandedTool, setExpandedTool] = useState<string | null>(null);

  const aiTools: Tool[] = [
    {
      id: 'rag',
      name: 'RAG (Retrieval-Augmented Generation)',
      icon: <Globe className="w-8 h-8" />,
      description: 'Building intelligent systems that combine document retrieval with LLM generation for accurate, context-aware responses.',
      skills: ['LangChain', 'Vector Databases', 'FAISS', 'ChromaDB', 'OpenAI API', 'Context Windows'],
      color: 'from-blue-500 to-cyan-500',
      borderColor: 'border-blue-500/30',
    },
    {
      id: 'agents',
      name: 'AI Agents',
      icon: <Brain className="w-8 h-8" />,
      description: 'Developing autonomous AI agents with reasoning, planning, and tool-use capabilities for complex workflows.',
      skills: ['AgentFrameworks', 'ReAct Pattern', 'Tool Integration', 'Chain-of-Thought', 'Decision Making'],
      color: 'from-purple-500 to-pink-500',
      borderColor: 'border-purple-500/30',
    },
    {
      id: 'mcp',
      name: 'MCP (Model Context Protocol)',
      icon: <Cpu className="w-8 h-8" />,
      description: 'Standardizing AI-to-tool communication using MCP for seamless integration with external services and APIs.',
      skills: ['Protocol Design', 'Tool Integration', 'API Connection', 'Resource Management', 'Error Handling'],
      color: 'from-green-500 to-emerald-500',
      borderColor: 'border-green-500/30',
    },
    {
      id: 'n8n',
      name: 'n8n Workflows',
      icon: <Workflow className="w-8 h-8" />,
      description: 'Orchestrating complex AI and automation workflows with visual no-code/low-code interfaces.',
      skills: ['Workflow Automation', 'API Integration', 'Data Transformation', 'Trigger Management', 'Error Handling'],
      color: 'from-orange-500 to-red-500',
      borderColor: 'border-orange-500/30',
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900 opacity-50" />
      
      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/30 mb-6">
            <Brain size={18} className="text-purple-400" />
            <span className="text-sm text-purple-400 font-semibold">AI & ML Tools</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Advanced AI Technologies
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Expertise in cutting-edge AI tools and frameworks for building intelligent, autonomous systems
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {aiTools.map((tool) => (
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
                  <p className="text-xs font-semibold text-gray-300 mb-3 uppercase tracking-wider">Core Skills</p>
                  <div className="flex flex-wrap gap-2">
                    {tool.skills.map((skill) => (
                      <span key={skill} className={`px-3 py-1 rounded-full bg-gradient-to-r ${tool.color} bg-opacity-20 text-xs font-medium text-white border border-white/10`}>
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-16 p-8 rounded-xl bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-500/20 backdrop-blur-sm">
          <div className="flex items-start gap-4">
            <div className="p-2 rounded-lg bg-purple-500/20">
              <Brain size={24} className="text-purple-400" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white mb-2">Advanced AI Integration</h3>
              <p className="text-gray-400">
                Combining these technologies to build scalable, intelligent applications that leverage LLMs, autonomous agents, and sophisticated data workflows.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AITools;
