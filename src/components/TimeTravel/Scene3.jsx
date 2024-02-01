import React, { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import Timeline from './Timeline.jsx'
import { Html, Text, Float, Svg } from "@react-three/drei"
import TimeUnit from './TimeUnit.jsx'

const Scene3 = ({ step }) => {


    const ref = useRef()
    const torus1 = useRef()

    useFrame((state, delta) => {
        ref.current.rotation.y += delta * 2
        ref.current.rotation.x += delta * 2
        // torus1.current.rotation.x -= delta * 2

        torus1.current.scale.x = ((Math.cos(state.clock.elapsedTime * 2) * 0.05) + 1)
        torus1.current.scale.y = ((Math.sin(state.clock.elapsedTime * 5) * 0.05) + 1)
        torus1.current.scale.z = ((Math.sin(state.clock.elapsedTime * 10) * 0.75) + 1)

    })

    const html = '15-minutes later, The Machine starts and The Double exits. The Original has distanced themselves to avoid causative action.'

    return (
        <>
            <Timeline name="TimelineOne" position={[-3.5, 0, -2.5]} />

            <TimeUnit color="hsl(240, 100%, 50%)" opacity={0.5} positionX={-3.0} />
            <TimeUnit color="hsl(240, 100%, 50%)" opacity={0.5} positionX={-2.0} />
            <TimeUnit color="hsl(240, 100%, 50%)" opacity={0.5} positionX={-1.0} />
            <TimeUnit color="hsl(240, 100%, 50%)" opacity={0.5} positionX={0} />
            <TimeUnit color="hsl(240, 100%, 50%)" opacity={0.5} positionX={1.0} />

            <group
                rotation={[0, -Math.PI * 0.5, 0]}
                position={[-2, 0, -2.35]}
            >
                <TimeUnit color="hsl(120, 100%, 50%)" opacity={1} positionX={0.5} />
            </group>

            {/* <Text
                font="./acme-v25-latin-regular.woff"
                fontSize={0.35}
                color="hsl(290, 100%, 50%)"
                position={[0, -0.25, -0.5]}
            >
                {'Double Exits'}
            </Text> */}

            <mesh
                position={[2.25, 0, -2]} ref={ref}
            >
                <tetrahedronGeometry args={[0.5, 2]} />
                <meshStandardMaterial color={"hsl(240, 70%, 50%)"} />
            </mesh>

            <mesh ref={torus1} position={[0, 0, -2]}>
                <torusGeometry args={[1.25, 0.1, 24, 48]} />
                <meshStandardMaterial color={'magenta'} opacity={1} transparent />
            </mesh>

            <Float
                speed={15}
                rotationIntensity={0.25}
                floatIntensity={0.5}
                floatingRange={[-0.05, 0.05]}
            >
                <Svg
                    src={'/svg/primer03.svg'}
                    scale={[0.2, 0.2, 0]}
                    position={[1.0, 3.5, -2.25]}
                />
            </Float>

            <Float
                speed={15}
                rotationIntensity={0.25}
                floatIntensity={0.5}
                floatingRange={[-0.05, 0.05]}
            >
                <Svg
                    src={'/svg/primer07.svg'}
                    scale={[0.2, 0.2, 0]}
                    position={[-2.5, 2.75, 1.0]}
                />
            </Float>

            <Html
                position={[4, -1, 3]}
                wrapperClass="label"
                center
                distanceFactor={15}
            > {html}</Html>

        </>
    )
}

export default Scene3