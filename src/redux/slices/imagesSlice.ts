import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Image } from "../../types/image";
import { store } from "../store";

interface FavoriteImagesState {
  favorites: number[];
}

const initialState: FavoriteImagesState = {
  favorites: [],
};

export const favoriteImagesSlice = createSlice({
  name: "images",
  initialState,
  reducers: {
    toggleFavorite(state, action: PayloadAction<number>) {
      const imageId = action.payload;
      const index = state.favorites.indexOf(imageId);
      if (index === -1) {
        state.favorites.push(imageId);
      } else {
        state.favorites.splice(index, 1);
      }
    },
  },
});

export const { toggleFavorite } = favoriteImagesSlice.actions;

export const selectFavorites = (state: any) => state.images.favorites;

export default favoriteImagesSlice;
