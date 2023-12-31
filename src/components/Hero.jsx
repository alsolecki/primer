import React from 'react'
import weeble from '/weeble.png'

const Hero = () => {
  return (
    <div style={{
        display: 'flex'
      }}>
        <div>
          <img
            src={weeble} alt="primer timeline key"
            style={{
              width: '40%'
            }}
          />
        </div>
        <div>
          <h1>The definitive explaination and timeline</h1>
        </div>
      </div>
  )
}

export default Hero