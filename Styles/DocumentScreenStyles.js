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
    fontWeight: 'bold',
  },
  flexbox1: {
    flex: 0.1,
    //backgroundColor: 'blue',
    justifyContent: 'center',
    marginTop: 10,
    marginBottom: 10,
  },
  flexbox2: {
    flex: 0.25,
    //backgroundColor: 'gray',
  },
  flexbox3: {
    flex: 0.5,
    //backgroundColor: 'gray',
  },
  uri: {
    fontSize: 20,
    margin: 10,
  },
});
