import React, { useState, useEffect } from 'react';
import glassesSketch from '../../assets/pics/download_3.svg';
import partyGreekImg from '../../assets/pics/greek text/1/partyGreek.svg';
import photosGreekImg from '../../assets/pics/greek text/1/photosGreek.svg';
import { useLanguage } from '../contexts/LanguageContext';

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [clinkKey, setClinkKey] = useState(0);
  const { language, toggleLanguage, t } = useLanguage();

  const triggerClink = () => setClinkKey(prev => prev + 1);


  useEffect(() => {
    const handleScroll = (e) => {
      const target = e.target === document ? document.documentElement : e.target;
      const scrollTop = target.scrollTop || window.scrollY || 0;
      setScrolled(scrollTop > 50);
    };

    window.addEventListener('scroll', handleScroll, true);
    // Initial check
    handleScroll({ target: document.querySelector('.page') || document.documentElement });
    
    // Initial clink on load
    const timer = setTimeout(triggerClink, 500);
    
    return () => {
      window.removeEventListener('scroll', handleScroll, true);
      clearTimeout(timer);
    };
  }, []);

  const scrollTo = (id) => {
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
      style={{ fontFamily: '"Moranga", "Cormorant Garamond", serif' }}
    >
      <div className="max-w-6xl mx-auto px-6 flex justify-center items-center relative">
        {/* Centered Menu */}
        <div className="flex items-center gap-6 sm:gap-12 text-2xl sm:text-3xl capitalize tracking-normal" style={{ color: '#8b0000', fontFamily: "'Delmon Delicate', 'Angella White', 'Playlist Script', cursive" }}>
          <button onClick={() => scrollTo('schedule')} className="hover:opacity-60 transition-opacity flex items-center justify-center">
            {language === 'el' ? (
              <img src={partyGreekImg} alt="Πάρτι" className="h-6 sm:h-8 object-contain" />
            ) : (
              t('nav', 'schedule')
            )}
          </button>
          
          {/* Clinking Glasses */}
          <div 
            className="relative cursor-pointer mx-2 sm:mx-4" 
            style={{ width: '45px', height: '65px', opacity: 0.8, transform: 'scale(2)' }}
            onClick={() => {
              triggerClink();
              scrollTo('home');
            }}
            onMouseEnter={triggerClink}
            onTouchStart={triggerClink}
            role="button"
            tabIndex={0}
            aria-label="Scroll to top"
          >
            <img
              key={`left-${clinkKey}`}
              src={glassesSketch}
              alt="Decorative sketch left"
              className="absolute w-full h-full glass-left object-contain"
            />
            <img
              key={`right-${clinkKey}`}
              src={glassesSketch}
              alt="Decorative sketch right"
              className="absolute w-full h-full glass-right object-contain"
            />
          </div>

          <button onClick={() => scrollTo('photos')} className="hover:opacity-60 transition-opacity flex items-center justify-center">
            {language === 'el' ? (
              <img src={photosGreekImg} alt="Φωτογραφίες" className="h-7 sm:h-9 object-contain" />
            ) : (
              t('nav', 'photos')
            )}
          </button>
        </div>

        {/* Language Toggle */}
        <div className="absolute right-6 flex items-center">
          <button 
            onClick={toggleLanguage}
            className="text-sm sm:text-base font-semibold tracking-widest text-[#8b0000] hover:opacity-60 transition-opacity border border-[#8b0000] rounded-full px-3 py-1"
            style={{ fontFamily: '"Cormorant Garamond", serif' }}
          >
            {language === 'en' ? 'ΕΛ' : 'EN'}
          </button>
        </div>
      </div>
    </nav>
  );
}
