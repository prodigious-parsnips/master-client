import React from 'react';
import { View, Text, StyleSheet, Image, TouchableHighlight } from 'react-native';
import faker from 'faker';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    marginLeft: 12,
    fontSize: 16,
  },
  photo: {
    height: 40,
    width: 40,
    borderRadius: 20,
  },
});

const MapRow = (props) => {
  console.log('this is the props in row ', props)
  return (
    <TouchableHighlight style={styles.container} onPress = { () => {props.onClick(props)} }>
    <View style={styles.container}>
      <Image source={{ uri: faker.internet.avatar()}} style={styles.photo} />
      <Text style={styles.text}>
        {props.mapData.title}
      </Text>
    </View>
    </TouchableHighlight>
  );
}

export default MapRow;