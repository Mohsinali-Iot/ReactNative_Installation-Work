import React from 'react';
import {View,Text} from 'react-native';

import Home from '../screen/Home'
import Camera from '../screen/camera'
// import ImagePicker from '../screen/imagepicker'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// function AppNavigation() {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>Home Screen</Text>
//     </View>
//   );
// }

const Stack = createStackNavigator();

function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="HomePage" component={Home} />
        <Stack.Screen name="Camera" component={Camera} />
        {/* <Stack.Screen name="Choose Photo From Gallery" component={ImagePicker} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigation;