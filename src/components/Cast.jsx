import React from 'react'

const Cast = () => {
    return (
        <div style={{ border: "green 2px solid" }}>
            <div style={{
                display: 'flex',
                justifyContent: 'space-evenly',
                fontSize: '2rem'
            }}>
                <p>Aaron</p>
                <p>Abe</p>
            </div>
            <div style={{
                display: 'flex',
                justifyContent: 'space-evenly',
                fontSize: '1.25rem'
            }}>
                <p>Philip</p>
                <p>Robert</p>
                <p>Kara</p>
                <p>Rachel</p>
                <p>Granger</p>
            </div>
            <div style={{
                display: 'flex',
                justifyContent: 'space-evenly',
                fontSize: '0.85rem'
            }}>
                <p>Will</p>
                <p>Will's Cousin/Rachel's Ex</p>
                <p>Metal Tech</p>
                <p>Lab Tech 1 </p>
                <p>Lab Tech 2 </p>
            </div>
        </div>
    )
}

export default Cast