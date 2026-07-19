import React from 'react'

export default function MapCard() {
  return (
    <div className="map-frame-wrapper min-h-[420px] overflow-hidden rounded-[32px] shadow-[0_24px_64px_rgba(35,90,166,0.16)]">
      <iframe
        title="Event location map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d317711.2328222409!2d23.63332775!3d37.9838096!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14a1bd5dfd98b3b1:0xdab14465b7661b8c!2sAthens%2C%20Greece!5e0!3m2!1sen!2sus!4v1699850000000!5m2!1sen!2sus"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="map-frame h-full w-full min-h-[420px] border-0"
      />
    </div>
  )
}
