import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useQuery } from '@apollo/client';
import makeQuery from '../../services/generateQueries';

export default function Match() {
  const { loading, error, data } = useQuery(makeQuery.getNextMatch(1));

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
      <View>
        <Text>{JSON.stringify(data)}</Text>
        <Text>{data.getNextMatch.user.name}</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
