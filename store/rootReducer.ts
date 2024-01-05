import {combineReducers} from '@reduxjs/toolkit';

import gallerySlice from './gallerySlice.ts';

const rootReducer = combineReducers({
  gallerySlice,
});
export default rootReducer;
