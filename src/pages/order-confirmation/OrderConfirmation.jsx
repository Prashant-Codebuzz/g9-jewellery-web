import React from 'react'
import { Link, useNavigate } from 'react-router-dom';

// Css
import "./OrderConfirmation.scss"

// Image
import OrderPlace from "../../assets/images/cart/order_placed.svg";

const OrderConfirmation = () => {

    const navigate = useNavigate();

    return (
        <>

            {/* ------ Order-Placed Start ------ */}
            <div className="order_placed pd-x text-center">
                <h4>Order Placed!</h4>

                <p className=''>
                    Your order was successfully placed and is prepared for shipping
                </p>

                <div className='order_placed_image'>
                    <img src={OrderPlace} alt="Order Placed" className='img-fluid' draggable={false} />
                </div>

                <h4>Order ID: #569848</h4>

                <p>
                    <Link>View Order Details</Link>
                </p>

                <button type='button' className='main_btn back_to_home' onClick={() => navigate("/home")}>
                    BACK TO HOME
                </button>
            </div>
            {/* ------ Order-Placed End ------ */}

        </>
    )
}

export default OrderConfirmation;