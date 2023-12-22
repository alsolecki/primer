import React from 'react'

const EventBlock = ({time, event, color}) => {
    return (
        <div
            style={{
                border: 'lightgrey 2px solid',
                padding: '1rem'
            }}>
          
            <div style={{
                color: color,
                display: 'flex',
                alignItems: 'center'
            }}>
                <h4 style={{ paddingRight: '1rem' }}>{time}</h4>
                <p>{event}</p>
            </div>
        </div>
    )
}

export default EventBlock