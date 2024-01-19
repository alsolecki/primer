import React, { useRef, useState } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

const EventOrb1 = ({ step }) => {


    const [clicked, setClicked] = useState(false)
    const markerRef = useRef()
    const vec = new THREE.Vector3()

    // useFrame(state => {
    //     if (clicked) {
    //             console.log('orb1 clicked')
    //             // console.log(markerRef.current.position)
    //             state.camera.position.lerp(vec.set(-5, 5, 5), 0.1)
    //             state.camera.lookAt([-4, 0, -2])
    //             state.camera.updateProjectionMatrix()
    //     }
    //     return null;
    // })


    return (
        <mesh
            ref={markerRef}
            scale={step === 'step1' ? 0.75 : 0.35}
            onClick={() => 
                { 
                setClicked(!clicked) 
                setTimeout(()=>{ setClicked(false) }, 500)
                }}
            position={[-4, 0, -2]}
            style={{

            }}
        >
            <sphereGeometry />
            <meshStandardMaterial color={step === 'step1' ? 'limegreen' : 'red'} />
            {/* {hovered ? <Html
                position={[0, 3, 0]}
                wrapperClass="label"
                center
                distanceFactor={5}
            > {html}</Html> : null} */}
        </mesh>
    )
}

export default EventOrb1