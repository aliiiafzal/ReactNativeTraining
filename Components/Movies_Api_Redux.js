import React, {useEffect, useState} from 'react';
import {ActivityIndicator, FlatList, Text, View} from 'react-native';
import styles from '../Styles/Movies_Api_Redux_styles';
import {useSelector, useDispatch} from 'react-redux';
import {getMovies} from '../Redux/Actions/Counter_Actions';
import {TouchableOpacity} from 'react-native-gesture-handler';

const Movies_Api_Redux = () => {
  const [isLoading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const movie = useSelector(state => state.Movies);
  console.log(movie);

  return (
    <View style={styles.container}>
      <View style={styles.flex_box1}>
        {isLoading ? (
          <ActivityIndicator />
        ) : (
          <FlatList
            data={movie}
            keyExtractor={({id}, index) => id}
            renderItem={({item}) => (
              <Text style={styles.text}>
                {item.id} : {item.title} , {item.releaseYear}
              </Text>
            )}
          />
        )}
      </View>
      <View style={styles.flex_box2}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => getMovies(dispatch, setLoading)}>
          <Text style={styles.buttontext}>Fetch Movies</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Movies_Api_Redux;
