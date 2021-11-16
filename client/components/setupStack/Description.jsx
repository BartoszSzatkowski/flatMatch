import React, { useState, useEffect, useContext } from 'react';
import { View, Text, Button, TextInput, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import InputBox from '../UI/InputBox';
import StyledText from '../UI/StyledText';
import Title from '../UI/Title';
import { useMutation } from '@apollo/client';
import makeQuery from '../../services/generateQueries';
import { UserContext } from '../../UserContext';

export default function Description({ navigation }) {
  const [formState, setFormState] = useState({
    description: '',
    point0: '',
    point1: '',
    point2: '',
  });
  const { user } = useContext(UserContext);
  const [addDescription, { loading, error, data }] = useMutation(
    makeQuery.addDescription()
  );

  const handleFormChange = (text, name) => {
    setFormState((prevState) => ({
      ...prevState,
      [name]: text,
    }));
  };

  const handleDescription = async () => {
    await addDescription({
      variables: {
        desc: {
          UserId: user.id,
          text: formState.description,
          factors: `["${formState.point0}","${formState.point1}","${formState.point2}"]`,
        },
      },
    });
    navigation.navigate('Coords');
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
        <Button title='NEXT >' color='black' onPress={handleDescription} />
      </View>
    </SafeAreaView>
  );
}
