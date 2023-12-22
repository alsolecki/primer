import React from 'react'
import EventBlock from './EventBlock.jsx'

const EventSet08 = () => {
  return (
    <>
    <EventBlock
        time={'Thursday 9:00:'}
        event={`Abe and Aaron 2 go to Abe's house to trade on the stock market.` }
        color={'grey'}
    />
    <EventBlock
        time={'Wednesday afternoon:'}
        event={`Abe and Aaron 2 walk through town and Aaron 2's phone rings again. This means there are 2 exact copies of Aaron 2's phone in this timeline. They deduce that if the phone Aaron 2 has in his hand is ringing, then the phone his double has (in the hotel room) cannot be ringing. This is important because it means that they have broken symmetry. Their 'isolated' doubles in the hotel room may now act differently, and in the worst case scenario, may not enter the boxes. This would create another Abe and another Aaron on the same timeline permanently.`}
        color={'grey'}
    />
    <EventBlock
        time={'Wednesday evening:'}
        event={`Abe tells Aaron 2 that he shouldn't have risked his life when he has a wife and child that depend on him. Aaron 2 dismisses this criticism.` }
        color={'red'}
    />
    <EventBlock
        time={'Friday morning:'}
        event={`Granger discovers the boxes (he was probably told by Abe and/or Aaron 2's doubles after their symmetry was broken the day before) He travels back in time creating timeline 9.` }
        color={'red'}
    />
</>
  )
}

export default EventSet08
