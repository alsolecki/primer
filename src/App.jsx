import React, { useState, StrictMode } from 'react'
import './App.css'
import './components/Cast.css'
import { Canvas } from '@react-three/fiber'
import { PresentationControls } from '@react-three/drei'

import ColorCodes from './components/ColorCodes.jsx'
import EventSet01 from './components/EventSets/EventSet01.jsx'
import EventSet02 from './components/EventSets/EventSet02.jsx'
import EventSet03 from './components/EventSets/EventSet03.jsx'
import EventSet04 from './components/EventSets/EventSet04.jsx'
import EventSet05 from './components/EventSets/EventSet05.jsx'
import EventSet06 from './components/EventSets/EventSet06.jsx'
import EventSet07 from './components/EventSets/EventSet07.jsx'
import EventSet08 from './components/EventSets/EventSet08.jsx'
import EventSet09 from './components/EventSets/EventSet09.jsx'
import EventSet10 from './components/EventSets/EventSet10.jsx'
import EventSet11 from './components/EventSets/EventSet11.jsx'
import TimelineNotes from './components/TimelineNotes.jsx'
import timeline from '/primerTimelineNoted.png'
import diagram from '/Time_Travel_Method-2.svg'
import Cast from './components/Cast.jsx'
import Hero from './components/Hero.jsx'
import TimeTravel from './components/TimeTravel/TimeTravel.jsx'
import { PerspectiveCamera } from 'three'
import ButtonBank from './components/ButtonBank.jsx'


function App() {

  const [step, setStep] = useState('step1');

  const cameraPosition0 = { fov: 50, near: 0.1, far: 300, position: [-3, 13, 13] }

  return (
    <>
      <div className="wrapper">

        <Hero />
        <Cast />

        <img
          src={diagram} alt="timetravel diagram"
          style={{
            width: '100%'
          }}
        />

        <ButtonBank step={step} setStep={setStep} />


        <StrictMode>

          <Canvas
            camera={cameraPosition0}
            style={{ height: '26rem' }}
          >
            <PresentationControls
              global
              config={{ mass: 2, tension: 500 }}
              snap={{ mass: 4, tension: 1500 }}
              rotation={[0, 0.3, 0]}
              polar={[-Math.PI / 3, Math.PI / 3]}
              azimuth={[-Math.PI / 1.4, Math.PI / 2]}>
              <TimeTravel step={step} />
            </PresentationControls>
          </Canvas>
        </StrictMode>

        <TimelineNotes />

        <img
          src={timeline} alt="primer timeline"
          style={{
            width: '100%'
          }}
        />


        <ColorCodes />

        <EventSet01 />
        <EventSet02 />
        <EventSet03 />
        <EventSet04 />
        <EventSet05 />
        <EventSet06 />
        <EventSet07 />
        <EventSet08 />
        <EventSet09 />
        <EventSet10 />
        <EventSet11 />

      </div>
    </>

  )
}

export default App
