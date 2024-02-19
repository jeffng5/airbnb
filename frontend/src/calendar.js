import React from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import './App.css'

const Calendar = () => {






    return (
      <body>
      <FullCalendar
        plugins={[ dayGridPlugin ]}
        initialView="dayGridMonth"
        events = {[{title: '', start: '2024-02-20', end:'2024-02-25'},
                    {title: '', start: '2024-02-01', end:'2024-02-05'}

    
    ]}
      />
      </body>
    )
  }


export default Calendar