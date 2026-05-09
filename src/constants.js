export const navLinks = [
  { name: 'পরিচিতি', href: '#about' },
  { name: 'রাজনৈতিক পরিচিতি', href: '#political' },
  { name: 'ইশতেহার', href: '#vision' },
  { name: 'সমাজসেবা', href: '#social' },
  { name: 'ভিডিও', href: '#videos' },
  { name: 'গ্যালারি', href: '#gallery' }
];

export const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

export const staggerContainer = {
  initial: {},
  whileInView: {
    transition: {
      staggerChildren: 0.1
    }
  }
};
