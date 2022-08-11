import React from 'react';
import {View, Button} from 'react-native';
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
import Signup from './Screens/Signup';
import Login from './Screens/Login';
import GridScreen from './Screens/GridScreen';
import PushPopReplace from './Components/PushPopReplace';
import TabDrawer from './Components/TabDrawer';
import SideDrawer from './Components/SideDrawer';
import ReactRedux from './Components/ReactRedux';
import Check from './Components/Check';
import Movies_Api_Redux from './Components/Movies_Api_Redux';
import AddPost from './Components/Add_Post';
import EditPost from './Components/Edit_Post';
import Users_Redux_Saga from './Components/Users_Redux_Saga';
import MapScreen from './Screens/MapScreen';
import MapTask from './Components/MapTask';
import ImageScreen from './Screens/ImageScreen';
import DocumentScreen from './Screens/DocumentScreen';
import QRScanScreen from './Screens/QRScanScreen';
import store from './Redux/Store';
import {Provider} from 'react-redux';

const App = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Provider store={store}>
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
           initialParams={{data: 'I am data from App.js'}}
        /> */}
          {/* <Stack.Screen
          name="homescreen"
          component={HomeScreen}
          options={{title: 'Welcome'}}
        /> */}
          {/* <Stack.Screen
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
          {/* <Stack.Screen
          name="dimensionscreen"
          component={DimensionScreen}
          options={{title: 'Dimension Screen'}}
        /> */}
          {/* <Stack.Screen
            name="signup"
            component={Signup}
            options={{title: 'Signup Screen'}}
          /> */}
          {/* <Stack.Screen
            name="login"
            component={Login}
            options={{title: 'Login Screen'}}
          /> */}
          {/* <Stack.Screen
          name="gridscreen"
          component={GridScreen}
          options={{
            title: 'Grid Screen',
            headerStyle: {
              backgroundColor: 'lightblue',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            headerRight: () => (
              <Button
                onPress={() => alert('Profile Button pressed!')}
                title="Profile"
                color="#fff"
              />
            ),
          }}
        />
        <Stack.Screen
          name="pushpopreplace"
          component={PushPopReplace}
          options={{
            title: 'Push Pop Replace Screen',
          }}
        />
        <Stack.Screen
          name="tabdrawer"
          component={TabDrawer}
          options={{
            title: 'Tab Drawer',
          }}
        /> */}

          {/* <Stack.Screen
            name="sidedrawer"
            component={SideDrawer}
            options={{
              title: 'Side Drawer',
            }}
            initialParams={{name: 'I am from App.js'}}
          /> */}

          {/* <Stack.Screen
            name="reactredux"
            component={ReactRedux}
            options={{
              title: 'React Redux',
            }}
          /> */}

          {/* <Stack.Screen
            name="check"
            component={Check}
            options={{
              title: 'Check Redux State',
            }}
          /> */}

          {/* <Stack.Screen
            name="moviesapiredux"
            component={Movies_Api_Redux}
            options={{
              title: 'Movies API Redux',
            }}
          /> */}

          {/* <Stack.Screen
            name="addpost"
            component={AddPost}
            options={{
              title: 'Add Posts',
            }}
          />

          <Stack.Screen
            name="editpost"
            component={EditPost}
            options={{
              title: 'Edit Posts',
            }}
          /> */}

          {/* <Stack.Screen
            name="usersreduxsaga"
            component={Users_Redux_Saga}
            options={{
              title: 'Users Regux Saga',
            }}
          /> */}

          {/* <Stack.Screen
            name="mapscreen"
            component={MapScreen}
            options={{
              title: 'Map Screen',
            }}
          /> */}

          {/* <Stack.Screen
            name="maptask"
            component={MapTask}
            options={{
              title: 'Map Task',
            }}
          /> */}

          {/* <Stack.Screen
            name="imagescreen"
            component={ImageScreen}
            options={{
              title: 'Image Screen',
            }}
          /> */}

          {/* <Stack.Screen
            name="documentscreen"
            component={DocumentScreen}
            options={{
              title: 'Document Picker Screen',
            }}
          /> */}

          <Stack.Screen
            name="qrscanscreen"
            component={QRScanScreen}
            options={{
              title: 'QR Code Scan Screen',
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
