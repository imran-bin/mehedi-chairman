import React from 'react';
import { Phone, Mail, MapPin, ChevronRight } from 'lucide-react';
import { navLinks } from '../constants';

const Footer = () => {
  return (
    <footer id="contact" style={{ background: '#0a0f1a', color: '#fff', borderTop: '5px solid var(--secondary)' }}>
      {/* Main Footer Content */}
      <div className="section" style={{ padding: '100px 0 60px' }}>
        <div className="container">
          <div className="grid footer-grid" style={{ gridTemplateColumns: '1.2fr 1fr 1fr', gap: '80px' }}>
            
            {/* Column 1: Branding */}
            <div>
              <div className="nav-logo" style={{ color: '#fff', marginBottom: '35px' }}>
                <div style={{ 
                  background: 'var(--primary)', 
                  borderRadius: '16px', 
                  padding: '10px', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  boxShadow: '0 8px 20px rgba(0, 106, 78, 0.4)'
                }}>
                  <img src="/assets/paddy.png" alt="Logo" style={{ width: '32px', height: '32px', filter: 'brightness(0) invert(1)' }} />
                </div>
                <span style={{ fontWeight: 800, fontSize: '1.6rem', letterSpacing: '-0.5px' }}>মেহেদী হাসান সাগর</span>
              </div>
              <p style={{ color: 'rgba(255,255,255,0.5)', lineHeight: '1.9', marginBottom: '40px', fontSize: '1.05rem' }}>
                খেশরা ইউনিয়ন পরিষদ নির্বাচনে চেয়ারম্যান পদপ্রার্থী। আপনার মূল্যবান ভোট ও দোয়া নিয়ে আমি একটি আধুনিক ইউনিয়ন গড়তে প্রতিজ্ঞাবদ্ধ।
              </p>
              <div className="flex" style={{ gap: '15px' }}>
                {[
                  { name: 'Facebook', icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg> },
                  { name: 'Twitter', icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg> },
                  { name: 'Youtube', icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg> }
                ].map((social, i) => (
                  <a key={i} href="#" style={{ 
                    width: '50px', height: '50px', 
                    background: 'rgba(255,255,255,0.03)', 
                    display: 'flex', alignItems: 'center', justifyContent: 'center', 
                    borderRadius: '15px', border: '1px solid rgba(255,255,255,0.08)',
                    transition: '0.4s', color: '#fff'
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.background = 'var(--secondary)';
                    e.currentTarget.style.borderColor = 'var(--secondary)';
                    e.currentTarget.style.transform = 'translateY(-5px)';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.background = 'rgba(255,255,255,0.03)';
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Column 2: Quick Links */}
            <div>
              <h3 style={{ color: '#fff', fontSize: '1.3rem', fontWeight: 800, marginBottom: '40px', position: 'relative', paddingBottom: '15px' }}>
                প্রয়োজনীয় লিঙ্ক
                <span style={{ position: 'absolute', bottom: 0, left: 0, width: '40px', height: '4px', background: 'var(--secondary)', borderRadius: '2px' }}></span>
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {navLinks.map(link => (
                  <a key={link.name} href={link.href} className="nav-link-card" style={{ 
                    color: 'rgba(255,255,255,0.6)', 
                    fontSize: '1rem', 
                    transition: '0.3s', 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: '12px',
                    padding: '10px 15px',
                    borderRadius: '10px',
                    background: 'rgba(255,255,255,0.02)',
                    border: '1px solid rgba(255,255,255,0.05)'
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.color = '#fff';
                    e.currentTarget.style.background = 'rgba(0, 106, 78, 0.1)';
                    e.currentTarget.style.borderColor = 'rgba(0, 106, 78, 0.2)';
                    e.currentTarget.style.paddingLeft = '20px';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.color = 'rgba(255,255,255,0.6)';
                    e.currentTarget.style.background = 'rgba(255,255,255,0.02)';
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.05)';
                    e.currentTarget.style.paddingLeft = '15px';
                  }}
                  >
                    <ChevronRight size={16} color="var(--primary)" /> {link.name}
                  </a>
                ))}
              </div>
            </div>

            {/* Column 3: Contact Details */}
            <div>
              <h3 style={{ color: '#fff', fontSize: '1.3rem', fontWeight: 800, marginBottom: '40px', position: 'relative', paddingBottom: '15px' }}>
                যোগাযোগের তথ্য
                <span style={{ position: 'absolute', bottom: 0, left: 0, width: '40px', height: '4px', background: 'var(--secondary)', borderRadius: '2px' }}></span>
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                {[
                  { icon: <Phone size={22} />, label: 'ফোন করুন', val: '০১৭১১-৩১৫৮৮৪', color: '#3b82f6' },
                  { icon: <Mail size={22} />, label: 'ইমেইল করুন', val: 'info@mehedisagar.com', color: '#ef4444' },
                  { icon: <MapPin size={22} />, label: 'ঠিকানা', val: 'হরিহরনগর, তালা, সাতক্ষীরা', color: '#10b981' }
                ].map((item, idx) => (
                  <div key={idx} className="footer-contact-card" style={{ 
                    padding: '20px', 
                    background: 'rgba(255,255,255,0.02)', 
                    borderRadius: '15px', 
                    border: '1px solid rgba(255,255,255,0.05)',
                    display: 'flex',
                    alignItems: 'start',
                    gap: '15px'
                  }}>
                    <div style={{ 
                      width: '45px', 
                      height: '45px', 
                      background: `${item.color}20`, 
                      borderRadius: '12px', 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'center', 
                      color: item.color 
                    }}>
                      {item.icon}
                    </div>
                    <div>
                      <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.4)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '5px' }}>{item.label}</div>
                      <div style={{ color: '#fff', fontWeight: 700, fontSize: '1.05rem' }}>{item.val}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="footer-bottom" style={{ 
            marginTop: '80px', 
            paddingTop: '35px', 
            borderTop: '1px solid rgba(255,255,255,0.05)', 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center', 
            flexWrap: 'wrap',
            gap: '20px',
            color: 'rgba(255,255,255,0.3)',
            fontSize: '0.95rem'
          }}>
            <p>&copy; ২০২৫ মেহেদী হাসান সাগর। সর্বস্বত্ব সংরক্ষিত।</p>
            <div className="flex" style={{ gap: '25px' }}>
              <a href="#" style={{ color: 'inherit', transition: '0.3s' }} onMouseOver={(e) => e.currentTarget.style.color = '#fff'} onMouseOut={(e) => e.currentTarget.style.color = 'inherit'}>গোপনীয়তা নীতি</a>
              <a href="#" style={{ color: 'inherit', transition: '0.3s' }} onMouseOver={(e) => e.currentTarget.style.color = '#fff'} onMouseOut={(e) => e.currentTarget.style.color = 'inherit'}>শর্তাবলী</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
