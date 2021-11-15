import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

export default function InputBox({
  fields,
  isMulti,
  isNum,
  state,
  handleChange,
}) {
  return (
    <View style={styles.inputCointainer}>
      {fields.map((field) => {
        return (
          <TextInput
            key={field}
            name={field}
            multiline={isMulti}
            style={styles.input}
            placeholder={field}
            keyboardType={isNum ? 'numeric' : 'default'}
            value={state[field]}
            onChangeText={(text) => handleChange(text, field)}
          />
        );
      })}
    </View>
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
});
