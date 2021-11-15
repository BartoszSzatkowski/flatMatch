import React, { useState, useContext, useEffect } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { UserContext } from '../../UserContext';
import InputBox from '../UI/InputBox';
import StyledText from '../UI/StyledText';
import Title from '../UI/Title';
import { useLazyQuery } from '@apollo/client';
import makeQuery from '../../services/generateQueries';

export default function Login({ navigation }) {
  const [formState, setFormState] = useState({ password: '', email: '' });
  const [loginUser, { loading, error, data }] = useLazyQuery(
    makeQuery.loginUser()
  );
  const { setUser } = useContext(UserContext);

  useEffect(() => {
    if (data?.loginUser) {
      setUser(data.loginUser);
      navigation.navigate('HomeTabs');
    }
  }, [data]);

  const handleFormChange = (text, name) => {
    setFormState((prevState) => ({
      ...prevState,
      [name]: text,
    }));
  };

  const handleLogin = () => {
    const result = loginUser({
      variables: { email: formState.email, password: formState.password },
    });
  };

  return (
    <SafeAreaView>
      <View style={styles.body}>
        <Title>{'function login() {'}</Title>
        <StyledText>{'  if(registered) {'}</StyledText>
        <InputBox
          fields={['email', 'password']}
          isMulti={false}
          isNum={false}
          state={formState}
          handleChange={handleFormChange}
        />
        <Button title='Login' color='black' onPress={handleLogin} />
        <StyledText>{'  } else {'}</StyledText>
        <Button
          title='Register'
          color='black'
          onPress={() => navigation.navigate('Register')}
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
