import React, {useState } from 'react' 
// import Header from '../Components/Header'
import faker from 'faker'
import SingleProduct from '../Components/SingleProduct';
// import  '../Component/Header.css'
faker.seed(100); 

const Home = ({}) => {
  // const {cart,setCart}= useContext(Kart)
  
  const productArray =[...Array(21)].map(()=>({
    id: faker.datatype.uuid(),
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    image: faker.random.image(),
  }));  
  const [products]= useState(productArray);
  // console.log(cart);


  // console.log(productArray)
  return (
    <div className='productContainer'> 
        {
          products.map((prod)=>(
            <SingleProduct  prod={prod} key={prod.id}/>
            // <span>{prod.name}</span>
          ))
        }
       
    </div>
  )
}

export default Home
