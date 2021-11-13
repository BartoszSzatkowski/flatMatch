import React from 'react';
import { View, Text, Button, TextInput, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
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
        <View style={styles.inputCointainer}>
          <TextInput
            multiline
            style={styles.input}
            placeholder='Write short text about yourself char(255)'
          />
        </View>
        <StyledText>Three important things about me:</StyledText>
        <View style={styles.inputCointainer}>
          <TextInput style={styles.input} placeholder='point nr0' />
          <TextInput style={styles.input} placeholder='point nr1' />
          <TextInput style={styles.input} placeholder='point nr2' />
        </View>
        <Button
          title='NEXT >'
          style={styles.button}
          color='black'
          onPress={() => navigation.navigate('Coords')}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  inputCointainer: {
    backgroundColor: 'black',
    paddingBottom: 10,
  },
  input: {
    backgroundColor: 'white',
    width: '97%',
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 5,
    paddingBottom: 5,
    borderTopColor: 'black',
    borderTopWidth: 1,
    borderLeftWidth: 1,
  },
  button: {
    color: 'black',
  },
});
