import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 10,
  },
  button: {
    backgroundColor: 'lightblue',
    alignItems: 'center',
    borderRadius: 10,
    marginLeft: 30,
    marginRight: 30,
  },
  text: {
    textAlign: 'center',
    margin: 30,
    fontSize: 25,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
    textAlign: 'center',
    marginTop: 20,
  },
  image: {
    width: 300,
    height: 300,
    borderWidth: 2,
    borderColor: '#d35647',
    resizeMode: 'contain',
    marginLeft: 80,
    marginTop: 30,
    marginRight: 80,
    borderRadius: 10,
  },
  detail: {
    fontSize: 20,
    margin: 10,
  },
});
