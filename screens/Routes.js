import 'react-native-gesture-handler';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Image, Dimensions, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import MicrophoneInput from './MicrophoneInput';
import NavFooter from '../components/NavFooter';
import CommandInput from './CommandInput';

const Stack = createStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerStyle: {
                        backgroundColor: '#228CDB',
                    },
                    headerTintColor: '#fff'
                }}

                initialRouteName="MicrophoneInput">
                <Stack.Screen
                    name="MicrophoneInput"
                    component={MicrophoneInput}
                    options={({ navigation }) => ({
                        header: () => (
                            <NavFooter navigation={navigation} currentPage="MicrophoneInput" />
                        )
                    })
                    }
                />
                <Stack.Screen
                    name="CommandInput"
                    component={CommandInput}
                    options={({ navigation }) => ({
                        header: () => (
                            <NavFooter navigation={navigation} currentPage="CommandInput" />
                        )
                    })
                    }
                />
            </Stack.Navigator >
        </NavigationContainer >

    )
}

const style = StyleSheet.create({
    headerIcon: {
        marginRight: 10,
        justifyContent: 'flex-end'
    }
})
