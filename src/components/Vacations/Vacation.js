import React from 'react'

const Vacation = props => {
  const { url, text } = props.vacation
  const newText = text
    .split('-')
    .join(' ')
    .toLowerCase()

  return (
    <li>
      <a target="_blank" href={url} rel="noopener noreferrer">
        {newText}
      </a>
    </li>
  )
}

export default Vacation
