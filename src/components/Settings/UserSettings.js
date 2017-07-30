import React from 'react';
import { StyleSheet, Text, View, ScrollView, Slider } from 'react-native';

export default class UserSettings extends React.Component {

  constructor(props) {
    super(props);

    // this.state = {
    //   upvoteThreshold: 0,
    //   distanceThreshold: 0,
    //   notifThreshold: 0,
    // };
  }

  componentDidMount() {
    console.log('USER SETTINGS!! ', this.props.userSettingsUpvoteThresholdValue)
  }


  render() {
    return (
      <ScrollView>
        <Text>UserSettings Component</Text>
        <View style={styles.container}>
          <Text>Upvote Threshold: {this.props.userSettingsUpvoteThresholdValue}</Text>
          <Slider style={{width:200}} maximumValue={10} step={1}
            value={this.props.userSettingsUpvoteThresholdValue}
            onValueChange={(upvoteThreshold) => this.props.userSettingsUpvoteThreshold(upvoteThreshold)}
            onSlidingComplete={(upvoteThreshold) => this.props.userSettingsUpvoteThreshold(upvoteThreshold)} />

          <Text>Distance Threshold: {this.props.userSettingsDistanceThresholdValue}</Text>
          <Slider style={{width:200}} maximumValue={10} step={1}
            value={this.props.userSettingsDistanceThresholdValue}
            onValueChange={(distanceThreshold) => this.props.userSettingsDistanceThreshold(distanceThreshold)}
            onSlidingComplete={(distanceThreshold) => this.props.userSettingsDistanceThreshold(distanceThreshold)} />

          <Text>Daily Notification Limit: {this.props.userSettingsNotifThresholdValue}</Text>
          <Slider style={{width:200}} maximumValue={10} step={1}
            value={this.props.userSettingsNotifThresholdValue}
            onValueChange={(notifThreshold) => this.props.userSettingsNotifThreshold(notifThreshold)} 
            onSlidingComplete={(notifThreshold) => this.props.userSettingsNotifThreshold(notifThreshold)} />

        </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
  },
})
