import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import Cart from '../../screen/Cart/Cart';

const NativeStack = createNativeStackNavigator();

const NativeStackNavigator = () => {
  return (
    <NavigationContainer>
      <NativeStack.Navigator>
        <NativeStack.Screen name="Cart" component={Cart} options={{
          title: 'Shopping Cart',
        }} />
      </NativeStack.Navigator>
    </NavigationContainer>
  );
};

export default NativeStackNavigator;
