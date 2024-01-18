import React, { useRef } from 'react'

const EventOrb5 = ({ step }) => {

    const ref = useRef()

  return (
     <mesh
            ref={ref}
            scale={ step === 'step5' ? 0.75 : 0.35}
            onClick={(event) => {console.log(event.object.id)} }
            position={[7, 0, -2]}
            style={{

            }}
        >
            <sphereGeometry />
            <meshStandardMaterial color={ step === 'step5' ? 'limegreen' : 'red'} />
            {/* {hovered ? <Html
                position={[0, 3, 0]}
                wrapperClass="label"
                center
                distanceFactor={5}
            > {html}</Html> : null} */}
        </mesh>
  )
}

export default EventOrb5