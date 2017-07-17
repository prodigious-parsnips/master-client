import React, { Component } from 'react';
import { AppRegistry, Text, TextInput, View } from 'react-native';

export default class CreatePosts extends Component {
  constructor(props) {
    super(props);
    this.state = {text: ''};
  }

  static navigationOptions = {
    title: 'Create Post',
  };

  render() {
    return (
      <View style={{padding: 10}}>
      <Text>Create a post!!!</Text>
        <Text style={{flex: 1, flexDirection: 'column', alignItems: 'center'}}>Title:</Text>
        <TextInput
          style={{height: 40, borderWidth: 1, borderRadius: 5}}
          placeholder="Title"
          onChangeText={(text) => this.setState({text})}
        />
        <Text style={{flex: 1, flexDirection: 'column', alignItems: 'center'}}>Message:</Text>
        <TextInput
          style={{height: 100, borderWidth: 1, borderRadius: 5}}
          placeholder="Message"
        />
        <Text style={{padding: 10, fontSize: 42}}>
          {this.state.text.split(' ').map((word) => word && '😸').join(' ')}
        </Text>
      </View>
    );
  }
}
