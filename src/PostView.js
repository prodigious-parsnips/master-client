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
    return (
      <View style={styles.container}>
        <Text>PostView!!!</Text>
        <Text style={styles.title} placeholder="Title">Title </Text>
        <Text style={styles.message} placeholder="Title">Message </Text>
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
