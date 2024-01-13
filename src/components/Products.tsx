// imports
import { Suspense, useEffect, useState } from 'react'

// styles
import '../styles/products.css'

// types
import { Product } from '../types/product.ts'
import Skeleton from './Skeleton.tsx'

const Products = () => {
  const [products, setProducts] = useState<Product[]>([])

  useEffect(() => {
    fetch('https://e-commerce-server-api.vercel.app/api/clothes/allClothes')
      .then((response) => response.json())
      .then((data) => setProducts(data))
  }, [])

  return (
    <div className='main'>
      <div className='products'>
        <Suspense fallback={<Skeleton />}>
          {products.map((product) => {
            return (
              <div className='product' key={product.id}>
                <img src={product.photo} alt='Product image' />
                <h3>{product.name}</h3>
                <p>€ {product.price}</p>
                <span>Sizes: {product.size}</span>
                <button disabled={product.available ? false : true}>
                  Add to cart
                </button>
              </div>
            )
          })}
        </Suspense>
      </div>
    </div>
  )
}

export default Products
