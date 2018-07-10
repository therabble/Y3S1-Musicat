import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation';
import Navigation from '../screens/navigation-screen';
import Main from '../screens/main-screen';
import {Image} from 'react-native';
import styles from '../styles/styles';
import NavigationService from './navigation-service';



const Navigator = createStackNavigator(
      {
        Main: Main,
        Navigation: Navigation,
      },
      {
        initialRouteName: 'Navigation',
        navigationOptions: {
          headerTitle: <Image source={require('../images/musicat.png')} style={styles.logo}></Image>,
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

  render() {
    return (
      <Navigator
      ref={navigatorRef => NavigationService.setTopLevelNavigator(navigatorRef)}
      />
    )
  }
}