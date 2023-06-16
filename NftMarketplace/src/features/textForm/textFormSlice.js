import { createSlice } from '@reduxjs/toolkit'

export const textFormSlice = createSlice({
    name:"textForm",
    initialState:{
       paintingName:"",
       paintingDescription:"",
       price:0
    },
    reducers:{
        updateTextForm: (state,action)=>{
            state.paintingName = action.payload.paintingName;
            state.paintingDescription = action.payload.paintingDescription
            state.price = action.payload.price
        }
    }
})

export const {updateTextForm} = textFormSlice.actions
export default textFormSlice.reducer