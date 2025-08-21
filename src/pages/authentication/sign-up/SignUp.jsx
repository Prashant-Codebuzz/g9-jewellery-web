import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

// Image
// Light
import LogoLight from "../../../assets/images/authentication/logo-light.svg";
import GoogleIcon from "../../../assets/images/authentication/google-icon.svg";
// Dark
import LogoDark from "../../../assets/images/authentication/logo-dark.svg";
// import GoogleIcon from "../../../assets/images/authentication/google-icon.svg";

import { toast } from 'react-toastify';

import { useDispatch, useSelector } from 'react-redux';
import { reqtoSignUp } from '../../../redux-Toolkit/services/AuthServices';
import { loaders } from '../../../components/loader/Loader';

const initialState = {
    name: '',
    email: '',
    Mobile_number: '',
    password: '',
    ConfirmPassword: '',
}

const SignUp = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { loader } = useSelector((state) => state.UserAuth);

    const [formdata, setFormData] = useState(initialState);

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        // const res = await dispatch(reqtoSignUp(formdata));
        // console.log("reqtoSignUp--> Res", res);

        // if (res.payload?.status) {
            navigate("/otp-method");
        // }

        // try {
        //     const res = await Axios.post("/user/signUp", formdata, {
        //         headers: {
        //             "Content-Type": "application/json"
        //         }
        //     });
        //     console.log(res);

        //     if (res?.data?.status) {
        //         // navigate("/otp-Verify", { state: { type: "sign-up", email: formdata.email } });
        //         toast.success(res.data.message);
        //     } else {
        //         toast.error(res.data.message);
        //     }
        // } catch (err) {
        //     console.error(err);
        // }
    }

    return (
        <>

            <div className='authentication sign_up'>
                <div className="row justify-content-center align-items-center h-100">
                    <div className="col-10 col-sm-9 col-md-7 col-lg-6 col-xl-5 col-xxl-4">
                        <div className="logo text-center">
                            <img src={LogoLight} alt="Logo" className='img-fluid' draggable={false} />
                        </div>

                        <form onSubmit={handleSubmit}>
                            <div className="top">
                                <h2>Sign Up</h2>

                                <p>Enter your email address/mobile number and basic details for sign-up!</p>
                            </div>

                            <div className="second">
                                <div className="col-12 mb-3">
                                    <label htmlFor="name" className='form-label'>Name *</label>
                                    <div>
                                        <input
                                            type="text"
                                            name='name'
                                            placeholder=''
                                            className='form-control'
                                            value={formdata.name}
                                            onChange={handleChange}
                                            // required
                                        />
                                    </div>
                                </div>

                                <div className="col-12 mb-3">
                                    <label htmlFor="email" className='form-label'>Email Address *</label>
                                    <div>
                                        <input
                                            type="email"
                                            name='email'
                                            placeholder=''
                                            className='form-control'
                                            value={formdata.email}
                                            onChange={handleChange}
                                            // required
                                        />
                                    </div>
                                </div>

                                <div className="col-12 mb-3">
                                    <label htmlFor="Mobile_number" className='form-label'>Mobile Number *</label>
                                    <div>
                                        <input
                                            type="text"
                                            pattern='\d*'
                                            maxLength={12}
                                            name='Mobile_number'
                                            placeholder=''
                                            className='form-control'
                                            value={formdata.Mobile_number}
                                            onChange={handleChange}
                                            onInput={(e) => e.target.value = e.target.value.replace(/[^0-9]/g, '')}
                                            // required
                                        />

                                    </div>
                                </div>

                                <div className="col-12 mb-3">
                                    <label htmlFor="password" className='form-label'>Password *</label>
                                    <div>
                                        <input
                                            type="text"
                                            name='password'
                                            placeholder=''
                                            className='form-control'
                                            value={formdata.password}
                                            onChange={handleChange}
                                            // required
                                        />

                                    </div>
                                </div>

                                <div className="col-12 mb-4">
                                    <label htmlFor="ConfirmPassword" className='form-label'>Confirm Password *</label>
                                    <div>
                                        <input
                                            type="text"
                                            name='ConfirmPassword'
                                            placeholder=''
                                            className='form-control'
                                            value={formdata.ConfirmPassword}
                                            onChange={handleChange}
                                            // required
                                        />

                                    </div>
                                </div>

                                <div className='text-center'>
                                    <button
                                        type='submit'
                                        className='main_btn auth_btn'
                                        disabled={loader}
                                    >
                                        {
                                            loader ? loaders.btn : 'SIGN UP'
                                        }
                                    </button>
                                </div>
                            </div>
                        </form>

                        <div className="account_or text-center">
                            Already have an account? <Link to="/">Sign in</Link>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default SignUp;