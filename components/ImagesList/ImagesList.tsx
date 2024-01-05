import React from 'react';
import {useNavigation} from '@react-navigation/native';

import {
  FlatList,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {GalleryInterface} from '../../interface/GalleryInterface.ts';
import {styles} from './styles.ts';

export const ImagesList = ({gallery}: {gallery: GalleryInterface[]}) => {
  const navigation: any = useNavigation();
  const renderItems = ({item}: {item: GalleryInterface}) => {
    return (
      <TouchableOpacity
        style={styles.imageContain}
        onPress={() =>
          navigation.navigate('Photo', {...item, url: {...item.urls}})
        }>
        <View>
          <Image
            source={{
              uri: `${item.urls.small}`,
            }}
            height={200}
            alt={item.alt_description}
            style={styles.imageBorder}
          />
          <Text style={styles.imageDescription}>{item.alt_description}</Text>
          <Text>{item.user.name}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <FlatList
      columnWrapperStyle={styles.positionItemInTheScreen}
      data={gallery}
      renderItem={renderItems}
      numColumns={3}
    />
  );
};
