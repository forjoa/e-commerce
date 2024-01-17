// imports
import React, { Dispatch, SetStateAction, Suspense, useEffect, useState } from 'react'
import Skeleton from './Skeleton.tsx'

// styles
import '../styles/products.css'

// types
import { Product } from '../types/product.ts'

// images
import { IconSearch } from '@tabler/icons-react'

const Products = ({ cart, setCart }: { cart: Product[], setCart: Dispatch<SetStateAction<Product[]>> }) => {
  const [products, setProducts] = useState<Product[]>([])
  const [searching, setSearching] = useState<string>('')
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    fetch('https://e-commerce-server-api.vercel.app/api/clothes/allClothes')
      .then((response) => response.json())
      .then((data) => {
        setProducts(data)
        setLoading(false)
      })
  }, [])

  // filter products by searching value
  const filteredProducts: Product[] = products.filter((product) =>
    product.name.toLowerCase().includes(searching.toLowerCase())
  )

  // add to cart handler
  const addCart =
    (product: Product) => (event: React.MouseEvent<HTMLButtonElement>) => {
      event.preventDefault()
      const newCart = cart
      newCart.push(product)
      setCart(newCart)
    }

  return (
    <div className='main'>
      <div className='search-container'>
        <IconSearch />
        <input
          type='text'
          className='input-search'
          onChange={(e) => setSearching(e.target.value)}
          value={searching}
          placeholder='Search products'
          spellCheck='false'
        />
      </div>
      <div className='products'>
        {loading ? (
          <Suspense fallback={<Skeleton />}>
            <Skeleton />
          </Suspense>
        ) : (
          filteredProducts.map((product) => (
            <div className='product' key={product.id}>
              <img src={product.photo} alt='Product image' />
              <h3>{product.name}</h3>
              <p>{product.price} €</p>
              <span>Sizes: {product.size}</span>
              <button
                disabled={product.available ? false : true}
                onClick={addCart(product)}
              >
                Add to cart
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  )
}

export default Products
