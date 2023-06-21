import { createSlice } from "@reduxjs/toolkit";

export const dropDownFormSlice = createSlice({
  name: "dropDownForm",
  initialState: {
    subject: null,
    style: null,
    medium: "",
    material: "",
    size: "",
    orientation: "",
  },
  reducers: {
    updateDropDownForm: (state, action) => {
      //state.subject.push(action.payload.subject);
      state.subject = action.payload.subject;
      //state.style.push(action.payload.style);
      state.style = action.payload.style;
      state.medium = action.payload.medium;
      state.material = action.payload.material;
      state.size = action.payload.size;
      state.orientation = action.payload.orientation;
    },
  },
});

export const { updateDropDownForm } = dropDownFormSlice.actions;
export default dropDownFormSlice.reducer;
