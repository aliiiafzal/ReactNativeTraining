import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: 'lightblue',
  },
  heading: {
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 40,
  },
  text: {
    textAlign: 'center',
    fontSize: 20,
  },
  text1: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  textinput: {
    marginTop: 30,
    marginLeft: 15,
    marginRight: 15,
    fontSize: 20,
    opacity: 0.7,
  },
  buttonImageIconStyle: {
    marginTop: 30,
    marginLeft: 20,
    height: 30,
    width: 30,
    resizeMode: 'stretch',
  },
  button: {
    backgroundColor: 'blue',
    padding: 20,
    marginLeft: 15,
    marginRight: 15,
    borderRadius: 10,
    marginTop: 20,
  },
  buttontext: {
    fontSize: 23,
    textAlign: 'center',
    color: 'white',
    fontWeight: '500',
  },
  flex_box1: {
    flex: 0.15,
    alignItems: 'center',
  },
  flex_box2: {
    flex: 0.2,
    flexDirection: 'row',
  },
  flex_box3: {
    flex: 0.4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  flex_box4: {
    flex: 3,
    justifyContent: 'center',
  },
  flex_box5: {
    flex: 0.1,
    flexDirection: 'row',
  },
});
