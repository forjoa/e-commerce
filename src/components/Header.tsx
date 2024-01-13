// images
import logo from '../assets/icon.png'

const Header = () => {
  return (
    <header className='home-header'>
      <div className='header-left'>
        <a href='/'>
          <img src={logo} alt='Logo image' />
          <h1>E-commerce</h1>
        </a>
      </div>
      <div className='header-right'>
        <button className='login-btn'>Login</button>
        <button className='register-btn'>Register</button>
      </div>
    </header>
  )
}

export default Header
