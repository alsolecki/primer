import React, { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import Timeline from './Timeline.jsx'
import EventOrb1 from './EventOrb1.jsx'
import Timestamp from './Timestamp.jsx'
import * as THREE from 'three'


const Scene1 = ({ step }) => {

    const torus1 = useRef()

    useFrame((state, delta) => {
        // torus1.current.rotation.y += delta * 2
        // state.camera.position.set([-7, 12, 9])
        // console.log(state.camera.position)
    })

    return (
        <>
            <Timeline name="TimelineOne" position={[0, 0, -2]} />

            <EventOrb1 step={step} />

            <Timestamp positionX={-4.0} positionZ={1.0} name="start" stampColor={"magenta"}/>
        </>
    )
}

export default Scene1