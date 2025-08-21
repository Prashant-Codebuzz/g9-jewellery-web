import { createAsyncThunk } from "@reduxjs/toolkit";
import { otpAuthHeaders, Axios, authHeaders } from "../helper/Axios";
import { apiendpoints } from "../../constants";
import { toast } from "react-toastify";

// reqtoSignUp
export const reqtoSignUp = createAsyncThunk("reqtoSignUp", async (data) => {
    try {
        const res = await Axios.post(apiendpoints.signUp, data);
        console.log("reqtoSignUp--> Services", res);

        if (res.data?.status) {
            toast.success(res.data?.message);

            return {
                status: res.data?.status,

                email: data.email,
                phone: data.Mobile_number,
            };
        } else {
            toast.error(res.data?.message)
        }
    } catch (err) {
        console.error(err);
    }
});


// reqtoOtpMethod
export const reqtoOtpMethod = createAsyncThunk("reqtoOtpMethod", async (data) => {
    try {
        // const res = await Axios.post(apiendpoints.otpMethod, data);
        // console.log("reqtoOtpMethod--> Services", res);

        // if (res.data?.status) {
            // toast.success(res.data?.message);

            return {
                status: res.data?.status,

                type: data.type,
            };
        // } else {
        //     toast.error(res.data?.message)
        // }
    } catch (err) {
        console.error(err);
    }
});


// reqtoOtpVerification
export const reqtoOtpVerification = createAsyncThunk("reqtoOtpVerification", async (data) => {
    try {
        const res = await Axios.post(apiendpoints.otpVerification, data);
        console.log("reqtoOtpVerification--> Services", res);

        if (res.data?.status) {
            toast.success(res.data?.message);

            return res.data;
        } else {
            toast.error(res.data?.message)
        }
    } catch (err) {
        console.error(err);
    }
});


// reqtoAddressDetail
export const reqtoAddressDetail = createAsyncThunk("reqtoAddressDetail", async (data) => {
    try {
        const res = await Axios.post(apiendpoints.addressDetail, data, otpAuthHeaders());
        console.log("reqtoAddressDetail--> Services", res);

        if (res.data?.status) {
            toast.success(res.data?.message);

            return res.data;
        } else {
            toast.error(res.data?.message)
        }
    } catch (err) {
        console.error(err);
    }
});


// reqtoSignIn
export const reqtoSignIn = createAsyncThunk("reqtoSignIn", async (data) => {
    try {
        const res = await Axios.post(apiendpoints.signIn, data);
        console.log("reqtoSignIn--> Services", res);

        if (res.data?.status) {
            toast.success(res.data?.message);

            return res.data;
        } else {
            toast.error(res.data?.message)
        }
    } catch (err) {
        console.error(err);
    }
});


// reqtoForgetPassword
export const reqtoForgetPassword = createAsyncThunk("reqtoForgetPassword", async (data) => {
    try {
        const res = await Axios.post(apiendpoints.forgetPassword, data);
        console.log("reqtoForgetPassword--> Services", res);

        if (res.data?.status) {
            toast.success(res.data?.message);

            return {
                status: res.data?.status,

                email: data.email,
                phone: data.Mobile_number,
            };
        } else {
            toast.error(res.data?.message)
        }
    } catch (err) {
        console.error(err);
    }
});


// reqtoChangePassword
export const reqtoChangePassword = createAsyncThunk("reqtoChangePassword", async (data) => {
    try {
        const res = await Axios.post(apiendpoints.changePassword, data, otpAuthHeaders());
        console.log("reqtoChangePassword--> Services", res);

        if (res.data?.status) {
            toast.success(res.data?.message);

            return res.data;
        } else {
            toast.error(res.data?.message)
        }
    } catch (err) {
        console.error(err);
    }
});


// reqtoSignOut
export const reqtoSignOut = createAsyncThunk("reqtoSignOut", async () => {
    try {
        const res = await Axios.get(apiendpoints.signOut, authHeaders("application/json"))

        if (res.data?.status) {
            toast.success(res.data?.message);

            return res.data;
        } else {
            toast.error(res.data?.message)
        }
    } catch (err) {
        console.error(err);
    }
})