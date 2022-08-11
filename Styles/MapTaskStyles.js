import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    flex: 1,
    justifyContent: 'flex-end',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  image: {
    width: 200,
    height: 200,
    borderWidth: 2,
    borderColor: '#d35647',
    resizeMode: 'stretch',
    marginLeft: 10,
    marginTop: 30,
    marginRight: 10,
    borderRadius: 10,
  },
  title: {
    fontSize: 22,
    textAlign: 'center',
    marginTop: 20,
  },
  flexbox: {
    flex: 0.41,
  },
});
