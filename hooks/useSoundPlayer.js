import { Audio } from 'expo-av';
import { useState, useEffect } from 'react';
import { getSound } from '../assets/sounds';

export default function useSoundPlayer(commandSelected, clearCommand) {
    const [sound, setSound] = useState();

    useEffect(() => {
        const playSound = async () => {
            const soundInstance = new Audio.Sound();
            const source = getSound(commandSelected);
            const status = {
                shouldPlay: true,
            }
            const onPlaybackStatusUpdate = ((status) => {
                console.log(status);
                if (status.didJustFinish && sound) {
                    sound.unloadAsync();
                    console.log("Just played");
                    clearCommand();
                    setSound();
                }
            });
            soundInstance.setOnPlaybackStatusUpdate(onPlaybackStatusUpdate);
            console.log("Loading");
            await soundInstance.loadAsync(source, status);
            setSound(soundInstance);
            await soundInstance.playAsync();
            console.log("Played");

        }
        try {
            console.log("useEffect called");
            console.log(commandSelected);
            commandSelected != "" ? playSound() : undefined;
        } catch (e) {
            console.log(e.message);
        }

        return sound ? () => {
            sound.unloadAsync();
            setSound();
        } : undefined;

    }, [commandSelected]);
}