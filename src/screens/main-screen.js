import React, { Component } from 'react';
import { createStore } from 'redux';
import reducers from '../reducers/reducers';
import createEventHandler from '../track-player/event-handler';
import TrackPlayer from 'react-native-track-player';
import { View, AsyncStorage, Text } from 'react-native';
import PlayerControls from '../components/player-controls'
import Albums from '../components/albums'
import styles from '../styles/styles'
import AsyncStorageExample from '../components/async-storage';

const store = createStore(reducers);
TrackPlayer.registerEventHandler(createEventHandler(store));

export default class Main extends Component {
  static navigationOptions = ({ navigation, navigationOptions }) => {
    const { params } = navigation.state;
  }

    render() {
      const collection = this.props.navigation.state.params.collection;
      const myKey = this.props.navigation.state.params.myKey;
      return (
      <View style={styles.mainscreen} >
     {/* <Text>myKey: {myKey}! </Text><Text>collection: {collection}! </Text> */}
        {/* <AsyncStorageExample myKey={myKey} collection={collection}/> */}
        <Albums store={store} collection={collection} />
        <PlayerControls store={store} />
      </View>
      );
    }
} 