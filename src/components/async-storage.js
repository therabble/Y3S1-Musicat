import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TextInput,
  Button,
  View,
  AsyncStorage
} from 'react-native';

export default class AsyncStorageExample extends Component {

  constructor(props) {
    super(props);

    this.state = {
      myKey: this.props.myKey
  }
  console.warn('asyncstorageMykeyState:' + this.state.myKey)
  console.warn('asyncstorageMykeyProps:' + this.props.myKey)
  }

  async getKey() {
    try {
      const value = await AsyncStorage.getItem('@MySuperStore:key');
      this.setState({myKey: value});
      // console.warn('props:' + this.props.myKey)
      // console.warn('state:' + this.state.myKey)
    } catch (error) {
      console.log("Error retrieving data" + error);
    }
  }

  async saveKey() {
    try {
        await AsyncStorage.removeItem('@MySuperStore:key');
        const value = await AsyncStorage.getItem('@MySuperStore:key');
        this.setState({myKey: value});
        // console.warn('props:' + this.props.myKey)
        // console.warn('state:' + this.state.myKey)
      } catch (error) {
        console.log("Error resetting data" + error);
      }
    try {
      await AsyncStorage.setItem('@MySuperStore:key', this.props.collection);
      // console.warn('props:' + this.props.myKey)
      // console.warn('state:' + this.state.myKey)
    } catch (error) {
      console.log("Error saving data" + error);
    }
  }

  render() {
      const collection = this.props.collection;
    return (
      <View style={styles.container}>
      <Text style={styles.instructions}>
          Stored collection is = {collection}
        </Text>
        <Button
          style={styles.formButton}
          onPress={this.saveKey.bind(this)}
          title="Save Key"
          color="#2196f3"
          accessibilityLabel="Save Key"
          />

        <Button
          style={styles.formButton}
          onPress={this.getKey.bind(this)}
          title="Get Key"
          color="#2196f3"
          accessibilityLabel="Get Key"
        />

        <Text style={styles.instructions}>
          Stored key is = {this.state.myKey}
        </Text>


      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 30,
    flex: 1,
    alignItems: 'stretch',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  formInput: {
    paddingLeft: 5,
    height: 50,
    borderWidth: 1,
    borderColor: "#555555",
  },
  formButton: {
    borderWidth: 1,
    borderColor: "#555555",
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
    marginTop: 5,
  },
});
