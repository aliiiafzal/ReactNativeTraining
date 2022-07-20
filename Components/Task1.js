import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
  TextInput,
  Button,
  Alert,
} from 'react-native';
import styles from '../Styles/Task1Styles'



const Task1 = () => {


  return (
    <ScrollView>
      <View
        style={styles.container}
      >
        <Text
          style={styles.text}
        >Hello I am Ali Afzal</Text>
        <Image
          source={{
            uri: "https://images.unsplash.com/photo-1610878180933-123728745d22?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
          }}
          style={styles.image}
        />

        <Text
          style={styles.text}
        >What is your Age?</Text>
        <TextInput
          style={[styles.PlaceHolder, { flex: 1, backgroundColor: 'gray' }]}
          placeholder='enter your age'
        ></TextInput>
        <Text style={styles.text}>This is the Pictures of my House</Text>
        <Image
          source={{
            uri: "https://images.unsplash.com/photo-1610878180933-123728745d22?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
          }}
          style={styles.image}
        />
        <Image
          source={{
            uri: "https://images.unsplash.com/photo-1610878180933-123728745d22?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
          }}
          style={{ height: 300, width: 300, borderRadius: 10, margin: 20, alignSelf: "center", }}
        />

        <Button
          title="Save"
          onPress={() => Alert.alert("Save Button Pressed")}
        />

      </View>
    </ScrollView>

  );
};

export default Task1;



