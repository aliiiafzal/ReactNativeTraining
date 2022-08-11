import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: 'lightblue',
  },
  grid_row: {
    flex: 1,
    //backgroundColor: 'green',
    flexDirection: 'row',
    marginLeft: 5,
    marginRight: 5,
    marginTop: 20,
    marginBottom: 70,
  },
  grid_box1: {
    backgroundColor: 'green',
    height: 70,
    flex: 1,
  },
  grid_box2: {
    backgroundColor: 'gray',
  },
  grid_box3: {
    backgroundColor: 'blue',
  },
  grid_box4: {
    flex: 2,
  },
  text: {
    fontSize: 30,
    textAlign: 'center',
    margin: 15,
  },
  grid_box_text: {
    fontSize: 35,
    textAlign: 'center',
    fontWeight: 'bold',
    margin: 15,
  },
  flex_box: {
    flex: 7,
    justifyContent: 'center',
    //backgroundColor: 'blue',
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
