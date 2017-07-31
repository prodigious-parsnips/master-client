import React from 'react';
import { View, Text, TextInput, Button, Slider } from 'react-native';



export default class CreateComment extends React.Component {
  render() {
    return (
      <View>
      <Text>CreatSub</Text>
        <TextInput placeholder="Title" />
        <TextInput placeholder="Descriptions" />
        <Text>Upvote Threshold: </Text>
        <Slider />

        <Text>Distance Threshold: </Text>
        <Slider />

        <Text>Daily Notification Limit: </Text>
        <Slider />
      </View>
    );
  }
}
