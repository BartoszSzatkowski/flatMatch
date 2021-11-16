import React, { useState } from 'react';
import { View, Text, Button, TextInput, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import InputBox from '../UI/InputBox';
import StyledText from '../UI/StyledText';
import Title from '../UI/Title';

export default function Description({ navigation }) {
  const [formState, setFormState] = useState({
    description: '',
    point0: '',
    point1: '',
    point2: '',
  });

  const handleFormChange = (text, name) => {
    setFormState((prevState) => ({
      ...prevState,
      [name]: text,
    }));
  };

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
          fields={['description']}
          isMulti={true}
          inNum={false}
          state={formState}
          handleChange={handleFormChange}
        />
        <StyledText>Three important things about me:</StyledText>
        <InputBox
          fields={['point0', 'point1', 'point2']}
          isMulti={false}
          isNum={false}
          state={formState}
          handleChange={handleFormChange}
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
