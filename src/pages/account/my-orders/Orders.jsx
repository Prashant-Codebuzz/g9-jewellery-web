import React from 'react'

// Css

// Image
// Light
import OrderImg from "../../../assets/images/account/my-orders.svg";

import AccountSidebar from '../../../components/account-sidebar/AccountSidebar';
import { useNavigate } from 'react-router-dom';

const Orders = () => {

    const navigate = useNavigate();

    return (
        <>

            {/* ------ Orders Start ------ */}
            <div className="account pd-x">
                <div className="page_menu">
                    Home {` > `} <span>My Orders</span>
                </div>


                <div className="row">
                    <div className="col-lg-3">
                        <AccountSidebar />
                    </div>

                    <div className="col-lg-9">
                        <div className="account_overview">
                            <h4>My Orders</h4>

                            <div className="details">

                                <div className="order_box d-flex">
                                    <div className="image">
                                        <img src={OrderImg} alt="" className='img-fluid' draggable={false} />
                                    </div>
                                    <div className="order_detail w-100">
                                        <div className="d-flex justify-content-between align-items-center">
                                            <div className="id">
                                                Order ID: <span>#569848</span>
                                            </div>

                                            <div className='status pending'>
                                                Pending
                                            </div>
                                        </div>

                                        <div className="name">Silver Engagement Diamond Ring</div>
                                        <div className="price">Total: $138.00</div>

                                        <button type='button' className='main_btn order_btn' onClick={() => navigate(`/order-details/${1}`)}>
                                            Order Details
                                        </button>
                                    </div>
                                </div>

                                <div className="line"></div>    

                                <div className="order_box d-flex">
                                    <div className="image">
                                        <img src={OrderImg} alt="" className='img-fluid' draggable={false} />
                                    </div>
                                    <div className="order_detail w-100">
                                        <div className="d-flex justify-content-between align-items-center">
                                            <div className="id">
                                                Order ID: <span>#856328</span>
                                            </div>

                                            <div className='status delivered'>
                                                Delivered
                                            </div>
                                        </div>

                                        <div className="name">Silver Engagement Diamond Ring</div>
                                        <div className="price">Total: $165.00</div>

                                        <button type='button' className='main_btn order_btn' onClick={() => navigate(`/order-details/${1}`)}>
                                            Order Details
                                        </button>
                                    </div>
                                </div>

                                <div className="line"></div>

                                <div className="order_box d-flex">
                                    <div className="image">
                                        <img src={OrderImg} alt="" className='img-fluid' draggable={false} />
                                    </div>
                                    <div className="order_detail w-100">
                                        <div className="d-flex justify-content-between align-items-center">
                                            <div className="id">
                                                Order ID: <span>#6598745</span>
                                            </div>

                                            <div className='status cancelled'>
                                                Cancelled
                                            </div>
                                        </div>

                                        <div className="name">Silver Engagement Diamond Ring</div>
                                        <div className="price">Total: $125.00</div>

                                        <button type='button' className='main_btn order_btn' onClick={() => navigate(`/order-details/${1}`)}>
                                            Order Details
                                        </button>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* ------ Orders End ------ */}


        </>
    )
}

export default Orders;
