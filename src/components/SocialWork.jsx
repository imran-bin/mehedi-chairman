import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Shield, GraduationCap, Trophy, Stethoscope, Sprout } from 'lucide-react';
import { fadeIn } from '../constants';

const SocialWork = () => {
  const activities = [
    {
      title: "শীতার্ত মানুষের পাশে",
      desc: "প্রতি বছর কয়েক হাজার অসহায় মানুষের মাঝে কম্বল ও শীতবস্ত্র বিতরণ।",
      icon: <Heart />,
      img: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=600&auto=format&fit=crop"
    },
    {
      title: "শিক্ষা সহায়তা",
      desc: "অভাবী মেধাবী শিক্ষার্থীদের ভর্তি ও উচ্চশিক্ষায় নিয়মিত আর্থিক সহযোগিতা।",
      icon: <GraduationCap />,
      img: "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?q=80&w=600&auto=format&fit=crop"
    },
    {
      title: "মাদক ও জুয়া বিরোধী সচেতনতা",
      desc: "তরুণ সমাজকে রক্ষায় নিয়মিত মাদক ও অনলাইন জুয়া বিরোধী সচেতনতামূলক সভা।",
      icon: <Shield />,
      img: "https://images.unsplash.com/photo-1506869640319-fe1a24fd76dc?q=80&w=600&auto=format&fit=crop"
    },
    {
      title: "ক্রীড়া সামগ্রী বিতরণ",
      desc: "এলাকার ক্লাব ও শিক্ষা প্রতিষ্ঠানে ফুটবল, ক্রিকেট ও জার্সি বিতরণ।",
      icon: <Trophy />,
      img: "/assets/images/ক্রীড়া সামগ্রী বিতরণ.jpeg"
    },
    {
      title: "সুচিকিৎসা নিশ্চিতকরণ",
      desc: "জরুরি চিকিৎসা ও হাসপাতালে সুচিকিৎসার নিশ্চয়তায় সার্বক্ষণিক সহায়তা।",
      icon: <Stethoscope />,
      img: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=600&auto=format&fit=crop"
    },
    {
      title: "কৃষি ও পরিবেশ উন্নয়ন",
      desc: "পরিবেশ রক্ষায় বৃক্ষরোপণ এবং কৃষকদের কৃষি বিষয়ক পরামর্শ ও সহায়তা।",
      icon: <Sprout />,
      img: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=600&auto=format&fit=crop"
    }
  ];

  return (
    <section id="social" className="section">
      <div className="container">
        <div className="section-header">
          <motion.span {...fadeIn} style={{ color: 'var(--primary)', fontWeight: 700, letterSpacing: '1px' }}>সমাজসেবা</motion.span>
          <motion.h2 {...fadeIn}>আমাদের পথচলা, মানুষের কল্যাণে</motion.h2>
          <div className="divider"></div>
        </div>

        <div className="social-grid">
          {activities.map((item, index) => (
            <motion.div 
              key={index} 
              {...fadeIn} 
              transition={{ delay: index * 0.1 }}
              className="social-card"
            >
              <div style={{ position: 'relative' }}>
                <img src={item.img} alt={item.title} className="social-card-img" />
                <div style={{ 
                  position: 'absolute', bottom: '-20px', right: '20px', 
                  width: '50px', height: '50px', background: 'var(--primary)', 
                  color: '#fff', borderRadius: '15px', display: 'flex', 
                  alignItems: 'center', justifyContent: 'center', boxShadow: 'var(--shadow)'
                }}>
                  {item.icon}
                </div>
              </div>
              <div className="social-card-content" style={{ paddingTop: '35px' }}>
                <h3 style={{ marginBottom: '10px', fontSize: '1.2rem', color: 'var(--primary-dark)' }}>{item.title}</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialWork;
