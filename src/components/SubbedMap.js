import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PostList from './PostList.js'
import styles from '../styles'

export default class SubbedMap extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
      currentSub: 10
    };
  }
  //
  // componentDidUpdate(pProps, pState) {
  //   if (this.getSubId() !== pState.currentSub) {
  //     this.setState({currentSub: this.getSubId()}, this.fetchMessages);
  //   }
  // }
  //
  componentDidMount() {
    this.fetchMessages();
  }
  //
  fetchMessages() {
    fetch(`http://localhost:3000/api/messages?subredditId=${this.state.currentSub}`)
    .then(response => response.json())
    .then(data => {
      this.setState({messages: data}, () => console.log(data));
    })
    .catch(err => console.log(err));
  }

  render() {
    console.log(this.state.messages)
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.app}>
        <PostList messages={this.state.messages}/>
      </View>
    );
  }
}

// <PostList navigation={this.props.navigation} messages={this.state.messages}/>
