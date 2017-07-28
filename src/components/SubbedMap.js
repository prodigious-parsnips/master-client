import React from 'react';
import { ScrollView, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import PostList from './PostList.js';
import styles from '../styles';

class SubbedMap extends React.Component {
  constructor(props) {
    super(props);
  }
  //
  // componentDidUpdate(pProps, pState) {
  //   if (this.getSubId() !== pState.currentSub) {
  //     this.setState({currentSub: this.getSubId()}, this.fetchMessages);
  //   }
  // }
  //
  componentDidMount() {
    this.fetchMessages();
  }
  //
  fetchMessages() {
    this.props.loadPosts();
    var defaultSubId = this.props.subs.list ? this.props.subs.list[0].id : 1;

    //because the sample data maps weird, default will be overwritten to a sub with sample posts
    defaultSubId = 4;

    console.log('\nTHIS IS PROPS IN SubbedMap\n'+ JSON.stringify(this.props, null, 2));
    fetch(`http://localhost:3000/api/messages?subredditId=${defaultSubId}`)
    .then(response => response.json())
    .then(data => {
      this.props.updatePosts(data);
    })
    .catch(err => console.log(err));
  }
  // 
  // selectPost() {
  //   console.log('thisIs');
  //   //this.props.selectPost(id)
  // }

  render() {
    return (
      <ScrollView style={styles.app}>
        <PostList messages={this.props.posts.list} selectPost={this.props.selectPost}/>
      </ScrollView>
    );
  }
}
// <Text>{JSON.stringify(this.props, null, 2)}</Text>

const mapStateToProps = store => store;
const mapDispatchToProps = dispatch => {
  return ({
    selectPost: postId => dispatch({type: 'SELECT_POST', id: postId}),
    loadPosts: () => dispatch({type: 'FETCH_POSTS_REQUEST'}),
    updatePosts: posts => dispatch({type: 'FETCH_POSTS_SUCCESS', posts: posts}),
    timeoutPosts: err => dispatch({type: 'FETCH_POSTS_FAILURE', err: err})
  });
};
export default connect(mapStateToProps, mapDispatchToProps)(SubbedMap);
// <PostList navigation={this.props.navigation} messages={this.state.messages}/>
