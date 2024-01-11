import React, { useRef } from 'react'
import { MeshReflectorMaterial, Float, Text, Html, TransformControls, OrbitControls, PivotControls } from "@react-three/drei"
import * as THREE from 'three'
import { button, useControls } from 'leva'

const TimeTravel = () => {

    const cube = useRef()

    const { position, color, visible } = useControls('cube', {
        position:
        {
            value: { x: - 2, y: 0, z: 0 },
            step: 0.01
        },
        color: '#ff0000',
        visible: true,
        clickMe: button(() => { console.log('clicked') }),
        choice: { options: ['a', 'b', 'c'] }
    })

    return (
        <>

            <OrbitControls makeDefault />

            <directionalLight position={[1, 2, 3]} intensity={4.5} />
            <ambientLight intensity={1.5} />



            <mesh position-x={2} scale={1.5}>
                <boxGeometry />
                <meshStandardMaterial color="mediumpurple" />
            </mesh>



            <mesh ref={cube} position-x={2} position-y={3} scale={0.5}>
                <boxGeometry />
                <meshStandardMaterial color="blue" />
            </mesh>
            <TransformControls object={cube} mode="translate" />



            <mesh position-x={-4} scale={0.75}>
                <sphereGeometry />
                <meshStandardMaterial color="green" />
                <Html
                    position={[1, 1, 0]}
                    wrapperClass="label"
                    center
                    distanceFactor={8}
                > This is a green sphere</Html>
            </mesh>




            <Float
                speed={5}
                floatIntensity={2}
            >
                <mesh
                    visible={visible}
                    position={[position.x, position.y, position.z]}
                    color={color}
                >
                    <boxGeometry />
                    <meshStandardMaterial color={color} />
                </mesh>
            </Float>

            <group position={[0, 0, -2]}>
                <Text
                    font="./acme-v25-latin-regular.woff"
                    fontSize={1.25}
                    color="grey"
                    position={[-3.5, 4.5, 0]}
                >
                    Timeline 1
                </Text>
                <mesh position={[0, 0, 0]} rotation-x={0} scale={[12, 8, 0]}>
                    <planeGeometry />
                    <meshStandardMaterial color='grey' />
                </mesh>
            </group>

        </>
    )
}

export default TimeTravel