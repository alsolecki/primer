import React, { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import Timeline from './Timeline.jsx'
import Timestream from './Timestream.jsx'
import { Html, Float, Svg } from "@react-three/drei"
import TimeUnit from './TimeUnit.jsx'
import TimestreamUnits from './TimestreamUnits.jsx'

const Scene7 = ({ step }) => {


    const torus2 = useRef()
    const torus3 = useRef()
    const ref = useRef()
    const html = 'The Double exits the time machine, thus creating a second timeline.'

    useFrame((state, delta) => {

        ref.current.rotation.y += delta * 2
        ref.current.rotation.x += delta * 2

        torus2.current.scale.x = ((Math.cos(state.clock.elapsedTime * 2) * 0.05) + 1)
        torus2.current.scale.y = ((Math.sin(state.clock.elapsedTime * 5) * 0.05) + 1)
        torus2.current.scale.z = ((Math.sin(state.clock.elapsedTime * 10) * 0.75) + 1)

        torus3.current.scale.x = ((Math.cos(state.clock.elapsedTime * 2) * 0.05) + 1)
        torus3.current.scale.y = ((Math.sin(state.clock.elapsedTime * 5) * 0.05) + 1)
        torus3.current.scale.z = ((Math.sin(state.clock.elapsedTime * 10) * 0.75) + 1)
    })

    return (
        <>
            <Timeline name="TimelineOne" position={[-3.5, 0, -2.5]} />

            <mesh
                position={[0, 0, -2]}
            >
                <tetrahedronGeometry args={[0.5, 2]} />
                <meshStandardMaterial color={"hsl(240, 70%, 50%)"} />
            </mesh>

            <mesh
                ref={ref}
                position={[0, 0, 1]}
            >
                <tetrahedronGeometry args={[0.5, 2]} />
                <meshStandardMaterial color={"hsl(120, 70%, 50%)"} />
            </mesh>

            <Timestream />

            <TimestreamUnits
                hue1="hsl(230, 100%, 50%)"
                hue2="hsl(221, 100%, 50%)"
                hue3="hsl(212, 100%, 50%)"
                hue4="hsl(203, 100%, 50%)"
                hue5="hsl(194, 100%, 50%)"
                hue6="hsl(185, 100%, 50%)"
                hue7="hsl(176, 100%, 50%)"
                hue8="hsl(167, 100%, 50%)"
                hue9="hsl(158, 100%, 50%)"
                hue10="hsl(149, 100%, 50%)"
                hue11="hsl(140, 100%, 50%)"
            />

            <Timeline name="TimelineTwo" position={[-1.5, 0, 0.5]} />

            <TimeUnit color="hsl(240, 100%, 50%)" opacity={0.5} positionX={-3.0} />
            <TimeUnit color="hsl(240, 100%, 50%)" opacity={0.5} positionX={-2.0} />
            <TimeUnit color="hsl(240, 100%, 50%)" opacity={0.5} positionX={-1.0} />
            <TimeUnit color="hsl(240, 100%, 50%)" opacity={0.5} positionX={0} />
            <TimeUnit color="hsl(240, 100%, 50%)" opacity={0.5} positionX={1.0} />
            <TimeUnit color="hsl(240, 100%, 50%)" opacity={0.5} positionX={2.0} />
            <TimeUnit color="hsl(240, 100%, 50%)" opacity={0.5} positionX={3.0} />
            <TimeUnit color="hsl(240, 100%, 50%)" opacity={0.5} positionX={4.0} />
            <TimeUnit color="hsl(240, 100%, 50%)" opacity={0.5} positionX={5.0} />
            <TimeUnit color="hsl(240, 100%, 50%)" opacity={0.5} positionX={6.0} />
            <TimeUnit color="hsl(240, 100%, 50%)" opacity={0.5} positionX={7.0} />


            <mesh ref={torus2} position={[0, 0, 0]}>
                <torusGeometry args={[1.25, 0.1, 24, 48]} />
                <meshStandardMaterial color={'magenta'} opacity={1.0} transparent />
            </mesh>

            <mesh ref={torus3} position={[8, 0, -2]}>
                <torusGeometry args={[1.25, 0.1, 24, 48]} />
                <meshStandardMaterial color={'magenta'} opacity={1.0} transparent />
            </mesh>

            <Float
                speed={15}
                rotationIntensity={0.25}
                floatIntensity={0.5}
                floatingRange={[-0.05, 0.05]}
            >
                <Svg
                    src={'/svg/primer07.svg'}
                    scale={[0.2, 0.2, 0]}
                    position={[-2.5, 3.5, 1.0]}
                />
            </Float>
            <Float
                speed={15}
                rotationIntensity={0.25}
                floatIntensity={0.5}
                floatingRange={[-0.05, 0.05]}
            >
                <Svg
                    src={'/svg/primer03.svg'}
                    scale={[0.2, 0.2, 0]}
                    position={[-0.5, 3.25, -2.25]}
                />
            </Float>

            <Html
                position={[6, -2, 6]}
                wrapperClass="label"
                center
                distanceFactor={15}
            > {html}</Html>

            <group
                rotation={[0, -Math.PI * 0.5, 0]}
                position={[-2, 0, -2.5]}
            >
                <TimeUnit color="hsl(132, 100%, 50%)" opacity={0.75} positionX={0.5} />
                <TimeUnit color="hsl(126, 100%, 50%)" opacity={0.75} positionX={1.5} />
                <TimeUnit color="hsl(120, 100%, 50%)" opacity={0.75} positionX={2.5} />
            </group>

        </>
    )
}

export default Scene7