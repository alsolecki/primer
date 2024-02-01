import React, { useRef } from 'react'
import Timeline from './Timeline.jsx'
import { useFrame } from '@react-three/fiber'
import { Html, Text, Float, Svg } from "@react-three/drei"
import TimeUnit from './TimeUnit.jsx'

const Scene4 = ({ step }) => {

    const html = 'The Original remains remote - checking stock price moves and preparing for entry into the Time Machine.'

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
            <Timeline name="TimelineOne" position={[-3.5, 0, -2.5]} />

            <TimeUnit color="hsl(240, 100%, 50%)" opacity={0.5} positionX={-3.0} />
            <TimeUnit color="hsl(240, 100%, 50%)" opacity={0.5} positionX={-2.0} />
            <TimeUnit color="hsl(240, 100%, 50%)" opacity={0.5} positionX={-1.0} />
            <TimeUnit color="hsl(240, 100%, 50%)" opacity={0.5} positionX={0} />
            <TimeUnit color="hsl(240, 100%, 50%)" opacity={0.5} positionX={1.0} />
            <TimeUnit color="hsl(240, 100%, 50%)" opacity={0.5} positionX={2.0} />
            <TimeUnit color="hsl(240, 100%, 50%)" opacity={0.5} positionX={3.0} />

            <mesh
                ref={ref}
                onClick={(event) => { console.log(event.object.id) }}
                position={[4.5, 0, -2]}
            >
                <tetrahedronGeometry args={[0.5, 2]} />
                <meshStandardMaterial color={"hsl(240, 70%, 50%)"} />
            </mesh>

            <mesh ref={torus1} position={[0, 0, -2]}>
                <torusGeometry args={[1.25, 0.1, 24, 48]} />
                <meshStandardMaterial color={'magenta'} opacity={1.0} transparent />
            </mesh>

            <Text
                font="./acme-v25-latin-regular.woff"
                fontSize={0.45}
                color="white"
                position={[-0.45, 2, -2]}
                textAlign={'center'}
                anchorX={'center'}
            >
                {`            12:00
                Machine Started`}
            </Text>

            <Float
                speed={15}
                rotationIntensity={0.25}
                floatIntensity={0.5}
                floatingRange={[-0.05, 0.05]}
            >
                <Svg
                    src={'/svg/primer04.svg'}
                    scale={[0.2, 0.2, 0]}
                    position={[2.5, 4.5, -2]}
                />
                {/* <Text
                    font="./acme-v25-latin-regular.woff"
                    fontSize={0.45}
                    color="magenta"
                    position={[4.5, 2, -2]}
                    textAlign={'center'}
                    anchorX={'center'}
                >
                    {`Afternoon`}
                </Text> */}
            </Float>

            <Html
                position={[6, -1, 3]}
                wrapperClass="label"
                center
                distanceFactor={15}
            > {html}</Html>

        </>
    )
}

export default Scene4