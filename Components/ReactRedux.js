import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {
  increment_counter,
  decrement_counter,
  add_to_list,
} from '../Redux/Actions/Counter_Actions';
import styles from '../Styles/ReactReduxStyles';
import {TextInput} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import {ScrollView} from 'react-native-gesture-handler';

const ReactRedux = () => {
  const navigation = useNavigation();
  const counter = useSelector(state => state.counter);
  const list = useSelector(state => state.list);
  const dispatch = useDispatch();
  const [text, settext] = useState();
  //console.log('counter = ' + counter);
  //console.log('list = ' + list);

  return (
    <View style={styles.conatiner}>
      <View>
        <Text style={styles.text}>
          Maintain State of Counter and List Using React Redux
        </Text>
      </View>

      <View style={styles.flex_box}>
        <TouchableOpacity
          onPress={() => dispatch(increment_counter())}
          style={styles.button}>
          <Text style={styles.buttontext}>Increase</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.flex_box}>
        <Text style={styles.buttontext}>{counter}</Text>
      </View>

      <View style={styles.flex_box}>
        <TouchableOpacity
          onPress={() => dispatch(decrement_counter())}
          style={styles.button}>
          <Text style={styles.buttontext}>Decrease</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.flex_box}>
        <Text style={styles.buttontext}>{list + ' , '}</Text>
      </View>

      <View style={styles.flex_box}>
        <TextInput
          style={styles.textinput}
          onChangeText={text => settext(text)}
          autoCapitalize="none"
          secureTextEntry={false}
          placeholder="Enter Any Text"
          keyboardType="default"
          activeUnderlineColor="transparent"
        />
      </View>

      <View style={styles.flex_box}>
        <TouchableOpacity
          disabled={!text}
          onPress={() => dispatch(add_to_list(text))}
          style={styles.button}>
          <Text style={styles.buttontext}>Add Item to List</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.flex_box}>
        <TouchableOpacity
          onPress={() => navigation.navigate('check')}
          style={styles.button}>
          <Text style={styles.buttontext}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ReactRedux;
