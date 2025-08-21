import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { reqtoEditManageAddress } from '../../../../redux-Toolkit/services/AccountServices';
import { loaders } from '../../../../components/loader/Loader';
import { editManageAddress } from '../../../../redux-Toolkit/slices/AccountSlice';

// Css
// import "./CreateAddress.scss"

const initialState = {
    address_line_1: "",
    address_line_2: "",
    city: "",
    state: "",
    country: "",
    postal_code: "",
    address_type: "",
}

const EditAccount = () => {

    const { id } = useParams();
    // const navigate = useNavigate();
    // const dispatch = useDispatch();

    // const userAccount = useSelector((state) => state.UserAccount);
    // const { manageAddressLoader, manageAddressEdit } = userAccount;

    // const [formData, setFormData] = useState(initialState);

    // const handleChange = (e) => {
    //     const { name, value } = e.target;

    //     setFormData((prev) => ({
    //         ...prev,
    //         [name]: value,
    //     }));
    // }

    const handleSubmit = async (e) => {
        e.preventDefault();

        //     const res = await dispatch(reqtoEditManageAddress({ id, data: formData }));

        //     if (res.payload?.status) {
        //         dispatch(editManageAddress());
        navigate("/account");
        //     }
    }

    // useEffect(() => {
    //     if (manageAddressEdit) {
    //         setFormData({
    //             address_line_1: manageAddressEdit?.address_line_1,
    //             address_line_2: manageAddressEdit?.address_line_2,
    //             city: manageAddressEdit?.city,
    //             state: manageAddressEdit?.state,
    //             country: manageAddressEdit?.country,
    //             postal_code: manageAddressEdit?.postal_code,
    //             address_type: manageAddressEdit?.address_type,
    //         });
    //     }
    // }, [manageAddressEdit]);


    return (
        <>

            {/* ------ Edit-Account Start ------ */}
            <div className="create_address pd-x">
                <h4>Edit Profile</h4>

                <div className='address_form'>
                    <form className='row m-0' onSubmit={handleSubmit}>
                        <div className="col-lg-12 mb-4">
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
                        <div className="col-lg-6">
                            <label htmlFor="email" className='form-label'>Email *</label>
                            <div>
                                <input
                                    type="email"
                                    name='email'
                                    placeholder=''
                                    className='form-control'
                                    required
                                />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <label htmlFor="Mobile_Number" className='form-label'>Mobile Number *</label>
                            <div>
                                <input
                                    type="text"
                                    name='Mobile_Number'
                                    placeholder=''
                                    className='form-control'
                                    required
                                />
                            </div>
                        </div>

                        <button type='submit' className='main_btn address_btn'>
                            {/* {
                                manageAddressLoader ? loaders.btn : 'SUBMIT'
                            } */}
                            SUBMIT
                        </button>
                    </form>
                </div>
            </div>
            {/* ------ Edit-Account End ------ */}

        </>
    )
}

export default EditAccount;