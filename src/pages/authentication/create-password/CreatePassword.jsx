import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

// Image
// Light
import LogoLight from "../../../assets/images/authentication/logo-light.svg";
import GoogleIcon from "../../../assets/images/authentication/google-icon.svg";
// Dark
import LogoDark from "../../../assets/images/authentication/logo-dark.svg";
import { useDispatch, useSelector } from 'react-redux';
import { reqtoChangePassword } from '../../../redux-Toolkit/services/AuthServices';
import { loaders } from '../../../components/loader/Loader';
// import GoogleIcon from "../../../assets/images/authentication/google-icon.svg";


const initialState = {
    password: "",
    ConfirmPassword: "",
}

const CreatePassword = () => {

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

        const res = await dispatch(reqtoChangePassword(formData));
        console.log("reqtoChangePassword--> Res", res);

        if (res.payload?.status) {
            navigate("/");
        }
    }

    return (
        <>

            <div className='authentication'>
                <div className="row justify-content-center align-items-center h-100">
                    <div className="col-10 col-sm-9 col-md-7 col-lg-6 col-xl-5 col-xxl-4">
                        <div className="logo text-center">
                            <img src={LogoLight} alt="Logo" className='img-fluid' draggable={false} />
                        </div>

                        <form onSubmit={handleSubmit}>
                            <div className="top">
                                <h2>Create Password</h2>

                                <p>Enter your password for set new password!</p>
                            </div>

                            <div className="second">
                                <div className="col-12 mb-3">
                                    <label htmlFor="password" className='form-label'>Password *</label>
                                    <div>
                                        <input
                                            type="text"
                                            name='password'
                                            placeholder=''
                                            className='form-control'
                                            value={formData.password}
                                            onChange={handleChange}
                                            required
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
                                            value={formData.ConfirmPassword}
                                            onChange={handleChange}
                                            required
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
                                            loader ? loaders.btn : 'SUBMIT'
                                        }
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </>
    )
}

export default CreatePassword;