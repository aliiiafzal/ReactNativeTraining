import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: "gray"
    },
    text: {
        fontSize: 20,
        textAlign: "center",
        paddingTop: 45,
    },
    buttontext: {
        fontSize: 20,
        textAlign: "center",
        paddingTop: 20,
        paddingBottom: 20,
    },
    button: {
        backgroundColor: 'lightblue',
        alignItems: "center",
        borderRadius: 10,
        marginLeft: 30,
        marginRight: 30,
        marginTop: 20,
    },
    title: {
        fontSize: 32,
        textAlign: "center",
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
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    modalView: {
        margin: 40,
        backgroundColor: "lightblue",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    modalbutton: {
        borderRadius: 20,
        padding: 10,
        elevation: 2
    },
    buttonOpen: {
        backgroundColor: "#F194FF",
    },
    buttonClose: {
        backgroundColor: "#2196F3",
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center",
        fontSize: 25,
    },
    inputView: {
        backgroundColor: "#FFC0CB",
        borderRadius: 30,
        width: "70%",
        height: 45,
        marginBottom: 20,
        alignItems: "center",
    },
    TextInput: {
        height: 90,
        flex: 1,
        padding: 10,
        marginLeft: 20,
    },
    forgot_button: {
        height: 30,
        marginBottom: 30,
    },
});