import { combineReducers, configureStore } from "@reduxjs/toolkit";

import AuthSlice from "./slices/AuthSlice";
import AccountSlice from "./slices/AccountSlice";

const rootReducer = combineReducers({
    UserAuth: AuthSlice,

    UserAccount: AccountSlice,
});

const store = configureStore({
    reducer: rootReducer,
});

export default store;