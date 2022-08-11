import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import styles from '../Styles/ReactReduxStyles';

const check = () => {
  const counter = useSelector(state => state.counter);
  const number = useSelector(state => state.list);
  return (
    <View>
      <Text style={styles.text}>Counter is : {counter}</Text>
      <Text style={styles.text}>Text is : {number + ','}</Text>
    </View>
  );
};

export default check;
