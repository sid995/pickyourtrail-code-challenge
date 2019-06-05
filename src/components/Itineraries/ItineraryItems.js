import React from 'react'
import _ from 'lodash'

const ItineraryItems = ({ itineraries }) => {
  const newItineraries = _.orderBy(itineraries, ['text'], ['asc'])

  return (
    <>
      <ul className="list-unstyled mb-0" style={{ width: '100%' }}>
        {newItineraries.map((item, i) => (
          <li key={i}>
            <a target="_blank" href={item.url} rel="noopener noreferrer">
              {item.text}
            </a>
          </li>
        ))}
      </ul>
    </>
  )
}

export default ItineraryItems
