import {play, pause, stop, next, previous } from './player-commands';

//part of react-native-track-player
const eventHandler = async (store, data) => {
    if(data.type == 'playback-state') {
        store.dispatch({
            type: 'PLAYBACK_STATE',
            state: data.state
        })
    } else if(data.type == 'playback-track-changed') {
        store.dispatch({
            type: 'PLAYBACK_TRACK',
            state: data.state
        })
    } else if(data.type == 'remote-play') {
        // The play button was pressed, we can forward this command to the player using
        play()
    } else if(data.type == 'remote-pause') {
        pause();
    } else if(data.type == 'remote-stop') {
        stop();
    } else if(data.type == 'remote-next') {
        next();
    } else if(data.type == 'remote-previous') {
        previous();
    }
};

module.exports = function(store) {
    return eventHandler.bind(null, store);
};