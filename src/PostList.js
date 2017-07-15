import React from 'react';
import { Text, View, FlatList, Button } from 'react-native';

export default PostList = () => (
  <View>
    <Text>PostList!!!</Text>
    <FlatList
      data={[{key: 'a'}, {key: 'b'}, {key: 'c'}]}
      renderItem={({item}) => <Button
        title="View Post"
        color="#841584"
        accessibilityLabel="Learn more about this purple button" />
      }
    />
  </View>
);
