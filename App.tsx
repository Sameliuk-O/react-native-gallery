import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';

import {Provider} from 'react-redux';

import {GalleryScreen} from './screens/gallery/GalleryScreen.tsx';
import {PhotoViewScreen} from './screens/photo-view/PhotoViewScreen.tsx';

import store from './store/store';

const Stack = createNativeStackNavigator();
function App(): React.JSX.Element {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Gallery" component={GalleryScreen} />
          <Stack.Screen name="Photo" component={PhotoViewScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
