import React from 'react';
import { View, FlatList, Text, TouchableOpacity, Button } from 'react-native';
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
        <View>
          <TouchableOpacity style={styles.container} onPress={() => props.selectPost(item)}>
            <PostPreview title={item.title} upvotes={item.upvotes} subTitle={item.subreddit_id} author={item.user_id}/>
          </TouchableOpacity>
        </View>
      )}/>
  </View>
)};

// onPress={() => navigate('Home', {title: this.props.messages.title, text: this.props.messages.text})}
