import React, { useState, useEffect } from 'react'
import HeroSection from './sections/HeroSection'
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
        
        {/* Placeholder sections for the new navigation structure */}
        <div id="schedule" className="min-h-screen flex items-center justify-center relative z-10">
          <h2 className="text-4xl font-bold" style={{ color: '#8b0000', fontFamily: '"Cormorant Garamond", serif' }}>Schedule</h2>
        </div>
        


        <div id="gifts" className="min-h-screen flex items-center justify-center relative z-10">
          <h2 className="text-4xl font-bold" style={{ color: '#8b0000', fontFamily: '"Cormorant Garamond", serif' }}>Gifts</h2>
        </div>

        <div id="rsvp" className="min-h-screen flex items-center justify-center relative z-10">
          <h2 className="text-4xl font-bold" style={{ color: '#8b0000', fontFamily: '"Cormorant Garamond", serif' }}>RSVP</h2>
        </div>
      </div>
    </>
  )
}
