// components
import Header from './Header'
import Products from './Products'

// types
import { Product } from '../types/product'
import { useState } from 'react'

function Home() {
  const [cart, setCart] = useState<Product[]>([])

  return (
    <>
      <Header cart={cart} setCart={setCart}/>
      <Products cart={cart} setCart={setCart}/>
    </>
  )
}

export default Home