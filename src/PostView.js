import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

export default class PostView extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  static navigationOptions = {
    title: 'PostView',
  };

  render() {
    const params = this.props.navigation.state.params
    return (
      <View style={styles.container}>
        <Text style={styles.title} placeholder="Title">{params.title} </Text>
        <Text style={styles.message} placeholder="Title">{params.text}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    height: 40,
    borderRadius: 5,
    borderWidth: 1,
  },
  message: {
    marginTop: 2,
    height: 100,
    borderRadius: 5,
    borderWidth: 1,
  },
});
