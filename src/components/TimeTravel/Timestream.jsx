import React from 'react'
import { Html, Text } from "@react-three/drei"


const Timestream = () => {
    return (
        <>
            <mesh
                position={[4.0, 0, -2]}
                rotation={[- Math.PI * 0.25, 0, 0]}
                scale={[1, 1, 1]}
            >
                <ringGeometry args={[2.75, 3.0, 32, 1, 0, 3.14]}
                />
                <meshStandardMaterial color="teal" transparent opacity={.25} />
            </mesh>

            <mesh
                position={[4.0, 0, -2]}
                rotation={[- Math.PI * 0.25, 0, 0]}
                scale={[1, 1, 1]}
            >
                <ringGeometry args={[5.0, 5.25, 32, 1, 0, 3.14]}
                />
                <meshStandardMaterial color="teal" transparent opacity={.25} />
            </mesh>


            <group rotation={[-Math.PI * 0.25, 0, 0]}>
                 <Text
                font="./acme-v25-latin-regular.woff"
                fontSize={0.55}
                color="teal"
                position={[4, 7, -1.5]}
            >
                {'Active Looped Timestream'}
            </Text>
            </group>
           
        </>


    )
}

export default Timestream