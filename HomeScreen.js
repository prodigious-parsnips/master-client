import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';
import Drawer from './src/DrawerNav.js'

import PostPreview from './src/PostPreview.js';
import PostList from './src/PostList.js';
var FAKE_SUBREDDIT_ID = 3;
// PASSING NAVIGATION AS PROPS: https://stackoverflow.com/a/44029481

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
      currentSub: 10
    };
  }

  getSubId() {
    var subTitle = this.props.navigation.state.key;
    var subs = this.props.screenProps.subreddits;
    for (var i = 0; i < subs.length; i++) {
      if (subs[i].title === subTitle) return subs[i].id;
    }
    return 10; // this is an arbitrary working path should eventually point to local/default sub
  }

  static navigationOptions = {
    title: 'Home'
  };

  componentDidUpdate(pProps, pState) {
    if (this.getSubId() !== pState.currentSub) {
      this.setState({currentSub: this.getSubId()}, this.fetchMessages);
    }
  }

  componentDidMount() {
    this.fetchMessages();
  }

  fetchMessages() {
    fetch(`http://localhost:3000/api/messages?subredditId=${this.state.currentSub}`)
    .then(response => response.json())
    .then(data => {
      this.setState({messages: data});

    })
    .catch(err => console.log(err));
  }

  render() {
    // console.log(this.props)
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
