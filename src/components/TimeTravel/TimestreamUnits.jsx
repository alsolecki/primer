import React from 'react'
import TimeUnitCurved from './TimeUnitCurved'

const TimestreamUnits = ( { hue1, hue2, hue3, hue4, hue5, hue6, hue7, hue8, hue9, hue10, hue11 } ) => {
    return (
        <group
            scale={[1.25, 1, 1.07]}
            position={[-2, -1.5, -0.5]}
            rotation={[Math.PI * 0.25, 0, 0]}
        >

            <TimeUnitCurved
                color={hue1}
                opacity={0.5}
                positionX={7.5}
                positionZ={-2.5}
                rotationX={1.0}
                rotationZ={0.5}
            />

            <TimeUnitCurved
                color={hue2}
                opacity={0.5}
                positionX={7.3}
                positionZ={-3.5}
                rotationX={0.9}
                rotationZ={0.5}
            />

            <TimeUnitCurved
                color={hue3}
                opacity={0.5}
                positionX={6.8}
                positionZ={-4.4}
                rotationX={0.8}
                rotationZ={0.5}
            />

            <TimeUnitCurved
                color={hue4}
                opacity={0.5}
                positionX={6.1}
                positionZ={-5.1}
                rotationX={0.7}
                rotationZ={0.5}
            />

            <TimeUnitCurved
                color={hue5}
                opacity={0.5}
                positionX={5.2}
                positionZ={-5.6}
                rotationX={0.6}
                rotationZ={0.5}
            />

            <TimeUnitCurved
                color={hue6}
                opacity={0.5}
                positionX={4.2}
                positionZ={-5.8}
                rotationX={0.5}
                rotationZ={0.5}
            />

            <TimeUnitCurved
                color={hue7}
                opacity={0.5}
                positionX={3.2}
                positionZ={-5.6}
                rotationX={0.4}
                rotationZ={0.5}
            />

            <TimeUnitCurved
                color={hue8}
                opacity={0.5}
                positionX={2.3}
                positionZ={-5.1}
                rotationX={0.3}
                rotationZ={0.5}
            />

            <TimeUnitCurved
                color={hue9}
                opacity={0.5}
                positionX={1.6}
                positionZ={-4.4}
                rotationX={0.2}
                rotationZ={0.5}
            />

            <TimeUnitCurved
                color={hue10}
                opacity={0.5}
                positionX={1.1}
                positionZ={-3.5}
                rotationX={0.1}
                rotationZ={0.5}
            />

            <TimeUnitCurved
                color={hue11}
                opacity={0.5}
                positionX={1.0}
                positionZ={-2.5}
                rotationX={0.0}
                rotationZ={0.5}
            />
        </group>
    )
}

export default TimestreamUnits