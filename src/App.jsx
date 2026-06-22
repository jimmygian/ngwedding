import React from 'react'
import lovebirds from '../assets/pics/LOVEBIRDS_LIGHT.png'

export default function App() {
  return (
    <div className="page">
      <div className="card">
        <div className="symbol">
          <img src={lovebirds} alt="bird illustration" className="bird-img" />
        </div>

        <div className="save">Save the date</div>

        <div className="names">
            <h1 className="name left">Yasmin</h1>
            <div className="and">and</div>
            <h1 className="name right">Niko</h1>
        </div>

        <p className="info">Join us on the 10<sup>th</sup> of October 2026</p>
        <p className="location">Athens, Greece</p>
        <p className="follow">Invitation to follow</p>
      </div>

      {/* dev panel removed */}
    </div>
  )
}
