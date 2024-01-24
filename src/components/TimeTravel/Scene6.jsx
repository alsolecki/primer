import React, {useRef} from 'react'
import { useFrame } from '@react-three/fiber'
import Timeline from './Timeline.jsx'
import EventOrb6 from './EventOrb6.jsx'
import EventOrb5 from './EventOrb5.jsx'
import EventOrb4 from './EventOrb4.jsx'
import EventOrb3 from './EventOrb3.jsx'
import EventOrb2 from './EventOrb2.jsx'
import EventOrb1 from './EventOrb1.jsx'
import Timestream from './Timestream.jsx'
import Timestamp from './Timestamp.jsx'

const Scene6 = ({ step }) => {

    const torus1 = useRef()
    const torus3 = useRef()

    useFrame((state, delta) => {
        torus1.current.rotation.y += delta * 2
        torus3.current.rotation.y += delta * 2
    })

    return (
        <>
            <Timeline name="TimelineOne" position={[0, 0, -2]} />

            {/* <EventOrb1 step={step} /> */}
            {/* <EventOrb1 step={step} /> */}
            {/* <EventOrb2 step={step} /> */}
            {/* <EventOrb3 step={step} /> */}
            {/* <EventOrb4 step={step} /> */}
            {/* <EventOrb5 step={step} /> */}
            <EventOrb6 step={step} />

            <mesh position={[1.5, 0, -1.9]} rotation={[Math.PI * 0.5, 0, 0]}>
                <boxGeometry args={[10.75, 0.5, 0.10]} />
                <meshStandardMaterial color={'red'} opacity={0.5} transparent />
            </mesh>

            <Timestream />

            <mesh ref={torus1} position={[1, 0, -2]}>
                <torusGeometry args={[1, 0.1, 24, 48]} />
                <meshStandardMaterial color={'teal'} opacity={0.5} transparent />
            </mesh>

            <mesh ref={torus3} position={[7, 0, -2]}>
                <torusGeometry args={[1, 0.1, 24, 48]} />
                <meshStandardMaterial color={'teal'} opacity={0.5} transparent />
            </mesh>

            <Timestamp positionX={1.0} positionZ={1.0} name="9:00" stampColor={"rgb(240, 240, 240)"}/>
            <Timestamp positionX={4.0} positionZ={1.0} name="traveling" stampColor={"magenta"}/>
            <Timestamp positionX={7.0} positionZ={1.0} name="15:00" stampColor={"rgb(240, 240, 240)"}/>
        </>
    )
}

export default Scene6