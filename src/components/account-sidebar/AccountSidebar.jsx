import React, { useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom';

// Css
import "./AccountSidebar.scss";

// Image
// Light
import UserLight from "../../assets/images/account/user-light.svg";
import OrderLight from "../../assets/images/account/order-light.svg";
import AddressLight from "../../assets/images/account/address-light.svg";
import WishlistLight from "../../assets/images/account/wishlist-light.svg";
import SignoutLight from "../../assets/images/account/signout-light.svg";

import UserActiveLight from "../../assets/images/account/user-active-light.svg";
import OrderActiveLight from "../../assets/images/account/order-active-light.svg";
import AddressActiveLight from "../../assets/images/account/address-active-light.svg";
import WishlistActiveLight from "../../assets/images/account/wishlist-active-light.svg";

// Dark
import UserDark from "../../assets/images/account/user-dark.svg";
import OrderDark from "../../assets/images/account/order-dark.svg";
import AddressDark from "../../assets/images/account/address-dark.svg";
import WishlistDark from "../../assets/images/account/wishlist-dark.svg";
import SignoutDark from "../../assets/images/account/signout-dark.svg";

import UserActiveDark from "../../assets/images/account/user-active-dark.svg";
import OrderActiveDark from "../../assets/images/account/order-active-dark.svg";
import AddressActiveDark from "../../assets/images/account/address-active-dark.svg";
import WishlistActiveDark from "../../assets/images/account/wishlist-active-dark.svg";

import SignOut from '../modal/sign-out/SignOut';
import { useDispatch, useSelector } from 'react-redux';
import { reqtoSignOut } from '../../redux-Toolkit/services/AuthServices';
import useThemeMode from '../../hooks/useThemeMode';

const AccountSidebar = () => {

    const ThemeMode = useThemeMode();

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { loader } = useSelector((state) => state.UserAuth)

    const [signOutModalShow, setSignOutModalShow] = useState(false);

    const handleClose = () => {
        setSignOutModalShow(false);
    }

    const handleSignOut = async () => {
        // const res = await dispatch(reqtoSignOut());

        // if (res.payload?.status) {
            // setSignOutModalShow(false);

            navigate("/home");
        // }
    }

    return (
        <div className='account_sidebar'>
            <h4>Hii, Tarun Patel!</h4>

            <ul>
                <li>
                    <NavLink to="/account">
                        {({ isActive }) => (
                            <>
                                <img src={isActive ? ThemeMode ? UserActiveLight : UserActiveDark : ThemeMode ? UserLight : UserDark} alt="" className='img-fluid' draggable={false} />

                                Account Overview
                            </>
                        )}
                    </NavLink>
                </li>

                <li>
                    <NavLink to="/orders">
                        {({ isActive }) => (
                            <>
                                <img src={isActive ? ThemeMode ? OrderActiveLight : OrderActiveDark : ThemeMode ? OrderLight : OrderDark} alt="" className='img-fluid' draggable={false} />

                                My Orders
                            </>
                        )}
                    </NavLink>
                </li>

                <li>
                    <NavLink to="/address">
                        {({ isActive }) => (
                            <>
                                <img src={isActive ? ThemeMode ? AddressActiveLight : AddressActiveDark : ThemeMode ? AddressLight : AddressDark} alt="" className='img-fluid' draggable={false} />

                                Manage Address
                            </>
                        )}
                    </NavLink>
                </li>

                <li>
                    <NavLink to="/wishlist">
                        {({ isActive }) => (
                            <>
                                <img src={isActive ? ThemeMode ? WishlistActiveLight : WishlistActiveDark : ThemeMode ? WishlistLight : WishlistDark} alt="" className='img-fluid' draggable={false} />

                                My Wishlist
                            </>
                        )}
                    </NavLink>
                </li>

                <li>
                    <Link
                        onClick={() => {
                            setSignOutModalShow(true)

                        }}
                    >
                        <img src={ThemeMode ? SignoutLight : SignoutDark} alt="" className='img-fluid' draggable={false} />

                        Sign-out
                    </Link>
                </li>
            </ul>


            {/* Modal-Primary */}
            <SignOut show={signOutModalShow} handleClose={handleClose} handleSignOut={handleSignOut} loader={loader} />

        </div>
    )
}

export default AccountSidebar;