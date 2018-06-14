import React, { Component } from 'react';
import { createStore } from 'redux';
import reducers from '../reducers/reducers';
import createEventHandler from '../track-player/event-handler';
import TrackPlayer from 'react-native-track-player';
import { View } from 'react-native';
import PlayerControls from '../components/player-controls'
import Albums from '../components/albums'
import styles from '../styles/styles'

const store = createStore(reducers);
TrackPlayer.registerEventHandler(createEventHandler(store));

export default class Main extends Component {
    constructor(props) {
        super(props);
    
        setInterval(this.getTrackInfo, 500);
      }
      
      
    
      async getTrackInfo() {
        let trackId = await TrackPlayer.getCurrentTrack();
    
        if (trackId != null){
          let track = await TrackPlayer.getTrack(trackId);
          store.dispatch({
            type: 'PLAYBACK_TRACK',
            state: track
          });
        };
      }

    render() {
  
        return (
          <View style={styles.mainscreen} >
              <Albums store={store} />
              <PlayerControls store={store} />
          </View>
        );
      }
    } 