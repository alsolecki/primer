import React from 'react'

const TimeUnit = ({color, opacity, positionX}) => {
    return (
        <mesh
            position={[positionX + 0.5, 0, -2]}
            rotation={[Math.PI * 0.5, 0, -Math.PI * 0.5]}
        >
            <cylinderGeometry args={[0.05, 0.15, 1, 32]} />
            <meshStandardMaterial color={color} opacity={opacity} transparent />
        </mesh>
    )
}

export default TimeUnit