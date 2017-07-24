import React from 'react';
import { StyleSheet, Text, View, Button, AppRegistry, ScrollView} from 'react-native';
import { StackNavigator } from 'react-navigation';

import Settings from './src/settings/Settings.js';
import AdminSettings from './src/settings/AdminSettings.js';
import UserSettings from './src/settings/UserSettings.js';

import CreatePosts from './src/CreatePosts.js';
import PostList from './src/PostList.js';
import PostPreview from './src/PostPreview.js';
import PostView from './src/PostView.js';
import SignIn from './src/SignIn.js';
import Drawer from './src/DrawerNav.js';
import HomeScreen from './HomeScreen.js';

class AwesomeProject extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      userData: {},
    };


  }

  componentDidMount() {
    fetch(`http://localhost:3000/api/user?id=10`)
    .then(response => response.json())
    .then(data => {
      this.setState({userData: data});
      console.log(JSON.stringify(data, null, 2))
    })
    .catch(err => console.log(err));
  }

  render() {
    return <Stack screenProps={this.state.userData}/>
  }
}

const Stack = StackNavigator({
  Home: { screen: Drawer },
  Settings: { screen: Settings },
  AdminSettings: { screen: AdminSettings },
  UserSettings: { screen: UserSettings },
  PostView: { screen: PostView },
  SignIn: { screen: SignIn },
  CreatePosts: { screen: CreatePosts },
});

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
