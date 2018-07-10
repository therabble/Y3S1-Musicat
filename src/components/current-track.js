import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text } from 'react-native';
import TrackPlayer from 'react-native-track-player';
import { configPlayer } from '../track-player/player-commands';

class CurrentTrack extends Component {
    constructor(props){
        super(props);

        this.getTrackInfo = this.getTrackInfo.bind(this);
        setInterval(this.getTrackInfo, 500);
      }
      
      async getTrackInfo() {
        let trackId = await TrackPlayer.getCurrentTrack();
    
        if (trackId != null){
          let track = await TrackPlayer.getTrack(trackId);
          this.props.store.dispatch({
            type: 'PLAYBACK_TRACK',
            state: track
          });
        };
      }  

    componentDidMount(){
        configPlayer();
    }

    render () {
        const track = this.props.playback.currentTrack;
        const state = this.props.playback.state;
        const title = track ? track.title : "none";
        return (
            <Text>
                <Text>
                {state} - {title}               
                </Text>
            </Text>
        )
    }
}

function mapStateToProps(state) {
    return {
        playback: state.playback
    };
}

module.exports = connect(mapStateToProps)(CurrentTrack);