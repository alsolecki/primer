import React from 'react'

const EventBlock = ({time, event, color, id }) => {
    return (
        <div
            style={{
                border: 'rgb(240, 240, 240) 2px solid',
                padding: '1rem',
                margin: '1rem 0 '
            }}>
          
            <div style={{
                color: color,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'start'
            }}>
                <h3>{id}</h3>
                <h4 style={{ paddingRight: '1rem' }}>{time}</h4>
                <p>{event}</p>
            </div>
        </div>
    )
}

export default EventBlock