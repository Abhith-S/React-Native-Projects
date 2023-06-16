import { configureStore } from "@reduxjs/toolkit";
import textFormSlice from "../features/textForm/textFormSlice";
import dropDownFormSlice from '../features/dropDownForm/dropDownFormSlice'
import picturesSlice from "../features/pictures/picturesSlice";
import loginTokenSlice from "../features/loginToken/loginTokenSlice";

const store = configureStore({
    reducer: {
        textForm : textFormSlice,
        dropDownForm: dropDownFormSlice,
        pictures: picturesSlice,
        loginToken : loginTokenSlice
    }
})

export default store;