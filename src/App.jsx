import React, { useState, useEffect } from 'react'
import HeroSection from './sections/HeroSection'
import PhotosSection from './sections/PhotosSection'
import NavBar from './components/NavBar'
import { LanguageProvider } from './contexts/LanguageContext'

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false)

  useEffect(() => {
    document.fonts.ready.then(() => {
      setFontsLoaded(true)
    })
  }, [])

  if (!fontsLoaded) {
    return null
  }

  return (
    <LanguageProvider>
      <NavBar />
      <div className="mesh-bg" />
      <div className="page" style={{ overflowY: 'auto', overflowX: 'hidden', height: '100dvh', width: '100%' }}>
        <HeroSection />
        <PhotosSection />
      </div>
    </LanguageProvider>
  )
}
