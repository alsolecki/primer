import React, { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import Timeline from './Timeline.jsx'
import Timestream from './Timestream.jsx'
import { Html, Float } from "@react-three/drei"
import TimeUnit from './TimeUnit.jsx'

const Scene9 = ({ step }) => {

    const torus2 = useRef()
    const torus3 = useRef()
    const ref = useRef()
    const html = 'Double has created an altered future for the double alone. The original loses his existance in the timeloop; his future is only to enter the box.'

    useFrame((state, delta) => {

        ref.current.rotation.y += delta * 2
        ref.current.rotation.x += delta * 2

    })

    return (
        <>
            <Timeline name="TimelineOne" position={[-4.5, 0, -2.5]} />

            <mesh
                ref={ref}
                scale={step === 'step9' ? 0.75 : 0.35}
                onClick={(event) => { console.log(event.object.id) }}
                position={[10, 0, 1.5]}
            >
                <boxGeometry />
                <meshStandardMaterial color={step === 'step9' ? 'magenta' : 'blue'} />
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
                <meshStandardMaterial color="teal" opacity={0.5} transparent />
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

            <group position={[0,0,3.5]}>
                <TimeUnit color="blue" opacity={0.25} positionX={1} />
                <TimeUnit color="blue" opacity={0.25} positionX={2} />
                <TimeUnit color="blue" opacity={0.25} positionX={3} />
                <TimeUnit color="blue" opacity={0.25} positionX={4} />
                <TimeUnit color="blue" opacity={0.25} positionX={5} />
                <TimeUnit color="blue" opacity={0.25} positionX={6} />
                <TimeUnit color="blue" opacity={0.25} positionX={7} />
                <TimeUnit color="blue" opacity={0.25} positionX={8} />
                <TimeUnit color="blue" opacity={0.25} positionX={9} />
            </group>

            <mesh ref={torus2} position={[1, 0, 1]}>
                <torusGeometry args={[1, 0.1, 24, 48]} />
                <meshStandardMaterial color={'teal'} opacity={0.5} transparent />
            </mesh>

            <mesh ref={torus3} position={[7, 0, -2]}>
                <torusGeometry args={[1, 0.1, 24, 48]} />
                <meshStandardMaterial color={'teal'} opacity={0.5} transparent />
            </mesh>

            <Html
                position={[6, -1, 6]}
                wrapperClass="label"
                center
                distanceFactor={15}
            > {html}</Html>

        </>
    )
}

export default Scene9