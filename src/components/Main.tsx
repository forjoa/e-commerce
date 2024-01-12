// imports
import { useEffect, useState } from 'react'

// types
import { Product } from '../types/product.ts'

const Main = () => {
  const [products, setProducts] = useState<Product[]>([])

  useEffect(() => {
    fetch('http://localhost:5000/api/clothes/allClothes')
      .then((response) => response.json())
      .then((data) => setProducts(data))
  }, [])

  return (
    <>
      <main className='main'>
        {products.map((product) => {
          return (
            <div className="product" key={product.id}>
              {product.name}
            </div>
          )
        })}
      </main>
    </>
  )
}

export default Main
