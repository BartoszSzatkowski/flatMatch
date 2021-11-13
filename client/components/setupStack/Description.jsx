import React from 'react';
import { View, Text, Button, TextInput, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import InputBox from '../UI/InputBox';
import StyledText from '../UI/StyledText';
import Title from '../UI/Title';

export default function Description({ navigation }) {
  return (
    <SafeAreaView>
      <View
        style={{
          display: 'flex',
          justifyContent: 'space-around',
          height: '100%',
          padding: 30,
        }}
      >
        <Title>Hello world!</Title>
        <InputBox
          fields={['Write short text about yourself char(255)']}
          isMulti={true}
          inNum={false}
        />
        <StyledText>Three important things about me:</StyledText>
        <InputBox
          fields={['point nr0', 'point nr1', 'point nr2']}
          isMulti={false}
          isNum={false}
        />
        <Button
          title='NEXT >'
          color='black'
          onPress={() => navigation.navigate('Coords')}
        />
      </View>
    </SafeAreaView>
  );
}
