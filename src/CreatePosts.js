import React, { Component } from 'react';
import { Dimensions, StyleSheet, Text, TextInput, View } from 'react-native';
import { Button } from 'react-native-elements'

const { height, width } = Dimensions.get('window');

export default class CreatePosts extends Component {
  constructor(props) {
    super(props);
    this.state = {text: ''};
  this.postInputHandler = this.postInputHandler.bind(this);
  }

   postInputHander = (ev) => {
    this.setState({
      text: ev.target.value
    })
  }



  static navigationOptions = {
    title: 'Create Post',
  };

  render() {
    return (
      <View style={styles.container}>
        <TextInput style={styles.title} placeholder="Title" onChangeText={(text) => this.setState({text})} />
        <TextInput style={styles.message} placeholder="Message" />
        <Button raised iconRight icon={{name: 'check'}} title='Submit Post' buttonStyle={styles.button} />
        <Text style={{padding: 10, fontSize: 42}}>
          {this.state.text.split(' ').map((word) => word && '🖕').join(' ')}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    padding: 25,
  },
  title: {
    height: 40,
    borderWidth: 1.5,
    borderRadius: 5,
  },
  message: {
    marginTop: 2,
    height: 100,
    borderWidth: 1.5,
    borderRadius: 5,
  },
  button: {
    marginTop: 2,
    backgroundColor:'rgba(0, 124, 220, 100)',
  },

});
