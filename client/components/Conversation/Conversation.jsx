import React, { useContext, useState, useEffect } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { UserContext } from '../../UserContext';
import { SafeAreaView } from 'react-native-safe-area-context';
import Title from '../UI/Title';
import StyledText from '../UI/StyledText';
import InputBox from '../UI/InputBox';
import { FontAwesome } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import ChatBubble from '../UI/ChatBubble';
import { useQuery, useMutation } from '@apollo/client';
import makeQuery from '../../services/generateQueries';

export default function Conversation() {
  const { user, conversation } = useContext(UserContext);
  const [inputValue, setInputValues] = useState({ message: '' });
  const { loading, error, data, refetch } = useQuery(
    makeQuery.getConversation(user.id, conversation.id)
  );
  const [createMessage] = useMutation(makeQuery.createMessage());

  const handleFormChange = (text, name) => {
    setInputValues(() => ({
      [name]: text,
    }));
  };

  const handleSendMessage = async () => {
    console.log(user.id, conversation.id, inputValue.message);
    await createMessage({
      variables: {
        sender: user.id,
        recipient: conversation.id,
        content: inputValue.message,
      },
    });
    setInputValues({ message: '' });
    refetch();
  };

  const renderConversation = () => {
    if (error)
      return (
        <ChatBubble isThisSide={true}>
          Error loading conversation, try reloading...
        </ChatBubble>
      );
    if (loading) return <ChatBubble isThisSide={true}>Loading...</ChatBubble>;
    return data.getConversation.map((msg) => {
      return (
        <ChatBubble isThisSide={msg.sender === user.id ? true : false}>
          {msg.content}
        </ChatBubble>
      );
    });
  };

  return (
    <SafeAreaView>
      <View style={styles.body}>
        <View>
          <Title>{conversation.name}</Title>
          <StyledText>{conversation.email}</StyledText>
        </View>
        <ScrollView style={styles.feed}>
          <View style={styles.feedWrap}>{renderConversation()}</View>
        </ScrollView>
        <View style={styles.input}>
          <View style={styles.inputWrap}>
            <InputBox
              fields={['message']}
              isMulti={false}
              isNum={false}
              state={inputValue}
              handleChange={handleFormChange}
            />
          </View>
          <TouchableOpacity onPress={handleSendMessage}>
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
    display: 'flex',
    flexDirection: 'column-reverse',
    height: '80%',
    backgroundColor: 'black',
  },
  feedWrap: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'black',
    padding: 10,
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
