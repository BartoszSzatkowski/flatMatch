import React, { useEffect, useState, useContext } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet, Text, View } from 'react-native';
import { useQuery } from '@apollo/client';
import makeQuery from '../../services/generateQueries';
import { UserContext } from '../../UserContext';
import Contact from '../UI/Contact';

export default function Chats() {
  const { user } = useContext(UserContext);
  const { loading, error, data } = useQuery(makeQuery.getChats(user.id));
  const [chats, setChats] = useState([]);

  useEffect(() => {
    if (data) {
      setChats(data.getMatched);
    }
  }, [data]);

  const genContacts = () => {
    return chats.map((contact) => {
      return <Contact key={contact.id} />;
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
      <View>{genContacts()}</View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
