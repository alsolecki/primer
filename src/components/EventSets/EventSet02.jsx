import React from 'react'
import EventBlock from './EventBlock.jsx'

const EventSet02 = () => {
  return (
    <>
    <EventBlock
        time={'Monday midday:'}
        event={`Abe shows Aaron the protien build up on a Weeble he used on his experiments in the prototype machine they were designing. He then demonstrates the experiments with watches`}
        color={'grey'}
    />
    <EventBlock
        time={'Monday 15:00:'}
        event={`Abe takes Aaron to the storage facility and they both observe Abes double enter the building, and ultimately, Box 1. Aaron constructs 'box2.' This is Aaron's box. It is placed alongside Abe's 'Box 1'.`}
        color={'grey'}
    />
    <EventBlock
        time={''}
        event={`Aaron constructs 'box2.' This is Aaron's box. It is placed alongside Abe's 'Box 1'.`}
        color={'red'}
    />
    <EventBlock
        time={'Tuesday morning:'}
        event={`Abe and Aaron re-enact Abes movements from the previous day in preparation for them both to travel back 6 hours in time.`}
        color={'grey'}
    />
    <EventBlock
        time={'Tuesday 9:00:'}
        event={`Abe and Aaron activate 'Box 1' and 'Box 2', then leave the area. They head to a hotel and isolate themselves from the outside world. They use this opportunity to check stock prices`}
        color={'grey'}
    />
    <EventBlock
        time={'Tuesday 15:00:'}
        event={`Abe and Aaron return to the storage facility, prepare themselves for entry into the boxes, then travel back in time 6 hours. This creates timeline 3.`}
        color={'grey'}
    />
</>
  )
}

export default EventSet02
