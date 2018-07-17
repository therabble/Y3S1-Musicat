import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation';
import Navigation from '../screens/navigation-screen';
import Main from '../screens/main-screen';
import { AsyncStorage } from 'react-native';
import NavigationService from './navigation-service';
import { lastCollectionPersistKey } from '../data/persist';

//Creates the react-navigation navigator with two screens: Navigation which is the collections page and Main which is the music player
const Navigator = createStackNavigator(

      {
        Main: Main,
        Navigation: Navigation,
      },
      {
        initialRouteName: 'Navigation',
      }
    );  

export default class Nav extends Component { 

  componentDidMount() {
    this.loadLastCollection();
  }

  //Loads the collection name from local storage to let the app know which library to travel to
  loadLastCollection() {
    AsyncStorage.getItem(lastCollectionPersistKey).then((collectionName) => {
      if (collectionName) {
        NavigationService.navigate('Main', {collection: collectionName});

      }
    }).catch(() => null);
  }
  render() {
    return (
      <Navigator
      ref={navigatorRef => NavigationService.setTopLevelNavigator(navigatorRef)}
      />
    )
  }
}