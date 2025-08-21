import React, { useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom';

import { Range } from 'react-range';

// Css
import "./Product.scss"

// Image
import Product2 from "../../assets/images/home/product2.svg";
import Product3 from "../../assets/images/home/product3.svg";
import Product4 from "../../assets/images/home/product4.svg";
// Light
import UnLikeLight from "../../assets/images/account/unlike-light.svg";
import UpArrowLight from "../../assets/images/product/up-arrow-light.svg";
import DownArrowLight from "../../assets/images/product/down-arrow-light.svg";

const Product = () => {

    const navigate = useNavigate();

    const [priceRange, setPriceRange] = useState([200, 400]); // [min, max]

    const STEP = 1;
    const MIN = 100;
    const MAX = 500;


    return (
        <>

            {/* ------ Product Start ------ */}
            <div className="product pd-x">
                <div className='product_top'>
                    <div className="row align-items-lg-center justify-content-lg-between">
                        <div className="col-lg-3">
                            <h4>Rings</h4>

                            <p className='mb-0'>
                                Women’s Jewellery
                            </p>
                        </div>
                        <div className="col-lg-8 col-xl-6">
                            <div className="filtering_area d-flex justify-content-end">
                                <div className='sorting me-5'>
                                    <select
                                        className="form-select form-control"
                                    >
                                        <option selected>Sort By</option>
                                        <option value="1">Lowest Price</option>
                                        <option value="2">Highest Price</option>
                                        <option value="3">Best Seller</option>
                                        <option value="4">Newest</option>
                                    </select>
                                </div>

                                <form className="searching">
                                    <input type="text" placeholder="Search Rings..." required />

                                    <button type="submit" className="search_btn">
                                        Search
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="product_list">
                    <div className="row">
                        <div className="col-lg-3">
                            <div className="filter_area">
                                <div className='d-flex justify-content-between align-items-center mb-40'>
                                    <div className="title">
                                        Filters (03)
                                    </div>

                                    <button type='button'>
                                        Clear Filters
                                    </button>
                                </div>

                                <div className='mb-40'>
                                    <div className="title">Price</div>

                                    <div className="pricing">
                                        <Range
                                            step={STEP}
                                            min={MIN}
                                            max={MAX}
                                            values={priceRange}
                                            onChange={(values) => setPriceRange(values)}
                                            renderTrack={({ props, children }) => (
                                                <div
                                                    {...props}
                                                    className="custom-track"
                                                    style={{
                                                        ...props.style,
                                                        height: '6px',
                                                        width: '100%',
                                                        // background: `linear-gradient(to right, #ddd ${((priceRange[0] - MIN) / (MAX - MIN)) * 100}%, #000 ${((priceRange[0] - MIN) / (MAX - MIN)) * 100}%, #000 ${((priceRange[1] - MIN) / (MAX - MIN)) * 100}%, #ddd ${((priceRange[1] - MIN) / (MAX - MIN)) * 100}%)`
                                                        background: `linear-gradient(
                                                            to right,
                                                            var(--color5) ${(priceRange[0] - MIN) / (MAX - MIN) * 100}%,
                                                            var(--black) ${(priceRange[0] - MIN) / (MAX - MIN) * 100}%,
                                                            var(--black) ${(priceRange[1] - MIN) / (MAX - MIN) * 100}%,
                                                            var(--color5) ${(priceRange[1] - MIN) / (MAX - MIN) * 100}%
                                                            )`
                                                    }}
                                                >
                                                    {children}
                                                </div>
                                            )}
                                            renderThumb={({ props }) => (
                                                <div
                                                    {...props}
                                                    className="custom-thumb"
                                                    style={{
                                                        ...props.style,
                                                        height: '20px',
                                                        width: '20px',
                                                        borderRadius: '50%',
                                                        border: `1px solid var(--color-4)`,
                                                        background: `var(--gradient-color-1)`,
                                                    }}
                                                />
                                            )}
                                        />

                                        <div className="price_control d-flex justify-content-between">
                                            {/* Min-Price */}
                                            <div className="counter d-flex align-items-center content-center">
                                                <span>
                                                    ${priceRange[0]}
                                                </span>
                                                <div className='d-grid'>
                                                    <button
                                                        type='button'
                                                        onClick={() =>
                                                            setPriceRange([
                                                                Math.min(priceRange[0] + STEP, priceRange[1]), // prevent exceeding max
                                                                priceRange[1],
                                                            ])
                                                        }
                                                    >
                                                        <img src={UpArrowLight} alt="Up" className='img-fluid' draggable={false} />
                                                    </button>
                                                    <button
                                                        type='button'
                                                        onClick={() =>
                                                            setPriceRange([
                                                                Math.max(priceRange[0] - STEP, MIN), // prevent going below MIN
                                                                priceRange[1],
                                                            ])
                                                        }
                                                    >
                                                        <img src={DownArrowLight} alt="Down" className='img-fluid' draggable={false} />
                                                    </button>
                                                </div>
                                            </div>

                                            {/* Max-Price */}
                                            <div className="counter d-flex align-items-center content-center">
                                                <span>
                                                    ${priceRange[1]}
                                                </span>
                                                <div className='d-grid'>

                                                    <button
                                                        type='button'
                                                        onClick={() =>
                                                            setPriceRange([
                                                                priceRange[0],
                                                                Math.min(priceRange[1] + STEP, MAX), // prevent going above MAX
                                                            ])
                                                        }
                                                    >
                                                        <img src={UpArrowLight} alt="Up" className='img-fluid' draggable={false} />
                                                    </button>
                                                    <button
                                                        type='button'
                                                        onClick={() =>
                                                            setPriceRange([
                                                                priceRange[0],
                                                                Math.max(priceRange[1] - STEP, priceRange[0]), // prevent crossing min
                                                            ])
                                                        }
                                                    >
                                                        <img src={DownArrowLight} alt="Down" className='img-fluid' draggable={false} />
                                                    </button>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>


                                <div className='mb-40'>
                                    <div className="title">Metal</div>

                                    <ul>
                                        {["Gold", "Rose Gold", "Black Gold", "Silver"].map((i) => (
                                            <li key={i}>
                                                <label className="custom-checkbox">
                                                    <span>{i}</span>
                                                    <input
                                                        type="checkbox"
                                                        value={i}
                                                        className='form-check-input'
                                                    />
                                                </label>
                                            </li>
                                        ))}
                                    </ul>
                                </div>


                                <div className='mb-40'>
                                    <div className="title">Stone Shape</div>

                                    <ul>
                                        {["Gemstone", "Diamond", "Pearl", "Ruby", "Emerald"].map((i) => (
                                            <li key={i}>
                                                <label className="custom-checkbox">
                                                    <span>{i}</span>
                                                    <input
                                                        type="checkbox"
                                                        value={i}
                                                        className='form-check-input'
                                                    />
                                                </label>
                                            </li>
                                        ))}
                                    </ul>
                                </div>


                                <div className=''>
                                    <div className="title">Gold Purity</div>

                                    <ul>
                                        {["18k", "22k", "24k"].map((i) => (
                                            <li key={i}>
                                                <label className="custom-checkbox">
                                                    <span>{i}</span>
                                                    <input
                                                        type="checkbox"
                                                        value={i}
                                                        className='form-check-input'
                                                    />
                                                </label>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                            </div>
                        </div>
                        <div className="col-lg-9">
                            <div className="product_area">
                                <div className="row g-5">
                                    {
                                        ProductData?.map((i, index) => {
                                            return (
                                                <div className="col-lg-4" key={index}>
                                                    <div className="product_box">
                                                        <div className="image">
                                                            <img src={i.image} alt={i.name} className='img-fluid' draggable={false} />
                                                        </div>

                                                        <div className="detail">
                                                            <div className="d-flex justify-content-between align-items-center">
                                                                <div className="name" onClick={()=> navigate("/product-details/1")}>{i.name}</div>

                                                                <div className='like'>
                                                                    <button type='button' className=''>
                                                                        <img src={UnLikeLight} alt="" className='img-fluid' draggable={false} />
                                                                    </button>
                                                                </div>
                                                            </div>

                                                            <div className="price">${i.price}.00 </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div >
            {/* ------ Product End ------ */}

        </>
    )
}

export default Product;



const ProductData = [
    {
        image: Product2,
        name: "Silver Diamond Neckless",
        price: 130,
    },
    {
        image: Product4,
        name: "Silver Diamond Ring",
        price: 120,
    },
    {
        image: Product3,
        name: "Silver Diamond Earrings",
        price: 140,
    },
    {
        image: Product2,
        name: "Silver Diamond Neckless",
        price: 130,
    },
    {
        image: Product4,
        name: "Silver Diamond Ring",
        price: 120,
    },
    {
        image: Product3,
        name: "Silver Diamond Earrings",
        price: 140,
    },
    {
        image: Product2,
        name: "Silver Diamond Neckless",
        price: 130,
    },
    {
        image: Product4,
        name: "Silver Diamond Ring",
        price: 120,
    },
    {
        image: Product3,
        name: "Silver Diamond Earrings",
        price: 140,
    },
]