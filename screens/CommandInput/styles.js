import { StyleSheet, Dimensions } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        alignContent: "flex-start",
        flexDirection: "row",
        flexWrap: "wrap",
        marginTop: 100,
        marginBottom: 175
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        marginVertical: 30,
        width: 300,
        height: 100
    },
    red: {
        backgroundColor: "red",
    },
    blue: {
        backgroundColor: "blue"
    },
    purple: {
        backgroundColor: "purple"
    },
    green: {
        backgroundColor: "green"
    },
    gold: {
        backgroundColor: "gold"
    },
});