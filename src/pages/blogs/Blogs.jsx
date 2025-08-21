import React from 'react'
import { Link } from 'react-router-dom';

// Css
import "./Blogs.scss"

// Image
import Blogs1 from "../../assets/images/blog/blog1.svg";
import Blogs2 from "../../assets/images/blog/blog2.svg";
import Blogs3 from "../../assets/images/blog/blog3.svg";
import Blogs4 from "../../assets/images/blog/blog4.svg";
import Blogs5 from "../../assets/images/blog/blog5.svg";
import Blogs6 from "../../assets/images/blog/blog6.svg";

const Blogs = () => {
    return (
        <>

            {/* ------ Blogs Start ------ */}
            <div className="blogs pd-x">
                <div className="blogs_top_content">
                    <h6 className='mb-0'>Blogs</h6>

                    <h4>Explore Our Latest Blogs</h4>

                    <p>
                        Stay informed and inspired with our blogs and articles
                    </p>
                </div>

                <div className="row g-5">
                    {
                        BlogsData?.map((i, index) => {
                            return (
                                <div className="col-lg-4" key={index}>
                                    <div className="blog_box">
                                        <div className="image">
                                            <img src={i.image} alt={i.name} className='img-fluid' draggable={false} />
                                        </div>

                                        <div className="detail text-center">
                                            <div className="name">{i.name}</div>

                                            <p>
                                                {i.description}
                                            </p>

                                            <button type='button' className='main_btn read_more'>
                                                READ MORE
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            {/* ------ Blogs End ------ */}

        </>
    )
}

export default Blogs;




const BlogsData = [
    {
        image: Blogs1,
        name: "Golden Chain Crafting -  Premium Quality Gold",
        description: "Discover the elegance of timeless craftsmanship with our Golden Chain Crafting service.",
    },
    {
        image: Blogs2,
        name: "Timeless Elegance: The Allure of Golden Rings",
        description: "Golden rings have symbolized love, power, and prestige for centuries.",
    },
    {
        image: Blogs3,
        name: "The Art of Layering: Styling Necklaces Like a Pro",
        description: "Layering necklaces is a trend that’s here to stay. Find out the do’s and don’ts for stacking.",
    },
    {
        image: Blogs4,
        name: "Golden Chain Crafting -  Premium Quality Gold",
        description: "Discover the elegance of timeless craftsmanship with our Golden Chain Crafting service. ",
    },
    {
        image: Blogs5,
        name: "Timeless Elegance: The Allure of Golden Rings",
        description: "Golden rings have symbolized love, power, and prestige for centuries.",
    },
    {
        image: Blogs6,
        name: "The Art of Layering: Styling Necklaces Like a Pro",
        description: "Layering necklaces is a trend that’s here to stay. Find out the do’s and don’ts for stacking.",
    },
]