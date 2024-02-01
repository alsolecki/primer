import React, { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Html, Float, Text } from "@react-three/drei"
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
            <Timeline name="TimelineOne" position={[-3.5, 0, -2.5]} />

            <mesh
                ref={ref}
                position={[-3, 0, -2]}
            >
                <tetrahedronGeometry args={[0.5, 2]} />
                <meshStandardMaterial color={step === 'step1' ? 'magenta' : 'red'} />
            </mesh>

            <Float
                    speed={15}
                    rotationIntensity={0.25}
                    floatIntensity={0.5}
                    floatingRange={[-0.05, 0.05]}
                >
                    <Text
                        font="./acme-v25-latin-regular.woff"
                        fontSize={0.45}
                        color="magenta"
                        position={[-3.75, 1.5, -2]}
                        textAlign={'center'}
                        anchorX={'center'}
                    >
                        {`                      Original
                        Person`}
                    </Text>
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