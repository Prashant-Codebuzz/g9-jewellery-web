import React from 'react'
import { Link } from 'react-router-dom';

// Css
import "./Footer.scss"

// Image
// Light
import CallLight from "../../assets/images/footer/call-light.svg";
import EmailLight from "../../assets/images/footer/email-light.svg";
import InstagramLight from "../../assets/images/footer/instagram-light.svg";
import FacebookLight from "../../assets/images/footer/facebook-light.svg";
import LinkedinLight from "../../assets/images/footer/linkedin-light.svg";
import YoutubeLight from "../../assets/images/footer/youtube-light.svg";
// Dark
import CallDark from "../../assets/images/footer/call-dark.svg";
import EmailDark from "../../assets/images/footer/email-dark.svg";
import InstagramDark from "../../assets/images/footer/instagram-dark.svg";
import FacebookDark from "../../assets/images/footer/facebook-dark.svg";
import LinkedinDark from "../../assets/images/footer/linkedin-dark.svg";
import YoutubeDark from "../../assets/images/footer/youtube-dark.svg";

import useThemeMode from '../../hooks/useThemeMode';

const Footer = () => {

    const ThemeMode = useThemeMode();

    return (
        <>

            {/* ------ Footer Start ------ */}
            <footer className='pd-x'>
                <div className="row">
                    <div className="col-lg-2">
                        <h3>Quick Links</h3>

                        <ul>
                            <li><Link to="/home">Home</Link></li>
                            <li><Link to="/about">About Us</Link></li>
                            <li><Link>Our Story</Link></li>
                            <li><Link to="/contact-us">Contact Us</Link></li>
                        </ul>
                    </div>
                    <div className="col-lg-2">
                        <h3>Men’s Jewellery</h3>

                        <ul>
                            <li><Link to="/product">Rings</Link></li>
                            <li><Link to="/product">Bracelets</Link></li>
                        </ul>
                    </div>
                    <div className="col-lg-2">
                        <h3>Women’s Jewellery</h3>

                        <ul>
                            <li><Link to="/product">Rings</Link></li>
                            <li><Link to="/product">Bracelets</Link></li>
                            <li><Link to="/product">Necklaces</Link></li>
                            <li><Link to="/product">Earrings</Link></li>
                            <li><Link to="/product">Chains</Link></li>
                        </ul>
                    </div>
                    <div className="col-lg-2">
                        <h3>Accessories</h3>

                        <ul>
                            <li><Link to="/product">Watches</Link></li>
                            <li><Link to="/product">Diamonds</Link></li>
                        </ul>
                    </div>
                    <div className="col-lg-2">
                        <h3>Policies</h3>

                        <ul>
                            <li><Link to="/privacy-policy">Privacy Policy</Link></li>
                            <li><Link to="/terms-conditions">Terms & Conditions</Link></li>
                            <li><Link to="/payment-delivery-policy">Payment & Delivery Policy</Link></li>
                            <li><Link to="/return-refund-policy">Refund & Return Policy</Link></li>
                        </ul>
                    </div>
                </div>
            </footer>
            {/* ------ Footer End ------ */}



            {/* ------ Developed Start ------ */}
            <div className='developed'>
                <div className="social">
                    <h3 className='text-center'>Get In Touch</h3>

                    <div className="d-flex justify-content-center flex-wrap gap-4">
                        <Link>
                            <img src={ThemeMode ? CallLight : CallDark} alt="" className='img-fluid' draggable={false} />
                        </Link>
                        <Link>
                            <img src={ThemeMode ? EmailLight : EmailDark} alt="" className='img-fluid' draggable={false} />
                        </Link>
                        <Link>
                            <img src={ThemeMode ? InstagramLight : InstagramDark} alt="" className='img-fluid' draggable={false} />
                        </Link>
                        <Link>
                            <img src={ThemeMode ? FacebookLight : FacebookDark} alt="" className='img-fluid' draggable={false} />
                        </Link>
                        <Link>
                            <img src={ThemeMode ? LinkedinLight : LinkedinDark} alt="" className='img-fluid' draggable={false} />
                        </Link>
                        <Link>
                            <img src={ThemeMode ? YoutubeLight : YoutubeDark} alt="" className='img-fluid' draggable={false} />
                        </Link>
                    </div>
                </div>

                <p className='mb-0 text-center'>
                    G9 Jewellery © 2025, All Right Reserved.
                </p>
            </div>
            {/* ------ Developed End ------ */}

        </>

    )
}

export default Footer;