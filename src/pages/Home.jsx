import React, { useContext } from 'react'

//import product context
import {ProductContext} from '../contexts/ProductContext'

// import components
import Product from '../components/Product';
import Hero from '../components/Hero';

const Home = () => {

  const products = useContext(ProductContext);


  const filterProducts = products.filter(item => {
    return item.category === "men's clothing" || item.category === "women's clothing";
  })

  return (
    <div>
      <Hero />
    <section className='py-16 '>
      <div className="container mt-10 mx-auto">
      <div className='text-2xl my-[3rem]'> Our Latest Products</div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 xl:grid-col-5 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0'>
          {filterProducts.map(product=>{
             return (
              <Product product={product} key={product.id} />
             );
          })}
        </div>
      </div>
    </section>
    </div>
  );
}

export default Home