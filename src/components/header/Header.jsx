import React from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom';

// Css
import "./Header.scss"

// Image
// Light
import LogoLight from "../../assets/images/header/logo-light.svg";
import CartLight from "../../assets/images/header/cart-light.svg";
import UserLight from "../../assets/images/header/user-light.svg";
import DropdownLight from "../../assets/images/header/dropdown-light.svg";
import ProductJewelleryLight from "../../assets/images/header/product-jewellery-light.svg";



const Header = () => {
    return (
        <>

            {/* ------ Top-bar Start ------ */}
            <div className="top_bar">
                <p className="mb-0 text-center">
                    The Fall Sale at G9 Jewellery | <span>25% Off Ring Settings & Bands</span>
                </p>
            </div>
            {/* ------ Top-bar End ------ */}



            {/* ------ Header Start ------ */}
            <header className=''>
                <div className='top pd-x'>
                    <div className="">
                        <nav className="navbar navbar-expand-lg">
                            <div className="container-fluid p-0">
                                <div className='navbar-brand me-0'>
                                    <Link to="/home">
                                        <img src={LogoLight} alt="" className='img-fluid logo' />
                                    </Link>
                                </div>

                                <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>

                                <div className="offcanvas offcanvas-start" data-bs-scroll="true" tabIndex="-1" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
                                    <div className="offcanvas-header">
                                        <div className='navbar-brand'>
                                            <Link>
                                                <img src={LogoLight} alt="" className='img-fluid' />
                                            </Link>
                                        </div>
                                        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                                    </div>
                                    <div className="offcanvas-body align-items-center">

                                        <form className="me-auto d-none d-lg-flex" role="search">
                                            <input type="text" placeholder="Search Product..." required />

                                            <button type="submit" className="search_btn">
                                                Search
                                            </button>
                                        </form>

                                        <div className='accounts ms-auto d-none d-lg-block d-lg-flex align-items-lg-center'>
                                            <div className=''>
                                                <Link to="/cart" className='d-flex align-items-center cart' >
                                                    <img src={CartLight} alt="" className='img-fluid' draggable={false} />

                                                    <span className=''></span>

                                                    <div className="quantity">
                                                        $138.00
                                                    </div>
                                                </Link>
                                            </div>

                                            <div className='mx-4'>
                                                <Link className='d-flex align-items-center cart'>
                                                    <div className="quantity me-3">
                                                        Currency
                                                    </div>

                                                    <img src={DropdownLight} alt="" className='img-fluid' draggable={false} />
                                                </Link>
                                            </div>
                                            <div className=''>
                                                <Link to="/account">
                                                    <img src={UserLight} alt="" className='img-fluid' draggable={false} />
                                                </Link>
                                            </div>
                                        </div>

                                        <ul className="navbar-nav mb-0 mb-lg-0 me-auto d-none">
                                            <li className="nav-item mb-2 mb-lg-0" data-bs-dismiss="offcanvas">
                                                <NavLink to="/" className="nav-link">HOME</NavLink>
                                            </li>
                                            <li className="nav-item mb-2 mb-lg-0" data-bs-dismiss="offcanvas">
                                                <NavLink to="/about-us" className="nav-link">ABOUT US</NavLink>
                                            </li>
                                            <li className="nav-item mb-2 mb-lg-0" onMouseEnter={() => setIsSubMenuVisible(true)} onMouseLeave={() => setIsSubMenuVisible(false)} data-bs-dismiss="offcanvas">

                                                <div className="nav-link d-flex align-items-center">
                                                    SERVICES
                                                    {/* <img src={Dropdown} alt="Instagram" className='img-cluid ms-3' /> */}
                                                </div>

                                                {/* {
                                                    isSubMenuVisible && (
                                                        <ul className="sub-menu">
                                                            <li><Link className="nav-link" to={`/services-details/${ServicesData[0]?.slug}`} onClick={() => setIsSubMenuVisible(false)}>COLOR CONSULTATION</Link></li>
                                                            <li><Link className="nav-link" to={`/services-details/${ServicesData[1]?.slug}`} onClick={() => setIsSubMenuVisible(false)}>SPACE PLANNING</Link></li>
                                                            <li><Link className="nav-link" to={`/services-details/${ServicesData[2]?.slug}`} onClick={() => setIsSubMenuVisible(false)}>HOME RENOVATIONS</Link></li>
                                                            <li><Link className="nav-link" to={`/services-details/${ServicesData[3]?.slug}`} onClick={() => setIsSubMenuVisible(false)}>BESPOKE FURNITURE</Link></li>
                                                        </ul>
                                                    )
                                                } */}

                                            </li>
                                            <li className="nav-item mb-2 mb-lg-0" data-bs-dismiss="offcanvas">
                                                <NavLink to="/packages" className="nav-link">PACKAGES</NavLink>
                                            </li>
                                            <li className="nav-item mb-0 mb-lg-0" data-bs-dismiss="offcanvas">
                                                <NavLink to="/contact-us" className="nav-link">CONTACT US</NavLink>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
                {/* <div className='second d-none d-lg-block'>
                    <div className="pd-x">
                        <nav className="navbar navbar-expand-lg">
                            <div className="container-fluid p-0">
                                <div className='navbar-brand me-0'>
                                </div>

                                <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>

                                <div className="offcanvas offcanvas-start" data-bs-scroll="true" tabIndex="-1" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
                                    <div className="offcanvas-header">
                                        <div className='navbar-brand'>
                                            <Link>
                                            </Link>
                                        </div>
                                        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                                    </div>
                                    <div className="offcanvas-body align-items-center">
                                        <ul className="navbar-nav mb-0 mb-lg-0 me-auto">
                                            <li className="nav-item mb-2 mb-lg-0" data-bs-dismiss="offcanvas">
                                                <NavLink to="/home" className="nav-link">Home</NavLink>
                                            </li>
                                            <li className="nav-item mb-2 mb-lg-0" data-bs-dismiss="offcanvas">
                                                <NavLink className="nav-link d-flex align-items-center">
                                                    Products
                                                    <img src={DropdownLight} alt="" className='img-cluid ms-2' draggable={false} />
                                                </NavLink>

                                                <div className="sub-menu">

                                                </div>
                                            </li>
                                            <li className="nav-item mb-2 mb-lg-0" data-bs-dismiss="offcanvas">
                                                <NavLink className="nav-link">About Us</NavLink>
                                            </li>
                                            <li className="nav-item mb-0 mb-lg-0" data-bs-dismiss="offcanvas">
                                                <NavLink className="nav-link">Contact Us</NavLink>
                                            </li>
                                        </ul>

                                        <div className='support me-5'>
                                            <Link className='' to="tel:+1234657890">
                                                +123 465 7890
                                            </Link>
                                            <span>Call or Text 24/7</span>
                                        </div>

                                        <button type='button' className='main_btn ask_price'>
                                            ASK PRICE
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div> */}


                <div className='second d-none d-lg-block'>
                    <div className="">
                        <nav className="navbar navbar-expand-lg pd-x">
                            <div className="container-fluid d-block p-0">
                                <div className="d-flex justify-content-between align-items-center">
                                    <ul className="navbar-nav mb-0 mb-lg-0 me-auto">
                                        <li className="nav-item mb-2 mb-lg-0">
                                            <NavLink to="/home" className="nav-link">Home</NavLink>
                                        </li>
                                        <li className="nav-item mb-2 mb-lg-0">
                                            <NavLink className="nav-link d-flex align-items-center">
                                                Products
                                                <img src={DropdownLight} alt="" className='img-cluid ms-2' draggable={false} />
                                            </NavLink>

                                            {/* <ul className="sub-menu pd-x">
                                                    <li><Link className="nav-link">COLOR CONSULTATION</Link></li>
                                                    <li><Link className="nav-link">SPACE PLANNING</Link></li>
                                                    <li><Link className="nav-link">HOME RENOVATIONS</Link></li>
                                                    <li><Link className="nav-link">BESPOKE FURNITURE</Link></li>
                                                </ul> */}

                                            <div className='sub-menu'>
                                                <div></div>
                                                <div className="pd-x">
                                                    <div className="row">
                                                        <div className="col-lg-3">
                                                            <h3 className='mb-0'>Men’s Jewellery</h3>

                                                            <ul>
                                                                <li><Link to="/product">Rings</Link></li>
                                                                <li><Link to="/product">Bracelets</Link></li>
                                                            </ul>
                                                        </div>
                                                        <div className="col-lg-3">
                                                            <h3 className='mb-0'>Women’s Jewellery</h3>

                                                            <ul>
                                                                <li><Link to="/product">Rings</Link></li>
                                                                <li><Link to="/product">Bracelets</Link></li>
                                                                <li><Link to="/product">Necklaces</Link></li>
                                                                <li><Link to="/product">Earrings</Link></li>
                                                                <li><Link to="/product">Chains</Link></li>
                                                            </ul>
                                                        </div>
                                                        <div className="col-lg-3">
                                                            <h3 className='mb-0'>Accessories</h3>

                                                            <ul>
                                                                <li><Link to="/product">Watches</Link></li>
                                                                <li><Link to="/product">Diamonds</Link></li>
                                                            </ul>
                                                        </div>
                                                        <div className="col-lg-3">
                                                            <div className="image">
                                                                <img src={ProductJewelleryLight} alt="Jewellery" className='img-fluid' draggable={false} />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>


                                        </li>
                                        <li className="nav-item mb-2 mb-lg-0">
                                            <NavLink to="/about" className="nav-link">About Us</NavLink>
                                        </li>
                                        {/* <li className="nav-item mb-2 mb-lg-0">
                                                <NavLink className="nav-link">Our Story</NavLink>
                                            </li>
                                            <li className="nav-item mb-0 mb-lg-0">
                                                <NavLink className="nav-link">Blogs</NavLink>
                                            </li> */}
                                        <li className="nav-item mb-0 mb-lg-0">
                                            <NavLink to="/contact-us" className="nav-link">Contact Us</NavLink>
                                        </li>
                                    </ul>

                                    <div className='support me-5'>
                                        <Link className='' to="tel:+1234657890">
                                            +123 465 7890
                                        </Link>
                                        <span>Call or Text 24/7</span>
                                    </div>

                                    <button type='button' className='main_btn ask_price'>
                                        ASK PRICE
                                    </button>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>

            </header>
            {/* ------ Header End ------ */}


        </>
    )
}

export default Header;