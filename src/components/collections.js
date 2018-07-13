import React, { Component } from 'react';
import styles from '../styles/styles';
import axios from 'axios';
import { ScrollView, View, TouchableOpacity, Text, Image, AsyncStorage } from 'react-native';

import { connect } from 'react-redux';
import { lastCollectionPersistKey } from '../data/persist';
//import NavigationService from './navigation-service';

export default class Collections extends Component {
    constructor(props) {
        super(props);
    
        this.selectCollection = this.selectCollection.bind(this);

    }
    
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

    selectCollection(collectionName) {
        this.persistCollection(collectionName);
        this.props.bar.navigate('Main', {collection: collectionName});
    }

    persistCollection(collectionName) {
        AsyncStorage.setItem(lastCollectionPersistKey, collectionName).catch(() => null);
    }


    
    render() {
        return (
            <View style = {{flex: 9}}>
                <ScrollView>
                { this.props.display.collections.map((collection, index) => (
                    <TouchableOpacity  key = {index} style={style=styles.navigationbox} onPress={() => this.selectCollection(collection.collectionName)}>
                          {/* TODO: calling parent navigate bad, add function to remember collection chosen */}
                          <Image source={{uri: collection.collectionLogo}} style={styles.collectionlogo} />
                          <View style={styles.collectioninfo}>
                        <Text style={styles.collectionlabel}>{collection.collectionLabel}</Text>
                        <Text style={styles.libraryname}>{collection.libraryName}</Text>
                        <Text style={styles.regionname}>{collection.collectionRegion}, {collection.collectionProvince}</Text>
                        </View>
                    </TouchableOpacity>
                    ))
                }
            </ScrollView>
            </View>
        )
    }
}

function mapStateToProps(state) {
    return {
        display: state.collections
    };
}

module.exports = connect(mapStateToProps)(Collections);