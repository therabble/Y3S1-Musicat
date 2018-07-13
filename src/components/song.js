import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { add } from '../track-player/player-commands';
import styles from '../styles/styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import { reset, play } from '../track-player/player-commands';

export default class Song extends Component{
  constructor(props) {
    super(props);

    this.addToPlaylist = this.addToPlaylist.bind(this);
    this.playSong = this.playSong.bind(this);
  }

  addToPlaylist() {
    const track = {
      id: this.props.song.access_token,
      url: 'https://mms.yaharamusic.org/tc?src=' + this.props.song.url + '&fmt=mp3&auth=foo',
      title: this.props.song.title,
      artist: this.props.artist
    };
    add(track);
    
  }
  playSong() {
    reset();
    const track = {
      id: this.props.song.access_token,
      url: 'https://mms.yaharamusic.org/tc?src=' + this.props.song.url + '&fmt=mp3&auth=foo',
      title: this.props.song.title,
      artist: this.props.artist
    };
    add(track);
    play();   
    
  }

  render(){
    return(
      <View style={{flexDirection: 'row'}}>
        <View style={styles.trackbox}>
          <Text style={styles.trackstyle}>{this.props.song.position}. {this.props.song.title}{'\n'}</Text>
        </View>
        <View style={styles.trackaddbox}>
          <TouchableOpacity onPress={this.addToPlaylist}>
            <Icon name="plus" size={20} color="#6cc7e6" />
          </TouchableOpacity>
          <TouchableOpacity onPress={this.playSong}>
            <Icon name="play" size={20} color="#6cc7e6" />
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}
