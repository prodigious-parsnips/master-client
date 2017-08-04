import React from 'react';
import { ScrollView, Text, PickerIOS, View, Button } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { connect } from 'react-redux';
import PostList from './PostList.js';
import styles from '../styles';
import SubredditList from './MapList';

class SubbedMap extends React.Component {

  static navigationOptions = { drawerIcon: () => <Icon name={'home'} size={20} color={'rgba(0, 124, 220, 100)'} /> }

  constructor(props) {
    super(props);
    this.viewPost = this.viewPost.bind(this);
    this.props.like = this.props.like.bind(this);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.currentSub !== this.props.currentSub){
      this.componentDidMount();
    }
  }

  componentDidMount() {
    if (!this.props.currentSub) {
      this.fetchLocal();
    } else {
      this.fetchMessages();
    }
  }

  subscribe() {

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
      <ScrollView style={styles.app}>
        {this.props.currentSub ? <Button title={'Subscribe'} onPress={this.props.subscribeToMap}/> : null}
        <PostList like={this.props.like} upvotes={10} messages={this.props.posts} selectPost={this.viewPost} selectSub={this.props.selectSub} />
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
    selectSub: (subId) => dispatch({type: 'SELECT_SUB', itemValue: subId}),
    like: (postId) => dispatch({type: 'LIKE', postId: postId}),
    selectPost: post => dispatch({type: 'SELECT_POST', post: post}),
    loadPosts: () => dispatch({type: 'FETCH_POSTS_REQUEST'}),
    updatePosts: posts => dispatch({type: 'FETCH_POSTS_SUCCESS', posts: posts}),
    timeoutPosts: err => dispatch({type: 'FETCH_POSTS_FAILURE', err: err}),
    newSubscription: () => dispatch({type: 'SUBSCRIBE_TO_MAP', mapId: this.props.currentSub})
  });
};
export default connect(mapStateToProps, mapDispatchToProps)(SubbedMap);
