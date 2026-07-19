import React from 'react'
import lovebirds from '../../../assets/pics/LOVEBIRDS_LIGHT.png'

export default function HeroSection() {
  return (
    <section className="hero-section min-h-screen w-full flex items-center justify-center px-5 sm:px-8 bg-[#fffefb]">
      <div className="hero-content mx-auto flex w-full max-w-[min(700px,calc(100vw-40px))] max-h-[calc(100vh-8vh)] flex-col justify-center overflow-hidden px-5 py-16 text-center">
        <div className="symbol mt-2 mb-3">
          <img src={lovebirds} alt="bird illustration" className="mx-auto mb-6 h-auto max-w-[180px] w-full object-contain" />
        </div>

        <div className="save mb-7 text-[2.4rem] opacity-95 save-font">
          Save the date
        </div>

        <div className="names relative mb-5 min-h-[260px] max-h-[60vh] overflow-hidden">
          <h1 className="name left">Yasmin</h1>
          <div className="and">and</div>
          <h1 className="name right">Niko</h1>
        </div>

        <p className="info mx-auto mb-2 w-full max-w-[32rem] text-center text-[1.125rem] leading-[1.7] text-[#19263c] info-font">
          Join us on the 10<sup>th</sup> of October 2026
        </p>
        <p className="location mx-auto mb-9 w-full max-w-[32rem] text-center text-[1.125rem] leading-[1.7] text-[#19263c] info-font">
          Athens, Greece
        </p>
        <p className="follow mx-auto w-full max-w-[32rem] text-center text-[1.25rem] opacity-90 follow-font">
          Invitation to follow
        </p>
      </div>
    </section>
  )
}
