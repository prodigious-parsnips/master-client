import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from '../styles'
// export default class SubbedMap extends React.Component {
export default PostPreview = (props) => (
  <View style={styles.row}>
    <Text>{props.title}</Text>
  </View>
);
// 
// Image source={{uri: 'https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb'}}
//   style={styles.image} />
