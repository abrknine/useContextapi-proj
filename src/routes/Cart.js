import React, { useEffect, useState,useContext } from 'react'
import SingleProduct from '../Components/SingleProduct'
// import Header from '../Components/Header'
import {Kart} from  "../Context"


const Cart = () => {
   const [total, setTotal]=useState();
  const {cart}= useContext(Kart);


  useEffect(()=>{
     setTotal(cart.reduce((acc,curr)=>acc+ Number(curr.price),0))
  },[cart])
  return (
    <div>
       <span style={{fontSize:30}}> My Cart</span>
       <br />
       <span style={{fontSize:30}}>Total:RS.{total}</span>
       <div className='productContainer'>{cart.map((prod)=>(
        <SingleProduct prod={prod} key={prod.id}/>
       ))}</div>  
    </div>
  )
}

export default Cart
