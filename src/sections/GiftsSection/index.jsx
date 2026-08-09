import React from 'react'

export default function GiftsSection() {
  return (
    <section id="gifts" className="w-full flex flex-col items-center justify-center py-16 px-4 sm:px-8 text-center relative z-10" style={{ color: '#8b0000', fontFamily: '"Cormorant Garamond", serif' }}>
      
      {/* Decorative Gift Sketch */}
      <div className="w-48 h-48 sm:w-64 sm:h-64 mb-6 opacity-90 transition-transform duration-500 hover:scale-105">
        <img 
          src="/assets/pics/gift_sketch.svg" 
          alt="Gift Sketch" 
          className="w-full h-full object-contain"
        />
      </div>

      <div className="max-w-2xl mx-auto flex flex-col gap-6">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-wide" style={{ fontFamily: '"Delmon Delicate", "Playfair Display", serif' }}>
          Your Presence is Our Present
        </h2>
        
        <p className="text-lg sm:text-xl leading-relaxed opacity-90 max-w-lg mx-auto">
          We are so thrilled to share our special day with you. Please do not feel obliged to buy us a gift. 
          If you would like to contribute, we will have a wishing well at the reception.
        </p>

        {/* Optional Bank Info block */}
        <div className="mt-4 p-6 border border-[#8b0000]/20 rounded-lg bg-white/40 backdrop-blur-sm">
          <p className="text-base sm:text-lg mb-2">For those who prefer a bank transfer:</p>
          <p className="text-lg sm:text-xl font-bold tracking-widest font-mono">GR00 0000 0000 0000 0000 0000 000</p>
          <p className="text-sm mt-2 italic">Name: Nikos & Yasmin</p>
        </div>
      </div>
    </section>
  )
}
