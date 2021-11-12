import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import StyledText from '../UI/StyledText';
import Title from '../UI/Title';

export default function Home() {
  return (
    <SafeAreaView>
      <View style={styles.body}>
        <View style={styles.heading}>
          <Image
            source={require('../../assets/flatMatchLogo.png')}
            style={styles.logo}
          />
          <Title>flatMatch</Title>
        </View>
        <View style={styles.feed}>
          <TouchableOpacity>
            <View style={styles.panel}>
              <StyledText style={styles.panelTitle}>Match</StyledText>
              <StyledText>
                Find and match with people in your ideal location who are
                looking for a flat mate
              </StyledText>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.panel}>
              <StyledText style={styles.panelTitle}>Chats</StyledText>
              <StyledText>
                Connect to the people you are matched with
              </StyledText>
            </View>
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
  panel: {
    position: 'relative',
    borderStyle: 'solid',
    borderWidth: 5,
    borderColor: 'black',
  },
  panelTitle: {
    position: 'absolute',
    top: -20,
    left: 1,
    backgroundColor: 'white',
    padding: 5,
    fontSize: 20,
  },
  logo: {
    width: 50,
    height: 65,
  },
});
