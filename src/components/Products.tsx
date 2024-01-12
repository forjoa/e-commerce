// imports
import { useEffect, useState } from 'react'

// types
import { Product } from '../types/product.ts'

const Products = () => {
  const [products, setProducts] = useState<Product[]>([])

  useEffect(() => {
    fetch('https://e-commerce-server-api.vercel.app/api/clothes/allClothes')
      .then((response) => response.json())
      .then((data) => setProducts(data))
  }, [])

  return (
    <div className='products'>
      {products.map((product) => {
        return (
          <div className='product' key={product.id}>
            <img src={product.photo} alt='Product image' />
            <h3>{product.name}</h3>
            <p>{product.price}</p>
            <button disabled={product.available ? false : true}>
              Add to cart
            </button>
          </div>
        )
      })}
    </div>
  )
}

export default Products
