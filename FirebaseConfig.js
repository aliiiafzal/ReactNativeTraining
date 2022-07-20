import {initializeApp} from 'firebase/app';
import {getAnalytics} from 'firebase/analytics';

const firebaseConfig = {
  apiKey: 'AIzaSyAeGMjkhRKerLRyKb4SazGeeOsVibAPdaU',
  authDomain: 'react-native-training-cf44f.firebaseapp.com',
  projectId: 'react-native-training-cf44f',
  storageBucket: 'react-native-training-cf44f.appspot.com',
  messagingSenderId: '1047679329833',
  appId: '1:1047679329833:web:d86d05c736407fb7fb5e38',
  measurementId: 'G-LE66XLK792',
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
