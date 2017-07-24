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
      auth: {
        signUp: {
          username: '',
          password: ''
        },
        signIn: {
          username: '',
          password: ''
        }
      }
    };
  }

  handleSignUpActions(type, text) {
    if(type === 'username') {
      this.setState((state)=>{
        let newAuth = state.auth;
        newAuth.signUp.username = text;
        return {auth: newAuth}
      })
    }
    if(type === 'password') {
      this.setState((state)=>{
        let newAuth = state.auth;
        newAuth.signUp.password = text;
        return {auth: newAuth}
      })
    }
    if(type === 'submit') {
      handleSignUpClick();
    }
  };

  handleSignUpClick(){
    console.log('handle sign up click is beign called!')
  }

  handleSignInActions(type, text) {
    if(type === 'username') {
      this.setState((state)=>{
        let newAuth = state.auth;
        newAuth.signIn.username = text;
        return {auth: newAuth}
      })
    }
    if(type === 'password') {
      this.setState((state)=>{
        let newAuth = state.auth;
        newAuth.signIn.password = text;
        return {auth: newAuth}
      })
    }
    if(type === 'submit') {
      handleSignInClick();
    }
  };

  handleSignInClick(){
    console.log('handle sign in click is beign called!')
  }


  componentDidMount() {
    fetch(`http://localhost:3000/api/user?id=3`)
    .then(response => response.json())
    .then(data => {
      this.setState({userData: data});
    })
    .catch(err => console.log(err));
  }

  render() {
    return <Stack screenProps={{
      userdata: this.state.userData, 
      handleSignUpActions: this.handleSignUpActions.bind(this),
      handleSignInActions: this.handleSignInActions.bind(this)
    }}/>
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
