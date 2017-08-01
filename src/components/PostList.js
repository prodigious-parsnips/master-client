import React from 'react';
import { View, FlatList, Text, TouchableOpacity } from 'react-native';
import PostPreview from './PostPreview';
import styles from '../styles';
export default PostList = (props) => {
  return (
  <View>
    <FlatList
      data={props.messages}
      keyExtractor={item => {
        return item.id
      }
    }
      renderItem={({item}) => (
        <TouchableOpacity style={styles.container} onPress={() => props.selectPost(item)}>
          <PostPreview title={item.title}/>
        </TouchableOpacity>
      )}/>
  </View>
)};

// onPress={() => navigate('Home', {title: this.props.messages.title, text: this.props.messages.text})}
