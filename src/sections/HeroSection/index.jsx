import React, { useEffect, useState } from 'react'
import heartImage from '../../../assets/pics/682154674854931704.png'
import partyImage from '../../../assets/pics/party_sketch.png'
import namesGreekImg from '../../../assets/pics/greek text/namesGreek.svg'
import namesEnglishImg from '../../../assets/pics/namesEnglish.svg'
import { useLanguage } from '../../contexts/LanguageContext'
import RsvpModal from '../../components/RsvpModal'

export default function HeroSection() {
  const [scrollMotion, setScrollMotion] = useState({
    rotation: 0,
    heartY: 0,
    partyY: 0,
    partyRotate: 90
  });
  const [discoKey, setDiscoKey] = useState(0);
  const [isRsvpOpen, setIsRsvpOpen] = useState(false);
  const [scrollTop, setScrollTop] = useState(0);
  const { language, t } = useLanguage();

  const triggerDisco = () => setDiscoKey(prev => prev + 1);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    const container = document.querySelector('.page');
    if (el) {
      if (container) {
        container.scrollTo({ top: el.offsetTop - 80, behavior: 'smooth' });
      } else {
        window.scrollTo({ top: el.offsetTop - 80, behavior: 'smooth' });
      }
    }
  };

  useEffect(() => {
    const handleScroll = (e) => {
      const target = e.target === document ? document.documentElement : e.target;
      const currentScroll = target.scrollTop || window.scrollY || 0;
      setScrollTop(currentScroll);

      // Dynamic parallax and floating sway on scroll
      const rotation = Math.sin(currentScroll * 0.01) * 8;
      const heartY = Math.sin(currentScroll * 0.006) * 15;
      const partyY = Math.cos(currentScroll * 0.007) * 14;
      const partyRotate = 90 + Math.sin(currentScroll * 0.009) * 6;

      setScrollMotion({ rotation, heartY, partyY, partyRotate });
    };

    window.addEventListener('scroll', handleScroll, true);
    handleScroll({ target: document.querySelector('.page') || document.documentElement });

    return () => window.removeEventListener('scroll', handleScroll, true);
  }, []);

  return (
    <>
      {/* SCREEN 1: HERO / HEART SKETCH */}
      <section 
        id="home" 
        className="w-full min-h-[100dvh] flex flex-col justify-center items-center bg-transparent px-4 pt-16 pb-8 relative overflow-hidden"
      >
        <div className="w-full max-w-[600px] flex flex-col justify-center items-center text-center">
          {/* Parallax Container for Heart Image AND Names Overlay */}
          <div
            className="relative w-[75%] sm:w-[70%] max-w-[480px] mx-auto transition-transform duration-75"
            style={{
              containerType: 'inline-size',
              transform: `scale(1.35) rotate(${scrollMotion.rotation}deg) translate(${scrollMotion.rotation}px, ${scrollMotion.heartY}px)`,
              transformOrigin: 'center center',
              willChange: 'transform'
            }}
          >
            <div className="w-full h-full relative animate-hero-float">
              <img
                src={heartImage}
                alt="couple holding a heart"
                className="w-full h-auto object-contain mix-blend-multiply pointer-events-none"
              />

              {/* Overlay container for the heart */}
              <div 
                className="absolute flex flex-col justify-center items-center text-center mix-blend-multiply opacity-90"
                style={{ top: '28%', left: '20%', right: '20%', bottom: '32%', zIndex: 2 }}
              >
                {language === 'el' ? (
                  <img 
                    src={namesGreekImg} 
                    alt="Γιασεμίν και Νίκος" 
                    className="w-[49%] max-h-[42%] object-contain pointer-events-none -translate-y-2 sm:-translate-y-3.5"
                  />
                ) : (
                  <img 
                    src={namesEnglishImg} 
                    alt="Yasmin & Nikos" 
                    className="w-[50%] max-h-[42%] object-contain pointer-events-none -translate-y-2 sm:-translate-y-3.5"
                  />
                )}
              </div>
            </div>
          </div>

          {/* Scroll Prompt Chevron closer to sketch */}
          <div
            onClick={() => scrollToSection('schedule')}
            className="cursor-pointer flex flex-col items-center gap-1 text-[#8b0000] opacity-80 hover:opacity-100 transition-all duration-300 hover:scale-110 mt-8 sm:mt-10 z-20"
            role="button"
            tabIndex={0}
            aria-label="Scroll to party details"
          >
            <svg 
              className="w-7 h-7 sm:w-8 sm:h-8 animate-bounce" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
              strokeWidth="1.75"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
            </svg>
          </div>
        </div>
      </section>

      {/* SCREEN 2: PARTY DETAILS & RSVP */}
      <section 
        id="schedule" 
        className="w-full min-h-[100dvh] flex flex-col justify-center items-center bg-transparent px-4 py-16 relative"
      >
        {/* Scroll Up Prompt to Home */}
        <div
          onClick={() => scrollToSection('home')}
          className="cursor-pointer flex flex-col items-center gap-1 text-[#8b0000] opacity-60 hover:opacity-100 transition-all duration-300 hover:scale-110 mb-8 sm:mb-10 z-20"
          role="button"
          tabIndex={0}
          aria-label="Scroll back to top"
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

        <div className="w-full max-w-2xl flex flex-row items-center justify-center gap-4 sm:gap-10">
          {/* Text Content */}
          <div 
            className="flex flex-col text-right justify-center" 
            style={{ color: '#8b0000', fontFamily: '"Cormorant Garamond", serif', lineHeight: 1.35 }}
          >
            <span style={{ fontWeight: language === 'el' ? 400 : 600, fontSize: 'clamp(1.4rem, 4vw, 2.2rem)', marginBottom: '8px' }}>
              {t('hero', 'dateParty')}
            </span>
            <span style={{ fontWeight: language === 'el' ? 400 : 600, fontSize: 'clamp(1.15rem, 3vw, 1.6rem)' }}>
              {t('hero', 'party')} • 19:00
            </span>
            <span style={{ fontStyle: 'italic', fontWeight: 400, fontSize: 'clamp(1rem, 2.5vw, 1.3rem)' }}>
              <a 
                href="https://www.google.com/maps/search/?api=1&query=SAKA+Psychiko" 
                target="_blank" 
                rel="noreferrer" 
                className="flex items-center justify-end gap-1 hover:opacity-70 transition-opacity" 
                style={{ textDecoration: 'none', color: 'inherit' }}
              >
                {t('hero', 'clickForMap')}
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                {t('hero', 'saka')}
              </a>
            </span>

            {/* RSVP Button */}
            <div className="flex justify-end mt-4">
              <button
                type="button"
                onClick={() => setIsRsvpOpen(true)}
                className="inline-block px-5 py-2 sm:px-6 sm:py-2.5 text-base sm:text-lg tracking-wide transition-all duration-300 hover:scale-105 hover:opacity-80 relative z-10 cursor-pointer shadow-sm"
                style={{
                  color: '#8b0000',
                  fontFamily: '"Cormorant Garamond", serif',
                  border: '1px solid #8b0000',
                  borderRadius: '4px',
                  backgroundColor: 'rgba(255, 255, 255, 0.65)',
                  textDecoration: 'none'
                }}
              >
                {t('hero', 'rsvpUntil')} <span style={{ fontFamily: '"Playfair Display", serif' }}>10</span> {t('hero', 'september')}
              </button>
            </div>
            
            {/* Dress code & Parking */}
            <div className="flex flex-col mt-5 gap-1.5 text-sm sm:text-base opacity-85" style={{ fontStyle: 'italic', fontWeight: 400 }}>
              <span className={`flex items-center justify-end gap-1 ${language === 'el' ? 'text-[1.14em]' : ''}`}>
                {t('hero', 'dressCode')}
              </span>
              <span className="flex items-center justify-end gap-1">
                {t('hero', 'parking')}
              </span>
            </div>
          </div>

          {/* Party Sketch */}
          <div
            key={`disco-${discoKey}`}
            className="cursor-pointer animate-disco-idle animate-jiggle flex-shrink-0"
            onMouseEnter={triggerDisco}
            onTouchStart={triggerDisco}
          >
            <img
              src={partyImage}
              alt="Wedding Party Sketch"
              className="w-36 h-36 sm:w-56 sm:h-56 object-contain transition-transform duration-75"
              style={{
                transform: `rotate(${scrollMotion.partyRotate}deg) translateY(${scrollMotion.partyY}px)`,
                willChange: 'transform'
              }}
            />
          </div>
        </div>

        {/* Scroll Prompt Chevron to Photos */}
        <div
          onClick={() => scrollToSection('photos')}
          className="cursor-pointer flex flex-col items-center gap-1 text-[#8b0000] opacity-80 hover:opacity-100 transition-all duration-300 hover:scale-110 mt-10 sm:mt-14 z-20"
          role="button"
          tabIndex={0}
          aria-label="Scroll to photos section"
        >
          <svg 
            className="w-7 h-7 sm:w-8 sm:h-8 animate-bounce" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
            strokeWidth="1.75"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
          </svg>
        </div>
      </section>

      <RsvpModal isOpen={isRsvpOpen} onClose={() => setIsRsvpOpen(false)} />
    </>
  )
}
