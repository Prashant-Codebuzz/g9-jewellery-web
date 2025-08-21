import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

// Css  
import "../Authentication.scss";

// Image
// Light
import LogoLight from "../../../assets/images/authentication/logo-light.svg";
import GoogleIcon from "../../../assets/images/authentication/google-icon.svg";
// Dark
import LogoDark from "../../../assets/images/authentication/logo-dark.svg";
// import GoogleIcon from "../../../assets/images/authentication/google-icon.svg";


// Hooks
import useThemeMode from '../../../hooks/useThemeMode';
import { useDispatch, useSelector } from 'react-redux';
import { loaders } from '../../../components/loader/Loader';
import { reqtoSignIn } from '../../../redux-Toolkit/services/AuthServices';
import { toast } from 'react-toastify';

const initialState = {
    // email: "",
    // Mobile_number: "",

    identifier: "",
    password: "",
}

const SignIn = () => {

    const ThemeMode = useThemeMode();

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { loader } = useSelector((state) => state.UserAuth);

    const [formData, setFormData] = useState(initialState);

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        // const { identifier, password } = formData;

        // let payload = {
        //     email: "",
        //     Mobile_number: "",
        //     password: password
        // };

        // if (identifier.includes("@")) {
        //     payload.email = identifier;
        // }
        // else if (/^\d+$/.test(identifier)) {
        //     payload.Mobile_number = identifier;
        // }
        // else {
        //     return toast.error("Please enter a valid email or mobile number");
        // }

        // const res = await dispatch(reqtoSignIn(payload));
        // console.log("reqtoAddressDetail--> Res", res);

        // if (res.payload?.status) {
            navigate("/account");
        // }
    }


    return (
        <>
            <div className='authentication'>
                <div className="row justify-content-center align-items-center h-100">
                    <div className="col-10 col-sm-9 col-md-7 col-lg-6 col-xl-5 col-xxl-4">
                        <div className="logo text-center">
                            <img src={ThemeMode ? LogoLight : LogoDark} alt="Logo" className='img-fluid' draggable={false} />
                        </div>

                        <form onSubmit={handleSubmit}>
                            <div className="top">
                                <h2>Sign In</h2>

                                <p>Enter your email address/mobile number and password for sign-in!</p>
                            </div>

                            <div className="second">
                                <div className="col-12 mb-3">
                                    <label htmlFor="identifier" className='form-label'>Email Address / Mobile Number *</label>
                                    <div>
                                        <input
                                            type="text"
                                            name='identifier'
                                            placeholder=''
                                            className='form-control'
                                            // value={formData.identifier}
                                            // onChange={handleChange}
                                            // required
                                        />
                                    </div>
                                </div>

                                <div className="col-12 mb-2">
                                    <label htmlFor="password" className='form-label'>Password *</label>
                                    <div>
                                        <input
                                            type="text"
                                            name='password'
                                            placeholder=''
                                            className='form-control'
                                            // value={formData.password}
                                            // onChange={handleChange}
                                            // required
                                        />

                                    </div>
                                </div>

                                <div className='mb-4 text-end forgot-password'>
                                    <Link to="/forgot-password">Forgot Password ?</Link>
                                </div>

                                <div className='text-center'>
                                    <button
                                        type='submit'
                                        className='main_btn auth_btn'
                                        disabled={loader}
                                    >
                                        {
                                            loader ? loaders.btn : 'SIGN IN'
                                        }
                                    </button>
                                </div>

                                <div className='or d-flex align-items-center justify-content-center'>
                                    <span></span>
                                    <p className='mb-0'>or continue with</p>
                                    <span></span>
                                </div>

                                <button
                                    type='button'
                                    className='main_btn google_btn d-flex align-items-center justify-content-center'
                                >
                                    <img src={GoogleIcon} alt="Google" className='img-fluid me-3' draggable={false} />
                                    Sign in With Google
                                </button>
                            </div>
                        </form>

                        <div className="account_or text-center">
                            Don’t have an account? <Link to="/sign-up">Sign up</Link>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default SignIn