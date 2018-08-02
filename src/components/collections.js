import React, { Component } from 'react';
import styles from '../styles/styles';
import axios from 'axios';
import { ScrollView, View, TouchableOpacity, Text, Image, AsyncStorage, FlatList } from 'react-native';
import { connect } from 'react-redux';
import { lastCollectionPersistKey } from '../data/persist';
import { lastLogoPersistKey } from '../data/persist';

export default class Collections extends Component {
//loads collection info from the api, saves to store, and prints songs underneath each individual album
    constructor(props) {
        super(props);
    
        this.selectCollection = this.selectCollection.bind(this);

    }
    
    componentDidMount() {
        this.loadCollections();
    }

    loadCollections() {
        //loads collection info from the api and saves to store
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

    selectCollection(collectionName, collectionLogo) {
        //saves collection and logo information to local storage
        this.persistLogo(collectionLogo);
        this.persistCollection(collectionName);
        this.props.bar.navigate('Main', {collection: collectionName});
    }

    persistCollection(collectionName) {
        AsyncStorage.setItem(lastCollectionPersistKey, collectionName).catch(() => null);
    }
    persistLogo(collectionLogo) {
        AsyncStorage.setItem(lastLogoPersistKey, collectionLogo).catch(() => null);
    }


    
    render() {
        return (
            //maps items into a flatlist, faster than scrollview
            <View style = {styles.collectionscroll}>
            <FlatList data={this.props.display.collections}
                renderItem={({ item, index }) => 
                <TouchableOpacity key = {index} style={style=styles.navigationbox} onPress={() => this.selectCollection(item.collectionName, item.collectionLogo)}>
                    <Image source={{uri: item.collectionLogo}} style={styles.collectionlogo} />
                    <View style={styles.collectioninfo}>
                        <Text style={styles.collectionlabel}>{item.collectionLabel}</Text>
                        <Text style={styles.libraryname}>{item.libraryName}</Text>
                        <Text style={styles.regionname}>{item.collectionRegion}, {item.collectionProvince}</Text>
                    </View>
                </TouchableOpacity>
                }
                keyExtractor={(item, index) => index}
            /> 
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