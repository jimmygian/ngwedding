import React from 'react'
import MapCard from './MapCard'

export default function EventDetails() {
  return (
    <section className="event-details-section min-h-screen w-full flex items-center justify-center bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(251,246,240,1))] px-5 sm:px-8">
      <div className="details-grid grid w-full max-w-[1200px] gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="details-panel rounded-[32px] border border-[#235aa611] bg-white/95 p-10 shadow-[0_20px_44px_rgba(35,90,166,0.08)]">
          <span className="section-label inline-block text-xs uppercase tracking-[0.2em] text-[#235aa6] opacity-80 mb-4">
            Event Details
          </span>
          <h2 className="details-title mb-8 text-[clamp(2.4rem,3.4vw,3.4rem)]">
            Ceremony & Location
          </h2>

          <div className="event-meta grid gap-6 lg:grid-cols-2">
            <div className="event-card rounded-[24px] border border-[#235aa611] bg-white p-6">
              <h3 className="mb-3 text-xl text-[#235aa6]">Ceremony</h3>
              <p className="event-time mb-1 text-base font-semibold">October 10, 2026</p>
              <p className="event-subtitle mb-4 text-sm text-[#4f5c7a]">4:00 PM</p>
              <p className="event-description text-sm leading-7 text-[#5a6375]">
                Join us for a meaningful ceremony followed by dinner and drinks in the heart of Athens.
              </p>
            </div>

            <div className="event-card rounded-[24px] border border-[#235aa611] bg-white p-6">
              <h3 className="mb-3 text-xl text-[#235aa6]">Location</h3>
              <p className="event-time mb-1 text-base font-semibold">St. George Chapel</p>
              <p className="event-subtitle mb-4 text-sm text-[#4f5c7a]">Athens, Greece</p>
              <p className="event-description text-sm leading-7 text-[#5a6375]">
                A characterful chapel with a warm reception area, easy access from the city center and nearby transport.
              </p>
            </div>
          </div>

          <div className="directions mt-8">
            <h3 className="mb-3 text-xl text-[#235aa6]">How to get there</h3>
            <ul className="grid gap-3 list-none p-0">
              <li className="relative pl-6 text-[#4c5261] leading-7 before:absolute before:left-0 before:text-[#235aa6] before:content-['•']">
                By taxi: 20–25 minutes from central Athens.
              </li>
              <li className="relative pl-6 text-[#4c5261] leading-7 before:absolute before:left-0 before:text-[#235aa6] before:content-['•']">
                By metro: take Line 2 to the nearest station, then a short walk or rideshare.
              </li>
              <li className="relative pl-6 text-[#4c5261] leading-7 before:absolute before:left-0 before:text-[#235aa6] before:content-['•']">
                Parking: limited guest parking is available near the venue.
              </li>
            </ul>
          </div>
        </div>

        <MapCard />
      </div>
    </section>
  )
}
