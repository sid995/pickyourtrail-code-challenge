import React from 'react'
import Destination from './Destination'
import './style.css'

const Destinations = ({ destinations }) => {
  const distinctDestinations = Array.from(new Set(destinations.map(s => s.text)))
    .map(text => {
      return {
        text: text,
        url: destinations.find(s => s.text === text).url
      }
    })
    .sort((a, b) => {
      var regionA = a.text.toLowerCase(),
        regionB = b.text.toLowerCase()

      if (regionA < regionB) return -1
      if (regionA > regionB) return 1
      return 0
    })

  return (
    <section className="common-list">
      <h5 className="section-header">Destinations</h5>
      <ul className="sitemap-destination">
        {distinctDestinations.map((destination, i) => {
          return <Destination key={i} destination={destination} />
        })}
      </ul>
    </section>
  )
}

export default Destinations
