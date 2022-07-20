import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: 'lightblue',
    paddingTop: 40,
  },
  title: {
    textAlign: 'center',
    marginTop: 50,
    fontSize: 25,
    fontWeight: 'bold',
  },
  image: {
    width: 380,
    height: 380,
    borderWidth: 2,
    resizeMode: 'stretch',
    marginLeft: 30,
    marginTop: 20,
    marginRight: 80,
    borderRadius: 30,
  },
  input: {
    height: 40,
    //margin: 12,
    marginTop: 12,
    marginLeft: 7,
    marginRight: 92,
    marginBottom: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 20,
    width: 250,
  },
  search: {
    fontSize: 20,
    marginRight: 16,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 15,
  },
});
