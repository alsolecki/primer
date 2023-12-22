import React from 'react'
import './App.css'
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
import Trivia from './components/Trivia.jsx'
import timeline from '/primer-timeline.png'
import timelineKey from '/timeline-key.png'
import weeble from '/weeble.png'


function App() {


  return (
    <>
      <div>
        <h1>The definitive explaination and timeline</h1>
      </div>

      <div>
        <h2>Cast</h2>
        <ul>
          <li>Aaron</li>
          <li>Abe</li>
          <li>Philip</li>
          <li>Robert</li>
          <li>Rachel</li>
          <li>Granger</li>
        </ul>
      </div>

      <img
        src={weeble} alt="primer timeline key"
        style={{
          width: '20%'
        }}
      />

      <div>
        <h2>Style Ideas</h2>
        <ul>
          <li>garage door motif</li>
          <li>storage facility motif</li>
          <li>white shirt and tie motif</li>
          <li>weeble</li>
          <li>box</li>
        </ul>
      </div>

      <img
        src={timeline} alt="primer timeline"
        style={{
          width: '100%'
        }}
      />
      <img
        src={timelineKey} alt="primer timeline key"
        style={{
          width: '30%'
        }}
      />

      <TimelineNotes />

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


      <Trivia />
    </>

  )
}

export default App
