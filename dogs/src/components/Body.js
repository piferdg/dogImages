import React from 'react'

const Body = ({ image }) => {

  return (
    <div>
      <h3>Click the bone to see a new pup!</h3>
      <img src={image} alt='Dogs!' />
    </div>
  )
}

export default Body