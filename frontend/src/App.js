import Calendar from './calendar'
import Form from './Form'
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Welcome to Black Diamond Escapes</h1>
      <h2>Please check our availability</h2>

      <img src='./aerial-view.jpeg' alt='house-aerial'></img>
 
   <Calendar />
      <img src='./gameroom.png' alt='gameroom'></img>
      <Form />   
    </div>
  );
}

export default App;
