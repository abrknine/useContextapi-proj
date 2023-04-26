import React, { createContext, useState } from 'react'
  
 export const Kart =createContext()

const Context = ({children}) => {
    const [cart, setCart]= useState([]);
  return (
    <Kart.Provider value={{cart, setCart}}>
   {children}
    </Kart.Provider>
  )
}

export default Context
