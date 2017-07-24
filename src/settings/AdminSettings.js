import React from 'react';
import { StyleSheet, Text, View, Slider, TextInput, ScrollView } from 'react-native';


export default class AdminSettings extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      upvoteThreshold: 0,
      distanceThreshold: 0,
    };
  }

  render() {
    return (
      <ScrollView>
        <Text>AdminSettings Component</Text>
        <View style={styles.component}>
          <Text>Title:</Text>
          <TextInput style={styles.title} placeholder="Title" />
          <Text>Description:</Text>
          <TextInput style={styles.description} placeholder="Description" />
          <Text>Upvote Threshold: {this.state.upvoteThreshold}</Text>
          <Slider style={{width:200}} maximumValue={10} step={1}
            value={this.state.upvoteThreshold}
            onValueChange={(upvoteThreshold) => this.setState({upvoteThreshold})} />

          <Text>Distance Threshold: {this.state.distanceThreshold}</Text>
          <Slider style={{width:200}} maximumValue={10} step={1}
            value={this.state.distanceThreshold}
            onValueChange={(distanceThreshold) => this.setState({distanceThreshold})} />

        </View>
      </ScrollView>
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
