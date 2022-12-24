import React , { useContext } from 'react'
import './cart.css'
import { ShopContext } from '../../context/shopContext'

export const CartItem = ({data}) => {
    const { id, productName, price, productImage } = data
    const { addToCart, cartItems,removeFromCart,updateCartItemCount } = useContext(ShopContext)
    const cartItemAmount = cartItems[id]


  return (
    <div className='cart-item' >
         <img src={productImage} alt="product" width={130}  />
            <div className="cart-description">
                <p >
                    <b>{productName}</b>
                </p>
                <p>
                    ${price}
                </p>
                <div className='counter'>
                    <button 
                    style={{width:"20px",padding:"2px"} }
                    onClick={()=>removeFromCart(id)}
                    >-</button>
                    <input type="text" value={cartItemAmount}
                    onChange={(e)=>{updateCartItemCount(Number(e.target.value),id)}}
                    />
                    <button style={{width:"20px",padding:"2px"}}
                    onClick={()=>addToCart(id)}
                    >+</button>
                </div>
            </div>

           
    </div>
  )
}
