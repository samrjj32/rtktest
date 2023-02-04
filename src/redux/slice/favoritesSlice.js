import {
  createAsyncThunk,
  createSlice,
  createAction,
  current,
} from "@reduxjs/toolkit";
import { addToFav } from "./gallerySlice";

const initialState = {
  data: [],
};

const favoriteSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    removeFav: (state, action) => {
      console.log(action.payload, "hy");
      state.data = [];
    },
  },
  extraReducers: (builder) => {
    //updating favorites redux state with gallery redux action
    //method 1
    // ["gallery/addToFav"]: (state, action) => {
    //   let newdata = {...action.payload}           
    //   newdata.liked = true;
    //   state.data.push(newdata);
    // },
    //method 2
    builder.addCase(addToFav, (state, action) => {
      let newdata = { ...action.payload };
      newdata.liked = true;
      state.data.push(newdata);
    });
  },
});

export default favoriteSlice.reducer;
export const { removeFav } = favoriteSlice.actions;
