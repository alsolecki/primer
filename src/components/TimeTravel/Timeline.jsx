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
                fontSize={1.2}
                color="grey"
                position={[-4, -2, 0]}
            >
                { name }
            </Text>
            <mesh>
                <boxGeometry args={[14, 3, 0.10]} />
                <meshStandardMaterial opacity={0.5} transparent />
            </mesh>
        </group>
    )
}

export default Timeline