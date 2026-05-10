import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Phone, Mail, MapPin, ExternalLink } from 'lucide-react';

const ContactModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div style={{ 
        position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, 
        zIndex: 2000, display: 'flex', alignItems: 'center', justifyContent: 'center',
        padding: '20px'
      }}>
        {/* Backdrop */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          style={{ 
            position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, 
            background: 'rgba(10, 15, 26, 0.85)', backdropFilter: 'blur(8px)' 
          }} 
        />

        {/* Modal Card */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          style={{ 
            position: 'relative', background: '#fff', width: '100%', maxWidth: '500px',
            borderRadius: '24px', overflow: 'hidden', boxShadow: '0 25px 50px -12px rgba(0,0,0,0.5)',
            border: '1px solid rgba(0, 106, 78, 0.1)'
          }}
        >
          {/* Header */}
          <div style={{ 
            background: 'linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%)', 
            padding: '30px', position: 'relative', color: '#fff'
          }}>
            <button onClick={onClose} style={{ 
              position: 'absolute', top: '20px', right: '20px', 
              background: 'rgba(255,255,255,0.2)', border: 'none', 
              color: '#fff', borderRadius: '50%', width: '36px', height: '36px',
              display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer'
            }}>
              <X size={20} />
            </button>
            <h2 style={{ fontSize: '1.8rem', marginBottom: '5px' }}>যোগাযোগ করুন</h2>
            <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.95rem' }}>যেকোনো প্রয়োজনে সরাসরি আমাদের সাথে যোগাযোগ করুন</p>
          </div>

          {/* Content */}
          <div style={{ padding: '30px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              
              {/* Phone */}
              <a href="tel:01711-315884" style={{ 
                display: 'flex', alignItems: 'center', gap: '20px', padding: '15px',
                background: '#f8fafc', borderRadius: '16px', textDecoration: 'none',
                border: '1px solid #e2e8f0', transition: '0.3s'
              }} onMouseOver={(e) => e.currentTarget.style.borderColor = 'var(--primary)'} onMouseOut={(e) => e.currentTarget.style.borderColor = '#e2e8f0'}>
                <div style={{ width: '50px', height: '50px', background: 'rgba(59, 130, 246, 0.1)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#3b82f6' }}>
                  <Phone size={24} />
                </div>
                <div>
                  <div style={{ fontSize: '0.75rem', color: '#64748b', fontWeight: 600, textTransform: 'uppercase' }}>ফোন নাম্বার</div>
                  <div style={{ fontSize: '1.2rem', fontWeight: 800, color: '#1e293b' }}>০১৭১১-৩১৫৮৮৪</div>
                </div>
                <ExternalLink size={16} style={{ marginLeft: 'auto', color: '#cbd5e1' }} />
              </a>

              {/* Email */}
              <a href="mailto:info@mehedisagar.com" style={{ 
                display: 'flex', alignItems: 'center', gap: '20px', padding: '15px',
                background: '#f8fafc', borderRadius: '16px', textDecoration: 'none',
                border: '1px solid #e2e8f0', transition: '0.3s'
              }} onMouseOver={(e) => e.currentTarget.style.borderColor = 'var(--primary)'} onMouseOut={(e) => e.currentTarget.style.borderColor = '#e2e8f0'}>
                <div style={{ width: '50px', height: '50px', background: 'rgba(239, 68, 68, 0.1)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#ef4444' }}>
                  <Mail size={24} />
                </div>
                <div>
                  <div style={{ fontSize: '0.75rem', color: '#64748b', fontWeight: 600, textTransform: 'uppercase' }}>ইমেইল এড্রেস</div>
                  <div style={{ fontSize: '1.1rem', fontWeight: 800, color: '#1e293b' }}>info@mehedisagar.com</div>
                </div>
                <ExternalLink size={16} style={{ marginLeft: 'auto', color: '#cbd5e1' }} />
              </a>

              {/* Location */}
              <div style={{ 
                display: 'flex', alignItems: 'center', gap: '20px', padding: '15px',
                background: '#f8fafc', borderRadius: '16px',
                border: '1px solid #e2e8f0'
              }}>
                <div style={{ width: '50px', height: '50px', background: 'rgba(16, 185, 129, 0.1)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#10b981' }}>
                  <MapPin size={24} />
                </div>
                <div>
                  <div style={{ fontSize: '0.75rem', color: '#64748b', fontWeight: 600, textTransform: 'uppercase' }}>ঠিকানা</div>
                  <div style={{ fontSize: '1.1rem', fontWeight: 800, color: '#1e293b' }}>হরিহরনগর, তালা, সাতক্ষীরা</div>
                </div>
              </div>

            </div>

            {/* Social Links */}
            <div style={{ marginTop: '30px', textAlign: 'center' }}>
              <div style={{ fontSize: '0.85rem', color: '#94a3b8', marginBottom: '15px' }}>সামাজিক যোগাযোগ মাধ্যম</div>
              <div style={{ display: 'flex', justifyContent: 'center', gap: '15px' }}>
                {[
                  { name: 'Facebook', color: '#1877f2', icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg> },
                  { name: 'Twitter', color: '#1da1f2', icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg> },
                  { name: 'Youtube', color: '#ff0000', icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg> }
                ].map((s, i) => (
                  <a key={i} href="#" style={{ 
                    width: '45px', height: '45px', background: `${s.color}10`, color: s.color,
                    borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center',
                    transition: '0.3s'
                  }} onMouseOver={(e) => { e.currentTarget.style.background = s.color; e.currentTarget.style.color = '#fff'; }}>
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Footer Footer */}
          <div style={{ padding: '20px', background: '#f8fafc', textAlign: 'center', borderTop: '1px solid #e2e8f0' }}>
            <button onClick={onClose} className="btn btn-primary" style={{ width: '100%', padding: '12px' }}>বন্ধ করুন</button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default ContactModal;
