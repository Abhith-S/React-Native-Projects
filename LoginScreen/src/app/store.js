import { configureStore } from "@reduxjs/toolkit";
import loginTokenSlice from "../features/loginToken/loginTokenSlice";

const store = configureStore({
    reducer:{
        loginToken : loginTokenSlice
    }
})

export default store;