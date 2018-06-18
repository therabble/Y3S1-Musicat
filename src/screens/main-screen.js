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

    render() {
  
        return (
          <View style={styles.mainscreen} >
              <Albums store={store} />
              <PlayerControls store={store} />
          </View>
        );
      }
    } 