import {
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import styles from '../Styles/HomeScreenStyles';
import {StackNavigator} from 'react-navigation';
import {useNavigation} from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View
        style={{
          flex: 0.14,
          //backgroundColor: 'blue',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text style={styles.title}>Welcome to the Movie Center</Text>
      </View>

      <View
        style={{flex: 0.15, alignItems: 'center', justifyContent: 'center'}}>
        <Text style={styles.title}>What Type Of Movie You Want To Watch?</Text>
      </View>

      <View
        style={{
          flex: 0.2,
          flexDirection: 'row',
          //backgroundColor: 'yellow',
          alignItems: 'center',
          alignContent: 'center',
          //paddingTop: 90,
        }}>
        <TouchableOpacity
          style={styles.button1}
          onPress={() => navigation.navigate('hollywood')}>
          <Text style={styles.buttontext}>Hollywood</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button1}
          onPress={() => navigation.navigate('bollywood')}>
          <Text style={styles.buttontext}>Bollywood</Text>
        </TouchableOpacity>
      </View>

      <View
        style={{
          flex: 0.2,
          flexDirection: 'row',
          //backgroundColor: 'pink',
          alignItems: 'center',
          alignContent: 'center',
        }}>
        <TouchableOpacity
          style={styles.button1}
          onPress={() => navigation.navigate('lollywood')}>
          <Text style={styles.buttontext}>Lollywood</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button1}>
          <Text style={styles.buttontext}> Comedy</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeScreen;
