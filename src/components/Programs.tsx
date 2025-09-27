import React from 'react';
import { GraduationCap, Clock, Users, Award, ArrowRight } from 'lucide-react';

const Programs = () => {
  const programs = [
    {
      title: 'Bachelor of Medicine, Bachelor of Surgery (MBBS)',
      duration: '5.5 Years',
      seats: '150',
      description: 'Comprehensive undergraduate medical program preparing students for clinical practice with strong foundation in medical sciences.',
      features: ['Clinical Rotations', 'Research Projects', 'Community Medicine', 'Internship Program'],
      color: 'bg-emerald-500'
    },
    {
      title: 'Master of Surgery (MS)',
      duration: '3 Years',
      seats: '30',
      description: 'Advanced surgical training program with specialization in various surgical disciplines and research opportunities.',
      features: ['Surgical Training', 'Research Thesis', 'Advanced Procedures', 'Faculty Mentorship'],
      color: 'bg-blue-500'
    },
    {
      title: 'Doctor of Medicine (MD)',
      duration: '3 Years',
      seats: '40',
      description: 'Postgraduate medical program focusing on clinical medicine, diagnosis, and treatment across various specialties.',
      features: ['Clinical Excellence', 'Research Work', 'Specialty Training', 'Case Studies'],
      color: 'bg-purple-500'
    },
    {
      title: 'Diploma in Medical Laboratory Technology',
      duration: '2 Years',
      seats: '60',
      description: 'Technical program training students in laboratory procedures, diagnostics, and medical technology.',
      features: ['Lab Techniques', 'Diagnostic Skills', 'Equipment Training', 'Quality Control'],
      color: 'bg-teal-500'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Academic Programs</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive medical education programs designed to prepare competent healthcare professionals
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {programs.map((program, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden group"
            >
              <div className={`${program.color} p-6 text-white`}>
                <div className="flex items-center justify-between mb-4">
                  <GraduationCap className="h-8 w-8" />
                  <div className="text-right">
                    <div className="flex items-center text-sm opacity-90">
                      <Clock className="h-4 w-4 mr-1" />
                      {program.duration}
                    </div>
                    <div className="flex items-center text-sm opacity-90 mt-1">
                      <Users className="h-4 w-4 mr-1" />
                      {program.seats} Seats
                    </div>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2">{program.title}</h3>
              </div>
              
              <div className="p-6">
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {program.description}
                </p>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                    <Award className="h-5 w-5 mr-2 text-emerald-600" />
                    Key Features
                  </h4>
                  <div className="grid grid-cols-2 gap-2">
                    {program.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-600">
                        <div className="w-2 h-2 bg-emerald-500 rounded-full mr-2"></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
                
                <button className="w-full bg-gray-100 hover:bg-emerald-50 text-gray-700 hover:text-emerald-700 py-3 px-4 rounded-lg font-semibold flex items-center justify-center transition-all duration-300 group-hover:bg-emerald-50 group-hover:text-emerald-700">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 rounded-lg font-semibold flex items-center mx-auto transition-all duration-300 transform hover:scale-105">
            View All Programs
            <ArrowRight className="ml-2 h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Programs;