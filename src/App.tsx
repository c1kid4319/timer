import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import QuickLinks from './components/QuickLinks';
import AboutTimer from './components/AboutTimer';
import Programs from './components/Programs';
import NewsEvents from './components/NewsEvents';
import Leadership from './components/Leadership';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <QuickLinks />
      <AboutTimer />
      <Programs />
      <NewsEvents />
      <Leadership />
      <Footer />
    </div>
  );
}

export default App;