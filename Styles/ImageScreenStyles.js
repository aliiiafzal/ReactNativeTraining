import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: 'lightblue',
  },
  button: {
    backgroundColor: 'blue',
    alignItems: 'center',
    borderRadius: 10,
    marginLeft: 30,
    marginRight: 30,
  },
  buttontext: {
    fontSize: 20,
    textAlign: 'center',
    margin: 15,
    color: 'white',
  },
  flexbox1: {
    flex: 0.1,
    //backgroundColor: 'blue',
    justifyContent: 'center',
    marginTop: 10,
    marginBottom: 10,
  },
  imagebox: {
    flex: 0.35,
    //backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 10,
  },
  image: {
    width: 260,
    height: 260,
    borderWidth: 1.5,
    borderColor: '#d35647',
    borderRadius: 10,
    marginLeft: 20,
    marginRight: 20,
  },
});
