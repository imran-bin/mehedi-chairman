import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { fadeIn } from '../constants';

const faqItems = [
  {
    q: 'সমস্যা পাঠানোর পর কত দ্রুত যোগাযোগ করা হবে?',
    a: 'সম্ভব হলে দ্রুতই যোগাযোগ করা হবে। জরুরি বিষয় অগ্রাধিকার পাবে।'
  },
  {
    q: 'ফর্মে কী কী তথ্য দিতে হবে?',
    a: 'নাম, মোবাইল নম্বর, এলাকা এবং সমস্যার সংক্ষিপ্ত বিবরণ দিলেই হবে।'
  },
  {
    q: 'একই ব্যক্তি একাধিক সমস্যা জানাতে পারবেন?',
    a: 'জি, পারবেন। প্রতিটি আলাদা সমস্যার জন্য আলাদা করে জমা দিন।'
  }
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="section" style={{ background: '#f8fcfb' }}>
      <div className="container">
        <div className="section-header">
          <motion.span {...fadeIn} style={{ color: 'var(--primary)', fontWeight: 700, letterSpacing: '1px' }}>
            FAQ
          </motion.span>
          <motion.h2 {...fadeIn}>সাধারণ জিজ্ঞাসা</motion.h2>
          <div className="divider"></div>
        </div>

        <div style={{ maxWidth: '820px', margin: '0 auto', display: 'grid', gap: '12px' }}>
          {faqItems.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <motion.div
                key={idx}
                {...fadeIn}
                style={{
                  borderRadius: '14px',
                  border: '1px solid rgba(0, 106, 78, 0.12)',
                  background: '#fff',
                  overflow: 'hidden'
                }}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? -1 : idx)}
                  style={{
                    width: '100%',
                    textAlign: 'left',
                    border: 'none',
                    background: 'transparent',
                    padding: '16px 18px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    cursor: 'pointer',
                    fontWeight: 700,
                    color: 'var(--primary-dark)'
                  }}
                >
                  {item.q}
                  <ChevronDown size={18} style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)', transition: '0.25s' }} />
                </button>
                {isOpen && (
                  <div style={{ padding: '0 18px 16px', color: 'var(--text-muted)' }}>
                    {item.a}
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;

