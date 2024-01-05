import React, {useEffect} from 'react';

import {SafeAreaView} from 'react-native';

import {fetchGallery} from '../../asyncActions/fetchGallery.ts';
import {ImagesList} from '../../components/ImagesList/ImagesList.tsx';
import {useAppDispatch} from '../../hooks/useAppDispatch.ts';
import {useAppSelector} from '../../hooks/useAppSelector.ts';
import gallerySlice from '../../store/gallerySlice.ts';

export const GalleryScreen = () => {
  const dispatch = useAppDispatch();
  const gallery = useAppSelector(
    (state: gallerySlice) => state.gallerySlice.data,
  );

  useEffect(() => {
    dispatch(fetchGallery());
  }, [dispatch]);

  const backgroundStyle = {
    backgroundColor: '#ff0',
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <ImagesList gallery={gallery} />
    </SafeAreaView>
  );
};
