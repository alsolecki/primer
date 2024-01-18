import React, { useRef } from 'react'

const EventOrb1 = ({ step }) => {

    const orb1 = useRef()

  return (
     <mesh
            ref={ orb1 }
            scale={ step === 'step1' ? 0.75 : 0.35}
            onClick={(event) => {console.log(event.object.id)} }
            position={[-4, 0, -2]}
            style={{

            }}
        >
            <sphereGeometry />
            <meshStandardMaterial color={ step === 'step1' ? 'limegreen' : 'red'} />
            {/* {hovered ? <Html
                position={[0, 3, 0]}
                wrapperClass="label"
                center
                distanceFactor={5}
            > {html}</Html> : null} */}
        </mesh>
  )
}

export default EventOrb1