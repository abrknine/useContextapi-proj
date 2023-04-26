import { useState } from 'react';
import './App.css';
 import Header from './Components/Header';
import Home from './routes/Home';
import Cart from './routes/Cart';
// import { BrowserRouter } from 'react-router-dom';
import {Route, Routes } from "react-router-dom";


function App()  {
  // const [cart, setCart] =useState([]);

  return (
    <>
    
      <Header/>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/cart' element={<Cart  />}/>

     </Routes>
    
    
    
    </>

    
  );
}

export default App;
