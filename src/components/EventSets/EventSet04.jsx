import React from 'react'
import EventBlock from './EventBlock.jsx'

const EventSet04 = () => {
  return (
    <>
    <EventBlock
        time={'Monday morning:'}
        event={`Aaron exits from 'Failsafe Box 1' along with 'Box 2'. He then moves 'Box 2,' to another storage room. He activates this box as his own failsafe box, 'Failsave box 2.' The original failsafe box he exited from ('Failsafe Box 1) is reset which closes his time loop. This means that from this point on, there are now 2 Aarons in the world permanently. Aaron 1 (who is asleep at home) and Aaron 2 who has just arrived on this timeline. He activates the reset 'Failsafe Box 1' about half an hour later and leaves it where Abe put it to trick him. This gives Aaron 2 control and allows him to travel back in time further than Abe without him knowing.` }
        color={'red'}
    />
    <EventBlock
        time={'Monday 6:00:'}
        event={`Aaron 2 goes to his own house and injects sedatives into a bottle of milk that he knows his double (Aaron 1) will use at breakfast. Aaron 1 is successfully drugged, then Aaron 2 hides him in the attic and assumes his identity.`}
        color={'green'}
    />
    <EventBlock
        time={'Monday 9:00:'}
        event={`Abe activates 'box 1', then spends 6 hours in a hotel room. ` }
        color={'red'}
    />
    <EventBlock
        time={'Monday 15:00:'}
        event={`Abe returns to the storage facility and uses 'Box1' to travel back in time 6 hours. This creates timeline 5.` }
        color={'red'}
    />
</>
  )
}

export default EventSet04
