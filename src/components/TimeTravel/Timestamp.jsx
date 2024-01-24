import React from 'react'
import { Text } from "@react-three/drei"

const Timestamp = ({ positionX, positionZ, name, stampColor }) => {
    return (
        <>
            <Text
                font="./acme-v25-latin-regular.woff"
                fontSize={1.0}
                color={ stampColor }
                position={[(positionX) , 0.5, 3.5]}
                rotation={[0, Math.PI * -0.5, 0]}
            >
                {name}
            </Text>
            <mesh
                rotation={[0, Math.PI * 0.5, 0]}
                position={[positionX, -0.15, positionZ ]}
            >
                <boxGeometry args={[6.5, 0.15, 0.10]} />
                <meshStandardMaterial
                    color={ stampColor }
                    opacity={0.75}
                    transparent
                />
            </mesh>
        </>
    )
}

export default Timestamp