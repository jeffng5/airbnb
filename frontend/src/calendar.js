import React, { useEffect, useState } from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import './App.css'
import {Helpers} from './helpers'


const Calendar = () => {
  const [resdata, setResData] = useState([])
  const [data, setData] = useState([])

  useEffect(()=> {
      getRes()
  }, [])
  async function getRes() {
      const res = await Helpers.getAllReserve()
      console.log(res.results)
      setResData(res.results)

  }
  console.log(resdata)

 
// let checkin = resdata[0].checkin.substring(0,10)
// console.log(checkin)
// let checkout = resdata[0].checkout.substring(0,10)

    return (
  
  <body>

  
      <FullCalendar
    
        plugins={[ dayGridPlugin ]}
        initialView="dayGridMonth"
          
      events = {[
        {...resdata.map(ele => (  
     {title: '', start: ele.checkin.slice(0,10), end: ele.checkout.slice(0,10)}
     ))}
      ]}
  
     />     
      
    
     
    
     
      
        

    
    
      
      </body>
    )
    }

export default Calendar