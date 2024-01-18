import React, { useRef } from 'react'
import { MeshReflectorMaterial, Float, Text, Html, TransformControls, OrbitControls, PivotControls } from "@react-three/drei"
import { useFrame } from '@react-three/fiber'
import Timeline from './Timeline.jsx'
import * as THREE from 'three'


import EventOrb1 from './EventOrb1.jsx'
import EventOrb2 from './EventOrb2.jsx'
import EventOrb3 from './EventOrb3.jsx'
import EventOrb4 from './EventOrb4.jsx'
import EventOrb5 from './EventOrb5.jsx'
import EventOrb6 from './EventOrb6.jsx'
import EventOrb7 from './EventOrb7.jsx'
import EventOrb8 from './EventOrb8.jsx'
import EventOrb9 from './EventOrb9.jsx'

const TimeTravel = ({ step }) => {

    const sphere1 = useRef()
    const cubeRef = useRef()
    const groupRef = useRef()

    const stepPosition1 = [-4, 0, -2]
    const vec = new THREE.Vector3()

    useFrame((state) => {
        if (step === 'step1') {
            state.camera.lookAt(-4, 0, -2)
            state.camera.position.lerp(vec.set(-4, 0, -2), .001)
            state.camera.updateProjectionMatrix
        } else if (step === 'step2') {
            state.camera.lookAt(-0.5, 0, -2)
            state.camera.position.lerp(vec.set(-0.5, 0, -2), .001)
            state.camera.updateProjectionMatrix
        }

    })
    

    console.log(step)

    // Animations 

    useFrame((state, delta) => {
        // const angle = state.clock.elapsedTime * 0.5
        // state.camera.position.x = (angle) * 0.25
        // state.camera.position.x = Math.sin(angle) * 8
        // state.camera.position.z = Math.cos(angle) * 8
        // console.log(sphere1.current.position)
        state.camera.lookAt(-4, 0, -2)

        // sphere1.current.position.x += delta * 0.1
    })


    return (
        <>
            <OrbitControls makeDefault />

            <directionalLight position={[1, 2, 3]} intensity={4.5} />
            <ambientLight intensity={1.5} />


            <Timeline name="TimelineOne" position={[0, 0, -2]} />

            <EventOrb1 step={step}/>
            <EventOrb2 step={step}/>
            <EventOrb3 step={step}/>
            <EventOrb4 step={step}/>
            <EventOrb5 step={step}/>
            <EventOrb6 step={step}/>
            <EventOrb7 step={step}/>
            <EventOrb8 step={step}/>
            <EventOrb9 step={step}/>

            {/* <EventOrb step={step} position={[-4, 0, -2]} color="red" html={"Original person on undisturbed timeline decides to time-travel"} /> */}
            {/* <EventOrb step={step} position={[-0.5, 0, -2]} color="red" html={"He activates a delayed switch and leaves the area to avoid encountering his double"} /> */}
            {/* <EventOrb step={step} position={[1, 0, -2]} color="purple" html={"The machine starts and the double exits, thus creating a new timeline"} /> */}
            {/* <EventOrb step={step} position={[4, 0, -2]} color="red" html={"Original checks stock price moves, avoids causative action, and prepares for entry into the box."} /> */}
            {/* <EventOrb step={step} position={[7, 0, -2]} color="red" html={"Original enters the box, joinging the looped timestream active inside."} /> */}
            {/* <EventOrb step={step} position={[4, 3, -4]} color="red" html={"Original waits out 6 hours of subjective time as he travels into the past, becoming his double"} /> */}
            {/* <EventOrb step={step} position={[1, 0, 1]} color="blue" /> */}
            {/* <EventOrb step={step} position={[7, 0, 1]} color="blue" /> */}
            {/* <EventOrb step={step} position={[10, 0, 1]} color="blue" /> */}

            <mesh
                position={[1, 0, -0.75]}
                scale={[1, 1, 1]}
                rotation={[- Math.PI * 0.5, 0, 0]}
            >
                <planeGeometry args={[0.75, 3]}
                />
                <meshStandardMaterial color="teal" />
            </mesh>

            <mesh
                position={[4, 0, -2]}
                rotation={[- Math.PI * 0.25, 0, 0]}
                scale={[1, 1.25, 1]}
            >
                <ringGeometry args={[2.75, 3.5, 32, 1, 0, 3.14]}
                />
                <meshStandardMaterial color="teal" />
            </mesh>


            {/* <Float
                speed={5}
                floatIntensity={2}
            >
                <mesh
                    position={[1, 1, 1]}
                    color={'red'}
                >
                    <boxGeometry />
                    <meshStandardMaterial color={'green'} />
                </mesh>
            </Float> */}

            <Timeline
                name="TimelineTwo"
                position={[3, 0, 1]}
            />

            <mesh
                position={[4, 0, -0.5]}
            >
                <boxGeometry args={[5.5, 1.5, 2.5]} />
                <meshStandardMaterial color="blue" opacity={0.25} transparent />
            </mesh>

        </>
    )
}

export default TimeTravel