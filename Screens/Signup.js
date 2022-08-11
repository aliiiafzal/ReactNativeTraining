import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import styles from '../Styles/LoginSignupStyles';
import {TextInput} from 'react-native-paper';
import {StackNavigator} from 'react-navigation';
import {useNavigation} from '@react-navigation/native';

import {initializeApp} from 'firebase/app';
import {firebaseConfig} from '../FirebaseConfig';
import {getDatabase, ref, set} from 'firebase/database';

import {
  createUserWithEmailAndPassword,
  getAuth,
  sendEmailVerification,
} from '@firebase/auth';

const Signup = () => {
  const navigation = useNavigation();
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const dbref = getDatabase(app);

  const [data, setData] = React.useState({
    username: '',
    email: '',
    password: '',
    confirm_password: '',
    isValidUserName: false,
    isValidEmail: false,
    isValidPassword: false,
    isValidConfirmPassword: false,
  });

  const senddata = () => {
    const username = data.username;
    const email = data.email;
    const password = data.password;
    set(ref(dbref, 'UserRecord/' + username), {
      username,
      email,
      password,
    });
  };

  const Register = () => {
    createUserWithEmailAndPassword(auth, data.email, data.password)
      .then(userCredential => {
        console.log('Account created');
        Alert.alert('Sign Up Successfully', null, [{text: 'Okay'}]);
        senddata();
        navigation.navigate('login', {username: data.username});
        sendEmailVerification(auth.currentUser, auth.applyActionCode).then(
          () => {},
        );
      }, null)
      .catch(error => {
        console.log(error);
        Alert.alert('Error', error.message, [{text: 'Okay'}]);
      });
  };

  const handleusername = val => {
    if (val.length != 0) {
      setData({
        ...data,
        username: val,
        isValidUserName: true,
      });
    } else {
      setData({
        ...data,
        username: val,
        isValidUserName: false,
      });
    }
  };

  const handleemail = val => {
    if (val.length !== 0) {
      const check =
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (check.test(String(val).toLowerCase())) {
        setData({
          ...data,
          email: val,
          isValidEmail: true,
        });
      } else {
        setData({
          ...data,
          email: val,
          isValidEmail: false,
        });
      }
    } else {
      setData({
        ...data,
        email: val,
        isValidEmail: false,
      });
    }
  };

  const handlepassword = val => {
    if (val.length != 0) {
      setData({
        ...data,
        password: val,
        isValidPassword: true,
      });
    } else {
      setData({
        ...data,
        password: val,
        isValidPassword: false,
      });
    }
  };

  const handleconfirmpassword = val => {
    if (val.length != 0) {
      setData({
        ...data,
        confirm_password: val,
        isValidConfirmPassword: true,
      });
    } else {
      setData({
        ...data,
        confirm_password: val,
        isValidConfirmPassword: false,
      });
    }
  };

  const validateform = () => {
    if (
      data.username.length == 0 ||
      data.email.length == 0 ||
      data.password.length == 0 ||
      data.confirm_password.length == 0 ||
      !data.isValidUserName ||
      !data.isValidEmail ||
      !data.isValidPassword ||
      !data.isValidConfirmPassword
    ) {
      Alert.alert('ERROR!', 'Empty Field or Wrong Input.', [{text: 'Okay'}]);
      return;
    } else {
      Register();
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.flex_box1}>
        <Text style={styles.heading}>Signup</Text>
        <Text style={styles.text}>
          Already have an account?
          <TouchableOpacity onPress={() => navigation.navigate('login')}>
            <Text style={styles.text1}> Login</Text>
          </TouchableOpacity>
        </Text>
      </View>

      <View style={styles.flex_box5}>
        <View style={styles.flex_box3}>
          <Image
            style={styles.buttonImageIconStyle}
            source={{
              uri: 'https://cdn-icons-png.flaticon.com/128/1077/1077114.png',
            }}
          />
        </View>

        <View style={styles.flex_box4}>
          <TextInput
            style={styles.textinput}
            onChangeText={text => handleusername(text)}
            autoCapitalize="none"
            placeholder="Username"
            keyboardType="default"
            activeUnderlineColor="transparent"
          />
        </View>
      </View>

      <View style={styles.flex_box5}>
        <View style={styles.flex_box3}>
          <Image
            style={styles.buttonImageIconStyle}
            source={{
              uri: 'https://cdn-icons.flaticon.com/png/512/2099/premium/2099199.png?token=exp=1658320796~hmac=0fc45f7ae47f5dbf356d2da49b65e2a5',
            }}
          />
        </View>

        <View style={styles.flex_box4}>
          <TextInput
            style={styles.textinput}
            onChangeText={text => handleemail(text)}
            autoCapitalize="none"
            placeholder="Email"
            keyboardType="email-address"
            activeUnderlineColor="transparent"
          />
        </View>
      </View>

      <View style={styles.flex_box5}>
        <View style={styles.flex_box3}>
          <Image
            style={styles.buttonImageIconStyle}
            source={{
              uri: 'https://cdn-icons-png.flaticon.com/512/807/807292.png',
            }}
          />
        </View>

        <View style={styles.flex_box4}>
          <TextInput
            style={styles.textinput}
            onChangeText={text => handlepassword(text)}
            secureTextEntry={true}
            selectTextOnFocus={true}
            autoCapitalize="none"
            placeholder="Password"
            keyboardType="default"
            activeUnderlineColor="transparent"
          />
        </View>
      </View>

      <View style={styles.flex_box5}>
        <View style={styles.flex_box3}>
          <Image
            style={styles.buttonImageIconStyle}
            source={{
              uri: 'https://cdn-icons-png.flaticon.com/512/807/807292.png',
            }}
          />
        </View>

        <View style={styles.flex_box4}>
          <TextInput
            style={styles.textinput}
            onChangeText={text => handleconfirmpassword(text)}
            secureTextEntry={true}
            autoCapitalize="none"
            placeholder="Confirm Password"
            keyboardType="default"
            activeUnderlineColor="transparent"
          />
        </View>
      </View>

      <View style={{flex: 0.15, justifyContent: 'center'}}>
        <TouchableOpacity onPress={validateform} style={styles.button}>
          <Text style={styles.buttontext}>REGISTER NOW</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Signup;
