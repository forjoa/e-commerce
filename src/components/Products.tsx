// imports
import { useEffect, useState } from 'react'

// types
import { Product } from '../types/product.ts'

const Products = () => {
  const [products, setProducts] = useState<Product[]>([])

  useEffect(() => {
    fetch('http://localhost:5000/api/clothes/allClothes')
      .then((response) => response.json())
      .then((data) => setProducts(data))
  }, [])

  return (
    <div className='products'>
      {products.map((product) => {
        return (
          <div className='product' key={product.id}>
            {product.name}
          </div>
        )
      })}
    </div>
  )
}

export default Products
