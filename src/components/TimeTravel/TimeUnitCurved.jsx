import React from 'react'

const TimeUnitCurved = ({color, opacity, positionX, positionZ, rotationX, rotationZ}) => {
    return (
        <mesh
            position={[ positionX + 0.5, 0, positionZ ]}
            rotation={[Math.PI * rotationZ, 0, Math.PI * rotationX ]}
        >
            <cylinderGeometry args={[0.05, 0.15, 1, 32]} />
            <meshStandardMaterial color={color} opacity={opacity} transparent />
        </mesh>
    )
}

export default TimeUnitCurved