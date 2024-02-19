import React from 'react'
import './App.css';
import { Link } from 'react-router-dom'

const Gallery = () => {
    
    return (
   <>
         <div className='nav'>
    <span><Link to = '/users'>Home</Link></span>
    <span><Link to = '/about'>About</Link></span>
    <span><Link to = '/gallery'>Gallery</Link></span>
    <span><Link to = '/testimonial'>Testimonials</Link></span>
    </div>
        <h1>Gallery</h1>
      <div className='interior'>
      <div className = 'pics'>
      <img className ='photos'src='../gameroom.png' alt='gameroom'></img></div><figcaption>Gameroom</figcaption>
      <div className= 'pics'>
      <img className= 'photos' src='../gameroom2.png' alt='gameroom2'></img></div><figcaption>Arcade</figcaption>
    
      <div className='pics'>
      <img className= 'photos' src='../bedroom1.png' alt= 'bedroom1'></img></div><figcaption>Master Bedroom</figcaption>

      <div className='pics'>
      <img className= 'photos' src='../livingroom.png' alt='living'></img></div><figcaption>Living Room</figcaption>
      <div className='pics'>
      <img className= 'photos' src='../bedroom.png' alt='bedroom'></img></div><figcaption>Bedroom 1</figcaption>
      <div className='pics'>
      <img className= 'photos' src='../kitchen.png' alt='kitchen'></img></div><figcaption>Kitchen</figcaption>
      <div className='pics'>
      <img className= 'photos' src='../kitchen-coffee.png' alt='kitchen-2'></img></div><figcaption>Coffee Area</figcaption>
      <div className='pics'>
      <img className= 'photos' src='../diningroom.png' alt='dining'></img></div><figcaption>Dining Area</figcaption>
      <div className='pics'>
      <img className= 'photos' src= '../backyard.png' alt='backyard'></img></div><figcaption>Backyard</figcaption>
      <div className='pics'>
      <img className= 'photos' src= '../patio1.png' alt='patio'></img></div><figcaption>Patio</figcaption>
      <div className='pics'></div>

      <div className='pics'>
      <img className= 'photos' src= '../exterior.png' alt='exterior'></img></div><figcaption>Exterior</figcaption>
      <div className='pics'></div>
      
      <div className='pics'>
      <img className= 'photos' src= '../foyer.png' alt='foyer'></img></div><figcaption>Foyer</figcaption>
      <div className='pics'></div>
      
      <div className='pics'>
      <img className= 'photos' src= '../towels.png' alt='towels'></img></div><figcaption>Bathroom Set</figcaption>
      </div>

        <h2><Link to = '/users'>Home</Link> </h2>
    </>
    )
}

export default Gallery