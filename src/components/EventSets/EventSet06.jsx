import React from 'react'
import EventBlock from './EventBlock.jsx'

const EventSet06 = () => {
  return (
    <>
    <EventBlock
        id={'6A'}
        time={'Tuesday 9:00:'}
        event={`Abe and Aaron 2 go to Abe's house and trade on the stock market using information they learned before they traveled back in time.` }
        color={'grey'}
    />
    <EventBlock
        id={'6B'}
        time={'Tuesday 15:00:'}
        event={`Abe and Aaron 2 return to the storage facility and watch their doubles enter. Their day was a success.`}
        color={'grey'}
    />
    <EventBlock
        id={'6C'}
        time={'Wednesday 9:00:'}
        event={`Abe and Aaron 2 activate 'Box 1' and 'Box 2', then go to the hotel. They head to a hotel, then go to the library to check stock prices. ` }
        color={'grey'}
    />
    <EventBlock
        id={'6D'}
        time={'Wednesday 15:00:'}
        event={`Abe and Aaron 2 return to the storage facility, prepare themselves for entry into the boxes, then travel back in time 6 hours. This creates timeline 7.` }
        color={'red'}
    />
</>
  )
}

export default EventSet06
