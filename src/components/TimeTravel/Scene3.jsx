import React, { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import Timeline from './Timeline.jsx'
import { Html } from "@react-three/drei"
import TimeUnit from './TimeUnit.jsx'

const Scene3 = ({ step }) => {


    const cube1 = useRef()
    const torus1 = useRef()

    useFrame((state, delta) => {
        cube1.current.rotation.y += delta * 2
        cube1.current.rotation.x += delta * 2
        // torus1.current.rotation.x -= delta * 2
    
        torus1.current.scale.x = ((Math.cos(state.clock.elapsedTime * 2) * 0.05) + 1)
        torus1.current.scale.y = ((Math.sin(state.clock.elapsedTime * 5) * 0.05) + 1)
        torus1.current.scale.z = ((Math.sin(state.clock.elapsedTime * 10) * 0.75) + 1)
  

    })

    const html = 'The machine starts and the double exits, thus creating a new timeline'

    return (
        <>
            <Timeline name="TimelineOne" position={[-4.5, 0, -2.5]} />

            <TimeUnit color="blue" opacity={0.25} positionX={-4} />
            <TimeUnit color="blue" opacity={0.25} positionX={-3} />
            <TimeUnit color="blue" opacity={0.25} positionX={-2} />
            <TimeUnit color="blue" opacity={0.25} positionX={-1} />
            <TimeUnit color="blue" opacity={0.25} positionX={0} />


            <mesh
                position={[1, 0, -2]} ref={cube1}
            >
                <boxGeometry args={[0.75, 0.75, 0.75]} />
                <meshStandardMaterial color={step === 'step3' ? 'magenta' : 'purple'} />
            </mesh>

            <mesh ref={torus1} position={[1, 0, -2]}>
                <torusGeometry args={[1.25, 0.1, 24, 48]} />
                <meshStandardMaterial color={'teal'} opacity={1} transparent />
            </mesh>

            <Html
                position={[3, -1, 4]}
                wrapperClass="label"
                center
                distanceFactor={15}
            > {html}</Html>

        </>
    )
}

export default Scene3