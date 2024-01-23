import React, { useRef, useState } from 'react'
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
import Scene1 from './Scene1.jsx'
import Scene2 from './Scene2.jsx'
import Scene3 from './Scene3.jsx'
import Scene4 from './Scene4.jsx'
import Scene5 from './Scene5.jsx'
import Scene6 from './Scene6.jsx'
import Scene7 from './Scene7.jsx'
import Scene8 from './Scene8.jsx'
import Scene9 from './Scene9.jsx'

const TimeTravel = ({ step }) => {

    const sphere1 = useRef()
    const cubeRef = useRef()
    const groupRef = useRef()


    // useFrame((state) => {
    //     if (step === 'step1') {
    //         setTimeout(()=> {
    //             state.camera.lookAt(-4, 0, -2)
    //             state.camera.position.set(- 10, 15, 15)
    //             state.camera.updateProjectionMatrix
    //         }, 500)
    //     } else if (step === 'step2') {
    //         setTimeout(()=> {
    //             state.camera.lookAt(-0.5, 0, -2)
    //             state.camera.position.set(- 7, 15, 15)
    //             state.camera.updateProjectionMatrix
    //         }, 500)
    //     } else if (step === 'step3') {
    //         setTimeout(()=> {
    //             state.camera.lookAt(-0.5, 0, -2)
    //             state.camera.position.set(- 7, 15, 15)
    //             state.camera.updateProjectionMatrix
    //         }, 500)
    //     }
    //     return null;
    // })


    // Animations 


    useFrame((state, delta) => {
        // const angle = state.clock.elapsedTime * 0.5
        // state.camera.position.x = (angle) * 0.25
        // state.camera.position.x = Math.sin(angle) * 8
        // state.camera.position.z = Math.cos(angle) * 8
        // console.log(state.camera.position)
        // state.camera.lookAt(-0.5, 0, -2)

        // sphere1.current.position.x += delta * 0.1
    })

    const floatSpeed = 5
    const floInt = 1
    const floRange = [-0.1, 0.1]

    return (
        <>
            <OrbitControls makeDefault />

            <directionalLight position={[1, 2, 3]} intensity={4.5} />
            <ambientLight intensity={1.5} />

            {/* <Timeline name="TimelineOne" position={[0, 0, -2]} /> */}

            {step === 'step1' ? <Scene1 step={step} /> : null}
            {step === 'step2' ? <Scene2 step={step} /> : null}
            {step === 'step3' ? <Scene3 step={step} /> : null}
            {step === 'step4' ? <Scene4 step={step} /> : null}
            {step === 'step5' ? <Scene5 step={step} /> : null}
            {step === 'step6' ? <Scene6 step={step} /> : null}
            {step === 'step7' ? <Scene7 step={step} /> : null}
            {step === 'step8' ? <Scene8 step={step} /> : null}
            {step === 'step9' ? <Scene9 step={step} /> : null}

            {/* <EventOrb1 step={step} />
            <EventOrb2 step={step} />
            <EventOrb3 step={step} />
            <EventOrb4 step={step} />
            <EventOrb5 step={step} />
            <EventOrb6 step={step} />
            <EventOrb7 step={step} />
            <EventOrb8 step={step} />
            <EventOrb9 step={step} /> */}

            {/* <mesh
                position={[1, 0, -0.75]}
                scale={[1, 1, 1]}
                rotation={[- Math.PI * 0.5, 0, 0]}
            >
                <planeGeometry args={[0.75, 3]}
                />
                <meshStandardMaterial color="teal" />
            </mesh> */}

            {/* <mesh
                position={[4, 0, -2]}
                rotation={[- Math.PI * 0.25, 0, 0]}
                scale={[1, 1.25, 1]}
            >
                <ringGeometry args={[2.75, 3.5, 32, 1, 0, 3.14]}
                />
                <meshStandardMaterial color="teal" />
            </mesh> */}


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

            {/* <Timeline
                name="TimelineTwo"
                position={[3, 0, 1]}
            /> */}

            {/* <mesh position={[4, 0, -0.5]} >
                <boxGeometry args={[5.5, 1.5, 2.5]} />
                <meshStandardMaterial color="blue" opacity={0.25} transparent />
            </mesh> */}

        </>
    )
}

export default TimeTravel