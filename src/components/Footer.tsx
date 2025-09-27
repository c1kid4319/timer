import React from 'react';
import { Stethoscope, Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin, ArrowRight } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    'About TIMER',
    'Academic Programs',
    'Admissions',
    'Research Centers',
    'Faculty',
    'Student Life',
    'Alumni Network',
    'Careers'
  ];

  const healthcareServices = [
    'Trinity Foundation Hospital',
    'Specialty Clinics',
    'Emergency Services',
    'Diagnostic Center',
    'Pharmacy Services',
    'Health Checkup Packages',
    'Community Health Programs',
    'Medical Camps'
  ];

  const latestNews = [
    {
      title: 'New Medical Research Center Inaugurated',
      date: 'January 15, 2024'
    },
    {
      title: 'Annual Medical Conference 2024',
      date: 'January 20, 2024'
    },
    {
      title: 'TIMER Receives Excellence Award',
      date: 'January 10, 2024'
    }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* About Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-emerald-600 p-2 rounded-lg">
                <Stethoscope className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">TIMER</h3>
                <p className="text-sm text-gray-400">Trinity Institute of Medical Education & Research</p>
              </div>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Formed under Trinity Foundation, Palakkad, we are committed to providing quality medical 
              education and enhancing healthcare skill development in the region.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-gray-800 hover:bg-emerald-600 p-2 rounded-lg transition-colors duration-300">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="bg-gray-800 hover:bg-emerald-600 p-2 rounded-lg transition-colors duration-300">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="bg-gray-800 hover:bg-emerald-600 p-2 rounded-lg transition-colors duration-300">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="bg-gray-800 hover:bg-emerald-600 p-2 rounded-lg transition-colors duration-300">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors duration-300 flex items-center group">
                    <ArrowRight className="h-4 w-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Healthcare Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Healthcare Services</h4>
            <ul className="space-y-3">
              {healthcareServices.map((service, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors duration-300 flex items-center group">
                    <ArrowRight className="h-4 w-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Latest News */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Info</h4>
            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <MapPin className="h-5 w-5 text-emerald-400 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-400">Trinity Foundation Campus</p>
                  <p className="text-gray-400">Palakkad, Kerala, India</p>
                </div>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-emerald-400 mr-3" />
                <p className="text-gray-400">+91 123 456 7890</p>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-emerald-400 mr-3" />
                <p className="text-gray-400">info@timer.edu.in</p>
              </div>
            </div>

            <h4 className="text-lg font-semibold mb-4">Latest News</h4>
            <div className="space-y-3">
              {latestNews.map((news, index) => (
                <div key={index} className="border-l-2 border-emerald-600 pl-3">
                  <h5 className="text-sm font-medium text-white mb-1">{news.title}</h5>
                  <p className="text-xs text-gray-400">{news.date}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 Trinity Institute of Medical Education & Research. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-emerald-400 text-sm transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-emerald-400 text-sm transition-colors duration-300">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-emerald-400 text-sm transition-colors duration-300">
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;