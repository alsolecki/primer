import React, { useRef, useState } from 'react'
import { useFrame } from '@react-three/fiber'
import Timeline from './Timeline.jsx'
import { Html, Text, Float } from "@react-three/drei"
import TimeUnit from './TimeUnit.jsx'

const Scene2 = ({ step }) => {

    const ref = useRef()
    const torus1 = useRef()
    const [refPosition, setRefPosition] = useState(null)

    useFrame((state, delta) => {
        ref.current.rotation.y += delta * 2
        ref.current.rotation.x += delta * 2

        setRefPosition(ref.current.position.x)

        if (ref.current.position.x >= 2.25) { return null } else {
            ref.current.position.x += delta * 1.5
        }

        if (ref.current.position.x <= 2.2) { return null } else {
            torus1.current.visible = true;
        }

    })

    const html = 'Original Person activates a 15-minute delay switch on the Time Machine and leaves the area.'

    return (
        <>
            <Timeline name="TimelineOne" position={[-3.5, 0, -2.5]} />

            <mesh ref={ref} position={[-3, 0, -2]} >
                <tetrahedronGeometry args={[0.5, 2]} />
                <meshStandardMaterial color={'magenta'} />
            </mesh>

            <mesh ref={torus1} position={[0, 0, -2]} visible={false}>
                <torusGeometry args={[1.25, 0.075, 24, 48]} />
                <meshStandardMaterial color={'teal'} opacity={1} transparent />
            </mesh>

            {refPosition >= 2.2 ?
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
                        position={[-.35, 2, -2]}
                        textAlign={'center'}
                        anchorX={'center'}
                    >
                        {`            11:45
                Delay Timer Activates`}
                    </Text>
                </Float>
                : null}

            {refPosition <= -2.0 ? null : <TimeUnit color="hsl(240, 100%, 50%)" opacity={0.5} positionX={-3.0} />}
            {refPosition <= -1.0 ? null : <TimeUnit color="hsl(240, 100%, 50%)" opacity={0.5} positionX={-2.0} />}
            {refPosition <= 0 ? null : <TimeUnit color="hsl(240, 100%, 50%)" opacity={0.5} positionX={-1.0} />}
            {refPosition <= 1 ? null : <TimeUnit color="hsl(240, 100%, 50%)" opacity={0.5} positionX={0.0} />}
            {refPosition <= 2 ? null : <TimeUnit color="hsl(240, 100%, 50%)" opacity={0.5} positionX={1.0} />}


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