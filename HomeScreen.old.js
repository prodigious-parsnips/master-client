import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { Button } from 'react-native-elements';
import Drawer from './src/DrawerNav.js'
// var PushNotification = require('react-native-push-notification');
import PushNotification from 'react-native-push-notification';

import PostPreview from './src/PostPreview.js';
import PostList from './src/PostList.js';
// PASSING NAVIGATION AS PROPS: https://stackoverflow.com/a/44029481

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);

    this.testPush = this.testPush.bind(this);
  }

  static navigationOptions = {
    title: 'Home',
  };

  componentDidMount() {
    PushNotification.configure({
      // (required) Called when a remote or local notification is opened or received
      onNotification: function(notification) {
          console.log( 'NOTIFICATION:', notification );
      },
      // IOS ONLY (optional): default: all - Permissions to register.
      permissions: {
          alert: true,
          badge: true,
          sound: true
      },
      // Should the initial notification be popped automatically
      // default: true
      popInitialNotification: true,

      requestPermissions: true,
    });
  }


  testPush() { 
    PushNotification.localNotificationSchedule({
      message: "HereNow Notification Message", // (required)
      number: 1,
      date: new Date(Date.now() + (3 * 1000)) // in 3 secs
    });     
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.app}>
        <PostList navigation={this.props.navigation} fetchMessages={this.props.screenProps.fetchMessages} messages={this.props.screenProps.messages}/>
        <Button raised title='Test Push' onPress={this.testPush} />
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
