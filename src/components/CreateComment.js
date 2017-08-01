import React from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import Comment from './Comment.js';


export default class CreateComment extends React.Component {
  render() {
    return (
      <View>
        <Text>createComment</Text>
        <TextInput placeholder="Comment" onChangeText={this.props.updateComment}/>
        <Button title='Submit' onPress={this.props.submitComment} />
      </View>
    );
  }
}
