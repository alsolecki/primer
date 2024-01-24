import React, {useRef} from 'react'
import Timeline from './Timeline.jsx'
import EventOrb1 from './EventOrb1.jsx'
import EventOrb2 from './EventOrb2.jsx'
import EventOrb3 from './EventOrb3.jsx'
import EventOrb4 from './EventOrb4.jsx'
import Timestamp from './Timestamp.jsx'
import { useFrame } from '@react-three/fiber'

const Scene4 = ({ step }) => {

    const torus1 = useRef()

    useFrame((state, delta) => {
        // torus1.current.rotation.y += delta * 0.05
    })

    return (
        <>
            <Timeline name="TimelineOne" position={[0, 0, -2]} />

            {/* <EventOrb1 step={step} />
            <EventOrb2 step={step} /> */}
            {/* <EventOrb3 step={step} /> */}
            <EventOrb4 step={step} />

            <mesh position={[0, 0, -1.9]} rotation={[Math.PI * 0.5, 0, 0]}>
                <boxGeometry args={[7.75, 0.5, 0.10]} />
                <meshStandardMaterial color={'red'} opacity={0.5} transparent />
            </mesh>

            <mesh ref={torus1} position={[1, 0, -2]}>
                <torusGeometry args={[1, 0.1, 24, 48]} />
                <meshStandardMaterial color={'teal'} opacity={0.5} transparent />
            </mesh>

            <Timestamp positionX={-4.0} positionZ={1.0} name="start" stampColor={"rgb(240, 240, 240)"}/>
            <Timestamp positionX={-0.5} positionZ={1.0} name="8:45"  stampColor={"rgb(240, 240, 240)"}/>
            <Timestamp positionX={1.0} positionZ={1.0} name="9:00" stampColor={"rgb(240, 240, 240)"}/>
            <Timestamp positionX={4.0} positionZ={1.0} name="12:00" stampColor={"magenta"}/>
        </>
    )
}

export default Scene4