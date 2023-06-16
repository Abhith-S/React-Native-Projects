import { createSlice } from "@reduxjs/toolkit";

export const loginTokenSlice = createSlice({
  name: "loginToken",
  initialState: {
    token: "",
  },
  reducers: {
    updateLoginToken: (state, action) => {
      state.token = action.payload.token;
    },
  },
});

export const {updateLoginToken} = loginTokenSlice.actions
export default loginTokenSlice.reducer
