import React from 'react';
import { StyleSheet, Text, View, Button, AppRegistry, ScrollView} from 'react-native';
import { StackNavigator } from 'react-navigation';
import { Toast } from 'native-base';

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
var FAKE_SUBREDDIT_ID = 2;

class AwesomeProject extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showToast: false,
      userId: null,
      userData: {},
      messages: [],
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

  componentDidMount() {
    fetch(`http://localhost:3000/api/user?id=${FAKE_SUBREDDIT_ID}`)
    .then(response => response.json())
    .then(data => {
      this.setState({userData: data}, () => {
        console.log("user data:", this.state.userData);
        this.fetchMessages();
      });
    })
    .catch(err => console.log(err));
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
      this.handleSignUpClick();
    }
  };

  handleSignUpClick(){
    fetch('http://localhost:3000/signup', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: this.state.auth.signUp.username,
        password: this.state.auth.signUp.password
      })
    })
    .then(response => response.json())
    .then(data => {
      this.setState({userId: data.id}, ()=>{console.log('this is the state after set ', this.state)})
    })
    .catch(err => {
      console.log(err);
    })
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
      this.handleSignInClick();
    }
  };

  handleSignInClick () {
    fetch('http://localhost:3000/login', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: this.state.auth.signIn.username,
        password: this.state.auth.signIn.password
      })
    })
    .then(response => response.json())
    .then(data => {
      if(data.fail){
        console.log('login failed!!!')
        Toast.show({
              text: 'Wrong info!',
              position: 'bottom',
              buttonText: 'Okay'
            })
        this.setState({userId: 'fail'})
      } else {
        console.log('login success!!!')
        this.setState({userId: data.id})
      }
    })
    .catch(err => {
      console.log(err);
    })

  };

  fetchMessages () {
    fetch(`http://localhost:3000/api/messages?subredditId=${this.state.userData.subreddits[0].id}`)
    .then(response => response.json())
    .then(data => {
      this.setState({messages: data});
      console.log('data from fetch messages', this.state.messages);
    })
    .catch(err => console.log(err));
  }


  render() {
    return <Stack screenProps={{
      handleSignUpActions: this.handleSignUpActions.bind(this),
      handleSignInActions: this.handleSignInActions.bind(this),
      userData:this.state.userData,
      fetchMessages: this.fetchMessages.bind(this),
      messages:this.state.messages
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
