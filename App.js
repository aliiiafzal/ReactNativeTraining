import React from 'react';
import {View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Task1 from './Components/Task1';
import Task2 from './Components/Task2';
import Task3 from './Components/Task3';
import HomeScreen from './Screens/HomeScreen';
import Hollywood from './Screens/Hollywood';
import Bollywood from './Screens/Bollywood';
import Lollywood from './Screens/Lollywood';
import RandomNo from './Components/RandomNo';
import Task4 from './Components/Task4';
import DimensionScreen from './Screens/DimensionScreen';
import Login from './Screens/Login';
import Signup from './Screens/Signup';

const App = () => {
  const name = 'I am data from App.js';
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen
          name="task1"
          component={Task1}
          options={{title: 'Task 1'}}
        />
        <Stack.Screen
          name="task2"
          component={Task2}
          options={{title: 'Task 2'}}
        />
        <Stack.Screen
          name="task3"
          component={Task3}
          options={{title: 'Task 3'}}
        />
        <Stack.Screen
          name="homescreen"
          component={HomeScreen}
          options={{title: 'Welcome'}}
        />
        <Stack.Screen
          name="hollywood"
          component={Hollywood}
          options={{title: 'Hollywood'}}
        />
        <Stack.Screen
          name="bollywood"
          component={Bollywood}
          options={{title: 'Bollywood'}}
        />
        <Stack.Screen
          name="lollywood"
          component={Lollywood}
          options={{title: 'Lollywood'}}
        /> */}
        {/* <Stack.Screen
          name="randomno"
          component={RandomNo}
          options={{title: 'Number Guessing Game'}}
        />
        <Stack.Screen
          name="task4"
          component={Task4}
          options={{title: 'Play With Images'}}
        /> */}
        <Stack.Screen
          name="dimensionscreen"
          component={DimensionScreen}
          options={{title: 'Dimension Screen'}}
        />
        <Stack.Screen
          name="login"
          component={Login}
          options={{title: 'Login Screen'}}
        />
        <Stack.Screen
          name="signup"
          component={Signup}
          options={{title: 'Signup Screen'}}
        />
      </Stack.Navigator>
    </NavigationContainer>

    //<Task1 />
    //<Task2 />
    // <Task3 data={name} />
    //<HomeScreen />
    //<Hollywood />
  );
};

export default App;
