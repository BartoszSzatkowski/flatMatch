import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import StyledText from './StyledText';

export default function Contact({ user }) {
  return (
    <TouchableOpacity>
      <View style={styles.tile}>
        <View style={styles.name}>
          <View style={styles.block} />
          <StyledText size={25}>{user.name}</StyledText>
        </View>
        <StyledText>{user.email}</StyledText>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  tile: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 8,
  },
  name: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  block: {
    height: 30,
    width: 8,
    backgroundColor: 'black',
  },
});
