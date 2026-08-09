import React, { useEffect, useState } from 'react'
import heartImage from '../../../assets/pics/682154674854931704.png'
import tableImage from '../../../assets/pics/table_sketch_vector.svg'
import partyImage from '../../../assets/pics/party_sketch.png'

export default function HeroSection() {
  const [scrollOffset, setScrollOffset] = useState(0);

  useEffect(() => {
    const handleScroll = (e) => {
      // Get scroll position from whatever container is scrolling (window or a div)
      const target = e.target === document ? document.documentElement : e.target;
      const scrollTop = target.scrollTop || window.scrollY || 0;

      // Calculate a wobble effect based on the scroll position
      // Increased to 8 degrees so it's very obvious
      const rotation = Math.sin(scrollTop * 0.01) * 8;
      setScrollOffset(rotation);
    };

    // Use capture phase to catch scroll events from ANY scrollable container
    window.addEventListener('scroll', handleScroll, true);

    // Initial calculation in case they are already scrolled
    handleScroll({ target: document.querySelector('.page') || document.documentElement });

    return () => window.removeEventListener('scroll', handleScroll, true);
  }, []);

  return (
    <section className="hero-section w-full flex flex-col bg-transparent px-2 sm:px-4 pt-0 pb-8">
      <div className="hero-content mx-auto relative w-full max-w-[800px] flex-col justify-center text-center overflow-visible -mt-12 sm:-mt-20" style={{ containerType: 'inline-size' }}>

        {/* Parallax Container for Image AND Text Overlay */}
        <div
          className="relative w-[95%] sm:w-[77%] max-w-[550px] mx-auto"
          style={{
            containerType: 'inline-size',
            transform: `rotate(${scrollOffset}deg) translate(${scrollOffset}px, ${scrollOffset * 0.5}px)`,
            transformOrigin: 'center center',
            willChange: 'transform'
          }}
        >
          <img
            src={heartImage}
            alt="couple holding a heart"
            className="w-full h-auto object-contain mix-blend-multiply pointer-events-none"
          />

          {/* Overlay container for the heart */}
          <div className="absolute flex flex-col justify-center items-center text-center mix-blend-multiply opacity-90"
            style={{ top: '28%', left: '20%', right: '20%', bottom: '32%', zIndex: 2 }}>

            <div className="names flex flex-row flex-wrap justify-center items-center gap-1 sm:gap-3 mb-0 w-full text-center">
              <h1 className="name relative !text-[5cqw]" style={{ fontSize: '5cqw' }}>Yasmin</h1>
              <span className="name relative and-font !text-[2cqw]" style={{ fontSize: '2cqw' }}>&amp;</span>
              <h1 className="name relative !text-[5cqw]" style={{ fontSize: '5cqw' }}>Nikos</h1>
            </div>
          </div>
        </div>

        {/* Date and Event Details */}
        <div className="w-full flex flex-row justify-center items-center gap-3 sm:gap-6 -mt-8 sm:-mt-16 opacity-90" style={{ zIndex: 10 }}>
          <img
            src={tableImage}
            alt="Wedding Table Sketch"
            className="w-56 h-56 sm:w-72 sm:h-72 object-contain mix-blend-multiply"
          />
          <div className="flex flex-col text-left justify-center" style={{ color: '#8b0000', fontFamily: '"Cormorant Garamond", serif', lineHeight: 1.3 }}>
            <span style={{ fontWeight: 600, fontSize: 'clamp(1.2rem, 3vw, 1.6rem)', marginBottom: '8px' }}>
              9 October 2026
            </span>

            <span style={{ fontWeight: 600, fontSize: 'clamp(1rem, 2.5vw, 1.3rem)' }}>
              Wedding Ceremony • 13:00
            </span>
            <span style={{ fontStyle: 'italic', fontWeight: 0, fontSize: 'clamp(0.9rem, 2.2vw, 1.2rem)', marginBottom: '8px' }}>
              <a href="https://www.google.com/maps/place/%CE%94%CE%B7%CE%BC%CE%B1%CF%81%CF%87%CE%B5%CE%AF%CE%BF+%CE%9A%CE%B7%CF%86%CE%B9%CF%83%CE%B9%CE%AC%CF%82/@38.0773699,23.7445666,12z/data=!4m10!1m2!2m1!1sKifisia+Municipality+Town+Hall!3m6!1s0x14a19ee0e09d3f11:0x2b1ceeaa6aeda170!8m2!3d38.0773699!4d23.8146044!15sCh5LaWZpc2lhIE11bmljaXBhbGl0eSBUb3duIEhhbGySAQljaXR5X2hhbGzgAQA!16s%2Fg%2F11b6x85jmm?entry=ttu" target="_blank" rel="noreferrer" className="flex items-center gap-1 hover:opacity-70 transition-opacity" style={{ textDecoration: 'none', color: 'inherit' }}>
                Kifisia Municipality
                <span className="flex items-center gap-1 opacity-80" style={{ fontSize: '0.85em', marginLeft: '4px' }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                  (Click for map)
                </span>
              </a>
            </span>

            <span style={{ fontWeight: 600, fontSize: 'clamp(1rem, 2.5vw, 1.3rem)' }}>
              Lunch
            </span>
            <span style={{ fontStyle: 'italic', fontWeight: 400, fontSize: 'clamp(0.9rem, 2.2vw, 1.2rem)' }}>
              <a href="https://www.google.com/maps/search/?api=1&query=Natu+Restaurant+Kifisia" target="_blank" rel="noreferrer" className="flex items-center gap-1 hover:opacity-70 transition-opacity" style={{ textDecoration: 'none', color: 'inherit' }}>
                Natu, Kifisia
                <span className="flex items-center gap-1 opacity-80" style={{ fontSize: '0.85em', marginLeft: '4px' }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                  (Click for map)
                </span>
              </a>
            </span>
          </div>
        </div>

        {/* Party Details */}
        <div className="w-full flex flex-row justify-center items-center gap-3 sm:gap-6 -mt-4 sm:-mt-8 opacity-90" style={{ zIndex: 10 }}>
          <div className="relative flex flex-col text-right justify-center" style={{ color: '#8b0000', fontFamily: '"Cormorant Garamond", serif', lineHeight: 1.3 }}>
            <img
              src="/assets/pics/download_3.svg"
              alt="Decorative sketch"
              className="absolute pointer-events-none"
              style={{
                width: '68px',
                top: '-30px',
                left: '-60px',
                opacity: 0.75
              }}
            />
            <span style={{ fontWeight: 600, fontSize: 'clamp(1.2rem, 3vw, 1.6rem)', marginBottom: '8px' }}>
              10 October 2026
            </span>
            <span style={{ fontWeight: 600, fontSize: 'clamp(1rem, 2.5vw, 1.3rem)' }}>
              Wedding Party • 19:00
            </span>
            <span style={{ fontStyle: 'italic', fontWeight: 400, fontSize: 'clamp(0.9rem, 2.2vw, 1.2rem)' }}>
              <a href="https://www.google.com/maps/search/?api=1&query=SAKA+psiri" target="_blank" rel="noreferrer" className="flex items-center justify-end gap-1 hover:opacity-70 transition-opacity" style={{ textDecoration: 'none', color: 'inherit' }}>
                (Click for map)
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                SAKA psiri
              </a>
            </span>
          </div>
          <img
            src={partyImage}
            alt="Wedding Party Sketch"
            className="w-40 h-40 sm:w-56 sm:h-56 object-contain transition-transform duration-75"
            style={{
              transform: `rotate(90deg) translateY(${-Math.abs(scrollOffset) * 0.5}px) scale(${1 + Math.abs(scrollOffset) * 0.002})`,
              willChange: 'transform'
            }}
          />
        </div>

        {/* RSVP Link */}
        <div className="w-full flex flex-col justify-center items-center mt-8 sm:mt-12 z-20 pb-16">
          <div className="relative inline-block">
            <a
              href="#"
              target="_blank"
              rel="noreferrer"
              className="inline-block px-8 py-3 text-lg sm:text-xl font-semibold tracking-wide transition-all duration-300 hover:scale-105 hover:opacity-80 relative z-10"
              style={{
                color: '#8b0000',
                fontFamily: '"Cormorant Garamond", serif',
                border: '1px solid #8b0000',
                borderRadius: '4px',
                backgroundColor: 'rgba(255, 255, 255, 0.5)',
                textDecoration: 'none'
              }}
            >
              RSVP until <span style={{ fontFamily: '"Playfair Display", serif' }}>1</span> September
            </a>
          </div>
        </div>

      </div>
    </section>
  )
}
