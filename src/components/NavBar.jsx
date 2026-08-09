import React, { useState, useEffect } from 'react';

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = (e) => {
      const target = e.target === document ? document.documentElement : e.target;
      const scrollTop = target.scrollTop || window.scrollY || 0;
      setScrolled(scrollTop > 50);
    };

    window.addEventListener('scroll', handleScroll, true);
    // Initial check
    handleScroll({ target: document.querySelector('.page') || document.documentElement });
    return () => window.removeEventListener('scroll', handleScroll, true);
  }, []);

  const scrollTo = (id) => {
    // If the scroll container is .page, we scroll inside it, else fallback
    const container = document.querySelector('.page');
    const el = document.getElementById(id);
    if (el) {
      if (container) {
        container.scrollTo({ top: el.offsetTop - 80, behavior: 'smooth' });
      } else {
        window.scrollTo({ top: el.offsetTop - 80, behavior: 'smooth' });
      }
    }
  };

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'py-3 bg-[#fdfaf6]/90 backdrop-blur-md shadow-sm' : 'py-5 bg-transparent'}`}
      style={{ fontFamily: '"Montserrat", sans-serif' }}
    >
      <div className="max-w-6xl mx-auto px-6 flex justify-center items-center">
        {/* Centered Menu */}
        <div className="flex gap-6 sm:gap-12 text-lg sm:text-xl font-bold uppercase tracking-wider" style={{ color: '#8b0000' }}>
          <button onClick={() => scrollTo('schedule')} className="hover:opacity-60 transition-opacity">Schedule</button>
          <button onClick={() => scrollTo('rsvp')} className="hover:opacity-60 transition-opacity">RSVP</button>
          <button onClick={() => scrollTo('gifts')} className="hover:opacity-60 transition-opacity">Gifts</button>
        </div>
      </div>
    </nav>
  );
}
