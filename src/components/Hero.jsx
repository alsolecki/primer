import React from 'react'
import weeble from '/weeble.png'

const Hero = () => {
  return (
    <div style={{
        display: 'flex',
        alignItems: 'center'
      }}>
        <div style={{
          border: 'none'
        }}>
          <img
            src={weeble} alt="primer timeline key"
            style={{
              width: '70%', 
              margin: '1rem'
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