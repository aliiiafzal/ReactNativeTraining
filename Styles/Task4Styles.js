import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightblue',
  },
  image: {
    width: 300,
    height: 300,
    resizeMode: 'stretch',
    borderColor: 'gray',
    borderWidth: 2,
    borderRadius: 20,
    fontWeight: 'bold',
    margin: 20,
  },
  input: {
    fontSize: 20,
    marginBottom: 20,
    marginTop: 20,
  },
  button: {
    elevation: 8,
    backgroundColor: '#009688',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
    marginTop: 20,
    marginBottom: 20,
    flexDirection: 'row',
  },
  buttontext: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
    alignSelf: 'center',
    textTransform: 'uppercase',
  },
  image_flex: {
    flex: 0.4,
    alignItems: 'center',
    justifyContent: 'center',
    //backgroundColor: 'blue',
  },
  input_flex: {
    flex: 0.1,
    alignItems: 'center',
    justifyContent: 'center',
    //backgroundColor: 'gray',
  },
  buttonImageIconStyle: {
    padding: 10,
    margin: 5,
    height: 25,
    width: 25,
    resizeMode: 'stretch',
  },
});
