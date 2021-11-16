import React, { useState, useContext } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import MapView, { Marker } from 'react-native-maps';
import Title from '../UI/Title';
import StyledText from '../UI/StyledText';
import InputBox from '../UI/InputBox';
import { useMutation } from '@apollo/client';
import makeQuery from '../../services/generateQueries';
import { UserContext } from '../../UserContext';

export default function Coords({ navigation }) {
  const [marker, setMarker] = useState({});
  const { user } = useContext(UserContext);
  const [formState, setFormState] = useState({ '(km)': null });
  const [addLocation, { loading, error, data }] = useMutation(
    makeQuery.addLocation()
  );

  const handleFormChange = (text, name) => {
    setFormState((prevState) => ({
      ...prevState,
      [name]: text,
    }));
  };

  const putMarker = (coordinates) => {
    setMarker({
      latitude: coordinates.latitude,
      longitude: coordinates.longitude,
    });
  };

  const handleLocation = async () => {
    if (formState['(km)'] && Object.keys(marker).length) {
      await addLocation({
        variables: {
          location: {
            UserId: user.id,
            radius: parseInt(formState['(km)']),
            coords: `{"lat":${marker.latitude}, "lng":${marker.longitude}}`,
          },
        },
      });
      navigation.navigate('HomeTabs');
    }
  };

  return (
    <SafeAreaView>
      <View style={{ padding: 30 }}>
        <Title>@where?</Title>
        <StyledText>Max distance from ideal location</StyledText>
        <InputBox
          fields={['(km)']}
          isMulti={false}
          isNum={true}
          state={formState}
          handleChange={handleFormChange}
        />
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
        <Button title='Finish >' color='black' onPress={handleLocation} />
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
