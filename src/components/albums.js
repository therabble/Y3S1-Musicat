import React, { Component } from 'react';
import axios from 'axios';
import Album from './album';
import { ScrollView, View } from 'react-native';
import { connect } from 'react-redux';
import styles from '../styles/styles';


class Albums extends Component {

    componentDidMount() {
        this.loadAlbums();
    }

    loadAlbums() {
        //loads albums from the api and sorts tracks saves them to store
        const collectionUrl = 'http://127.0.0.1:5005/public/albums/?collection=' + this.props.collection //development
//        const collectionUrl = 'https://api.musicat.co/public/albums/?collection=' + this.props.collection //production
        axios
        .get(collectionUrl) //development
        .then((res) => {
            let newList = res.data;
            for (let i=0;i<newList.length;i++){      
                newList[i].album.tracks = newList[i].album.tracks.sort((x,y)=>{
                    return (x.position < y.position )? -1:1; 
                })
            }
            this.props.store.dispatch({
                type: 'LOAD_ALBUMS',
                state: {albums: newList}
            });
        });
    }
    
    render() {
        return (
            //maps albums into a scrollview, may be faster if you use a flatlist instead
            <View style = {styles.albumsscroll}>
                <ScrollView> 
                {this.props.display.albums.map((localAlbumList, index) => {
                    return (
                        <Album key = {index} album = {localAlbumList.album} trackNum = {index + 1} store={this.props.store}/>
                    ); 
                })}
            </ScrollView>
            </View>)
    }
}

function mapStateToProps(state) {
    return {
        display: state.albums
    };
}

module.exports = connect(mapStateToProps)(Albums);