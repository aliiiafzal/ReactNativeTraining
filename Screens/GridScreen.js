import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import styles from '../Styles/GridScreenStyles';
import {StackNavigator} from 'react-navigation';
import {
  useNavigation,
  NavigationContainer,
  StackActions,
} from '@react-navigation/native';

const GridScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.text}>Grid Screen Using Flexbox</Text>
      </View>

      <View style={styles.grid_row}>
        <View style={[styles.grid_box1, styles.grid_box4]}>
          <Text style={styles.grid_box_text}>START</Text>
        </View>
      </View>

      <View style={styles.grid_row}>
        <View style={[styles.grid_box1, styles.grid_box2]}>
          <Text style={styles.grid_box_text}>1</Text>
        </View>
        <View style={[styles.grid_box1, styles.grid_box3]}>
          <Text style={styles.grid_box_text}>2</Text>
        </View>
        <View style={[styles.grid_box1, styles.grid_box4]}>
          <Text style={styles.grid_box_text}>3</Text>
        </View>
      </View>

      <View style={styles.grid_row}>
        <View style={[styles.grid_box1, styles.grid_box3]}>
          <Text style={styles.grid_box_text}>4</Text>
        </View>
        <View style={[styles.grid_box1, styles.grid_box4]}>
          <Text style={styles.grid_box_text}>5</Text>
        </View>
        <View style={[styles.grid_box1, styles.grid_box2]}>
          <Text style={styles.grid_box_text}>6</Text>
        </View>
      </View>

      <View style={styles.grid_row}>
        <View style={[styles.grid_box1, styles.grid_box4]}>
          <Text style={styles.grid_box_text}>7</Text>
        </View>
        <View style={[styles.grid_box1, styles.grid_box2]}>
          <Text style={styles.grid_box_text}>8</Text>
        </View>
        <View style={[styles.grid_box1, styles.grid_box3]}>
          <Text style={styles.grid_box_text}>9</Text>
        </View>
      </View>

      <View style={styles.grid_row}>
        <View style={[styles.grid_box1, styles.grid_box3]}>
          <Text style={styles.grid_box_text}>10</Text>
        </View>
        <View style={[styles.grid_box1, styles.grid_box2]}>
          <Text style={styles.grid_box_text}>11</Text>
        </View>
        <View style={[styles.grid_box1, styles.grid_box4]}>
          <Text style={styles.grid_box_text}>12</Text>
        </View>
      </View>

      <View style={styles.grid_row}>
        <View style={[styles.grid_box1, styles.grid_box4]}>
          <Text style={styles.grid_box_text}>END</Text>
        </View>
      </View>

      <View style={styles.flex_box}>
        <TouchableOpacity
          onPress={() =>
            navigation.dispatch(
              StackActions.push('pushpopreplace', {name: 'Grîd'}),
            )
          }
          style={styles.button}>
          <Text style={styles.buttontext}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default GridScreen;
