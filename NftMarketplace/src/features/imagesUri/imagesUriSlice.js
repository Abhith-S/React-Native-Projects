//slice for storing uri of the caputured images
import { createSlice } from "@reduxjs/toolkit";

export const imagesUriSlice = createSlice({
  name: "imagesUri",
  initialState: {
    paintingArtistImage: null,
    fullPaintingImage: null,
    leftPaintingImage: null,
    rightPaintingImage: null
  },
  reducers: {
    updatePaintingArtistImage: (state, action) => {
      state.paintingArtistImage = action.payload;
    },
    updateFullPaintingImage: (state, action) => {
      state.fullPaintingImage = action.payload;
    },
    updateLeftPaintingImage: (state, action) => {
      state.leftPaintingImage = action.payload;
    },
    updateRightPaintingImage: (state, action) => {
      state.rightPaintingImage = action.payload;
    },
  },
});

export const { updateLeftPaintingImage, updateRightPaintingImage,updatePaintingArtistImage, updateFullPaintingImage} =
imagesUriSlice.actions;
export default imagesUriSlice.reducer;
