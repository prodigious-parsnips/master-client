import React from 'react';
import { Text, View, Image } from 'react-native';

export default PostPreview = () => (
  <View>
    <View style={{flex: 1, flexDirection: 'row'}}>
      <Image source={{uri: 'https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb'}}
      style={{width: 50, height: 50}} />
      <Text> Look at this cat!!! XD </Text>
    </View>
  </View>
);
