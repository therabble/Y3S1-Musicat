import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation';
import Navigation from './screens/navigation';
import Main from './screens/main';
import {Image} from 'react-native';
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


export default class App extends Component {
  render() {
    return (   
      <RootStack/>
    );
  }
}
