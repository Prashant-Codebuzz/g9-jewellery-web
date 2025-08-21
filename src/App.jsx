import React from 'react';
import { Route, Routes } from 'react-router-dom';

// Css
import './css/App.scss';
import AuthLayout from './components/layout/auth-layout/AuthLayout';
import SignIn from './pages/authentication/sign-in/SignIn';
import ForgotPassword from './pages/authentication/forgot-password/ForgotPassword';
import OtpMethod from './components/otp-Verification/OtpMethod';
import OtpVerification from './components/otp-Verification/OtpVerification';
import CreatePassword from './pages/authentication/create-password/CreatePassword';
import SignUp from './pages/authentication/sign-up/SignUp';
import AddressDetails from './pages/authentication/address-details/AddressDetails';
import ThemeToggle from './components/theme-toggle/ThemeToggle';
import DefaultLayout from './components/layout/default-layout/DefaultLayout';
import Account from './pages/account/my-account/Account';
import Orders from './pages/account/my-orders/Orders';
import Address from './pages/account/address/Address';
import EditAccount from './pages/account/my-account/edit/EditAccount';
import CreateAddress from './pages/account/address/create/CreateAddress';
import EditAddress from './pages/account/address/edit/EditAddress';
import Wishlist from './pages/account/my-wishlist/Wishlist';
import Home from './pages/home/Home';
import About from './pages/about/About';
import Blogs from './pages/blogs/Blogs';
import Faqs from './pages/faqs/Faqs';
import ContactUs from './pages/contact-us/ContactUs';
import Product from './pages/product/Product';
import ProductDetails from './pages/product-details/ProductDetails';
import Cart from './pages/cart/Cart';
import Checkout from './pages/checkout/Checkout';
import OrderConfirmation from './pages/order-confirmation/OrderConfirmation';
import PrivacyPolicy from './pages/policy/PrivacyPolicy';
import TermsConditions from './pages/policy/TermsConditions';
import PaymentDeliveryPolicy from './pages/policy/PaymentDeliveryPolicy';
import ReturnRefundPolicy from './pages/policy/ReturnRefundPolicy';

import ScrollToTop from './components/scroll-to-top/ScrollToTop';

function App() {
    return (
        <>

            <ScrollToTop />

            <Routes>
                {/* -- Authentication -- */}
                <Route element={<AuthLayout />}>
                    <Route path='/' element={<SignIn />} />
                    <Route path='/forgot-password' element={<ForgotPassword />} />
                    <Route path='/otp-method' element={<OtpMethod />} />
                    <Route path='/otp-verify' element={<OtpVerification />} />
                    <Route path='/create-password' element={<CreatePassword />} />

                    <Route path='/sign-up' element={<SignUp />} />
                    <Route path='/address-details' element={<AddressDetails />} />
                </Route>

                {/* -- Layout -- */}
                <Route element={<DefaultLayout />}>
                    {/* Account */}
                    <Route path='/account' element={<Account />} />
                    <Route path='/account/edit/:id' element={<EditAccount />} />
                    <Route path='/orders' element={<Orders />} />
                    <Route path='/address' element={<Address />} />
                    <Route path='/address/create' element={<CreateAddress />} />
                    <Route path='/address/edit/:id' element={<EditAddress />} />
                    <Route path='/wishlist' element={<Wishlist />} />

                    {/* Web */}
                    <Route path='/home' element={<Home />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/blogs' element={<Blogs />} />
                    <Route path='/faqs' element={<Faqs />} />
                    <Route path='/contact-us' element={<ContactUs />} />

                    <Route path='/product' element={<Product />} />
                    <Route path='/product-details/:id' element={<ProductDetails />} />

                    <Route path='/cart' element={<Cart />} />
                    <Route path='/cart/checkout' element={<Checkout />} />
                    <Route path='/cart/checkout/completed' element={<OrderConfirmation />} />

                    <Route path='/privacy-policy' element={<PrivacyPolicy />} />
                    <Route path='/terms-conditions' element={<TermsConditions />} />
                    <Route path='/payment-delivery-policy' element={<PaymentDeliveryPolicy />} />
                    <Route path='/return-refund-policy' element={<ReturnRefundPolicy />} />

                </Route>

            </Routes>

            {/* -- ThemeToggle -- */}
            <ThemeToggle />

        </>
    )
}

export default App;