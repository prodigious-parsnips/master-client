import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default PostPreview = () => (
  <View>
    <View style={styles.row}>
      <Image source={{uri: 'https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb'}}
      style={styles.image} />
      <Text style={styles.title}> Look at this cat!!! XD</Text>
    </View>
  </View>
);

var styles = StyleSheet.create({
  row: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    height: 100,
    width: 100,
    borderRadius: 50,
    borderWidth: .5,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
