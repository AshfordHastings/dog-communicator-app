import { useState } from "react";
import { View, ScrollView, FlatList, Pressable, Text } from "react-native";
import { Button } from "react-native-elements";
import useSoundPlayer from "../../hooks/useSoundPlayer";
import { StyleSheet } from "react-native";
import styles from './styles'
import { SafeAreaView } from "react-native-safe-area-context";

export default function CommandInput() {
    const [commandSelected, setCommandSelected] = useState('');
    useSoundPlayer(commandSelected, () => setCommandSelected(''));

    const onCommandButtonPressed = (command) => {
        console.log(command + " pressed");
        setCommandSelected(command);
    }

    const commands = [
        {
            id: 1,
            title: "Stay"
        },
        {
            id: 2,
            title: "Wait"
        },
        {
            id: 3,
            title: "Heel"
        },
        {
            id: 4,
            title: "Come",
        },
        {
            id: 5,
            title: "Forward",
        },
        {
            id: 6,
            title: "Sit",
        },
        {
            id: 7,
            title: "Down",

        },
        {
            id: 8,
            title: "Attack",

        },
        {
            id: 9,
            title: "Seek",
        },
    ]


    const renderItem = ({ item }) => {
        return (
            <Button
                buttonStyle={[getColor(item.id), styles.button]}
                
                key={item.title}
                onPress={() => onCommandButtonPressed(item.title)}
                title={item.title}
                containerStyle={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    paddingVertical: 12,
                    paddingHorizontal: 32,
                }}
                
            />
        )
    }

    const getColor = (id) => {
        const colorMappings = {
            '0': styles.red,
            '1': styles.blue,
            '2': styles.purple,
            '3': styles.green,
            '4': styles.gold,
        }
        console.log(id);
        console.log(colorMappings[(id%5).toString()]);
        return(
            colorMappings[(id%5).toString()]
        )

    }



    // const commandPages = () => {
    //     console.log("blah");
    //     const arr = [];

    //     for (let i = 0; i < commands.length / 4; i++) {
    //         arr.push(
    //             <View
    //                 style={styles.container}
    //                 key={i}
    //             >
    //                 {commands
    //                     .filter((command => command.id / 4 == i))
    //                     .map(command => {
    //                         return (
    //                             <Button
    //                                 title={command.title}
    //                                 containerStyle={{
    //                                     width: 200,
    //                                     marginHorizontal: 50,
    //                                     marginVertical: 10
    //                                 }}
    //                                 onPress={() => onCommandButtonPressed(command.fileName)}
    //                             />
    //                         )
    //                     })
    //                 }
    //             </View>
    //         )
    //     }
    //     console.log(JSON.stringify(arr));
    //     return arr;
    // }

    // return (
    //     <View style={styles.container}>
    //         <FlatList
    //             horizontal
    //             data={commands}
    //             renderItem={(item) => <Button
    //                 title={item.title}
    //                 containerStyle={{
    //                     width: 200,
    //                     marginHorizontal: 50,
    //                     marginVertical: 10
    //                 }}
    //                 onPress={() => onCommandButtonPressed(item.fileName)}
    //             />}
    //             keyExtractor={(item) => item.id}
    //         />
    //     </View>
    // )

    return (
        <View style={styles.container}>
            <FlatList
                data={commands}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
            />
        </View>
    )



    // return(
    //     <View style={styles.container}>
    //         {commands.map( (command) => {
    //             return(
    //                 <Button 
    //                     title={command.title}
    //                     containerStyle={{
    //                         width: 200,
    //                         marginHorizontal: 50,
    //                         marginVertical: 10
    //                     }}
    //                     onPress={() => onCommandButtonPressed(command.fileName)}
    //                 />
    //             )
    //         })}
    //     </View>

    // )
}


