import React from 'react'

const TimeUnit = ({color, opacity, positionX}) => {
    return (
        <mesh
            position={[positionX + 0.5, 0, -2]}
            rotation={[Math.PI * 0.5, 0, 0]}
        >
            <boxGeometry args={[1.0, 0.15, 0.1]} />
            <meshStandardMaterial color={color} opacity={opacity} transparent />
        </mesh>
    )
}

export default TimeUnit