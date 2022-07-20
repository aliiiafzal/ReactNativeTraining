import React, { useState } from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, Image, TouchableOpacityBase, TouchableOpacity, Alert, ScrollView } from 'react-native';
import styles from '../Styles/Task2Styles'

const list = [
  {
    id: '1',
    title: 'First House',
    image: 'https://images.unsplash.com/photo-1625602812206-5ec545ca1231?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
  },
  {
    id: '2',
    title: 'Second House',
    image: 'https://images.unsplash.com/photo-1625602812206-5ec545ca1231?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
  },
  {
    id: '3',
    title: 'Third House',
    image: 'https://images.unsplash.com/photo-1625602812206-5ec545ca1231?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
  },
];

const Task2 = () => {

  const [count, setCount] = useState(0);

  return (
    <SafeAreaView style={styles.container}>

      <Text style={styles.text}>Images is Pressed {count} Times</Text>
      <ScrollView>
        <FlatList
          horizontal
          data={list}
          keyExtractor={list.id}
          renderItem={({ item }) => (
            <View>
              <Text
                style={styles.title}
              >{item.title}
              </Text>
              <TouchableOpacity
                onPress={() => setCount(count + 1)}
              >
                <Image
                  source={{ uri: item.image }}
                  style={styles.image}
                />
              </TouchableOpacity>
            </View>
          )}
        />
      </ScrollView>

      <ScrollView >
        <Text style={styles.detail}>These are the houses that are available for Rent : {'\n'}
          {'\u2B24'} Fully Furnished Rooms {'\n'}
          {'\u2B24'} Attach Washrooms {'\n'}
          {'\u2B24'} Large TV Launch {'\n'}
          {'\u2B24'} Wide Hall {'\n'}
          {'\u2B24'} Garden {'\n'}
        </Text>
      </ScrollView>

      <TouchableOpacity
        style={styles.button}
      >
        <Text style={styles.text}>Buy House</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
export default Task2;
