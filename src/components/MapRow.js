import React from 'react';
import { View, Text, StyleSheet, Image, TouchableHighlight } from 'react-native';
import faker from 'faker';

const styles = StyleSheet.create({
  outContainer: {
    flex: 1,
    padding: 6,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 4,
    borderWidth: .5,
    borderColor: '#b7bfcc',
  },
  inContainer: {
    flex: 1,
    padding: 6,
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
    <TouchableHighlight style={styles.outContainer} onPress = { () => {props.onClick(props)} }>
    <View style={styles.inContainer}>
      <Image source={{ uri: faker.internet.avatar()}} style={styles.photo} />
      <Text style={styles.text}>
        {props.mapData.title}
      </Text>
    </View>
    </TouchableHighlight>
  );
}

export default MapRow;
