import React, { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import Timeline from './Timeline.jsx'
import Timestream from './Timestream.jsx'
import { Html, Float } from "@react-three/drei"
import TimeUnit from './TimeUnit.jsx'

const Scene8 = ({ step }) => {

    const torus1 = useRef()
    const torus2 = useRef()
    const torus3 = useRef()
    const ref = useRef()
    const html = 'Period of time when Original and Double exists ends as the Original enters the box.'

    useFrame((state, delta) => {

        ref.current.rotation.y += delta * 2
        ref.current.rotation.x += delta * 2

        torus2.current.scale.x = ((Math.cos(state.clock.elapsedTime * 10) * 0.05) + 1)
        torus2.current.scale.y = ((Math.sin(state.clock.elapsedTime * 5) * 0.05) + 1)
        torus2.current.position.y = ((Math.cos(state.clock.elapsedTime) * 0.1))

        torus3.current.scale.x = ((Math.cos(state.clock.elapsedTime * 10) * 0.05) + 1)
        torus3.current.scale.y = ((Math.sin(state.clock.elapsedTime * 5) * 0.05) + 1)
        torus3.current.position.y = ((Math.cos(state.clock.elapsedTime) * 0.1))
    })

    return (
        <>
            <Timeline name="TimelineOne" position={[-4.5, 0, -2.5]} />

            <mesh
                ref={ref}
                scale={step === 'step8' ? 0.75 : 0.35}
                onClick={(event) => { console.log(event.object.id) }}
                position={[4, 0, 1.5]}
            >
                <boxGeometry />
                <meshStandardMaterial color={step === 'step8' ? 'magenta' : 'blue'} />
            </mesh>

            <Timeline
                name="TimelineTwo"
                position={[0.5, 0, 1]}
            />

            <mesh
                position={[1, 0, -0.75]}
                scale={[1, 1, 1]}
                rotation={[- Math.PI * 0.5, 0, 0]}
            >
                <planeGeometry args={[0.75, 3.5]}
                />
                <meshStandardMaterial color="teal" transparent opacity={.5} />
            </mesh>

            <Timestream />

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

            <group position={[0, 0, 3.5]}>
                <TimeUnit color="blue" opacity={0.25} positionX={1} />
                <TimeUnit color="blue" opacity={0.25} positionX={2} />
                <TimeUnit color="blue" opacity={0.25} positionX={3} />
            </group>

            <mesh ref={torus2} position={[1, 0, 1]}>
                <torusGeometry args={[1, 0.1, 24, 48]} />
                <meshStandardMaterial color={'teal'} opacity={1.0} transparent />
            </mesh>

            <mesh ref={torus3} position={[7, 0, -2]}>
                <torusGeometry args={[1, 0.1, 24, 48]} />
                <meshStandardMaterial color={'teal'} opacity={1.0} transparent />
            </mesh>


            <Html
                position={[6, 0, 6]}
                wrapperClass="label"
                center
                distanceFactor={15}
            > {html}</Html>

        </>


    )
}

export default Scene8