import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function Login({ navigation }) {
  return (
    <View>
      <Text>Welcome to the login page</Text>
      <Button
        title='Register'
        color='black'
        onPress={() => navigation.navigate('Register')}
      />
      <Button
        title='Login'
        color='black'
        onPress={() => navigation.navigate('SetupStack')}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
