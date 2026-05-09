import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  User, GraduationCap, Briefcase, Heart, Goal, Mail, Phone, 
  MapPin, ArrowRight, CheckCircle2, Award, Users, ShieldCheck, 
  Globe, Play, Menu, X, Star
} from 'lucide-react';

const App = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const navLinks = [
    { name: 'পরিচিতি', href: '#about' },
    { name: 'ইশতেহার', href: '#vision' },
    { name: 'সংগঠন', href: '#political' },
    { name: 'সমাজসেবা', href: '#social' },
    { name: 'ভিডিও', href: '#videos' },
    { name: 'গ্যালারি', href: '#gallery' },
    { name: 'যোগাযোগ', href: '#contact' }
  ];

  return (
    <div className={`app ${isMenuOpen ? 'nav-active' : ''}`}>
      {/* Navbar */}
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="container justify-between items-center flex">
          <div className="nav-logo">
            <div style={{ background: '#e6f1ef', borderRadius: '50%', padding: '5px' }}>
              <img src="/assets/paddy.png" alt="Logo" />
            </div>
            <div>
              <div style={{ fontWeight: 700 }}>মেহেদী হাসান</div>
              <div style={{ fontSize: '0.7rem', color: 'var(--secondary)' }}>চেয়ারম্যান প্রার্থী</div>
            </div>
          </div>
          
          <ul className="nav-links">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a href={link.href} className="nav-link">{link.name}</a>
              </li>
            ))}
          </ul>

          <div className="flex items-center" style={{ gap: '15px' }}>
            <button className="btn btn-primary" style={{ padding: '10px 20px' }}>যোগাযোগ করুন</button>
            <button className="mobile-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="mobile-nav-links"
            style={{ 
              position: 'fixed', top: '80px', left: 0, right: 0, 
              background: '#fff', zIndex: 999, padding: '20px',
              borderBottom: '1px solid #eee', boxShadow: '0 10px 20px rgba(0,0,0,0.1)'
            }}
          >
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '15px', textAlign: 'center' }}>
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className="nav-link" 
                    style={{ fontSize: '1.1rem', display: 'block' }}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
              <li><button className="btn btn-primary" style={{ width: '100%' }}>যোগাযোগ করুন</button></li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section className="hero">
        <div className="container flex">
          <div className="hero-content">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="hero-badge"
            >
              চেয়ারম্যান প্রার্থী • ধানের শীষ
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="hero-title"
            >
              মেহেদী হাসান
            </motion.h1>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="hero-subtitle"
            >
              তালা উপজেলা, সাতক্ষীরা
            </motion.div>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="hero-description"
            >
              একটি স্বচ্ছ, দুর্নীতিমুক্ত ও উন্নত তালা গড়ার লক্ষ্যে আপনার মূল্যবান ভোট ও দোয়া কামনা করছি। ইনশাআল্লাহ আমরা একসাথে এগিয়ে যাব।
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex"
              style={{ gap: '15px', flexWrap: 'wrap' }}
            >
              <button className="btn btn-primary"><Phone size={18} /> যোগাযোগ করুন</button>
              <button className="btn btn-outline" style={{ background: '#fff' }}>জীবনী দেখুন <ArrowRight size={18} /></button>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="flex items-center" 
              style={{ gap: '30px', marginTop: '40px', borderTop: '1px solid #eee', paddingTop: '20px' }}
            >
              <div className="flex items-center" style={{ gap: '8px', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                <img src="/assets/paddy.png" alt="Party" style={{ width: '20px' }} />
                বাংলাদেশ জাতীয়তাবাদী দল (বিএনপি)
              </div>
              <div className="flex items-center" style={{ gap: '8px', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                <Star size={16} color="var(--secondary)" fill="var(--secondary)" />
                জনতার পাশে, জনতার সেবায়
              </div>
            </motion.div>
          </div>
          
          <div className="hero-image">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="image-container"
            >
              <img src="/assets/candidate.png" alt="Mehedi Hasan Sagar" />
              
              {/* Floating Badges */}
              <div className="floating-badge badge-top-right">
                <img src="/assets/paddy.png" alt="Paddy" style={{ width: '30px', marginBottom: '5px' }} />
                <div style={{ fontWeight: 700, fontSize: '0.8rem', color: 'var(--secondary)', textAlign: 'center' }}>ভোট দিন<br/>ধানের শীষে</div>
              </div>
              
              <div className="floating-badge badge-bottom-left">
                <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>নির্বাচনী এলাকা</div>
                <div style={{ fontWeight: 700, color: 'var(--primary)' }}>তালা উপজেলা, সাতক্ষীরা</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Social Work Section */}
      <section id="social" className="section">
        <div className="container">
          <div className="section-header">
            <motion.span {...fadeIn} style={{ color: 'var(--primary)', fontWeight: 600 }}>জনসেবামূলক কাজ</motion.span>
            <motion.h2 {...fadeIn}>আমাদের পথচলা, মানুষের কল্যাণে</motion.h2>
            <div className="divider"></div>
          </div>

          <div className="social-grid">
            {[
              { 
                img: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=600&auto=format&fit=crop", 
                badge: "ত্রাণ সহায়তা", 
                title: "শীতার্ত মানুষের পাশে", 
                desc: "প্রতি বছর শীতকালে খেশরা ইউনিয়নের কয়েক হাজার মানুষের মাঝে কম্বল বিতরণ কর্মসূচি পরিচালনা করা হয়।" 
              },
              { 
                img: "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?q=80&w=600&auto=format&fit=crop", 
                badge: "শিক্ষা", 
                title: "শিক্ষার্থীদের আর্থিক সহায়তা", 
                desc: "অভাবী ও মেধাবী শিক্ষার্থীদের উচ্চশিক্ষায় ভর্তি ও বেতন প্রদানে নিয়মিত আর্থিক সহযোগিতা নিশ্চিত করা।" 
              },
              { 
                img: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=600&auto=format&fit=crop", 
                badge: "স্বাস্থ্য", 
                title: "সুচিকিৎসা নিশ্চিত করা", 
                desc: "এলাকার মানুষের জরুরি চিকিৎসায় বিভিন্ন হাসপাতালে ভর্তি ও সুচিকিৎসার নিশ্চয়তায় সার্বক্ষণিক সহযোগিতা।" 
              },
              { 
                img: "https://images.unsplash.com/photo-1506869640319-fe1a24fd76dc?q=80&w=600&auto=format&fit=crop", 
                badge: "সচেতনতা", 
                title: "মাদকবিরোধী আন্দোলন", 
                desc: "তরুণ সমাজকে মাদকের করাল গ্রাস থেকে বাঁচাতে নিয়মিত সভা, সমাবেশ ও সচেতনতামূলক কর্মসূচি।" 
              },
              { 
                img: "https://images.unsplash.com/photo-1529390079861-591de354faf5?q=80&w=600&auto=format&fit=crop", 
                badge: "ক্রীড়া", 
                title: "ক্রীড়া সামগ্রী বিতরণ", 
                desc: "এলাকার বিভিন্ন ক্লাবে ও শিক্ষা প্রতিষ্ঠানে ফুটবল, ক্রিকেট সামগ্রী ও জার্সি বিতরণ করে তরুণদের উৎসাহিত করা।" 
              },
              { 
                img: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=600&auto=format&fit=crop", 
                badge: "পরিবেশ", 
                title: "বৃক্ষরোপণ কর্মসূচি", 
                desc: "একটি সবুজ ইউনিয়ন গড়ার লক্ষ্যে খেশরা ইউনিয়নের বিভিন্ন রাস্তায় ও শিক্ষা প্রতিষ্ঠানে বৃক্ষরোপণ।" 
              }
            ].map((item, index) => (
              <motion.div 
                key={index} 
                {...fadeIn} 
                transition={{ delay: index * 0.1 }}
                className="social-card"
              >
                <img src={item.img} alt={item.title} className="social-card-img" />
                <div className="social-card-content">
                  <span className="social-card-badge">{item.badge}</span>
                  <h3 style={{ marginBottom: '10px' }}>{item.title}</h3>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section id="videos" className="section" style={{ background: '#f0f9f6' }}>
        <div className="container">
          <div className="section-header">
            <motion.span {...fadeIn} style={{ color: 'var(--primary)', fontWeight: 600 }}>ভিডিও গ্যালারি</motion.span>
            <motion.h2 {...fadeIn}>বক্তব্য ও কার্যক্রম</motion.h2>
            <div className="divider"></div>
          </div>

          <div className="video-grid">
            {[
              { title: "মাদক বিরোধী সমাবেশ ও বক্তব্য", type: "Speech Video", thumb: "/assets/speech.png" },
              { title: "উদ্যোক্তা হিসেবে পথচলা", type: "Entrepreneur Video", thumb: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=600&auto=format&fit=crop" },
              { title: "সংকট মুহূর্তে মানুষের পাশে", type: "Crisis Moment", thumb: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?q=80&w=600&auto=format&fit=crop" },
              { title: "নেতৃত্ব ও ভবিষ্যৎ পরিকল্পনা", type: "Leadership Video", thumb: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=600&auto=format&fit=crop" }
            ].map((video, index) => (
              <motion.div 
                key={index} 
                {...fadeIn} 
                transition={{ delay: index * 0.1 }}
                className="video-card"
              >
                <div className="video-thumb">
                  <img src={video.thumb} alt={video.title} />
                  <div className="play-btn">
                    <Play fill="currentColor" size={30} />
                  </div>
                </div>
                <div className="video-info">
                  <div style={{ color: 'var(--primary)', fontSize: '0.8rem', fontWeight: 600, marginBottom: '5px' }}>{video.type}</div>
                  <h3 style={{ fontSize: '1.1rem' }}>{video.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="section">
        <div className="container">
          <div className="section-header">
            <motion.span {...fadeIn} style={{ color: 'var(--primary)', fontWeight: 600 }}>গ্যালারি</motion.span>
            <motion.h2 {...fadeIn}>আলোকচিত্রে আমাদের কর্মকাণ্ড</motion.h2>
            <div className="divider"></div>
          </div>

          <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
            {[
              "https://images.unsplash.com/photo-1540910419892-f0c74b0e53b3?q=80&w=600&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?q=80&w=600&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1593113598332-cd288d649433?q=80&w=600&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=600&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?q=80&w=600&auto=format&fit=crop",
              "/assets/speech.png"
            ].map((img, i) => (
              <motion.div 
                key={i}
                {...fadeIn}
                transition={{ delay: i * 0.1 }}
                style={{ 
                  borderRadius: '15px', overflow: 'hidden', height: '250px', 
                  boxShadow: 'var(--shadow)', cursor: 'pointer' 
                }}
                whileHover={{ scale: 1.05 }}
              >
                <img src={img} alt="Gallery" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section id="vision" className="section">
        <div className="container">
          <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '60px', alignItems: 'center' }}>
            <motion.div {...fadeIn}>
              <h2 style={{ fontSize: '2.5rem', marginBottom: '25px' }}>লক্ষ্য ও উদ্দেশ্য</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                {[
                  "একটি আদর্শ ও ডিজিটাল ইউনিয়ন গঠন করা।",
                  "মাদক নির্মূল ও অনলাইন জুয়া কঠোরভাবে প্রতিরোধ করা।",
                  "নাগরিকের প্রাপ্য অধিকার ও সম্মান প্রতিষ্ঠা করা।",
                  "ইউনিয়ন পরিষদকে একটি নিরাপদ ও সেবামূলক প্রতিষ্ঠান গড়ে তোলা।",
                  "সকল অবকাঠামো সংস্কার ও পুনর্নির্মাণ নিশ্চিত করা।"
                ].map((text, i) => (
                  <div key={i} className="flex items-center" style={{ gap: '15px' }}>
                    <div style={{ background: 'rgba(0, 106, 78, 0.1)', padding: '5px', borderRadius: '50%' }}>
                      <CheckCircle2 color="var(--primary)" size={20} />
                    </div>
                    <p style={{ fontWeight: 500 }}>{text}</p>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div {...fadeIn} transition={{ delay: 0.3 }} className="card" style={{ padding: '40px', background: 'var(--primary)', color: '#fff', borderRadius: '30px' }}>
              <div style={{ textAlign: 'center' }}>
                <Goal size={60} color="#fff" style={{ marginBottom: '20px' }} />
                <h3 style={{ color: '#fff' }}>উন্নত খেশরা ইউনিয়ন</h3>
                <p style={{ marginTop: '20px', color: 'rgba(255,255,255,0.8)' }}>
                  "আমার স্বপ্ন খেশরা ইউনিয়নের প্রতিটি মানুষ যেন তাদের মৌলিক অধিকার ভোগ করতে পারে এবং একটি ভয়হীন সুন্দর পরিবেশে বসবাস করতে পারে।"
                </p>
                <p style={{ marginTop: '20px', fontWeight: 700 }}>- মেহেদী হাসান সাগর</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="footer">
        <div className="container">
          <div className="footer-grid">
            <div>
              <div className="nav-logo" style={{ color: '#fff', marginBottom: '20px' }}>
                <div style={{ background: '#fff', borderRadius: '50%', padding: '5px' }}>
                  <img src="/assets/paddy.png" alt="Logo" />
                </div>
                <span>মেহেদী হাসান</span>
              </div>
              <p style={{ color: 'rgba(255,255,255,0.6)', marginBottom: '25px' }}>
                খেশরা ইউনিয়ন পরিষদ নির্বাচনে চেয়ারম্যান পদপ্রার্থী। আপনার দোয়া ও সমর্থন প্রত্যাশী।
              </p>
              <div className="flex" style={{ gap: '15px' }}>
                <a href="#" style={{ width: '40px', height: '40px', background: 'rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50%' }}>
                   <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                </a>
                <a href="#" style={{ width: '40px', height: '40px', background: 'rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50%' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
                </a>
              </div>
            </div>
            <div>
              <h3>লিঙ্কসমূহ</h3>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {navLinks.map(link => (
                  <li key={link.name}><a href={link.href} style={{ color: 'rgba(255,255,255,0.6)' }}>{link.name}</a></li>
                ))}
              </ul>
            </div>
            <div>
              <h3>যোগাযোগ</h3>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <li className="flex items-center" style={{ gap: '12px' }}>
                  <Phone size={20} color="var(--primary-light)" />
                  <span style={{ color: 'rgba(255,255,255,0.8)' }}>+৮৮০ ১XXX-XXXXXX</span>
                </li>
                <li className="flex items-center" style={{ gap: '12px' }}>
                  <Mail size={20} color="var(--primary-light)" />
                  <span style={{ color: 'rgba(255,255,255,0.8)' }}>info@mehedisagar.com</span>
                </li>
                <li className="flex items-center" style={{ gap: '12px' }}>
                  <MapPin size={20} color="var(--primary-light)" />
                  <span style={{ color: 'rgba(255,255,255,0.8)' }}>হরিহরনগর, তালা, সাতক্ষীরা</span>
                </li>
              </ul>
            </div>
          </div>
          <div style={{ textAlign: 'center', paddingTop: '30px', borderTop: '1px solid rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.4)', fontSize: '0.9rem' }}>
            <p>&copy; ২০২৫ মেহেদী হাসান সাগর। সর্বস্বত্ব সংরক্ষিত।</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
