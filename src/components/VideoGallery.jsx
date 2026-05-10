import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Play, X } from 'lucide-react';
import { fadeIn } from '../constants';

const VideoGallery = () => {
  const [activeVideo, setActiveVideo] = useState(null);

  const videos = [
    {
      title: 'মাদক বিরোধী সমাবেশ ও বক্তব্য',
      type: 'Speech Video',
      thumb: '/assets/speech.png',
      embedUrl: 'https://www.youtube.com/embed/ScMzIvxBSi4'
    },
    {
      title: 'উদ্যোক্তা হিসেবে পথচলা',
      type: 'Entrepreneur Video',
      thumb: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=600&auto=format&fit=crop',
      embedUrl: 'https://www.youtube.com/embed/aqz-KE-bpKQ'
    },
    {
      title: 'সংকট মুহূর্তে মানুষের পাশে',
      type: 'Crisis Moment',
      thumb: 'https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?q=80&w=600&auto=format&fit=crop',
      embedUrl: 'https://www.youtube.com/embed/ysz5S6PUM-U'
    },
    {
      title: 'নেতৃত্ব ও ভবিষ্যৎ পরিকল্পনা',
      type: 'Leadership Video',
      thumb: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=600&auto=format&fit=crop',
      embedUrl: 'https://www.youtube.com/embed/jNQXAC9IVRw'
    }
  ];

  useEffect(() => {
    const onEsc = (e) => {
      if (e.key === 'Escape') {
        setActiveVideo(null);
      }
    };

    window.addEventListener('keydown', onEsc);
    return () => window.removeEventListener('keydown', onEsc);
  }, []);

  return (
    <section id="videos" className="section" style={{ background: '#f0f9f6' }}>
      <div className="container">
        <div className="section-header">
          <motion.span {...fadeIn} style={{ color: 'var(--primary)', fontWeight: 700, letterSpacing: '1px' }}>
            ভিডিও গ্যালারি
          </motion.span>
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
              style={{ cursor: 'pointer' }}
              onClick={() => setActiveVideo(video)}
            >
              <div className="video-thumb">
                <img src={video.thumb} alt={video.title} />
                <div className="play-btn">
                  <Play fill="currentColor" size={30} />
                </div>
              </div>
              <div className="video-info">
                <div
                  style={{
                    color: 'var(--primary)',
                    fontSize: '0.8rem',
                    fontWeight: 700,
                    marginBottom: '5px',
                    textTransform: 'uppercase'
                  }}
                >
                  {video.type}
                </div>
                <h3 style={{ fontSize: '1.1rem', color: 'var(--primary-dark)' }}>{video.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {activeVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveVideo(null)}
            style={{
              position: 'fixed',
              inset: 0,
              background: 'rgba(10, 15, 26, 0.82)',
              zIndex: 3000,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '16px'
            }}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 12 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 12 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
              style={{
                width: 'min(960px, 96vw)',
                borderRadius: '16px',
                overflow: 'hidden',
                background: '#000',
                boxShadow: '0 24px 70px rgba(0,0,0,0.45)'
              }}
            >
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: '10px 12px',
                  background: '#111827',
                  color: '#fff'
                }}
              >
                <div
                  style={{
                    fontSize: '0.95rem',
                    fontWeight: 600,
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap',
                    paddingRight: '12px'
                  }}
                >
                  {activeVideo.title}
                </div>
                <button
                  onClick={() => setActiveVideo(null)}
                  style={{
                    border: 'none',
                    background: 'transparent',
                    color: '#fff',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center'
                  }}
                  aria-label="Close video popup"
                >
                  <X size={22} />
                </button>
              </div>

              <div style={{ position: 'relative', width: '100%', paddingTop: '56.25%' }}>
                <iframe
                  src={activeVideo.embedUrl}
                  title={activeVideo.title}
                  style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 'none' }}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default VideoGallery;
