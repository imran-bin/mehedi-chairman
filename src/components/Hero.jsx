import React from 'react';
import { motion } from 'framer-motion';
import { Phone, ArrowRight, Star } from 'lucide-react';
import { fadeIn } from '../constants';

const Hero = ({ openModal }) => {
  return (
    <section className="hero">
      <div className="container flex">
        <div className="hero-content">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="hero-badge"
          >
            বাংলাদেশ জাতীয়তাবাদী দল - বিএনপি
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="hero-title"
          >
            মেহেদী হাসান <span style={{ color: 'var(--primary)' }}>সাগর</span>
          </motion.h1>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="hero-subtitle"
          >
            চেয়ারম্যান পদপ্রার্থী, খেশরা ইউনিয়ন পরিষদ
          </motion.div>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="hero-description"
          >
            একটি স্বচ্ছ, দুর্নীতিমুক্ত ও উন্নত তালা গড়ার লক্ষ্যে আপনার মূল্যবান ভোট ও দোয়া কামনা করছি। ইনশাআল্লাহ আমরা একসাথে এগিয়ে যাব।
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex"
            style={{ gap: '15px', flexWrap: 'wrap' }}
          >
            <a href="#contact" className="btn btn-primary">
              <Phone size={18} /> যোগাযোগ করুন
            </a>
            <a href="#about" className="btn btn-outline" style={{ background: '#fff' }}>
              জীবনবৃত্তান্ত <ArrowRight size={18} />
            </a>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="flex items-center" 
            style={{ gap: '30px', marginTop: '40px', borderTop: '1px solid var(--glass-border)', paddingTop: '20px' }}
          >
            <div className="flex items-center" style={{ gap: '8px', fontSize: '0.9rem', color: 'var(--text-muted)', fontWeight: 600 }}>
              <img src="/assets/paddy.png" alt="Party" style={{ width: '24px' }} />
              ধানের শীষ
            </div>
            <div className="flex items-center" style={{ gap: '8px', fontSize: '0.9rem', color: 'var(--text-muted)', fontWeight: 600 }}>
              <Star size={16} color="var(--secondary)" fill="var(--secondary)" />
              জনতার পাশে, জনতার সেবায়
            </div>
          </motion.div>
        </div>
        
        <div className="hero-image">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="image-container"
            style={{ border: '8px solid #fff', borderRadius: '30px', boxShadow: 'var(--shadow-lg)' }}
          >
            <img src="/assets/images/hero-image.jpeg" alt="Mehedi Hasan Sagar" />
            
            {/* Floating Badges */}
            <div className="floating-badge badge-top-right" style={{ border: '2px solid var(--primary-light)' }}>
              <img src="/assets/paddy.png" alt="Paddy" style={{ width: '30px', marginBottom: '5px' }} />
              <div style={{ fontWeight: 800, fontSize: '0.9rem', color: 'var(--primary)', textAlign: 'center', lineHeight: 1.2 }}>ভোট দিন<br/><span style={{ color: 'var(--secondary)' }}>ধানের শীষে</span></div>
            </div>
            
            <div className="floating-badge badge-bottom-left" style={{ border: '2px solid var(--primary-light)' }}>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: 600 }}>নির্বাচনী এলাকা</div>
              <div style={{ fontWeight: 800, color: 'var(--primary-dark)', fontSize: '1rem' }}>তালা উপজেলা, সাতক্ষীরা</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
