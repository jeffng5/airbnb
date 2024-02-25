import React, { useState, useEffect } from 'react'
import FormSkeleton from './FormSkeleton'
import './App.css';
import {Helpers} from './helpers'
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import { Link } from 'react-router-dom'
import Amenities from './Amenities'
import FullCalendar from '@fullcalendar/react'

function App() {
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
  // console.log(resdata[0].checkin.substring(0,10))

  return (
    <>
   

    <div className="App">
      <div className='nav'>
    <span><Link to = '/users'>Home</Link></span>
    <span><Link to = '/about'>About</Link></span>
    <span><Link to = '/gallery'>Gallery</Link></span>
    <span><Link to = '/testimonial'>Testimonials</Link></span>
    </div>
     <h1>Black Diamond Escape</h1>
      <h2>Please check our availability</h2>
      

      <img id='fixed-bg' src='./nature.png' alt='house-aerial'></img>
      <p className= 'location'>
      <FormSkeleton />
      </p>

                
 <FullCalendar 
  
    plugins = {[ dayGridPlugin ]} 
    // initialView='dayGridMonth'
    events = 
      {
         [
      
      {
      title : '', 
      start : resdata[0].checkin.substring(0,10),
      end : resdata[0].checkout.substring(0,10)
        },
        {
      title: '',
      start: resdata[1].checkin.substring(0,10),
      end : resdata[1].checkout.substring(0,10)
        }
      ]

    }
/>
 

 
    <img id ='fixed-bg' src= './patio.png' alt= 'patio'></img>
    <p className= 'location-1'>
    <Amenities />
    </p> 
     
  
    </div>
</>  );
}

export default App;
