import { createAsyncThunk, createSlice, current } from "@reduxjs/toolkit";
import { getAxiosInstance } from "../../api";

const initialState = {
  loading: false,
  data: [],
};

export const fetchGalleryImages = createAsyncThunk(
  "gallery/fetchGalleryImages",
  async () => {
    const api = await getAxiosInstance();
    const res = await api.get(`search?per_page=50&query=${"dark"}`);
    return res.data.photos;
  }
);

const gallerySlice = createSlice({
  name: "gallery",
  initialState,
  reducers: {
    addToFav: (state, action) => {
      const imgData = state.data.find((item) => item.id === action.payload.id);
      imgData.liked = !imgData.liked;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchGalleryImages.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchGalleryImages.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
      state.error = "";
    });
    builder.addCase(fetchGalleryImages.rejected, (state, action) => {
      state.loading = false;
      state.data = [];
      state.error = action.error.message;
    });
  },
});

export default gallerySlice.reducer;
export const { addToFav } = gallerySlice.actions;
