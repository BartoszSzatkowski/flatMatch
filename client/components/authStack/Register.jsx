import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function Register({ navigation }) {
  return (
    <View>
      <Text>Welcome To the Register</Text>
      <Button
        title='Register'
        color='black'
        onPress={() => navigation.navigate('SetupStack')}
      />
      <Button
        title='Go back to login'
        color='black'
        onPress={() => navigation.navigate('Login')}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
