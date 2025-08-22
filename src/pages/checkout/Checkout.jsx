import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

// Css
import "./Checkout.scss"

// Image
import OrderImg from "../../assets/images/account/my-orders.svg";
// Light    
import HomeLight from "../../assets/images/account/home-light.svg";
import WorkLight from "../../assets/images/account/work-light.svg";
import OtherLight from "../../assets/images/account/other-light.svg";
// Dark
import HomeDark from "../../assets/images/account/home-dark.svg";
import WorkDark from "../../assets/images/account/work-dark.svg";
import OtherDark from "../../assets/images/account/other-dark.svg";

import ChooseAddress from '../../components/modal/choose-address/ChooseAddress';

import useThemeMode from '../../hooks/useThemeMode';

const initialModalState = {
    chooseAddress: false,
}
const Checkout = () => {

    const ThemeMode = useThemeMode();

    const navigate = useNavigate();

    const initialAddressState = {
        type: "Home",
        image: ThemeMode ? HomeLight : HomeDark,
        address: "123, Shyamdham Soc, Nana Varachha Surat, Gujarat, India - 395006",
    }

    const [modalShow, setModalShow] = useState(initialModalState);

    const [selectedAddress, setSelectedAddress] = useState(initialAddressState);

    const handleClose = () => {
        setModalShow(initialModalState);
    }

    return (
        <>

            {/* ------ Checkout Start ------ */}
            <div className="checkout pd-x">
                <div className='checkout_top'>
                    <div className="page_menu">
                        Cart {` > `} <span>Address & Payment</span>
                    </div>

                    <h4>Delivery Address</h4>

                    <p>
                        Please select your delivery address and continue to payment for order confirmation.
                    </p>
                </div>

                <div className="checkout_area">
                    <div className="row">
                        <div className="col-lg-8">
                            <form className='row m-0'>
                                <div className="address px-0">
                                    <div className='title d-flex align-items-center'>
                                        {/* <img src={userAddress?.address_type === 'Home' ? HomeLight : userAddress?.address_type === 'Work' ? WorkLight : OtherLight} alt="" className='img-fluid me-3' draggable={false} /> */}
                                        <img src={selectedAddress.image} alt="" className='img-fluid me-3' draggable={false} />

                                        {selectedAddress.type}
                                    </div>

                                    <p className='mb-0'>
                                        {/* 123, Shyamdham Soc, Nana Varachha Surat, Gujarat, India - 395006 */}
                                        {selectedAddress.address}
                                    </p>

                                    <button
                                        type='button'
                                        className='main_btn choose_another_address'
                                        onClick={() => {
                                            setModalShow({ ...modalShow, chooseAddress: true });
                                        }}
                                    >
                                        CHOOSE ANOTHER ADDRESS
                                    </button>
                                </div>

                                <div className='px-0'>
                                    <h4 className='mb-0'>GST Details (Optional)</h4>

                                    <p>Please enter your gst details.</p>
                                </div>

                                <div className="col-lg-12 mb-4 px-0">
                                    <label htmlFor="name" className='form-label'>Name</label>
                                    <div>
                                        <input
                                            type="text"
                                            name='name'
                                            placeholder=''
                                            className='form-control'
                                        />
                                    </div>
                                </div>
                                <div className="col-lg-12 mb-4 px-0">
                                    <label htmlFor="email" className='form-label'>GST Number</label>
                                    <div>
                                        <input
                                            type="text"
                                            name='email'
                                            placeholder=''
                                            className='form-control'
                                        />
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="col-lg-4">
                            <div className="order_summary">
                                <h4>Order Summary</h4>

                                <div className='price_list'>
                                    <div className='d-flex justify-content-between align-items-center mb-15 total'>
                                        <div className="name">Subtotal</div>
                                        <div className="price">$828.00</div>
                                    </div>
                                    <div className='d-flex justify-content-between align-items-center mb-15'>
                                        <div className="name">GST & Taxes (18%)</div>
                                        <div className="price">$149.04</div>
                                    </div>
                                    <div className='d-flex justify-content-between align-items-center mb-15'>
                                        <div className="name">Shipping</div>
                                        <div className="price">$120.00</div>
                                    </div>
                                    <div className='d-flex justify-content-between align-items-center mb-15 coupon'>
                                        <div className="name">Coupon Applied</div>
                                        <div className="price">- $175.00</div>
                                    </div>
                                    <div className='d-flex justify-content-between align-items-center total'>
                                        <div className="name">Total</div>
                                        <div className="price">$922.04</div>
                                    </div>
                                </div>

                                <button type='button' className='main_btn pay_now' onClick={() => navigate("/cart/checkout/completed")}>
                                    PAY NOW ($922.04)
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* ------ Checkout End ------ */}


            {/* Modal-Choose-Address */}
            <ChooseAddress show={modalShow.chooseAddress} handleClose={handleClose} handleSelectAddress={(i) => setSelectedAddress(i)} />


        </>
    )
}

export default Checkout;