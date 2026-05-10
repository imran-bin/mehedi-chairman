import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import PoliticalHistory from './components/PoliticalHistory';
import SocialWork from './components/SocialWork';
import VideoGallery from './components/VideoGallery';
import ImageGallery from './components/ImageGallery';
import Vision from './components/Vision';
import ProblemForm from './components/ProblemForm';
import FAQSection from './components/FAQSection';
import Footer from './components/Footer';
import ContactModal from './components/ContactModal';

const App = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleModal = () => setIsModalOpen(!isModalOpen);

  return (
    <div className="app">
      <Navbar scrolled={scrolled} openModal={toggleModal} />
      <main>
        <Hero openModal={toggleModal} />
        <About />
        <PoliticalHistory />
        <Vision />
        <SocialWork />
        <VideoGallery />
        <ImageGallery />
        <ProblemForm />
        <FAQSection />
      </main>
      <Footer />
      
      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};

export default App;
