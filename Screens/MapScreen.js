import React, {useState, useRef} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import MapView from 'react-native-maps';
import {PROVIDER_GOOGLE, Marker, Polyline} from 'react-native-maps';
import styles from '../Styles/MapScreenStyles';
import CustomMarker from '../Components/CustomMarker';
import {TouchableOpacity} from 'react-native-gesture-handler';

const MapScreen = () => {
  const [region, setRegion] = useState({
    latitude: 31.469785690307617,
    longitude: 74.27285766601562,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  });
  //console.log(region);
  const mapRef = useRef(null);

  const tokyoRegion = {
    latitude: 35.6762,
    longitude: 139.6503,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  };

  const chibaRegion = {
    latitude: 35.6074,
    longitude: 140.1065,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  };

  const goToTokyo = () => {
    mapRef.current.animateToRegion(tokyoRegion, 3000);
  };

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        ref={mapRef}
        initialRegion={tokyoRegion}
        onRegionChangeComplete={region => setRegion(region)}>
        <Marker
          pinColor="blue"
          coordinate={region}
          description={'This is Marker 1'}
        />
        <Marker
          coordinate={{
            latitude: 31.4697,
            longitude: 74.2728,
          }}
          description={'This is Marker 2'}>
          <Image
            source={require('../assets/Images/markerimage.png')}
            style={{height: 50, width: 50}}
          />
        </Marker>

        <Marker
          coordinate={{
            latitude: 31.48817,
            longitude: 74.27441,
          }}>
          <CustomMarker />
        </Marker>

        <Polyline
          coordinates={[tokyoRegion, chibaRegion]}
          strokeColor={'blue'}
          strokeWidth={1.5}
          lineDashPattern={[2]}
        />
      </MapView>
      <TouchableOpacity style={styles.button} onPress={() => goToTokyo()}>
        <Text style={styles.buttontext}>Go to Tokyo</Text>
      </TouchableOpacity>
      <Text style={styles.maptext}>Current Latitude : {region.latitude}</Text>
      <Text style={styles.maptext}>Current Longitude: {region.longitude}</Text>
    </View>
  );
};

export default MapScreen;
