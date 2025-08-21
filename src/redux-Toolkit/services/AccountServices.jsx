import { createAsyncThunk } from "@reduxjs/toolkit";
import { apiendpoints } from "../../constants";
import { authHeaders, Axios } from "../helper/Axios";
import { toast } from "react-toastify";

// reqtoGetProfile
export const reqtoGetProfile = createAsyncThunk("reqtoGetProfile", async () => {
    try {
        const res = await Axios.get(apiendpoints.getProfile, authHeaders("application/json"));

        if (res.data?.status) {
            return res.data;
        } else {
            toast.error(res.data?.message);
        }

    } catch (err) {
        console.error(err);
    }
});


// reqtoEditProfile
export const reqtoEditProfile = createAsyncThunk("reqtoEditProfile", async (data) => {
    try {
        const res = await Axios.post(apiendpoints.editProfile, data, authHeaders("application/json"));

        if (res.data?.status) {
            toast.success(res.data?.message);

            return res.data;
        } else {
            toast.error(res.data?.message);
        }

    } catch (err) {
        console.error(err);
    }
});


// reqtoUserAddress
export const reqtoUserAddress = createAsyncThunk("reqtoUserAddress", async () => {
    try {
        const res = await Axios.get(apiendpoints.userAddress, authHeaders("application/json"));

        if (res.data?.status) {
            return res.data;
        } else {
            toast.error(res.data?.message);
        }

    } catch (err) {
        console.error(err);
    }
});


// reqtoGetManageAddress
export const reqtoGetManageAddress = createAsyncThunk("reqtoGetManageAddress", async () => {
    try {
        const res = await Axios.get(apiendpoints.getManageAddress, authHeaders("application/json"));

        if (res.data?.status) {
            return res.data;
        } else {
            toast.error(res.data?.message);
        }

    } catch (err) {
        console.error(err);
    }
});


// reqtoAddManageAddress
export const reqtoAddManageAddress = createAsyncThunk("reqtoAddManageAddress", async (data) => {
    try {
        const res = await Axios.post(apiendpoints.addManageAddress, data, authHeaders("application/json"));

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


// reqtoEditManageAddress
export const reqtoEditManageAddress = createAsyncThunk("reqtoEditManageAddress", async ({ id, data }) => {
    try {
        const res = await Axios.post(apiendpoints.editManageAddress.replace(':id', id), data, authHeaders("application/json"));

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


// reqtoDeleteManageAddress
export const reqtoDeleteManageAddress = createAsyncThunk("reqtoDeleteManageAddress", async (id) => {
    try {
        const res = await Axios.delete(apiendpoints.deleteManageAddress.replace(':id', id), authHeaders("application/json"));

        if (res.data?.status) {
            toast.success(res.data.message);

            return res.data;
        } else {
            toast.error(res.data?.message);
        }

    } catch (err) {
        console.error(err);
    }
});


// reqtoSetPrimaryManageAddress
export const reqtoSetPrimaryManageAddress = createAsyncThunk("reqtoSetPrimaryManageAddress", async (id) => {
    try {
        const res = await Axios.post(apiendpoints.setPrimaryManageAddress.replace(':id', id), {}, authHeaders("application/json"));

        if (res.data?.status) {
            toast.success(res.data.message);

            return res.data;
        } else {
            toast.error(res.data?.message);
        }

    } catch (err) {
        console.error(err);
    }
});


// reqtoGetWishlist
export const reqtoGetWishlist = createAsyncThunk("reqtoGetWishlist", async () => {
    try {
        const res = await Axios.get(apiendpoints.getWishlist, authHeaders("application/json"));

        if (res.data?.status) {
            return res.data;
        } else {
            toast.error(res.data?.message);
        }

    } catch (err) {
        console.error(err);
    }
});


// reqtoAddWishlist
export const reqtoAddWishlist = createAsyncThunk("reqtoAddWishlist", async (data) => {
    try {
        const res = await Axios.post(apiendpoints.addWishlist, data, authHeaders("application/json"));

        if (res.data?.status) {
            toast.success(res.data?.message);

            return res.data;
        } else {
            toast.error(res.data?.message);
        }

    } catch (err) {
        console.error(err);
    }
});


// reqtoDeleteWishlist
export const reqtoDeleteWishlist = createAsyncThunk("reqtoDeleteWishlist", async (id) => {
    try {
        const res = await Axios.delete(apiendpoints.deleteWishlist.replace(':id', id), authHeaders("application/json"));

        if (res.data?.status) {
            toast.success(res.data?.message);

            return res.data;
        } else {
            toast.error(res.data?.message);
        }

    } catch (err) {
        console.error(err);
    }
});