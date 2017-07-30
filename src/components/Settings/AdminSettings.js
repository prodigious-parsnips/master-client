import React from 'react';
import { StyleSheet, Text, View, Slider, TextInput, ScrollView } from 'react-native';


export default class AdminSettings extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      upvoteThreshold: 0,
      distanceThreshold: 0,
      notifThreshold:0
    };

  }

  componentDidMount() {
    fetch(`http://localhost:3000/api/settings?id=13`)
    .then(response => response.json())
    .then(data => {
      console.log('AdminSettings componentDidMount!! ',data);

    })
    .catch(err => console.log(err));
  }


  // updateThresholds() {
  //   let form = {
  //     userPrefId: 1,
  //     upvoteThreshold: this.state.upvoteThreshold,
  //     locationThreshold: this.state.distanceThreshold
  //   }

  //     fetch("http://localhost:3000/api/settings", {
  //       method: "POST",
  //       headers: {
  //         'Accept': 'application/json',
  //         'Content-Type': 'application/json'
  //       },
  //       body: JSON.stringify(form)
  //     }).then((data) => {
  //       console.log('success from distanceThreshold fetch!');
  //     }).catch((err) => {
  //       console.log('error from distanceThreshold fetch ', err);
  //     })    
  //   }
  // }

  render() {
    return (
      <ScrollView>
        <Text>AdminSettings Component</Text>
        <View style={styles.container}>
          <Text>Title:</Text>
          <TextInput style={styles.title} placeholder="Title" />
          <Text>Description:</Text>
          <TextInput style={styles.description} placeholder="Description" />

          <Text>Upvote Threshold: {this.props.adminSettingsUpvoteThresholdValue}</Text>
          <Slider style={{width:200}} maximumValue={10} step={1}
            value={this.props.adminSettingsUpvoteThresholdValue}
            onValueChange={(upvoteThreshold) => this.props.adminSettingsUpvoteThreshold(upvoteThreshold)}
            onSlidingComplete={(upvoteThreshold) => this.props.adminSettingsUpvoteThreshold(upvoteThreshold)} />

          <Text>Distance Threshold: {this.props.adminSettingsDistanceThresholdValue}</Text>
          <Slider style={{width:200}} maximumValue={10} step={1}
            value={this.props.adminSettingsDistanceThresholdValue}
            onValueChange={(distanceThreshold) => this.props.adminSettingsDistanceThreshold(distanceThreshold)}
            onSlidingComplete={(distanceThreshold) => this.props.adminSettingsDistanceThreshold(distanceThreshold)} />

          <Text>Daily Notification Limit: {this.props.adminSettingsNotifThresholdValue}</Text>
          <Slider style={{width:200}} maximumValue={10} step={1}
            value={this.props.adminSettingsNotifThresholdValue}
            onValueChange={(notifThreshold) => this.props.adminSettingsNotifThreshold(notifThreshold)} 
            onSlidingComplete={(notifThreshold) => this.props.adminSettingsNotifThreshold(notifThreshold)} />          
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
