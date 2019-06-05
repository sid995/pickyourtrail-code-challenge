import React from 'react'

const Destination = props => {
  const { text, url } = props.destination
  const newText = text.split('-').join(',')

  return (
    <li>
      <a target="_blank" href={url} rel="noopener noreferrer">
        {newText}
      </a>
    </li>
  )
}

export default Destination
