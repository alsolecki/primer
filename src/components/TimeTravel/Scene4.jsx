import React, { useRef } from 'react'
import Timeline from './Timeline.jsx'
import { useFrame } from '@react-three/fiber'
import Pointer from './Pointer.jsx'
import { Html, Float } from "@react-three/drei"
import TimeUnit from './TimeUnit.jsx'

const Scene4 = ({ step }) => {

    const html = 'Original checks stock price moves, avoids causative action, and prepares for entry into the box.'

    const torus1 = useRef()
    const ref = useRef()

    useFrame((state, delta) => {
       
        ref.current.rotation.y += delta * 2
        ref.current.rotation.x += delta * 2

        torus1.current.scale.x = ((Math.cos(state.clock.elapsedTime * 2) * 0.05) + 1)
        torus1.current.scale.y = ((Math.sin(state.clock.elapsedTime * 5) * 0.05) + 1)
        torus1.current.scale.z = ((Math.sin(state.clock.elapsedTime * 10) * 0.75) + 1)
        // torus1.current.position.y = ((Math.cos(state.clock.elapsedTime) * 0.1))

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

            <mesh
                ref={ref}
                scale={step === 'step4' ? 0.75 : 0.35}
                onClick={(event) => { console.log(event.object.id) }}
                position={[4, 0, -2]}
            >
                <boxGeometry />
                <meshStandardMaterial color={step === 'step4' ? 'magenta' : 'red'} />
            </mesh>

            <mesh ref={torus1} position={[1, 0, -2]}>
                <torusGeometry args={[1, 0.1, 24, 48]} />
                <meshStandardMaterial color={'teal'} opacity={1.0} transparent />
            </mesh>

            <Html
                position={[5, -1, 4]}
                wrapperClass="label"
                center
                distanceFactor={15}
            > {html}</Html>

        </>
    )
}

export default Scene4