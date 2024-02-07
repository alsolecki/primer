import React, { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Html, Float, Text, Svg } from "@react-three/drei"
import Timeline from './Timeline.jsx'


const Scene1 = ({ step }) => {

    const ref = useRef()

    useFrame((state, delta) => {
        ref.current.rotation.y += delta * 2
        ref.current.rotation.x += delta * 2
    })

    const html = 'Original person decides to time-travel';

    return (
        <>
            <Svg
                    src={'/svg/primer-title.svg'}
                    scale={[0.15, 0.15, 0]}
                    position={[-6.5, 4, -7]}
            />

            <Timeline name="TimelineOne" position={[-3.5, 0, -2.5]} />

            <mesh
                ref={ref}
                position={[-3, 0, -2]}
            >
                <tetrahedronGeometry args={[0.5, 2]} />
                <meshStandardMaterial color={"hsl(240, 70%, 50%)"} />
            </mesh>

            <Float
                speed={15}
                rotationIntensity={0.25}
                floatIntensity={0.5}
                floatingRange={[-0.05, 0.05]}
            >
                <Svg
                    src={'/svg/primer01.svg'}
                    scale={[0.2, 0.2, 0]}
                    position={[-3.75, 4.5, -2]}
                />
            </Float>

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