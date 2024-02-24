import React, { useState, useEffect } from 'react'
import {Helpers} from './helpers'
import './App.css'




const Reservation = () => {
    let id = localStorage.getItem('resid')
    console.log(id)
    const [resdata, setResData] = useState([])

    useEffect(()=> {
        getRes()
    }, [])
    async function getRes() {
        let res = await Helpers.getReserve(id)
        console.log(res.resnumber)
        setResData(res.resnumber[0])
        console.log(resdata)
    }
   
    let checkIn = [resdata.checkin].slice(0,10)
    let checkOut = [resdata.checkout].slice(0,10)
    console.log(resdata)
    return (
        <>
        <h1>Please confirm your reservation details</h1>
            <h3>First Name: <p>{resdata.firstname}</p></h3>
            <h3>Last Name: <p>{resdata.lastname}</p></h3>
            <h3>Email: <p>{resdata.email}</p></h3>
            <h3>Check-In: <p>{checkIn}</p></h3>
            <h3>Check-out: <p>{checkOut}</p></h3>
        <button>Confirm</button>
       
            
</>
    )
}
export default Reservation