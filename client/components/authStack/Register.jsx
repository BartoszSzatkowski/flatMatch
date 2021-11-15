import React, { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import InputBox from '../UI/InputBox';
import StyledText from '../UI/StyledText';
import Title from '../UI/Title';

export default function Register({ navigation }) {
  const [formState, setFormState] = useState({
    password: '',
    email: '',
    repeat: '',
  });

  const handleFormChange = (text, name) => {
    setFormState((prevState) => ({
      ...prevState,
      [name]: text,
    }));
  };
  return (
    <SafeAreaView>
      <View style={styles.body}>
        <Title>{'try {'}</Title>
        <InputBox
          fields={['email', 'password', 'repeat']}
          isMulit={false}
          inNum={false}
          state={formState}
          handleChange={handleFormChange}
        />
        <Button
          title='Register'
          color='black'
          onPress={() => navigation.navigate('SetupStack')}
        />
        <StyledText>{'  } catch (error = "Go back!") {'}</StyledText>
        <Button
          title='Go back to login'
          color='black'
          onPress={() => navigation.navigate('Login')}
        />
        <StyledText>{'  }'}</StyledText>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  body: {
    display: 'flex',
    height: '100%',
    justifyContent: 'space-around',
    padding: 30,
  },
});
