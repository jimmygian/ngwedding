import React, { useState, useEffect } from 'react'
import HeroSection from './sections/HeroSection'
import GiftsSection from './sections/GiftsSection'
import NavBar from './components/NavBar'

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
    <>
      <NavBar />
      <div className="mesh-bg" />
      <div className="page" style={{ overflowY: 'auto', height: '100dvh' }}>
        <div id="home">
          <HeroSection />
        </div>
        <GiftsSection />
      </div>
    </>
  )
}
