import { configureStore } from '@reduxjs/toolkit'
import textFormSlice from '../features/textForm/textFormSlice'
import dropDownFormSlice from '../features/dropDownForm/dropDownFormSlice'

export default configureStore({
    reducer: {
        textForm : textFormSlice,
        dropDownForm: dropDownFormSlice
    }
  })