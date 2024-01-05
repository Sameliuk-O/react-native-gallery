import {createSlice} from '@reduxjs/toolkit';
import {fetchGallery} from '../asyncActions/fetchGallery.ts';
import {GalleryInterface} from '../interface/GalleryInterface.ts';

interface GalleryState {
  data: GalleryInterface[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: GalleryState = {
  data: [],
  status: 'idle',
  error: null,
};

const gallerySlice = createSlice({
  name: 'gallery',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchGallery.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = [...action.payload];
      })
      .addCase(fetchGallery.rejected, state => {
        state.status = 'failed';
        state.error = 'Error';
      })
      .addCase(fetchGallery.pending, state => {
        state.status = 'loading';
      });
  },
});

export default gallerySlice.reducer;
