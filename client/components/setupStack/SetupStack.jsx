import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Description from './Description';
import Coords from './Coords';

const SetStack = createStackNavigator();

export default function SetupStack() {
  return (
    <SetStack.Navigator screenOptions={{ header: () => null }}>
      <SetStack.Screen name='Description' component={Description} />
      <SetStack.Screen name='Coords' component={Coords} />
    </SetStack.Navigator>
  );
}
