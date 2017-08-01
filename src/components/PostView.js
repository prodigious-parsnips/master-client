import React from 'react';
import { ScrollView, Text } from 'react-native';
import { connect } from 'react-redux';
import CommentList from './CommentList.js';
import CreateComment from './CreateComment.js';


class PostView extends React.Component {
  constructor(props) {
    super(props);
    this.fetchComments = this.fetchComments.bind(this);
    this.submitComment = this.submitComment.bind(this);
  }

  fetchComments() {
    this.props.loadComments();
    fetch(`http://localhost:3000/api/messages?postId=${this.props.posts.currentPost.id}`)
    .then(response => response.json())
    .then(data => {
      this.props.updateComments(data);
    })
    .catch(err => this.props.commentSubmissionFailed(err));
  }

  submitComment() {
    this.props.submittingComment();
    fetch("http://localhost:3000/api/messages", {
      method: "POST",
      headers: {'Accept': 'application/json', 'Content-Type': 'application/json'},
      body: JSON.stringify({
        userId: this.props.user.userData.id,
        text: this.props.comments.userComment,
        title: '',
        geotag: 'Unknown',
        postId: this.props.posts.currentPost.id,
      }),
    })
    .then(response => response.json())
    .then(data => {
      this.props.updateComment();
      this.props.submittedComment();
      this.fetchComments();
    })
    .catch(err => this.props.commmentSubmissionFailed(err));

  }

  componentDidMount() {
    this.fetchComments();
  }

  render() {
    return (
      <ScrollView>
        <Text>PostView</Text>
        <Text>{this.props.posts.currentPost.title}</Text>
        <Text>{this.props.posts.currentPost.text}</Text>
        <CreateComment
          submitComment={this.submitComment}
          updateComment={this.props.updateComment}
          />
        <CommentList comments={this.props.comments.commentList}/>
      </ScrollView>
    );
  }
}

const mapStateToProps = store => store;
const mapDispatchToProps = dispatch => {
  return ({
    loadComments: () => dispatch({type: 'FETCH_COMMENTS_REQUEST'}),
    updateComments: commentList => dispatch({type: 'FETCH_COMMENTS_SUCCESS', commentList: commentList}),
    timeoutComments: err => dispatch({type: 'FETCH_COMMENTS_FAILURE', err: err}),
    submittingComment: () => dispatch({type: 'SUBMITTING_COMMENT'}),
    submittedComment: () => dispatch({type: 'SUBMITTED_COMMENT'}),
    commentSubmissionFailed: err => dispatch({type: 'COMMENT_SUBMISSION_FAILED', err: err}),
    updateComment: text => dispatch({type: 'UPDATE_COMMENT', text: text}),
  });
};
export default connect(mapStateToProps, mapDispatchToProps)(PostView);
