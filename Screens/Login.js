// import {
//   StyleSheet,
//   Text,
//   TouchableOpacity,
//   View,
//   Image,
//   Alert,
// } from 'react-native';
// import React from 'react';
// import styles from '../Styles/LoginSignupStyles';
// import {TextInput} from 'react-native-paper';
// import {StackNavigator} from 'react-navigation';
// import {useNavigation} from '@react-navigation/native';
// import {initializeApp} from 'firebase/app';
// import {firebaseConfig} from '../FirebaseConfig';
// import {signInWithEmailAndPassword, getAuth} from '@firebase/auth';
// import {useSelector, useDispatch} from 'react-redux';
// import {login} from '../Redux/Actions/Counter_Actions';

// const Login = ({route}) => {
//   const dispatch = useDispatch();
//   const email = useSelector(state => state.email);
//   const password = useSelector(state => state.password);
//   //console.log(email);
//   //console.log(password);

//   const navigation = useNavigation();
//   const app = initializeApp(firebaseConfig);
//   const auth = getAuth(app);
//   //const username = route.params.username;

//   const [data, setData] = React.useState({
//     email: '',
//     password: '',
//     isValidEmail: false,
//     isValidPassword: false,
//   });

//   const handleemail = val => {
//     if (val.length !== 0) {
//       const check =
//         /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//       if (check.test(String(val).toLowerCase())) {
//         setData({
//           ...data,
//           email: val,
//           isValidEmail: true,
//         });
//       } else {
//         setData({
//           ...data,
//           email: val,
//           isValidEmail: false,
//         });
//       }
//     } else {
//       setData({
//         ...data,
//         email: val,
//         isValidEmail: false,
//       });
//     }
//   };

//   const handlepassword = val => {
//     if (val.length != 0) {
//       setData({
//         ...data,
//         password: val,
//         isValidPassword: true,
//       });
//     } else {
//       setData({
//         ...data,
//         password: val,
//         isValidPassword: false,
//       });
//     }
//   };

//   const Login = () => {
//     signInWithEmailAndPassword(auth, data.email, data.password)
//       .then(userCredential => {
//         console.log('Account Login');
//         const user = userCredential.user;
//         //console.log(user);
//         // Alert.alert(username + ' Login Successfully');
//         Alert.alert(' Login Successfully');
//       }, null)
//       .catch(error => {
//         console.log(error);
//         Alert.alert('Error', error.message, [{text: 'Okay'}]);
//       });
//   };

//   const validateform = () => {
//     if (
//       data.email.length == 0 ||
//       data.password.length == 0 ||
//       !data.isValidEmail ||
//       !data.isValidPassword
//     ) {
//       Alert.alert('ERROR!', 'Empty Field or Wrong Input.', [{text: 'Okay'}]);
//       return;
//     } else {
//       Login();
//       dispatch(login(data.email, data.password));
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <View style={styles.flex_box1}>
//         <Text style={styles.heading}>Login</Text>
//         <Text style={styles.text}>
//           Don't have an account?
//           <TouchableOpacity onPress={() => navigation.navigate('signup')}>
//             <Text style={styles.text1}> Sign up</Text>
//           </TouchableOpacity>
//         </Text>
//       </View>

//       <View style={styles.flex_box2}>
//         <View style={styles.flex_box3}>
//           <Image
//             style={styles.buttonImageIconStyle}
//             source={{
//               uri: 'https://cdn-icons-png.flaticon.com/128/1077/1077114.png',
//             }}
//           />
//         </View>

//         <View style={styles.flex_box4}>
//           <TextInput
//             style={styles.textinput}
//             onChangeText={text => handleemail(text)}
//             autoCapitalize="none"
//             placeholder="Email"
//             keyboardType="email-address"
//             activeUnderlineColor="transparent"
//           />
//         </View>
//       </View>

//       <View style={styles.flex_box5}>
//         <View style={styles.flex_box3}>
//           <Image
//             style={styles.buttonImageIconStyle}
//             source={{
//               uri: 'https://cdn-icons-png.flaticon.com/512/807/807292.png',
//             }}
//           />
//         </View>

//         <View style={styles.flex_box4}>
//           <TextInput
//             style={styles.textinput}
//             onChangeText={text => handlepassword(text)}
//             autoCapitalize="none"
//             secureTextEntry={true}
//             placeholder="Password"
//             keyboardType="default"
//             activeUnderlineColor="transparent"
//           />
//         </View>
//       </View>

//       <View style={{flex: 0.15, justifyContent: 'center'}}>
//         <TouchableOpacity onPress={validateform} style={styles.button}>
//           <Text style={styles.buttontext}>LOGIN</Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// };

// export default Login;

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
import {initializeApp} from 'firebase/app';
import {firebaseConfig} from '../FirebaseConfig';
import {signInWithEmailAndPassword, getAuth} from '@firebase/auth';
import {useSelector, useDispatch} from 'react-redux';
import {login} from '../Redux/Actions/Counter_Actions';

const Login = ({route}) => {
  const dispatch = useDispatch();
  //const email = useSelector(state => state.email);
  //const password = useSelector(state => state.password);
  //console.log(email);
  //console.log(password);
  const status = useSelector(state => state.status);
  console.log('status in Login ' + status);

  const navigation = useNavigation();
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  //const username = route.params.username;

  const [data, setData] = React.useState({
    email: '',
    password: '',
    isValidEmail: false,
    isValidPassword: false,
  });

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

  // const Login = () => {
  //   signInWithEmailAndPassword(auth, data.email, data.password)
  //     .then(userCredential => {
  //       console.log('Account Login');
  //       const user = userCredential.user;
  //       //console.log(user);
  //       // Alert.alert(username + ' Login Successfully');
  //       Alert.alert(' Login Successfully');
  //     }, null)
  //     .catch(error => {
  //       console.log(error);
  //       Alert.alert('Error', error.message, [{text: 'Okay'}]);
  //     });
  // };

  const validateform = () => {
    if (
      data.email.length == 0 ||
      data.password.length == 0 ||
      !data.isValidEmail ||
      !data.isValidPassword
    ) {
      Alert.alert('ERROR!', 'Empty Field or Wrong Input.', [{text: 'Okay'}]);
      return;
    } else {
      //Login();
      dispatch(login(data.email, data.password));
    }
  };

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
            autoCapitalize="none"
            secureTextEntry={true}
            placeholder="Password"
            keyboardType="default"
            activeUnderlineColor="transparent"
          />
        </View>
      </View>

      <View style={{flex: 0.15, justifyContent: 'center'}}>
        <TouchableOpacity onPress={validateform} style={styles.button}>
          <Text style={styles.buttontext}>LOGIN</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;
