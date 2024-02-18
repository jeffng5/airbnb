import React from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!

const Calendar = () => {






    return (
      <FullCalendar
        plugins={[ dayGridPlugin ]}
        initialView="dayGridMonth"
        events = {[{title: '', start: '2024-02-20', end:'2024-02-25'},
                    {title: '', start: '2024-02-01', end:'2024-02-05'}

    
    ]}
      />
    )
  }


export default Calendar