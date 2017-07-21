import React from 'react';
import { StyleSheet, Text, View, FlatList, Button, TouchableOpacity } from 'react-native';
import { StackNavigator } from 'react-navigation';

import PostPreview from './PostPreview.js'

export default class PostList extends React.Component {

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <Text>PostList!!!</Text>
        <FlatList style={styles.list}
          data={[{key: 'a'}, {key: 'b'}, {key: 'c'}]}
          renderItem={({item}) => (
            <TouchableOpacity style={styles.container} onPress={() => navigate('PostView')}>
              <PostPreview />
            </TouchableOpacity>
          )}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  list: {
    backgroundColor: 'white'
  },
  container: {
    borderRadius: 4,
    borderWidth: 1.5,
    borderColor: 'black',
  },
});
