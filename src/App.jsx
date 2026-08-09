import React, { useState, useEffect } from 'react'
import HeroSection from './sections/HeroSection'

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
      <div className="mesh-bg" />
      <div className="page">
        <HeroSection />
      </div>
    </>
  )
}
