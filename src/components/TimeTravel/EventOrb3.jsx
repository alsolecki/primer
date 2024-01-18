import React, { useRef } from 'react'

const EventOrb3 = ({ step }) => {

    const ref = useRef()

  return (
     <mesh
            ref={ref}
            scale={ step === 'step3' ? 0.75 : 0.35}
            onClick={(event) => {console.log(event.object.id)} }
            position={[1, 0, -2]}
            style={{

            }}
        >
            <sphereGeometry />
            <meshStandardMaterial color={ step === 'step3' ? 'limegreen' : 'purple'} />
            {/* {hovered ? <Html
                position={[0, 3, 0]}
                wrapperClass="label"
                center
                distanceFactor={5}
            > {html}</Html> : null} */}
        </mesh>
  )
}

export default EventOrb3