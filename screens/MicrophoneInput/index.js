import { View, Text } from 'react-native';
import { Icon } from 'react-native-elements/dist/icons/Icon';
import styles from './styles';

export default function MicrophoneInput() {
    return (
        <View style={styles.container}>
            <Icon
                name="record-circle" 
                type="material-community"

            />
        </View>
    )
}