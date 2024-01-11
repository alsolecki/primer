import React from 'react'

const Cast = () => {

    return (
        <div style={{ border: "green 2px solid" }}>
            <div style={{
                display: 'flex',
                justifyContent: 'space-evenly',
                fontSize: '2rem'
            }}>
                <div
                    className='castImgAaron' 
                    style={{
                    border: 'blue 5px solid',
                    width: '50%',
                    textAlign: 'center',
                    color: 'ghostwhite'
                }}>
                    <p>Aaron</p>
                </div>

                <div
                    className='castImgAbe' 
                    style={{
                    border: 'green 5px solid',
                    width: '50%',
                    textAlign: 'center',
                    color: 'ghostwhite'
                }}>
                    <p>Abe</p>
                </div>
            </div>

            <div style={{
                display: 'flex',
                justifyContent: 'space-evenly',
                fontSize: '0.85rem'
            }}>

                <div className="castImgKara">
                    <p>Kara</p>
                </div>


                
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