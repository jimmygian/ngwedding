import React, { useState } from 'react'
import giftSketch from '../../../assets/pics/gift_sketch.svg'
import { useLanguage } from '../../contexts/LanguageContext'

export default function GiftsSection() {
  const { language, t } = useLanguage();
  const [showBankInfo, setShowBankInfo] = useState(false);

  return (
    <section id="gifts" className="w-full flex flex-col sm:flex-row items-center justify-center py-16 px-4 sm:px-8 relative z-10" style={{ color: '#8b0000', fontFamily: '"Cormorant Garamond", serif' }}>
      
      {/* Decorative Gift Sketch (Left) */}
      <div className="w-64 h-64 sm:w-80 sm:h-80 opacity-90 transition-transform duration-500 hover:scale-105 flex-shrink-0">
        <img 
          src={giftSketch} 
          alt="Gift Sketch" 
          className="w-full h-full object-contain"
        />
      </div>

      {/* Text Content (Right) */}
      <div className="max-w-md flex flex-col text-center sm:text-left mt-6 sm:mt-0">
        <h2 className={`text-3xl sm:text-4xl tracking-wide mb-4 ${language === 'el' ? 'font-normal' : 'font-bold'}`} style={{ fontFamily: '"Delmon Delicate", "Playfair Display", serif' }}>
          {t('gifts', 'title')}
        </h2>
        
        <p className="text-lg sm:text-xl leading-relaxed opacity-90 mb-6 whitespace-pre-wrap">
          {t('gifts', 'paragraph')}
        </p>

        {/* Optional Bank Info block */}
        {!showBankInfo ? (
          <button 
            onClick={() => setShowBankInfo(true)}
            className="text-sm sm:text-base tracking-widest transition-all duration-300 hover:scale-105 hover:opacity-80 px-4 py-2 mt-2 w-fit mx-auto sm:mx-0"
            style={{
              fontFamily: '"Cormorant Garamond", serif',
              border: '1px solid #8b0000',
              borderRadius: '4px',
              backgroundColor: 'rgba(255, 255, 255, 0.5)',
            }}
          >
            {t('gifts', 'showBankInfo')}
          </button>
        ) : (
          <div className="p-5 border border-[#8b0000]/20 rounded-lg bg-white/40 backdrop-blur-sm text-left animate-fade-in">
            <p className="text-base sm:text-lg mb-2">{t('gifts', 'bankInfo')}</p>
            <p className="text-lg sm:text-xl font-bold tracking-widest font-mono">GR00 0000 0000 0000 0000 0000 000</p>
            <p className="text-sm mt-2 italic">{t('gifts', 'name')}</p>
          </div>
        )}
      </div>
    </section>
  )
}
