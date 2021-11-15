import React, { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet, Text, View } from 'react-native';
import { useQuery } from '@apollo/client';
import makeQuery from '../../services/generateQueries';

export default function Chats() {
  const { loading, error, data } = useQuery(makeQuery.getConversation(1, 4));
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    (async () => {
      console.log('Hol up', data.getConversation);
      if (data.getConversation) {
        setMessages(data.getConversation);
      }
    })();
  }, [data]);

  genMessages = () => {
    return messages.map((msg) => {
      return (
        <View>
          <Text>{msg.content}</Text>
        </View>
      );
    });
  };

  if (loading)
    return (
      <SafeAreaView>
        <Text>Loading...</Text>
      </SafeAreaView>
    );
  if (error)
    return (
      <SafeAreaView>
        <Text>Something went wrong.</Text>
      </SafeAreaView>
    );

  return (
    <SafeAreaView>
      <View>{genMessages()}</View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
