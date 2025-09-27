import React from 'react';
import { Calendar, Clock, ArrowRight, Users, Award, BookOpen } from 'lucide-react';

const NewsEvents = () => {
  const news = [
    {
      id: 1,
      title: 'New Medical Research Center Inaugurated',
      excerpt: 'TIMER inaugurates state-of-the-art research facility to advance medical education and healthcare innovation.',
      date: '2024-01-15',
      category: 'Research',
      image: 'https://images.pexels.com/photos/5452274/pexels-photo-5452274.jpeg?auto=compress&cs=tinysrgb&w=400',
      icon: <BookOpen className="h-5 w-5" />
    },
    {
      id: 2,
      title: 'Annual Medical Conference 2024',
      excerpt: 'Join us for our annual medical conference featuring renowned speakers and latest healthcare innovations.',
      date: '2024-01-20',
      category: 'Event',
      image: 'https://images.pexels.com/photos/5452268/pexels-photo-5452268.jpeg?auto=compress&cs=tinysrgb&w=400',
      icon: <Users className="h-5 w-5" />
    },
    {
      id: 3,
      title: 'TIMER Receives Accreditation Excellence Award',
      excerpt: 'Recognition for outstanding contribution to medical education and maintaining highest academic standards.',
      date: '2024-01-10',
      category: 'Achievement',
      image: 'https://images.pexels.com/photos/5452201/pexels-photo-5452201.jpeg?auto=compress&cs=tinysrgb&w=400',
      icon: <Award className="h-5 w-5" />
    }
  ];

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Research': return 'bg-blue-100 text-blue-800';
      case 'Event': return 'bg-green-100 text-green-800';
      case 'Achievement': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Latest News & Events</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Stay updated with the latest developments, achievements, and upcoming events at TIMER
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {news.map((item) => (
            <article
              key={item.id}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(item.category)}`}>
                    {item.icon}
                    <span className="ml-1">{item.category}</span>
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <Calendar className="h-4 w-4 mr-2" />
                  {formatDate(item.date)}
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-emerald-600 transition-colors duration-300">
                  {item.title}
                </h3>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {item.excerpt}
                </p>
                
                <button className="text-emerald-600 hover:text-emerald-700 font-semibold flex items-center transition-colors duration-300">
                  Read More
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center">
          <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 rounded-lg font-semibold flex items-center mx-auto transition-all duration-300 transform hover:scale-105">
            View All News & Events
            <ArrowRight className="ml-2 h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default NewsEvents;