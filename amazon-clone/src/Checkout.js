import React from 'react'
import './Checkout.css'
import { useStateValue } from './StateProvider'
import Subtotal from './Subtotal'
import CheckoutProduct from './checkoutProduct';

function Checkout() {
    const [{basket}, dispatch]= useStateValue();
    return (
        <div className="checkout">

            <div className="checkout_left">

                <img class="checkout_ad" src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/OHL_HMT/AugART/T11/PC_01.gif" alt="" />

                <div>
                    <h2 className="checkout_title">Your Shopping Basket</h2>

                    {basket.map(item=>(
                        <CheckoutProduct 
                            title={item.title}
                            image={item.image}
                            price={item.price}
                            rating={item.rating}
                        />
                    ))}
                </div>
                

            </div>


            <div className="checkout_right">
                 <Subtotal />
            </div>

        </div>
    )
}

export default Checkout
