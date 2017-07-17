import React from 'react';
import { Text, View, Button, FlatList, TouchableOpacity } from 'react-native';
import { StackNavigator } from 'react-navigation';

import PostPreview from './src/PostPreview.js';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Home',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <Text>Hello, Navigation App!</Text>
        <Button
          onPress={() => navigate('SignIn')}
          title="Sign In"
        />
        <Button
          onPress={() => navigate('CreatePosts')}
          title="Create Post"
        />
        <Button
          onPress={() => navigate('Settings')}
          title="View Settings"
        />
        <Text>PostList!!!</Text>
        <FlatList
          data={[{key: 'a'}, {key: 'b'}, {key: 'c'}]}
          renderItem={({item}) => (
            <TouchableOpacity>
              <PostPreview />
              <Button
              title="View Post"
              color="#841584"
              onPress={() => navigate('PostView')} />
            </TouchableOpacity>
            )
          }
        />
      </View>
    );
  }
}
