import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';
import Drawer from './src/Drawer.js'

import PostPreview from './src/PostPreview.js';
import PostList from './src/PostList.js';

// PASSING NAVIGATION AS PROPS: https://stackoverflow.com/a/44029481

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Home',
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.app}>
        <Text>Hello, Navigation App!</Text>

        <Button onPress={() => navigate('SignIn')} title="Sign In" />
        <Button onPress={() => navigate('CreatePosts')} title="Create Post" />
        <PostList navigation={this.props.navigation}/>
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
