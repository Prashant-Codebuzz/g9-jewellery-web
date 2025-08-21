import React from 'react'
import { Link } from 'react-router-dom';

// Css
import "./ContactUs.scss"

const ContactUs = () => {
    return (
        <>

            {/* ------ Contact-Us Start ------ */}
            <div className="contact_us pd-x">
                <div className="row align-items-center justify-content-lg-between">
                    <div className="col-lg-6 col-xl-5">
                        <div className="contact_content">
                            <h6 className='mb-0'>Contact Us</h6>

                            <h4>Get In Touch With Us</h4>

                            <p className='my-0'>
                                Call, Email or complete the form for connect with our friendly team and also you can place the customize order.
                            </p>

                            <div className="lines mx-0"></div>

                            <h6 className='mb-0'>Customer Delight</h6>

                            <p className='mb-0'>
                                Call us at <Link to="tel:+1234657890">+123 465 7890</Link> (9 AM-10 PM, 7 Days a Week)
                            </p>
                            <p>or</p>
                            <p>Write to us at <Link to="mailto:support@g9jewellery.com">support@g9jewellery.com</Link></p>


                            <h6 className='mb-0'>Corporate Sales</h6>

                            <p>For all corporate sales related queries please write to us at <Link to="mailto:corporate.sales@g9jewellery">corporate.sales@g9jewellery</Link></p>
                            <p className='mb-0'>For bulk enquiries or sales associations please contact <Link to="mailto:sales@g9jewellery.com">sales@g9jewellery.com</Link></p>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className='contact_form'>
                            <form className='row m-0'>
                                <div className="col-lg-12 mb-4 px-0">
                                    <label htmlFor="name" className='form-label'>Name *</label>
                                    <div>
                                        <input
                                            type="text"
                                            name='name'
                                            placeholder=''
                                            className='form-control'
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="col-lg-12 mb-4 px-0">
                                    <label htmlFor="email" className='form-label'>Email Address / Mobile Number *</label>
                                    <div>
                                        <input
                                            type="text"
                                            name='email'
                                            placeholder=''
                                            className='form-control'
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="col-lg-12 px-0">
                                    <label htmlFor="message" className='form-label'>Message *</label>
                                    <div>
                                        <textarea
                                            name='message'
                                            placeholder=''
                                            className='form-control'
                                            rows={5}
                                            required
                                        />
                                    </div>
                                </div>

                                <button type='submit' className='main_btn contact_btn'>
                                    SUBMIT
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            {/* ------ Contact-Us End ------ */}

        </>
    )
}

export default ContactUs;