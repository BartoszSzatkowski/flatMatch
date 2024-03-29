import React, { useEffect, useState, useContext } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet, Text, View } from 'react-native';
import { useQuery } from '@apollo/client';
import makeQuery from '../../services/generateQueries';
import { UserContext } from '../../UserContext';
import Contact from '../UI/Contact';
import Title from '../UI/Title';

export default function Chats({ navigation }) {
  const { user } = useContext(UserContext);
  const { loading, error, data, refetch } = useQuery(
    makeQuery.getChats(user.id),
    { pollInterval: 1000 }
  );
  const [chats, setChats] = useState([]);

  useEffect(() => {
    refetch();
    if (data) {
      setChats(data.getMatched);
    }
    return null;
  }, [data]);

  const genContacts = () => {
    return chats.map((contact) => {
      return (
        <Contact key={contact.id} user={contact} navigation={navigation} />
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
    <SafeAreaView style={{ padding: 30 }}>
      <Title>Chats</Title>
      <View style={styles.container}>{genContacts()}</View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    borderTopWidth: 1,
    borderLeftWidth: 10,
    borderRightWidth: 1,
    borderColor: 'black',
  },
});
