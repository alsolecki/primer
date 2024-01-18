import React, { useRef } from 'react'

const EventOrb8 = ({ step }) => {

    const ref = useRef()

  return (
     <mesh
            ref={ref}
            scale={ step === 'step8' ? 0.75 : 0.35}
            onClick={(event) => {console.log(event.object.id)} }
            position={[7, 0, 1]}
            style={{

            }}
        >
            <sphereGeometry />
            <meshStandardMaterial color={ step === 'step8' ? 'limegreen' : 'teal'} />
            {/* {hovered ? <Html
                position={[0, 3, 0]}
                wrapperClass="label"
                center
                distanceFactor={5}
            > {html}</Html> : null} */}
        </mesh>
  )
}

export default EventOrb8