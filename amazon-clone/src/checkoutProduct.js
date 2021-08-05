import React from 'react'
import './checkoutProduct.css'
function CheckoutProduct({image,title,price,rating}) {
    return (
        <div className="checkoutProduct">

            <img className="checkoutProduct_image" alt='' src={image} />

            <div className="checkoutProduct_info">
                <p className='checkoutProduct_title'>{title}</p>
                <p className='checkoutProduct_price'>
                    <small>₹ </small>
                    <strong>{price}</strong>
                </p>
            </div>

            <div className="checkoutProduct_rating">
                {Array(rating).fill().map(()=>(<p>⭐</p>))}
            </div>

            <button>Remove From Cart</button>

            {/* https://youtu.be/RDV3Z1KCBvo?t=10517 */}


        </div>
    )
}

export default CheckoutProduct
