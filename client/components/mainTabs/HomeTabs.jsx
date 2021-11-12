import React from 'react';
import Home from './Home';
import Match from './Match';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Chats from './Chats';

const Tab = createBottomTabNavigator();

export default function HomeTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        header: () => null,
      }}
    >
      <Tab.Screen name='Home' component={Home} />
      <Tab.Screen name='Match' component={Match} />
      <Tab.Screen name='Chats' component={Chats} />
    </Tab.Navigator>
  );
}
