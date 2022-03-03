import { StyleSheet, Dimensions } from "react-native";

export default StyleSheet.create({
    container: {
        position: 'absolute',
        top: Dimensions.get('window').height - 200,
        left: 0,
        right: 0,
        height: 200,
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: 'row'
    }
});