// images
import logo from '../assets/icon.png'
import { IconShoppingCart, IconTrash } from '@tabler/icons-react'

// styles
import '../styles/header.css'

// imports
import { cart } from '../utils/cart.ts'
import { useEffect, useState } from 'react'
import Popup from 'reactjs-popup'
import { Product } from '../types/product.ts'

const Header = () => {
  const [cartCount, setCartCount] = useState<number>(cart.length)

  useEffect(() => {
    setCartCount(cart.length)
  }, [])

  // const showCart = () => {
  //   console.log(cart)
  // }

  const deleteFromCart = (index : number) => (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    cart.splice(index, 1) 
  }

  return (
    <header className='home-header'>
      <div className='header-container'>
        <div className='header-left'>
          <a href='/'>
            <img src={logo} alt='Logo image' />
            <h1>E-commerce</h1>
          </a>
        </div>
        <div className='header-right'>
          <button className='login-btn'>Login</button>
          <button className='register-btn'>Register</button>
          <Popup trigger={<IconShoppingCart />} modal nested>
            <div className='cart-list-container'>
              {cart.map((product: Product, index: number) => {
                return ( 
                  <div className='product-cart' data-id={product.id}> 
                    <img src={product.photo} alt='Product image' />
                    <div className='product-cart-info'>
                      <p>{product.name}</p>
                      <span>{product.size}</span>
                      <span>{product.price}</span>
                    </div>
                    <button value={index} onClick={deleteFromCart(index)}>
                      <IconTrash color='red'/> 
                    </button>
                  </div>
                )
              })}
            </div>
          </Popup>
          <p className='cart-length'>{cartCount}</p>
        </div>
      </div>
    </header>
  )
}

export default Header
