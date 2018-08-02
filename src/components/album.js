import React, { Component } from 'react';
import { Text, View, TouchableOpacity,Image, FlatList } from 'react-native';
import Song from './song';
import styles from '../styles/styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import { add, reset, play } from '../track-player/player-commands';

export default class Album extends Component{
  //prints out each individual albums with cover art, artist name, album name, and a toggle button that shows the songs as well as a play whole album button
  constructor(props) {
    super(props);

    this.toggleShowSongs = this.toggleShowSongs.bind(this);
    this.showSongs = this.showSongs.bind(this);
    this.addAlbumToPlaylist = this.addAlbumToPlaylist.bind(this);
    this.showAddAlbum = this.showAddAlbum.bind(this);
    this.state = {
      trackList: "",
      showSongs: false
    };
  }
  
  showSongs() {
    //returns a list of all songs on an album if caret is toggled
    if (!this.state.showSongs){
      return
    }
    let list = 
      <View>
        <FlatList data={this.props.album.tracks}
          renderItem={({ item, index }) => 
          <Song artist={this.props.album.main_artist_name} album_title={this.props.album.title} album_art={this.props.album.front_cover_art} song={item} key = {index} store={this.props.store} />
          }
          keyExtractor={(item, index) =>  index} 
        />
      </View>;
      return list
  }
  
  toggleShowSongs() {
    this.setState({showSongs:!this.state.showSongs})
  }

  showOpenCloseIcon() {
    if(this.state.showSongs)
    {
      return <Icon name="caret-down" size={25} color='#808080' />
    }
    else
    {
      return <Icon name="caret-right" size={25} color='#808080' />
    }
  }

  addAlbumToPlaylist() {
    //resets the queue, adds each track from the album and then plays the entire playlist
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

  showAddAlbum() {
    //shows the add album button when you toggle showsongs
    if(this.state.showSongs)
    {
      return  <View>
      <TouchableOpacity onPress={this.addAlbumToPlaylist}>
        <Text style = {styles.addalbumsongslist}>Add Album to Playlist</Text>
        </TouchableOpacity>
        </View>
    }
  }


  render() {
    
    albumArt = "https://mmscache.capitalcityrecords.ca/tc?src=" + this.props.album.front_cover_art + "&fmt=jpeg&auth=foo&scale_width=200";

    return (
      <View>      
        <View style={styles.albumheader}>
          <View>
            <TouchableOpacity onPress={this.addAlbumToPlaylist}>
              <Image source={{uri: albumArt}} style={styles.albumpicture} />
              <View style = {styles.addalbum} >
                <Icon style = {{position: 'absolute'}} name="circle" size={30} color="#FFFFFF"/>          
                <Icon style = {{position: 'absolute'}} name="play-circle" size={30} color="#6cc7e6"/>
              </View>
            </TouchableOpacity>     
          </View>
          <TouchableOpacity onPress = {this.toggleShowSongs}>
          <View style={styles.albuminfo}>
            <View>
              <Text style={styles.albumtitle}>{this.props.album.title}</Text>
            </View>
            <View>           
              <Text style={styles.artistname}>{this.props.album.main_artist_name}</Text> 
              {this.showOpenCloseIcon()}
            </View>
          </View >
          </TouchableOpacity>
        </View>
        {this.showAddAlbum()}
        {this.showSongs()}
      </View>
    );
  }
};