import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './Login';
import Register from './Register';

const AtStack = createStackNavigator();

export default function AuthStack() {
  return (
    <AtStack.Navigator
      screenOptions={{
        header: () => null,
      }}
    >
      <AtStack.Screen name='Login' component={Login} />
      <AtStack.Screen name='Register' component={Register} />
    </AtStack.Navigator>
  );
}
