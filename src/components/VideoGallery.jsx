import React from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';
import { fadeIn } from '../constants';

const VideoGallery = () => {
  const videos = [
    { title: "মাদক বিরোধী সমাবেশ ও বক্তব্য", type: "Speech Video", thumb: "/assets/speech.png" },
    { title: "উদ্যোক্তা হিসেবে পথচলা", type: "Entrepreneur Video", thumb: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=600&auto=format&fit=crop" },
    { title: "সংকট মুহূর্তে মানুষের পাশে", type: "Crisis Moment", thumb: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?q=80&w=600&auto=format&fit=crop" },
    { title: "নেতৃত্ব ও ভবিষ্যৎ পরিকল্পনা", type: "Leadership Video", thumb: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=600&auto=format&fit=crop" }
  ];

  return (
    <section id="videos" className="section" style={{ background: '#f0f9f6' }}>
      <div className="container">
        <div className="section-header">
          <motion.span {...fadeIn} style={{ color: 'var(--primary)', fontWeight: 700, letterSpacing: '1px' }}>ভিডিও গ্যালারি</motion.span>
          <motion.h2 {...fadeIn}>বক্তব্য ও কার্যক্রম</motion.h2>
          <div className="divider"></div>
        </div>

        <div className="video-grid">
          {videos.map((video, index) => (
            <motion.div 
              key={index} 
              {...fadeIn} 
              transition={{ delay: index * 0.1 }}
              className="video-card"
            >
              <div className="video-thumb">
                <img src={video.thumb} alt={video.title} />
                <div className="play-btn">
                  <Play fill="currentColor" size={30} />
                </div>
              </div>
              <div className="video-info">
                <div style={{ color: 'var(--primary)', fontSize: '0.8rem', fontWeight: 700, marginBottom: '5px', textTransform: 'uppercase' }}>{video.type}</div>
                <h3 style={{ fontSize: '1.1rem', color: 'var(--primary-dark)' }}>{video.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoGallery;
