import React, { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import Timeline from './Timeline.jsx'
import Timestream from './Timestream.jsx'
import { Html, Float } from "@react-three/drei"
import TimeUnit from './TimeUnit.jsx'

const Scene6 = ({ step }) => {

    const torus1 = useRef()
    const torus3 = useRef()
    const ref = useRef()
    const html = 'Original waits out 6 hours of subjective time as he travels into the past, becoming his double'

    useFrame((state, delta) => {
      
        ref.current.rotation.y += delta * 2
        ref.current.rotation.x += delta * 2

        torus1.current.scale.x = ((Math.cos(state.clock.elapsedTime * 10) * 0.05) + 1)
        torus1.current.scale.y = ((Math.sin(state.clock.elapsedTime * 5) * 0.05) + 1)
        torus1.current.position.y = ((Math.cos(state.clock.elapsedTime) * 0.1))

        torus3.current.scale.x = ((Math.cos(state.clock.elapsedTime * 10) * 0.05) + 1)
        torus3.current.scale.y = ((Math.sin(state.clock.elapsedTime * 5) * 0.05) + 1)
        torus3.current.position.y = ((Math.cos(state.clock.elapsedTime) * 0.1))

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
            <TimeUnit color="blue" opacity={0.25} positionX={7} />


            <mesh
                ref={ref}
                scale={step === 'step6' ? 0.75 : 0.35}
                onClick={(event) => { console.log(event.object.id) }}
                position={[4, 3, -4]}
            >
                <boxGeometry />
                <meshStandardMaterial color={step === 'step6' ? 'magenta' : 'teal'} />
            </mesh>

            <Timestream />

            <mesh ref={torus1} position={[1, 0, -2]}>
                <torusGeometry args={[1, 0.1, 24, 48]} />
                <meshStandardMaterial color={'teal'} opacity={1.0} transparent />
            </mesh>

            <mesh ref={torus3} position={[7, 0, -2]}>
                <torusGeometry args={[1, 0.1, 24, 48]} />
                <meshStandardMaterial color={'teal'} opacity={1.0} transparent />
            </mesh>

            <Html
                position={[5, 0, 4]}
                wrapperClass="label"
                center
                distanceFactor={15}
            > {html}</Html>

        </>

    )
}

export default Scene6