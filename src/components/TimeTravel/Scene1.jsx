import React, { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Html } from "@react-three/drei"
import Timeline from './Timeline.jsx'


const Scene1 = ({ step }) => {

    const cube1 = useRef()

    useFrame((state, delta) => {
        cube1.current.rotation.y += delta * 2
        cube1.current.rotation.x += delta * 2
    })

    const html = 'Original person decides to time-travel';

    return (
        <>
            <Timeline name="TimelineOne" position={[-4.5, 0, -2.5]} />

            <mesh
                ref={cube1}
                position={[-4, 0, -2]}
            >
                <boxGeometry args={[0.75, 0.75, 0.75]} />
                <meshStandardMaterial color={step === 'step1' ? 'magenta' : 'red'} />
            </mesh>

            <Html
                position={[0, -1, 3]}
                wrapperClass="label"
                center
                distanceFactor={15}
            > {html}</Html>

        </>
    )
}

export default Scene1