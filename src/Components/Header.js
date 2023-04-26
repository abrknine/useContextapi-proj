import React from 'react'
import { useContext } from 'react'
import "./Header.css"
import { Link } from 'react-router-dom'
import {Kart} from  "../Context"



const Header = () => {
  const {cart}= useContext(Kart);
  
  return (
    <div>
      <span className='header'>React-Context API</span>
       <ul className='nav'>

        <li >
          <Link to="/">Home page</Link>
        </li>
        <li>
          <Link to="/cart">Cart({cart.length})</Link>
        </li>
       </ul>
      
      
    </div>
  )
}

export default Header
