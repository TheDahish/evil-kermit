import logo from './logo.svg';
import './App.css';
import Map from './Components/Map';
import {useState} from 'react';

const[bluePlayer,setBluePlayer] = useState({
  engineCards : [],
  quantumEvents : [],
  position : 0
})

function App() {
  return (
    <div className="App">
<Map />
    </div>
  );
}

export default App;
