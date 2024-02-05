import React, { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import Timeline from './Timeline.jsx'
import Timestream from './Timestream.jsx'
import { Html, Text, Float, Svg } from "@react-three/drei"
import TimeUnit from './TimeUnit.jsx'
import TimestreamUnits from './TimestreamUnits.jsx'


const Scene6 = ({ step }) => {

    const torus1 = useRef()
    const torus3 = useRef()
    const ref = useRef()
    const html = 'The Original waits out six hours of subjective time as he travels into the past. The Original becomes The Double.'

    useFrame((state, delta) => {

        ref.current.rotation.y += delta * 2
        ref.current.rotation.x += delta * 2

        torus1.current.scale.x = ((Math.cos(state.clock.elapsedTime * 2) * 0.05) + 1)
        torus1.current.scale.y = ((Math.sin(state.clock.elapsedTime * 5) * 0.05) + 1)
        torus1.current.scale.z = ((Math.sin(state.clock.elapsedTime * 10) * 0.75) + 1)

        torus3.current.scale.x = ((Math.cos(state.clock.elapsedTime * 2) * 0.05) + 1)
        torus3.current.scale.y = ((Math.sin(state.clock.elapsedTime * 5) * 0.05) + 1)
        torus3.current.scale.z = ((Math.sin(state.clock.elapsedTime * 10) * 0.75) + 1)

    })

    return (
        <>
            <Svg
                    src={'/svg/primer-title.svg'}
                    scale={[0.2, 0.2, 0]}
                    position={[-6.75, 4, -7]}
            />
            
            <Timeline name="TimelineOne" position={[-3.5, 0, -2.5]} />

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

            <mesh

                onClick={(event) => { console.log(event.object.id) }}
                position={[0.5, 1.5, -3.75]}
            >
                <tetrahedronGeometry args={[0.5, 2]} />
                <meshStandardMaterial color={"hsl(120, 70%, 50%)"} opacity={0.25} transparent />
            </mesh>

            <mesh

                onClick={(event) => { console.log(event.object.id) }}
                position={[2.25, 2.5, -4.5]}
            >
                <tetrahedronGeometry args={[0.5, 2]} />
                <meshStandardMaterial color={"hsl(130, 70%, 50%)"} opacity={0.5} transparent />
            </mesh>


            <mesh
                ref={ref}
                onClick={(event) => { console.log(event.object.id) }}
                position={[4, 3.0, -4.75]}
            >
                <tetrahedronGeometry args={[0.5, 2]} />
                <meshStandardMaterial color={"hsl(180, 70%, 50%)"} opacity={1.0} transparent />
            </mesh>


            <mesh
                onClick={(event) => { console.log(event.object.id) }}
                position={[5.75, 2.5, -4.5]}
            >
                <tetrahedronGeometry args={[0.5, 2]} />
                <meshStandardMaterial color={"hsl(210, 70%, 50%)"} opacity={0.5} transparent />
            </mesh>

            <mesh
                onClick={(event) => { console.log(event.object.id) }}
                position={[7.5, 1.5, -3.75]}
            >
                <tetrahedronGeometry args={[0.5, 2]} />
                <meshStandardMaterial color={"hsl(240, 70%, 50%)"} opacity={0.25} transparent />
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

            <mesh ref={torus1} position={[0, 0, -2]}>
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
                {/* <Text
                    font="./acme-v25-latin-regular.woff"
                    fontSize={0.45}
                    color="magenta"
                    position={[3.5, 2.5, -3.25]}
                    textAlign={'center'}
                    anchorX={'center'}
                >
                    {`                 Time-Traveling
                    Backwards`}
                </Text> */}
                <Svg
                    src={'/svg/primer06.svg'}
                    scale={[0.2, 0.2, 0]}
                    position={[2.5, 4.5, -3]}
                />
            </Float>

            <Text
                font="./acme-v25-latin-regular.woff"
                fontSize={0.4}
                color="magenta"
                position={[-0.5, 2, -2]}
            >
                {`                             12:00
                Machine Started`}
            </Text>

            <Text
                font="./acme-v25-latin-regular.woff"
                fontSize={0.4}
                color="magenta"
                position={[7.5, 2, -2]}
            >
                {`                              6:00 
                Entered Machine`}
            </Text>

            <Html
                position={[5, 0, 4]}
                wrapperClass="label"
                center
                distanceFactor={15}
            > {html}</Html>

        </>

    )
}

export default Scene6