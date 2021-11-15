import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet, Text, View } from 'react-native';

export default function Conversation() {
  return (
    <SafeAreaView>
      <View>
        <Text>This is individual chat!</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
