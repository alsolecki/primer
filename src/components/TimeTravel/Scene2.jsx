import React, { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import Timeline from './Timeline.jsx'
import { Html } from "@react-three/drei"
import TimeUnit from './TimeUnit.jsx'

const Scene2 = ({ step }) => {

    const cube1 = useRef()

    useFrame((state, delta) => {
        cube1.current.rotation.y += delta * 2
        cube1.current.rotation.x += delta * 2
    })

    const html = 'They activate a delayed switch and leave the area to avoid encountering their double'

    return (
        <>
            <Timeline name="TimelineOne" position={[-4.5, 0, -2.5]} />

            <mesh ref={cube1} position={[-0.5, 0, -2]} >
                <boxGeometry args={[0.75, 0.75, 0.75]} />
                <meshStandardMaterial color={step === 'step2' ? 'magenta' : 'red'} />
            </mesh>

            <TimeUnit color="blue" opacity={0.25} positionX={-4} />
            <TimeUnit color="blue" opacity={0.25} positionX={-3} />
            <TimeUnit color="blue" opacity={0.25} positionX={-2} />
            <TimeUnit color="blue" opacity={0.25} positionX={-1} />

            <Html
                position={[1, -1, 4]}
                wrapperClass="label"
                center
                distanceFactor={15}
            > {html}</Html>

        </>
    )
}

export default Scene2