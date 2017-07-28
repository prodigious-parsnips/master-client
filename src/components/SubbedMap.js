import React from 'react';
import { ScrollView, Text, PickerIOS } from 'react-native';
import { connect } from 'react-redux';
import PostList from './PostList.js';
import styles from '../styles';

class SubbedMap extends React.Component {

  componentDidMount() {
    this.fetchMessages();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.currentSub !== this.props.currentSub){
      this.fetchMessages();
    }
  }

  //
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
      <ScrollView style={styles.app}>
        <PickerIOS
          selectedValue={this.props.currentSub}
          onValueChange={(subId) => {
            this.props.selectSub(subId);
          }}
          >
          {this.props.userData ? this.props.userData.subreddits.map(el => (<PickerIOS.Item key={el.id} value={el.id} label={el.title} />)): null}
        </PickerIOS>
        <PostList messages={this.props.posts} selectPost={this.props.selectPost}/>
      </ScrollView>
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
    selectPost: postId => dispatch({type: 'SELECT_POST', id: postId}),
    loadPosts: () => dispatch({type: 'FETCH_POSTS_REQUEST'}),
    updatePosts: posts => dispatch({type: 'FETCH_POSTS_SUCCESS', posts: posts}),
    timeoutPosts: err => dispatch({type: 'FETCH_POSTS_FAILURE', err: err})
  });
};
export default connect(mapStateToProps, mapDispatchToProps)(SubbedMap);
// <PostList navigation={this.props.navigation} messages={this.state.messages}/>
