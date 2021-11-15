import React, { useContext, useState } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { UserContext } from '../../UserContext';
import { SafeAreaView } from 'react-native-safe-area-context';
import Title from '../UI/Title';
import StyledText from '../UI/StyledText';
import InputBox from '../UI/InputBox';
import { FontAwesome } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function Conversation() {
  const { conversation } = useContext(UserContext);
  const [message, setMessage] = useState('');

  const handleFormChange = (text, name) => {
    setMessage(() => ({
      [name]: text,
    }));
  };

  return (
    <SafeAreaView>
      <View style={styles.body}>
        <View>
          <Title>{conversation.name}</Title>
          <StyledText>{conversation.email}</StyledText>
        </View>
        <ScrollView style={styles.feed}>
          <View style={styles.feedWrap}>
            <Text>Banana</Text>
            <Text>Banana1</Text>
            <Text>Banana3</Text>
            <Text>Banana4</Text>
            <Text>Banana5</Text>
            <Text>Banana</Text>
            <Text>Banana</Text>
            <Text>Banana</Text>
            <Text>Banana</Text>
            <Text>Banana</Text>
            <Text>Banana</Text>
            <Text>Banana</Text>
            <Text>Banana</Text>
            <Text>Banana</Text>
            <Text>Banana</Text>
            <Text>Banana</Text>
            <Text>Banana</Text>
            <Text>Banana</Text>
            <Text>Banana</Text>
            <Text>Banana</Text>
            <Text>Banana</Text>
            <Text>Banana</Text>
            <Text>Banana</Text>
            <Text>Banana</Text>
            <Text>Banana</Text>
            <Text>Banana</Text>
            <Text>Banana</Text>
            <Text>Banana</Text>
            <Text>Banana</Text>
            <Text>Banana</Text>
          </View>
        </ScrollView>
        <View style={styles.input}>
          <View style={styles.inputWrap}>
            <InputBox
              fields={['message']}
              isMulti={false}
              isNum={false}
              state={message}
              handleChange={handleFormChange}
            />
          </View>
          <TouchableOpacity>
            <FontAwesome name='send-o' size={30} />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  body: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    padding: 30,
  },
  feed: {
    height: '80%',
    borderWidth: 1,
    borderColor: 'black',
  },
  feedWrap: {
    display: 'flex',
    flexDirection: 'column-reverse',
  },
  input: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 8,
  },
  inputWrap: {
    width: '75%',
  },
});
