import React from 'react';
import Home from './Home';
import Match from './Match';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Chats from './Chats';
import { AntDesign, Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default function HomeTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        header: () => null,
        tabBarIcon: ({ color }) => {
          let iconName;
          switch (route.name) {
            case 'Home':
              return <AntDesign name='home' size={25} color={color} />;
            case 'Chats':
              return (
                <Ionicons
                  name='chatbox-ellipses-outline'
                  size={25}
                  color={color}
                />
              );
            case 'Match':
              return (
                <Ionicons name='md-people-outline' size={25} color={color} />
              );
          }
        },
        tabBarActiveTintColor: 'blue',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tab.Screen name='Home' component={Home} />
      <Tab.Screen name='Match' component={Match} />
      <Tab.Screen name='Chats' component={Chats} />
    </Tab.Navigator>
  );
}
