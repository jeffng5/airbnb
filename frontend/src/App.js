import Calendar from './calendar'
import FormSkeleton from './FormSkeleton'
import './App.css';
import { Link } from 'react-router-dom'
import Amenities from './Amenities'

function App() {

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
      
      <Calendar />
    <img id ='fixed-bg' src= './patio.png' alt= 'patio'></img>
    <p className= 'location-1'>
    <Amenities />
    </p> 
     
  
    </div>
</>  );
}

export default App;
