import React from 'react'

const Timestream = () => {
    return (
        <mesh
            position={[4, 0, -2]}
            rotation={[- Math.PI * 0.25, 0, 0]}
            scale={[1, 1.25, 1]}
        >
            <ringGeometry args={[2.75, 3.5, 32, 1, 0, 3.14]}
            />
            <meshStandardMaterial color="teal" transparent opacity={.5} />
        </mesh>
    )
}

export default Timestream