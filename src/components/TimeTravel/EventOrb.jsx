import React, { useState, useRef } from 'react'
import { Float, Html } from "@react-three/drei"
import { useFrame } from '@react-three/fiber'

const EventOrb = ({ position, color, step, html }) => {

    const ref = useRef()

    const [hovered, hover] = useState(false)
    const [clicked, click] = useState(false)

    return (
        <mesh
            ref={ref}
            scale={clicked ? 0.7 : 0.35}
            onClick={(event) => {console.log(event.object.id)} }
            position={position}
            onPointerOver={(event) => (event.stopPropagation(), hover(true))}
            onPointerOut={(event) => hover(false)}
            style={{

            }}
        >
            <sphereGeometry />
            <meshStandardMaterial color={color} />
            {/* {hovered ? <Html
                position={[0, 3, 0]}
                wrapperClass="label"
                center
                distanceFactor={5}
            > {html}</Html> : null} */}
        </mesh>
    )
}

export default EventOrb