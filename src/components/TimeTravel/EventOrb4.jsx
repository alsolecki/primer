import React, { useRef } from 'react'

const EventOrb4 = ({ step }) => {

    const ref = useRef()

  return (
     <mesh
            ref={ref}
            scale={ step === 'step4' ? 0.75 : 0.35}
            onClick={(event) => {console.log(event.object.id)} }
            position={[4, 0, -2]}
            style={{

            }}
        >
            <boxGeometry />
            <meshStandardMaterial color={ step === 'step4' ? 'magenta' : 'red'} />
            {/* {hovered ? <Html
                position={[0, 3, 0]}
                wrapperClass="label"
                center
                distanceFactor={5}
            > {html}</Html> : null} */}
        </mesh>
  )
}

export default EventOrb4