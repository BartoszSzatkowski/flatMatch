import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useQuery } from '@apollo/client';
import makeQuery from '../../services/generateQueries';
import Title from '../UI/Title';
import StyledText from '../UI/StyledText';
import { AntDesign } from '@expo/vector-icons';

export default function Match() {
  const { loading, error, data } = useQuery(makeQuery.getNextMatch(1));

  const genFactors = () => {
    const factors = JSON.parse(data.getNextMatch.desc.factors);
    return (
      <FlatList
        data={factors.map((factor) => {
          return { key: factor };
        })}
        renderItem={({ item }) => <StyledText>{' => ' + item.key}</StyledText>}
      />
    );
  };

  if (loading)
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  if (error)
    return (
      <SafeAreaView>
        <View>
          <Text>{JSON.stringify(error)}</Text>
        </View>
      </SafeAreaView>
    );
  return (
    <SafeAreaView>
      <View style={styles.body}>
        <Title>{data.getNextMatch.user.name}</Title>
        <View>{genFactors()}</View>
        <View style={styles.desc}>
          <StyledText>{data.getNextMatch.desc.text}</StyledText>
        </View>
        <View style={styles.buttons}>
          <TouchableOpacity>
            <AntDesign name='closesquareo' size={60} color='black' />
          </TouchableOpacity>
          <TouchableOpacity>
            <AntDesign name='checksquareo' size={60} color='black' />
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
    justifyContent: 'space-around',
    height: '100%',
    padding: 30,
  },
  desc: {
    padding: 20,
  },
  buttons: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
