import React from 'react';
import { ScrollView, Text, PickerIOS, View } from 'react-native';
import { connect } from 'react-redux';
import PostList from './PostList.js';
import styles from '../styles';
import SubredditList from './MapList';

class SubbedMap extends React.Component {
  constructor(props) {
    super(props);
    this.viewPost = this.viewPost.bind(this);
    this.props.like = this.props.like.bind(this);
  }

  componentDidMount() {
    if (!this.props.currentSub) {
      this.fetchLocal();
    } else {
      this.fetchMessages();
    }
  }

  viewPost(post) {
    this.props.selectPost(post);
    this.props.navigation.navigate('PostView');
  }

  fetchLocal() {
    this.props.loadPosts();
    fetch(`http://localhost:3000/api/messages`)
    .then(response => response.json())
    .then(data => {
      this.props.updatePosts(data);
    })
    .catch(err => console.log(err));
  }

  fetchMessages() {
    this.props.loadPosts();
    fetch(`http://localhost:3000/api/messages?subredditId=${this.props.currentSub}`)
    .then(response => response.json())
    .then(data => {
      this.props.updatePosts(data);
    })
    .catch(err => console.log(err));
  }

  render() {
    return (
      <View>
      <ScrollView style={styles.app}>
        <PostList like={this.props.like} messages={this.props.posts} selectPost={this.viewPost}/>
      </ScrollView>
      </View>
    );
  }
}

const mapStateToProps = store => (
  {
    nav: store.nav,
    userData: store.user.userData,
    posts: store.posts.postList,
    currentSub: store.user.currentSub,
  }
);
const mapDispatchToProps = dispatch => {
  return ({
    selectSub: (itemValue) => {
      console.log('this is item valuel in selectSub ', itemValue);
      dispatch({type: 'SELECT_SUB', itemValue: itemValue})
    },
    like: (messageId) => dispatch(type: 'LIKE', messageId: messageId ),
    selectPost: post => dispatch({type: 'SELECT_POST', post: post}),
    loadPosts: () => dispatch({type: 'FETCH_POSTS_REQUEST'}),
    updatePosts: posts => dispatch({type: 'FETCH_POSTS_SUCCESS', posts: posts}),
    timeoutPosts: err => dispatch({type: 'FETCH_POSTS_FAILURE', err: err})
  });
};
export default connect(mapStateToProps, mapDispatchToProps)(SubbedMap);
