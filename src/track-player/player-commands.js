import TrackPlayer from 'react-native-track-player';

const play = () => {
    TrackPlayer.setupPlayer({}).then(() => {
        TrackPlayer.play();
    });
}

const pause = () => {
    TrackPlayer.setupPlayer({}).then(() => {
        TrackPlayer.pause();
    });
}

const stop = () => {
    TrackPlayer.setupPlayer({}).then(() => {
        TrackPlayer.stop();
    });
}

const add = (track) => {
    TrackPlayer.setupPlayer({}).then(() => {
        TrackPlayer.add(track);
    });
}

const next = () => {
    TrackPlayer.setupPlayer({}).then(() => {
        TrackPlayer.skipToNext();
    });
}

const previous = () => {
    TrackPlayer.setupPlayer({}).then(() => {
        TrackPlayer.skipToPrevious();
    });
}
const reset = () => {
    TrackPlayer.setupPlayer({}).then(() => {
        TrackPlayer.reset();
    });
}

const configPlayer = async () => {
    TrackPlayer.setupPlayer({}).then(() => {
        TrackPlayer.updateOptions({
          capabilities: [
              TrackPlayer.CAPABILITY_PLAY,
              TrackPlayer.CAPABILITY_PAUSE,
              TrackPlayer.CAPABILITY_STOP,
              TrackPlayer.CAPABILITY_SKIP_TO_NEXT,
              TrackPlayer.CAPABILITY_SKIP_TO_PREVIOUS,
              TrackPlayer.CAPABILITY_RESET
          ]
        });
    });
}

module.exports = {
    play,
    pause,
    stop,
    add,
    next,
    previous,
    configPlayer,
    reset
};