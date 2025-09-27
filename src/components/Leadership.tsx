import React from 'react';
import { Quote, Linkedin, Mail } from 'lucide-react';

const Leadership = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Message from Leadership</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Insights from our visionary leaders who guide TIMER's mission of excellence in medical education
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-8 relative">
              <Quote className="h-12 w-12 text-emerald-600 mb-6" />
              <blockquote className="text-lg text-gray-700 leading-relaxed mb-6">
                "At TIMER, we believe that quality medical education is the cornerstone of a healthier society. 
                Our commitment extends beyond traditional teaching methods to embrace innovation, research, and 
                community service. We are dedicated to nurturing healthcare professionals who will make a 
                meaningful difference in the lives of patients and communities they serve."
              </blockquote>
              <div className="flex items-center">
                <div className="w-16 h-16 bg-emerald-600 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
                  DR
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Dr. Rajesh Kumar</h4>
                  <p className="text-gray-600">Director, TIMER</p>
                  <div className="flex space-x-2 mt-2">
                    <button className="text-emerald-600 hover:text-emerald-700 transition-colors">
                      <Linkedin className="h-4 w-4" />
                    </button>
                    <button className="text-emerald-600 hover:text-emerald-700 transition-colors">
                      <Mail className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                To be a premier institution for medical education and research, recognized globally for 
                excellence in healthcare education, innovative research, and community service.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To provide world-class medical education, conduct cutting-edge research, and deliver 
                compassionate healthcare services while fostering ethical values and professional 
                excellence in our students and faculty.
              </p>
            </div>

            <div className="bg-emerald-50 rounded-xl p-6 border border-emerald-200">
              <h3 className="text-2xl font-semibold text-emerald-900 mb-4">Trinity Foundation Legacy</h3>
              <p className="text-emerald-800 leading-relaxed">
                Built on the strong foundation of Trinity Health Group's commitment to healthcare excellence, 
                TIMER continues the legacy of serving communities with dedication and innovation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Leadership;