import { useState } from "react";
import { View } from "react-native";
import { Button } from "react-native-elements";
import useSoundPlayer from "../../hooks/useSoundPlayer";
import styles from './styles'

export default function CommandInput() {   
    const [commandSelected, setCommandSelected] = useState(''); 
    useSoundPlayer(commandSelected, () => setCommandSelected(''));

    const onCommandButtonPressed = (fileName) => {
        console.log(fileName + " pressed");
        setCommandSelected(fileName);
    }

    const commands = [
        {
            title: "Sit",
            fileName: 'catSound'
        },
        {
            title: "Run",
            fileName: 'cowSound'
        },
        {
            title: "Jump",
            fileName: 'horseSound'
        },
        {
            title: "Attack"
        },
        {
            title: "Bite"
        },
    ]

    return(
        <View style={styles.container}>
            {commands.map( (command) => {
                return(
                    <Button 
                        title={command.title}
                        containerStyle={{
                            width: 200,
                            marginHorizontal: 50,
                            marginVertical: 10
                        }}
                        onPress={() => onCommandButtonPressed(command.fileName)}
                    />
                )
            })}
        </View>

    )
}