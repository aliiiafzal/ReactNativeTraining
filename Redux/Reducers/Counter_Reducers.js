import {initializeApp} from 'firebase/app';
import {signInWithEmailAndPassword, getAuth} from '@firebase/auth';
import {firebaseConfig} from '../../FirebaseConfig';
import {Alert} from 'react-native';
import {login} from '../Actions/Counter_Actions';
import {Text} from 'react-native';
import React from 'react';

const initialState = {
  counter: 0,
  list: [],
  email: null,
  password: null,
  status: null,
  Movies: [],
};

const Counter_Reducers = (state = initialState, action) => {
  switch (action.type) {
    case 'increment': {
      return {...state, counter: state.counter + 1};
      break;
    }
    case 'decrement': {
      return {...state, counter: state.counter - 1};
      break;
    }
    case 'addtolist': {
      return {...state, list: state.list.concat(action.payload)};
      //return {...state, list: [...state.list, action.payload]};
      break;
    }
    case 'login': {
      return {
        ...state,
        email: action.payload.useremail,
        password: action.payload.userpassword,
        status: Store_Login_Data(
          action.payload.useremail,
          action.payload.userpassword,
        ),
      };
      break;
    }
    case 'fetchmovies': {
      return {
        ...state,
        Movies: state.Movies.concat(action.payload),
      };
    }
    default: {
      return state;
    }
  }
};

const Store_Login_Data = (email, password) => {
  let active = false;
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  signInWithEmailAndPassword(auth, email, password)
    .then(userCredential => {
      console.log('Account Login');
      const user = userCredential.user;
      Alert.alert(email + ' Login Successfully');
      return true;
    }, null)
    .catch(error => {
      console.log(error);
      Alert.alert('Error', error.message, [{text: 'Okay'}]);
    });
};

export default Counter_Reducers;
