import React, { Component } from 'react';
import { View, Text } from 'react-native';
import styles from '../styles/styles'
import Collections from '../components/collections'
import { createStore } from 'redux';
import reducers from '../reducers/reducers';
import createEventHandler from '../track-player/event-handler';
import TrackPlayer from 'react-native-track-player';

const store = createStore(reducers);
TrackPlayer.registerEventHandler(createEventHandler(store));


export default class Navigation extends Component {
    static navigationOptions = ({ navigation, navigationOptions }) => {
        const { params } = navigation.state;
    }
    render() { 
        const foo = this.props.navigation;   
        return (
            <View style={styles.mainscreen} >
                <View style={styles.navigationheaderbox}>
                    <Text style={styles.navigationheader} >Select a MUSICat Partner Library</Text>
                </View>
                <Collections bar={foo} store={store}/>
             </View>
    
        );

    }
}