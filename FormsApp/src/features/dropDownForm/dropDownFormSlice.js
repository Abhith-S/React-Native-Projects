import { createSlice } from '@reduxjs/toolkit'

export const dropDownFormSlice = createSlice({
    name:"dropDownForm",
    initialState:{
        subject:[],
        style:[],
        medium:"",
        material:"",
        quality:"",
        original:"",
        size:"",
        colors:[],
        orientation:""
    },
    reducers:{
        updateDropDownForm : (state,action)=>{
            state.subject.push(action.payload.subject);
            state.style.push(action.payload.style);
            state.medium = action.payload.medium
            state.material = action.payload.material
            state.quality = action.payload.quality
            state.original = action.payload.original
            state.size = action.payload.size
            state.colors.push(action.payload.colors);
            state.orientation = action.payload.orientation

        }
    }
})

export const {updateDropDownForm} = dropDownFormSlice.actions
export default dropDownFormSlice.reducer