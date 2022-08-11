import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  maptext: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 20,
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
});
