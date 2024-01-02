import React from 'react'

const Cast = () => {

    return (
        <div style={{ border: "green 2px solid" }}>
            <div style={{
                display: 'flex',
                justifyContent: 'space-evenly',
                fontSize: '2rem'
            }}>
                <div style={{
                    border: "blue 2px solid",
                    width: '50%',
                    textAlign: 'center'
                }}>
                    <p>Aaron</p>
                </div>

                <div style={{
                    border: 'green 2px solid',
                    width: '50%',
                    textAlign: 'center'
                }}>
                    <p>Abe</p>
                </div>
            </div>

            <div style={{
                display: 'flex',
                justifyContent: 'space-evenly',
                fontSize: '0.85rem'
            }}>
                <p>Kara</p>
                <p>Philip</p>
                <p>Robert</p>
                <p>Granger</p>
                <p>Rachel</p>
                <p>Lab Tech 1 </p>
                <p>Lab Tech 2 </p>
                <p>Will</p>
                <p>Rachel's Ex</p>
            </div>
        </div>
    )
}

export default Cast