import React from 'react'
import EventBlock from './EventBlock.jsx'

const EventSet01 = () => {
    return (
        <>
            <EventBlock
                id={'1A'}
                time={'Monday Morning:'}
                event={`Abe sets up a box in secret, 'Failsafe box 1'. This will allow him to undo any and all time alterations that he makes from this point on. He also creates 'Box 1' to use tomorrow.`}
                color={'red'}
            />
            <EventBlock
                id={'1B'}
                time={'Monday 9:00:'}
                event={`Abe activates 'Box 1' then spends 6 hours in a hotel room.`}
                color={'red'}
            />
            <EventBlock
                id={'1C'}
                time={'Monday 15:00:'}
                event={`Abe returns to the storage facility and uses 'Box 1' to travel back in time 6 hours. This creates timeline 2`}
                color={'red'}
            />
        </>
    )
}

export default EventSet01
