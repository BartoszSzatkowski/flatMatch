import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeTabs from './mainTabs/HomeTabs';
import SetupStack from './setupStack/SetupStack';
import AuthStack from './authStack/AuthStack';
import Conversation from './Conversation/Conversation';

const Stack = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          header: () => null,
        }}
      >
        <Stack.Screen name='AuthStack' component={AuthStack} />
        <Stack.Screen name='SetupStack' component={SetupStack} />
        <Stack.Screen name='HomeTabs' component={HomeTabs} />
        <Stack.Screen name='Conversation' component={Conversation} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
