//slice for storing respomse of the api call to server
import { createSlice } from "@reduxjs/toolkit";

export const serverDataSlice = createSlice({
  name: "serverData",
  initialState: {
    serverResponse: "null",
  },
  reducers: {
    updateServerResponse: (state, action) => {
      state.serverResponse = action.payload.serverResponse;
    },
  },
});

export const { updateServerResponse } = serverDataSlice.actions;
export default serverDataSlice.reducer;
