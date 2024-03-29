import React, { useContext } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { UserContext } from '../../UserContext';
import StyledText from './StyledText';

export default function Contact({ user, navigation }) {
  const { setConversation } = useContext(UserContext);
  return (
    <TouchableOpacity
      onPress={() => {
        setConversation(user);
        navigation.navigate('Conversation');
      }}
    >
      <View style={styles.tile}>
        <View style={styles.name}>
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
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderColor: 'black',
  },
  name: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
});
