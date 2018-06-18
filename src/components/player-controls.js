import React, { Component } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { play, pause, stop, next, previous, configPlayer } from '../track-player/player-commands';
import CurrentTrack from './current-track';
import ProgressBar from './progress-bar';
import styles from '../styles/styles';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class PlayerControls extends Component {
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

    componentDidMount(){
        configPlayer();
    }


    render() {
        return (
          <View style={styles.bottombar}>
          <View style={styles.break}></View>
          <View style={styles.playercontrols}>
          <TouchableOpacity onPress={previous} >
            <Icon name="step-backward" size={25} color="#6cc7e6" />
            </TouchableOpacity>  
            <TouchableOpacity onPress={stop}>
            <Icon name="stop" size={25} color="#6cc7e6" />
            </TouchableOpacity>   
            <TouchableOpacity onPress={play}>
            <Icon name="play" size={25} color="#6cc7e6"/>
            </TouchableOpacity>
            <TouchableOpacity onPress={pause}>
            <Icon name="pause" size={25} color="#6cc7e6" />
            </TouchableOpacity>
            <TouchableOpacity onPress={next}> 
            <Icon name="step-forward" size={25} color="#6cc7e6" />
            </TouchableOpacity>
          </View>
          <View style={styles.progressbarbox}>        
          <CurrentTrack store={this.props.store} />
          </View>
          <View style={styles.progressbarbox}>  
            <ProgressBar store={this.props.store}/>
          </View>
      </View>
          );
    }
}
