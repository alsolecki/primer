import React, {useRef} from 'react'
import { useFrame } from '@react-three/fiber'
import Timeline from './Timeline.jsx'
import EventOrb7 from './EventOrb7.jsx'
import Timestream from './Timestream.jsx'
import Timestamp from './Timestamp.jsx'

const Scene7 = ({ step }) => {


    const torus2 = useRef()
    const torus3 = useRef()

    useFrame((state, delta) => {
       
        torus2.current.rotation.y += delta * 2
        torus3.current.rotation.y += delta * 2
    })

    return (
        <>
            <Timeline name="TimelineOne" position={[0, 0, -2]} />

            <EventOrb7 step={step} />

            <Timestream />

            <Timeline
                name="TimelineTwo"
                position={[3, 0, 1]}
            />

            <mesh
                position={[1, 0, -0.75]}
                scale={[1, 1, 1]}
                rotation={[- Math.PI * 0.5, 0, 0]}
            >
                <planeGeometry args={[0.75, 3]}
                />
                <meshStandardMaterial color="teal" transparent opacity={.5} />
            </mesh>

            <mesh position={[1.5, 0, -1.9]} rotation={[Math.PI * 0.5, 0, 0]}>
                <boxGeometry args={[10.75, 0.5, 0.10]} />
                <meshStandardMaterial color={'red'} opacity={0.5} transparent />
            </mesh>



            <mesh ref={torus2} position={[1, 0, 1]}>
                <torusGeometry args={[1, 0.1, 24, 48]} />
                <meshStandardMaterial color={'teal'} opacity={0.5} transparent />
            </mesh>

            <mesh ref={torus3} position={[7, 0, -2]}>
                <torusGeometry args={[1, 0.1, 24, 48]} />
                <meshStandardMaterial color={'teal'} opacity={0.5} transparent />
            </mesh>

            <Timestamp positionX={1.0} positionZ={1.0} name="9:00" stampColor={"magenta"}/>
            {/* <Timestamp positionX={7.0} positionZ={1.0} name="15:00" stampColor={"rgb(240, 240, 240)"} /> */}
        </>
    )
}

export default Scene7