import React, { useContext } from 'react'

//import product context
import {ProductContext} from '../contexts/ProductContext'

const Home = () => {
  //get products from product context
  const products = useContext(ProductContext);
  
  console.log('Products from context:', products);

  return (
    <div>HomePage</div>
  )
}

export default Home