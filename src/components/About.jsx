import React from 'react';
import { motion } from 'framer-motion';
import { User, GraduationCap, Calendar, MapPin, Award } from 'lucide-react';
import { fadeIn } from '../constants';

const About = () => {
  const education = [
    {
      degree: "সমাজবিজ্ঞান (অনার্স মাস্টার্স)",
      institution: "জগন্নাথ বিশ্ববিদ্যালয়",
      result: "১ম শ্রেণী (ফাস্ট ক্লাস)",
      icon: <GraduationCap size={24} />
    },
    {
      degree: "এলএলবি",
      institution: "জাতীয় বিশ্ববিদ্যালয়",
      icon: <Award size={24} />
    },
    {
      degree: "এইচএসসি (মানবিক বিভাগ)",
      institution: "ক্যান্টনমেন্ট কলেজ যশোর (২০০৭)",
      result: "জিপিএ ৫.০০",
      icon: <GraduationCap size={24} />
    },
    {
      degree: "এসএসসি (মানবিক বিভাগ)",
      institution: "এইচ এম এস ম্যাধ্যমিক বিদ্যালয় (২০০৫)",
      result: "সর্বোচ্চ রেজাল্ট",
      icon: <GraduationCap size={24} />
    }
  ];

  return (
    <section id="about" className="section" style={{ background: '#fff' }}>
      <div className="container">
        <div className="section-header">
          <motion.span {...fadeIn} style={{ color: 'var(--primary)', fontWeight: 700, letterSpacing: '1px' }}>পরিচিতি</motion.span>
          <motion.h2 {...fadeIn}>মেহেদী হাসান সাগর এর জীবনবৃত্তান্ত</motion.h2>
          <div className="divider"></div>
        </div>

        <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px', alignItems: 'start' }}>
          {/* Basic Info */}
          <motion.div {...fadeIn} className="card" style={{ padding: '30px', background: 'var(--accent)', borderRadius: '24px', boxShadow: 'var(--shadow)' }}>
            <h3 style={{ marginBottom: '25px', display: 'flex', alignItems: 'center', gap: '10px' }}>
              <User color="var(--primary)" /> ব্যক্তিগত তথ্য
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div className="flex items-center" style={{ gap: '15px' }}>
                <Calendar size={20} color="var(--primary)" />
                <div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>জন্ম তারিখ</div>
                  <div style={{ fontWeight: 600 }}>০১ জুন, ১৯৮৯</div>
                </div>
              </div>
              <div className="flex items-center" style={{ gap: '15px' }}>
                <MapPin size={20} color="var(--primary)" />
                <div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>জন্মস্থান</div>
                  <div style={{ fontWeight: 600 }}>হরিহরনগর, তালা, সাতক্ষীরা</div>
                </div>
              </div>
              <div className="flex items-center" style={{ gap: '15px' }}>
                <MapPin size={20} color="var(--primary)" />
                <div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>বর্তমান এলাকা</div>
                  <div style={{ fontWeight: 600 }}>খেশরা ইউনিয়ন, তালা, সাতক্ষীরা</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Education */}
          <motion.div {...fadeIn} transition={{ delay: 0.2 }} className="card" style={{ padding: '30px', background: '#fff', borderRadius: '24px', border: '1px solid var(--glass-border)', boxShadow: 'var(--shadow)' }}>
            <h3 style={{ marginBottom: '25px', display: 'flex', alignItems: 'center', gap: '10px' }}>
              <GraduationCap color="var(--primary)" /> শিক্ষাগত যোগ্যতা
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '25px' }}>
              {education.map((edu, idx) => (
                <div key={idx} className="flex" style={{ gap: '15px' }}>
                  <div style={{ 
                    minWidth: '45px', height: '45px', background: 'rgba(0, 106, 78, 0.1)', 
                    borderRadius: '12px', display: 'flex', alignItems: 'center', 
                    justifyContent: 'center', color: 'var(--primary)' 
                  }}>
                    {edu.icon}
                  </div>
                  <div>
                    <div style={{ fontWeight: 700, color: 'var(--primary-dark)' }}>{edu.degree}</div>
                    <div style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>{edu.institution}</div>
                    {edu.result && <div style={{ fontSize: '0.85rem', color: 'var(--secondary)', fontWeight: 600 }}>{edu.result}</div>}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div {...fadeIn} style={{ marginTop: '50px', padding: '30px', background: 'var(--primary)', color: '#fff', borderRadius: '24px', textAlign: 'center' }}>
          <p style={{ fontSize: '1.2rem', fontWeight: 500, fontStyle: 'italic' }}>
            "ছোটবেলা থেকেই বিভিন্ন সামাজিক কর্মকান্ড ও রাজনৈতিক সংগঠনের সাথে জড়িত থেকে মানুষের সেবায় নিজেকে নিয়োজিত রেখেছি।"
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
