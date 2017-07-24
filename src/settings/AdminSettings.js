import React from 'react';
import { StyleSheet, Text, View, Slider, TextInput } from 'react-native';

export default class AdminSettings extends React.Component {
  render() {
    return (
      <View>
        <Text>AdminSettings Component</Text>
        <View style={styles.component}>
          <Text>Title:</Text>
          <TextInput style={styles.title} placeholder="Title" />
          <Text>Description:</Text>
          <TextInput style={styles.description} placeholder="Description" />
          <Text>Upvote Threshold</Text>
          <Slider style={{width:200}}/>
          <Text>Distance Threshold</Text>
          <Slider style={{width:200}}/>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  component: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
  },
  title: {
    height: 40,
    width: 200,
    borderWidth: 1,
    borderRadius: 5,
  },
  description: {
    height: 100,
    width: 200,
    borderWidth: 1,
    borderRadius: 5,
  },
})
