import {createAsyncThunk} from '@reduxjs/toolkit';
import Config from 'react-native-config';

import {HTTPParameters} from '../httpParameters/httpParameters.ts';

export const fetchGallery = createAsyncThunk(
  'gallery/fetchGallery',
  async (_, thunkAPI) => {
    try {
      const response = await fetch(
        `${HTTPParameters}/photos?client_id=${Config.CLIENT_ID}`,
      );
      return await response.json();
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);
