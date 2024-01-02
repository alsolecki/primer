import React from 'react'
import EventBlock from './EventBlock.jsx'

const EventSet09 = () => {
  return (
    <>
    <EventBlock
        id={'9A'}
        time={'Friday 2:00:'}
        event={`Abe is woken by a skateboarder setting off car alarms outside. He wakes Aaron 2 and tells him of his plan to find Aaron 2's boss, punch him in the face, then travel back in time to 17:00 on Thursday evening. He reveals that he has been turning the machines on at 17:00 and leaving them running. Aaron 2 agrees to the plan and they leave in Abe's car. As they drive past the front of Aaron 2's house they realize that Grander is parked outside. He begins to follow them. Abe comes to a stop further down the road and Grander stops behind them. Abe calls Rachel and gets Grander's phone number. He calls him and speaks to Granger. The Granger in the car behind has not answered a phone. They now know he has traveled back in time using their boxes. They get out of the car and chase him. Grander falls into a coma and is taken into Abe's house. The pair argues over the consequences of Granger using their boxes. They return to the storage facility and the pair deduce that one of their doubles probably told Granger the last time they traveled back in time.` }
        color={'grey'}
    />
    <EventBlock
        id={'9B'}
        time={'Friday 3:30:'}
        event={`Abe worries they have lost control, so he goes to the storage facility and enters what he thinks is his untouched 'Failsafe Box 1', but on timeline 4, Aaron 2 reset the box half and hour later when he got out of it. This creates timeline 10.`}
        color={'grey'}
    />
    <EventBlock
        id={'9C'}
        time={'Friday 4:00:'}
        event={`Aaron 2 suspects Abe will attempt to use the failsafe box, so he uses 'Failsafe Box 2' that he previously set up which takes him back in time and places him on timeline 10, half an hour before Abe. He also takes the tape he has been using to record the previous days with him. He now becomes Aaron 3.` }
        color={'green'}
    />
</>
  )
}

export default EventSet09
