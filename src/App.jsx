import React, { useState, StrictMode } from 'react'
import './App.css'
import './components/Cast.css'
import { Canvas } from '@react-three/fiber'

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


function App() {

  const [ step , setStep ] = useState('step1');

  const cameraPosition0 = { fov: 60, near: 0.1, far: 300, position: [- 7, 12, 9] }
  const cameraPosition1 = { fov: 45, near: 0.1, far: 300, position: [- 5, 5, 5] }
 


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


        <div className="button-bank">
          <ul>
            <li 
              onClick={() => setStep('step1')}
              style={ step === 'step1' ? { backgroundColor: 'limegreen'} : null }
            >1</li>
            <li 
              onClick={() => setStep('step2')}
              style={ step === 'step2' ? { backgroundColor: 'limegreen'} : null }
            >2</li>
            <li 
              onClick={() => setStep('step3')}
              style={ step === 'step3' ? { backgroundColor: 'limegreen'} : null }
            >3</li>
            <li 
              onClick={() => setStep('step4')}
              style={ step === 'step4' ? { backgroundColor: 'limegreen'} : null }
            >4</li>
            <li 
              onClick={() => setStep('step5')}
              style={ step === 'step5' ? { backgroundColor: 'limegreen'} : null }
            >5</li>
            <li 
              onClick={() => setStep('step6')}
              style={ step === 'step6' ? { backgroundColor: 'limegreen'} : null }
            >6</li>
            <li 
              onClick={() => setStep('step7')}
              style={ step === 'step7' ? { backgroundColor: 'limegreen'} : null }
            >7</li>
            <li 
              onClick={() => setStep('step8')}
              style={ step === 'step8' ? { backgroundColor: 'limegreen'} : null }
            >8</li>
            <li 
              onClick={() => setStep('step9')}
              style={ step === 'step9' ? { backgroundColor: 'limegreen'} : null }
            >9</li>
          </ul>
        </div>

        <StrictMode>
          <Canvas
            camera={ cameraPosition0 }
            style={{ height: '26rem'}}
          >
            <TimeTravel step={ step }/>
          </Canvas>
        </StrictMode>

        <div className="text-window">
          <p>{ step === 'step1' ? 'Original person on undisturbed timeline decides to time-travel' : null }</p>
          <p>{ step === 'step2' ? 'He activates a delayed switch and leaves the area to avoid encountering his double' : null }</p>
          <p>{ step === 'step3' ? 'The machine starts and the double exits, thus creating a new timeline' : null }</p>
          <p>{ step === 'step4' ? 'Original checks stock price moves, avoids causative action, and prepares for entry into the box.' : null }</p>
          <p>{ step === 'step5' ? 'Original enters the box, joining the looped timestream active inside.' : null }</p>
          <p>{ step === 'step6' ? 'Original waits out 6 hours of subjective time as he travels into the past, becoming his double' : null }</p>
          <p>{ step === 'step7' ? 'Double has 6 hour of casual influence on both his new timeline and his original timeline.' : null }</p>
          <p>{ step === 'step8' ? 'Period of time when Original and Double exists ends as the Original enters the box.' : null }</p>
          <p>{ step === 'step9' ? 'Double has created an altered future for the double alone. The original loses his existance in the timeloop; his future is only to enter the box.  ' : null }</p>
        </div>



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
