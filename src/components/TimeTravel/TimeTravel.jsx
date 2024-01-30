import React, { useRef, useState } from 'react'
import { MeshReflectorMaterial, Float, Text, Html, TransformControls, OrbitControls, PivotControls } from "@react-three/drei"
import { useFrame } from '@react-three/fiber'

import Scene1 from './Scene1.jsx'
import Scene2 from './Scene2.jsx'
import Scene3 from './Scene3.jsx'
import Scene4 from './Scene4.jsx'
import Scene5 from './Scene5.jsx'
import Scene6 from './Scene6.jsx'
import Scene7 from './Scene7.jsx'
import Scene8 from './Scene8.jsx'
import Scene9 from './Scene9.jsx'

const TimeTravel = ({ step }) => {

    return (

        <group position={[-4, 0, 0]}>

            <directionalLight position={[1, 2, 3]} intensity={4.5} />
            <ambientLight intensity={1.5} />

            {step === 'step1' ? <Scene1 step={step} /> : null}
            {step === 'step2' ? <Scene2 step={step} /> : null}
            {step === 'step3' ? <Scene3 step={step} /> : null}
            {step === 'step4' ? <Scene4 step={step} /> : null}
            {step === 'step5' ? <Scene5 step={step} /> : null}
            {step === 'step6' ? <Scene6 step={step} /> : null}
            {step === 'step7' ? <Scene7 step={step} /> : null}
            {step === 'step8' ? <Scene8 step={step} /> : null}
            {step === 'step9' ? <Scene9 step={step} /> : null}

        </group>

    )
}

export default TimeTravel