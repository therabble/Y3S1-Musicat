import React, { Component } from 'react';
import { createStackNavigator, addNavigationHelpers } from 'react-navigation';
import Main from './screens/main-screen';
import {Image} from 'react-native';
import { connect } from 'react-redux';
import styles from './styles/styles'

const RootStack = createStackNavigator(
  {
    Main: Main,
    Navigation: Navigation,
  },
  {
    initialRouteName: 'Navigation',
    navigationOptions: {
      headerTitle: <Image source={require('./images/musicat.png')} style={styles.logo}></Image>,
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