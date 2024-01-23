import React from 'react'
import { Text } from "@react-three/drei"

const Timestamp = ({ positionX, positionZ, name }) => {
    return (
        <>
            <Text
                font="./acme-v25-latin-regular.woff"
                fontSize={0.65}
                color="cornflowerblue"
                position={[positionX, 0.75, -3.75]}
                rotation={[0, Math.PI * -0.5, 0]}
            >
                {name}
            </Text>
            <mesh
                rotation={[0, Math.PI * 0.5, 0]}
                position={[positionX, 0, positionZ ]}
            >
                <boxGeometry args={[2.5, 0.15, 0.10]} />
                <meshStandardMaterial
                    color={'cornflowerblue'}
                    opacity={0.5}
                    transparent
                />
            </mesh>
        </>
    )
}

export default Timestamp