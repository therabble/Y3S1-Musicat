import React, { Component } from 'react';
import { createStore } from 'redux';
import reducers from '../reducers/reducers';
import createEventHandler from '../track-player/event-handler';
import TrackPlayer from 'react-native-track-player';
import { View, AsyncStorage, Text, Image } from 'react-native';
import PlayerControls from '../components/player-controls'
import Albums from '../components/albums'
import styles from '../styles/styles'
import { lastLogoPersistKey } from '../data/persist';

const store = createStore(reducers);
TrackPlayer.registerEventHandler(createEventHandler(store));

export default class Main extends Component { 

  componentDidMount() {
    this.loadLogo();

  }
  //gets logo from chosen library from local storage
  loadLogo() {
    AsyncStorage.getItem(lastLogoPersistKey).then((collectionLogo) => {  
      this.props.navigation.setParams({'lastLogoPersistKey': collectionLogo });   
  })
  }

  static navigationOptions  = ({ navigation }) => ({
    //header styling options
    headerTitle: <Text style={styles.headerimage}><Image source={require('../images/musicat-verticle.png')} style={styles.musicatmainheaderlogo}></Image><Image source={{uri: (navigation.getParam('lastLogoPersistKey'))}} style={styles.libraryheaderlogo}></Image></Text>,
    headerStyle: {
      backgroundColor: '#ffffff', 
    },
    headerTintColor: '#6cc7e6',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  });

    render() {
      const collection = this.props.navigation.state.params.collection; //collection choice from navigation(collections) screen
      return (
       <View style={styles.mainscreen} >
         <Albums store={store} collection={collection} />
         <PlayerControls store={store} />
       </View>
      );
    }
} 