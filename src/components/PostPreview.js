import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from '../styles'
// export default class SubbedMap extends React.Component {
export default PostPreview = (props) => (
  <View style={styles.row}>
    <Image source={{uri: 'https://s-media-cache-ak0.pinimg.com/originals/3f/28/54/3f2854b8c2962f0938050ff775129d47.jpg'}}
    style={styles.image} />
  <Text>{props.title}</Text>
  </View>
);

