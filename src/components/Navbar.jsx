import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone } from 'lucide-react';
import { navLinks } from '../constants';

const Navbar = ({ scrolled, openModal }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`} style={{ 
      position: 'fixed', 
      top: 0, 
      left: 0, 
      right: 0, 
      zIndex: 1000,
      background: scrolled ? 'rgba(255, 255, 255, 0.98)' : 'rgba(255, 255, 255, 0.95)',
      boxShadow: scrolled ? '0 10px 30px rgba(0, 106, 78, 0.1)' : 'none',
      borderBottom: scrolled ? '1px solid rgba(0, 106, 78, 0.05)' : '1px solid transparent',
      transition: 'all 0.4s ease'
    }}>
      <div className="container justify-between items-center flex" style={{ height: scrolled ? '70px' : '90px', transition: '0.4s' }}>
        
        {/* Logo and Name Area */}
        <div className="nav-logo" style={{ cursor: 'pointer', gap: '15px' }} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <div style={{ 
            background: 'linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%)', 
            borderRadius: '12px', 
            padding: '10px', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center',
            boxShadow: '0 6px 15px rgba(0, 106, 78, 0.2)'
          }}>
            <img src="/assets/paddy.png" alt="Logo" style={{ width: '32px', height: '32px', filter: 'brightness(0) invert(1)' }} />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ 
              fontWeight: 800, 
              fontSize: '1.4rem', 
              color: 'var(--primary-dark)', 
              lineHeight: 1,
              letterSpacing: '-0.5px'
            }}>মেহেদী হাসান <span style={{ color: 'var(--primary)' }}>সাগর</span></div>
            <div style={{ 
              fontSize: '0.7rem', 
              color: 'var(--secondary)', 
              fontWeight: 700, 
              letterSpacing: '2px', 
              textTransform: 'uppercase',
              marginTop: '5px'
            }}>চেয়ারম্যান প্রার্থী</div>
          </div>
        </div>
        
        {/* Navigation Links with more gap */}
        <ul className="nav-links" style={{ gap: '35px' }}>
          {navLinks.map((link) => (
            <li key={link.name}>
              <a href={link.href} className="nav-link" style={{ 
                fontSize: '1.05rem',
                fontWeight: 700,
                color: 'var(--text)',
                transition: '0.3s'
              }}>{link.name}</a>
            </li>
          ))}
        </ul>

        {/* Action Button */}
        <div className="flex items-center" style={{ gap: '20px' }}>
          <button onClick={openModal} className="btn btn-primary" style={{ 
            padding: '12px 28px', 
            fontSize: '1rem',
            fontWeight: 700,
            borderRadius: '50px',
            boxShadow: '0 8px 20px rgba(0, 106, 78, 0.2)',
            background: 'linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%)'
          }}>
            <Phone size={18} /> যোগাযোগ
          </button>
          <button className="mobile-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            style={{ 
              position: 'fixed', 
              top: scrolled ? '70px' : '90px', 
              left: 0, 
              right: 0, 
              background: '#fff', 
              zIndex: 999, 
              padding: '30px',
              boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
              borderBottom: '4px solid var(--primary)'
            }}
          >
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '20px', textAlign: 'center' }}>
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className="nav-link" 
                    style={{ fontSize: '1.2rem', display: 'block', fontWeight: 700 }}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
              <li><button onClick={() => { setIsMenuOpen(false); openModal(); }} className="btn btn-primary" style={{ width: '100%', padding: '15px' }}>যোগাযোগ করুন</button></li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
