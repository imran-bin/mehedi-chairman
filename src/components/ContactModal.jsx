import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Phone, Mail, MapPin, Facebook, Twitter, Youtube, ExternalLink } from 'lucide-react';

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
                  { name: 'Facebook', color: '#1877f2', icon: <Facebook /> },
                  { name: 'Twitter', color: '#1da1f2', icon: <Twitter /> },
                  { name: 'Youtube', color: '#ff0000', icon: <Youtube /> }
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
