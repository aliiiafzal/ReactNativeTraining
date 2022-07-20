import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  Alert,
} from 'react-native';
import React from 'react';
import styles from '../Styles/LoginSignupStyles';
import {TextInput} from 'react-native-paper';
import {StackNavigator} from 'react-navigation';
import {useNavigation} from '@react-navigation/native';

const Login = () => {
  const [email, setemail] = React.useState('');
  const [password, setpassword] = React.useState('');
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.flex_box1}>
        <Text style={styles.heading}>Login</Text>
        <Text style={styles.text}>
          Don't have an account?
          <TouchableOpacity onPress={() => navigation.navigate('signup')}>
            <Text style={styles.text1}> Sign up</Text>
          </TouchableOpacity>
        </Text>
      </View>

      <View style={styles.flex_box2}>
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
            onChangeText={text => setemail(text)}
            value={email}
            placeholder="Username or Email"
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
            onChangeText={text => setpassword(text)}
            value={password}
            placeholder="Password"
            keyboardType="default"
            activeUnderlineColor="transparent"
          />
        </View>
      </View>

      <View style={{flex: 0.15, justifyContent: 'center'}}>
        <TouchableOpacity
          onPress={() => Alert.alert('Login Button Pressed')}
          style={styles.button}>
          <Text style={styles.buttontext}>LOGIN</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;
