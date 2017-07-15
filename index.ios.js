import React from 'react';
import { StyleSheet, Text, View, Button, AppRegistry, ScrollView} from 'react-native';
import Settings from './src/settings/Settings.js';
import ModalBar from './src/ModalBar.js';
import CreatePosts from './src/CreatePosts.js';
import PostList from './src/PostList.js';
import PostPreview from './src/PostPreview.js';
import PostView from './src/PostView.js';
import SignIn from './src/SignIn.js';


export default class AwesomeProject extends React.Component {



  render() {
    return (
      <ScrollView>
        <Text>This is Nick's phone!!</Text>
        <Settings />
        <ModalBar />
        <CreatePosts />
        <PostList />
        <PostPreview />
        <PostView />
        <SignIn />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
