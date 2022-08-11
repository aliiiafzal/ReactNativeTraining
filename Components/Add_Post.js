import {Text, View, TouchableOpacity, FlatList} from 'react-native';
import React, {useState} from 'react';
import styles from '../Styles/Add_Post_Styles';
import {TextInput} from 'react-native-paper';
import Post_List from './Post_List';
import {useDispatch} from 'react-redux';
import {nanoid} from '@reduxjs/toolkit';
import {postAdded} from '../Redux/Reducers/Post_Reducers';
import {useNavigation} from '@react-navigation/native';

const Add_Post = () => {
  const dispatch = useDispatch();
  const [title, settitle] = useState();
  const [content, setcontent] = useState();
  const navigation = useNavigation();

  const onSavePostClicked = () => {
    if (title && content) {
      dispatch(
        postAdded({
          id: nanoid(),
          title,
          content,
        }),
      );
      settitle('');
      setcontent('');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.flex_box1}>
        <Text style={styles.heading}>Add a New Post</Text>
      </View>

      <View style={styles.flex_box1}>
        <Text style={styles.text}>Post Title:</Text>
      </View>

      <View style={styles.flex_box1}>
        <TextInput
          style={styles.textinput}
          onChangeText={text => settitle(text)}
          autoCapitalize="none"
          placeholder="title"
          keyboardType="default"
          activeUnderlineColor="transparent"
        />
      </View>

      <View style={styles.flex_box1}>
        <Text style={styles.text}>Content:</Text>
      </View>

      <View style={styles.flex_box1}>
        <TextInput
          style={styles.textinput}
          onChangeText={text => setcontent(text)}
          autoCapitalize="none"
          placeholder="content"
          keyboardType="default"
          activeUnderlineColor="transparent"
        />
      </View>

      <View style={styles.flex_box1}>
        <TouchableOpacity style={styles.button} onPress={onSavePostClicked}>
          <Text style={styles.buttontext}>Save Post</Text>
        </TouchableOpacity>
      </View>

      <Post_List />

      <View style={styles.flex_box1}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('editpost')}>
          <Text style={styles.buttontext}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Add_Post;
