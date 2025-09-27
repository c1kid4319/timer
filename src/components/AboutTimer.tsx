import React from 'react';
import { Heart, Users, Award, Target, ArrowRight, Play } from 'lucide-react';

const AboutTimer = () => {
  const features = [
    {
      icon: <Heart className="h-8 w-8" />,
      title: 'Quality Medical Education',
      description: 'Comprehensive programs designed to meet international healthcare standards and prepare future medical professionals.',
      color: 'bg-emerald-500'
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: 'Community Focus',
      description: 'Committed to serving the community through quality healthcare education and accessible medical services.',
      color: 'bg-blue-500'
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: 'Accredited Excellence',
      description: 'Programs developed in collaboration with accreditation partners ensuring the highest educational standards.',
      color: 'bg-purple-500'
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: 'Skill Development',
      description: 'Enhancing the healthcare skill development ecosystem through innovative teaching and research methodologies.',
      color: 'bg-teal-500'
    }
  ];

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          <div>
            <div className="mb-6">
              <span className="inline-block bg-emerald-100 text-emerald-800 px-4 py-2 rounded-full text-sm font-semibold">
                About TIMER
              </span>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Excellence in Medical Education & Research
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Trinity Institute of Medical Education & Research (TIMER) is formed under the aegis of the 
              esteemed Trinity Foundation, Palakkad, a unit of the Trinity Health Group. We are dedicated 
              to providing quality medical education and research opportunities to the community.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              In collaboration with our accreditation partners, TIMER is fully committed to contributing 
              significantly in enhancing the skill development ecosystem for healthcare in the region. 
              Our mission is to nurture competent healthcare professionals who will serve society with 
              dedication and excellence.
            </p>
            <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 rounded-lg font-semibold flex items-center transition-all duration-300 transform hover:scale-105">
              Learn More About Us
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </div>
          
          <div className="relative">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className={`${feature.color} p-3 rounded-lg text-white w-fit mb-4`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
            </div>
            
            {/* Background Medical Students Image */}
            <div className="absolute -top-10 -right-10 w-80 h-80 opacity-10 pointer-events-none">
              <img 
                src="https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=400" 
                alt="Medical Students" 
                className="w-full h-full object-cover rounded-full"
              />
            </div>
          </div>
        </div>
        
        {/* Medical Students Gallery Section */}
        <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-2xl p-8 lg:p-12">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Medical Students in Action</h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Witness the dedication and excellence of our medical students as they learn, research, and serve the community
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="relative group overflow-hidden rounded-xl">
              <img 
                src="https://images.pexels.com/photos/5452268/pexels-photo-5452268.jpeg?auto=compress&cs=tinysrgb&w=400" 
                alt="Medical students in clinical training" 
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <h4 className="font-semibold">Clinical Training</h4>
                  <p className="text-sm">Hands-on patient care experience</p>
                </div>
              </div>
            </div>
            
            <div className="relative group overflow-hidden rounded-xl">
              <img 
                src="https://images.pexels.com/photos/5452274/pexels-photo-5452274.jpeg?auto=compress&cs=tinysrgb&w=400" 
                alt="Medical students in laboratory" 
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <h4 className="font-semibold">Laboratory Research</h4>
                  <p className="text-sm">Advanced medical research</p>
                </div>
              </div>
            </div>
            
            <div className="relative group overflow-hidden rounded-xl">
              <img 
                src="https://images.pexels.com/photos/5452201/pexels-photo-5452201.jpeg?auto=compress&cs=tinysrgb&w=400" 
                alt="Medical students studying" 
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <h4 className="font-semibold">Academic Excellence</h4>
                  <p className="text-sm">Collaborative learning environment</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-8">
            <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 rounded-lg font-semibold flex items-center mx-auto transition-all duration-300 transform hover:scale-105">
              <Play className="mr-2 h-5 w-5" />
              Watch Campus Life Video
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutTimer;