import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Goal, ShieldAlert, Users, Building2, LandPlot } from 'lucide-react';
import { fadeIn } from '../constants';

const Vision = () => {
  const visions = [
    { text: "একটি আদর্শ ও ডিজিটাল ইউনিয়ন গঠন করা।", icon: <Building2 size={20} /> },
    { text: "মাদক নির্মূল ও অনলাইন জুয়া কঠোরভাবে প্রতিরোধ করা।", icon: <ShieldAlert size={20} /> },
    { text: "নাগরিকের প্রাপ্য অধিকার ও সম্মান প্রতিষ্ঠা করা।", icon: <Users size={20} /> },
    { text: "ইউনিয়ন পরিষদকে একটি নিরাপদ ও সেবামূলক প্রতিষ্ঠান হিসেবে গড়ে তোলা।", icon: <CheckCircle2 size={20} /> },
    { text: "ইউনিয়ন পরিষদের আওতাভুক্ত সকল অবকাঠামো সংস্কার ও পুনর্নির্মাণ নিশ্চিত করা।", icon: <Building2 size={20} /> },
    { text: "খাস জমি ও সরকারি জলাশয় প্রকৃত দাবিদার এবং সঠিক উপকারভোগীর জন্য বন্দোবস্তের ব্যবস্থা করা।", icon: <LandPlot size={20} /> }
  ];

  return (
    <section id="vision" className="section" style={{ background: '#fff' }}>
      <div className="container">
        <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '60px', alignItems: 'center' }}>
          <motion.div {...fadeIn}>
            <span style={{ color: 'var(--primary)', fontWeight: 700, letterSpacing: '1px' }}>ইশতেহার</span>
            <h2 style={{ fontSize: '2.8rem', marginBottom: '30px', marginTop: '10px' }}>লক্ষ্য ও উদ্দেশ্য</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {visions.map((item, i) => (
                <div key={i} className="flex items-start" style={{ gap: '15px' }}>
                  <div style={{ 
                    minWidth: '35px', height: '35px', background: 'rgba(0, 106, 78, 0.1)', 
                    padding: '5px', borderRadius: '10px', display: 'flex', 
                    alignItems: 'center', justifyContent: 'center', color: 'var(--primary)' 
                  }}>
                    {item.icon}
                  </div>
                  <p style={{ fontWeight: 600, fontSize: '1.05rem', color: 'var(--primary-dark)', paddingTop: '5px' }}>{item.text}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            {...fadeIn} 
            transition={{ delay: 0.3 }} 
            className="card" 
            style={{ 
              padding: '50px', background: 'linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%)', 
              color: '#fff', borderRadius: '40px', boxShadow: 'var(--shadow-lg)', position: 'relative',
              overflow: 'hidden'
            }}
          >
            {/* Background pattern */}
            <div style={{ position: 'absolute', top: '-20px', right: '-20px', opacity: 0.1 }}>
              <Goal size={200} color="#fff" />
            </div>
            
            <div style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
              <Goal size={70} color="#fff" style={{ marginBottom: '25px' }} />
              <h3 style={{ color: '#fff', fontSize: '1.8rem', marginBottom: '20px' }}>উন্নত খেশরা ইউনিয়ন</h3>
              <p style={{ fontSize: '1.2rem', lineHeight: '1.8', color: 'rgba(255,255,255,0.9)', fontStyle: 'italic' }}>
                "আমার স্বপ্ন খেশরা ইউনিয়নের প্রতিটি মানুষ যেন তাদের মৌলিক অধিকার ভোগ করতে পারে এবং একটি ভয়হীন সুন্দর পরিবেশে বসবাস করতে পারে।"
              </p>
              <div style={{ marginTop: '30px', height: '2px', background: 'rgba(255,255,255,0.2)', width: '60px', margin: '30px auto' }}></div>
              <p style={{ fontWeight: 800, fontSize: '1.3rem' }}>- মেহেদী হাসান সাগর</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Vision;
