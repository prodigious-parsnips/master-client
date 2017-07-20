import React, { Component } from 'react';
import { AppRegistry, Text, TextInput, View } from 'react-native';

export default class PostView extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  static navigationOptions = {
    title: 'PostView',
  };

  render() {
    return (
      <View>
        <Text>PostView!!!</Text>

        <Text style={{height: 40, borderWidth: 1, borderRadius: 5}} placeholder="Title">Title </Text>

        <Text style={{height: 100, borderWidth: 1, borderRadius: 5}} placeholder="Title">Message </Text>
      </View>
    );
  }
}
