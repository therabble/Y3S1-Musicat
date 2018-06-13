import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import styles from '../styles/styles';
import TrackPlayer, { ProgressComponent } from 'react-native-track-player';
import { play, pause, stop, add, configPlayer } from '../track-player/player-commands';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from '../reducers/reducers';

/* Component that tells you where in the song you are */

class ProgressBar extends Component {
    constructor(props){
        super(props);
        
        this.getProgress = this.getProgress.bind(this);
        this.formatTime = this.formatTime.bind(this);
        this.updatePlayer = this.updatePlayer.bind(this);
    }
    componentDidMount(){

        setInterval(this.updatePlayer, 500)

    }
    getProgress(){
        const info = this.props.playback.playerState;
        return (parseFloat(info.position) / parseFloat(info.duration) * 100);
    }
    formatTime(seconds) {
        const ss = Math.floor(seconds) % 60;
        const mm = Math.floor(seconds / 60) % 60;
        const hh = Math.floor(seconds / 3600);
    
        if(hh > 0) {
            return hh + ':' + this.formatTwoDigits(mm) + ':' + this.formatTwoDigits(ss);
        } else {
            return mm + ':' + this.formatTwoDigits(ss);
        }
    }
    
    formatTwoDigits(n) {
      return n < 10 ? '0' + n : n;
    }
    getProgressAndFormat(){
        const info = this.props.playback.playerState;
        if (info.position > 0){
        return this.formatTime(info.position);
        }
        else {
            return "0:00"
        }

    }
    getDurationAndFormat(){
        const info = this.props.playback.playerState;
        return this.formatTime(info.duration)
    }

    async updatePlayer(){
      let position = await TrackPlayer.getPosition();
      position = (Math.floor(position));
      let duration = await TrackPlayer.getDuration();
      duration = (Math.floor(duration));
      let leftover = duration - position;
      let info = this.formatTime(leftover) + ' / ' + this.formatTime(duration);
      this.props.store.dispatch({
        type: 'PLAYBACK_UPDATE',
        state: {info: info, duration:duration, position:position}
    })
    }

    render () {
        return (
            <View>
                <View style = {styles.bar}>
                    <View style = {[styles.currentbar, {width: this.getProgress() + '%'}]}></View>
                </View>
                <Text style = {styles.progresstext}>{this.getProgressAndFormat()} / {this.getDurationAndFormat()}</Text>
            </View>
        )
    }
}

function mapStateToProps(state) {
    return {
        playback: state.playback
    };
}



module.exports = connect(mapStateToProps)(ProgressBar);