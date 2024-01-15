// images
import logo from '../assets/icon.png'
import { IconShoppingCart } from '@tabler/icons-react'

// styles
import '../styles/header.css'

// imports
import { cart } from '../utils/cart'

const Header = () => {
  
  const showCart = () => {
    console.log(cart)
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
          <IconShoppingCart onClick={showCart}/>
        </div>
      </div>
    </header>
  )
}

export default Header
