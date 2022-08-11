import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: 'lightblue',
  },
  button: {
    backgroundColor: 'lightblue',
    alignItems: 'center',
    borderRadius: 10,
    marginLeft: 30,
    marginRight: 30,
  },
  buttontext: {
    fontSize: 20,
    textAlign: 'center',
    margin: 15,
  },
  heading: {
    fontSize: 25,
    textAlign: 'center',
    margin: 15,
    fontWeight: 'bold',
  },
  text: {
    fontSize: 25,
    margin: 15,
    textAlign: 'justify',
  },
  flatlist: {
    backgroundColor: 'lightblue',
    borderWidth: 2,
    borderRadius: 10,
    margin: 10,
  },
  flex_box1: {
    flex: 0.8,
    //backgroundColor: 'blue',
    alignItems: 'center',
  },
  flex_box2: {
    flex: 0.2,
    //backgroundColor: 'gray',
    justifyContent: 'center',
  },
});
