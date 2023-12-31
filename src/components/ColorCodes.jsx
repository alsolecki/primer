import React from 'react'

const ColorCodes = () => {

    return (
        <div 
            style={{ 
                padding: '1rem'
        }}>
            <div 
                style={{ 
                    color: 'grey',
                    display: 'flex',
                    alignItems: 'center',
                    flexDirection: 'column',
                    margin: '0'
            }}>
                <h4 style={{paddingRight : '0.25rem'}}>Grey Text:</h4>
                <p>This is seen in the film.</p>
            </div>

            <div 
                style={{ 
                    color: 'blue',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    margin: '0'
             }}>
                <h4 style={{paddingRight : '0.25rem'}}>Blue Text:</h4>
                <p>This is seen in the film as a flashback, after the event has occured.</p>
            </div>

            <div
                style={{
                    color: 'green',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center'
            }}>
                <h4 style={{paddingRight : '0.25rem'}}>Green Text:</h4>
                <p>This is seen in the film, but in a later timeline.</p>
            </div>

            <div style={{
                    color: 'red',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center'         
            }}>
                <h4 style={{paddingRight : '1rem'}}>Red Text:</h4>
                <p>This is not seen in the film, but is explained, or becomes apparent later in the film.</p>
            </div>
        </div>
    )
}

export default ColorCodes