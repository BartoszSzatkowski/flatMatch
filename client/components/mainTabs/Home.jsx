import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import StyledText from '../UI/StyledText';
import Title from '../UI/Title';
import PanelTitle from '../UI/PanelTitle';
import Panel from '../UI/Panel';

export default function Home({ navigation }) {
  return (
    <SafeAreaView>
      <View style={styles.body}>
        <View style={styles.heading}>
          <Image
            source={require('../../assets/flatMatchStamp.png')}
            style={styles.logo}
          />
          <Title>flatMatch</Title>
        </View>
        <View style={styles.feed}>
          <TouchableOpacity onPress={() => navigation.navigate('Match')}>
            <Panel>
              <PanelTitle>Match</PanelTitle>
              <StyledText>
                Match with people who are looking for a flat mate
              </StyledText>
            </Panel>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Chats')}>
            <Panel>
              <PanelTitle>Chats</PanelTitle>
              <StyledText>
                Connect to the people you are matched with
              </StyledText>
            </Panel>
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
  feed: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    height: '90%',
    fontFamily: 'Roboto Mono',
  },
  heading: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'flex-end',
  },
  logo: {
    width: 55,
    height: 65,
  },
});
