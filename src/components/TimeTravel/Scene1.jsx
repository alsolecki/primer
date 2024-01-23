import React from 'react'
import Timeline from './Timeline.jsx'
import EventOrb1 from './EventOrb1.jsx'

const Scene1 = ({ step }) => {
    return (
        <>
            <Timeline name="TimelineOne" position={[0, 0, -2]} />

            <EventOrb1 step={step} />
        </>
    )
}

export default Scene1