import React from 'react';
import { Text, View, Slider, TextInput } from 'react-native';

export default AdminSettings = () => (
  <View>
    <Text>AdminSettings Component</Text>
    <View style={{flex: 1, flexDirection: 'column', alignItems: 'center'}}>
      <Text>Title:</Text>
      <TextInput
        style={{height: 40, width:200, borderWidth: 1, borderRadius: 5}}
        placeholder="Title"
      />
      <Text>Description:</Text>
      <TextInput
        style={{height: 100, width:200, borderWidth: 1, borderRadius: 5}}
        placeholder="Description"
      />
      <Text>Upvote Threshold</Text>
      <Slider style={{width:200}}/>
      <Text>Distance Threshold</Text>
      <Slider style={{width:200}}/>
    </View>
  </View>
);
