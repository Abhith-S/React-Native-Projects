//slice for storing respomse of the api call to server
import { createSlice } from "@reduxjs/toolkit";

export const serverResponseSlice = createSlice({
  name: "serverResponse",
  initialState: {
    responseData: null,
    nextPageUrl: "",
  },
  reducers: {
    updateResponseData: (state, action) => {
      state.responseData = {...state.responseData,...action.payload.responseData};
    },
    updateNextPageUrl: (state, action) => {
      state.nextPageUrl = action.payload.nextPageUrl;
    },
  },
});

export const { updateResponseData,updateNextPageUrl } = serverResponseSlice.actions;
export default serverResponseSlice.reducer;
