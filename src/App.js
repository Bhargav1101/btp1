import './App.css';

import Home from './components/Home/Home';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import About from './components/about/About.js'
import Approach from './components/Approach/Approach.js'
import Login from './components/Login/Login.js'
import Signup from './components/Signup/Signup.js'

function App() {
  return (
    <BrowserRouter>
  

    <Routes>
    <Route path="/" element={<Home></Home>}></Route>
    <Route path="/about" element={<About></About>}></Route>
    <Route path="/approach" element={<Approach />}></Route>
    <Route path='/login' element={<Login />}></Route>
    <Route path='/signup' element={<Signup />}></Route>
    

        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
