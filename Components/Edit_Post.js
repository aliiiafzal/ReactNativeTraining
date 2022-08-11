import {StyleSheet, Text, View, TouchableOpacity, FlatList} from 'react-native';
import React, {useState} from 'react';
import styles from '../Styles/Add_Post_Styles';
import {TextInput} from 'react-native-paper';
import {useDispatch} from 'react-redux';
import {useSelector} from 'react-redux';
import {update_post} from '../Redux/Actions/Post_Actions';
import Post_List from './Post_List';
import {postUpdated} from '../Redux/Reducers/Post_Reducers';

const Edit_Post = () => {
  const dispatch = useDispatch();
  const [title, settitle] = useState();
  const [content, setcontent] = useState();

  const post = useSelector(state =>
    state.posts.find(posts => posts.title === title),
  );
  console.log(post);

  const onSavePostClicked = () => {
    if (title && content) {
      dispatch(postUpdated({id: post.id, title, content}));
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.flex_box1}>
        <Text style={styles.heading}>Update Your Post</Text>
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
          <Text style={styles.buttontext}>Update Post</Text>
        </TouchableOpacity>
      </View>
      <Post_List />
    </View>
  );
};

export default Edit_Post;
