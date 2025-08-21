import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom';

// Css
import "../Account.scss"

// Image
// Light
import EditLight from "../../../assets/images/account/edit-light.svg";
import HomeLight from "../../../assets/images/account/home-light.svg";
import WorkLight from "../../../assets/images/account/work-light.svg";
import OtherLight from "../../../assets/images/account/other-light.svg";

import AccountSidebar from '../../../components/account-sidebar/AccountSidebar';
import { useDispatch, useSelector } from 'react-redux';
import { reqtoGetProfile, reqtoUserAddress } from '../../../redux-Toolkit/services/AccountServices';

const Account = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const userAccount = useSelector((state) => state.UserAccount);
    const { loader, userProfile, userAddress } = userAccount;

    console.log(userProfile, userAddress);


    const GetProfile = async () => {
        await dispatch(reqtoGetProfile());
    }

    const GetUserAddress = async () => {
        await dispatch(reqtoUserAddress());
    }

    useEffect(() => {
        GetProfile();
        GetUserAddress();
    }, []);

    return (
        <>

            {/* ------ Account Start ------ */}
            <div className="account pd-x">
                <div className="page_menu">
                    Home {` > `} <span>My Account</span>
                </div>


                <div className="row">
                    <div className="col-lg-3">
                        <AccountSidebar />
                    </div>

                    <div className="col-lg-9">
                        <div className="account_overview">
                            <h4>Account Overview</h4>

                            <div className="details">
                                <div className="user_info">
                                    <div className="name d-flex justify-content-between">
                                        Tarun Patel
                                        {/* {userProfile?.name} */}

                                        <button
                                            type='button'
                                            onClick={() => {
                                                // navigate(`/account/edit/${userProfile?.id}`)
                                                navigate(`/account/edit/1`)
                                            }}
                                        >
                                            <img src={EditLight} alt="" className='img-fluid' draggable={false} />
                                        </button>
                                    </div>
                                    <div className="email">
                                        tarunpatel123@gmail.com
                                        {/* {userProfile?.email} */}
                                    </div>
                                    <div className="phone">
                                        +91 01234567980
                                        {/* {userProfile?.Mobile_number} */}
                                    </div>
                                </div>

                                {/* {
                                    userAddress && (
                                        <> */}
                                            <div className="line"></div>

                                            <div className="user_address">
                                                <div className='title'>Primary Address</div>

                                                <div className='title d-flex align-items-center'>
                                                    <img src={HomeLight} alt="" className='img-fluid me-3' draggable={false} />
                                                    {/* <img src={userAddress?.address_type === 'Home' ? HomeLight : userAddress?.address_type === 'Work' ? WorkLight : OtherLight} alt="" className='img-fluid me-3' draggable={false} /> */}

                                                    Home
                                                    {/* {userAddress?.address_type} */}
                                                </div>

                                                <p className='mb-0'>
                                                    123, Shyamdham Soc, Nana Varachha <br />
                                                    Surat, Gujarat, India - 395006

                                                    {/* {userAddress?.address_line_1} <br />
                                                    {userAddress?.city}, {userAddress?.state}, {userAddress?.country} - {userAddress?.postal_code} */}

                                                </p>
                                            </div>
                                        {/* </>
                                    )
                                } */}

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* ------ Account End ------ */}

        </>
    )
}

export default Account;
