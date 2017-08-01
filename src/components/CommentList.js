import React from 'react';
import { View, Text, FlatList } from 'react-native';
import Comment from './Comment.js';


export default class CommentList extends React.Component {
  render() {
    return (
      <View>
        <Text>comment list</Text>
          <FlatList
            data={this.props.comments}
            keyExtractor={item => item.id}
            renderItem={({item}) => (<Text>{item.text}</Text>)}/>
      </View>
    );
  }
}
