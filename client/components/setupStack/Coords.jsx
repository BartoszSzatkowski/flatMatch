import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import MapView, { Marker } from 'react-native-maps';
import Title from '../UI/Title';
import StyledText from '../UI/StyledText';
import InputBox from '../UI/InputBox';

export default function Coords({ navigation }) {
  const [marker, setMarker] = useState({});

  const putMarker = (coordinates) => {
    setMarker({
      latitude: coordinates.latitude,
      longitude: coordinates.longitude,
    });
  };
  return (
    <SafeAreaView>
      <View style={{ padding: 30 }}>
        <Title>@where?</Title>
        <StyledText>Max distance from ideal location</StyledText>
        <InputBox fields={['(km)']} isMulti={false} isNum={true} />
        <StyledText>Mark your ideal location:</StyledText>
        <View style={styles.cointainer}>
          <MapView
            initialRegion={{
              latitude: 45.78825,
              longitude: 15.4324,
              latitudeDelta: 50,
              longitudeDelta: 50,
            }}
            style={styles.map}
            onPress={(event) => putMarker(event.nativeEvent.coordinate)}
          >
            {Object.keys(marker).length !== 0 && <Marker coordinate={marker} />}
          </MapView>
        </View>
        <Button
          title='Finish >'
          color='black'
          onPress={() => navigation.navigate('HomeTabs')}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'black',
  },
  map: {
    width: 330,
    height: 430,
  },
});
