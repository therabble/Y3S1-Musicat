import React, { Component } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { next, previous } from '../track-player/player-commands';
import CurrentTrack from './current-track';
import ProgressBar from './progress-bar';
import styles from '../styles/styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import TrackPlayer from 'react-native-track-player';
import { connect } from 'react-redux';


export default class PlayerControls extends Component {
//shows next, previous, and toggle play/pause button and displays progress bar
  constructor(props){
    super(props);

    this.togglePlayPause = this.togglePlayPause.bind(this);
  }


  async togglePlayPause() {
     let state = await TrackPlayer.getState();
     
    if(state == TrackPlayer.STATE_PAUSED) {
      TrackPlayer.play();
    } else if (state == TrackPlayer.STATE_STOPPED){
      TrackPlayer.play();
    } else {
      TrackPlayer.pause();
    }
  }

  render() {
    const state = this.props.playback.state;
    return (
      <View style={styles.bottombar}>
        <View style={styles.break}>
        </View>
        <View style={styles.playercontrols}>
          <TouchableOpacity onPress={previous} >
            <Icon name="step-backward" size={25} color="#6cc7e6" />
          </TouchableOpacity>  
          <TouchableOpacity onPress={this.togglePlayPause}> 
            <Icon name={state == (TrackPlayer.STATE_PAUSED) ? "play" : "pause"} size={25} color="#6cc7e6" />
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
function mapStateToProps(state) {
  return {
      playback: state.playback
  };
}
module.exports = connect(mapStateToProps)(PlayerControls);