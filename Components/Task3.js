import { Alert, ScrollView, StyleSheet, Text, SafeAreaView, TouchableHighlight, TouchableNativeFeedback, Image, TouchableOpacity, TouchableWithoutFeedback, View, FlatList, Modal, Pressable, TextInput } from 'react-native'
import React, { useState } from 'react'
import styles from '../Styles/Task3Styles';


const Task3 = (props) => {

  const [modalVisible, setModalVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [checkdata, SetData] = useState([
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
  ]);

  const DeleteItem = (id) => {
    Alert.alert(
      'Are You Sure Want To Delete Image with ID : ' + id,
      'Choose Options',
      [
        { text: 'Cancel', onPress: () => { }, style: 'cancel' },
        {
          text: 'OK', onPress: () => {
            const filteredData = checkdata.filter(item => item.id !== id);
            SetData(filteredData);
          }
        },
      ])
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Text style={styles.text}>Data =  {props.data}</Text>

        <TouchableHighlight
          style={styles.button}
          onPress={() => Alert.alert("Touchable Highlight Pressed")}
        >
          <Text style={styles.buttontext}>For Rent House</Text>
        </TouchableHighlight>

        <TouchableNativeFeedback
          style={styles.button}
          onPress={() => Alert.alert("Touchable Native Feedback Pressed")}
        >
          <Text style={styles.buttontext}>For Rent Room</Text>
        </TouchableNativeFeedback>

        <TouchableOpacity
          style={styles.button}
          onPress={() => Alert.alert("Touchable Opacity Pressed")}
        >
          <Text style={styles.buttontext}>For Sale House</Text>
        </TouchableOpacity>

        <TouchableWithoutFeedback
          styles={styles.button}
          onPress={() => Alert.alert("Touchable Without Feedback Pressed")}
        >
          <Text style={styles.buttontext}>For Sale Plot</Text>
        </TouchableWithoutFeedback>
      </View>

      <View style={{ marginTop: 290 }}>
        <ScrollView>
          <FlatList
            horizontal
            data={checkdata}
            keyExtractor={checkdata.id}
            renderItem={({ item }) => (
              <View>
                <Text
                  style={styles.title}
                >{item.title}
                </Text>
                <TouchableOpacity
                  onPress={() => DeleteItem(item.id)}
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
      </View>

      <View style={styles.centeredView}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            setModalVisible(!modalVisible);
          }}
        >
          <View>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>This is Login Screen</Text>

              <View style={styles.inputView}>
                <TextInput
                  style={styles.TextInput}
                  placeholder="Email."
                  placeholderTextColor="#003f5c"
                  onChangeText={(email) => setEmail(email)}
                />
              </View>

              <View style={styles.inputView}>
                <TextInput
                  style={styles.TextInput}
                  placeholder="Password."
                  placeholderTextColor="#003f5c"
                  secureTextEntry={true}
                  onChangeText={(password) => setPassword(password)}
                />
              </View>

              <TouchableOpacity>
                <Text style={styles.forgot_button}>Forgot Password?</Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => Alert.alert("Login Button Pressed")}
              >
                <Text style={styles.buttontext}>Login</Text>
              </TouchableOpacity>

              <Pressable
                style={[styles.modalbutton, styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}
              >
                <Text style={styles.textStyle}>Back</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
        <Pressable
          style={[styles.modalbutton, styles.buttonOpen]}
          onPress={() => setModalVisible(true)}
        >
          <Text style={styles.textStyle}>Login Screen</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  )
}
export default Task3