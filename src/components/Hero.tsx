import React from 'react';
import { ArrowRight, Heart, Users, BookOpen, Award } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-emerald-900 via-emerald-800 to-teal-900 text-white">
      <div className="absolute inset-0 bg-black opacity-20"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="mb-6">
              <span className="inline-block bg-emerald-600 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
                Trinity Health Group
              </span>
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-6">
              <span className="block text-emerald-300">TIMER</span>
              <span className="block text-2xl lg:text-3xl font-medium text-emerald-200">
                Trinity Institute of Medical Education & Research
              </span>
            </h1>
            <p className="text-xl text-emerald-100 mb-8 leading-relaxed">
              Formed under the aegis of Trinity Foundation, Palakkad, we are committed to 
              providing quality medical education and research opportunities while enhancing 
              the healthcare skill development ecosystem in the region.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-lg font-semibold flex items-center justify-center transition-all duration-300 transform hover:scale-105">
                Explore Programs
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="border-2 border-emerald-300 text-emerald-100 hover:bg-emerald-300 hover:text-emerald-900 px-8 py-4 rounded-lg font-semibold transition-all duration-300">
                Virtual Campus Tour
              </button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="flex items-center mb-4">
                <div className="bg-emerald-500 p-3 rounded-lg">
                  <Heart className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold ml-4">Quality Healthcare Education</h3>
              </div>
              <p className="text-emerald-100">Comprehensive medical programs designed to meet global healthcare standards.</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="flex items-center mb-4">
                <div className="bg-teal-500 p-3 rounded-lg">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold ml-4">Expert Faculty</h3>
              </div>
              <p className="text-emerald-100">Learn from experienced medical professionals and renowned researchers.</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="flex items-center mb-4">
                <div className="bg-cyan-500 p-3 rounded-lg">
                  <BookOpen className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold ml-4">Research Excellence</h3>
              </div>
              <p className="text-emerald-100">Cutting-edge research facilities and collaborative opportunities.</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="flex items-center mb-4">
                <div className="bg-blue-500 p-3 rounded-lg">
                  <Award className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold ml-4">Accredited Programs</h3>
              </div>
              <p className="text-emerald-100">Programs developed in collaboration with accreditation partners.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;