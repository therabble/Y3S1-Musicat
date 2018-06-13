import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { add } from '../track-player/player-commands';
import styles from '../styles/styles';

export default class Song extends Component{
  constructor(props) {
    super(props);

    this.addToPlaylist = this.addToPlaylist.bind(this);
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

  render(){
    return(
      <View style={{flexDirection: 'row'}}>
        <View style={styles.trackbox}>
          <Text style={styles.trackstyle}>{this.props.song.position}. {this.props.song.title}{'\n'}</Text>
        </View>
        <View style={styles.trackaddbox}>
          <TouchableOpacity onPress={this.addToPlaylist}>
            <Text style={styles.addbutton}>Add</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}
