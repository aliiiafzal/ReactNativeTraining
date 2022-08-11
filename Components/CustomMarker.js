import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import styles from '../Styles/CustomMarkerStyles';

const CustomMarker = () => {
  return (
    <View style={styles.marker}>
      <Text style={styles.text}>Johar Town</Text>
    </View>
  );
};

export default CustomMarker;
