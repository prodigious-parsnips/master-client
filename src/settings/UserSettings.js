import React from 'react';
import { StyleSheet, Text, View, ScrollView, Slider } from 'react-native';

export default class UserSettings extends React.Component {

  constructor(props) {
    super(props);

    this.state = {

    };
  }

  render() {
    return (
      <ScrollView>
        <Text>UserSettings Component</Text>
        <View style={{flex: 1, flexDirection: 'column', alignItems: 'center'}}>
          <Text>Upvote Threshold</Text>
          <Slider style={{width:200}}/>
          <Text>Distance Threshold</Text>
          <Slider style={{width:200}}/>
          <Text>Notification Limit (daily)</Text>
          <Slider style={{width:200}}/>
        </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({

})
