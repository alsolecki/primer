import React, { useRef } from 'react'

const EventOrb6 = ({ step }) => {

    const ref = useRef()

  return (
     <mesh
            ref={ref}
            scale={ step === 'step6' ? 0.75 : 0.35}
            onClick={(event) => {console.log(event.object.id)} }
            position={[4, 3, -4]}
            style={{

            }}
        >
            <boxGeometry />
            <meshStandardMaterial color={ step === 'step6' ? 'magenta' : 'teal'} />
            {/* {hovered ? <Html
                position={[0, 3, 0]}
                wrapperClass="label"
                center
                distanceFactor={5}
            > {html}</Html> : null} */}
        </mesh>
  )
}

export default EventOrb6