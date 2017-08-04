import React from 'react';
import { StyleSheet, Text, View, ScrollView, Slider } from 'react-native';
import defaultStyles from '../../styles';
export default class UserSettings extends React.Component {

  constructor(props) {
    super(props);
    this.updateUserThresholds = this.updateUserThresholds.bind(this);
  }

  componentDidMount() {
    console.log('USER SETTINGS PROPS!! ', this.props)
  }

  updateUserThresholds() {

    let form = {
      adminTitle: null,
      adminDescription: null,
      userPreferenceId: this.props.userId,
      upvoteThreshold: this.props.userSettingsUpvoteThresholdValue,
      locationThreshold: this.props.userSettingsDistanceThresholdValue,
      notificationLimit: this.props.userSettingsNotifThresholdValue
    }

    console.log('FORM UPDATE USER THRESHOLD!! ', form)

    fetch("http://localhost:3000/api/settings", {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(form)
    }).then((data) => {
      console.log('success from upvoteThreshold fetch!');
    }).catch((err) => {
      console.log('error from upvoteThreshold fetch ', err);
    })
  }


  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <Text>Upvote Threshold: {this.props.userSettingsUpvoteThresholdValue}</Text>
          <Slider style={{width:200}} maximumValue={10} step={1}
            value={this.props.userSettingsUpvoteThresholdValue}
            onValueChange={(upvoteThreshold) => this.props.userSettingsUpvoteThreshold(upvoteThreshold)}
            onSlidingComplete={(upvoteThreshold) => this.props.userSettingsUpvoteThreshold(upvoteThreshold) }
            onSlidingComplete={this.updateUserThresholds}
          />

          <Text>Distance Threshold: {this.props.userSettingsDistanceThresholdValue}</Text>
          <Slider style={{width:200}} maximumValue={10} step={1}
            value={this.props.userSettingsDistanceThresholdValue}
            onValueChange={(distanceThreshold) => this.props.userSettingsDistanceThreshold(distanceThreshold)}
            onSlidingComplete={(distanceThreshold) => this.props.userSettingsDistanceThreshold(distanceThreshold)}
            onSlidingComplete={this.updateUserThresholds}
          />

          <Text>Daily Notification Limit: {this.props.userSettingsNotifThresholdValue}</Text>
          <Slider style={{width:200}} maximumValue={10} step={1}
            value={this.props.userSettingsNotifThresholdValue}
            onValueChange={(notifThreshold) => this.props.userSettingsNotifThreshold(notifThreshold)}
            onSlidingComplete={(notifThreshold) => this.props.userSettingsNotifThreshold(notifThreshold)}
            onSlidingComplete={this.updateUserThresholds}
          />

        </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center'
  }
  
})
