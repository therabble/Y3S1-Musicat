import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { add } from '../track-player/player-commands';
import styles from '../styles/styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import { play } from '../track-player/player-commands';
import { connect } from 'react-redux';
import TrackPlayer from 'react-native-track-player';
import { STATE_STOPPED } from '../../node_modules/react-native-track-player/lib';

export default class Song extends Component{
//displays individual songs for each album 
  constructor(props) {
    super(props);
    this.playSong = this.playSong.bind(this);

  }

  async playSong() {
    //gets queue length and track information, adds the track to the queue and plays the track if the queue's length is 0
    let queue = await TrackPlayer.getQueue();
    const track = {
      id: this.props.song.access_token,
      url: 'https://mms.yaharamusic.org/tc?src=' + this.props.song.url + '&fmt=mp3&auth=foo',
      title: this.props.song.title,
      artist: this.props.artist
    };
    add(track)

    if (queue.length) {
    } else{
      play();
    }
  }

  render(){
    //icon checks if the player state is null (as opposed to playing, paused, etc.)
    const state = this.props.playback.state;
    return(     
      <View style={styles.songadd}>
        <View style={styles.trackbox}>
          <Text style={styles.trackstyle}>{this.props.song.position}. {this.props.song.title}{'\n'}</Text>
        </View>
        <View style={styles.trackaddbox}>
        <TouchableOpacity onPress={this.playSong}> 
            <Icon name={(state != (null))&&(state != (STATE_STOPPED)) ? "plus" : "play"} size={20} color="#6cc7e6" />
            </TouchableOpacity>
        </View>
      </View>
    )
  }
}

function mapStateToProps(state) {
  return {
      playback: state.playback
  };
}
module.exports = connect(mapStateToProps)(Song);