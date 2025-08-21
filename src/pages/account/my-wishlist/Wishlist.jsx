import React, { useEffect } from 'react'

// Css

// Image
// Light
import MyWishlist1 from "../../../assets/images/account/my-wishlist1.svg";
import MyWishlist2 from "../../../assets/images/account/my-wishlist2.svg";
import MyWishlist3 from "../../../assets/images/account/my-wishlist3.svg";
import RatingStar from "../../../assets/images/account/rating-star.svg";
import Like from "../../../assets/images/account/like.svg";
import UnLikeLight from "../../../assets/images/account/unlike-light.svg";

import AccountSidebar from '../../../components/account-sidebar/AccountSidebar';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { reqtoDeleteWishlist, reqtoGetWishlist } from '../../../redux-Toolkit/services/AccountServices';

const Wishlist = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const userAccount = useSelector((state) => state.UserAccount);
    const { loader, wishList } = userAccount;

    const GetWishlist = async () => {
        await dispatch(reqtoGetWishlist());
    }

    const handleDelete = async (id) => {
        const res = await dispatch(reqtoDeleteWishlist(id));

        if (res.payload?.status) {
            GetWishlist();
        }
    }

    useEffect(() => {
        GetWishlist();
    }, []);


    return (
        <>

            {/* ------ Wishlist Start ------ */}
            <div className="account pd-x">
                <div className="page_menu">
                    Home {` > `} <span>My Wishlist</span>
                </div>


                <div className="row">
                    <div className="col-lg-3">
                        <AccountSidebar />
                    </div>

                    <div className="col-lg-9">
                        <div className="account_overview">
                            <h4 className='wishlist'>My Wishlist</h4>

                            <div className="row g-5">
                                <div className="col-lg-4">
                                    <div className="wishlist_box">
                                        <div className="image">
                                            <img src={MyWishlist1} alt="" className='img-fluid' draggable={false} />
                                        </div>
                                        <div className="wishlist_detail">
                                            <div className="d-flex justify-content-between align-items-center">
                                                <div className="rating d-flex gap-1">
                                                    {
                                                        Array.from({ length: 5 }).map((_, index) => (
                                                            <img src={RatingStar} alt="" className='img-fluid' draggable={false} key={index} />
                                                        ))
                                                    }
                                                </div>

                                                <div className='like'>
                                                    <button type='button' className=''>
                                                        <img src={Like} alt="" className='img-fluid' draggable={false} />
                                                    </button>
                                                </div>
                                            </div>

                                            <div className="name">Gold Diamond Bracelets</div>

                                            <p className='mb-0'>
                                                Timeless elegance to your wrist with our stunning collection of Gold Diamond Bracelets.
                                            </p>

                                            <div className="price">$160.00</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="wishlist_box">
                                        <div className="image">
                                            <img src={MyWishlist2} alt="" className='img-fluid' draggable={false} />
                                        </div>
                                        <div className="wishlist_detail">
                                            <div className="d-flex justify-content-between align-items-center">
                                                <div className="rating d-flex gap-1">
                                                    {
                                                        Array.from({ length: 5 }).map((_, index) => (
                                                            <img src={RatingStar} alt="" className='img-fluid' draggable={false} key={index} />
                                                        ))
                                                    }
                                                </div>

                                                <div className='like'>
                                                    <button type='button' className=''>
                                                        <img src={Like} alt="" className='img-fluid' draggable={false} />
                                                    </button>
                                                </div>
                                            </div>

                                            <div className="name">Silver Diamond Neckless</div>

                                            <p className='mb-0'>
                                                Elegance with our exquisite Silver Diamond Necklace - where timeless charm meets modern sophistication.
                                            </p>

                                            <div className="price">$130.00</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="wishlist_box">
                                        <div className="image">
                                            <img src={MyWishlist3} alt="" className='img-fluid' draggable={false} />
                                        </div>
                                        <div className="wishlist_detail">
                                            <div className="d-flex justify-content-between align-items-center">
                                                <div className="rating d-flex gap-1">
                                                    {
                                                        Array.from({ length: 5 }).map((_, index) => (
                                                            <img src={RatingStar} alt="" className='img-fluid' draggable={false} key={index} />
                                                        ))
                                                    }
                                                </div>

                                                <div className='like'>
                                                    <button type='button' className=''>
                                                        <img src={Like} alt="" className='img-fluid' draggable={false} />
                                                    </button>
                                                </div>
                                            </div>

                                            <div className="name">Silver Diamond Earring</div>

                                            <p className='mb-0'>
                                                Brilliance to your style with our Silver Diamond Earrings – where classic elegance meets modern shine.
                                            </p>

                                            <div className="price">$140.00</div>
                                        </div>
                                    </div>
                                </div>

                                {/* {
                                    wishList?.map((i, index) => {
                                        return (
                                            <div className="col-lg-4" key={i?.product_id}>
                                                <div className="wishlist_box">
                                                    <div className="image">
                                                        <img src={i?.images[0]} alt="" className='img-fluid' draggable={false} />
                                                    </div>
                                                    <div className="wishlist_detail">
                                                        <div className="d-flex justify-content-between align-items-center">
                                                            <div className="rating d-flex gap-1">
                                                                {
                                                                    Array.from({ length: 5 }).map((_, index) => (
                                                                        <img src={RatingStar} alt="" className='img-fluid' draggable={false} key={index} />
                                                                    ))
                                                                }
                                                            </div>

                                                            <div className='like'>
                                                                <button type='button' className='' onClick={() => handleDelete(i?.product_id)}>
                                                                    <img src={Like} alt="" className='img-fluid' draggable={false} />
                                                                    <img src={wishList.some(w => w.product_id === i.product_id) ? Like : UnLikeLight} alt="" className='img-fluid' draggable={false} />
                                                                </button>
                                                            </div>  
                                                        </div>

                                                        <div className="name">{i?.title}</div>

                                                        <p className='mb-0'>
                                                            {i?.description}
                                                        </p>

                                                        <div className="price">${i?.original_price}</div>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })
                                } */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* ------ Wishlist End ------ */}

        </>
    )
}

export default Wishlist;