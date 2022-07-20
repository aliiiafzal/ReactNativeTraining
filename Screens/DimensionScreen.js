import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  useWindowDimensions,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from '../Styles/DimenScreenStyles';
import {TextInput} from 'react-native-paper';
import {StackNavigator} from 'react-navigation';
import {useNavigation} from '@react-navigation/native';

const window = Dimensions.get('window');
const screen = Dimensions.get('screen');

const DimensionScreen = () => {
  const {height, width} = useWindowDimensions();
  const [dimension, setdimension] = useState({window, screen});
  const [data, setData] = useState([]);
  const navigation = useNavigation();
  console.log(dimension);

  useEffect(() => {
    const subscription = Dimensions.addEventListener(
      'change',
      ({window, screen}) => {
        setdimension({window, screen});
      },
    );
    getMovies();
  }, [dimension]);

  const getMovies = async () => {
    try {
      const response = await fetch('https://reactnative.dev/movies.json');
      const json = await response.json();
      setData(json.movies);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}>
      <ScrollView>
        <View style={styles.flex_box}>
          <Text style={styles.heading}>
            Check Dimension Using Dimensions Component :
          </Text>
        </View>

        <View style={styles.flex_box}>
          {Object.entries(dimension.screen).map(([key, value]) => (
            <Text style={styles.text}>
              Screen {key} is : {value}
            </Text>
          ))}
        </View>

        <View style={styles.flex_box}>
          <Text style={styles.heading}>
            Check Dimension Using useWindowDimensions Component :
          </Text>
        </View>

        <View style={styles.flex_box}>
          <Text style={styles.text}>Screen Height is : {window.height}</Text>
          <Text style={styles.text}>Screen Width is : {window.width}</Text>
        </View>

        <View style={styles.flex_box}>
          <Text style={styles.heading}>
            Check Platform Using Platform Component :
          </Text>
        </View>

        <View style={styles.flex_box}>
          <Text style={styles.text}>OS : {Platform.OS}</Text>
          <Text style={styles.text}>OS Version : {Platform.Version}</Text>
          <Text style={styles.text}>Is TV? : {Platform.isTV.toString()}</Text>
        </View>

        <View style={styles.flex_box}>
          <Text style={styles.heading}>Fetch Data From API :</Text>
        </View>

        <View style={styles.flex_box}>
          <FlatList
            data={data}
            keyExtractor={({id}, index) => id}
            renderItem={({item}) => (
              <Text style={styles.text}>
                {item.title}, {item.releaseYear}
              </Text>
            )}
          />
        </View>

        <View style={styles.flex_box}>
          <TouchableOpacity
            onPress={() => navigation.navigate('login')}
            style={styles.button}>
            <Text style={styles.text}>Next</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default DimensionScreen;
