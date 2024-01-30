import React, { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import Timeline from './Timeline.jsx'
import { Html, Float } from "@react-three/drei"
import TimeUnit from './TimeUnit.jsx'

import Timestamp from './Timestamp.jsx'

const Scene5 = ({ step }) => {

    const torus1 = useRef()
    const torus3 = useRef()
    const ref = useRef()
    const html = 'Original enters the box, joining the looped timestream active inside.'

    useFrame((state, delta) => {
       
        ref.current.rotation.y += delta * 2
        ref.current.rotation.x += delta * 2

        torus1.current.scale.x = ((Math.cos(state.clock.elapsedTime * 2) * 0.05) + 1)
        torus1.current.scale.y = ((Math.sin(state.clock.elapsedTime * 5) * 0.05) + 1)
        torus1.current.scale.z = ((Math.sin(state.clock.elapsedTime * 10) * 0.75) + 1)

        torus3.current.scale.x = ((Math.cos(state.clock.elapsedTime * 2) * 0.05) + 1)
        torus3.current.scale.y = ((Math.sin(state.clock.elapsedTime * 5) * 0.05) + 1)
        torus3.current.scale.z = ((Math.sin(state.clock.elapsedTime * 10) * 0.75) + 1)
        // torus3.current.position.y = ((Math.cos(state.clock.elapsedTime) * 0.1))

    })


    return (
        <>
            <Timeline name="TimelineOne" position={[-4.5, 0, -2.5]} />


            <TimeUnit color="blue" opacity={0.25} positionX={-4} />
            <TimeUnit color="blue" opacity={0.25} positionX={-3} />
            <TimeUnit color="blue" opacity={0.25} positionX={-2} />
            <TimeUnit color="blue" opacity={0.25} positionX={-1} />
            <TimeUnit color="blue" opacity={0.25} positionX={0} />
            <TimeUnit color="blue" opacity={0.25} positionX={1} />
            <TimeUnit color="blue" opacity={0.25} positionX={2} />
            <TimeUnit color="blue" opacity={0.25} positionX={3} />
            <TimeUnit color="blue" opacity={0.25} positionX={4} />
            <TimeUnit color="blue" opacity={0.25} positionX={5} />
            <TimeUnit color="blue" opacity={0.25} positionX={6} />

            <mesh
                ref={ref}
                scale={step === 'step5' ? 0.75 : 0.35}
                onClick={(event) => { console.log(event.object.id) }}
                position={[7, 0, -2]}
                style={{

                }}
            >
                <boxGeometry />
                <meshStandardMaterial color={step === 'step5' ? 'magenta' : 'red'} />
            </mesh>

            <mesh ref={torus1} position={[1, 0, -2]} >
                <torusGeometry args={[1, 0.1, 24, 48]} />
                <meshStandardMaterial color={'teal'} opacity={1.0} transparent />
            </mesh>

            <mesh ref={torus3} position={[7, 0, -2]} >
                <torusGeometry args={[1, 0.1, 24, 48]} />
                <meshStandardMaterial color={'teal'} opacity={1.0} transparent />
            </mesh>

            <Html
                position={[6, 0, 4]}
                wrapperClass="label"
                center
                distanceFactor={15}
            > {html}</Html>
    
        </>
    )
}

export default Scene5