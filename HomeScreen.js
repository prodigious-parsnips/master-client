import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';
import Drawer from './src/DrawerNav.js'

import PostPreview from './src/PostPreview.js';
import PostList from './src/PostList.js';
var FAKE_SUBREDDIT_ID = 10;
// PASSING NAVIGATION AS PROPS: https://stackoverflow.com/a/44029481

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: []
    };
  }
  static navigationOptions = {
    title: 'Home',
  };

  componentDidMount() {
    fetch(`http://localhost:3000/api/messages?subredditId=${FAKE_SUBREDDIT_ID}`)
    .then(response => response.json())
    .then(data => {
      this.setState({messages: data});
      console.log('data from initial component mount', this.state.messages);
    })
    .catch(err => console.log(err));
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.app}>
        <PostList navigation={this.props.navigation} messages={this.state.messages}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  app: {
    backgroundColor: 'white',
    borderRadius: 4,
    borderWidth: 3.5,
    borderColor: 'white',
  },
});
