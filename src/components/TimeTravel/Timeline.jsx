import React from 'react'
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import { Text } from "@react-three/drei"
import { useLoader } from '@react-three/fiber'

const Timeline = ({ name, position }) => {

    const timeline1Texture = useLoader(TextureLoader, '/timelines/primerTimeline02.png')

    return (
        <group position={position}>
            <Text
                font="./acme-v25-latin-regular.woff"
                fontSize={0.9}
                color="white"
                position={[2, -2, 0]}
            >
                {name}
            </Text>

            <group position={[0, 0, 0]} > 
                <mesh position={[0, 0, 0]}>
                    <boxGeometry args={[1, 3, 0.10]} />
                    <meshStandardMaterial opacity={0.5} transparent />
                </mesh>
                <mesh position={[1, 0, 0]}>
                    <boxGeometry args={[1, 3, 0.10]} />
                    <meshStandardMaterial opacity={0.5} transparent />
                </mesh>
                <mesh position={[2, 0, 0]}>
                    <boxGeometry args={[1, 3, 0.10]} />
                    <meshStandardMaterial opacity={0.5} transparent />
                </mesh>
                <mesh position={[3, 0, 0]}>
                    <boxGeometry args={[1, 3, 0.10]} />
                    <meshStandardMaterial opacity={0.5} transparent />
                </mesh>
                <mesh position={[4, 0, 0]}>
                    <boxGeometry args={[1, 3, 0.10]} />
                    <meshStandardMaterial opacity={0.5} transparent />
                </mesh>
                <mesh position={[5, 0, 0]}>
                    <boxGeometry args={[1, 3, 0.10]} />
                    <meshStandardMaterial opacity={0.5} transparent />
                </mesh>
                <mesh position={[6, 0, 0]}>
                    <boxGeometry args={[1, 3, 0.10]} />
                    <meshStandardMaterial opacity={0.5} transparent />
                </mesh>
                <mesh position={[7, 0, 0]}>
                    <boxGeometry args={[1, 3, 0.10]} />
                    <meshStandardMaterial opacity={0.5} transparent />
                </mesh>
                <mesh position={[8, 0, 0]}>
                    <boxGeometry args={[1, 3, 0.10]} />
                    <meshStandardMaterial opacity={0.5} transparent />
                </mesh>
                <mesh position={[9, 0, 0]}>
                    <boxGeometry args={[1, 3, 0.10]} />
                    <meshStandardMaterial opacity={0.5} transparent />
                </mesh>
                <mesh position={[10, 0, 0]}>
                    <boxGeometry args={[1, 3, 0.10]} />
                    <meshStandardMaterial opacity={0.5} transparent />
                </mesh>
                <mesh position={[11, 0, 0]}>
                    <boxGeometry args={[1, 3, 0.10]} />
                    <meshStandardMaterial opacity={0.5} transparent />
                </mesh>
                <mesh position={[12, 0, 0]}>
                    <boxGeometry args={[1, 3, 0.10]} />
                    <meshStandardMaterial opacity={0.5} transparent />
                </mesh>
            </group>

        </group>
    )
}

export default Timeline