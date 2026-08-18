import React, { useState, useEffect } from 'react'
import HeroSection from './sections/HeroSection'
import PhotosSection from './sections/PhotosSection'
import NavBar from './components/NavBar'
import { LanguageProvider } from './contexts/LanguageContext'

const CRITICAL_FONTS = [
  '400 16px "Delmon Delicate"',
  '400 16px "Moranga"',
  '400 16px "GFS Didot Display"',
  '400 16px "Cormorant Garamond"',
  '400 16px "Angella White"',
  '400 16px "Playfair Display"',
  '400 16px "Allura"',
  '400 16px "Greatlove"',
  '400 16px "Courgette"',
  '400 16px "Prata"'
]

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false)

  useEffect(() => {
    let isMounted = true

    const loadAllFonts = async () => {
      try {
        if (document.fonts && document.fonts.load) {
          await Promise.allSettled(
            CRITICAL_FONTS.map(font => document.fonts.load(font))
          )
        }
        if (document.fonts && document.fonts.ready) {
          await document.fonts.ready
        }
      } catch (err) {
        console.warn('Font loading check:', err)
      } finally {
        if (isMounted) {
          setFontsLoaded(true)
        }
      }
    }

    loadAllFonts()

    const timer = setTimeout(() => {
      if (isMounted) {
        setFontsLoaded(true)
      }
    }, 2500)

    return () => {
      isMounted = false
      clearTimeout(timer)
    }
  }, [])

  return (
    <LanguageProvider>
      <div className="mesh-bg" />
      <div 
        style={{ 
          opacity: fontsLoaded ? 1 : 0, 
          transition: 'opacity 0.3s ease-in-out',
          pointerEvents: fontsLoaded ? 'auto' : 'none'
        }}
      >
        <NavBar />
        <div className="page" style={{ overflowY: 'auto', overflowX: 'hidden', height: '100dvh', width: '100%' }}>
          <HeroSection />
          <PhotosSection />
        </div>
      </div>
    </LanguageProvider>
  )
}

