import React, { Component } from 'react';
import styles from '../styles/styles';
import axios from 'axios';
import { ScrollView, View, TouchableOpacity, Text, Image } from 'react-native';
import collectionInfo from '../data/librarydata';
import { connect } from 'react-redux';
//import NavigationService from './navigation-service';

export default class Collections extends Component {
    

    state = {
        data: collectionInfo
    };
    
    componentDidMount() {
        this.loadCollections();
    }

    loadCollections() {
        const collectionsUrl = 'http://127.0.0.1:5005/collections/?collection=co.musicat.savannah&auth=foo'//development
//        const collectionsUrl = 'https://api.musicat.co/public/albums/?collection=ca.epl.capitalcityrecords' //production
        axios
        .get(collectionsUrl) //development
        .then((res) => {
            let newList = res.data;
            this.props.store.dispatch({
                type: 'LOAD_COLLECTIONS',
                state: {collections: newList}
            });
        });
    }



    
    render() {
        return (
            <View style = {{flex: 9}}>
                <ScrollView>
                { this.props.display.collections.map((localCollectionsList, index) => (
                    <TouchableOpacity  key = {index} style={style=styles.navigationbox} onPress={() => this.props.bar.navigate('Main', {collection: localCollectionsList.collectionName})}>
                          {/* TODO: calling parent navigate bad, add function to remember collection chosen */}
                          <Image source={{uri: localCollectionsList.collectionLogo}} style={styles.collectionlogo} />
                          <View style={styles.collectioninfo}>
                        <Text style={styles.collectionlabel}>{localCollectionsList.collectionLabel}</Text>
                        <Text style={styles.libraryname}>{localCollectionsList.libraryName}</Text>
                        <Text style={styles.libraryname}>{localCollectionsList.collectionRegion}, {localCollectionsList.collectionProvince}</Text>
                        </View>
                    </TouchableOpacity>
                    ))
                }
            </ScrollView>
            </View>
        )
    }
}
//onPress={() => getKey(localCollectionsList.collectionlabel)}

function mapStateToProps(state) {
    return {
        display: state.collections
    };
}

module.exports = connect(mapStateToProps)(Collections);