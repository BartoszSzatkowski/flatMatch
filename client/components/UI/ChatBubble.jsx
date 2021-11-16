import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function ChatBubble({ children, isThisSide }) {
  return (
    <View style={isThisSide ? styles.bubbleWrapThis : styles.bubbleWrapOther}>
      <View style={isThisSide ? styles.thisSide : styles.otherSide}>
        <Text style={isThisSide ? styles.thisSideText : styles.otherSideText}>
          {children}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  bubbleWrapThis: {
    display: 'flex',
    flexDirection: 'row-reverse',
  },
  bubbleWrapOther: {
    display: 'flex',
    flexDirection: 'row',
  },
  thisSide: {
    borderWidth: 1,
    borderColor: 'white',
    marginTop: 5,
    marginBottom: 5,
    padding: 5,
  },
  thisSideText: {
    color: 'white',
    fontSize: 18,
  },
  otherSide: {
    backgroundColor: 'white',
    marginTop: 5,
    marginBottom: 5,
    padding: 5,
  },
  otherSideText: {
    color: 'black',
    fontSize: 18,
  },
});
