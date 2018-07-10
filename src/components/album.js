import React, { Component } from 'react';
import { Text, View, TouchableOpacity,Image, ScrollView } from 'react-native';
import Song from './song';
import styles from '../styles/styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import { add, reset, play } from '../track-player/player-commands';

export default class Album extends Component{
  constructor(props) {
    super(props);

    this.toggleShowSongs = this.toggleShowSongs.bind(this);
    this.showSongs = this.showSongs.bind(this);
    this.addAlbumToPlaylist = this.addAlbumToPlaylist.bind(this);
    this.state = {
      trackList: "",
      showSongs: false
    };
  }
  
  showSongs() {
    if (!this.state.showSongs){
      return
    }
    let list = 
      <View>
        {this.props.album.tracks.map((song, index) => {return (
         <Song artist={this.props.album.main_artist_name} album_title={this.props.album.title} album_art={this.props.album.front_cover_art} song={song} key = {index} />
         )})}
      </View>;
      return list
  }
  
  toggleShowSongs() {
    this.setState({showSongs:!this.state.showSongs})
  }

  showOpenCloseIcon() {
    if(this.state.showSongs)
    {
      return <Icon name="angle-down" size={30} color="#6cc7e6" />
    }
    else
    {
      return <Icon name="angle-right" size={30} color="#6cc7e6" />
    }
  }
  addAlbumToPlaylist() {
    reset();
    {this.props.album.tracks.map((song, index) => {
      const track = {
        id: song.access_token,
        url: 'https://mms.yaharamusic.org/tc?src=' + song.url + '&fmt=mp3&auth=foo',
        title: song.title,
        artist: this.props.album.main_artist_name,
      };
      add(track)})};
      play();   
  }

  render() {
    
    albumArt = "https://mmscache.capitalcityrecords.ca/tc?src=" + this.props.album.front_cover_art + "&fmt=jpeg&auth=foo&scale_width=200";

    return (
      <View>
        <TouchableOpacity onPress = {this.toggleShowSongs}>
          <View style={styles.albumheader}>
            <View>
              <TouchableOpacity onPress={this.addAlbumToPlaylist}>
                <Image source={{uri: albumArt}} style={styles.albumpicture} />
                <View style = {styles.addalbum} >          
                  <Icon name="play-circle" size={20} color="#6cc7e6"/>
                </View>
              </TouchableOpacity>     
            </View>
            <View style={styles.albuminfo}>
              <View >
                <Text style={styles.albumtitle}>{this.props.album.title}</Text>
              </View>
              <View >           
                <Text style={styles.artistname}>{this.props.album.main_artist_name}</Text> 
                {this.showOpenCloseIcon()}
              </View>
            </View >
          </View>
        </TouchableOpacity>
        {this.showSongs()}
      </View>
    );
  }
};