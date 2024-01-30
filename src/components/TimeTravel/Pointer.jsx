import React from 'react'
import { Text } from "@react-three/drei"

const Pointer = ({ positionX, positionZ, positionY, stampColor }) => {

    return (
    
        <mesh
            rotation={[0, Math.PI * 0.5, 0]}
            position={[positionX, positionY, positionZ ]}
        >
            <boxGeometry args={[4.5, 0.05, 0.05]} />
            <meshStandardMaterial
                color={ stampColor }
                opacity={0.75}
                transparent
            />
        </mesh>
        
    )
}

export default Pointer