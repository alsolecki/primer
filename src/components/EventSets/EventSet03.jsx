import React from 'react'
import EventBlock from './EventBlock.jsx'

const EventSet03 = () => {
  return (
    <>
    <EventBlock
        id={'3A'}
        time={'Tuesday 9:00:'}
        event={`Abe and Aaron go to Abe's house and trade on the stock market using information they learned before they traveled back in time.`}
        color={'grey'}
    />
    <EventBlock
        id={'3B'}
        time={'Tuesday 15:00:'}
        event={`Abe and Aaron return to the storage facility and watch their doubles enter. Their day was a success.`}
        color={'grey'}
    />
    <EventBlock
        id={'3C'}
        time={'Wednesday morning:'}
        event={`Aaron notices the storage manifest has 2 rooms under rent by Abe. He subsequently discovers 'Failsafe Box 1' which was previously set up by Abe in secret. Aaron folds up 'Box 2', then travels back in time with it using 'Failsave Box 1' that Abe created. This creates timeline 4. From this point on, Aaron begins to record audio of the day's events.`}
        color={'green'}
    />
</>
  )
}

export default EventSet03
