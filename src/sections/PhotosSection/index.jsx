import React, { useEffect, useState } from 'react'
import photoSketch from '../../../assets/pics/photography.svg'
import photosGreekImg from '../../../assets/pics/greek text/1/photosGreek.svg'
import { useLanguage } from '../../contexts/LanguageContext'

export default function PhotosSection() {
  const { language, t } = useLanguage();
  const [scrollMotion, setScrollMotion] = useState({ y: 0, r: 0 });

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    const container = document.querySelector('.page');
    if (el) {
      if (container) container.scrollTo({ top: el.offsetTop - 80, behavior: 'smooth' });
      else window.scrollTo({ top: el.offsetTop - 80, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleScroll = (e) => {
      const target = e.target === document ? document.documentElement : e.target;
      const scrollTop = target.scrollTop || window.scrollY || 0;
      
      // Calculate responsive float & tilt based on scroll
      const yMove = Math.sin(scrollTop * 0.008) * 14;
      const rMove = Math.cos(scrollTop * 0.008) * 5;
      setScrollMotion({ y: yMove, r: rMove });
    };

    window.addEventListener('scroll', handleScroll, true);
    handleScroll({ target: document.querySelector('.page') || document.documentElement });

    return () => window.removeEventListener('scroll', handleScroll, true);
  }, []);

  return (
    <section 
      id="photos" 
      className="w-full min-h-[100dvh] flex flex-col items-center justify-center py-16 px-6 sm:px-10 relative z-10 max-w-4xl mx-auto" 
      style={{ color: '#8b0000', fontFamily: '"Cormorant Garamond", serif' }}
    >
      {/* Scroll Up Prompt to Party */}
      <div
        onClick={() => scrollTo('schedule')}
        className="cursor-pointer flex flex-col items-center gap-1 text-[#8b0000] opacity-60 hover:opacity-100 transition-all duration-300 hover:scale-110 mb-8 sm:mb-10 z-20"
        role="button"
        tabIndex={0}
        aria-label="Scroll back to party"
      >
        <svg 
          className="w-6 h-6 sm:w-7 sm:h-7" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
          strokeWidth="1.75"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
        </svg>
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-12 w-full">
        {/* Decorative Photography Sketch with subtle idle movement */}
        <div 
          className="w-32 h-40 sm:w-44 sm:h-56 opacity-90 flex-shrink-0 flex items-center justify-center transition-transform duration-75 hover:scale-105"
          style={{
            transform: `translateY(${scrollMotion.y}px) rotate(${scrollMotion.r}deg)`,
            willChange: 'transform'
          }}
        >
          <img 
            src={photoSketch} 
            alt="Vintage Photographer Sketch" 
            className="w-full h-full object-contain mix-blend-multiply pointer-events-none animate-photo-idle"
          />
        </div>

        {/* Text Content */}
        <div className="max-w-md flex flex-col text-center sm:text-left items-center sm:items-start">
          <div className="mb-4 sm:mb-5 flex items-center justify-center sm:justify-start">
            {language === 'el' ? (
              <img 
                src={photosGreekImg} 
                alt="Φωτογραφίες" 
                className="h-8 sm:h-12 object-contain pointer-events-none" 
              />
            ) : (
              <h2 
                className="text-3xl sm:text-5xl capitalize tracking-normal" 
                style={{ fontFamily: "'Delmon Delicate', 'Angella White', 'Playlist Script', cursive" }}
              >
                {t('photos', 'title')}
              </h2>
            )}
          </div>
          
          <p className="text-base sm:text-lg leading-relaxed opacity-90 mb-6 sm:mb-8 whitespace-pre-wrap">
            {t('photos', 'paragraph')}
          </p>

          <div className="flex flex-row items-center justify-center sm:justify-start">
            <a 
              href="https://photos.app.goo.gl/F8qd8ZmaFQnj3Uw4A"
              target="_blank"
              rel="noreferrer"
              className="inline-block text-base sm:text-lg tracking-wider transition-all duration-300 hover:scale-105 hover:opacity-80 px-6 py-2.5 sm:px-7 sm:py-3 w-fit shadow-sm"
              style={{
                fontFamily: '"Cormorant Garamond", serif',
                border: '1px solid #8b0000',
                borderRadius: '4px',
                backgroundColor: 'rgba(255, 255, 255, 0.65)',
                textDecoration: 'none',
                color: '#8b0000'
              }}
            >
              {t('photos', 'action')}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
