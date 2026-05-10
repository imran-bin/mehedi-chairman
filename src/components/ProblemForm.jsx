import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';
import { fadeIn } from '../constants';

const ProblemForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    area: '',
    problem: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const onChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({ name: '', phone: '', area: '', problem: '' });
  };

  return (
    <section id="problem" className="section" style={{ background: '#ffffff' }}>
      <div className="container">
        <div className="section-header">
          <motion.span {...fadeIn} style={{ color: 'var(--primary)', fontWeight: 700, letterSpacing: '1px' }}>
            আপনার সমস্যা
          </motion.span>
          <motion.h2 {...fadeIn}>সমস্যা জানানোর ফর্ম</motion.h2>
          <div className="divider"></div>
        </div>

        <motion.form
          {...fadeIn}
          onSubmit={onSubmit}
          className="problem-form"
          style={{
            maxWidth: '760px',
            margin: '0 auto',
            padding: '28px',
            borderRadius: '20px',
            border: '1px solid rgba(0, 106, 78, 0.12)',
            boxShadow: 'var(--shadow)',
            background: '#fff'
          }}
        >
          <div className="problem-form-grid" style={{ display: 'grid', gap: '14px', gridTemplateColumns: '1fr 1fr' }}>
            <input name="name" value={formData.name} onChange={onChange} required placeholder="আপনার নাম" className="problem-input" />
            <input name="phone" value={formData.phone} onChange={onChange} required placeholder="মোবাইল নম্বর" className="problem-input" />
          </div>
          <input
            name="area"
            value={formData.area}
            onChange={onChange}
            required
            placeholder="এলাকা / ইউনিয়নের নাম"
            className="problem-input"
            style={{ marginTop: '14px' }}
          />
          <textarea
            name="problem"
            value={formData.problem}
            onChange={onChange}
            required
            rows={5}
            placeholder="আপনার সমস্যাটি বিস্তারিত লিখুন..."
            className="problem-input"
            style={{ marginTop: '14px', resize: 'vertical' }}
          />

          <button type="submit" className="btn btn-primary" style={{ marginTop: '16px', width: '100%' }}>
            <Send size={17} /> সমস্যা পাঠান
          </button>

          {submitted && (
            <p style={{ marginTop: '12px', color: 'var(--primary)', fontWeight: 600 }}>
              ধন্যবাদ। আপনার সমস্যাটি গ্রহণ করা হয়েছে।
            </p>
          )}
        </motion.form>
      </div>
    </section>
  );
};

export default ProblemForm;

