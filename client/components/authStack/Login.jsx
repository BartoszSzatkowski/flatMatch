import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import InputBox from '../UI/InputBox';
import StyledText from '../UI/StyledText';
import Title from '../UI/Title';

export default function Login({ navigation }) {
  return (
    <SafeAreaView>
      <View style={styles.body}>
        <Title>{'function login() {'}</Title>
        <StyledText>{'  if(registered) {'}</StyledText>
        <InputBox
          fields={['login', 'password']}
          isMulti={false}
          isNum={false}
        />
        <Button
          title='Login'
          color='black'
          onPress={() => navigation.navigate('SetupStack')}
        />
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
