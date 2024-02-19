import Calendar from './calendar'
import FormSkeleton from './FormSkeleton'
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import About from './About'
import About2 from './About2'
import Home from './Home'
import Price from './Price'








function App() {




  return (
    <>
   

    <div className="App">

     <Home />
      <h2>Please check our availability</h2>

      <img src='./aerial-view.jpeg' alt='house-aerial'></img>

      <h2>Welcome to Black Diamond Escape - a charming 3 bedroom, 2 bathroom rental for your Catskill 
        Mountain getaway offering breathtaking views of the great outdoors! It's recently renovated, equipped with 
        modern amenities including self check-in, a standing desk to work from home, game room with nostalgic arcade 
        games and a fully stocked coffee bar. Situated less than 5 miles from Plattekill Mountain and nearby many 
        local attractions, it’s an amazing escape exploring all that the area has to offer.</h2>
     
      <Calendar />
      <div className= 'share'>
      <About />
      </div>
      <div className= 'share'>
      <About2 />
      </div>
      
    <Price />
      
      <div className = 'pics'>
      <img src='gameroom.png' alt='gameroom'></img></div><figcaption>Gameroom</figcaption>
      <div className= 'pics'>
      <img src='gameroom2.png' alt='gameroom2'></img></div><figcaption>Arcade</figcaption>
    
      <div className='pics'>
      <img src='bedroom1.png' alt= 'bedroom1'></img></div><figcaption>Master Bedroom</figcaption>

      <div className='pics'>
      <img src='bedroom.png' alt='bedroom'></img></div><figcaption>Bedroom</figcaption>
     
      <img src= 'towels.png' alt='towels'></img><figcaption>Bathroom Set</figcaption>

      
      <FormSkeleton />
  
    </div>
</>  );
}

export default App;
