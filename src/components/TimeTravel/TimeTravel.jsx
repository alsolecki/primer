import React, { useRef } from 'react'
import { MeshReflectorMaterial, Float, Text, Html, TransformControls, OrbitControls, PivotControls } from "@react-three/drei"
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import * as THREE from 'three'
import { useLoader } from '@react-three/fiber'

const TimeTravel = () => {

    const sphere1 = useRef()

    const timeline1Texture = useLoader(TextureLoader, '/timelines/primerTimeline01.png')

    return (
        <>

            <OrbitControls makeDefault />

            <directionalLight position={[1, 2, 3]} intensity={4.5} />
            <ambientLight intensity={1.5} />


            <group position={[0, 0, -2]}>
                <Text
                    font="./acme-v25-latin-regular.woff"
                    fontSize={1.25}
                    color="grey"
                    position={[-6, -2, 0]}
                >
                    Timeline 1
                </Text>
                <mesh position={[0, 0, 0]} rotation-x={0} scale={[16, 2.5, 0]}>
                    <planeGeometry />
                    <meshStandardMaterial map={timeline1Texture} opacity={0.5} transparent />
                </mesh>
            </group>


            <mesh ref={sphere1} position={[-5, 0, -2]} scale={0.5}>
                <sphereGeometry />
                <meshStandardMaterial color="red" />
                <Html
                    position={[0, 3, 0]}
                    wrapperClass="label"
                    center
                    distanceFactor={5}
                > Original person on undisturbed timeline decides to time-travel</Html>
            </mesh>

            <mesh ref={sphere1} position={[-2, 0, -2]} scale={0.5}>
                <sphereGeometry />
                <meshStandardMaterial color="red" />
                <Html
                    position={[0, 3, 0]}
                    wrapperClass="label"
                    center
                    distanceFactor={5}
                > He activates a delayed switch and leaves the area to avoid encountering his double</Html>
            </mesh>


            <mesh ref={sphere1} position={[1, 0, -2]} scale={0.5}>
                <sphereGeometry />
                <meshStandardMaterial color="purple" />
                <Html
                    position={[0, 3, 0]}
                    wrapperClass="label"
                    center
                    distanceFactor={5}
                > The machine starts and the double exits, thus creating a new timeline</Html>
            </mesh>

            <mesh ref={sphere1} position={[4, 0, -2]} scale={0.5}>
                <sphereGeometry />
                <meshStandardMaterial color="red" />
                <Html
                    position={[0, 3, 0]}
                    wrapperClass="label"
                    center
                    distanceFactor={5}
                > Original checks stock price moves, avoids causative action, and prepares for entry into the box.</Html>
            </mesh>


            <mesh ref={sphere1} position={[7, 0, -2]} scale={0.5}>
                <sphereGeometry />
                <meshStandardMaterial color="red" />
                <Html
                    position={[0, 3, 0]}
                    wrapperClass="label"
                    center
                    distanceFactor={5}
                > Original enters the box, joinging the <strong>looped timestream</strong> active inside.</Html>
            </mesh>

            <mesh ref={sphere1} position={[4, 3, -4]} scale={0.5}>
                <sphereGeometry />
                <meshStandardMaterial color="teal" />
                <Html
                    position={[0, 3, 0]}
                    wrapperClass="label"
                    center
                    distanceFactor={5}
                > Original waits out 6 hours of subjective time as he travels into the past, becoming his double</Html>
            </mesh>



            <mesh ref={sphere1} position={[1, 0, 1]} scale={0.5}>
                <sphereGeometry />
                <meshStandardMaterial color="blue" />
                <Html
                    position={[0, -4, 0]}
                    wrapperClass="label"
                    center
                    distanceFactor={5}
                > The Double has 6 hours of casual influence on both his and new timeline and his original timeline</Html>
            </mesh>


            <mesh ref={sphere1} position={[7, 0, 1]} scale={0.5}>
                <sphereGeometry />
                <meshStandardMaterial color="blue" />
                <Html
                    position={[0, -4, 0]}
                    wrapperClass="label"
                    center
                    distanceFactor={5}
                > The Double has 6 hours of casual influence on both his and new timeline and his original timeline</Html>
            </mesh>


            <mesh
                position={[1, 0, -1]}
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



            <group position={[0, 0, 1]}>
                <Text
                    font="./acme-v25-latin-regular.woff"
                    fontSize={1.25}
                    color="grey"
                    position={[-6, -2, 0]}
                >
                    Timeline 2
                </Text>
                <mesh position={[1, 0, 0]} rotation-x={0} scale={[16, 2.5, 0]}>
                    <planeGeometry />
                    <meshStandardMaterial map={timeline1Texture} opacity={0.5} transparent />
                </mesh>
            </group>

            <mesh
                position={[4, 0, 0]}
            >
                <boxGeometry args={[6, 1, 3]} />
                <meshStandardMaterial color="blue" opacity={0.25} transparent />
            </mesh>

        </>
    )
}

export default TimeTravel