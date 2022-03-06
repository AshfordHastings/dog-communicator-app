import styles from './styles';

import { TouchableOpacity, View, Image } from 'react-native';

export default function NavFooter({ navigation, currentPage }) {
    return (
        <View
            style={styles.container}>
            <TouchableOpacity
                onPress={() => navigation.navigate("MicrophoneInput")}>
                <Image
                    style={
                        (currentPage == "MicrophoneInput") ? { opacity: 1 } : { opacity: 0.5 }
                    }
                    source={require('../../assets/microphone-icon.png')}
                />
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => navigation.navigate("CommandInput")}>

                <Image
                    style={
                        (currentPage == "CommandInput") ? { opacity: 1 } : { opacity: 0.5 }
                    }
                    source={require('../../assets/pointer-icon.png')}
                />
            </TouchableOpacity>

        </View>
    )
}