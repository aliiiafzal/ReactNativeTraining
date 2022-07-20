import {
  View,
  Image,
  Text,
  ScrollView,
  TouchableOpacity,
  Alert,
  FlatList,
} from 'react-native';
import React from 'react';
import styles from '../Styles/Task4Styles';

const Task4 = () => {
  const list = [
    {
      id: '1',
      title: 'First House',
      image:
        'https://images.unsplash.com/photo-1625602812206-5ec545ca1231?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
    },
    {
      id: '2',
      title: 'Second House',
      image:
        'https://images.unsplash.com/photo-1625602812206-5ec545ca1231?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
    },
    {
      id: '3',
      title: 'Third House',
      image:
        'https://images.unsplash.com/photo-1625602812206-5ec545ca1231?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
    },
  ];

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.input_flex}>
          <Text style={styles.input}>This is Local Image</Text>
        </View>

        <View style={styles.image_flex}>
          <Image
            source={require('../assets/Images/image1.jpeg')}
            style={styles.image}
          />
        </View>

        <View style={styles.input_flex}>
          <Text style={styles.input}>This is Network Image</Text>
        </View>

        <View style={styles.image_flex}>
          <Image
            source={{
              uri: 'data:image/jpeg;base64,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',
            }}
            style={styles.image}
          />
        </View>

        <View style={styles.image_flex}>
          <FlatList
            horizontal
            data={list}
            keyExtractor={list.id}
            renderItem={({item}) => (
              <View>
                <TouchableOpacity>
                  <Image source={{uri: item.image}} style={styles.image} />
                </TouchableOpacity>
              </View>
            )}
          />
        </View>

        <View style={styles.input_flex}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => Alert.alert('Submit Button Pressed')}>
            <Image
              source={{
                uri: 'https://raw.githubusercontent.com/AboutReact/sampleresource/master/facebook.png',
              }}
              style={styles.buttonImageIconStyle}
            />
            <Text style={styles.buttontext}>Submit</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default Task4;
