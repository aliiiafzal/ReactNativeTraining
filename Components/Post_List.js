import {StyleSheet, Text, View, FlatList} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import styles from '../Styles/Post_List_Styles';

const Post_List = () => {
  const posts = useSelector(state => state.posts);
  console.log(posts);
  return (
    <View style={styles.flex_box2}>
      <Text style={styles.title}>Posts:</Text>
      <FlatList
        data={posts}
        keyExtractor={({id}, index) => id}
        renderItem={({item}) => (
          <View style={styles.flex_box3}>
            <View style={styles.flex_box4}>
              <Text style={styles.title}>{item.title}</Text>
            </View>

            <View style={styles.flex_box4}>
              <Text style={styles.content}>{item.content}</Text>
            </View>
          </View>
        )}
      />
    </View>
  );
};

export default Post_List;
