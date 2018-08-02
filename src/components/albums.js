import React, { Component } from 'react';
import axios from 'axios';
import Album from './album';
import { ScrollView, View, FlatList } from 'react-native';
import { connect } from 'react-redux';
import styles from '../styles/styles';


class Albums extends Component {
///loads albums from the api and sorts tracks saves them to store
    componentDidMount() {
        this.loadAlbums();
    }

    loadAlbums() {
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
            //maps albums into a flatlist, faster than scrollview
            <View style = {styles.albumsscroll}>
            <FlatList data={this.props.display.albums}
                renderItem={({ item, index }) => 
                <Album key = {index} album = {item.album} trackNum = {index + 1} store={this.props.store}/>
                }
                keyExtractor={(item, index) =>  index} 
            /> 
            </View>)
    }
}

function mapStateToProps(state) {
    return {
        display: state.albums
    };
}

module.exports = connect(mapStateToProps)(Albums);