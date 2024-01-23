import React from 'react'
import Timeline from './Timeline.jsx'
import EventOrb2 from './EventOrb2.jsx'
import EventOrb1 from './EventOrb1.jsx'
import Timestamp from './Timestamp.jsx'

const Scene2 = ({ step }) => {
    return (
        <>
            <Timeline name="TimelineOne" position={[0, 0, -2]} />

            {/* <EventOrb1 step={step} /> */}
            <EventOrb2 step={step} />

            <mesh 
                position={[-2.25, 0, -1.9]}
                rotation={[Math.PI * 0.5, 0, 0]}
            >
                <boxGeometry args={[3.75, 0.5, 0.10]} />
                <meshStandardMaterial color={'red'} opacity={0.5} transparent />
            </mesh>
            <Timestamp positionX={-0.5} positionZ={-3.0} name="8:45"/>
        </>
    )
}

export default Scene2