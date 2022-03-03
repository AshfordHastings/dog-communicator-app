import 'react-native-gesture-handler';
import React from 'react';
import { Audio } from 'expo-av';

export const playSound = async (fileName) => {


    const sound = new Audio.Sound();
    const source = require(`../assets/sounds/${fileName}`);
    const status = {
        shouldPlay: true,
    }

    soundInstance.setOnPlaybackStatusUpdate()



    await sound.playAsync();
}