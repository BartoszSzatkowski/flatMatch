import React, { useState, useEffect, useContext } from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useLazyQuery, useMutation } from '@apollo/client';
import makeQuery from '../../services/generateQueries';
import Title from '../UI/Title';
import StyledText from '../UI/StyledText';
import { AntDesign } from '@expo/vector-icons';
import { UserContext } from '../../UserContext';
import Modal from '../UI/Modal';

export default function Match({ navigation }) {
  const { user } = useContext(UserContext);
  const [match, setMatch] = useState(null);
  const [isMatched, setIsMatched] = useState(false);
  const [getNextMatch, { loading, error, data, refetch }] = useLazyQuery(
    makeQuery.getNextMatch()
  );
  const [updateMatch, { loadingUpdate, errorUpdate, dataUpdate }] = useMutation(
    makeQuery.updateMatch()
  );

  useEffect(() => {
    getNextMatch({ variables: { UserId: user.id } });
    setMatch(data?.getNextMatch ? data.getNextMatch : null);
    return null;
  }, [data]);

  const genFactors = () => {
    if (!data?.getNextMatch) return null;
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

  const handleDecision = async (status) => {
    await updateMatch({
      variables: { thisId: user.id, otherId: match.user.id, status },
    });
    if (match.status === 1) {
      setIsMatched(true);
    } else {
      refetch({ UserId: user.id });
    }
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
      {match ? (
        <View style={styles.body}>
          {isMatched ? (
            <View style={styles.modal}>
              <Modal
                showModal={setIsMatched}
                getNew={refetch}
                navigation={navigation}
              />
            </View>
          ) : (
            <>
              <Title>{match.user.name}</Title>
              <View>{genFactors()}</View>
              <View style={styles.desc}>
                <StyledText>{match.desc.text}</StyledText>
              </View>
              <View style={styles.buttons}>
                <TouchableOpacity onPress={() => handleDecision(-1)}>
                  <AntDesign name='closesquareo' size={60} color='black' />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleDecision(1)}>
                  <AntDesign name='checksquareo' size={60} color='black' />
                </TouchableOpacity>
              </View>
            </>
          )}
        </View>
      ) : (
        <View style={styles.body}>
          <Title>No more people to match...</Title>
          <StyledText>Consider widening your range.</StyledText>
        </View>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  body: {
    position: 'relative',
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
  modal: {
    position: 'absolute',
    width: 350,
    height: 550,
    backgroundColor: 'white',
    borderWidth: 2,
    borderColor: 'black',
    top: 60,
    left: 20,
  },
});
