import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
export const PhotoViewScreen = ({route}: {route: any}) => {
  const styles = StyleSheet.create({
    view: {flex: 1},
    imageSize: {
      minHeight: '100%',
    },
  });

  return (
    <View style={styles.view}>
      <Image
        style={styles.imageSize}
        source={{
          uri: `${route.params.urls.full}`,
        }}
      />
    </View>
  );
};
