import React, { useContext } from 'react'
import './shop.css'

import { ShopContext } from '../../context/shopContext'
const Product = ({ data }) => {

    const { addToCart, cartItems } = useContext(ShopContext)

    const { id, productName, price, productImage } = data

    const cartItemAmount = cartItems[id]

    
    return (
        <div className='product' >
            <img src={productImage} alt="product" width={300} />
            <div className="description">
                <p >
                    <b>{productName}</b>
                </p>
                <p>
                    ${price}
                </p>
            </div>
            <button
                className='addToCartBtn'
                onClick={() => addToCart(id)}>
                Add to Cart {cartItemAmount > 0 && <>({cartItemAmount})</>}
            </button>
        </div>
    )
}

export default Product