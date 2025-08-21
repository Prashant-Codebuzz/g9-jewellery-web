import { createSlice } from "@reduxjs/toolkit";
import { reqtoAddManageAddress, reqtoAddWishlist, reqtoDeleteManageAddress, reqtoDeleteWishlist, reqtoEditManageAddress, reqtoEditProfile, reqtoGetManageAddress, reqtoGetProfile, reqtoGetWishlist, reqtoSetPrimaryManageAddress, reqtoUserAddress } from "../services/AccountServices";

const initialState = {
    loader: false,

    userProfile: {},
    userAddress: {},

    manageAddressList: [],
    manageAddressEdit: {},
    manageAddressLoader: false,

    wishList: [],

    error: null
}

const AccountSlice = createSlice({
    name: "AccountSlice",
    initialState,
    reducers: {
        editManageAddress: (state, action) => {
            console.log(action);

            if (action.payload) {
                state.manageAddressEdit = action.payload;
            } else {
                state.manageAddressEdit = {};
            }
        }
    },
    extraReducers: (builder) => {
        // reqtoGetProfile
        builder.addCase(reqtoGetProfile.pending, (state) => {
            state.loader = true;
        });
        builder.addCase(reqtoGetProfile.fulfilled, (state, action) => {
            state.loader = false;

            state.userProfile = action.payload?.data;
        });
        builder.addCase(reqtoGetProfile.rejected, (state, action) => {
            state.loader = false;
        });


        // reqtoEditProfile
        builder.addCase(reqtoEditProfile.pending, (state) => {
            state.loader = true;
        });
        builder.addCase(reqtoEditProfile.fulfilled, (state, action) => {
            state.loader = false;
        });
        builder.addCase(reqtoEditProfile.rejected, (state, action) => {
            state.loader = false;
        });


        // reqtoUserAddress
        builder.addCase(reqtoUserAddress.pending, (state) => {
            state.loader = true;
        });
        builder.addCase(reqtoUserAddress.fulfilled, (state, action) => {
            state.loader = false;

            state.userAddress = action.payload?.data;
        });
        builder.addCase(reqtoUserAddress.rejected, (state, action) => {
            state.loader = false;
        });


        // reqtoGetManageAddress
        builder.addCase(reqtoGetManageAddress.pending, (state) => {
            state.loader = true;
        });
        builder.addCase(reqtoGetManageAddress.fulfilled, (state, action) => {
            state.loader = false;

            state.manageAddressList = action.payload?.data;
        });
        builder.addCase(reqtoGetManageAddress.rejected, (state, action) => {
            state.loader = false;
        });


        // reqtoAddManageAddress
        builder.addCase(reqtoAddManageAddress.pending, (state) => {
            state.manageAddressLoader = true;
        });
        builder.addCase(reqtoAddManageAddress.fulfilled, (state, action) => {
            state.manageAddressLoader = false;
        });
        builder.addCase(reqtoAddManageAddress.rejected, (state, action) => {
            state.manageAddressLoader = false;
        });


        // reqtoEditManageAddress
        builder.addCase(reqtoEditManageAddress.pending, (state) => {
            state.manageAddressLoader = true;
        });
        builder.addCase(reqtoEditManageAddress.fulfilled, (state, action) => {
            state.manageAddressLoader = false;
        });
        builder.addCase(reqtoEditManageAddress.rejected, (state, action) => {
            state.manageAddressLoader = false;
        });


        // reqtoDeleteManageAddress
        builder.addCase(reqtoDeleteManageAddress.pending, (state) => {
            state.manageAddressLoader = true;
        });
        builder.addCase(reqtoDeleteManageAddress.fulfilled, (state, action) => {
            state.manageAddressLoader = false;
        });
        builder.addCase(reqtoDeleteManageAddress.rejected, (state, action) => {
            state.manageAddressLoader = false;
        });


        // reqtoSetPrimaryManageAddress
        builder.addCase(reqtoSetPrimaryManageAddress.pending, (state) => {
            state.manageAddressLoader = true;
        });
        builder.addCase(reqtoSetPrimaryManageAddress.fulfilled, (state, action) => {
            state.manageAddressLoader = false;
        });
        builder.addCase(reqtoSetPrimaryManageAddress.rejected, (state, action) => {
            state.manageAddressLoader = false;
        });


        // reqtoGetWishlist
        builder.addCase(reqtoGetWishlist.pending, (state) => {
            state.loader = true;
        });
        builder.addCase(reqtoGetWishlist.fulfilled, (state, action) => {
            state.loader = false;

            state.wishList = action.payload?.data?.wishlist;
        });
        builder.addCase(reqtoGetWishlist.rejected, (state, action) => {
            state.loader = false;
        });


        // reqtoAddWishlist
        builder.addCase(reqtoAddWishlist.pending, (state) => {
            state.loader = true;
        });
        builder.addCase(reqtoAddWishlist.fulfilled, (state, action) => {
            state.loader = false;
        });
        builder.addCase(reqtoAddWishlist.rejected, (state, action) => {
            state.loader = false;
        });


        // reqtoDeleteWishlist
        builder.addCase(reqtoDeleteWishlist.pending, (state) => {
            state.loader = true;
        });
        builder.addCase(reqtoDeleteWishlist.fulfilled, (state, action) => {
            state.loader = false;
        });
        builder.addCase(reqtoDeleteWishlist.rejected, (state, action) => {
            state.loader = false;
        });
    }
});

export default AccountSlice.reducer;
export const { editManageAddress } = AccountSlice.actions;