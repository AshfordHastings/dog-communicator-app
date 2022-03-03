import catSound from './cat-sound.mp3';
import cowSound from './cow-sound.mp3';
import horseSound from './horse-sound.mp3';

const templates = {
    catSound,
    cowSound,
    horseSound
}

export function getSound (name) {
    return templates[name]
}