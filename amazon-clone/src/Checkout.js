import React from 'react'
import './Checkout.css'
import Subtotal from './Subtotal'
function Checkout() {
    return (
        <div className="checkout">

            <div className="checkout_left">

                <img class="checkout_ad" src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/OHL_HMT/AugART/T11/PC_01.gif" alt="" />

                <div>
                    <h2 className="checkout_title">Your Shopping Basket</h2>
                    {/* {BASKET ITEM} */}
                </div>

            </div>


            <div className="checkout_right">
                 <Subtotal />
            </div>

        </div>
    )
}

export default Checkout
