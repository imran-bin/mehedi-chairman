import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Users, ShieldCheck, Award } from 'lucide-react';
import { fadeIn } from '../constants';

const PoliticalHistory = () => {
  const politicalRoles = [
    {
      title: "সাবেক যুগ্ম সাধারণ সম্পাদক",
      org: "জগন্নাথ বিশ্ববিদ্যালয় ছাত্রদল (২০২২-২৫)",
      icon: <Users size={24} />
    },
    {
      title: "সাবেক সহ-সভাপতি",
      org: "সাতক্ষীরা জেলা ছাত্রদল (২০১৬-২২)",
      icon: <ShieldCheck size={24} />
    },
    {
      title: "সাবেক ভারপ্রাপ্ত সভাপতি",
      org: "খেশরা ইউনিয়ন ছাত্রদল (২০১০-১৪)",
      icon: <Award size={24} />
    },
    {
      title: "সদস্য (আহ্বায়ক কমিটি)",
      org: "তালা উপজেলা যুবদল",
      icon: <Users size={24} />
    },
    {
      title: "সাবেক সাধারণ সম্পাদক",
      org: "ঢাকাস্থ তালা উপজেলা জাতীয়তাবাদী ছাত্র ফোরাম (২০১২-১৪)",
      icon: <Briefcase size={24} />
    },
    {
      title: "সাধারণ সম্পাদক",
      org: "এইচ এম এস স্পোর্টিং ক্লাব (২০২৪ - চলমান)",
      icon: <Award size={24} />
    }
  ];

  return (
    <section id="political" className="section" style={{ background: '#f0f9f6' }}>
      <div className="container">
        <div className="section-header">
          <motion.span {...fadeIn} style={{ color: 'var(--primary)', fontWeight: 700, letterSpacing: '1px' }}>রাজনৈতিক পরিচয়</motion.span>
          <motion.h2 {...fadeIn}>এক দশকেরও বেশি সময় রাজপথে জনতার সেবায়</motion.h2>
          <div className="divider"></div>
        </div>

        <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '25px' }}>
          {politicalRoles.map((role, index) => (
            <motion.div 
              key={index} 
              {...fadeIn} 
              transition={{ delay: index * 0.1 }}
              className="card" 
              style={{ 
                padding: '25px', background: '#fff', borderRadius: '20px', 
                boxShadow: 'var(--shadow)', border: '1px solid var(--glass-border)',
                display: 'flex', gap: '20px', alignItems: 'center'
              }}
              whileHover={{ y: -5, boxShadow: 'var(--shadow-lg)' }}
            >
              <div style={{ 
                minWidth: '55px', height: '55px', background: 'rgba(244, 42, 65, 0.1)', 
                borderRadius: '15px', display: 'flex', alignItems: 'center', 
                justifyContent: 'center', color: 'var(--secondary)' 
              }}>
                {role.icon}
              </div>
              <div>
                <div style={{ fontWeight: 800, color: 'var(--primary-dark)', fontSize: '1.1rem' }}>{role.title}</div>
                <div style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginTop: '5px' }}>{role.org}</div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div {...fadeIn} style={{ marginTop: '50px', textAlign: 'center' }}>
          <p style={{ maxWidth: '800px', margin: '0 auto', color: 'var(--text-muted)', fontSize: '1.1rem' }}>
            এছাড়াও তিনি বিভিন্ন ধর্মীয় ও সামাজিক প্রতিষ্ঠানের আজীবন সদস্য ও দাতা সদস্য হিসেবে নিরলসভাবে কাজ করে যাচ্ছেন।
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default PoliticalHistory;
