import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

// Css
import "./Cart.scss"

// Image
import OrderImg from "../../assets/images/account/my-orders.svg";
import Minus from "../../assets/images/cart/minus.svg";
import Plus from "../../assets/images/cart/plus.svg";
import Delete from "../../assets/images/cart/delete.svg";

const Cart = () => {

    const navigate = useNavigate();

    const [quantity, setQuantity] = useState(CartData?.map(() => 1));

    const handleMinusQty = (index) => {
        setQuantity((prev) =>
            prev.map((qty, i) => (i === index ? Math.max(1, qty - 1) : qty))
        );
    }

    const handlePlusQty = (index) => {
        setQuantity((prev) =>
            prev.map((qty, i) => (i === index ? qty + 1 : qty))
        );
    }

    return (
        <>

            {/* ------ Cart Start ------ */}
            <div className="cart pd-x">
                <div className='cart_top'>
                    <h4>Your Shopping Cart</h4>

                    <p>
                        Have an Coupon Code? <button type='button'>Apply Now</button>
                    </p>
                </div>

                <div className="cart_area">
                    <div className="row">
                        <div className="col-lg-8">
                            {/* <div className="order_box d-flex align-items-center">
                                <div className="image">
                                    <img src={OrderImg} alt="Product" className='img-fluid' draggable={false} />
                                </div>

                                <div className="order_detail w-1001">
                                    <div className="name">Silver Engagement Diamond Ring</div>
                                    <div className="price">$276.00</div>
                                    <div className="quantity_control">
                                        <button type='button' onClick={handleMinusQty} disabled={quantity === 1} >
                                            <img src={Minus} alt="Minus" className='img-fluid' draggable={false} />
                                        </button>
                                        <span>{quantity}</span>
                                        <button type='button' onClick={handlePlusQty}>
                                            <img src={Plus} alt="Plus" className='img-fluid' draggable={false} />
                                        </button>
                                    </div>
                                </div>
                            </div> */}

                            {
                                CartData?.map((i, index) => {
                                    return (
                                        <div className="order_box d-flex align-items-center" key={index}>
                                            <button type='button' className='delete_order' >
                                                <img src={Delete} alt="Minus" className='img-fluid' draggable={false} />
                                            </button>

                                            <div className="image">
                                                <img src={OrderImg} alt="Product" className='img-fluid' draggable={false} />
                                            </div>

                                            <div className="order_detail w-1001">
                                                <div className="name">{i.name}</div>
                                                <div className="price">
                                                    {/* {i.price} */}
                                                    {(i.price * quantity[index]).toFixed(2)}
                                                </div>
                                                <div className="quantity_control">
                                                    <button
                                                        type='button'
                                                        onClick={() => handleMinusQty(index)}
                                                        disabled={quantity[index] === 1}
                                                    >
                                                        <img src={Minus} alt="Minus" className='img-fluid' draggable={false} />
                                                    </button>
                                                    <span>{quantity[index]}</span>
                                                    <button
                                                        type='button'
                                                        onClick={() => handlePlusQty(index)}
                                                    >
                                                        <img src={Plus} alt="Plus" className='img-fluid' draggable={false} />
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }

                        </div>
                        <div className="col-lg-4">
                            <div className="order_summary">
                                <h4>Order Summary</h4>

                                <div className='price_list'>
                                    <div className='d-flex justify-content-between align-items-center'>
                                        <div className="name">Subtotal</div>
                                        <div className="price">$828.00</div>
                                    </div>
                                    <div className='d-flex justify-content-between align-items-center coupon'>
                                        <div className="name">Coupon Applied <button type='button'>Remove</button></div>
                                        <div className="price">- $175.00</div>
                                    </div>
                                    <div className='d-flex justify-content-between align-items-center total'>
                                        <div className="name">Total</div>
                                        <div className="price">$922.04</div>
                                    </div>
                                </div>

                                <button type='button' className='main_btn checkout_now' onClick={() => navigate("/cart/checkout")}>
                                    CHECKOUT NOW
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* ------ Cart End ------ */}

        </>
    )
}

export default Cart;



const CartData = [
    {
        image: OrderImg,
        name: "Silver Engagement Diamond Ring",
        price: 276,
    },
    {
        image: OrderImg,
        name: "Silver Engagement Diamond Ring",
        price: 276,
    },
    {
        image: OrderImg,
        name: "Silver Engagement Diamond Ring",
        price: 276,
    },
]