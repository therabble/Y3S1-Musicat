import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import styles from '../styles/styles';
import TrackPlayer from 'react-native-track-player';
import { reset } from '../track-player/player-commands';
import Icon from 'react-native-vector-icons/FontAwesome';

class ProgressBar extends Component {
//does math to convert song progress to correct hours, minutes, and seconds, changes the width of the current bar based on progress of song 
    constructor(props){
        super(props);
        
        this.getProgress = this.getProgress.bind(this);
        this.formatTime = this.formatTime.bind(this);
        this.updatePlayer = this.updatePlayer.bind(this);
    }

    componentDidMount(){
        //updates the player every half second
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
        if (info.position > 0) {
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
    //updates the progress and duriation of the song while playing
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
        const state = this.props.playback.state;
        return (
            <View>
                <View style = {styles.bar}>
                    <View style = {[styles.currentbar, {width: this.getProgress() + '%'}]}></View>
                </View>
                <View style = {styles.progressresetplaylist}>
                <Text style = {styles.progresstext}>{this.getProgressAndFormat()} / {this.getDurationAndFormat()} {state} 
                </Text>
                <TouchableOpacity onPress={reset}>
              <Icon name="trash" size={20} color="#6cc7e6"/>
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



module.exports = connect(mapStateToProps)(ProgressBar);