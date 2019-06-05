import React from 'react'
import Vacation from './Vacation'
import './style.css'

const Vacations = ({ vacations }) => {
  console.log('Vacations:', vacations)
  return (
    <section className="common-list">
      <h5 className="section-header">Themed Vacations</h5>
      <ul className="sitemap-vacation">
        {vacations.map((vacation, i) => (
          <Vacation key={i} vacation={vacation} />
        ))}
      </ul>
    </section>
  )
}

export default Vacations
