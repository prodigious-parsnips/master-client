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
  }

  componentDidMount() {
    this.fetchMessages();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.currentSub !== this.props.currentSub){
      this.fetchMessages();
    }
  }

  viewPost(post) {
    this.props.selectPost(post);
    this.props.navigation.navigate('PostView');
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
        <PickerIOS
          selectedValue={this.props.currentSub}
          onValueChange={(subId) => {
            this.props.selectSub(subId);
          }}
          >
          {this.props.userData ? this.props.userData.subreddits.map(el => (<PickerIOS.Item key={el.id} value={el.id} label={el.title} />)): null}
        </PickerIOS>
        <PostList messages={this.props.posts} selectPost={this.viewPost}/>
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
    selectSub: (itemValue) => dispatch({type: 'SELECT_SUB', itemValue: itemValue}),
    selectPost: post => dispatch({type: 'SELECT_POST', post: post}),
    loadPosts: () => dispatch({type: 'FETCH_POSTS_REQUEST'}),
    updatePosts: posts => dispatch({type: 'FETCH_POSTS_SUCCESS', posts: posts}),
    timeoutPosts: err => dispatch({type: 'FETCH_POSTS_FAILURE', err: err})
  });
};
export default connect(mapStateToProps, mapDispatchToProps)(SubbedMap);
// <PostList navigation={this.props.navigation} messages={this.state.messages}/>
