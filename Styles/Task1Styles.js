import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
            flex: 1,
            flexDirection: "column",
            backgroundColor: "lightblue",
          },
          image: {
            height: 300,
            width: 300,
            borderRadius: 10,
            margin: 20,
            alignSelf: "center",
          },
          PlaceHolder: {
            height: 40,
            width: 380,
            borderColor: 'gray',
            borderWidth: 1,
            margin: 20,
          },
          text: {
            fontSize: 20,
            fontFamily: "Cochin",
            paddingTop: 50,
            paddingBottom: 20,
            fontWeight: 'bold',
            textAlign: "center",
            flex: 1,
          },
});