import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { ShopContext } from '../../context/shopContext'
import {PRODUCTS} from '../../products'
import {CartItem} from './cart-item'
import './cart.css'

const Cart = () => {

  const { cartItems,getTotalCartAmount } = useContext(ShopContext)
  const totalAmount = getTotalCartAmount()
  const navigate = useNavigate()

  return (
    <div className='cart'>
          <div className="cart-title">
                <h1 >Your Cart Items</h1>

          </div>
        <div className="cart-items" >
    
            {PRODUCTS.map((product)=>{
                
                  if(cartItems[product.id]!== 0){
                    return <CartItem data={product} key={product.id}/>
                    
                  }return null
                

                })}
        </div>
        {totalAmount >0 &&   <div className="checkout">
                <p>Subtotal : ${totalAmount}</p>
                <button onClick={()=>navigate('/')}>Continue Shopping</button>
                <button >Checkout</button>

            </div>}
     
    </div>
  )
}

export default Cart