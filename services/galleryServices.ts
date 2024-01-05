import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {HTTPParameters} from '../httpParameters/httpParameters.ts';
import {GalleryInterface} from '../interface/GalleryInterface.ts';
import Config from 'react-native-config';

export const galleryServices = createApi({
  baseQuery: fetchBaseQuery({baseUrl: HTTPParameters}),
  endpoints: build => ({
    getAllCategory: build.query<GalleryInterface[], void>({
      query: () => ({
        url: `/photos?client_id=${Config.CLIENT_ID}`,
        method: 'GET',
      }),
    }),
  }),
  reducerPath: 'gallery',
});

export const {useGetAllCategoryQuery} = galleryServices;
