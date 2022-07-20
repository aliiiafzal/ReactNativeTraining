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

const Signup = () => {
  const [username, setusername] = useState('');
  const [email, setemail] = React.useState('');
  const [password, setpassword] = React.useState('');
  const [confpassword, setconfpassword] = useState('');
  const navigation = useNavigation();

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
            onChangeText={text => setusername(text)}
            value={username}
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
            onChangeText={text => setemail(text)}
            value={email}
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
            onChangeText={text => setpassword(text)}
            value={password}
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
            onChangeText={text => setconfpassword(text)}
            value={confpassword}
            placeholder="Confirm Password"
            keyboardType="default"
            activeUnderlineColor="transparent"
          />
        </View>
      </View>

      <View style={{flex: 0.15, justifyContent: 'center'}}>
        <TouchableOpacity
          onPress={() => Alert.alert('Register Button Pressed')}
          style={styles.button}>
          <Text style={styles.buttontext}>REGISTER NOW</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Signup;
