import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';

export default function PanelTitle({ children }) {
  let [fontLoaded] = useFonts({
    'Roboto Mono': require('../../assets/fonts/RobotoMono.ttf'),
  });
  if (!fontLoaded) return <Text>{children}</Text>;
  else
    return (
      <Text
        style={{
          position: 'absolute',
          top: -45,
          left: 10,
          backgroundColor: 'rgb(242,242,242)',
          padding: 5,
          fontSize: 25,
          fontFamily: 'Roboto Mono',
        }}
      >
        {children}
      </Text>
    );
}
