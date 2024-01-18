import React from 'react'
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import { Text } from "@react-three/drei"
import { useLoader } from '@react-three/fiber'

const Timeline = ( { name, position }) => {

    const timeline1Texture = useLoader(TextureLoader, '/timelines/primerTimeline02.png')

    return (
        <group position={position}>
            <Text
                font="./acme-v25-latin-regular.woff"
                fontSize={1.25}
                color="grey"
                position={[-4, -2, 0]}
            >
                { name }
            </Text>
            <mesh position={[2, 0, 0]} rotation-x={0} scale={[14, 2.5, 0]}>
                <planeGeometry />
                <meshStandardMaterial map={timeline1Texture} opacity={0.5} transparent />
            </mesh>
        </group>
    )
}

export default Timeline