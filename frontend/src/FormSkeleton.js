import React, { useState } from 'react'
import './App.css'
import { Helpers } from './helpers'
import { useNavigate, Link } from 'react-router-dom'

const FormSkeleton = () => {

  const navigate = useNavigate()
  const [formData, setFormData] = useState([])

  const handleChange = (e) => {
    const { name, value } = e.target 
    setFormData(formData => ({...formData, [name]: value}))}
    console.log(formData)
 
  async function handleForm(e) {
      e.preventDefault();
      const res = await Helpers.postReserve(formData.firstname, formData.lastname, formData.email, formData.checkin, formData.checkout)
    
      localStorage.setItem('resid', res[0].id)
      navigate('reservation')

    
  


}
  return (
    <>
   <div className='container'>
    <h1>Make reservation</h1>
  <form>
  <div><input type='text' placeholder='first name' id='firstname' name='firstname' onChange={handleChange}></input></div>
    <div><input type='text' placeholder='last name' id='lastname' name='lastname' onChange={handleChange}></input></div>

    <div><input type='text' placeholder='email' id='email' name='email' onChange={handleChange}></input></div>
    <label>Check In</label>
    <div><input type='date' placeholder= 'check-in' id= 'check-in' name= 'checkin' onChange={handleChange}></input></div>
    <label>Check Out</label>
    <div><input type='date' placeholder= 'check-out' id= 'check-out' name= 'checkout' onChange={handleChange}></input></div>
    <Link to = 'reservation'><button type='submit' onClick={handleForm}>Make Reservation</button></Link>
    </form>
  </div> 
  
  </>
)
  }



export default FormSkeleton