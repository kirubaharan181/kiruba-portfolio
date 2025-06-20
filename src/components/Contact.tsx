
import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      console.log('Sending email with data:', formData);
      
      const result = await emailjs.send(
        'service_3wkx0wp',
        'template_pj3gv7l',
        {
          to_email: 'kirubakrishkk@gmail.com',  // Recipient email
          from_name: formData.name,
          from_email: formData.email,
          reply_to: formData.email,
          subject: `Portfolio Contact from ${formData.name}`,
          message: formData.message,
          to_name: 'Kirubaharan'
        },
        'jgS7f_lbCiMslKY-r'
      );

      console.log('Email sent successfully:', result);
      
      toast({
        title: "Message Sent Successfully!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('❌ Email sending error:', error);
      
      toast({
        title: "Failed to Send Message",
        description: "Something went wrong. Please try again or contact me directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "kirubakrishkk@gmail.com",
      href: "mailto:kirubakrishkk@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 9080257155",
      href: "tel:+919080257155"
    },
    {
      icon: MapPin,
      label: "Location",
      value: " Sankarankovil, Tenkasi",
      href: null
    }
  ];

  return (
    <section id="contact" className="py-20 bg-slate-800/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto rounded-full"></div>
          <p className="text-xl text-gray-300 mt-6 max-w-3xl mx-auto">
            I'm always excited to connect with fellow developers, researchers, or anyone interested in machine learning and data science projects
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Let's Connect</h3>
              <p className="text-gray-300 leading-relaxed mb-8">
                Whether you have a research collaboration in mind, want to discuss machine learning projects, or just want to connect, 
                I'd love to hear from you. I'm currently pursuing my B.Tech and actively seeking opportunities in data science and ML engineering.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-center group">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                    <info.icon className="text-white" size={20} />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">{info.label}</p>
                    {info.href ? (
                      <a
                        href={info.href}
                        className="text-white hover:text-purple-400 transition-colors duration-300"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-white">{info.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Call to Action */}
            <div className="p-6 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-400/30 rounded-xl">
              <h4 className="text-xl font-semibold text-white mb-3">Ready to collaborate?</h4>
              <p className="text-gray-300 mb-4">
                I'm currently available for research collaborations, internships, and would love to discuss how we can work together on exciting ML/AI projects.
              </p>
              <div className="flex gap-4">
                <a
                  href="https://i.ibb.co/zkwGnBh/Kirubaharan-Resume-page-0001.jpg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-purple-500 hover:bg-purple-600 text-white rounded-lg transition-colors duration-300"
                >
                  View Resume
                </a>
                <a
                  href="https://www.linkedin.com/in/kiruba-haran-7369a0320"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-slate-700 hover:bg-slate-600 text-white rounded-lg transition-colors duration-300"
                >
                  View LinkedIn
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-slate-900/50 p-8 rounded-xl border border-gray-700">
            <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-300 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white focus:border-purple-400 focus:outline-none transition-colors duration-300"
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-300 mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white focus:border-purple-400 focus:outline-none transition-colors duration-300"
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-300 mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white focus:border-purple-400 focus:outline-none transition-colors duration-300 resize-none"
                  placeholder="Tell me about your project or research collaboration!"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-3 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg font-semibold hover:from-purple-600 hover:to-pink-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 hover:scale-105"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
