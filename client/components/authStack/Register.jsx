import React, { useState, useContext, useEffect } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import InputBox from '../UI/InputBox';
import StyledText from '../UI/StyledText';
import Title from '../UI/Title';
import { useMutation, useLazyQuery } from '@apollo/client';
import makeQuery from '../../services/generateQueries';
import { UserContext } from '../../UserContext';

export default function Register({ navigation }) {
  const [formState, setFormState] = useState({
    name: '',
    password: '',
    email: '',
    repeat: '',
  });
  const [createUser] = useMutation(makeQuery.createUser());
  const [loginUser, { loading, error, data }] = useLazyQuery(
    makeQuery.loginUser()
  );
  const { setUser } = useContext(UserContext);

  useEffect(() => {
    if (data?.loginUser) {
      setUser(data.loginUser);
      navigation.navigate('SetupStack');
    }
  }, [data]);

  const handleFormChange = (text, name) => {
    setFormState((prevState) => ({
      ...prevState,
      [name]: text,
    }));
  };

  const handleRegister = async () => {
    if (formState.password === formState.repeat) {
      console.log('hello');
      await createUser({
        variables: {
          user: {
            name: formState.name,
            email: formState.email,
            password: formState.password,
          },
        },
      });
      await loginUser({
        variables: { email: formState.email, password: formState.password },
      });
    }
  };

  return (
    <SafeAreaView>
      <View style={styles.body}>
        <Title>{'try {'}</Title>
        <InputBox
          fields={['name', 'email', 'password', 'repeat']}
          isMulit={false}
          inNum={false}
          state={formState}
          handleChange={handleFormChange}
        />
        <Button title='Register' color='black' onPress={handleRegister} />
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
