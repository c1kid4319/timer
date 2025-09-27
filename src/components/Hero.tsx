import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import { ArrowRight, Heart, Users, BookOpen, Award, Play } from 'lucide-react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

const Hero = () => {
  const slides = [
    {
      image: 'https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=1200',
      title: 'Excellence in Medical Education',
      subtitle: 'Shaping Future Healthcare Leaders',
      description: 'Comprehensive medical programs designed to meet global healthcare standards with hands-on clinical training.'
    },
    {
      image: 'https://images.pexels.com/photos/5452201/pexels-photo-5452201.jpeg?auto=compress&cs=tinysrgb&w=1200',
      title: 'Advanced Research Facilities',
      subtitle: 'Innovation in Medical Science',
      description: 'State-of-the-art laboratories and research centers fostering breakthrough medical discoveries.'
    },
    {
      image: 'https://images.pexels.com/photos/5452274/pexels-photo-5452274.jpeg?auto=compress&cs=tinysrgb&w=1200',
      title: 'Clinical Excellence',
      subtitle: 'Real-World Medical Training',
      description: 'Extensive clinical rotations in our affiliated hospitals providing practical healthcare experience.'
    },
    {
      image: 'https://images.pexels.com/photos/5452268/pexels-photo-5452268.jpeg?auto=compress&cs=tinysrgb&w=1200',
      title: 'Community Healthcare',
      subtitle: 'Serving Society Together',
      description: 'Medical outreach programs connecting students with community healthcare initiatives.'
    }
  ];

  const features = [
    {
      icon: <Heart className="h-6 w-6 text-white" />,
      title: 'Quality Healthcare Education',
      description: 'Comprehensive medical programs designed to meet global healthcare standards.',
      color: 'bg-emerald-500'
    },
    {
      icon: <Users className="h-6 w-6 text-white" />,
      title: 'Expert Faculty',
      description: 'Learn from experienced medical professionals and renowned researchers.',
      color: 'bg-teal-500'
    },
    {
      icon: <BookOpen className="h-6 w-6 text-white" />,
      title: 'Research Excellence',
      description: 'Cutting-edge research facilities and collaborative opportunities.',
      color: 'bg-cyan-500'
    },
    {
      icon: <Award className="h-6 w-6 text-white" />,
      title: 'Accredited Programs',
      description: 'Programs developed in collaboration with accreditation partners.',
      color: 'bg-blue-500'
    }
  ];

  return (
    <section className="relative h-screen overflow-hidden">
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        effect="fade"
        navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop={true}
        className="h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative h-full">
              <div 
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${slide.image})` }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/90 via-emerald-800/80 to-transparent"></div>
              </div>
              
              <div className="relative h-full flex items-center">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                  <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="text-white">
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
                      <div className="mb-6">
                        <h2 className="text-2xl lg:text-3xl font-semibold text-white mb-2">
                          {slide.title}
                        </h2>
                        <h3 className="text-lg text-emerald-200 mb-4">
                          {slide.subtitle}
                        </h3>
                        <p className="text-lg text-emerald-100 leading-relaxed">
                          {slide.description}
                        </p>
                      </div>
                      <div className="flex flex-col sm:flex-row gap-4">
                        <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-lg font-semibold flex items-center justify-center transition-all duration-300 transform hover:scale-105">
                          Explore Programs
                          <ArrowRight className="ml-2 h-5 w-5" />
                        </button>
                        <button className="border-2 border-emerald-300 text-emerald-100 hover:bg-emerald-300 hover:text-emerald-900 px-8 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center">
                          <Play className="mr-2 h-5 w-5" />
                          Virtual Campus Tour
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Features Section Overlay */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/50 to-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                <div className={`${feature.color} p-3 rounded-lg w-fit mb-4`}>
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-emerald-100 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Custom Swiper Styles */}
      <style jsx global>{`
        .swiper-button-next,
        .swiper-button-prev {
          color: white !important;
          background: rgba(16, 185, 129, 0.8) !important;
          width: 50px !important;
          height: 50px !important;
          border-radius: 50% !important;
          margin-top: -25px !important;
        }
        
        .swiper-button-next:after,
        .swiper-button-prev:after {
          font-size: 18px !important;
        }
        
        .swiper-pagination-bullet {
          background: rgba(255, 255, 255, 0.5) !important;
          width: 12px !important;
          height: 12px !important;
        }
        
        .swiper-pagination-bullet-active {
          background: #10b981 !important;
        }
        
        .swiper-pagination {
          bottom: 20px !important;
        }
      `}</style>
    </section>
  );
};

export default Hero;