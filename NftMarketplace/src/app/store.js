import { configureStore } from "@reduxjs/toolkit";
import textFormSlice from "../features/textForm/textFormSlice";
import dropDownFormSlice from '../features/dropDownForm/dropDownFormSlice'
import picturesSlice from "../features/pictures/picturesSlice";
import loginTokenSlice from "../features/loginToken/loginTokenSlice";
import imagesUriSlice from "../features/imagesUri/imagesUriSlice";
import serverDataSlice from "../features/serverData/serverDataSlice";

const store = configureStore({
    reducer: {
        textForm : textFormSlice,
        dropDownForm: dropDownFormSlice,
        pictures: picturesSlice,
        loginToken : loginTokenSlice,
        imagesUri : imagesUriSlice,
        serverData : serverDataSlice,
    }
})

export default store;