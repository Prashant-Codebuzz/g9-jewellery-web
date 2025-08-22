import React, { useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom';

import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Accordion from 'react-bootstrap/Accordion';

// Css
import "./ProductDetails.scss"

// Image
import ProductDetail1 from "../../assets/images/product/product-detail1.svg";
import ProductDetail2 from "../../assets/images/product/product-detail2.svg";
import ProductDetail3 from "../../assets/images/product/product-detail3.svg";
import ProductDetail4 from "../../assets/images/product/product-detail4.svg";

// Light
import UnLikeLight from "../../assets/images/account/unlike-light.svg";
import FastShippingLight from "../../assets/images/product/fast-shipping-light.svg";
import PremiumQualityLight from "../../assets/images/product/premium-quality-light.svg";
import CustomizableLight from "../../assets/images/product/customizable-light.svg";
import LeftArrow from "../../assets/images/home/left_arrow.svg";

// Dark
import FastShippingDark from "../../assets/images/product/fast-shipping-dark.svg";
import PremiumQualityDark from "../../assets/images/product/premium-quality-dark.svg";
import CustomizableDark from "../../assets/images/product/customizable-dark.svg";
import LeftArrowDark from "../../assets/images/home/left_arrow-dark.svg";

import useThemeMode from '../../hooks/useThemeMode';


const ProductDetails = () => {

    const ThemeMode = useThemeMode();

    const navigate = useNavigate();

    const productImages = [ProductDetail1, ProductDetail2, ProductDetail3];

    const [currentIndex, setCurrentIndex] = useState(0);

    // const [selectedImage, setSelectedImage] = useState(productImages[0]);
    const handlePrev = () => {
        setCurrentIndex((prev) =>
            prev === 0 ? productImages.length - 1 : prev - 1
        );
    };

    const handleNext = () => {
        setCurrentIndex((prev) =>
            prev === productImages.length - 1 ? 0 : prev + 1
        );
    };

    return (
        <>

            {/* ------ Product-Detail Start ------ */}
            <div className="product_detail pd-x">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="product_images_area">
                            {/* Main Image */}
                            <div className="main_image">
                                <img src={productImages[currentIndex]} alt="Product" className="img-fluid" draggable={false} />
                            </div>

                            {/* Thumbnail Image */}
                            <div className="thumbnail_images d-flex justify-content-between align-items-center gap-3">
                                <button type='button' className='thumbnail-prev' onClick={handlePrev}>
                                    <img src={ThemeMode ? LeftArrowDark : LeftArrow } alt="" className="img-fluid" draggable={false} />
                                </button>

                                <div className="thumbnail-container">
                                    {productImages?.map((i, index) => (
                                        <div
                                            key={index}
                                            className={`thumbnail ${currentIndex === index ? "active" : ""}`}
                                            onClick={() => setCurrentIndex(index)}

                                        >
                                            <img src={i} alt={`Thumbnail ${index}`} className="img-fluid" draggable={false} />
                                        </div>
                                    ))}
                                </div>

                                <button type='button' className='thumbnail-next' onClick={handleNext}>
                                    <img src={ThemeMode ? LeftArrowDark : LeftArrow } alt="" className="img-fluid" draggable={false} />
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="product_detail_area">
                            <div className="d-flex justify-content-between align-items-center">
                                <div className="name">Silver Engagement Diamond Ring</div>

                                <div className='like'>
                                    <button type='button' className=''>
                                        <img src={UnLikeLight} alt="" className='img-fluid' draggable={false} />
                                    </button>
                                </div>
                            </div>

                            <div className="price">$138.00</div>

                            <p>Estimated Delivery Time : 5 to 7 Business days</p>

                            <p>Diamond PreSet Solitaire Ring In 18Kt White Gold (3.8 gram) with Diamonds (0.2060 Ct) and Solitaire (0.30 Ct) </p>

                            <div className="size d-flex gap-4 align-items-center">
                                <p>Size</p>

                                <select
                                    className="form-select form-control"
                                >
                                    <option selected>Select Size</option>
                                    <option value="1">Size 1</option>
                                    <option value="2">Size 2</option>
                                    <option value="3">Size 3</option>
                                </select>

                                <button type='button'>
                                    Not sure about the size?
                                </button>
                            </div>

                            <div className="buttons d-flex justify-content-center gap-4">
                                <button type='button' className='main_btn add_to_cart' onClick={() => navigate("/cart")}>
                                    ADD TO CART
                                </button>

                                <button type='button' className='main_btn buy_now' onClick={() => navigate("/cart/checkout")}>
                                    BUY NOW
                                </button>
                            </div>

                            <div className="feature d-flex justify-content-between align-items-center">
                                <div className="name">
                                    <div className="image">
                                        <img src={ThemeMode ? FastShippingLight : FastShippingDark} alt="Fast Shipping" className='img-fluid' draggable={false} />
                                    </div>

                                    <span className='ms-3'>Fast Shipping</span>
                                </div>
                                <div className="line"></div>
                                <div className="name">
                                    <div className="image">
                                        <img src={ThemeMode ? PremiumQualityLight : PremiumQualityDark} alt="Premium Quality" className='img-fluid' draggable={false} />
                                    </div>

                                    <span className='ms-3'>Premium Quality</span>
                                </div>
                                <div className="line"></div>
                                <div className="name">
                                    <div className="image">
                                        <img src={ThemeMode ? CustomizableLight : CustomizableDark} alt="Customizable" className='img-fluid' draggable={false} />
                                    </div>

                                    <span className='ms-3'>Customizable</span>
                                </div>
                            </div>

                            <div className="lines mx-0"></div>

                            <p className='mb-0'>Any Questions? Please feel free to reach us at: <Link to="tel:+1234657890">+123 465 7890</Link></p>
                        </div>
                    </div>
                </div>
            </div>
            {/* ------ Product-Detail End ------ */}



            {/* ------ Product-Detail-Tabs Start ------ */}
            <div className="product_detail_tabs pd-x">
                <Tabs>
                    <TabList>
                        <Tab>Product Description</Tab>
                        <Tab>Product Material Details</Tab>
                        <Tab>Faq’s</Tab>
                    </TabList>
                    <TabPanel>
                        <div className="product_description">
                            <p>
                                Celebrate love and commitment with our exquisite Silver Engagement Diamond Ring, crafted to symbolize timeless elegance. Made from premium 925 sterling silver, this ring features a brilliant-cut diamond at its center, radiating unmatched sparkle and sophistication. The sleek band design enhances the diamond’s brilliance, making it the perfect choice for proposals, anniversaries, or as a heartfelt gift. Lightweight yet durable, this ring blends modern style with classic charm, ensuring it will be cherished for a lifetime.
                            </p>

                            <h4>Key Features</h4>

                            <ul>
                                <li><p>Crafted in 925 Sterling Silver for lasting shine</p></li>
                                <li><p>Brilliant-cut diamond centerpiece for maximum sparkle</p></li>
                                <li><p>Elegant and timeless design, suitable for any occasion</p></li>
                                <li><p>Comfortable fit for everyday wear</p></li>
                                <li><p className='mb-0'>Perfect choice for engagements, promises, or special moments</p></li>
                            </ul>
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className="product_material_details">
                            <ul>
                                <li>
                                    <div className="name">Stock Number</div>
                                    <div className="value">G9-19971847</div>
                                </li>
                                <li>
                                    <div className="name">Shape</div>
                                    <div className="value">Round</div>
                                </li>
                                <li>
                                    <div className="name">Carat Weight</div>
                                    <div className="value">0.76 ct.</div>
                                </li>
                                <li>
                                    <div className="name">Certification</div>
                                    <div className="value">IGI</div>
                                </li>
                                <li>
                                    <div className="name">Depth</div>
                                    <div className="value">66.8 %</div>
                                </li>
                                <li>
                                    <div className="name">Cut Grade</div>
                                    <div className="value">Ideal</div>
                                </li>
                                <li>
                                    <div className="name">Material</div>
                                    <div className="value">Silver</div>
                                </li>
                                <li>
                                    <div className="name">Measurements</div>
                                    <div className="value">5.50x5.54x3.42 mm</div>
                                </li>
                                <li>
                                    <div className="name">Clarity</div>
                                    <div className="value">VVS1</div>
                                </li>
                                <li>
                                    <div className="name">Polish</div>
                                    <div className="value">Polish</div>
                                </li>
                            </ul>
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className="faqs py-0">
                            <Accordion defaultActiveKey="0" flush>
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header>How i can place customize order ?</Accordion.Header>
                                    <Accordion.Body>
                                        Yes! For a fully custom design, please contact our support team or use the "Special Request" form. We’ll get back to you with options and pricing. Customized orders usually take 5–10 business days to create, plus shipping time. You’ll receive an estimated delivery date at checkout.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="2">
                                    <Accordion.Header>What is your payment policy ?</Accordion.Header>
                                    <Accordion.Body>
                                        Absolutely. We use industry-standard SSL encryption and trusted payment gateways to ensure all transactions are 100% secure. We currently support EMI options via selected credit cards and third-party providers (if applicable). Check availability at checkout.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="3">
                                    <Accordion.Header>Are customized orders returnable ?</Accordion.Header>
                                    <Accordion.Body>

                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="4">
                                    <Accordion.Header>What is your cancellation policy ?</Accordion.Header>
                                    <Accordion.Body>
                                        Cancellations are only accepted within 12 hours of placing the order, as production begins shortly after. Unfortunately, once the order is shipped, cancellation is not possible. You may initiate a return (if applicable) after delivery, subject to our return policy.
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        </div>
                    </TabPanel>

                </Tabs>

            </div>
            {/* ------ Product-Detail-Tabs End ------ */}


        </>
    )
}

export default ProductDetails;