import React from 'react';
import { StyleSheet, ScrollView, Text, View } from 'react-native';
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
        <Text style={styles.title}>{this.props.posts.currentPost.title}</Text>
        <Text style={styles.author}>{names[this.props.user.userData.id]}</Text>
        <View style={styles.text}>
          <Text>{this.props.posts.currentPost.text}</Text>
        </View>
        <CommentList comments={this.props.comments.commentList}/>
        <CreateComment
          submitComment={this.submitComment}
          updateComment={this.props.updateComment}
          />
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({

  title : {
    textAlign: 'center',
    fontWeight: 'bold',
    marginTop: 5,
  },
  text: {
    borderColor: 'gray',
    borderTopWidth: 1.5,
    borderBottomWidth: 1.5,
    padding: 8,
    fontSize: 10,
  },
  author: {
    fontSize: 10,
    fontWeight: 'bold',
    color: '#355282',
    marginBottom: 5,
    alignSelf: 'center',
  },
});

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

var names = [
  'Trey_Spinka',
  'Paris.Ledner',
  'Christelle_Bednar27',
  'Flavie_Wintheiser78',
  'Gudrun_Hammes84',
  'Emilio_McDermott',
  'Jayson.Ebert',
  'Ashton85',
  'Godfrey9',
  'Jamil_Grady33',
  'Bennie_Schulist',
  'Marjorie_Dooley',
  'Nelda_Kshlerin81',
  'Emmanuelle.Baumbach',
  'Ruben33',
  'Rosalinda.Smith22',
  'Seamus_Romaguera',
  'Cole.Hayes',
  'Noel54',
  'Fermin24',
  'Micah.Jast86',
  'Evert_Hand',
  'Marina_Rutherford99',
  'Alba_Cremin',
  'Marlee33',
  'Ally14',
  'Mavis_Reinger',
  'Joanne46',
  'Morris.Muller',
  'Hazel_Cassin97'
];

export default connect(mapStateToProps, mapDispatchToProps)(PostView);
