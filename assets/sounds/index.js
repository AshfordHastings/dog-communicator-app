import Attack from './Attack.m4a';
import Come from './Come.m4a';
import Down from './Down.m4a';
import Forward from './Forward.m4a';
import Heel from './Heel.m4a';
import Seek from './Seek.m4a';
import Sit from './Sit.m4a';
import Stay from './Stay.m4a';
import Wait from './Wait.m4a';

const templates = {
    Attack,
    Come,
    Down,
    Forward,
    Heel,
    Seek,
    Sit,
    Stay,
    Wait
}

export function getSound (name) {
    return templates[name]
}