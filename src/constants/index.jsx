export const apiendpoints = {
    // Auth
    signUp: "user/signUp",
    signUpWithGoogle: "user/signUpWithGoogle",

    otpMethod: "user/otpMethod",
    otpVerification: "user/otpVerification",
    resendOtp: "user/resendOtp", // Not Use

    addressDetail: "user/userAddress",

    signIn: "user/signIn",
    signInWithGoogle: "user/signInWithGoogle",

    forgetPassword: "user/forgetPassword",
    changePassword: "user/changePassword",


    signOut: "user/signOut",

    // Account
    getProfile: "account/userData",
    editProfile: "account/edit/:id",

    userAddress: "account/userAddress",

    getManageAddress: "ManageAddress/list",
    addManageAddress: "user/userAddress",
    editManageAddress: "ManageAddress/edit/:id",
    deleteManageAddress: "ManageAddress/delete/:id",
    setPrimaryManageAddress: "ManageAddress/setPrimary/:id",

    getWishlist: "wishlist/list",
    addWishlist: "wishlist/add",
    deleteWishlist: "wishlist/delete/:id",
}