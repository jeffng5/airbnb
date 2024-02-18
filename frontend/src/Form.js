import React from 'react'
import Button from './Button'
import './App.css'

const Form = () => {
  
  return (
    <>
   <div className='container'>
    <h1>Make reservation</h1>
  <form>
    <div>
    <input type='text' placeholder='last name' id='lastname' name='lastname'></input></div>
    <div><input type='text' placeholder='first name' id='firstname' name='firstname'></input></div>
    <div><input type='text' placeholder='email' id='email' name='email'></input></div>
    <label>Check In</label>
    <div><input type='date' placeholder= 'check-in' id= 'check-in' name= 'check-in'></input></div>
    <label>Check Out</label>
    <div><input type='date' placeholder= 'check-out' id= 'check-out' name= 'check-out'></input></div>
    </form>
  <Button />
  </div> 
  </>
)
  }
export default Form