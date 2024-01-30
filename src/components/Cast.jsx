import React from 'react'

const Cast = () => {

    return (
        <div style={{ border: "none" }}>

            <div style={{
                display: 'flex',
                justifyContent: 'space-evenly',
                fontSize: '2rem'
            }}>
                <div
                    className='castImgAaron' 
                    style={{
                    width: '50%',
                    textAlign: 'center',
                    color: 'ghostwhite',
                    border: "2px solid rgba(255, 255, 255, 0.2"
                }}>
                    <p>Aaron</p>
                </div>

                <div
                    className='castImgAbe' 
                    style={{
                    width: '50%',
                    textAlign: 'center',
                    color: 'ghostwhite',
                    border: "2px solid rgba(255, 255, 255, 0.2"
                }}>
                    <p>Abe</p>
                </div>
            </div>

            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(9, 1fr)',
                justifyContent: 'space-evenly',
                fontSize: '0.85rem'
            }}>

                <div className="castImgKara"
                    style={{
                    width: '100%',
                    textAlign: 'center',
                    color: 'ghostwhite'
                }}>
                    <p>Kara</p>
                </div>

                <div className="castImgPhilip"
                    style={{
                    width: '100%',
                    textAlign: 'center',
                    color: 'ghostwhite'
                }}>
                    <p>Philip</p>
                </div>

                <div className="castImgRobert"
                    style={{
                    width: '100%',
                    textAlign: 'center',
                    color: 'ghostwhite'
                }}>
                    <p>Robert</p>
                </div>

                <div className="castImgGranger1"
                    style={{
                    width: '100%',
                    textAlign: 'center',
                    color: 'ghostwhite'
                }}>
                    <p>Granger</p>
                </div>

                <div className="castImgRachel"
                    style={{
                    width: '100%',
                    textAlign: 'center',
                    color: 'ghostwhite'
                }}>
                    <p>Rachel</p>
                </div>

                <div className="castImgLabtech1"
                    style={{
                    width: '100%',
                    textAlign: 'center',
                    color: 'ghostwhite'
                }}>
                    <p>Lab Tech 1</p>
                </div>

                <div className="castImgLabtech2"
                    style={{
                    width: '100%',
                    textAlign: 'center',
                    color: 'ghostwhite'
                }}>
                    <p>Lab Tech 2</p>
                </div>

                <div className="castImgWill"
                    style={{
                    width: '100%',
                    textAlign: 'center',
                    color: 'ghostwhite'
                }}>
                    <p>Will</p>
                </div>

                <div className="castImgRachelsEx"
                    style={{
                    width: '100%',
                    textAlign: 'center',
                    color: 'ghostwhite'
                }}>
                     <p>Rachel's Ex</p>
                </div>
            </div>
        </div>
    )
}

export default Cast