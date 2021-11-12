import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';

export default function StyledText({ children }) {
  let [fontLoaded] = useFonts({
    'Roboto Mono': require('../../assets/fonts/RobotoMono.ttf'),
  });
  if (!fontLoaded) return <Text>{children}</Text>;
  else
    return (
      <Text style={{ fontFamily: 'Roboto Mono', fontSize: 17 }}>
        {children}
      </Text>
    );
}
