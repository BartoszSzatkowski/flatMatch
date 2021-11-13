import React from 'react';
import { View, Text, Button } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Description({ navigation }) {
  return (
    <SafeAreaView>
      <View>
        <Text>Banana desc</Text>
      </View>
      <Button
        title='Yo it is a string'
        onPress={() => navigation.navigate('Coords')}
      />
    </SafeAreaView>
  );
}
