import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../constants';

const ImageGallery = () => {
  const images = [
    "https://images.unsplash.com/photo-1540910419892-f0c74b0e53b3?q=80&w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?q=80&w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1593113598332-cd288d649433?q=80&w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?q=80&w=600&auto=format&fit=crop",
    "/assets/speech.png"
  ];

  return (
    <section id="gallery" className="section">
      <div className="container">
        <div className="section-header">
          <motion.span {...fadeIn} style={{ color: 'var(--primary)', fontWeight: 700, letterSpacing: '1px' }}>গ্যালারি</motion.span>
          <motion.h2 {...fadeIn}>আলোকচিত্রে আমাদের কর্মকাণ্ড</motion.h2>
          <div className="divider"></div>
        </div>

        <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
          {images.map((img, i) => (
            <motion.div 
              key={i}
              {...fadeIn}
              transition={{ delay: i * 0.1 }}
              style={{ 
                borderRadius: '20px', overflow: 'hidden', height: '280px', 
                boxShadow: 'var(--shadow)', cursor: 'pointer', border: '4px solid #fff'
              }}
              whileHover={{ scale: 1.03, boxShadow: 'var(--shadow-lg)' }}
            >
              <img src={img} alt="Gallery" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImageGallery;
