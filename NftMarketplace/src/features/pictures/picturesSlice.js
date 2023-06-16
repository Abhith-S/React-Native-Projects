import { createSlice, current } from "@reduxjs/toolkit";

export const picturesSlice = createSlice({
  name: "pictures",
  initialState: {
    paintingArtistPic: null,
    fullPaintingPic: null,
    leftPaintingPic: null,
    rightPaintingPic: null
  },
  reducers: {
    updatePaintingArtistPic: (state, action) => {
      state.paintingArtistPic = action.payload;
    },
    updateFullPaintingPic: (state, action) => {
      state.fullPaintingPic = action.payload;
    },
    updateLeftPaintingPic: (state, action) => {
      state.leftPaintingPic = action.payload;
    },
    updateRightPaintingPic: (state, action) => {
      state.rightPaintingPic = action.payload;
    },
  },
});

export const { updateLeftPaintingPic, updateRightPaintingPic,updatePaintingArtistPic, updateFullPaintingPic} =
  picturesSlice.actions;
export default picturesSlice.reducer;
