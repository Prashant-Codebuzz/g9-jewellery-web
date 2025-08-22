import React from 'react'

// Css
import "./OrderDetails.scss"

// Image
import OrderImg from "../../../assets/images/account/my-orders.svg";
import PdfImg from "../../../assets/images/account/pdf.svg";
// Light
import HomeLight from "../../../assets/images/account/home-light.svg";
// Dark
import HomeDark from "../../../assets/images/account/home-dark.svg";

import useThemeMode from '../../../hooks/useThemeMode';


const OrderDetails = () => {

    const ThemeMode = useThemeMode();

    return (
        <>

            {/* ------ Order-Detail Start ------ */}
            <div className="order_details pd-x">
                <div className="page_menu">
                    My Orders {` > `} <span>Order Details</span>
                </div>

                <div className="order_detail_info d-flex justify-content-between align-items-center">
                    <div className='d-flex align-items-center'>
                        <div>
                            <h4>Order ID: #569848</h4>

                            <p className='mb-0'>
                                Order Date: 20 Aug, 2025
                            </p>
                        </div>

                        <button type='button' className='pdf_btn ms-4'>
                            <img src={PdfImg} alt="" className='img-fluid' draggable={false} />
                        </button>
                    </div>

                    <div className='status delivered'>
                        Delivered
                    </div>
                </div>

                <div className="lines mx-0"></div>

                <div className="products_detail_info">
                    <h4>Products</h4>

                    <div className="order_box d-flex align-items-center">
                        <div className="image">
                            <img src={OrderImg} alt="" className='img-fluid' draggable={false} />
                        </div>
                        <div className="order_detail w-100">
                            <div className="d-flex justify-content-between align-items-center">
                                <div className="name">
                                    Silver Engagement Diamond Ring
                                </div>

                                <div className='total_price'>
                                    $276.00
                                </div>
                            </div>

                            <div className="qty">Quantity: 2</div>
                            <div className="price">Per Item: $138.00</div>
                        </div>
                    </div>

                    <div className="order_box d-flex align-items-center">
                        <div className="image">
                            <img src={OrderImg} alt="" className='img-fluid' draggable={false} />
                        </div>
                        <div className="order_detail w-100">
                            <div className="d-flex justify-content-between align-items-center">
                                <div className="name">
                                    Silver Engagement Diamond Ring
                                </div>

                                <div className='total_price'>
                                    $138.00
                                </div>
                            </div>

                            <div className="qty">Quantity: 1</div>
                            <div className="price">Per Item: $138.00</div>
                        </div>
                    </div>
                </div>

                <div className="lines mx-0"></div>

                <div className="payment_detail_info">
                    <h4>Payment Details</h4>

                    <div className='price_list'>
                        <div className='d-flex justify-content-between align-items-center mb-13'>
                            <div className="name">Payment Method</div>
                            <div className="price">UPI: xxxxxx@oksbi</div>
                        </div>
                        <div className='d-flex justify-content-between align-items-center mb-13 total'>
                            <div className="name">Subtotal</div>
                            <div className="price">$414.00</div>
                        </div>
                        <div className='d-flex justify-content-between align-items-center mb-13'>
                            <div className="name">GST & Taxes (18%)</div>
                            <div className="price">$74.52</div>
                        </div>
                        <div className='d-flex justify-content-between align-items-center mb-13'>
                            <div className="name">Shipping Fees</div>
                            <div className="price">$120.00</div>
                        </div>
                        <div className='d-flex justify-content-between align-items-center mb-13 coupon'>
                            <div className="name">Coupon</div>
                            <div className="price">- $175.00</div>
                        </div>
                        <div className='d-flex justify-content-between align-items-center total'>
                            <div className="name">Total</div>
                            <div className="price">$433.52</div>
                        </div>
                    </div>
                </div>

                <div className="lines mx-0"></div>

                <div className="shipping_detail px-0">
                    <h4>Shipping Details</h4>

                    <div className='title d-flex align-items-center'>
                        <img src={ThemeMode ? HomeLight : HomeDark} alt="" className='img-fluid me-3' draggable={false} />
                        Home
                    </div>
                    <p className='mb-0'>
                        123, Shyamdham Soc, Nana Varachha Surat, Gujarat, India - 395006
                    </p>
                </div>

            </div>
            {/* ------ Order-Detail End ------ */}

        </>
    )
}

export default OrderDetails;