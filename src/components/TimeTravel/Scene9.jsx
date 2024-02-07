import React, { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import Timeline from './Timeline.jsx'
import { Html, Float, Svg } from "@react-three/drei"
import TimeUnit from './TimeUnit.jsx'
import TimestreamUnits from './TimestreamUnits.jsx'

const Scene9 = ({ step }) => {

    const torus2 = useRef()
    const torus3 = useRef()
    const ref = useRef()
    const html = 'The Original loses his existance in the timeloop; his future is only to enter the box. The Double has created an altered future for The Double alone.'

    useFrame((state, delta) => {

        ref.current.rotation.y += delta * 2
        ref.current.rotation.x += delta * 2

    })

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
                position={[8, 0, 1.15]}
            >
                <tetrahedronGeometry args={[0.5, 2]} />
                <meshStandardMaterial color={"hsl(120, 100%, 50%)"} />
            </mesh>

            <mesh
                position={[8, 0, -2]}
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
                    src={'/svg/primer05.svg'}
                    scale={[0.2, 0.2, 0]}
                    position={[5.5, 4.0, -2]}
                />
            </Float>

            <Float
                speed={15}
                rotationIntensity={0.25}
                floatIntensity={0.5}
                floatingRange={[-0.05, 0.05]}
            >
                <Svg
                    src={'/svg/primer09.svg'}
                    scale={[0.2, 0.2, 0]}
                    position={[6.5, 3.5, 1.0]}
                />
            </Float>

            <Timeline
                name="TimelineTwo"
                position={[-0.5, 0, 0.5]}
            />

            {/* <Timestream /> */}

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

            <group
                rotation={[0, -Math.PI * 0.5, 0]}
                position={[-2, 0, -2.5]}
            >
                <TimeUnit color="hsl(132, 100%, 50%)" opacity={0.5} positionX={0.5} />
                <TimeUnit color="hsl(126, 100%, 50%)" opacity={0.5} positionX={1.5} />
                <TimeUnit color="hsl(120, 100%, 50%)" opacity={0.5} positionX={2.5} />
            </group>

            <group position={[0, 0, 3.15]}>
                <TimeUnit color="hsl(120, 100%, 50%)" opacity={0.5} positionX={0} />
                <TimeUnit color="hsl(120, 100%, 50%)" opacity={0.5} positionX={1} />
                <TimeUnit color="hsl(120, 100%, 50%)" opacity={0.5} positionX={2} />
                <TimeUnit color="hsl(120, 100%, 50%)" opacity={0.5} positionX={3} />
                <TimeUnit color="hsl(120, 100%, 50%)" opacity={0.5} positionX={4} />
                <TimeUnit color="hsl(120, 100%, 50%)" opacity={0.5} positionX={5} />
                <TimeUnit color="hsl(120, 100%, 50%)" opacity={0.5} positionX={6} />
                <TimeUnit color="hsl(120, 100%, 50%)" opacity={0.5} positionX={7} />
                <TimeUnit color="hsl(120, 100%, 50%)" opacity={0.5} positionX={8} />
                <TimeUnit color="hsl(120, 100%, 50%)" opacity={0.5} positionX={9} />
                <TimeUnit color="hsl(120, 100%, 50%)" opacity={0.5} positionX={10} />
            </group>

            <mesh ref={torus2} position={[0, 0, 0]}>
                <torusGeometry args={[1.25, 0.1, 24, 48]} />
                <meshStandardMaterial color={'white'} opacity={0.25} transparent />
            </mesh>

            <mesh ref={torus3} position={[8, 0, -2]}>
                <torusGeometry args={[1.25, 0.1, 24, 48]} />
                <meshStandardMaterial color={'magenta'} opacity={0.5} transparent />
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