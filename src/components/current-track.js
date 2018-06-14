import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text } from 'react-native';

class CurrentTrack extends Component {
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