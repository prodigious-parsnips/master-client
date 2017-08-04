import React from 'react';
import { StyleSheet, AlertIOS, Easing, View, FlatList, Text, TouchableOpacity, Button } from 'react-native';
import Swipeable from 'react-native-swipeable';
import PostPreview from './PostPreview';
import styles from '../styles';

export default PostList = (props) => {

  const rightButtons = [
    <TouchableOpacity style={styles.rightSwipeItem}>
      <Text>Pull to Upvote</Text>
    </TouchableOpacity>
  ];

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
          <Swipeable
            swipeReleaseAnimationConfig={{
              toValue: {x: 0, y: 0},
              duration: 250,
              easing: Easing.elastic(0.5)
            }}
            onRightActionRelease={() => AlertIOS.alert('UPVOTED')}
            rightActionActivationDistance={25}
            rightContent={rightButtons}
          >
            <TouchableOpacity style={styles.container} onPress={() => props.selectPost(item)}>
              <PostPreview title={item.title} upvotes={item.upvotes} subTitle={item.subreddit_id} author={item.user_id}/>
            </TouchableOpacity>
          </Swipeable>
        </View>
      )}/>

  </View>
)};



//
// <Button onPress={() => props.like(item.id)} title="Like"/>
// <Button onPress={() => props.selectSub(item.subreddit_id)} title="Go to map"/>
