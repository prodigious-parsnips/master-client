import React from 'react';
import { ScrollView, FlatList, Text, TouchableOpacity } from 'react-native';
import PostPreview from './PostPreview';
import styles from '../styles';
export default PostList = (props) => {
  return (
  <ScrollView>
    <FlatList
      data={props.messages}
      keyExtractor={item => {
        return item.id
      }
    }
      renderItem={({item}) => (
        <TouchableOpacity style={styles.container} onPress={() => props.selectPost(item.id)}>
          <PostPreview title={item.title}/>
        </TouchableOpacity>
      )}/>
  </ScrollView>
)};

// onPress={() => navigate('Home', {title: this.props.messages.title, text: this.props.messages.text})}
