// images
import logo from '../assets/icon.png'
import { IconShoppingCart } from '@tabler/icons-react'

// styles
import '../styles/header.css' 

// imports
import { Dispatch, SetStateAction, useEffect, useState } from 'react'
import Popup from 'reactjs-popup'
import { Product } from '../types/product.ts'

// components 
import Cart from './Cart.tsx'

const Header = ({ cart, setCart }: { cart: Product[], setCart: Dispatch<SetStateAction<Product[]>> }) => {
  const [cartCount, setCartCount] = useState<number>(cart.length)
  const [totalPrice, setTotalPrice] = useState<number>(0)

  useEffect(() => {
    const newTotalPrice = cart.reduce(
      (total: number, product: Product) => total + Number(product.price),
      0
    )
    setTotalPrice(newTotalPrice)
    setCartCount(cart.length)
  }, [cart])

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
            <Cart cart={cart} totalPrice={totalPrice} setCart={setCart}></Cart>
          </Popup>
          <p className='cart-length'>{cartCount}</p>
        </div>
      </div>
    </header>
  )
}

export default Header
