import React from 'react';
import { StyleSheet, Text, View, Slider, TextInput, ScrollView } from 'react-native';


export default class AdminSettings extends React.Component {
  constructor(props) {
    super(props);
    this.updateAdminThresholds = this.updateAdminThresholds.bind(this);
  }

  componentDidMount() {
    // fetch(`http://localhost:3000/api/settings?id=13`)
    // .then(response => response.json())
    // .then(data => {
    //   console.log('AdminSettings componentDidMount!! ',data);
    //
    // })
    // .catch(err => console.log(err));
    console.log('DMIN PROPS ', this.props)
  }

  updateAdminThresholds() {
    let form = {
      adminTitle: this.props.adminSettingsTitleText,
      adminDescription: this.props.adminSettingsDescriptionText,
      userPreferenceId: this.props.userId,
      upvoteThreshold: this.props.adminSettingsUpvoteThresholdValue,
      locationThreshold: this.props.adminSettingsDistanceThresholdValue,
      notificationLimit: this.props.adminSettingsNotifThresholdValue
    }

    console.log('FORM UPDATE ADMIN THRESHOLD!! ', form)

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
        <Text>AdminSettings Component</Text>
        <View style={styles.container}>

          <Text>Title:</Text>
          <TextInput style={styles.title} placeholder="Title"
            onChangeText={(title) => this.props.adminSettingsTitle(title)}
          />
          <Text>Description:</Text>
          <TextInput style={styles.description} placeholder="Description"
            onChangeText={(description) => this.props.adminSettingsDescription(description)}
          />

          <Text>Upvote Threshold: {this.props.adminSettingsUpvoteThresholdValue}</Text>
          <Slider style={{width:200}} maximumValue={10} step={1}
            value={this.props.adminSettingsUpvoteThresholdValue}
            onValueChange={(upvoteThreshold) => this.props.adminSettingsUpvoteThreshold(upvoteThreshold)}
            onSlidingComplete={(upvoteThreshold) => this.props.adminSettingsUpvoteThreshold(upvoteThreshold)}
            onSlidingComplete={this.updateAdminThresholds}
          />

          <Text>Distance Threshold: {this.props.adminSettingsDistanceThresholdValue}</Text>
          <Slider style={{width:200}} maximumValue={10} step={1}
            value={this.props.adminSettingsDistanceThresholdValue}
            onValueChange={(distanceThreshold) => this.props.adminSettingsDistanceThreshold(distanceThreshold)}
            onSlidingComplete={(distanceThreshold) => this.props.adminSettingsDistanceThreshold(distanceThreshold)}
            onSlidingComplete={this.updateAdminThresholds}
          />

          <Text>Daily Notification Limit: {this.props.adminSettingsNotifThresholdValue}</Text>
          <Slider style={{width:200}} maximumValue={10} step={1}
            value={this.props.adminSettingsNotifThresholdValue}
            onValueChange={(notifThreshold) => this.props.adminSettingsNotifThreshold(notifThreshold)}
            onSlidingComplete={(notifThreshold) => this.props.adminSettingsNotifThreshold(notifThreshold)}
            onSlidingComplete={this.updateAdminThresholds}
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
