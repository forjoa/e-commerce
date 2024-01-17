// imports 
import { Dispatch, SetStateAction } from 'react'

// types
import { Product } from '../types/product.ts'

// icons
import { IconTrash } from '@tabler/icons-react'

const Cart = ({ cart, totalPrice, setCart} : { cart: Product[], totalPrice: number, setCart: Dispatch<SetStateAction<Product[]>>}) => {
    
    const deleteFromCart =
    (index: number) => (event: React.MouseEvent<HTMLButtonElement>) => {
      event.preventDefault()
      const newCart = [...cart] 
      newCart.splice(index, 1)
      setCart(newCart)  
    }

  return (
    <>
      <div className='cart-list-container'>
        {cart.map((product: Product, index: number) => {
          return (
            <div className='product-cart' data-id={product.id} key={index}>
              <img src={product.photo} alt='Product image' />
              <div className='product-cart-info'>
                <p>{product.name}</p>
                <span>{product.size}</span>
                <span>{product.price}</span>
              </div>
              <button value={index} onClick={deleteFromCart(index)}>
                <IconTrash color='red' />
              </button>
            </div>
          )
        })}
      </div>
      <hr />
      <div className='total-price-container'>
        <span>Precio total: </span>
        <span>{totalPrice} €</span>
      </div>
      <div className='pay-container'>
        <div></div>
        <button>Pagar</button>
      </div>
    </>
  )
}

export default Cart
