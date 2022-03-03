import styles from './styles';

import { TouchableOpacity, View, Image } from 'react-native';

export default function NavFooter({navigation}) {
    return (
        <View
            style={styles.container}>
            <TouchableOpacity
            onPress={() => navigation.navigate("MicrophoneInput")}>
                <Image
                    source={require('../../assets/microphone-icon.png')}
                />
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => navigation.navigate("CommandInput")}>
                        
                <Image
                    source={require('../../assets/pointer-icon.png')}
                />
            </TouchableOpacity>

        </View>
    )
}