import React, { useContext } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import Title from './Title';
import { useFonts } from 'expo-font';
import LottieView from 'lottie-react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { UserContext } from '../../UserContext';

export default function Modal({ showModal, getNew, navigation }) {
  let [fontLoaded] = useFonts({
    'Roboto Mono': require('../../assets/fonts/RobotoMono.ttf'),
  });
  const { user } = useContext(UserContext);

  if (!fontLoaded)
    return (
      <View style={styles.field}>
        <Text>It's a modal</Text>
      </View>
    );
  else {
    return (
      <View style={styles.field}>
        <LottieView
          style={styles.fireworks}
          source={require('../../assets/fireworks.json')}
          autoPlay
        />
        <Text style={styles.text}>flatMatched!</Text>
        <View style={styles.buttonsContainer}>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => {
              getNew({ UserId: user.id });
              showModal(false);
            }}
          >
            <Text style={styles.btnText}>Next</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => navigation.navigate('Chats')}
          >
            <Text style={styles.btnText}>Chat</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  field: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  text: {
    color: 'black',
    fontFamily: 'Roboto Mono',
    fontSize: 48,
  },
  fireworks: {
    width: '100%',
  },
  buttonsContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginTop: 20,
  },
  btn: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    width: 100,
    backgroundColor: 'black',
    padding: 5,
  },
  btnText: {
    fontFamily: 'Roboto Mono',
    color: 'white',
  },
});
