import { combineReducers } from "@reduxjs/toolkit";
import gallerySlice from "../redux/slice/gallerySlice";
import favoriteSlice from "../redux/slice/favoritesSlice"
const appReducer = combineReducers({
  gallery: gallerySlice,
  favorite:favoriteSlice
});

export default appReducer;
