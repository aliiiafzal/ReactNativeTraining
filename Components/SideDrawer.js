import * as React from 'react';
import {Button, View} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from '../Screens/HomeScreen';
import GridScreen from '../Screens/GridScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Bollywood from '../Screens/Bollywood';
import Hollywood from '../Screens/Hollywood';
import Lollywood from '../Screens/Lollywood';

const Drawer = createDrawerNavigator();

export default function App({route}) {
  const name = route.params.name;
  console.log(name);

  return (
    <Drawer.Navigator
      useLegacyImplementation={true}
      screenOptions={{
        drawerStyle: {
          backgroundColor: 'white',
          width: 300,
        },
        drawerType: 'slide',
        drawerLabelStyle: {fontSize: 20, marginBottom: 20},
      }}
      initialRouteName="Home">
      <Drawer.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: 'Home',
          drawerIcon: ({focused, size}) => (
            <Ionicons
              name="md-home"
              size={30}
              color={focused ? 'blue' : '#ccc'}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Grid Screen"
        component={GridScreen}
        options={{
          title: 'Grid Screen',
          drawerIcon: ({focused, size}) => (
            <Ionicons
              name="grid-outline"
              size={30}
              color={focused ? 'blue' : '#ccc'}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Bollywood Movies"
        component={Bollywood}
        options={{
          title: 'Bollywood',
          drawerIcon: ({focused, size}) => (
            <Ionicons
              name="videocam-outline"
              size={30}
              color={focused ? 'blue' : '#ccc'}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Hollywood Movies"
        component={Hollywood}
        options={{
          title: 'Hollywood',
          drawerIcon: ({focused, size}) => (
            <Ionicons
              name="videocam-outline"
              size={30}
              color={focused ? 'blue' : '#ccc'}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Lollywood Movies"
        component={Lollywood}
        options={{
          title: 'Lollywood',
          drawerIcon: ({focused, size}) => (
            <Ionicons
              name="videocam-outline"
              size={30}
              color={focused ? 'blue' : '#ccc'}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Settings"
        component={GridScreen}
        options={{
          title: 'Settings',
          drawerIcon: ({focused, size}) => (
            <Ionicons
              name="settings-outline"
              size={30}
              color={focused ? 'blue' : '#ccc'}
            />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}
