import React from 'react';
import { ExternalLink, FileText, Users, GraduationCap, Calendar, Phone, Microscope, Building } from 'lucide-react';

const QuickLinks = () => {
  const links = [
    {
      title: 'Medical Programs',
      description: 'Explore our comprehensive medical education programs',
      icon: <GraduationCap className="h-6 w-6" />,
      color: 'bg-emerald-500'
    },
    {
      title: 'Admissions',
      description: 'Application process and admission requirements',
      icon: <Users className="h-6 w-6" />,
      color: 'bg-blue-500'
    },
    {
      title: 'Research Centers',
      description: 'Discover our state-of-the-art research facilities',
      icon: <Microscope className="h-6 w-6" />,
      color: 'bg-purple-500'
    },
    {
      title: 'Clinical Training',
      description: 'Hands-on clinical experience and training programs',
      icon: <Building className="h-6 w-6" />,
      color: 'bg-teal-500'
    },
    {
      title: 'News & Events',
      description: 'Stay updated with latest news and upcoming events',
      icon: <Calendar className="h-6 w-6" />,
      color: 'bg-orange-500'
    },
    {
      title: 'Contact Us',
      description: 'Get in touch with our admissions and support team',
      icon: <Phone className="h-6 w-6" />,
      color: 'bg-red-500'
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Quick Access</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Access frequently used resources and information with just one click
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {links.map((link, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer group"
            >
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className={`${link.color} p-3 rounded-lg text-white group-hover:scale-110 transition-transform duration-300`}>
                    {link.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 ml-4 group-hover:text-emerald-600 transition-colors duration-300">
                    {link.title}
                  </h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  {link.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuickLinks;