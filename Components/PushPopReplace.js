import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Modal,
  TextInput,
  Pressable,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import styles from '../Styles/PushPopReplaceStyles';
import {StackNavigator} from 'react-navigation';
import {
  useNavigation,
  NavigationContainer,
  StackActions,
} from '@react-navigation/native';

const PushPopReplace = ({route}) => {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  const name = route.params.name;

  return (
    <View style={styles.container}>
      <Text style={styles.text}>This Screen is Pushed by {name} Screen</Text>

      <TouchableOpacity
        onPress={() => navigation.dispatch(StackActions.pop(1))}
        style={styles.button}>
        <Text style={styles.buttontext}>Press This Button To POP</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.dispatch(StackActions.replace('gridscreen'))}
        style={styles.button}>
        <Text style={styles.buttontext}>
          Press This Button To Replace With Grid Screen
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.dispatch(StackActions.replace('gridscreen'))}
        style={styles.button}>
        <Text style={styles.buttontext}>Press This Button For POP To Top</Text>
      </TouchableOpacity>

      <View style={styles.centeredView}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
            setModalVisible(!modalVisible);
          }}>
          <View>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>This is Login Screen</Text>

              <View style={styles.inputView}>
                <TextInput
                  style={styles.TextInput}
                  placeholder="Email."
                  placeholderTextColor="#003f5c"
                />
              </View>

              <View style={styles.inputView}>
                <TextInput
                  style={styles.TextInput}
                  placeholder="Password."
                  placeholderTextColor="#003f5c"
                  secureTextEntry={true}
                />
              </View>

              <TouchableOpacity>
                <Text style={styles.forgot_button}>Forgot Password?</Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => Alert.alert('Login Button Pressed')}>
                <Text style={styles.buttontext}>Login</Text>
              </TouchableOpacity>

              <Pressable
                style={[styles.modalbutton, styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}>
                <Text style={styles.textStyle}>Back</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
        <Pressable
          style={[styles.modalbutton, styles.buttonOpen]}
          onPress={() => setModalVisible(true)}>
          <Text style={styles.textStyle}>Login Screen</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default PushPopReplace;
