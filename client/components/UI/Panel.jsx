import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

export default function Panel({ children }) {
  return (
    <View style={styles.panel}>
      <View style={styles.container}>{children}</View>
      <AntDesign name='arrowright' size={40} />
    </View>
  );
}

const styles = StyleSheet.create({
  panel: {
    display: 'flex',
    alignItems: 'flex-end',
    borderStyle: 'solid',
    borderWidth: 5,
    borderColor: 'black',
    height: 120,
    padding: 20,
  },
  container: {
    position: 'relative',
  },
});
