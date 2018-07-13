import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation';
import Navigation from '../screens/navigation-screen';
import Main from '../screens/main-screen';
import {Image, AsyncStorage, View, Text} from 'react-native';
import styles from '../styles/styles';
import NavigationService from './navigation-service';
import { lastCollectionPersistKey } from '../data/persist';

const Navigator = createStackNavigator(

      {
        Main: {
          screen: Main,
          navigationOptions: {
            headerTitle: <Text style={styles.headerimage}><Image source={require('../images/musicat.png')} style={styles.logo}></Image>     <Image source={require('../images/musicat.png')} style={styles.logo}></Image></Text>,
          }
        },
        Navigation: {
          screen: Navigation,
          navigationOptions: {
            headerTitle: <Image source={require('../images/musicat.png')} style={styles.logo}></Image>,
          }
        },
      },
      {
        initialRouteName: 'Navigation',
        navigationOptions: {
          headerStyle: {
            backgroundColor: '#ffffff',
          },
          headerTintColor: '#6cc7e6',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        },
      }
    );  

export default class Nav extends Component { 

  componentDidMount() {
    this.loadLastCollection();
  }

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