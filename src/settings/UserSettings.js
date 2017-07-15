import React from 'react';
import { Text, View, Slider } from 'react-native';

export default UserSettings = () => (
  <View>
    <Text>UserSettings!!!</Text>
    <View style={{flex: 1, flexDirection: 'column', alignItems: 'center'}}>
      <Text>Upvote Threshold</Text>
      <Slider style={{width:200}}/>
      <Text>Distance Threshold</Text>
      <Slider style={{width:200}}/>
      <Text>Notification Limit (daily)</Text>
      <Slider style={{width:200}}/>
    </View>
  </View>
);
